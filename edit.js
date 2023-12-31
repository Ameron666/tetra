// import { getData } from "./admin/library.js";
function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        // function compareDates(a, b) {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);

        //     // Сравниваем даты
        //     if (dateA > dateB) {
        //         return -1;
        //     } else if (dateA < dateB) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // }

        let dataArray = Object.values(data);

        //resolve(dataArray.sort(compareDates));
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}
// Для показа текста
// element.text
function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

function convertDate(date) {
  let str = date;
  let data = str.split("-");
  let changeDate = data[2] + "." + data[1] + "." + data[0];
  return changeDate;
}

function getMonthName(monthNumber) {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return months[monthNumber];
}
// Новости -----------------------------------------------------------

getData("news").then((response) => {
  $("#news_all").empty();

  response.forEach(function (element) {
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(
      dateObj.getDate()
    )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;

    let block = `
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" srcset="">
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
                    <a href="new.html?id_new=${element.id}">
                        <div class="button_grey">Читать дальше</div>
                    </a>
                </div>
            </div>
        `;

    $("#news_all").append(block);
  });
});

//Новость --------------------------------------------------------
const url_new = new URL(window.location.href);
const queryParams_new = url_new.searchParams;
const id_new = queryParams_new.get("id_new");
if (id_new) {
  getData("news", id_new, "admin").then((response) => {
    console.log(response);
    $(".newThisTitle").text(response[1]);
    $(".newContent").html(response[2]);

    for (let i = 0; i < stringToImageArray(response[4]).length; i++) {
      $(".newThis_images").append(`
                <div class="newThis_img">
                    <a href="admin/img/${stringToImageArray(response[4])[i]}" data-lightbox="new1">
                        <img src="admin/img/${stringToImageArray(response[4])[i]}" alt="" srcset="">
                    </a>
                </div>
            `);
    }
  });
}

// $("#news_find_new .new_block__text").html(
//     response.text
// );

