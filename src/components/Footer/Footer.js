import s from './Footer.module.css'

function Footer() {

    return (
        <footer>
            <div className={s.content}>
                <div className={s.text}>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
                <div className={s.socialLinks}>
                    <li>
                        <a className={s.vk} href="https://vk.com/alexkosogor"/>
                        <a className={s.fb} onClick={() => {alert('К сожалению, меня нет на facebook 😔')}}/>
                        <a className={s.tw} onClick={() => {alert('К сожалению, меня нет в twitter 😔')}}/>
                    </li>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
