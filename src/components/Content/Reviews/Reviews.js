import s from './Reviews.module.css'
import ReviewItem from "./ReviewItem/ReviewItem";
import Popup from "../../Popup/Popup";
import ReviewPopup from "./ReviewPopup/ReviewPopup";

import {useState} from "react";

function Reviews(props) {

    let reviewAmount = props.reviews.length

    const [reviewPageCounter, changeReviewPageCounter] = useState(0)
    const [popupActive, setPopupActive] = useState()
    const [firstReview, updateFirstReview] = useState(props.reviews[reviewPageCounter])
    const [secondReview, updateSecondReview] = useState(props.reviews[reviewPageCounter+1])
    const [backBtnClasses, updateBackBtnClasses] = useState(`${s.backBtn} ${s.nonActiveButton}`)
    const [forwardBtnClasses, updateForwardBtnClasses] = useState(`${s.forwardBtn} ${s.activeButton}`)
    const [backArrowOpacity, setBackArrowOpacity] = useState({opacity: 0.5})
    const [forwardArrowOpacity, setForwardArrowOpacity] = useState({opacity: 1})
    let Slider = []

    setSlider(reviewPageCounter)


    const nextReviews = () => {
        if ((reviewPageCounter + 1) * 2 >= reviewAmount) return
        if ((reviewPageCounter + 2) * 2 >= reviewAmount) {
            updateForwardBtnClasses(`${s.forwardBtn} ${s.nonActiveButton}`)
            setBackArrowOpacity({opacity: 0.5})
        }
        changeReviewPageCounter(reviewPageCounter + 1)
        setSlider(reviewPageCounter)
        updateFirstReview(props.reviews[reviewPageCounter + 2])
        updateSecondReview(props.reviews[reviewPageCounter + 3])
        updateBackBtnClasses(`${s.backBtn} ${s.activeButton}`)
        setBackArrowOpacity({opacity: 1})
    }
    const previousReviews = () => {
        if (reviewPageCounter == 0) return
        if ((reviewPageCounter - 1) == 0) {
            updateBackBtnClasses(`${s.backBtn} ${s.nonActiveButton}`)
            setForwardArrowOpacity({opacity: 0.5})
        }
        changeReviewPageCounter(reviewPageCounter - 1)
        setSlider(reviewPageCounter)
        updateFirstReview(props.reviews[reviewPageCounter - 1])
        updateSecondReview(props.reviews[reviewPageCounter])
        updateForwardBtnClasses(`${s.forwardBtn} ${s.activeButton}`)
        setForwardArrowOpacity({opacity: 1})
    }

    let Sliders = [
            <div className={s.reviewSliderActive} />,
            <div className={s.reviewSliderNoneActive} />,
            <div className={s.reviewSliderNoneActive} />,
            <div className={s.reviewSliderNoneActive} />,
            <div className={s.reviewSliderNoneActive} />
        ]

    function setSlider(mainPosition) {
        let ElementsList = []
        Slider = []
        //setSliderPosition(ElementsList)
        for (let i = 0; i < mainPosition; i++) ElementsList.push(<div className={s.reviewSliderNoneActive} />,)
        ElementsList.push(<div className={s.reviewSliderActive} />,)
        for (let i = (mainPosition + 1); i < reviewAmount/2; i++) ElementsList.push(<div className={s.reviewSliderNoneActive} />,)
        Slider = ElementsList
    }

    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button onClick={() => setPopupActive(true)} className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>

            <Popup active={ popupActive } setActive={ setPopupActive }>
                <ReviewPopup setActive={ setPopupActive } addReview={ props.addReview } updateReviewerPhoto={ props.updateReviewerPhoto }/>
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
                {Slider}
            </div>
            <div className={s.reviewsButtons}>
                <button className={ backBtnClasses } onClick={previousReviews}>
                    <div className={s.backButtonArrow} style={backArrowOpacity}/>
                </button>
                <button className={ forwardBtnClasses } onClick={nextReviews}>
                    <div className={s.forwardButtonArrow} style={forwardArrowOpacity}/>
                </button>
            </div>


        </div>

    );
}

export default Reviews;
