import React, {useEffect, useState} from 'react';


import './Notification.css';

const Notification = ({notification}) => {

    const [notificationClass, setNotificationClass] = useState('');

    useEffect(() => {
        if (notification === true) {
          setNotificationClass('show');
        } else setNotificationClass('');
      },[notification])
    
    // useEffect(() => {
    //     if (notificationClass === '') return;
    //     const timer = setTimeout(() => {
    //         setNotificationClass('')
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // },[notificationClass])

    return (
        <div className={`notification-container ${notificationClass}`} id="notification-container">
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
