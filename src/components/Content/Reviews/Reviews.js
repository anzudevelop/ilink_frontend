import s from './Reviews.module.css'
import ReviewItem from "./ReviewItem/ReviewItem";

function Reviews() {
    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>

            <ReviewItem profileStyle={s.reviewBody_1}/>
            <ReviewItem profileStyle={s.reviewBody_2}/>

            <div className={s.reviewSlider}>
                <div className={s.reviewSliderActive} />
                <div className={s.reviewSliderNoneActive} />
                <div className={s.reviewSliderNoneActive} />
            </div>

            <button className={`${s.backBtn} ${s.nonActiveButton}`}>
                <div className={s.backButtonArrow} />
            </button>
            <button className={`${s.forwardBtn} ${s.activeButton}`}>
                <div className={s.forwardButtonArrow} />
            </button>
        </div>

    );
}

export default Reviews;
