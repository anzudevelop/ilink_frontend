import s from './Content.module.css'
import ProfileInfo from "./ProfileInfo/Profileinfo";
import Reviews from "./Reviews/Reviews";

function Content() {
    return (
        <div className={s.contentPage}>
            <div className={s.contentPageBgLine}/>
            <ProfileInfo />
            <Reviews />
        </div>

    );
}

export default Content;
