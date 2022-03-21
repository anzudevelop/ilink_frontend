import s from './Reviews.module.css'
import ReviewItem from "./ReviewItem/ReviewItem";
import Popup from "../../Popup/Popup";
import ReviewPopup from "./ReviewPopup/ReviewPopup";

import {useState} from "react";

function Reviews(props) {

    const [popupActive, setPopupActive] = useState()
    const [firstReview, updateFirstReview] = useState(props.reviews[0])
    const [secondReview, updateSecondReview] = useState(props.reviews[1])

    const nextReviews = () => {
        updateFirstReview(props.reviews[2])
        updateSecondReview(props.reviews[3])
    }

    const previousReviews = () => {
        updateFirstReview(props.reviews[0])
        updateSecondReview(props.reviews[1])
    }

    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button onClick={() => setPopupActive(true)} className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>


            <Popup active={ popupActive } setActive={ setPopupActive }>
                <ReviewPopup setActive={ setPopupActive } addReview={ props.addReview }/>
            </Popup>

            <div className={s.reviewsWindow}>
                <div className={s.firstReviewItem}>
                    <ReviewItem review={ firstReview }/>
                </div>
                <div className={s.secondReviewItem}>
                    <ReviewItem review={ secondReview }/>
                </div>
            </div>




            <div className={s.reviewSlider}>
                <div className={s.reviewSliderActive} />
                <div className={s.reviewSliderNoneActive} />
                <div className={s.reviewSliderNoneActive} />
            </div>
            <div className={s.reviewsButtons}>
                <button className={`${s.backBtn} ${s.nonActiveButton}`} onClick={nextReviews}>
                    <div className={s.backButtonArrow} />
                </button>
                <button className={`${s.forwardBtn} ${s.activeButton}`} onClick={previousReviews}>
                    <div className={s.forwardButtonArrow} />
                </button>
            </div>


        </div>

    );
}

export default Reviews;
