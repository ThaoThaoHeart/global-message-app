import Message from './Message'
import useMessage from './useMessage'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

const Messages = () => {
  
  const { name } = useParams()
  const { messages, showMoreButton, closeButton, showDescription} = useMessage()

  // Tenant - Show if tenant.slugs are equal
  // Login only notifs

  useEffect(()=>{

  })
  
  return (
    <>
      {messages.map((message, i)=>{


        return <Message key={i} id={i} message={message} showMoreButton={showMoreButton} closeButton={closeButton} showDescription={showDescription}/>
      })}
    </>
  );
}

export default Messages;