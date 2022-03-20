import React from "react";
import s from './ReviewPopup.module.css'
import closeIcon from '../../../../icons/close.svg'
import infoSquare from '../../../../icons/infoSquare.svg'
import {useState} from "react";

function ReviewPopup(props) {
    let newName = React.createRef()
    let newReviewText = React.createRef()

    const [inputName, updateInputName] = useState('')
    const [inputReviewText, updateInputReviewText] = useState('')

    return (
        <div className={s.body}>
            <h1>Отзыв</h1>
            <h2 className={s.whatsYourName}>Как вас зовут?</h2>
            <button className={s.closeBtn} onClick={() => {
                props.setActive(false)
                updateInputName('')
                updateInputReviewText('')
                }}>
                <img src={closeIcon} alt="closeWindow"/>
            </button>

            <input type="text" name="username" id="user" placeholder="Имя Фамилия" onChange={() => updateInputName(newName.current.value)} ref={newName} value={inputName}/>

            <button className={s.addPhoto}>
                <div className={s.icon} />
                <div className={s.text}>Загрузить фото</div>
            </button>
            <h2 className={s.isEverythingIsGood}>Все ли вам понравилось?</h2>

            <div className={s.reviewField}>
                <textarea placeholder="Напишите пару слов о вашем опыте..." onChange={() => updateInputReviewText(newReviewText.current.value)} ref={newReviewText} value={ inputReviewText }></textarea>
                <div className={s.counter}>
                    <span>0/200</span>
                </div>
            </div>

            <button className={s.sendReview}>
                <div className={s.text}>Отправить отзыв</div>
            </button>
            <div className={s.infoImg}>
                <img src={infoSquare} alt="infoImg"/>
            </div>
            <div className={s.infoText}>
                Все отзывы проходят модерацию в течение 2 часов
            </div>
        </div>

    );
}

export default ReviewPopup;
