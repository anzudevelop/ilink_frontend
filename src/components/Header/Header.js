import s from './Header.module.css'

function Header(props) {

    return (
        <div className={s.navbar}>
            <div className={s.block}>
                <div className={s.block_img}>
                    <img src={ props.img } alt="profileImg"/>
                </div>
                <div className={s.name}>{ props.name }</div>
                <div className={s.block_1}>{ props.name } { props.surname }</div>
                <div className={s.block_2_logo_1} />
                <div className={s.block_2_logo_2} />
                <button className={s.block_3} onClick={() => {alert('Здесь когда-то будет панель управления 😏')}}>
                    <div className={s.text}>Панель управления</div>
                    <div className={s.mobileIcon} />
                </button>
            </div>
        </div>
    );
}

export default Header;