import React, { useState, useEffect } from 'react'
import HangManFigure from './components/HangManFigure/HangManFigure';
import Popup from './components/popup/Popup';
import Word from './components/Word/Word';
import WrongLetters from './components/WrongLetters/WrongLetters';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {

  const words = ['application', 'programming', 'interface', 'wizard'];
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [popup, setPopup] = useState(false);
  const [notification, setNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random()*words.length)]);
  const [popupText, setPopupText] = useState('');

  

  const handleKeyDown = e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;

      if (wrongLetters.includes(letter) || correctLetters.includes(letter)) {
        setNotification(true);
      }
      if (selectedWord.includes(letter) && !correctLetters.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      }  
      if (!selectedWord.includes(letter) && !wrongLetters.includes(letter)) {
        setWrongLetters([...wrongLetters, letter]);
      }
    
    } 
  };

  useEffect(() => {
    if (notification === false) return;
    const timer = setTimeout(() => {
      setNotification(false)
    }, 2000)
    return () => clearTimeout(timer);
  }, [notification])

  useEffect(() => {
    if (wrongLetters.length === 6) {
      setPopupText('You lost! :(')
      setPopup(true);
    }
  }, [wrongLetters]);

  useEffect(() => {
  
    const correctWord = selectedWord.split('').filter(letter => correctLetters.includes(letter)).join('');
    if (correctWord === selectedWord) {
      setPopupText('You won! :D')
      setPopup(true);
    }

  }, [correctLetters])

  const handleReset = (e) => {
    setSelectedWord(words[Math.floor(Math.random()*words.length)]);
    setWrongLetters([]);
    setCorrectLetters([]);
    setPopup(false);
    setPopupText('');
    setNotification(false);
  }



  return (
    <div className="App" tabIndex="1" onKeyDown={wrongLetters.length !== 6 ? handleKeyDown : null}>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <div className="game-container">
        <HangManFigure letters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      {popup && <Popup message={popupText} handleClick={handleReset}/>}
      <Notification notification={notification}/>
    </div>
  );
}

export default App;
