import s from './ErrorReviewSendPopup.module.css'
import popupImg from "../../../icons/popups/errorReviewPopup.svg";

function ErrorReviewSendPopup({children}) {
    return (
        <div className={s.popupArea}>
            <img src={popupImg} alt="successReview"/>
            { children }
        </div>
    );
}

export default ErrorReviewSendPopup;
