const headerValues = [
    {title: "На головну", id: 1, link: "/"},
    {title: "Тарифи", id: 2, link: "#rate"},
    {title: "Новини", id: 3, link: "#news"},
    {title: "Контакти", id: 4, link: "#contacts"},
];

const contactsValues = {
    contacts: [
        {title: "Підключення ", number: "+3(063)7777777", id: 1, icon: "PhoneOutlined"},
        {title: "Тех підтримка", number: "+3(063)1111111", id: 2, icon: "QuestionOutlined"}
    ],
    services: [
        {title: "Інтернет", id: 1, icon: "ApartmentOutlined"},
        {title: "Телебачення", id: 2, icon: "DesktopOutlined"},
        {title: "Телефонія", id: 3, icon: "MobileOutlined"}
    ],
}


const bannerValues = [
    {
        id: 1, title: "Інтернет", link: 'add', linkTitle: "Підключити",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi!"
    },
    {
        id: 2, title: "Телебачення", link: 'add', linkTitle: "Підключити",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi!"
    },
    {
        id: 3, title: "Телефонія", link: 'add', linkTitle: "Підключити",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi!"
    },
    {
        id: 4, title: "Реклама", link: 'add', linkTitle: "Підключити",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi!"
    },
    {
        id: 5, title: "Баннер", link: 'add', linkTitle: "Підключити",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, nisi!"
    }
];

export const rateValues = {
    rateTitle: "Популярні тарифи",
    rateIcon: "StarOutlined",
    includesTitle : "В підключення входить",
    includesIcon: "BulbOutlined",
    services :[
        {title: "Гнучкість", id: 1, icon: "LikeOutlined"},
        {title: "Спеціалісти", id: 2, icon: "TeamOutlined"},
        {title: "Обслуговування", id: 3, icon: "ToolOutlined"}
    ],
    cards: [
        {
            id: '1',
            title: "Домашній",
            plan: "Безлімітний 100",
            speed: "Швидкість 100 Мбіт/с",
            cost: "100 грн/м",
            icon: "HomeOutlined",
            link: '#add',
            linkTitle: "підключити",
            backGround: "internet",
        },
        {
            id: '2',
            title: "Корпоративний",
            plan: "Безлімітний 150 ",
            speed: "Швидкість 150 Мбіт/с",
            cost: "150 грн/м",
            icon: "BankOutlined",
            link: '#add',
            linkTitle: "підключити",
            backGround: "logo",
        },
        {
            id: '3',
            title: "Максимум",
            plan: "Безлімітний 200",
            speed: "Швидкість 200 Мбіт/с",
            cost: "200 грн/м",
            icon: "ThunderboltOutlined",
            link: '#add',
            linkTitle: "підключити",
            backGround: "internet",
        },
    ]
}
export const newsValues = {
    title: "Новини",
    icon: "ExclamationOutlined",
    news : [
        {
            id: '1',
            title: "Домашній",
            plan: "Безлімітний 100",
            speed: "Швидкість 100 Мбіт/с",
            cost: "100 грн/м",
            icon: "HomeOutlined",
            link: '#',
            linkTitle: "дізнатися більше",
            backGround: "internet",
        },
        {
            id: '2',
            title: "Корпоративний",
            plan: "Безлімітний 150 ",
            speed: "Швидкість 150 Мбіт/с",
            cost: "150 грн/м",
            icon: "BankOutlined",
            link: '#',
            linkTitle: "дізнатися більше",
            backGround: "logo",
        },
        {
            id: '3',
            title: "Максимум",
            plan: "Безлімітний 200",
            speed: "Швидкість 200 Мбіт/с",
            cost: "200 грн/м",
            icon: "ThunderboltOutlined",
            link: '#',
            linkTitle: "дізнатися більше",
            backGround: "logo",
        },
    ]
}

const botValues = {
    phoneTitle  : 'Телефон',
    messageTitle : 'Повідомлення',
    btnTitle : 'Відправити',
    btnTitleCompleted : 'Відправлено'
}

export default {headerValues, contactsValues, bannerValues, rateValues , newsValues , botValues}