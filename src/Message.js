import { TiWarning } from 'react-icons/ti'
import './style.css'

const Message = (props) => {

  return (
    <div className={`alert ${props.message.type}`}>
      {props.message.type === 'warning' ? <TiWarning/>: ''}

      <strong>{props.message.title}</strong>

      <div id={`alertDescription${props.id}`} className='alertDescription'>{props.message.message}</div>
      <div id={`showMoreBtn${props.id}`} className='showMoreBtn'onClick={()=>props.showDescription(props.id)}>
        Show more
      </div>

      <div className='closebtn' onClick={props.closeButton}>&times;</div>
    </div>
  )
}

export default Message
