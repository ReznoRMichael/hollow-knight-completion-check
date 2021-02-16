/* the document element root (<html>) */
const ROOT = document.documentElement;

function ScrollTo() {

}

function ShowElement() {

}

function HideElement() {

}

function DetectPageScroll() {

    /* Maximum number of pixels that can be scrolled by the user */
    let scrollTotal = ROOT.scrollHeight - ROOT.clientHeight;
    let scrollUpButton = document.querySelector(".scroll-up-button");

    if ((ROOT.scrollTop / scrollTotal) > 0.80) {
        /* Show button */
    } else {
        /* Hide button */
    }
}

document.addEventListener("scroll", DetectPageScroll);