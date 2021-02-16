function ScrollTo(element) {

    /* Scroll to the element top */
    element.ScrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function ShowElement(element) {

    element.classList.toggle("hidden");
    element.classList.toggle("opacity-none");

    element.classList.add("visible");
    element.classList.add("opacity-full");
}

function HideElement(element) {

    element.classList.toggle("visible");
    element.classList.toggle("opacity-full");
    
    element.classList.add("hidden");
    element.classList.add("opacity-none");
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

document.querySelector(".scroll-up-button").addEventListener("click", () => {
    ScrollTo(document.documentElement);
});