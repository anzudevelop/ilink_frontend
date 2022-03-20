import s from './SuccessReviewSendPopup.module.css'
import popupImg from '../../../icons/popups/successReviewPopup.svg'

function SuccessReviewSendPopup({children}) {
    return (
        <div className={s.popupArea}>
            <img src={popupImg} alt="successReview"/>
            { children }
        </div>
    );
}

export default SuccessReviewSendPopup;
