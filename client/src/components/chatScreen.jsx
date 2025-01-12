import React, { useState } from 'react'
import styles from '../styles/chatScreen.module.css'
import { useQuery } from '../context/QueryContext';

const ChatScreen = () => {
  const { setQuery, query } = useQuery();
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(''); // Clear previous response
    setQuery(inputValue);

    try {
      const res = await fetch("https://taskappai.onrender.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Error: Unable to connect to the AI service.");
    } finally {
      setLoading(false);
      setInputValue('');
    }
  }

  const handleReset = () => {
    setQuery('');
    setInputValue('');
    setResponse('');
  }

  return (
    <>
    <div className={styles.chatContainer}>
        <h2 className={styles.chatTitle}>AI Assistant</h2>
        <p className={styles.chatIntro}>Simplify task management with our AI</p>
        <p className={styles.chatIntroSecondary}>Ask anything about your tasks!</p>
        <div className={styles.lowerContent}>
          <p className={styles.chatHeader}>What's On your Mind?</p>
          <div className={styles.messageContainer}>
            <form action="">
              <input 
                type="text" 
                placeholder="Type your query here..." 
                className={styles.messageInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                className={styles.messageButton} 
                onClick={handleSubmission}
                disabled={loading}
              >
                {loading ? "Processing..." : "Ask AI"}
              </button>
              {query && <button className={styles.resetButton} onClick={handleReset}>End Chat</button>}
            </form>
          </div>
          {response && (
            <div className={styles.responseContainer}>
              <h3 className={styles.responseHeader}>AI Response:</h3>
              <pre className={styles.responseText}>
                {response}
              </pre>
            </div>
          )}
        </div>
    </div>
    </>
  )
}

export default ChatScreen
