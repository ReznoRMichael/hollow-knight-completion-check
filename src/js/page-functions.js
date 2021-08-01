import {
  benchmarkTimes
} from "./HKCheckCompletion.js";

import {
  LoadSaveFile
} from "./LoadSaveFile.js";

// ---------------- Load image files (necessary for Webpack) ----------------- //

import HEALTH_MASK_IMAGE from "../img/health-mask.png";
import HEALTH_MASK_STEEL_IMAGE from "../img/health-mask-steel.png";
import SOUL_ORB_IMAGE from "../img/soul-orb.png";
import NOTCH_IMAGE from "../img/notch.png";
import NOTCH_FILLED_IMAGE from "../img/notch-filled.png";
import NOTCH_OVERCHARMED_IMAGE from "../img/notch-overcharmed.png";
import GEO_IMAGE from "../img/geo.png";
import GEO_SHADE_IMAGE from "../img/geo-shade.png";

// ---------------- Constants ----------------- //

// const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ "
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ "
const SYMBOL_PARTIAL = "<i class='icon-ok-squared partial'></i>"; // "✔ "
// const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ "
const SYMBOL_CLOCK = "<i class='icon-clock'></i>"; // "🕑 "
const SYMBOL_FILE = "<i class='icon-doc-text-inv'></i>"; // "📁"
const SYMBOL_EMPTY = "<span class='padding-left'></span>";
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";
const WIKI_LINK = "https://hollowknight.fandom.com/wiki/";

const ROOT = document.documentElement;
const SCROLL_BUTTON = document.querySelector(".scroll-up-button");


/* ######################################################################################### */


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
 * Replaces the h2 titles with a current percent/max percent values as read from the save file
 * @param {object} jsObj Object with HTML data to fill
 * @param {number} hkGameCompletion Total completion percentage in a save file
 */
function CompletionHTML(jsObj, hkGameCompletion) {

  let h2 = "";
  let h2id = "";
  let cl = "";
  let clGreen = "box-green";
  let clRed = "box-red";
  let cp = 0; // current Percent
  let mp = 0; // max Percent
  let fillText = "";

  for (let i in jsObj) {
    h2 = jsObj[i].h2;
    h2id = "h2-" + jsObj[i].id;

    (jsObj[i].hasOwnProperty("percent")) ? cp = jsObj[i].percent: cp = 0;
    if (i === "intro") cp = hkGameCompletion;

    // Don't use percent-box for Essentials, Achievements, Statistics
    if (!jsObj[i].hasOwnProperty("maxPercent")) {
      fillText = "";
    }
    // otherwise use percent-box with values cp/mp%
    else {

      mp = jsObj[i].maxPercent;

      if (i === "maskShards") {
        let perc = jsObj[i].percent;
        (perc % 4) ? cp = Math.floor(perc / 4): cp = perc / 4;
      } else if (i === "vesselFragments") {
        let perc = jsObj[i].percent;
        (perc % 3) ? cp = Math.floor(perc / 3): cp = perc / 3;
      }

      // switches the box to red when a section (h2) is 0
      if (cp === 0) {
        cl = ` ${clRed}`;
      }
      // switches the box to green when a section (h2) is completed
      else if (cp === mp) {
        cl = ` ${clGreen}`;
      }
      // default is blue (partially completed and starting value)
      else cl = "";

      // needed for Game Status to show percentage properly (adds a slash for all boxes except the Game Status one)
      if (jsObj[i].id != "hk-intro") cp += "/";

      fillText = `<div class='percent-box${cl}'>${(i === "intro") ? cp: cp + jsObj[i].maxPercent}%</div>`;
    }
  }
}


/* ################################### Optimized Functions ###################################### */


