import s from './Content.module.css'
import ProfileInfo from "./ProfileInfo/Profileinfo";
import Reviews from "./Reviews/Reviews";

function Content(props) {
    return (
        <div className={s.contentPage}>
            <div className={s.contentPageBgLine}/>
            <ProfileInfo data={ props.state.personData }/>
            <Reviews reviews={ props.state.reviewsData } addReview={ props.addReview } updateReviewerPhoto={ props.updateReviewerPhoto }/>
        </div>

    );
}

export default Content;
