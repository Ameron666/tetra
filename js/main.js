$(window).load(function () {
  $(".preloader").fadeOut("slow");
});

// const video = document.getElementById("myVideo");
// video.play();

// _____________________
// const svg = $(".tetra_svg")
$(".tetra_svg_div").on("click", (e) => {
  if (e.target.closest(".tetra_svg")) {
    let lesson = e.target.closest(".tetra_svg").getAttribute("svg_num");
    window.location.href =  lesson + ".html";
  }
});

$(".tetra_svg_div").on("mousedown", (e) => {
  if (e.which === 2) { // Проверяем, что нажата средняя кнопка мыши
    if (e.target.closest(".tetra_svg")) {
      let lesson = e.target.closest(".tetra_svg").getAttribute("svg_num");
      window.open( lesson + ".html", '_blank');
    }
  }
});

const selectedItem = document.getElementById("selectedItem");

if (document.querySelector(".dropdown-content")) {
  const dropdownContent = document.querySelector(".dropdown-content");

  selectedItem.textContent = dropdownContent
    .querySelector("a")
    .getAttribute("data-value");

  selectedItem.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  dropdownContent.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedValue = event.target.getAttribute("data-value");
      selectedItem.textContent = selectedValue;
      dropdownContent.classList.remove("show");
    }
  });
}


// _________________________________________
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show-menu");
  document.querySelector(".hamburger").classList.toggle("hamb_active");
});
// _________________________________________

// _________________________________________

// _________________________________________





let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");

if (slides.length > 0) {
  showSlides(slideIndex);
}

function plusSlides(n) {
  if (slides.length > 0) {
    showSlides((slideIndex += n));
  }
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");

  if (slides.length > 0) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}