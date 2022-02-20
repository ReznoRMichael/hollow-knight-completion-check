import {
  LoadSaveFile
} from "./LoadSaveFile.js";

/* ------------------------ Load image files (necessary for Webpack) ---------------------------------------------------------- */

import HEALTH_MASK_IMAGE from "../img/health-mask.png";
import HEALTH_MASK_STEEL_IMAGE from "../img/health-mask-steel.png";
import SOUL_ORB_IMAGE from "../img/soul-orb.png";
import NOTCH_IMAGE from "../img/notch.png";
import NOTCH_FILLED_IMAGE from "../img/notch-filled.png";
import NOTCH_OVERCHARMED_IMAGE from "../img/notch-overcharmed.png";
import GEO_IMAGE from "../img/geo.png";
import GEO_SHADE_IMAGE from "../img/geo-shade.png";

/* ------------------------- Constants ---------------------------------------------------------------------------------------- */

// const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ "
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ "
const SYMBOL_PARTIAL = "<i class='icon-ok-squared partial'></i>"; // "✔ "
const SYMBOL_CLOCK = "<i class='icon-clock'></i>"; // "🕑 "
const SYMBOL_FILE = "<i class='icon-doc-text-inv'></i>"; // "📁"
const SYMBOL_BINDING_NAIL = "<i class='reznoricon-binding-nail'></i>"; // Nail Binding
const SYMBOL_BINDING_SHELL = "<i class='reznoricon-binding-shell'></i>"; // Shell Binding
const SYMBOL_BINDING_CHARMS = "<i class='reznoricon-binding-charms'></i>"; // Charm Binding
const SYMBOL_BINDING_SOUL = "<i class='reznoricon-binding-soul'></i>"; // Soul Binding
const SYMBOL_BINDING_ALL = "<i class='reznoricon-binding-all'></i>"; // All Bindings
const SYMBOL_ATTUNED = "<i class='reznoricon-attuned'></i>"; // Attuned
const SYMBOL_ASCENDED = "<i class='reznoricon-ascended'></i>"; // Ascended
const SYMBOL_RADIANT = "<i class='reznoricon-radiant'></i>"; // Radiant
const SYMBOL_EMPTY = "<span class='padding-left'></span>"; // No symbol
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";
const WIKI_LINK = "https://hollowknight.fandom.com/wiki/";

const ROOT = document.documentElement;
const SCROLL_BUTTON = document.querySelector(".scroll-up-button");

/* -------------------------- Variables --------------------------------------------------------------------------------------- */

let benchmarkTimes = {
  LoadSaveFile: {
    name: "LoadSaveFile()",
    timeStart: 0,
    timeEnd: 0
  },
  CheckCompletion: {
    name: "HKCheckCompletion()",
    timeStart: 0,
    timeEnd: 0
  },
  GenerateInnerHTML: {
    name: "GenerateInnerHTML()",
    timeStart: 0,
    timeEnd: 0
  },
  HKReadTextArea: {
    name: "HKReadTextArea()",
    timeStart: 0,
    timeEnd: 0
  },
  Total: {
    name: "Total",
    timeStart: 0,
    timeEnd: 0
  }
};


/* ######################################################################################### */

function Benchmark(bench) {

  let result = 0;

  for (let time in bench) {

    if (bench[time].timeStart !== 0 && bench[time].timeEnd !== 0) {

      result = bench[time].timeEnd - bench[time].timeStart;
      console.info(`${bench[time].name} time (ms) = %c${result.toFixed(2)}`, `color: #008cdc; font-weight: 700;`);
    }
    bench[time].timeStart = 0;
    bench[time].timeEnd = 0;
  }
}

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


