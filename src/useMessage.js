import { useState, useEffect } from 'react'

const useMessage = (initState = []) => {
  const [messages, setMessages] = useState(initState)
  const [showMoreButton, setShowMoreButton] = useState(false)

  let url = 'http://127.0.0.1:8000/globalmessages/'

  useEffect(()=> {
    getMessages()
  },[]) // eslint-disable-line

  const getMessages = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMessages(data)
      })
      .catch(error => {
        console.log(error)
      }) 
  }

  const closeButton = e => {
    e.target.parentElement.style.display = 'none'
  }

  const showDescription = id => {
    setShowMoreButton(!showMoreButton)
    const description = document.getElementById('alertDescription'+id)
    const showMoreBtn = document.getElementById('showMoreBtn'+id)
    description.style.display = showMoreButton ? 'none': 'block'
    showMoreBtn.innerHTML = showMoreButton ? 'Show more': 'Show less'
  }

  return {
    messages,
    showMoreButton,
    closeButton,
    showDescription
  }
}

export default useMessage
