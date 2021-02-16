const ROOT = document.documentElement;
const SCROLL_BUTTON = document.querySelector(".scroll-up-button");

function ScrollToElement(element) {

    /* Scroll to the element top */
    element.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function ShowElement(element) {

    element.classList.add("visible-block");
    element.classList.add("opacity-full");
    element.classList.remove("hidden");
}

function HideElement(element) {

    element.classList.remove("visible-block");
    element.classList.remove("opacity-full");
    element.classList.add("hidden");
}

function TogglePageScrollElement(root, element, ratio) {

    /* Maximum number of pixels that can be scrolled by the user */
    let scrollTotal = root.scrollHeight - root.clientHeight;

    if ((root.scrollTop / scrollTotal) > ratio) {
        /* Show button */
        ShowElement(element);
    } else {
        /* Hide button */
        HideElement(element);
    }
}

document.addEventListener("scroll", () => {
    TogglePageScrollElement(
        /* the document element root (<html>) */
        ROOT,
        /* Which element to toggle visibility */
        SCROLL_BUTTON,
        /* How far the user has to scroll to show the element */
        0.1);
});

SCROLL_BUTTON.addEventListener("click", () => {
    ScrollToElement(ROOT);
});