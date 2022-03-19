import s from './ReviewItem.module.css'

function ReviewItem(props) {
    return (
        <div className={props.profileStyle}>
            <div className={s.profileIcon}/>
            <div className={s.profileName}>{ props.review.name } { props.review.surname }</div>
            <div className={s.reviewDate}>{ props.review.reviewDate }</div>
            <div className={s.reviewText}>{ props.review.reviewText }</div>
        </div>
    );
}

export default ReviewItem;
