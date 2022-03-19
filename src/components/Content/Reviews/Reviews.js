import s from './Reviews.module.css'

function Reviews() {
    return (
        <div className={s.reviewWindow}>
            <div className={s.reviewLabel}>Отзывы</div>
            <button className={s.addReview}>
                <div className={s.icon} />
                <div className={s.text}>Добавить отзыв</div>
            </button>
            <div className={s.reviewBody_1}>
                <div className={s.profileIcon} />
                <div className={s.profileName}>Буба Бубенцов</div>
                <div className={s.reviewDate}>08.01.2022</div>
                <div className={s.reviewText}>
                    Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения.
                    Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь.
                    Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.
                </div>
            </div>
            <div className={s.reviewBody_2}>
                <div className={s.profileIcon} />
                <div className={s.profileName}>Илья Анташкевич</div>
                <div className={s.reviewDate}>08.01.2022</div>
                <div className={s.reviewText}>
                    Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию.
                    Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом.
                    Для эффективной работы здесь нужно хорошо знать иностранные языки.
                </div>
            </div>
            <div className={s.reviewSlider}>
                <div className={s.reviewSliderActive} />
                <div className={s.reviewSliderNoneActive} />
                <div className={s.reviewSliderNoneActive} />
            </div>
            <button className={s.slideBtn}>
                <div className={`${s.backButton} ${s.nonActiveButton}`} />
                <div className={s.backButtonArrow} />
            </button>
            <button className={s.slideBtn}>
                <div className={`${s.forwardButton} ${s.activeButton}`} />
                <div className={s.forwardButtonArrow} />
            </button>
        </div>

    );
}

export default Reviews;
