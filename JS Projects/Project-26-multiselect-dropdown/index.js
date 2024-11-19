const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");
const selectedOptions = document.getElementById("selected-options");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    addAndUpdateSelectedOptions(item, index);
  });
});

function addAndUpdateSelectedOptions(item, index) {
  let checkbox = item.querySelector(".checkbox");
  if (checkbox.checked === true) {
    checkbox.checked = false;
    removeSelectedOption(item);
  } else {
    checkbox.checked = true;
    createSelectedOptionsList(item, index);
  }

  item.classList.toggle("checked");
  updateSelectDropdownText();
}

function createSelectedOptionsList(item, i) {
  const div = document.createElement("div");
  div.classList.add("options-list");
  const span = document.createElement("span");
  span.classList.add("option");
  span.innerHTML = item.querySelector(".item-text").innerHTML;
  const closeBtnNode = document.createElement("span");
  closeBtnNode.classList.add("close");
  closeBtnNode.setAttribute("data-id", i + 1);
  closeBtnNode.innerHTML = "X";
  closeBtnNode.addEventListener("click", function () {
    selectedOptions.removeChild(this.parentElement);
    let previousElem = this.previousSibling.innerText;
    items.forEach((item, index) => {
      const itemText = item.querySelector(".item-text").innerText;
      if (itemText === previousElem) {
        addAndUpdateSelectedOptions(item, index);
      }
    });
  });
  div.appendChild(span);
  div.appendChild(closeBtnNode);
  selectedOptions.appendChild(div);
}

function removeSelectedOption(item) {
  const options = document.querySelectorAll(".options-list");
  options.forEach((opt) => {
    const optionItem = opt.querySelector(".option");
    if (optionItem.innerText === item.querySelector(".item-text").innerText) {
      selectedOptions.removeChild(opt);
    }
  });
}

function updateSelectDropdownText() {
  let checked = document.querySelectorAll(".checked");
  let buttonText = document.querySelector(".btn-text");

  if (checked && checked.length > 0) {
    buttonText.innerText = `${checked.length} Selected`;
  } else {
    buttonText.innerText = "Select an Option";
  }
}
