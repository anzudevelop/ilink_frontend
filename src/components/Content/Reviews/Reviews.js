import s from './Reviews.module.css'
import ReviewItem from "./ReviewItem/ReviewItem";

function Reviews(props) {
    let Click = () => {
        console.log('click')
    }

    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button onClick={Click} className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>

            <ReviewItem profileStyle={s.reviewBody_1} review={ props.reviews[0] }/>
            <ReviewItem profileStyle={s.reviewBody_2} review={ props.reviews[1] }/>

            <div className={s.reviewSlider}>
                <div className={s.reviewSliderActive} />
                <div className={s.reviewSliderNoneActive} />
                <div className={s.reviewSliderNoneActive} />
            </div>
            <div className={s.reviewsButtons}>
                <button onClick={Click} className={`${s.backBtn} ${s.nonActiveButton}`} />
                <div className={s.backButtonArrow} />
                <button onClick={Click} className={`${s.forwardBtn} ${s.activeButton}`} />
                <div className={s.forwardButtonArrow} />
            </div>

        </div>

    );
}

export default Reviews;
