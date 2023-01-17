import React from 'react'
import '../Modal/Modal.scss'

const Modal = () => {
  return (
    <div className='modal'>
        <div className='modal__wrapper'>
            <h3 className='modal__wrapper-title'>Отправить картинку</h3>
            <form className='modal__form' action="">
                <div className='modal__group'>
                    <input type="text" />
                    <span></span>
                    <label htmlFor="">URL</label>
                </div>
                <div className="modal__group">
                    <input type="text" />
                    <span></span>
                    <label htmlFor="">Комментарий</label>
                </div>
            </form>
            <div className='modal__btns'>
                <button>Отмена</button>
                <button>ОТПРАВИТЬ</button>
            </div>
        </div>
    </div>
  )
}

export default Modal