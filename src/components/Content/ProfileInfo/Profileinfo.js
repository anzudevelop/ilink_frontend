import s from './ProfileInfo.module.css'
import InfoBlock from "./InfoBlock/InfoBlock";

function ProfileInfo(props) {
    return (
        <div className={ s.ProfileInfo }>
            <h1>
                Добро пожаловать в академию!
            </h1>
            <div className={s.myPhoto}>
                <img src={ props.data.profileImage } alt="profileImg"/>
            </div>
            <InfoBlock data={ props.data }/>
        </div>

    );
}

export default ProfileInfo;
