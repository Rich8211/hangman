import React, { useEffect } from 'react'
import './WrongLetters.css'

const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            {wrongLetters.length > 0 &&
            <div id="wrong-letters">
                <p>Wrong</p>
                {wrongLetters.map((letter, i) => {
                    return i === wrongLetters.length - 1 ?
                    <span key={i}>{letter}</span>
                    :
                    <span key={i}>{`${letter}, `}</span>
                }
                )}
            </div>
            }
        </div>
    )
}

export default WrongLetters
