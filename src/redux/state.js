let state = {
    users: [
        {
            id: 0,
            name: 'Александр',
            image: 'assets/img/avatar/avatar-12.jpg',
            isProprietor: true
        },
        {
            id: 1,
            name: 'Борис Бритва',
            image: 'assets/img/avatar/avatar-8.jpg',
            isProprietor: false
        }
    ],
    messages: [
        {
            id: 0,
            message: 'Привет, брат! Как дела?',
            date: 'Вчера',
            time: '09:50',
            status: 'read',
        },
        {
            id: 1,
            message: 'Доброе утро, как дела? Как насчет нашей следующей встречи?',
            date: 'Вчера',
            time: '10:00',
            status: 'read',
        },
        {
            id: 2,
            message: 'Следующая встреча завтра в 10.00 утра',
            date: 'Вчера',
            time: '10:06',
            status: 'read',
        },
        {
            id: 3,
            message: 'Вау, это здорово!',
            date: 'Вчера',
            time: '10:02',
            status: 'read',
        },
        {
            id: 4,
            message: '',
            date: 'Сегодня',
            time: '10:50',
            status: 'read',
        },
        {
            id: 5,
            message: '',
            date: 'Сегодня',
            time: '11:50',
            status: 'read',
        },
        {
            id: 6,
            message: '',
            date: 'Сегодня',
            time: '11:50',
            status: 'read',
        },
        {
            id: 7,
            message: '',
            date: 'Сегодня',
            time: '11:50',
            status: 'read',
        },
    ],
    chats: [
        {
            id: 0,
            user: 0,
            message: 0,
        },
        {
            id: 1,
            user: 1,
            message: 1,
        },
        {
            id: 2,
            user: 1,
            message: 2,
        },
        {
            id: 3,
            user: 0,
            message: 3,
        },
        {
            id: 4,
            user: 1,
            message: 4,
        },
        {
            id: 5,
            user: 0,
            message: 5,
        },
        {
            id: 6,
            user: 1,
            message: 6,
        },
        {
            id: 7,
            user: 0,
            message: 7,
        },
    ],
    onlineUsers: [
        {id: 1, name: 'Елена', image: 'assets/img/avatar/avatar-8.jpg'},
        {id: 2, name: 'Принц', image: 'assets/img/avatar/avatar-7.jpg'},
        {id: 3, name: 'Юля', image: 'assets/img/avatar/avatar-13.jpg'},
    ],
    recentChats: [
        {
            id: '0',
            status: 'online',
            image: 'assets/img/avatar/avatar-8.jpg',
            name: 'Ольга Александровна',
            lastTextType: 'text',
            lastText: 'Кажется логичным, что',
            lastTime: '05 мин',
            mCount: '11'
        },
        {
            id: '1',
            status: 'away',
            image: 'assets/img/avatar/avatar-9.jpg',
            name: 'Андрей Николаевич',
            lastTextType: 'text',
            lastText: 'Кажется логичным, что',
            lastTime: '05 мин',
            mCount: '14'
        },
        {
            id: '2',
            status: 'online',
            image: 'assets/img/avatar/avatar-10.jpg',
            name: 'Дмитрий Иванович',
            lastTextType: 'typing',
            lastText: 'photo',
            lastTime: '05 мин',
            mCount: ''
        },
        {
            id: '3',
            status: 'online',
            image: '',
            name: 'Иван Осин',
            lastTextType: 'cancelledCall',
            lastText: '',
            lastTime: '45 мин',
            mCount: ''
        },
        {
            id: '4',
            status: 'away',
            image: 'assets/img/avatar/avatar-11.jpg',
            name: 'Маргарита Симонян',
            lastTextType: 'missedCall',
            lastText: 'Вы у меня',
            lastTime: '52 мин',
            mCount: ''
        },
        {
            id: '5',
            status: 'away',
            image: 'assets/img/avatar/avatar-2.jpg',
            name: '#Тех поддержка',
            lastTextType: 'text',
            lastText: 'Привет!!!',
            lastTime: 'Вчера',
            mCount: '7'
        },
        {
            id: '6',
            status: 'online',
            image: '',
            name: 'Артём Г.',
            lastTextType: 'videoCall',
            lastText: 'Кажется логичным, что',
            lastTime: 'Вчера',
            mCount: ''
        },
        {
            id: '7',
            status: 'online',
            image: 'assets/img/avatar/avatar-12.jpg',
            name: 'Александр Русь',
            lastTextType: 'voiceMessage',
            lastText: '',
            lastTime: 'Вчера',
            mCount: ''
        },
        {
            id: '8',
            status: '',
            image: 'assets/img/avatar/avatar-4.jpg',
            name: 'Регина Дубовицкая',
            lastTextType: 'typing',
            lastText: 'Кажется логичным, что',
            lastTime: 'Вчера',
            mCount: ''
        },
    ]
}

export const addPost = (postMessages) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let strDate = mm + '/' + dd + '/' + yyyy;
    let strTime = hour + ':' + minutes;

    let newPost = {
        id: 10,
        message: postMessages,
        date: strDate,
        time: strTime,
        status: 'unread'
    };

    state.messages.push(newPost)
}

export default state;