export function schema() {
    return ({
        "news": {
            "menuName": "Новости",
            "title": {
                "name": "Заголовок новости",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст новости",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки новости",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки новости",
                "element": "input",
                "type": "file",
                "required": true
            },
        },

        "events": {
            "menuName": "Мероприятия",
            "title": {
                "name": "Заголовок мероприятия",
                "element": "input",
                "type": "text",
                "required": true
            },
            "text": {
                "name": "Текст мероприятия",
                "element": "textarea",
                "type": "text",
                "required": true
            },
            "date": {
                "name": "Дата загрузки мероприятия",
                "element": "input",
                "type": "date",
                "required": true
            },
            "img": {
                "name": "Картинки мероприятия",
                "element": "input",
                "type": "file",
                "required": true
            },
        }




    })
}