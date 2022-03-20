import s from './Reviews.module.css'
import ReviewItem from "./ReviewItem/ReviewItem";
import Popup from "../../Popup/Popup";
import ReviewPopup from "./ReviewPopup/ReviewPopup";

import {useState} from "react";

function Reviews(props) {
    let Click = () => {
        console.log('click')
    }

    const [popupActive, setPopupActive] = useState()

    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button onClick={() => setPopupActive(true)} className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>


            <Popup active={ popupActive } setActive={ setPopupActive }>
                <ReviewPopup setActive={ setPopupActive }/>
            </Popup>


            <ReviewItem profileStyle={s.reviewBody_1} review={ props.reviews[0] }/>
            <ReviewItem profileStyle={s.reviewBody_2} review={ props.reviews[1] }/>

            <div className={s.reviewSlider}>
                <div className={s.reviewSliderActive} />
                <div className={s.reviewSliderNoneActive} />
                <div className={s.reviewSliderNoneActive} />
            </div>
            <div className={s.reviewsButtons}>
                <button onClick={Click} className={`${s.backBtn} ${s.nonActiveButton}`}>
                    <div className={s.backButtonArrow} />
                </button>
                <button onClick={Click} className={`${s.forwardBtn} ${s.activeButton}`}>
                    <div className={s.forwardButtonArrow} />
                </button>
            </div>


        </div>

    );
}

export default Reviews;
