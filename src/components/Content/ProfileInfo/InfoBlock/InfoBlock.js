import s from './InfoBlock.module.css'

function InfoBlock(props) {
    let personData = props.data

    let defineSexIcon = () => {
        if (personData.sex === 'male') return 'male'
        else if (personData.sex === 'female') return 'female'
        else return ''
    }

    return (
        <div className={s.infoBlockBody}>
            <div className={s.name}>{ personData.name } { personData.surname }</div>
            <div className={s.birthDay}>{ personData.birthDay }</div>
            <div className={s.citySexAge}>
                <div className={s.city}><b>Город:</b> { personData.city }</div>
                <div className={s.sex}>
                    <div><b>Пол:</b> { personData.sex === 'male' ? 'мужчина' : personData.sex === 'female' ? 'женщина' : 'нет данных'}</div>
                    { personData.sex === 'male' ? <div className={ s.male } /> : <div className={ s.female } /> }
                </div>
                <div className={s.age}><b>Возраст:</b> { personData.age }</div>
            </div>
            <div className={s.textContent}>
                <b>О себе:</b> { personData.personInformation }
            </div>
            <div className={s.petBowlIcon}/>
            <div className={s.petsInfo}><b>Домашнее животное:</b> { personData.havePet ? 'есть' : 'нет'}</div>
        </div>

    );
}

export default InfoBlock;
