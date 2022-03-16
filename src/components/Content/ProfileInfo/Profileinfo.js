import s from './ProfileInfo.module.css'
import InfoBlock from "./InfoBlock/InfoBlock";

function ProfileInfo() {
    return (
        <div className={ s.ProfileInfo }>
            <h1>
                Добро пожаловать в академию!
            </h1>
            <div className={s.myPhoto}/>
            <InfoBlock />
        </div>

    );
}

export default ProfileInfo;
