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
