function ScrollTo() {

}

function ShowElement(element) {

    element.classList.toggle("hidden");
    element.classList.add("visible");
}

function HideElement(element) {

    element.classList.toggle("visible");
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
        document.documentElement,
        /* Which element to toggle visibility */
        document.querySelector(".scroll-up-button"),
        /* How far the user has to scroll to show the element */
        0.50);
});