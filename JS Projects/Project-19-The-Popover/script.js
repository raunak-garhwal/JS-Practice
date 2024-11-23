const myBtn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");
const myPopover = document.getElementById("myPopover");

myBtn.addEventListener("click", () => myPopover.classList.add("active"));
closeBtn.addEventListener("click", () => myPopover.classList.remove("active"));
