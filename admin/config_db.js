export function schema() {
  return {
    news: {
      menuName: "Новости",
      title: {
        name: "Заголовок новости",
        element: "input",
        type: "text",
        required: true,
      },
      text: {
        name: "Текст новости",
        element: "textarea",
        type: "text",
        required: true,
      },
      date: {
        name: "Дата загрузки новости",
        element: "input",
        type: "date",
        required: true,
      },
      img: {
        name: "Картинки новости",
        element: "input",
        type: "file",
        required: true,
      },
    },

    events: {
      menuName: "Мероприятия",
      title: {
        name: "Заголовок мероприятия",
        element: "input",
        type: "text",
        required: true,
      },
      text: {
        name: "Текст мероприятия",
        element: "textarea",
        type: "text",
        required: true,
      },
      date: {
        name: "Дата мероприятия",
        element: "input",
        type: "date",
        required: true,
      },
      img: {
        name: "Картинки мероприятия",
        element: "input",
        type: "file",
        required: true,
      },
    },

    works: {
      menuName: "Работы студентов",
      tags: {
        name: "Предмет",
        element: "input",
        type: "text",
        data: [
          "Искусственный интеллект",
          "Графический дизайн",
          "Робототехника",
          "ЧПУ программирование",
          "Векторная графика",
          "Информатика",
          "Основы электроники",
        ],
        selectOne: true,
        required: true,
      },

      img: {
        name: "Изображения/фотографии",
        element: "input",
        type: "file",
        required: true,
      },
    },

    photos: {
      menuName: "Фотогалерея",
      img: {
        name: "Изображения/фотографии",
        element: "input",
        type: "file",
        required: true,
      },
    },

    teachers: {
      menuName: "Преподаватели",
      title: {
        name: "Имя преподователя",
        element: "input",
        type: "text",
        required: true,
      },
      tags: {
        name: "Предмет",
        element: "input",
        type: "text",
        data: [
          "Искусственный интеллект",
          "Графический дизайн",
          "Робототехника",
          "ЧПУ программирование",
          "Векторная графика",
          "Информатика",
          "Основы электроники",
        ],
        selectOne: true,
        required: true,
      },
      img: {
        name: "Фотография",
        element: "input",
        type: "file",
        required: true,
      },
      text: {
        name: "Описание",
        element: "textarea",
        type: "text",
        required: true,
      },
    },

    lessons: {
      menuName: "Предметы",
      title: {
        name: "Название предмета",
        element: "input",
        type: "text",
        required: true,
      },
      tags: {
        name: "Предмет",
        element: "input",
        type: "text",
        data: [
          "Искусственный интеллект",
          "Графический дизайн",
          "Робототехника",
          "ЧПУ программирование",
          "Векторная графика",
          "Информатика",
          "Основы электроники",
        ],
        selectOne: true,
        required: true,
      },
      text: {
        name: "Описание",
        element: "textarea",
        type: "text",
        required: true,
      },
      img: {
        name: "Фотография",
        element: "input",
        type: "file",
        required: true,
      },
    },
  };
}
