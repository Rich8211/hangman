import React from 'react'
import './Popup.css'

const Popup = ({message, handleClick}) => {
    return (
        <div className="popup-container" id="popup-container">
            <div className="popup">
                <h2 id="final-message">{message}</h2>
                <button onClick={handleClick} id="play-again">Play Again</button>
            </div>
        </div>
    )
}

export default Popup
 