/* ################################### Optimized Functions ########################################################################## */


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


  /* ############################## create all main entries ########################################################################## */


  for (let section in sections) {

    textFill = "";

    /* ############################# Tab Switch buttons and Large Section <div>s for switching ############################## */
    /* Important: Ending Tab </div>s are at "End the Tab divs" */

    switch (section) {

      /* Main % */
      case "bosses":

        textFill += [
          `<div class="tab-switch-buttons">`,
          `<button id="button-switch-main" name="main" class="button tab-switch" type="button">Main %</button>`,
          `<button id="button-switch-essentials" name="essentials" class="button tab-switch" type="button">Essentials %</button>`,
          `<button id="button-switch-journal" name="journal" class="button tab-switch" type="button">Journal</button>`,
          `<button id="button-switch-collectibles" name="collectibles" class="button tab-switch" type="button">Collectibles</button>`,
          `<button id="button-switch-geocaches" name="geocaches" class="button tab-switch" type="button">Geo Caches</button>`,
          `<button id="button-switch-secrets" name="secrets" class="button tab-switch" type="button">Secrets</button>`,
          `<button id="button-switch-godhome" name="godhome" class="button tab-switch" type="button">Godmaster</button>`,
          `<button id="button-switch-statistics" name="statistics" class="button tab-switch" type="button">Statistics</button>`,
          `</div>`,
        ].join("\n");

        textFill += `<div id="tab-main" class="large-section">`;

        break;

      /* Essentials % */
      case "essentialsCollectibles":

        textFill += `<div id="tab-essentials" class="large-section">`;

        break;

      /* Journal */
      case "huntersJournal":

        textFill += `<div id="tab-journal" class="large-section">`;

        break;

      /* Collectibles */
      case "charmNotches":

        textFill += `<div id="tab-collectibles" class="large-section">`;

        break;

      /* Geo Caches */
      case "geoChests":

        textFill += `<div id="tab-geocaches" class="large-section">`;

        break;

      /* Secrets */
      case "worldInteractions":

        textFill += `<div id="tab-secrets" class="large-section">`;

        break;

      /* Statistics */
      case "statistics":

        textFill += `<div id="tab-statistics" class="large-section">`;

        break;

      /* Godmaster */
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


    /* ######################## Different behaviour depending on the section ###################################################### */


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
                obj.icon = SYMBOL_CLOCK;
                break;
              case "green":
                obj.icon = SYMBOL_TRUE;
                break;
              case "partial":
                obj.icon = SYMBOL_PARTIAL;
                break;
              case "revealed":
                obj.icon = SYMBOL_EMPTY;
                break;
              case "red":
                obj.icon = SYMBOL_FALSE;
                break;
              default:
                obj.icon = SYMBOL_EMPTY;
            }
          } else {
            obj.icon = SYMBOL_FALSE;
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

      /* ######################### Create all other sections ################################################################## */

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
                obj.icon = SYMBOL_CLOCK;
                break;

              case "green":
                obj.icon = SYMBOL_TRUE;

                /* -------- Prevents hiding as spoiler when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;

              case "partial":
                obj.icon = SYMBOL_PARTIAL;
                break;

              case "revealed":
                obj.icon = SYMBOL_EMPTY;
                /* -------- Prevents textSuffix blurring when a player has already discovered the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;

              case "partialJournal":
                obj.icon = SYMBOL_PARTIAL;

                /* -------- Prevents textSuffix blurring when a player has already discovered the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;

              case "bindingNail":
                obj.icon = SYMBOL_BINDING_NAIL;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
  
              case "bindingShell":
                obj.icon = SYMBOL_BINDING_SHELL;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
  
              case "bindingCharms":
                obj.icon = SYMBOL_BINDING_CHARMS;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
  
              case "bindingSoul":
                obj.icon = SYMBOL_BINDING_SOUL;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
              
              case "bindingAll":
                obj.icon = SYMBOL_BINDING_ALL;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
              
              case "attuned":
                obj.icon = SYMBOL_ATTUNED;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
              
              case "ascended":
                obj.icon = SYMBOL_ASCENDED;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
              
              case "radiant":
                obj.icon = SYMBOL_RADIANT;

                /* -------- Prevents blurring when a player has already completed the entry --------- */
                obj.span[0] = "<span class='spoiler-span-green'>";
                break;
              
              case "red":
                obj.icon = SYMBOL_FALSE;
                break;

              default:
                obj.icon = SYMBOL_EMPTY;
            }
          } else {
            obj.icon = SYMBOL_FALSE;
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

        } /* end for (let entry in entries) */
    } /* end switch (section) - central */

    /* ############# Cumulate all section texts into one variable for final HTML filling. End section div tag ############### */

    finalHTMLFill += `${textFill}\n</div>\n\n`;

    /* ################## End the Tab divs (must be after section ending div) ################# */

    switch (section) {

      /* ending the tabs */
      case "godmaster": // Main %
      case "achievementsBosses": // Essentials %
      case "huntersJournalOptional": // Journal
      case "items": // Collectibles
      case "geoRocks": // Geo Caches
      case "corniferNotes": // Secrets
      case "statistics": // Statistics
      case "hallOfGods": // Godmaster

        finalHTMLFill += `</div>`;

        break;

    }

  } /* end for (let section in sections) */

  /* console.groupCollapsed("finalHTMLFill");
  console.log(finalHTMLFill);
  console.groupEnd(); */

  /* ################################## Horizontal line ############################################################################# */

  finalHTMLFill += FLEUR_DIVIDE;

  /* --------------- Final single HTML access and fill here ------------------ */

  document.getElementById("generated").innerHTML = finalHTMLFill;

  /* make tab switch buttons working (on click) - must run after inner HTML generation is finished */

  document.querySelectorAll(".tab-switch").forEach((button) => {

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
  let percentBox = ""; // Percent Box
  let symbol = "";
  let fullString = "";

  id = section.id;
  h2 = section.h2;
  h2id = "h2-" + section.id;

  /* Display % only when showing Main Game Completion % sections */
  switch (section.id) {

    case "hk-intro":
    case "hk-bosses":
    case "hk-charms":
    case "hk-equipment":
    case "hk-nailupgrades":
    case "hk-nailarts":
    case "hk-spells":
    case "hk-maskshards":
    case "hk-vesselfragments":
    case "hk-dreamnail":
    case "hk-warriordreams":
    case "hk-dreamers":
    case "hk-colosseum":
    case "hk-grimmtroupe":
    case "hk-lifeblood":
    case "hk-godmaster":

      symbol = "%";

      break;

    default:

      symbol = "";
  }

  percentBox = `<div class='percent-box'>${(id === "hk-intro") ? 0: section.maxPercent}${symbol}</div>`;
  if (!section.hasOwnProperty("maxPercent")) percentBox = "";

  fullString += `<h2 id='${h2id}'>${h2}${percentBox}</h2>`;

  // ----------------- add True Completion h2 title ---------------- //
  switch (id) {

    case "hk-intro":
      fullString += `<h2 id='hk-true-completion'>True Completion<div class='percent-box'>0.00%</div></h2>`;
      break;
    default:
  }

  return fullString;
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
  let midP = 0; // middle Percent
  let mp = 0; // max Percent
  let trueCompletionCurrent = 0;
  let trueCompletionTotal = 0;
  let trueCompletionPercent = 0; // True Completion %
  let symbol = "";
  let percentBox = "";
  let fullString = "";

  (section.hasOwnProperty("percent")) ? cp = section.percent: cp = 0;

  (section.hasOwnProperty("midPercent")) ? midP = section.midPercent: midP = 0;

  // Don't use percent-box for Essentials, Achievements, Statistics etc.
  if (!section.hasOwnProperty("maxPercent")) {
    percentBox = "";
  }
  // otherwise use percent-box with values cp/mp%
  else {

    mp = section.maxPercent;

    // Shards and Fragments correct calculations
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

    // Select which symbol or text to display (/ or something else depending on the section)
    switch (section.id) {

      // needed for Game Status to show percentage properly (adds a slash for all boxes except the Game Status one)
      case "hk-intro":
        break;

      // Hunter's Journal entries, Completed/Encountered of Total, e.g. 23/134 of 146
      case "hk-journal":
        cp = `${cp}/${midP} of `;
        break;

      default:
        cp += "/";
    }

    /* Display % only when showing Main Game Completion % sections */
    switch (section.id) {

      case "hk-intro":

        // True Completion % reading and calculation for percent-box and box colors
        trueCompletionCurrent = section.extendedCompletionDone;
        trueCompletionTotal = section.extendedCompletionTotal;
        trueCompletionPercent = (trueCompletionCurrent / trueCompletionTotal) * 100;
        symbol = "%";

        break;
      case "hk-bosses":
      case "hk-charms":
      case "hk-equipment":
      case "hk-nailupgrades":
      case "hk-nailarts":
      case "hk-spells":
      case "hk-maskshards":
      case "hk-vesselfragments":
      case "hk-dreamnail":
      case "hk-warriordreams":
      case "hk-dreamers":
      case "hk-colosseum":
      case "hk-grimmtroupe":
      case "hk-lifeblood":
      case "hk-godmaster":

        symbol = "%";

        break;

      default:

        symbol = "";
    }

    percentBox = `<div class='percent-box${cl}'>${(section.id === "hk-intro") ? cp: `${cp}${section.maxPercent}`}${symbol}</div>`;
  }

  fullString += `\t${h2id}${h2}${percentBox}</h2>\n`;

  // ----------------- add True Completion h2 title ---------------- //
  switch (section.id) {

    case "hk-intro":

      // switches the box to red when True Completion is 0
      if (trueCompletionCurrent === 0) {
        cl = ` ${clRed}`;
      }
      // switches the box to green when True Completion is 100.00%
      else if (trueCompletionCurrent === trueCompletionTotal) {
        cl = ` ${clGreen}`;
      }
      // default is blue (partially completed and starting value)
      else cl = "";

      fullString += `<h2 id='hk-true-completion'>
      True Completion<div class='percent-box${cl}'>${trueCompletionPercent.toFixed(2)}${symbol}</div>
      </h2>`;
      break;
    default:
  }

  return fullString;
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

function ToggleSaveModeSwitch() {

  let mode = this.value;

  let chooseFileButtonLabel = document.getElementById("file-input-label");
  let analyzeTextButton = document.getElementById("save-area-read");
  let saveTextArea = document.getElementById("save-area");

  if (mode === "modeText") {
    this.value = "modeFile";

    chooseFileButtonLabel.classList.remove("hidden");
    analyzeTextButton.classList.add("hidden");
    saveTextArea.classList.add("hidden");
    /* alert(this.value); */
  } else {
    this.value = "modeText";

    chooseFileButtonLabel.classList.add("hidden");
    analyzeTextButton.classList.remove("hidden");
    saveTextArea.classList.remove("hidden");
    /* Warning! focus() somehow makes the textarea text offset to the left */
    /* saveTextArea.focus(); */
    /* alert(this.value); */
  }
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

/* ------------ Toggle Save Mode Switch: Text Mode or File Mode -------------- */

document.getElementById("toggle-mode").addEventListener("click", ToggleSaveModeSwitch, false);

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
  StorageAvailable,
  Benchmark,
  benchmarkTimes
};