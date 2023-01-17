import React, {useState} from 'react'
import './Left.scss'
import left from '../../assets/images/first.png'
import Icons from '../../assets/icons/Icons'
import './fonts.css'





const Left = ({ addMsg,value, setValue, time, handleOnChangeMsg, message, setMessage }) => {
  
  

  
  
  





  return (
    <div className='left'>
        <div className='left__user'>
            <img className='left__user-img' src={left} alt="" />
            <div >
              <h1 className='left__user-name'>Александр</h1>
              <span>Онлайн</span>
            </div>
        </div>
        <div className='left__message'> 
          {message.map(msg =>  (
            <p className='left__message-user'>
            {msg.value}
            <span>{time}</span></p>
          ))}
        </div>
        <div className='left__send'>
              <form action="">
                <input onChange={handleOnChangeMsg} value={value} type="text" placeholder='Написать сообщение...' />
                <button onClick={addMsg}>{value ? <Icons id='send' />: <Icons id='photo' />}</button>
              </form>
        </div>
    </div>
  )
}

export default Left