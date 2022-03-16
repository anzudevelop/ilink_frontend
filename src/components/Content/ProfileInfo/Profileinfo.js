import s from './ProfileInfo.module.css'
import InfoBlock from "./InfoBlock/InfoBlock";

function ProfileInfo() {
    return (
        <div className={ s.ProfileInfo }>
            <h1>
                Добро пожаловать в академию!
            </h1>
            <div className={s.content}>
                <img src="https://i.ytimg.com/vi/QI1-vxp6hvo/maxresdefault.jpg" />
                <InfoBlock />
            </div>
        </div>

    );
}

export default ProfileInfo;
