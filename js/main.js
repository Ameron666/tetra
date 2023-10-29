$(window).load(function () {
  $(".preloader").fadeOut("slow");
});




// _____________________
// const svg = $(".tetra_svg")
$(".tetra_svg_div").on("click", (e) => {
  // console.log(e.target);
  if (e.target.closest(".tetra_svg")) {
    // console.log(e.target.closest(".tetra_svg").getAttribute("svg_num"));
    let lesson = e.target.closest(".tetra_svg").getAttribute("svg_num");
    // window.location.href = "/pages/" + lesson + ".html";
    window.location.href = "#";
  }
});


// _________________________________________


// _________________________________________


// _________________________________________


// _________________________________________


const selectedItem = document.getElementById("selectedItem");
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