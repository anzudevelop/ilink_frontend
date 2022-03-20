import s from './ReviewPopup.module.css'
import closeIcon from '../../../../icons/close.svg'
import infoSquare from '../../../../icons/infoSquare.svg'

function ReviewPopup(props) {

    return (
        <div className={s.body}>
            <h1>Отзыв</h1>
            <h2 className={s.whatsYourName}>Как вас зовут?</h2>
            <button className={s.closeBtn} onClick={() => props.setActive(false)}>
                <img src={closeIcon} alt="closeWindow"/>
            </button>
            <div className={s.textField}>
                <input className={s.textFieldInput} type="text" name="username" id="user" placeholder="Имя Фамилия" />
            </div>
            <button className={s.addPhoto}>
                <div className={s.icon} />
                <div className={s.text}>Загрузить фото</div>
            </button>
            <h2 className={s.isEverythingIsGood}>Все ли вам понравилось?</h2>



            <div className={s.reviewField}>
                <textarea placeholder="Напишите пару слов о вашем опыте..."></textarea>
                <div className={s.counter}>
                    <span>0/200</span>
                </div>
            </div>

            <div className={s.bottom}>
                <button className={s.sendReview}>
                    <div className={s.text}>Отправить отзыв</div>
                </button>
                <img src={infoSquare} alt="infoImg"/>
                <div className={s.infoText}>
                    Все отзывы проходят модерацию в течение 2 часов
                </div>
            </div>
        </div>

    );
}

export default ReviewPopup;
