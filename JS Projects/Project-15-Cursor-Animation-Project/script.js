const customCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

document.addEventListener("mousemove", e => updateCursorPosition(e));

function updateCursorPosition(e) {
    customCursor.style.top = e.pageY + "px";
    customCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        animateCursor();
        highlightLink(link);
    });

    link.addEventListener("mouseleave", () => {
        removeCursorAnimation();
        unhighlightLink(link);
    });
});

const animateCursor = () => customCursor.classList.add("link-animate");

const removeCursorAnimation = () => customCursor.classList.remove("link-animate");

const highlightLink = (link) => link.classList.add("link-hovering");

const unhighlightLink = (link) => link.classList.remove("link-hovering");