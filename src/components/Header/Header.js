import s from './Header.module.css'

function Header() {
    return (
        <div className={s.navbar}>
            <div className={s.block}>
                <div className={s.block_img}></div>
                <div className={s.block_1}>Яна Валиева</div>
                <div className={s.block_2_logo_1}></div>
                <div className={s.block_2_logo_2}></div>
                <button className={s.block_3}>Панель управления</button>
            </div>
        </div>
    );
}

export default Header;

/*
        <header>
            Header component
            <button className={ s.button }>Панель управления</button>
        </header>
        */