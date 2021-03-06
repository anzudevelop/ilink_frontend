let store = {
    _state: {
        personData: {
            name: 'Алексей',
            surname: 'Косогор',
            birthDay: '04.02.2000',
            profileImage: 'https://sun4-15.userapi.com/s/v1/ig2/NuLa6Zl-RcX7fdxtJlsBhLfmga3ByJbv8b6e96WA7xnlohCo_iqtuy42wdCerHnwx3JvdT5hyow24rtQlR4z9-BJ.jpg?size=200x200&quality=95&crop=167,393,1121,1121&ava=1',
            city: 'Томск',
            sex: 'male',
            age: 22,
            personInformation: 'Привет, меня зовут Лёха, мне 22 года, я студент. Учусь на направлении промышленной электронике, но с каждым днем все больше времени уделяю программированию. Хочу стать frontend разработчиком. Буду стараться и учиться, чтобы добиться своей цели.',
            havePet: false,
        },
        reviewsData: [
            {
                id: 1,
                name: 'Буба',
                surname: 'Буденцов',
                profileImage: 'https://femmie.ru/wp-content/uploads/2020/02/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716.jpg',
                reviewDate: '08.01.2022',
                reviewText: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
            },
            {
                id: 2,
                name: 'Илья',
                surname: 'Анташкевич',
                profileImage: 'https://www.ochkov.net/images/2018/05/08/75275.text.3705.jpg',
                reviewDate: '08.01.2022',
                reviewText: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.',
            },
            {
                id: 3,
                name: 'Юрина',
                surname: 'Маргарита',
                profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                reviewDate: '26.12.2021',
                reviewText: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.',
            },
            {
                id: 4,
                name: 'Дмитрий',
                surname: 'Иванов',
                profileImage: 'https://proprikol.ru/wp-content/uploads/2020/10/kartinki-krasivyh-muzhchin-54.jpg',
                reviewDate: '16.12.2021',
                reviewText: 'Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.',
            },
        ],
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Store changed')
    },
    addReview(nameInput, text) {
        nameInput = nameInput.split(" ")
        let name = nameInput[0]
        let surname = nameInput[1]
        let date = new Date().toLocaleDateString();
        let img = 'https://evroperimetr.ru/content/front/zabory_tmp1/img/reviews-icon.jpg'
        let newReview = {
            id: this._state.reviewsData.length + 1,
            name: name,
            surname: surname,
            profileImage: img,
            reviewDate: date,
            reviewText: text,
        }
        this._state.reviewsData.push(newReview)
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}

window.store = store
export default store