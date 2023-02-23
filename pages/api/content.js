
export default function content(req, res) {
    res.status(200).json(
        {
            "headerValues" : [
                {title: "На головну", id: 1, link: "/"},
                {title: "Тарифи", id: 2, link: "#rate"},
                {title: "Новини", id: 3, link: "#news"},
                {title: "Контакти", id: 4, link: "#contacts"},
            ],
        }



    )
}
