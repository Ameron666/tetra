import { getData } from "./admin/library.js";

// Для показа текста
// JSON.parse(element.text).content
function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

function convertDate(date) {
  let str = date;
  let data = str.split('-');
  let changeDate = data[2] + '.' + data[1] + '.' + data[0];
  return changeDate;
}

console.log(convertDate('2015-01-01'))

function getMonthName(monthNumber) {
  const months = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  return months[monthNumber];
}
// Новости -----------------------------------------------------------

getData("news", "", "admin").then((response) => {
  $("#news_all").empty();

 
  response.forEach(function (element) {
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
  
    let block = `
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${element.img[0]}" alt="" srcset="">
                </div>
                <div class="newDesk">
                    <div class="newDate">
                        ${formattedDate}
                    </div>
                    <div class="newDescription">
                        <p class="newDescriptionClip">
                        ${element.title}
                        </p>
                    </div>
                    <a href="/new.html?id_new=${element.id}">
                        <div class="button_grey">Читать дальше</div>
                    </a>
                </div>
            </div>
        `;

    $("#news_all").append(block);
  });
});

//Редактирование новости
const url_new = new URL(window.location.href);
const queryParams_new = url_new.searchParams;
const id_new = queryParams_new.get("id_new");
if (id_new) {
  getData("news", id_new, "admin").then((response) => {
    $(".newThisTitle").text(response.title);
    $(".newContent").html(JSON.parse(response.text).content);

    for (let i = 0; i < response.img.length; i++) {
      $(".newThis_images").append(`
                <div class="newThis_img">
                    <a href="admin/img/${response.img[i]}" data-lightbox="new1">
                        <img src="admin/img/${response.img[i]}" alt="" srcset="">
                    </a>
                </div>
            `);
    }

    // $("#news_find_new .new_block__text").html(
    //     JSON.parse(response.text).content
    // );
  });
}

// //Выгрузка новостей на главную
getData("news", "", "admin").then((response) => {
  let block = $("#news_main_page").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    const dateObj = new Date(response[i].date);
    const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    block.append(`
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${response[i].img[0]}" alt="" srcset="">
                </div>
                <div class="newDesk">
                    <div class="newDate">
                        ${formattedDate}
                    </div>
                    <div class="newDescription">
                        <p class="newDescriptionClip">
                        ${response[i].title}
                        </p>
                    </div>
                    <a href="/new.html?id_new=${response[i].id}">
                        <div class="button_grey">Читать дальше</div>
                    </a>
                </div>
            </div>
        `);
  }
});
// Same news
getData("news", "", "admin").then((response) => {
  let block = $("#this_same_news").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    const dateObj = new Date(response[i].date);
    const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    block.append(`
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${response[i].img[0]}" alt="" srcset="">
                </div>
                <div class="newDesk">
                    <div class="newDate">
                        ${formattedDate}
                    </div>
                    <div class="newDescription">
                        <p class="newDescriptionClip">
                        ${response[i].title}
                        </p>
                    </div>
                    <a href="/new.html?id_new=${response[i].id}">
                        <div class="button_grey">Читать дальше</div>
                    </a>
                </div>
            </div>
        `);
  }
});

// Конец новости------------------------------------------------------

// Мероприятия -------------------------------------------------------

getData("events", "", "admin").then((response) => {
  $("#events_all").empty();

  response.forEach(function (element) {
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    let block = `
        <div class="new">
        <div class="new_img">
            <img src="admin/img/${element.img[0]}" alt="" srcset="">
        </div>
            <div class="newDesk">

                <div class="newDate">
                  ${formattedDate}
                </div>
                <div class="newDescription">
                    <p class="newDescriptionClip">
                    ${element.title}
                    </p>
                </div>
                <a href="/event.html?id_event=${element.id}"><div class="button_grey">Читать дальше</div></a>
            </div>
        </div>
        `;

    $("#events_all").append(block);
  });
});

// ________________________________________________________________

getData("events", "", "admin").then((response) => {
  const currentDate = new Date();



  $("#todayEvents").empty();

  response.forEach(function (element) {
    const elementDate = new Date(element.date);
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    currentDate.setHours(0, 0, 0, 0);
    elementDate.setHours(0, 0, 0, 0);
    let block = `
          <div class="todayEvent">
            <div class="todayTime">
              ${formattedDate}
            </div>
            <div class="todayContent">
              ${element.title}
            </div>
          </div>
        `;

    if (elementDate < currentDate) {
    } else if (elementDate > currentDate) {
    } else {
      $("#todayEvents").append(block);
    }
  });
});


// Тестовая функция отображения мероприятий по дням

$('.cview--date').click(function() {
  const clickedDateStr = $(this).data('date'); // Получаем выбранную дату из атрибута 'data-date'

  // Преобразуем строку даты в объект Date
  const clickedDate = new Date(clickedDateStr);
  clickedDate.setHours(0, 0, 0, 0); // Убираем время



  // const formattedDate = `${addLeadingZero(clickedDate.getDate())}-${addLeadingZero(clickedDate.getMonth() + 1)}-${clickedDate.getFullYear()}`;
  const formattedDate = `${clickedDate.getDate()} ${getMonthName(clickedDate.getMonth())}  ${clickedDate.getFullYear()}`;


  $("#footer-date").text(formattedDate);
  // Очищаем блок с мероприятиями
  $("#todayEvents").empty();

  // Получаем данные о мероприятиях
  getData("events", "", "admin").then((response) => {
      const currentDate = new Date();

      response.forEach(function (element) {
          const elementDate = new Date(element.date);
          const dateObj = new Date(element.date);
          const formattedDate = `${addLeadingZero(dateObj.getDate())}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
          currentDate.setHours(0, 0, 0, 0);
          elementDate.setHours(0, 0, 0, 0);

          if (elementDate.getTime() === clickedDate.getTime()) {
              let block = `
                  <div class="todayEvent">
                      <div class="todayTime">
                          ${formattedDate}
                      </div>
                      <div class="todayContent">
                          ${element.title}
                      </div>
                  </div>
              `;
              $("#todayEvents").append(block);
          }
      });
  });
});

// Тестовая функция отображения мероприятий по дням





//Редактирование мероприятия
const url_event = new URL(window.location.href);
const queryParams_event = url_event.searchParams;
const id_event = queryParams_event.get("id_event");
if (id_event) {
  getData("events", id_event, "admin").then((response) => {
    $(".thisEventTitle").text(response.title);
    $(".thisEventContent").html(JSON.parse(response.text).content);
    $(".thisEvent_img").append(`
                <img src="admin/img/${response.img[0]}" alt="">
      `);

    for (let i = 0; i < response.img.length; i++) {
      $(".thisEventGalery").append(`
        <a href="admin/img/${response.img[i]}" data-lightbox="event">
            <img src="admin/img/${response.img[i]}" alt="" srcset="">
        </a>
     `);
    }

    // $("#news_find_new .new_block__text").html(
    //     JSON.parse(response.text).content
    // );
  });
}

// Конец мероприятия -------------------------------------------------