// //Выгрузка новостей на главную
getData("news").then((response) => {
  let block = $("#news_main_page").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    const dateObj = new Date(response[i].date);
    const formattedDate = `${addLeadingZero(
      dateObj.getDate()
    )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    block.append(`
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${stringToImageArray(response[i].img)[0]}" alt="" srcset="">
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
getData("news").then((response) => {
  let block = $("#this_same_news").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    const dateObj = new Date(response[i].date);
    const formattedDate = `${addLeadingZero(
      dateObj.getDate()
    )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    block.append(`
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${stringToImageArray(response[i].img)[0]}" alt="" srcset="">
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
                    <a href="new.html?id_new=${response[i].id}">
                        <div class="button_grey">Читать дальше</div>
                    </a>
                </div>
            </div>
        `);
  }
});

// Конец новости------------------------------------------------------

// Мероприятия -------------------------------------------------------

getData("events").then((response) => {
  $("#events_all").empty();

  response.forEach(function (element) {
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(
      dateObj.getDate()
    )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    let block = `
        <div class="new">
        <div class="new_img">
            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" srcset="">
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
                <a href="event.html?id_event=${element.id}"><div class="button_grey">Читать дальше</div></a>
            </div>
        </div>
        `;

    $("#events_all").append(block);
  });
});

// ________________________________________________________________

getData("events").then((response) => {
  const currentDate = new Date();

  $("#todayEvents").empty();

  response.forEach(function (element) {
    const elementDate = new Date(element.date);
    const dateObj = new Date(element.date);
    const formattedDate = `${addLeadingZero(
      dateObj.getDate()
    )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
    currentDate.setHours(0, 0, 0, 0);
    elementDate.setHours(0, 0, 0, 0);
    let block = `
          <div class="todayEvent">
            <div class="todayTime">
              ${formattedDate}
            </div>
            <a href="event.html?id_event=${element.id}">
              <div class="todayContent">
                ${element.title}
              </div>
            </a>
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

// $(".cview--date").click(

// $(".cview--date").click

// $(".cview--date").click(function() {

window.eventsGet = function () {
  const clickedDateStr = $(this).data("date"); // Получаем выбранную дату из атрибута 'data-date'

  // Преобразуем строку даты в объект Date
  const clickedDate = new Date(clickedDateStr);
  clickedDate.setHours(0, 0, 0, 0); // Убираем время

  // const formattedDate = `${addLeadingZero(clickedDate.getDate())}-${addLeadingZero(clickedDate.getMonth() + 1)}-${clickedDate.getFullYear()}`;
  const formattedDate = `${clickedDate.getDate()} ${getMonthName(
    clickedDate.getMonth()
  )}  ${clickedDate.getFullYear()}`;

  $("#footer-date").text(formattedDate);
  // Очищаем блок с мероприятиями
  $("#todayEvents").empty();

  // Получаем данные о мероприятиях
  getData("events").then((response) => {
    const currentDate = new Date();

    response.forEach(function (element) {
      const elementDate = new Date(element.date);
      const dateObj = new Date(element.date);
      const formattedDate = `${addLeadingZero(
        dateObj.getDate()
      )}.${addLeadingZero(dateObj.getMonth() + 1)}.${dateObj.getFullYear()}`;
      currentDate.setHours(0, 0, 0, 0);
      elementDate.setHours(0, 0, 0, 0);

      if (elementDate.getTime() === clickedDate.getTime()) {
        let block = `
                  <div class="todayEvent">
                      <div class="todayTime">
                          ${formattedDate}
                      </div>
                      <a href="event.html?id_event=${element.id}">
                        <div class="todayContent">
                          ${element.title}
                        </div>
                      </a>
                  </div>
              `;
        $("#todayEvents").append(block);
        $(".today_img").empty();
        $(".today_img").append(`
          <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
      `);
      }
    });
  });
  // });
};

$(".cview--date").click(window.eventsGet);

// Тестовая функция отображения мероприятий по дням

//Редактирование мероприятия
const url_event = new URL(window.location.href);
const queryParams_event = url_event.searchParams;
const id_event = queryParams_event.get("id_event");
if (id_event) {
  getData("events", id_event, "admin").then((response) => {
    $(".thisEventTitle").text(response[1]);
    $(".thisEventContent").html(response[2]);
    $(".thisEvent_img").append(`
                <img src="admin/img/${stringToImageArray(response[4])[0]}" alt="">
      `);

    for (let i = 0; i < stringToImageArray(response[4]).length; i++) {
      $(".thisEventGalery").append(`
        <a href="admin/img/${stringToImageArray(response[4])[i]}" data-lightbox="event">
            <img src="admin/img/${stringToImageArray(response[4])[i]}" alt="" srcset="">
        </a>
     `);
    }

    // $("#news_find_new .new_block__text").html(
    //     response.text
    // );
  });
}

// Конец мероприятия -------------------------------------------------

// Предметы  --------------------------------

// getData("lessons").then((response) => {
//   let lessons = document.querySelectorAll(".tetra_svg");
//   response.forEach((element) => {
//     lessons.forEach((lesson) => {
//       if (element.tags == lesson.getAttribute("svg_num")) {
//         lesson.setAttribute("lesson_id", element.id);
//         lesson.setAttribute("id", element.id);


//         let block = $(`#${element.id}`).children(".lessonContent").empty();

//         block.append(`
//           <div class="lessonAge">
//             Для детей от 15 лет
//           </div>
//           <div class="lessonDescription">
//             ${element.text}
//           </div>
//           <div class="lesson_button">
//             <a href="/lesson.html?id_lesson=${element.id}">
//               <div class="button_grey">Узнать больше</div>
//             </a>
//           </div>
           
//         `);
//       }
//     });
//   });
// });

// getData("lessons").then((response) => {
//   response.forEach((element) => {

//     $(".tetraHardAdapBlock").append(`
//       <a href="/lesson.html?id_lesson=${element.id}">
//         <div class="tetraHardAdap">
//           <span class="tetra_span"> ${element.title} </span>
//         </div>
//       </a>
//     `)

//   })
// })

// const url_lesson = new URL(window.location.href);
// const queryParams_lesson = url_lesson.searchParams;
// const id_lesson = queryParams_lesson.get("id_lesson");

// if (id_lesson) {
//   getData("lessons", id_lesson, "admin").then((response) => {
//     $(".thisLesson").attr("lesson_name", response.tags);
//     $(".thisLessonTitle").text(response.title);
//     $(".thisLessonDescription").html(response.text);
//   });
// }

// $(".tetra_svg_div").on("click", (e) => {
//   if (e.target.closest(".tetra_svg")) {
//     let lesson = e.target.closest(".tetra_svg").getAttribute("lesson_id");

//     window.location.href = `/lesson.html?id_lesson=${lesson}`;
//   }
// });

// $(".tetra_svg_div").on("mousedown", (e) => {
//   if (e.which === 2) {
//     if (e.target.closest(".tetra_svg")) {
//       let lesson = e.target.closest(".tetra_svg").getAttribute("lesson_id");

//       window.open(`/lesson.html?id_lesson=${lesson}`);
//     }
//   }
// });

// ^ Предметы ^ --------------------------------

// Фотогалерея --------------------
getData("photos").then((response) => {
  for (let j = 0; j < response.length; j++) {
    for (let i = 0; i < stringToImageArray(response[j].img).length; i++) {
    // for (let i = 0; i < 8; i++) {
      $("#photos_main").append(`

        <a href="admin/img/${stringToImageArray(response[j].img)[i]}" data-lightbox="index">
          <img src="admin/img/${stringToImageArray(response[j].img)[i]}" alt="" srcset="">
        </a>

    `);
    }
  }
  // $("#news_find_new .new_block__text").html(
  //     response.text
  // );
});

// Фотогалерея --------------------

// Проподаватели --------------------

getData("teachers").then((response) => {
  $("#teachers_main").empty();

  response.forEach(function (element, index) {
    const classOptions = ["blue", "green", "red", "yellow"];
    const secondClass = classOptions[index % classOptions.length];

    let block = `

        <div class="teacher">
          <div class="teacher_img">
              <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" srcset="">
          </div>
          <div class="teacherName">
              ${element.title}
          </div>
          <div class="teacherSpecial ${secondClass}">
              ${element.tags}
          </div>
          <div class="teacherDescription">
              ${element.text}
          </div>
        </div>
       
        `;

    $("#teachers_main").append(block);
  });
});

getData("teachers").then((response) => {
  response.forEach(function (element, index) {
    const classOptions = ["blue", "green", "red", "yellow"];
    const secondClass = classOptions[index % classOptions.length];

    if (element.tags == $(".thisLesson").attr("lesson_name")) {
      $("#this_lesson_teacher").empty();

      $("#this_lesson_teacher").append(`
        <div class="teacher_img">
          <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" srcset="">
        </div>
        <div class="teacherName">
          ${element.title}
        </div>
        <div class="teacherSpecial ${secondClass}">
          ${element.tags}
        </div>
        <div class="teacherDescription">
          ${element.text}
        </div>
     `);
    }
  });
});

// ^ Проподаватели ^ ------------------

getData("works").then((response) => {
  for (let j = 0; j < response.length; j++) {
    
    if (response[j].tags == $(".thisLesson").attr("lesson_name")) {
      for (let i = 0; i < stringToImageArray(response[j].img).length; i++) {
        
        $("#lesson_works").append(`
        
          <a href="admin/img/${stringToImageArray(response[j].img)[i]}" data-lightbox="index">
            <img src="admin/img/${stringToImageArray(response[j].img)[i]}" alt="" srcset="">
          </a>

        `);
      }
    }
  }
  // $("#news_find_new .new_block__text").html(
  //     response.text
  // );
});

getData("creativity").then((response) => {
  // $("#creativity").empty();

  response.forEach(function (element) {
    let block = `
            
  <div class="mySlides fade">
    <div class="creativityBlock">
      <div class="creativity_img">
          <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
      </div>

      <div class="creativityText">
        <div class="creativityTitle title32">${element.title}</div>
        <div class="creativityTitle title24"></div>
        <div class="creativityContent">
          ${element.text}
        </div>
      </div>
    </div>
  </div>
        `;

    $("#creativity").append(block);
  });
});
