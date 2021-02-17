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

/**
 * Cleans "generated" and fills all HTML elements of ids from a given list. Creates only div with id, and h2 with title inside it.
 * @param {object} jsObj Object with HTML data to fill
 */
function PrefillHTML(jsObj, element = "generated") {

    let domElement = document.getElementById(element);
    let sFillText = "";
    // Clean "generated" div
    domElement.innerHTML = "";

    let id = "";
    let h2 = "";
    let h2id = "";
    let mp = ""; // max Percent
    let cl = ""; // class

    for (let i in jsObj) {
        id = jsObj[i].id;
        h2 = jsObj[i].h2;
        h2id = "h2-" + jsObj[i].id;

        mp = `<div class='percent-box'>${(i === "intro") ? 0: jsObj[i].maxPercent}%</div>`;
        if (!jsObj[i].hasOwnProperty("maxPercent")) mp = "";

        sFillText += `
            <div id="${id}" ${cl}>
                <h2 id='${h2id}'>${h2}${mp}</h2>
            </div>
        `;
    }

    domElement.innerHTML = sFillText;
}

/**
 * Toggles display of "hk-hints". On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxHintsToggle(param = "none") {
    let checkboxId = document.getElementById("checkbox-hints");

    switch (param) {
        case "hide":
            document.getElementById("hk-hints").classList.add("hidden");
            checkboxId.value = "hints-off";
            checkboxId.checked = false;

            // remember this choice for subsequent page visits and browser restarts
            if (StorageAvailable('localStorage')) {
                localStorage.setItem("hkCheckboxHints", "unchecked");
            }
            break;
        case "show":
            document.getElementById("hk-hints").classList.remove("hidden");
            checkboxId.value = "hints-on";
            checkboxId.checked = true;

            // remember this choice for subsequent page visits and browser restarts
            if (StorageAvailable('localStorage')) {
                localStorage.setItem("hkCheckboxHints", "checked");
            }
            break;
        default:
            // This runs when the checkbox is not checked
            if (checkboxId.checked === false) {
                document.getElementById("hk-hints").classList.add("hidden");
                checkboxId.value = "hints-off";

                // remember this choice for subsequent page visits and browser restarts
                if (StorageAvailable('localStorage')) {
                    localStorage.setItem("hkCheckboxHints", "unchecked");
                }
            }
            // This runs when the checkbox is checked
            else {
                document.getElementById("hk-hints").classList.remove("hidden");
                checkboxId.value = "hints-on";

                // remember this choice for subsequent page visits and browser restarts
                if (StorageAvailable('localStorage')) {
                    localStorage.setItem("hkCheckboxHints", "checked");
                }
            }
    }
}

/**
 * Toggles display of ".spoiler-span" class. On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxSpoilersToggle(param = "none") {
    let checkboxId = document.getElementById("checkbox-spoilers");
    let allClassElements = document.querySelectorAll(".spoiler-span");
    let length = allClassElements.length;

    switch (param) {
        case "hide":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.add("hidden");
            }
            checkboxId.value = "spoilers-off";
            checkboxId.checked = false;

            // remember this choice for subsequent page visits and browser restarts
            if (StorageAvailable('localStorage')) {
                localStorage.setItem("hkCheckboxSpoilers", "unchecked");
            }
            break;
        case "show":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.remove("hidden");
            }
            checkboxId.value = "spoilers-on";
            checkboxId.checked = true;

            // remember this choice for subsequent page visits and browser restarts
            if (StorageAvailable('localStorage')) {
                localStorage.setItem("hkCheckboxSpoilers", "checked");
            }
            break;
        default:
            // This runs when the checkbox is not checked
            if (checkboxId.checked === false) {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.add("hidden");
                }
                checkboxId.value = "spoilers-off";

                // remember this choice for subsequent page visits and browser restarts
                if (StorageAvailable('localStorage')) {
                    localStorage.setItem("hkCheckboxSpoilers", "unchecked");
                }
                break;
            }
            // This runs when the checkbox is checked
            else {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.remove("hidden");
                }
                checkboxId.value = "spoilers-on";

                // remember this choice for subsequent page visits and browser restarts
                if (StorageAvailable('localStorage')) {
                    localStorage.setItem("hkCheckboxSpoilers", "checked");
                }
            }
    }
}

/**
 * Detects whether Storage is both supported and available.
 * MDN WebDocs https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
 * @param {Storage} type type of storage. Ex. "localStorage" or "sessionStorage"
 * @returns {Boolean}
 */
function StorageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

/* ----------------------- Event Listeners -------------------------- */

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

// Checkboxes functions
document.getElementById("checkbox-hints").addEventListener("click", CheckboxHintsToggle, false);
document.getElementById("checkbox-spoilers").addEventListener("click", CheckboxSpoilersToggle, false);

/* ------------------------- Exports ------------------------------- */

export {
    PrefillHTML,
    CheckboxHintsToggle,
    CheckboxSpoilersToggle,
    StorageAvailable
};