function GenerateInnerHTML(db) {

  // start benchmarking
  benchmarkTimes.GenerateInnerHTML.timeStart = performance.now();

  let sections = db.sections;

  /* console.log(sections); */

  let entries = {};
  let obj = {
    icon: "",
    iconClass: "",
    textPrefix: "",
    textSuffix: "",
    wiki: "",
    div: `<div class='single-entry'>`,
    b: ["<b>", "</b>"],
    p: "<span class='p-left-small'></span>",
    span: ["", ""],
    spoiler: ["", ""],
    spoilerAfter: "",
  };

  let iconGreen = SYMBOL_TRUE;
  let iconRed = SYMBOL_FALSE;
  let iconPartial = SYMBOL_PARTIAL;
  let iconClock = SYMBOL_CLOCK;
  let iconNull = SYMBOL_EMPTY;

  let finalHTMLFill = "";
  let textFill = "";

  let Img = "";
  let maskNormal = `<img src='${HEALTH_MASK_IMAGE}' class='health-mask' alt='health mask image' title='Health Mask'>`;
  let maskSteel = `<img src='${HEALTH_MASK_STEEL_IMAGE}' class='health-mask' alt='steel health mask image' title='Steel Health Mask'>`;
  let soulNormal = `<img src='${SOUL_ORB_IMAGE}' class='soul-orb' alt='soul orb image' title='Single Soul Orb (one spell cast)'>`;
  let notchNormalImage = `<img src='${NOTCH_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Free)'>`;
  let notchFilledImage = `<img src='${NOTCH_FILLED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Used)'>`;
  let notchOvercharmedImage = `<img src='${NOTCH_OVERCHARMED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Overcharmed)'>`;
  let geoNormalImage = `<img src='${GEO_IMAGE}' class='geo-symbol' alt='geo symbol image' title='Geo'>`;
  let geoShadeImage = `<img src='${GEO_SHADE_IMAGE}' class='geo-symbol' alt='shade geo symbol image' title='Shade Geo'>`;
  let div = `<div class='single-entry'>`;
  let divFlex = `<div class='flex-container align-center'>`;


  /* ############################## create all main entries ############################## */


  for (let section in sections) {

    textFill = "";

    /* ############################# Tab Switch buttons and <div>s ############################# */

    switch (section) {

      case "bosses":

        textFill += [
          `<div class="tab-switch-buttons">`,
            `<button id="button-switch-main" name="main" class="button tab-switch" type="button">Main</button>`,
            `<button id="button-switch-essential" name="essential" class="button tab-switch" type="button">Essential</button>`,
            `<button id="button-switch-journal" name="journal" class="button tab-switch" type="button">Journal</button>`,
            `<button id="button-switch-statistics" name="statistics" class="button tab-switch" type="button">Stats</button>`,
            `<button id="button-switch-godhome" name="godhome" class="button tab-switch" type="button">Godhome</button>`,
          `</div>`,
        ].join("\n");

        textFill += `<div id="tab-main" class="large-section">`;

        break;

      case "essential":

        textFill += `<div id="tab-essential" class="large-section">`;

        break;

      case "huntersJournal":

        textFill += `<div id="tab-journal" class="large-section">`;

        break;

      case "statistics":

        textFill += `<div id="tab-statistics" class="large-section">`;

        break;

      case "godhomeStatistics":

        textFill += `<div id="tab-godhome" class="large-section">`;

        break;
    }

    entries = sections[section].entries;

    /* ####################### Section div id start ########################## */

    /* starts a new <div> with the current section id */
    textFill += SectionStart(sections[section]);

    /* creates a <h2> tag for the current section and fills with current%/max%
    If the save file was not analyzed, then fill only max% on blue background */
    if (db.saveAnalyzed === true) {
      textFill += CompletionFill(sections[section]);
    } else {
      textFill += CompletionFillNoSave(sections[section]);
    }


    /* #################### Different behaviour depending on the section ####################### */


    switch (section) {

      /* ############### Game Status (intro) ################ */

      case "intro":

        /* ############## Create each single entry (intro) ############### */

        for (let entry in entries) {

          obj.b = ["", ""];
          obj.p = "<span class='p-left-small'></span>";
          obj.span = ["<b>", "</b>"];
          obj.div = div;

          /* -------- Icons (next to each entry) --------- */
          if (entries[entry].hasOwnProperty("icon")) {

            switch (entries[entry].icon) {

              case "clock":
                obj.icon = iconClock;
                break;
              case "green":
                obj.icon = iconGreen;
                break;
              case "partial":
                obj.icon = iconPartial;
                break;
              case "red":
                obj.icon = iconRed;
                break;
              default:
                obj.icon = iconNull;
            }
          } else {
            obj.icon = iconRed;
          }

          obj.textPrefix = entries[entry].name;
          obj.textSuffix = entries[entry].spoiler;
          obj.spoilerAfter = "";

          /* Different text and images for each entry in the "Game Status" (intro) section */

          switch (entry) {
            case "gameCompletion":
              obj.textSuffix = `${obj.textSuffix} %`;
              obj.spoilerAfter = `</b> ${entries[entry].spoilerAfter}`;
              obj.span[1] = "";

              break;

            case "gameCompletionExtended":
              obj.spoilerAfter = `</b> ${entries[entry].spoilerAfter}`;
              obj.span[1] = "";

              break;

            case "health":

              /* ----------------- Horizontal Line after save version ---------------- */
              textFill += FLEUR_DIVIDE;

              obj.div = divFlex;
              obj.span = ["", ""];

              (entries[entry].permadeathMode) ? Img = maskSteel: Img = maskNormal;

              for (let i = 0, total = entries[entry].amountTotal; i < total; i++) {
                obj.textSuffix += Img;
              }

              obj.textSuffix += `${obj.p}<sup>(${entries[entry].amountTotal})</sup>`;

              obj.p = "";
              break;

            case "soul":
              obj.div = divFlex;
              obj.span = ["", ""];
              Img = soulNormal;

              for (let i = 0, total = Math.round(entries[entry].amountTotal / 33); i < total; i++) {
                obj.textSuffix += Img;
              }

              obj.textSuffix += `${obj.p}<sup>(${Math.round(entries[entry].amountTotal / 33)})</sup>`;

              obj.p = "";
              break;

            case "notches":
              obj.div = divFlex;
              obj.span = ["", ""];

              /* First, check filled (used) notches and fill them (skips if no filled notches) */
              if (entries[entry].amountFilled > 0) {
                for (let i = 0, total = entries[entry].amountFilled; i < total; i++) {
                  obj.textSuffix += notchFilledImage;
                }
              }

              /* Second, check overcharmed notches and fill them (skips if player is not overcharmed) */
              if (entries[entry].amountOvercharmed > 0) {
                for (let i = 0, total = entries[entry].amountOvercharmed; i < total; i++) {
                  obj.textSuffix += notchOvercharmedImage;
                }
              }

              /* Last, fill all unused notches */
              if (entries[entry].amountUnused > 0) {
                for (let i = 0, total = entries[entry].amountUnused; i < total; i++) {
                  obj.textSuffix += notchNormalImage;
                }
              }

              obj.textSuffix += `${obj.p}<sup>(${entries[entry].amountTotal})</sup>`;

              break;

            case "geo":
              obj.div = divFlex;
              obj.span = ["", ""];

              obj.textSuffix += `${geoNormalImage}<b>${entries[entry].amount}</b>`;
              // Show Shade Geo value and image only if Shade has at least 1 Geo on it
              if (entries[entry].amountShade > 0) obj.textSuffix += `${obj.p}+${geoShadeImage}<b>${entries[entry].amountShade}</b>`;

              // Show also total Geo (Geo + Shade Geo) if player has at least 1 geo alongside the shade geo
              if (entries[entry].amount > 0 && entries[entry].amountShade > 0) {
                obj.textSuffix += `${obj.p}=${obj.p}<b>${entries[entry].amountTotal}</b>`;
              }

              obj.p = "";
              break;

            default:
          }

          textFill += SingleEntryFill(obj);
        }

        break;

        /* #################### Hints (hints) #################### */

      case "hints":
        obj.b = ["", ""];
        obj.span = ["<span class='hint'>", "</span>"];
        obj.icon = "";
        obj.textPrefix = "";
        obj.div = div;

        /* display only one (current) hint */
        obj.textSuffix = entries[sections[section].current].spoiler;

        textFill += SingleEntryFill(obj);

        break;

        /* ###################### Create all other sections ##################### */

      default:

        /* ###################### Create section descriptions under each H2 title ##################### */

        if (sections[section].hasOwnProperty("description")) {
          textFill += SectionDescription(sections[section]);
        }

        /* ###################### Create each single entry (from all other sections) ##################### */

        for (let entry in entries) {

          /* obj.p = "<span class='p-left-small'></span>"; */
          obj.p = "";
          obj.span = ["<span class='spoiler-span blurred'>", "</span>"];
          obj.spoiler = ["<span class='spoiler-text'>", "</span>"];
          obj.div = div;
          obj.textPrefix = entries[entry].name;
          obj.textSuffix = `— ${entries[entry].spoiler}`;
          obj.wiki = entries[entry].wiki;

          /* -------- Icons (next to each entry) --------- */
          if (entries[entry].hasOwnProperty("icon")) {

            switch (entries[entry].icon) {

              case "clock":
                obj.icon = iconClock;
                break;

              case "green":
                obj.icon = iconGreen;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;

              case "partial":
                obj.icon = iconPartial;
                break;

              case "partialJournal":
                obj.icon = iconPartial;

                /* -------- Prevents textSuffix blurring when a player has already discovered the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;

              case "red":
                obj.icon = iconRed;
                break;

              default:
                obj.icon = iconNull;
            }
          } else {
            obj.icon = iconRed;
          }

          /* assign the appropriate spoiler class name depending on the completion check (for blurring names) */
          if (entries[entry].hasOwnProperty("icon")) {
            switch (entries[entry].icon) {

              case "red":
              case "none":
                obj.iconClass = " spoiler-red blurred";
                break;

              default:
                /* -------- Prevents TextPrefix blurring when a player has already discovered the entry --------- */
                obj.iconClass = "";
            }
          } else {
            obj.iconClass = "";
          }

          obj.b = [`<a class="wiki${obj.iconClass}" href="${WIKI_LINK}${obj.wiki}" target="_blank">`, "</a>"];

          if (entries[entry].hasOwnProperty("amount")) {
            if (entries[entry].hasOwnProperty("disabled")) {
              if (entries[entry].disabled !== true) {
                obj.textPrefix += `: ${entries[entry].amount}`;
              }
            } else {
              obj.textPrefix += `: ${entries[entry].amount}`;
            }
          }

          if (entries[entry].hasOwnProperty("amountTotal")) {
            obj.textPrefix += ` / ${entries[entry].amountTotal}`;
          }

          if (entries[entry].hasOwnProperty("id")) {

            switch (entries[entry].id) {

              case "geoRocks":
              case "itemsDiscovered":
                obj.textPrefix += `: ${entries[entry].notActivated} | ${entries[entry].activated} | ${entries[entry].discoveredTotal}`;

                break;

              default:
            }
          }

          if (entries[entry].hasOwnProperty("disabled")) {
            if (entries[entry].disabled === true) {
              obj.textPrefix = `<del>${obj.textPrefix}</del>`;
            }
          }

          if (obj.textPrefix.includes("<del>")) obj.textSuffix = `<del>${obj.textSuffix}</del>`;

          /* textFill += SingleEntryFill(section, entries[entry]); */
          textFill += SingleEntryFill(obj);

          /* ##################### Horizontal lines ####################### */

          switch (entry) {
            case "pantheonKnight":
            case "killedHollowKnightPrime":
            case "bossDoorStateTier5":
              textFill += FLEUR_DIVIDE;

              break;
          }
        } /* end for (let entry in entries) */
    } /* end switch (section) - central */

    /* ############# Cumulate all section texts into one variable for final HTML filling. End section div tag ############### */

    finalHTMLFill += `${textFill}\n</div>\n\n`;

    /* ################## End the Tab divs (must be after section ending div) ################# */

    switch (section) {

      /* ending the tabs */
      case "godmaster": // main
      case "achievements": // essential
      case "huntersJournalOptional": // essential
      case "statistics": // stats
      case "godhomeStatistics": // godhome
        
        finalHTMLFill += `</div>`;

      break;

    }

  } /* end for (let section in sections) */

  /* console.groupCollapsed("finalHTMLFill");
  console.log(finalHTMLFill);
  console.groupEnd(); */

  /* --------------- Final single HTML access and fill here ------------------ */

  document.getElementById("generated").innerHTML = finalHTMLFill;

  /* make tab switch buttons working (on click) - must run after inner HTML generation is finished */

  document.querySelectorAll(".tab-switch").forEach( (button) => {

    button.addEventListener("click", (e) => {
      PageSwitchTab(e.target.name);
    });
  });

  /* Check local storage first, and set the last selected Tab on the page (remembers last clicked tab) */

  if (StorageAvailable('localStorage')) {

    if (localStorage.getItem("hkTabActive")) {
      PageSwitchTab(localStorage.getItem("hkTabActive"));
    } else {
      PageSwitchTab("main");
    }
  }

  // finish benchmarking
  benchmarkTimes.GenerateInnerHTML.timeEnd = performance.now();
}

/**
 * Hides all other tabs, except the one which button was clicked (shows only the chosen tab)
 * @param {String} clickedButton The click target (button clicked)
 */
function PageSwitchTab(clickedButton) {

  let sectionList = document.querySelectorAll(".large-section");
  let buttonList = document.querySelectorAll(".tab-switch");

  /* Make Active Tab Visible */
  for (let i = 0, length = sectionList.length; i < length; i++) {

    /* Other tabs except the clicked one */
    if (sectionList[i].id !== `tab-${clickedButton}`) {

      if (!sectionList[i].classList.contains("hidden")) {
        sectionList[i].classList.add("hidden");
      }
    }
    /* The clicked tab */
    else {

      if (sectionList[i].classList.contains("hidden")) {
        sectionList[i].classList.remove("hidden");
      }
    }
  }

  /* Make Active Button stand out */
  for (let i = 0, length = buttonList.length; i < length; i++) {

    /* Other buttons except the clicked one */
    if (buttonList[i].id !== `button-switch-${clickedButton}`) {

      if (buttonList[i].classList.contains("tab-active")) {
        buttonList[i].classList.remove("tab-active");
      }
    }
    /* The clicked button */
    else {

      if (!buttonList[i].classList.contains("tab-active")) {
        buttonList[i].classList.add("tab-active");
      }
    }
  }

  /* remember this choice for subsequent page visits and browser restarts */
  if (StorageAvailable('localStorage')) {

    if (clickedButton) {
      localStorage.setItem("hkTabActive", clickedButton);
    }
  }
}

function SectionDescription(section) {

  return `<p class="section-description">${section.description}</p>`;
}

function SectionStart(section) {

  return `<div id="${section.id}">\n`;
}

/**
 * Replaces the h2 titles with max percent values as read from the database
 */
function CompletionFillNoSave(section) {

  let id = "";
  let h2 = "";
  let h2id = "";
  let mp = ""; // max Percent
  let symbol = "%";
  // let cl = ""; // class

  id = section.id;
  h2 = section.h2;
  h2id = "h2-" + section.id;

  /* Do not display % when showing Hunter's Journal entries */
  if (section.id === "hk-journal") symbol = "";

  mp = `<div class='percent-box'>${(id === "hk-intro") ? 0: section.maxPercent}${symbol}</div>`;
  if (!section.hasOwnProperty("maxPercent")) mp = "";

  /* return [
      `<div id="${id}" ${cl}>`,
          `<h2 id='${h2id}'>${h2}${mp}</h2>`,
      "</div>\n"
  ].join(""); */
  return `<h2 id='${h2id}'>${h2}${mp}</h2>`;
}

/**
 * Replaces the h2 titles with a current percent/max percent values as read from the database
 */
function CompletionFill(section) {

  let h2 = section.h2;
  let h2id = `<h2 id="h2-${section.id}">`;
  let cl = "";
  let clGreen = "box-green";
  let clRed = "box-red";
  let cp = 0; // current Percent
  let mp = 0; // max Percent
  let symbol = "%";
  let fillText = "";

  (section.hasOwnProperty("percent")) ? cp = section.percent: cp = 0;

  // Don't use percent-box for Essentials, Achievements, Statistics
  if (!section.hasOwnProperty("maxPercent")) {
    fillText = "";
  }
  // otherwise use percent-box with values cp/mp%
  else {

    mp = section.maxPercent;

    if (section.id === "hk-maskshards") {
      let perc = section.percent;
      (perc % 4) ? cp = Math.floor(perc / 4): cp = perc / 4;
    } else if (section.id === "hk-vesselfragments") {
      let perc = section.percent;
      (perc % 3) ? cp = Math.floor(perc / 3): cp = perc / 3;
    }

    // switches the box to red when a section (h2) is 0
    if (cp === 0) {
      cl = ` ${clRed}`;
    }
    // switches the box to green when a section (h2) is completed
    else if (cp === mp) {
      cl = ` ${clGreen}`;
    }
    // default is blue (partially completed and starting value)
    else cl = "";

    // needed for Game Status to show percentage properly (adds a slash for all boxes except the Game Status one)
    if (section.id !== "hk-intro") cp += "/";

    /* Do not display % when showing Hunter's Journal entries */
    if (section.id === "hk-journal") symbol = "";

    fillText = `<div class='percent-box${cl}'>${(section.id === "hk-intro") ? cp: `${cp}${section.maxPercent}`}${symbol}</div>`;
  }

  return `\t${h2id}${h2}${fillText}</h2>\n`;

}

/* function SingleEntryFill(section, entry) { */
function SingleEntryFill(obj) {

  return [
    obj.div,
    obj.icon,
    `${obj.b[0]}${obj.textPrefix}${obj.b[1]}`,
    obj.span[0],
    obj.p,
    obj.spoiler[0],
    `${obj.textSuffix}${obj.spoilerAfter}`,
    obj.spoiler[1],
    obj.span[1],
    "</div>\n"
  ].join("");

}

/**
 * Adds HTML string to an element with a given ID.
 * @param {object} divId object containing div ID of the HTML element to append to
 * @param {string} content HTML contents to append
 */
function AppendHTML(divId, content) {
  document.getElementById(divId.id).innerHTML += "\n" + content;
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
  let allClassElementsRed = document.querySelectorAll(".spoiler-red");
  let length = allClassElements.length;
  let lengthRed = allClassElementsRed.length;

  switch (param) {
    case "hide":
      for (let i = 0; i < length; i++) {
        allClassElements[i].classList.add("blurred");
      }

      for (let i = 0; i < lengthRed; i++) {
        allClassElementsRed[i].classList.add("blurred");
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
        allClassElements[i].classList.remove("blurred");
      }

      for (let i = 0; i < lengthRed; i++) {
        allClassElementsRed[i].classList.remove("blurred");
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
          allClassElements[i].classList.add("blurred");
        }

        for (let i = 0; i < lengthRed; i++) {
          allClassElementsRed[i].classList.add("blurred");
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
          allClassElements[i].classList.remove("blurred");
        }

        for (let i = 0; i < lengthRed; i++) {
          allClassElementsRed[i].classList.remove("blurred");
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

/**
 * Fills the innerHTML of a given HTML Element with provided contents
 * @param {string} elementId Element ID to update
 * @param {string} textFill Updated contents (innerHTML)
 */
function FillInnerHTML(elementId, textFill) {

  const element = document.getElementById(elementId);
  element.innerHTML = textFill;
}

/**
 * Focuses, selects and copies to clipboard contents inside a clicked element. Includes optional tooltip update after the copying is done.
 * @param {MouseEvent} mouseEvent from the clicked element (AddEventListener)
 * @param {string} tooltipId Element ID of the tooltip to update
 * @param {string} tooltipFill Updated contents of the tooltip
 */
function SelectCopyInputText(mouseEvent, tooltipId = "", tooltipFill = "") {

  const element = document.getElementById(mouseEvent.target.id);

  // this prevents the un-selected effect after clicking the second time (clears all selection first)
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }

  element.focus(); // best to focus the element first before selecting
  element.select();
  element.setSelectionRange(0, 99999); // for mobile devices

  // Copy the text inside the text field to clipboard
  document.execCommand("copy");

  // optional tooltip showing
  if (tooltipFill.length && tooltipId.length) FillInnerHTML(tooltipId, tooltipFill);
}

function FileNameFormat(file, nameLength, beginLength, endLength) {

  var fileName = file.name;

  /* Shorten the file name if too long */
  if (fileName.length > nameLength) {

    let begin = fileName.slice(0, beginLength); // take X characters from the beginning (0)
    let end = fileName.slice(-endLength); // take X characters from the end (-)
    fileName = `${begin}..${end}`;
  }

  return fileName;
}

function FileDateFormat(file) {

  var fileDate = new Date(file.lastModified);

  var year = fileDate.getFullYear();
  var month = fileDate.getMonth() + 1;
  var day = fileDate.getDate();
  var hour = fileDate.getHours();
  var minutes = fileDate.getMinutes();
  /* var seconds = fileDate.getSeconds(); */

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  /* if (seconds < 10) seconds = "0" + seconds; */

  return `${year}.${month}.${day} ${hour}:${minutes}`;
}

/* ========================== Event Listeners ========================== */

/* --------------- Toggle visibility of scroll arrow ------------------ */

document.addEventListener("scroll", () => {

  TogglePageScrollElement(
    /* the document element root (<html>) */
    ROOT,
    /* Which element to toggle visibility */
    SCROLL_BUTTON,
    /* How far the user has to scroll to show the element */
    0.1);
});

/* ---------------- Scroll to top when clicked ------------------- */

SCROLL_BUTTON.addEventListener("click", () => {
  ScrollToElement(ROOT);
});

/* ------------- Auto select & copy to clipboard when the save file location input text is clicked once ------------- */

document.getElementById("save-location-input").addEventListener("click", (e) => {

  let tooltip = document.getElementById("save-location-input-tooltip");

  SelectCopyInputText(e, "save-location-input-tooltip", "Copied save files location to clipboard");

  /* make sure that the tooltip is centered */
  tooltip.style.marginLeft = `-${tooltip.offsetWidth / 2}px`;
}, false);

/* -------------- Switch text back to the default on mouse out -------------- */

document.getElementById("save-location-input").addEventListener("mouseout", () => {

  let tooltip = document.getElementById("save-location-input-tooltip");

  /* change the text and center only when the text was different */
  if (tooltip.innerHTML !== "Click once to copy to clipboard") {
    
      FillInnerHTML("save-location-input-tooltip", "Click once to copy to clipboard");
    
      /* make sure that the tooltip is centered */
      tooltip.style.marginLeft = `-${tooltip.offsetWidth / 2}px`;
  }
}, false);

/* ------------- Checkbox functions ---------------------- */

document.getElementById("checkbox-hints").addEventListener("click", CheckboxHintsToggle, false);
document.getElementById("checkbox-spoilers").addEventListener("click", CheckboxSpoilersToggle, false);

/* ------------ Drag & drop file to the window -------------- */

window.addEventListener('dragover', (event) => {

  event.stopPropagation();
  event.preventDefault();

  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = 'copy';
});

window.addEventListener('drop', (event) => {

  event.stopPropagation();
  event.preventDefault();

  const dt = event.dataTransfer;

  /* Launch save file analyzing */
  LoadSaveFile(dt, performance.now());

  var label = document.getElementById("save-area-file").nextElementSibling;
  var labelInitialText = label.innerHTML;

  /* Shorten the file name if longer than 16 characters. Display first 10 characters and last 4. */
  var fileName = FileNameFormat(dt.files[0], 16, 10, 4);

  /* Display a custom formatted last modified date. */
  var fileDate = FileDateFormat(dt.files[0]);

  /* Display the save file name and date on the button */
  if (fileName) {
    label.innerHTML = `${SYMBOL_FILE}${fileName}<div class="code-little">${fileDate}</div>`;
  } else {
    label.innerHTML = labelInitialText;
  }
});

/* ---------- Monitor file input change and show the file name when file is loaded ----------- */

document.getElementById("save-area-file").addEventListener("change", (event) => {

  var label = document.getElementById("save-area-file").nextElementSibling;
  var labelInitialText = label.innerHTML;

  /* Shorten the file name if longer than 16 characters. Display first 10 characters and last 4. */
  var fileName = FileNameFormat(event.target.files[0], 16, 10, 4);

  /* Display a custom formatted last modified date. */
  var fileDate = FileDateFormat(event.target.files[0]);

  if (fileName) {
    label.innerHTML = `${SYMBOL_FILE}${fileName}<div class="code-little">${fileDate}</div>`;
  } else {
    label.innerHTML = labelInitialText;
  }
});

/* -------- Clean the text area and file input from leftover save file if present (Firefox especially) -------- */

document.addEventListener("DOMContentLoaded", () => {

  (async () => {
    document.getElementById("save-area").value = "";
    document.getElementById("save-area-file").value = "";
  })();
});

/* ------------------------- Exports ------------------------------- */

export {
  GenerateInnerHTML,
  AppendHTML,
  CheckboxHintsToggle,
  CheckboxSpoilersToggle,
  StorageAvailable
};