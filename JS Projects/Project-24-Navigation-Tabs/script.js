const navTabs = document.getElementById("nav-tabs");
const tabButtons = document.querySelectorAll(".tab-item");
const tabPanes = document.querySelectorAll(".tab-pane");

navTabs.addEventListener("click", (e) => {
    const id = e.target.dataset.contentTarget;
    if (id) {
      //remove active class from all tabs
      tabButtons.forEach(button => button.classList.remove("active"));

      // add active class on the current tab
      e.target.classList.add("active");

      //remove active class from all tab pane
      tabPanes.forEach(tab => tab.classList.remove("active"));

      // add active class on the current tab pane
      let activeTabPane = document.getElementById(id);
      activeTabPane.classList.add("active");
    }
});
