import React from 'react'
import './Right.scss'
import right from '../../assets/images/second.png'
import './fonts.css'
import Icons from '../../assets//icons/Icons'

const Right = ({addMsgs, message, messages,setMessages,values ,setValues, time,handleOnChangeMsgs}) => {
  return (
    <div className='right'>
      <div className='right__user'>
          <img src={right} className='right__user-img' alt="" />
          <div >
              <h1 className='right__user-name'>Евгений</h1>
              <span>Онлайн</span>
            </div>
            </div>
            <div className='right__message'>
          {message.map(msg => (
            <p className='right__message-oponent'>{msg.value}
            <span>{time}</span></p>
          ))}
          
        </div>
        <div className='right__send'>
              <form action="">
                <input  type="text" placeholder='Написать сообщение...' />
                <button ><Icons id='send' /></button>
              </form>
        </div>
      
    </div>
  )
}

export default Right