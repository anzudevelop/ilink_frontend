import s from './Reviews.module.css'

function Reviews() {
    return (
        <div className={s.reviewBody}>
            <div>
                Отзывы
                <button>Добавить отзыв</button>
            </div>
            <div>
                Item 1
                Item 2
            </div>
        </div>

    );
}

export default Reviews;
