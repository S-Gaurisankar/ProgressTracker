import React, { useState } from 'react'
import styles from '../styles/chatScreen.module.css'
import { useQuery } from '../context/QueryContext';

const ChatScreen = () => {
  const { setQuery } = useQuery();
  const [inputValue, setInputValue] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setQuery(inputValue);
    setInputValue('');
  }

  return (
    <>
    <div className={styles.chatContainer}>
        <p className={styles.chatHeader}>What's On your Mind?</p>
        <div className={styles.messageContainer}>
          <form action="">
            <input type="text" placeholder="Type your query here..." className={styles.messageInput}
            onChange={(e) => setInputValue(e.target.value)}/>
            <button className={styles.messageButton} onClick={handleSubmission}>Ask</button>
          </form>
        </div>
    </div>
    </>
  )
}

export default ChatScreen
