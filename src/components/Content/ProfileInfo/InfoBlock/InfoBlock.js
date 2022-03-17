import s from './InfoBlock.module.css'

function InfoBlock() {
    return (
        <div className={s.infoBlockBody}>
            <div className={s.name}>Яна Валиева</div>
            <div className={s.birthDay}>08.10.1999</div>
            <div className={s.citySexAge}>
                <div className={s.city}><b>Город:</b> Томск</div>
                <div className={s.sex}>
                    <div><b>Пол:</b> женщина</div>
                    <div className={s.sexIcon}/>
                </div>
                <div className={s.age}><b>Возраст:</b> 22</div>
            </div>
            <div className={s.textContent}>
                <b>О себе:</b> Всем привет! Меня зовут Яна, мне 22 года, я студент.
                Учусь на программиста, но хочу стать продуктовым аналитиком.
                Недавно, например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты!
                BTW: И да, у меня есть милая кошка :)
            </div>
            <div className={s.petBowlIcon}/>
            <div className={s.petsInfo}><b>Домашнее животное:</b> есть</div>
        </div>

    );
}

export default InfoBlock;
