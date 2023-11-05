import { getData } from "./admin/library.js";

// Для показа текста
// JSON.parse(element.text).content

// Новости -----------------------------------------------------------

getData("news", "", "admin").then((response) => {
  $("#news_all").empty();

  response.forEach(function (element) {
    let block = `
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${element.img[0]}" alt="" srcset="">
                </div>
                <div class="newDesk">
                    <div class="newDate">
                        ${element.date}
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

// //Выгрузка всех новостей на главную
getData("news", "", "admin").then((response) => {
  let block = $("#news_main_page").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    block.append(`
            <div class="new">
                <div class="new_img">
                    <img src="admin/img/${response[i].img[0]}" alt="" srcset="">
                </div>
                <div class="newDesk">
                    <div class="newDate">
                        ${response[i].date}
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
    let block = `
        <div class="new">
        <div class="new_img">
            <img src="admin/img/${element.img[0]}" alt="" srcset="">
        </div>
            <div class="newDesk">

                <div class="newDate">
                  ${element.date}
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
      `)

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
