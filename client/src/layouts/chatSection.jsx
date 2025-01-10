import React from 'react'
import styles from '../styles/chatSection.module.css'
import ChatScreen from '../components/chatScreen.jsx'

const ChatSection = () => {
  return (
    <div className={styles.container}>
      <ChatScreen />
    </div>
  )
}

export default ChatSection
