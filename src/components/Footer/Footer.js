import s from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={s.content}>
                <div className={s.text}>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
                <div className={s.socialLinks}>
                    <li>
                        <a className={s.vk} href="https://vk.com/alexkosogor"/>
                        <a className={s.fb} href=""/>
                        <a className={s.tw} href=""/>
                    </li>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
