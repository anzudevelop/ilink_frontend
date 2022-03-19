import s from './ReviewItem.module.css'

function ReviewItem(props) {
    return (
        <div className={props.profileStyle}>
            <div className={s.profileIcon}/>
            <div className={s.profileName}>Буба Бубенцов</div>
            <div className={s.reviewDate}>08.01.2022</div>
            <div className={s.reviewText}>
                Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без
                исключения.
                Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты
                работаешь, тем больше денег получаешь.
                Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают
                тренажерный зал. Зарплату выплачивают всегда вовремя.
            </div>
        </div>
    );
}

export default ReviewItem;
