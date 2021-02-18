/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/HKCheckCompletion.js":
/*!*************************************!*\
  !*** ./src/js/HKCheckCompletion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HKCheckCompletion": () => /* binding */ HKCheckCompletion
/* harmony export */ });
/* harmony import */ var _hk_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hk-database.js */ "./src/js/hk-database.js");
/* harmony import */ var _page_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-functions.js */ "./src/js/page-functions.js");
/* harmony import */ var _hk_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hk-functions.js */ "./src/js/hk-functions.js");
/* harmony import */ var _img_health_mask_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/health-mask.png */ "./src/img/health-mask.png");
/* harmony import */ var _img_health_mask_steel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/health-mask-steel.png */ "./src/img/health-mask-steel.png");
/* harmony import */ var _img_soul_orb_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/soul-orb.png */ "./src/img/soul-orb.png");
/* harmony import */ var _img_notch_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/notch.png */ "./src/img/notch.png");
/* harmony import */ var _img_notch_filled_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/notch-filled.png */ "./src/img/notch-filled.png");
/* harmony import */ var _img_notch_overcharmed_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/notch-overcharmed.png */ "./src/img/notch-overcharmed.png");
/* harmony import */ var _img_geo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/geo.png */ "./src/img/geo.png");
/* harmony import */ var _img_geo_shade_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/geo-shade.png */ "./src/img/geo-shade.png");
/* eslint-disable no-prototype-builtins */

/* ---------------- Load main Hollow Knight database files ----------------- */

/* ----------------- Helper functions --------------------------------------- */


 // ---------------- Load image files (necessary for Webpack) ----------------- //








 // ---------------- Constants ----------------- //
// const DATA_UNKNOWN = "Data unknown";

var SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ "

var SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ "
// const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ "

var SYMBOL_EMPTY = "<span class='padding-left'></span>";
var FLEUR_DIVIDE = "<div class='horizontal-line'></div>";
var WIKI_LINK = "https://hollowknight.fandom.com/wiki/"; // ---------------- Variables ----------------- //
// let currentData = DATA_UNKNOWN;

var completionSymbol = SYMBOL_FALSE;
var divStart = ["<div class='single-entry'>"].join("\n");
var divStartCenter = ["<div class='flex-container align-center'>"].join("\n");
var divEnd = ["</div>"].join("\n");
var pSpan = "<span class='p-left-small'></span>";
var benchHKCCBegin, benchHKCCEnd;
/* -------------------------- Functions ----------------------------- */

/**
 * Main Function. Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */

function HKCheckCompletion(jsonObject) {
  // start benchmark
  benchHKCCBegin = new Date();
  var HKPlayerData;
  var HKWorldItems;
  var HKSceneData;

  if (jsonObject.hasOwnProperty("playerData")) {
    HKPlayerData = jsonObject.playerData;
  } else return false;

  if (jsonObject.hasOwnProperty("sceneData")) {
    HKSceneData = jsonObject.sceneData;

    if (jsonObject.sceneData.hasOwnProperty("persistentBoolItems")) {
      HKWorldItems = jsonObject.sceneData.persistentBoolItems;
    } else return false;
  } else return false; // Pre-Cleaning and filling initial data (h2, id) needed for PrepareHTMLString()


  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.PrefillHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID); // Prevents adding current percent data after each function call (each click of Analyze button)

  ResetCompletion(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID); // ================================================================================== //
  // ---------------- Time Played ----------------- //

  CheckPlayTime(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.playTime); // ---------------- Game Completion Status ----------------- //

  CheckCompletionPercent(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.completionPercentage); // ---------------- Game Completion Status ----------------- //

  CheckSaveFileVersion(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.version); // ---------------- Fleur Divide ----------------- //

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, FLEUR_DIVIDE); // ---------------- Health Masks ----------------- //

  CheckHealthMasks(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode); // ---------------- Soul Orbs ----------------- //

  CheckSoulOrbs(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax); // ---------------- Charm Notches (Slots) ----------------- //

  CheckNotches(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.charmSlots, HKPlayerData.charmSlotsFilled); // ---------------- Geo Amount ----------------- //

  CheckGeo(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro, HKPlayerData.geo, HKPlayerData.geoPool); // ---------------- Bosses (Base Game) --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.bosses, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.BOSSES, HKPlayerData); // ---------------- Gruz Mother and Mawlek (World Map) --------------------- //

  if (HKWorldItems) CheckWorldDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.bosses, "Battle Scene", _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.BOSSES_WORLD, HKWorldItems); // ---------------- Charms --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.charms, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.CHARMS, HKPlayerData); // ---------------- Colosseum of Fools --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.colosseum, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.COLOSSEUM, HKPlayerData); // ---------------- Dreamers --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.dreamers, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DREAMERS, HKPlayerData); // ---------------- Dream Nail and Essence --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.dreamNail, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DREAMNAIL, HKPlayerData); // ---------------- Equipment --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.equipment, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.EQUIPMENT, HKPlayerData); // ---------------- Nail Upgrades --------------------- //

  CheckNailUpgrades(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.nailUpgrades, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILUPGRADES, HKPlayerData); // ---------------- Mask Shards --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.maskShards, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.MASKSHARDS, HKPlayerData); // ---------------- Mask Shards (World Map) --------------------- //

  CheckWorldDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.maskShards, "Heart Piece", _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.MASKSHARDS_WORLD, HKWorldItems); // ---------------- Nail Arts --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.nailArts, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILARTS, HKPlayerData); // ---------------- Spells --------------------- //

  CheckSpellLevel(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.spells, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.SPELLS, HKPlayerData); // ---------------- Vessel Fragments --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.vesselFragments, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.VESSELFRAGMENTS, HKPlayerData); // ---------------- Vessel Fragments (World Map) --------------------- //

  CheckWorldDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.vesselFragments, "Vessel Fragment", _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.VESSELFRAGMENTS_WORLD, HKWorldItems); // ---------------- Warrior Dreams --------------------- //

  CheckWarriorDreams(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.warriorDreams, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.WARRIORDREAMS, HKPlayerData); // ---------------- Grimm Troupe Content Pack --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.grimmTroupe, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GRIMMTROUPE, HKPlayerData); // ---------------- Lifeblood Content Pack --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.lifeblood, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.LIFEBLOOD, HKPlayerData); // ---------------- Godmaster Content Pack --------------------- //

  CheckIfDataTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.godmaster, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER, HKPlayerData);
  CheckGodmasterDoors(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.godmaster, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER_DOORS, HKPlayerData); // ---------------- Fleur Divide ----------------- //

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.godmaster, FLEUR_DIVIDE); // ------------------------- Essential Things ----------------------------- //

  CheckAdditionalThings(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.essential, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.ESSENTIAL, HKPlayerData, HKWorldItems); // ---------------- Fleur Divide ----------------- //

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.essential, FLEUR_DIVIDE); // ------------------------- Achievements ----------------------------- //

  CheckAdditionalThings(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.achievements, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.ACHIEVEMENTS, HKPlayerData, HKWorldItems); // ---------------- Fleur Divide ----------------- //

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.achievements, FLEUR_DIVIDE); // ------------------------- Game Statistics ----------------------------- //

  CheckAdditionalThings(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.statistics, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.STATISTICS, HKPlayerData, HKWorldItems, HKSceneData); // ------------------------- Hints ----------------------------- //

  CheckHintsTrue(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.hints, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.HINTS, HKPlayerData, HKWorldItems); // ------------------------- Fill completion ----------------------------- //

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.CompletionHTML)(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID, HKPlayerData.completionPercentage); // Prevents wrong checkbox behaviour (must run after everything is finished)

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.CheckboxHintsToggle)();
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.CheckboxSpoilersToggle)(); // finish and show benchmark

  benchHKCCEnd = new Date();
  console.info("HKCheckCompletion() time (ms) =", benchHKCCEnd - benchHKCCBegin);
  return true;
}
/**
 * Generates and appends a new entry inside the HTML of a given ID
 * @param {object} divId object containing div ID and h2 title of the HTML element
 * @param {string} textPrefix Main name of the entry
 * @param {string} textSuffix Optional suffix after the main name (spoilers: locations, costs etc.)
 */


function PrepareHTMLString(divId) {
  var textPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unknown Completion Element: ";
  var textSuffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Unknown Description Element";
  var wiki = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var icon = completionSymbol;
  var b = ["<b>", "</b>"];
  if (!textPrefix.length) b = ["", ""];
  if (wiki.length) b = ["<a class=\"wiki\" href=\"".concat(WIKI_LINK).concat(wiki, "\" target=\"_blank\">"), "</a>"];
  var span = ["<span class='spoiler-span'>", "</span>"];
  var spoilerSpan = ["<span class='spoiler-text'>", "</span>"];

  if (divId === "hints") {
    span[0] = "<span>";
    icon = "";
  }

  var dash = "";
  if (textSuffix.length && textPrefix.length) dash = "— ";
  if (textPrefix.includes("<del>")) dash = "<del>— </del>"; // return divStart + icon + b[0] + textPrefix + b[1] + span[0] + pSpan + spoilerSpan[0] + dash + textSuffix + spoilerSpan[1] + span[1] + divEnd;

  return "\n    ".concat(divStart, "\n        ").concat(icon).concat(b[0]).concat(textPrefix).concat(b[1]).concat(span[0]).concat(pSpan).concat(spoilerSpan[0]).concat(dash).concat(textSuffix).concat(spoilerSpan[1]).concat(span[1], "\n    ").concat(divEnd, "\n    ");
}
/**
 * Switches global variable to a "completed" symbol. Adds +1 or +2 to percent property.
 */


function CurrentDataTrue() {
  var divId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  completionSymbol = SYMBOL_TRUE;

  if (divId) {
    divId.percent++;
    if (divId.id === "hk-equipment") divId.percent++; // double % for equipment
  }
}
/**
 * Switches global variable to a "not completed" symbol
 */


function CurrentDataFalse() {
  completionSymbol = SYMBOL_FALSE;
}
/**
 * Switches global variable to an "information" symbol
 */

/* function CurrentDataInfo() {
    completionSymbol = SYMBOL_INFO;
} */

/**
 * Switches global variable to no symbol (span with left padding)
 */


function CurrentDataBlank() {
  completionSymbol = SYMBOL_EMPTY;
}
/**
 * Fills HTML with the playTime value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} playTime Number of total gameplay time in seconds
 */


function CheckPlayTime(divId, playTime) {
  var icon = "<i class='icon-clock'></i>";
  var seconds = Math.floor(playTime);
  var minutes = Math.floor(seconds / 60 % 60);
  var hours = Math.floor(seconds / 3600);
  var sec = Math.floor(seconds % 60);
  if (sec < 10) sec = "0" + sec;
  if (minutes < 10) minutes = "0" + minutes;
  var textFill = "Time Played:" + pSpan + "<b>" + hours + " h " + minutes + " min " + sec + " sec</b>";
  document.getElementById(divId.id).innerHTML += divStart + icon + textFill + divEnd;
}
/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} completionPercentage Number of completion percentage
 */


function CheckCompletionPercent(divId, completionPercentage) {
  completionPercentage >= 112 ? CurrentDataTrue() : CurrentDataFalse();
  var textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + divId.maxPercent + " %)";
  document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}
/**
 * Reads the "version" string from the save file and appends it to the selected div ID element
 * @param {object} divId ID of the HTML element for data appending
 * @param {string} saveVersion Save File version in format 0.0.0.0
 */


function CheckSaveFileVersion(divId) {
  var saveVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID.intro.saveVersion;
  CurrentDataBlank();
  var textFill = "Save Version:".concat(pSpan, "<b>").concat(saveVersion, "</b>").concat(pSpan);
  document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}
/**
 * Fills HTML with appropriate number of health mask images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} masks Number of max health masks from the save (baseline without charms and lifeblood)
 * @param {number} permadeathMode Value of permadeathMode property. 0 = Normal, 1 = Steel Soul, 2 = Steel Soul broken save
 */


function CheckHealthMasks(divId) {
  var masks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var permadeathMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var icon = SYMBOL_EMPTY;
  var textFill = "<span>Health:</span>";
  var maskImages = "";
  var maskNormal = "<img src='".concat(_img_health_mask_png__WEBPACK_IMPORTED_MODULE_3__, "' class='health-mask' alt='health mask image' title='Health Mask'>");
  var maskSteel = "<img src='".concat(_img_health_mask_steel_png__WEBPACK_IMPORTED_MODULE_4__, "' class='health-mask' alt='steel health mask image' title='Steel Health Mask'>");
  var maskImg = "";
  permadeathMode > 0 ? maskImg = maskSteel : maskImg = maskNormal;

  for (var i = 0; i < masks; i++) {
    maskImages += maskImg;
  }

  document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + maskImages + divEnd;
}
/**
 * Fills HTML with appropriate number of soul orbs images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} totalSoul Number of max Soul reserve from the save. 99 = full Soul Orb
 */


function CheckSoulOrbs(divId, totalSoul) {
  var icon = SYMBOL_EMPTY;
  var textFill = "<span>Soul:</span>";
  var soulImages = "";
  var soulNormal = "<img src='".concat(_img_soul_orb_png__WEBPACK_IMPORTED_MODULE_5__, "' class='soul-orb' alt='soul orb image' title='Single Soul Orb (one spell cast)'>");
  var soulImg = soulNormal;

  for (var i = 0, total = totalSoul / 33; i < total; i++) {
    soulImages += soulImg;
  }

  document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + soulImages + divEnd;
}
/**
 * Fills HTML with the Geo value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} geoValue Number of total Geo value
 */


function CheckGeo(divId) {
  var geoValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var geoPoolValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var icon = SYMBOL_EMPTY;
  var textFill = "<span>Geo:</span><img src='".concat(_img_geo_png__WEBPACK_IMPORTED_MODULE_9__, "' class='geo-symbol' alt='geo symbol image' title='Geo'><b>").concat(geoValue, "</b>"); // Show Shade Geo value and image only if Shade has at least 1 Geo on it

  if (geoPoolValue > 0) textFill += "\n    ".concat(pSpan, "+<img src='").concat(_img_geo_shade_png__WEBPACK_IMPORTED_MODULE_10__, "' class='geo-symbol' alt='shade geo symbol image' title='Shade Geo'><b>").concat(geoPoolValue, "</b>"); // Show also total Geo (Geo + Shade Geo) if player has at least 1 geo alongside the shade geo

  if (geoValue > 0 && geoPoolValue > 0) textFill += "".concat(pSpan, "=").concat(pSpan, "<b>").concat(geoValue + geoPoolValue, "</b>");
  document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + divEnd;
}
/**
 * Fills HTML with appropriate number of notch images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} totalNotches Number of total Charm Notches the player has. 11 = max
 * @param {number} filledNotches Number of total used Charm Notches (including overcharmed notches). 15 = max
 */


function CheckNotches(divId) {
  var totalNotches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var filledNotches = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _ = 0,
      overcharmedNotches = _.overcharmedNotches,
      unusedNotches = _.unusedNotches; // How many overcharmed notches images to show

  overcharmedNotches = filledNotches - totalNotches;
  if (overcharmedNotches < 1) overcharmedNotches = 0; // How many unused notches images to show

  unusedNotches = totalNotches - filledNotches;
  if (unusedNotches < 1) unusedNotches = 0; // Correct number of filled/used notches images to show when player is overcharmed

  if (filledNotches > totalNotches) filledNotches = totalNotches;
  var icon = SYMBOL_EMPTY;
  var textFill = "<span>Notches:</span>".concat(pSpan);
  var notchImages = "";
  var notchNormalImage = "<img src='".concat(_img_notch_png__WEBPACK_IMPORTED_MODULE_6__, "' class='notch' alt='notch image' title='Charm Notch (Free)'>");
  var notchFilledImage = "<img src='".concat(_img_notch_filled_png__WEBPACK_IMPORTED_MODULE_7__, "' class='notch' alt='notch image' title='Charm Notch (Used)'>");
  var notchOvercharmedImage = "<img src='".concat(_img_notch_overcharmed_png__WEBPACK_IMPORTED_MODULE_8__, "' class='notch' alt='notch image' title='Charm Notch (Overcharmed)'>"); // First check filled (used) notches and fill them (skips if no filled notches)

  if (filledNotches > 0) {
    for (var i = 0; i < filledNotches; i++) {
      notchImages += notchFilledImage;
    }
  } // Second check overcharmed notches and fill them (skips if player is not overcharmed)


  if (overcharmedNotches > 0) {
    for (var _i = 0; _i < overcharmedNotches; _i++) {
      notchImages += notchOvercharmedImage;
    }
  } // Lastly, fill all unused notches


  if (unusedNotches > 0) {
    for (var _i2 = 0; _i2 < unusedNotches; _i2++) {
      notchImages += notchNormalImage;
    }
  }

  document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + notchImages + divEnd;
}
/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */


function CheckIfDataTrue(divId, dataObject, playerData) {
  var _ref = "",
      textPrefix = _ref.textPrefix,
      textSuffix = _ref.textSuffix;
  var sFillText = "";
  var wiki = "";

  for (var i in dataObject) {
    textPrefix = dataObject[i].name;
    textSuffix = dataObject[i].spoiler;
    dataObject[i].hasOwnProperty("wiki") ? wiki = dataObject[i].wiki : wiki = "";

    switch (i) {
      case "gotCharm_36":
        // prevents green checkbox and adding 1% when only got one white fragment
        playerData.gotQueenFragment === true && playerData.gotKingFragment === true ? CurrentDataTrue(divId) : CurrentDataFalse();
        break;

      case "gotCharm_37":
      case "gotCharm_38":
      case "gotCharm_39":
      case "gotCharm_40":
      case "killedGrimm":
      case "grimmChildLevel":
      case "killedHiveKnight":
      case "hasGodfinder":
        // fades out the entries if save file is from older game versions
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        if (i === "grimmChildLevel") {
          playerData.grimmChildLevel >= 4 ? CurrentDataTrue(divId) : CurrentDataFalse();
          break;
        }

        playerData[i] === true ? CurrentDataTrue(divId) : CurrentDataFalse();
        break;

      default:
        playerData[i] === true ? CurrentDataTrue(divId) : CurrentDataFalse();
    }

    sFillText += PrepareHTMLString(divId, textPrefix, textSuffix, wiki);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */


function CheckSpellLevel(divId, dataObject, playerData) {
  var sFillText = "";

  for (var i in dataObject) {
    switch (i) {
      case "vengefulSpirit":
      case "shadeSoul":
        playerData.fireballLevel >= dataObject[i].fireballLevel ? CurrentDataTrue(divId) : CurrentDataFalse();
        sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
        break;

      case "desolateDive":
      case "descendingDark":
        playerData.quakeLevel >= dataObject[i].quakeLevel ? CurrentDataTrue(divId) : CurrentDataFalse();
        sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
        break;

      case "howlingWraiths":
      case "abyssShriek":
        playerData.screamLevel >= dataObject[i].screamLevel ? CurrentDataTrue(divId) : CurrentDataFalse();
        sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
        break;

      default:
        break;
    }
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 */


function CheckWarriorDreams(divId, dataObject, playerData) {
  var sFillText = "";

  for (var i in dataObject) {
    playerData[i] >= 2 ? CurrentDataTrue(divId) : CurrentDataFalse();
    sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies if the Godmaster Pantheons 1-4 are completed by the player, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing pantheon data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search in the save file
 */


function CheckGodmasterDoors(divId, dataObject, playerData) {
  // appends "pantheon" to every array element
  // same as names in the database object
  var pantheon = ["Master", "Artist", "Sage", "Knight"].map(function (element) {
    return "pantheon" + element;
  });
  var sFillText = "";

  for (var i = 0; i < 4; i++) {
    // compatibility with earlier game versions
    if (playerData.hasOwnProperty("bossDoorStateTier" + (i + 1)) === false) {
      CurrentDataBlank();
      sFillText += PrepareHTMLString(divId, "<del>".concat(dataObject[pantheon[i]].name, "</del>"), "<del>".concat(dataObject[pantheon[i]].spoiler, "</del>"), dataObject[pantheon[i]].wiki);
    } else {
      playerData["bossDoorStateTier" + (i + 1)].completed === true ? CurrentDataTrue(divId) : CurrentDataFalse();
      sFillText += PrepareHTMLString(divId, dataObject[pantheon[i]].name, dataObject[pantheon[i]].spoiler, dataObject[pantheon[i]].wiki);
    }
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies the level of player's nail upgrades, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing nail upgrades data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search in the save file
 */


function CheckNailUpgrades(divId, dataObject, playerData) {
  // appends "Nail" to every array element
  // same as names in the database object
  var nail = ["old", "sharpened", "channeled", "coiled", "pure"].map(function (element) {
    return element + "Nail";
  });
  var sFillText = "";

  for (var i = 0; i < 5; i++) {
    playerData.nailSmithUpgrades >= i ? CurrentDataTrue(divId) : CurrentDataFalse();
    sFillText += PrepareHTMLString(divId, dataObject[nail[i]].name, dataObject[nail[i]].spoiler, dataObject[nail[i]].wiki);
  }

  if (divId.percent) divId.percent--; // subject one for the Old Nail

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies if the data in a specific object are true or false, and appends HTML accordingly. Creates a copy of dataObject.
 * @param {object} divId ID of the HTML element for data appending
 * @param {string} idText Text string inside save data to search for
 * @param {object} dataObject Object containing data to be verified
 * @param {object} worldData Reference/pointer to specific data where to search
 */


function CheckWorldDataTrue(divId, idText, dataObject, worldData) {
  var orderedArray = [];
  var size = (0,_hk_functions_js__WEBPACK_IMPORTED_MODULE_2__.ObjectLength)(dataObject);
  var sFillText = ""; // Order the items before displaying them (creates a copy of dataObject)

  for (var i in dataObject) {
    orderedArray.push([i, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki, false]);
  } // Search for completed items and mark them for display


  for (var _i3 = 0, length = worldData.length; _i3 < length; _i3++) {
    for (var j = 0; j < size; j++) {
      if (worldData[_i3].id === idText && worldData[_i3].sceneName === orderedArray[j][0] && worldData[_i3].activated === true) {
        orderedArray[j][4] = true;
      }
    }
  } // Display the items as they were initially ordered


  for (var _i4 = 0; _i4 < size; _i4++) {
    CurrentDataFalse();
    if (orderedArray[_i4][4] === true) CurrentDataTrue(divId);
    sFillText += PrepareHTMLString(divId, orderedArray[_i4][1], orderedArray[_i4][2], orderedArray[_i4][3]);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
}
/**
 * Verifies if the data in a specific object are true or false, or checks what values they have, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 * @param {object} worldData Reference/pointer to specific data where to search
 */


function CheckAdditionalThings(divId, dataObject, playerData, worldData, sceneData) {
  var _ref2 = "",
      textPrefix = _ref2.textPrefix,
      textSuffix = _ref2.textSuffix,
      wiki = _ref2.wiki;
  var sFillText = ""; // Start main loop

  for (var i in dataObject) {
    textPrefix = dataObject[i].name;
    dataObject[i].hasOwnProperty("spoiler") ? textSuffix = dataObject[i].spoiler : textSuffix = "";
    dataObject[i].hasOwnProperty("wiki") ? wiki = dataObject[i].wiki : wiki = "";
    var _2 = 0,
        amount = _2.amount,
        countTotal = _2.countTotal,
        total = _2.total,
        unbroken = _2.unbroken,
        broken = _2.broken,
        discoveredTotal = _2.discoveredTotal;

    switch (i) {
      case "areaMaps":
      case "grubsCollected":
      case "dreamOrbs":
      case "fountainGeo":
      case "nailDamage":
      case "stationsOpened":
      case "charmSlots":
      case "whisperingRoots":
      case "journalEntriesCompleted":
      case "journalNotesCompleted":
      case "whiteDefenderDefeats":
      case "greyPrinceDefeats":
        if (i === "areaMaps") {
          amount = CountMaps(dataObject[i].list);
        } else if (i === "whisperingRoots") {
          amount = CountWorldItem("Dream Plant");
        } else {
          amount = playerData[i];
        }

        if (i === "stationsOpened") {
          if (playerData.openedHiddenStation === true) amount++;
        }

        countTotal = amount;

        if (i === "journalEntriesCompleted" || i === "journalNotesCompleted") {
          countTotal = amount + " / " + playerData.journalEntriesTotal;
        }

        if (i === "grubsCollected") LogMissingGrubs();
        textPrefix += ": " + countTotal;

        if (i === "greyPrinceDefeats") {
          // backwards compatibility with earlier game versions
          if (playerData.hasOwnProperty(i) === false) {
            CurrentDataBlank();
            textPrefix = "<del>".concat(dataObject[i].name, "</del>");
            textSuffix = "<del>".concat(textSuffix, "</del>");
            break;
          } else if (playerData.zoteDead === true || playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true) {
            textPrefix = "<del>".concat(textPrefix, "</del>");
            textSuffix = "<del>".concat(textSuffix, "</del>");
          }
        }

        if (i === "whiteDefenderDefeats") {
          // backwards compatibility with earlier game versions
          if (playerData.hasOwnProperty(i) === false) {
            CurrentDataBlank();
            textPrefix = "<del>".concat(dataObject[i].name, "</del>");
            textSuffix = "<del>".concat(textSuffix, "</del>");
            break;
          }
        }

        amount >= dataObject[i].max ? CurrentDataTrue() : CurrentDataBlank();
        break;

      case "geoPool":
      case "rancidEggs":
      case "jinnEggsSold":
      case "xunFlowerBrokeTimes":
        textPrefix += ": " + Math.abs(playerData[i]);
        i === "geoPool" && playerData[i] > 0 ? CurrentDataBlank() : CurrentDataTrue();

        if (i === "jinnEggsSold") {
          // fade out if not on Steel Soul
          if (playerData.permadeathMode < 1) {
            CurrentDataBlank();
            textPrefix = "<del>".concat(textPrefix, "</del>");
            textSuffix = "<del>".concat(textSuffix, "</del>");
            break;
          }
        }

        break;

      case "geoRocks":
        discoveredTotal = sceneData.geoRocks.length;
        unbroken = CountGeoRocks(discoveredTotal, "unbroken");
        broken = CountGeoRocks(discoveredTotal, "broken");
        textPrefix += ": ".concat(unbroken, " | ").concat(broken, " | ").concat(discoveredTotal);
        CurrentDataTrue();
        break;

      case "shopkeeperKey":
        playerData.hasSlykey === true || playerData.gaveSlykey === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "elegantKey":
        playerData.hasWhiteKey === true || playerData.usedWhiteKey === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "loveKey":
        playerData.hasLoveKey === true || playerData.openedLoveDoor === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "simpleKeyCityOfTears":
        // #2
        FindWorldItem("Ruins1_17", "Shiny Item") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "simpleKeyAncientBasin":
        // #3
        FindWorldItem("Abyss_20", "Shiny Item Stand") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "gotLurkerKey":
      case "nightmareLanternLit":
      case "killedPaleLurker":
      case "whiteDefenderDefeated":
      case "gotGrimmNotch":
      case "fragileGreed_unbreakable":
      case "fragileHealth_unbreakable":
      case "fragileStrength_unbreakable":
      case "killedBindingSeal":
      case "killedGodseekerMask":
      case "givenGodseekerFlower":
      case "givenOroFlower":
      case "givenWhiteLadyFlower":
      case "givenEmilitiaFlower":
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        playerData[i] === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreAncientBasin":
        // #1
        FindWorldItem("Abyss_17", "Battle Scene Ore") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreSeer":
        // #2
        playerData.dreamReward2 === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreCrystalPeak":
        // #3
        FindWorldItem("Mines_34", "Shiny Item Stand") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreDeepnest":
        // #4
        FindWorldItem("Deepnest_32", "Shiny Item Stand") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreGrubfather":
        // #5
        FindWorldItem("Crossroads_38", "Shiny Item Ore") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "paleOreColosseum":
        // #6
        FindWorldItem("Room_Colosseum_Silver", "Shiny Item") ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "relicsWandererJournal":
      case "relicsHallownestSeal":
      case "relicsKingsIdol":
      case "relicsArcaneEgg":
        total = playerData[dataObject[i].nameHeld] + playerData[dataObject[i].nameSold];
        total >= dataObject[i].max ? CurrentDataTrue() : CurrentDataBlank();
        textPrefix += ": " + total;
        break;

      case "bossDoorStateTier5":
        if (playerData.hasOwnProperty("bossDoorStateTier5") === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
        } else {
          playerData[i].completed === true ? CurrentDataTrue() : CurrentDataFalse();
        }

        break;

      case "killsBindingSeal":
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        playerData[i] == 0 ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "killedVoidIdol_1":
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        playerData[i] === true ? CurrentDataTrue() : CurrentDataFalse();
        if (playerData[i] === false && (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) CurrentDataTrue();
        break;

      case "killedVoidIdol_2":
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        playerData[i] === true ? CurrentDataTrue() : CurrentDataFalse();
        if (playerData[i] === false && playerData.killedVoidIdol_3 === true) CurrentDataTrue();
        break;

      case "killedVoidIdol_3":
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        }

        playerData[i] === true ? CurrentDataTrue() : CurrentDataFalse();
        break;

      case "greyPrinceDefeated":
        // compatibility with earlier game versions
        if (playerData.hasOwnProperty(i) === false) {
          CurrentDataBlank();
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
          break;
        } else if (playerData.zoteDead === true || playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true) {
          textPrefix = "<del>".concat(textPrefix, "</del>");
          textSuffix = "<del>".concat(textSuffix, "</del>");
        }

        playerData[i] === true ? CurrentDataTrue() : CurrentDataBlank();
        if (playerData.zoteRescuedBuzzer === true && playerData[i] === false) CurrentDataFalse();
        break;

      case "zoteStatus":
        CurrentDataFalse();

        if (playerData.zoteDead === true) {
          textPrefix = dataObject[i].nameNeglect;
          textSuffix = dataObject[i].spoilerNeglect;
          CurrentDataTrue();
        } else if (playerData.killedZote === true) {
          textPrefix = dataObject[i].nameRivalry;
          textSuffix = dataObject[i].spoilerRivalry;
          CurrentDataTrue();
        } else if (playerData.zoteRescuedBuzzer === false) {
          if (playerData.hasWalljump === false) {
            textPrefix = dataObject[i].nameTrappedVengefly;
            textSuffix = dataObject[i].spoilerTrappedVengefly;
          } else if (playerData.hasWalljump === true) {
            textPrefix = dataObject[i].nameNotRescuedVengefly;
            textSuffix = dataObject[i].spoilerNotRescuedVengefly;
          }
        } else if (playerData.zoteRescuedBuzzer === true) {
          if (playerData.zoteRescuedDeepnest === false) {
            textPrefix = dataObject[i].nameTrappedDeepnest;
            textSuffix = dataObject[i].spoilerTrappedDeepnest;
          } else if (playerData.zoteRescuedDeepnest === true) {
            if (playerData.killedZote === false) {
              textPrefix = dataObject[i].nameColosseum;
              textSuffix = dataObject[i].spoilerColosseum;
            }
          }
        }

        break;

      case "nailsmithStatus":
        CurrentDataFalse();

        if (playerData.nailsmithKilled === true) {
          textPrefix = dataObject[i].namePurity;
          textSuffix = dataObject[i].spoilerPurity;
          CurrentDataTrue();
        } else if (playerData.nailsmithConvoArt === true) {
          textPrefix = dataObject[i].nameHappyCouple;
          textSuffix = dataObject[i].spoilerHappyCouple;
          CurrentDataTrue();
        } else if (playerData.nailsmithSpared === true) {
          textPrefix = dataObject[i].nameSheoHutWaiting;
          textSuffix = dataObject[i].spoilerSheoHutWaiting;
        } else {
          textPrefix = dataObject[i].nameUpgradeNail;
          textSuffix = dataObject[i].spoilerUpgradeNail;
        }

        break;

      case "mrMushroomState":
        sFillText += CheckMrMushroomState(divId, dataObject[i], playerData[i]);
        break;

      default:
        playerData[i] === true ? CurrentDataTrue() : CurrentDataFalse();
    } // end switch (i)


    if (i === "mrMushroomState") continue;
    sFillText += PrepareHTMLString(divId, textPrefix, textSuffix, wiki);
  } // end for (let i in dataObject)


  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText); // ==========================================
  // -------------- Methods ---------------- //

  /**
   * Searches for a given item in the in-game area and returns true when found and collected.
   * @param {string} itemArea Code of the in-game area on the map
   * @param {string} itemId Name of the item
   * @returns {boolean}
   */

  function FindWorldItem() {
    var itemArea = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var itemId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Shiny Item";

    for (var _i5 = 0, length = worldData.length; _i5 < length; _i5++) {
      if (worldData[_i5].id === itemId) {
        if (worldData[_i5].sceneName === itemArea) {
          if (worldData[_i5].activated === true) return true;
        }
      }
    }

    return false;
  }
  /**
   * Searches for a given item that the player has found and returns the amount of them that the player completed.
   * @param {string} itemId Name of the item
   * @returns {number}
   */


  function CountWorldItem() {
    var itemId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var total = 0;

    for (var _i6 = 0, length = worldData.length; _i6 < length; _i6++) {
      if (worldData[_i6].id === itemId) {
        if (worldData[_i6].activated === true) total++;
      }
    }

    return total;
  }
  /**
   * Counts the number of maps the player has acquired (from the list in an array)
   * @param {array} mapArray Array of strings with area map names
   * @returns {number}
   */


  function CountMaps(mapArray) {
    var totalMaps = 0;

    for (var _i7 = 0, len = mapArray.length; _i7 < len; _i7++) {
      if (playerData[mapArray[_i7]] === true) totalMaps++;
    }

    return totalMaps;
  }
  /**
   * Counts the total amount of Geo Rocks Unbroken or Broken. Logs to console all the Unbroken IDs and Map locations.
   * @param {number} arrayLength How many items the Geo Rocks array is currently storing (for iteration)
   * @param {string} mode Choose which Geo Rocks to count (broken or unbroken)
   */


  function CountGeoRocks(arrayLength) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "unbroken";
    var countTotal = 0;
    var geoRocksLog = [];

    if (mode === "unbroken") {
      for (var _i8 = 0; _i8 < arrayLength; _i8++) {
        if (sceneData.geoRocks[_i8].hitsLeft > 0) {
          countTotal++;
          geoRocksLog.push("#".concat(countTotal, " \uD83C\uDFD4\uFE0F ").concat(sceneData.geoRocks[_i8].id, " \uD83D\uDDFA\uFE0F ").concat((0,_hk_functions_js__WEBPACK_IMPORTED_MODULE_2__.TranslateMapName)(sceneData.geoRocks[_i8].sceneName), " \u2328\uFE0F ").concat(sceneData.geoRocks[_i8].sceneName));
        }
      }

      if (!countTotal) {
        console.log("%cAll Geo Rocks Broken!", "color: #16c60c; font-weight: 700;");
      } else {
        console.groupCollapsed("%cUnbroken Geo Rocks (".concat(countTotal, "):"), "color: #16c60c; font-weight: 700;");

        for (var _i9 = 0, length = geoRocksLog.length; _i9 < length; _i9++) {
          console.log(geoRocksLog[_i9]);
        }

        console.groupEnd();
      }
    } else {
      for (var _i10 = 0; _i10 < arrayLength; _i10++) {
        if (sceneData.geoRocks[_i10].hitsLeft === 0) countTotal++;
      }
    }

    return countTotal;
  }
  /**
   * Compares and logs all unrescued Grubs in a list: IDs and map locations
   */


  function LogMissingGrubs() {
    var rescuedGrubsSceneList = [];

    for (var _i11 = 0, _length = worldData.length; _i11 < _length; _i11++) {
      if (worldData[_i11].id.includes("Grub Bottle")) {
        if (worldData[_i11].activated === true) {
          // There are 3 duplicates of the same map scene name from older game save files. Prevents adding duplicates

          /* if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (1)") {
              continue;
          } else if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (2)") {
              continue;
          } else { */
          rescuedGrubsSceneList.push(worldData[_i11].sceneName); // }
        }
      }
    } // Filtering the reference database Grub list to include only the missing values


    var missingGrubsList = _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GRUBS_LIST.filter(function (x) {
      return !rescuedGrubsSceneList.includes(x);
    });
    var length = missingGrubsList.length;

    if (!length) {
      console.log("%cAll Grubs Rescued!", "color: #16c60c; font-weight: 700;");
    } else {
      console.groupCollapsed("%cUnrescued Grubs (".concat(length, "):"), "color: #16c60c; font-weight: 700;");

      for (var _i12 = 0; _i12 < length; _i12++) {
        console.log("#".concat(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GRUBS_LIST.indexOf(missingGrubsList[_i12]) + 1, " \uD83D\uDDFA\uFE0F ").concat((0,_hk_functions_js__WEBPACK_IMPORTED_MODULE_2__.TranslateMapName)(missingGrubsList[_i12]), " \u2328\uFE0F ").concat(missingGrubsList[_i12]));
      }

      console.groupEnd();
    }

    return false;
  }
}
/**
 * Checks and fills all the 7 locations of Mr Mushroom.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject object containing the Mr Mushroom name and spoilers/locations
 * @param {number} mrMushroomState playerData.mrMushroomState read from the save file. (0-8)
 */


function CheckMrMushroomState(divId, dataObject) {
  var mrMushroomState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sFillText = "";

  if (mrMushroomState > 1) {
    for (var i = 1; i <= 7; i++) {
      mrMushroomState > i ? CurrentDataTrue() : CurrentDataFalse();
      sFillText += PrepareHTMLString(divId, "".concat(dataObject.name, " #").concat(i), dataObject["spoiler" + i], dataObject.wiki);
    }
  } else {
    CurrentDataFalse();

    for (var _i13 = 1; _i13 <= 7; _i13++) {
      sFillText += PrepareHTMLString(divId, "".concat(dataObject.name, " #").concat(_i13), dataObject["spoiler" + _i13], dataObject.wiki);
    }
  }

  return sFillText;
}
/**
 * Checks, validates and shows hints to the player depending on their save progression, in chronological order. Shows only hint for the last uncompleted event. If Hollow Knight is defeated, shows a dummy text.
 * @param {object} divId object containing div hints ID and h2 title
 * @param {object} dataObject object containing all hints data
 * @param {object} playerData object containing HK Player Data to look in
 * @param {object} worldData object containing HK World Data to look in
 * @returns {bool} true when defeated Hollow Knight, false if not
 */


function CheckHintsTrue(divId, dataObject, playerData, worldData) {
  var sFillText = "";

  if (playerData.killedHollowKnight === true) {
    // a text to show when player already finished their first playthrough (killed Hollow Knight first time)
    (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, "...a successful Knight who doesn't need hints anymore. The Knight explores the world of Hallownest patiently in constant search of its remaining secrets...");
    return true;
  }

  for (var i in dataObject) {
    if (playerData[i] === true) {
      continue;
    } else if (i === "fireballLevel") {
      if (playerData[i] >= 1) {
        continue;
      } else {
        sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
        break;
      }
    } else if (i === "Crossroads_04") {
      var GruzMotherDefeated = false;

      for (var k = 0, length = worldData.length; k < length; k++) {
        if (worldData[k].id === "Battle Scene" && worldData[k].sceneName === "Crossroads_04" && worldData[k].activated === true) {
          GruzMotherDefeated = true;
          break;
        }
      }

      if (GruzMotherDefeated) {
        continue; // next dataObject (i)
      } else {
        sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
        break;
      }
    } else if (i === "dungDefenderOrHornet2") {
      if (playerData.defeatedDungDefender === true) {
        continue;
      } else if (playerData.hornetOutskirtsDefeated === true) {
        continue;
      } else {
        // if no Dung Defender or Hornet 2
        sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
        break;
      }
    } else if (i === "ismaTearOrShadeCloak") {
      if (playerData.hasAcidArmour === true) {
        continue;
      } else if (playerData.hasKingsBrand === true) {
        if (playerData.hasShadowDash === true) {
          continue;
        } else {
          // if Kings Brand but no Shade Cloak
          sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
          break;
        }
      } else {
        // if no Isma's Tear or Kings Brand
        sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
        break;
      }
    } else {
      // if anything from the hints list is not done
      sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
      break;
    }
  } // end: for (let i in dataObject)


  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divId, sFillText);
} // function CheckHintsTrue()

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */


function HKReadTextArea() {
  var textAreaId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  // refresh and prepare document for filling with data from the save
  InitialHTMLPopulate(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID);
  var contents = document.getElementById(textAreaId).value;

  if (contents.length) {
    try {
      var jsonObject = JSON.parse(contents); // console.log(jsonObject);

      if (jsonObject.hasOwnProperty("playerData")) HKCheckCompletion(jsonObject); // console.log(jsonObject);
    } catch (error) {
      alert("This seems like not a valid Hollow Knight save. ".concat(error));
      console.info("This seems like not a valid Hollow Knight save. ".concat(error));
    }
  }
}
/**
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} divIdObj JavaScript Object containing all HTML IDs to populate
 */


function InitialHTMLPopulate(divIdObj) {
  var sFillText = "";
  CurrentDataFalse();
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.PrefillHTML)(divIdObj); // Play Time

  CheckPlayTime(divIdObj.intro, 0); // Game Completion

  CheckCompletionPercent(divIdObj.intro, 0); // Save File Version

  CheckSaveFileVersion(divIdObj.intro); // Fleur Divide

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.intro, FLEUR_DIVIDE); // Health Masks

  CheckHealthMasks(divIdObj.intro); // Soul Orbs

  CheckSoulOrbs(divIdObj.intro, 99); // Charm Notches

  CheckNotches(divIdObj.intro); // Geo

  CheckGeo(divIdObj.intro); // Keep symbol False

  CurrentDataFalse(); // First Hint Only

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.hints, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.HINTS.fireballLevel.spoiler); // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)

  var hkObjArray = [_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.BOSSES, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.BOSSES_WORLD, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.CHARMS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.EQUIPMENT, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILARTS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.MASKSHARDS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.MASKSHARDS_WORLD, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.VESSELFRAGMENTS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.VESSELFRAGMENTS_WORLD, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DREAMERS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.COLOSSEUM, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DREAMNAIL, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.WARRIORDREAMS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GRIMMTROUPE, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.LIFEBLOOD, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.ESSENTIAL, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.ACHIEVEMENTS, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.STATISTICS]; // duplicates and order important - must be the same as in hkObjArray[]

  var divObjArray = [divIdObj.bosses, divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster, divIdObj.essential, divIdObj.achievements, divIdObj.statistics]; // Looped filling to reduce redundancy

  do {
    for (var entry in hkObjArray[0]) {
      if (entry === "mrMushroomState") continue;
      sFillText += PrepareHTMLString(divObjArray[0], hkObjArray[0][entry].name, hkObjArray[0][entry].spoiler, hkObjArray[0][entry].wiki);
    }

    if (divObjArray[0]) {
      (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divObjArray[0], sFillText);
    }

    sFillText = "";
    divObjArray.shift();
  } while (hkObjArray.shift()); // Nail Upgrades Misc


  sFillText = "";

  for (var i in _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILUPGRADES) {
    sFillText += PrepareHTMLString(divIdObj.nailUpgrades, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILUPGRADES[i].name, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILUPGRADES[i].spoiler, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.NAILUPGRADES[i].wiki);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.nailUpgrades, sFillText); // Spells Misc

  sFillText = "";

  for (var _i14 in _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.SPELLS) {
    sFillText += PrepareHTMLString(divIdObj.spells, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.SPELLS[_i14].name, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.SPELLS[_i14].spoiler, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.SPELLS[_i14].wiki);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.spells, sFillText); // Godmaster Doors Misc

  sFillText = "";

  for (var _i15 in _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER_DOORS) {
    sFillText += PrepareHTMLString(divIdObj.godmaster, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER_DOORS[_i15].name, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER_DOORS[_i15].spoiler, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.GODMASTER_DOORS[_i15].wiki);
  }

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.godmaster, sFillText); // Mr Mushroom 1 - 7

  sFillText = CheckMrMushroomState(divIdObj.achievements, _hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.ACHIEVEMENTS.mrMushroomState);
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.achievements, sFillText); // Fleur Dividers

  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.godmaster, FLEUR_DIVIDE);
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.essential, FLEUR_DIVIDE);
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.AppendHTML)(divIdObj.achievements, FLEUR_DIVIDE); // Check local storage first to set proper checkbox state before the below functions start (default is always unchecked)

  if ((0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.StorageAvailable)('localStorage')) {
    if (localStorage.getItem("hkCheckboxHints") === "checked") document.getElementById("checkbox-hints").checked = true;
    if (localStorage.getItem("hkCheckboxSpoilers") === "checked") document.getElementById("checkbox-spoilers").checked = true;
  } // if (localStorage.getItem("hkCheckboxHints") === "checked") document.getElementById("checkbox-hints").checked = true;
  // if (localStorage.getItem("hkCheckboxSpoilers") === "checked") document.getElementById("checkbox-spoilers").checked = true;
  // Prevents wrong checkbox behaviour (must run after everything is finished)


  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.CheckboxHintsToggle)();
  (0,_page_functions_js__WEBPACK_IMPORTED_MODULE_1__.CheckboxSpoilersToggle)();
}
/**
 * Zero-fill all "percent" properties in the JSON Object (reset to default)
 * @param {object} jsObj object containing the "percent" properties to be reset to 0
 */


function ResetCompletion(jsObj) {
  for (var i in jsObj) {
    if (jsObj[i].hasOwnProperty("percent")) jsObj[i].percent = 0;
  }
}
/**
 * Focuses, selects and copies to clipboard contents inside a clicked element. Includes optional tooltip update after the copying is done.
 * @param {MouseEvent} mouseEvent from the clicked element (AddEventListener)
 * @param {string} tooltipId Element ID of the tooltip to update
 * @param {string} tooltipFill Updated contents of the tooltip
 */


function SelectCopyInputText(mouseEvent) {
  var tooltipId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var tooltipFill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var element = document.getElementById(mouseEvent.target.id); // this prevents the un-selected effect after clicking the second time (clears all selection first)

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }

  element.focus(); // best to focus the element first before selecting

  element.select();
  element.setSelectionRange(0, 99999); // for mobile devices
  // Copy the text inside the text field to clipboard

  document.execCommand("copy"); // optional tooltip showing

  if (tooltipFill.length && tooltipId.length) FillInnerHTML(tooltipId, tooltipFill);
}
/**
 * Fills the innerHTML of a given HTML Element with provided contents
 * @param {string} elementId Element ID to update
 * @param {string} textFill Updated contents (innerHTML)
 */


function FillInnerHTML(elementId, textFill) {
  var element = document.getElementById(elementId);
  element.innerHTML = textFill;
}
/* ----------------------- Event Listeners -------------------------- */
// Populate HTML at load (before img and css)


document.addEventListener("DOMContentLoaded", function () {
  InitialHTMLPopulate(_hk_database_js__WEBPACK_IMPORTED_MODULE_0__.default.DIV_ID);
}); // Does an action when the save file location input text is clicked once (auto select & copy to clipboard)

document.getElementById("save-location-input").addEventListener("click", function (e) {
  SelectCopyInputText(e, "save-location-input-tooltip", "Copied save file location to clipboard");
}, false); // Choose File input field

document.getElementById("save-location-input").addEventListener("mouseout", function () {
  FillInnerHTML("save-location-input-tooltip", "Click once to copy to clipboard");
}, false); // Analyze Text button

document.getElementById("save-area-read").addEventListener("click", function () {
  HKReadTextArea("save-area");
}, false);


/***/ }),

/***/ "./src/js/LoadSaveFile.js":
/*!********************************!*\
  !*** ./src/js/LoadSaveFile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HKCheckCompletion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HKCheckCompletion.js */ "./src/js/HKCheckCompletion.js");
/* 
    Parts of the code thanks to bloodorca https://github.com/bloodorca/hollow (base64.js, functions.js) with slight modifications.
    The steps used there for decryption were taken from KayDeeTee https://github.com/KayDeeTee/Hollow-Knight-SaveManager
    Without these two people the existence of this tool wouldn't be possible :)
*/
// ---------------- Constants ----------------- //
// AES JS for file decryption
var aesjs = __webpack_require__(/*! ./aes-js.js */ "./src/js/aes-js.js"); // For reading the text area after save decoding



var CSHARP_HEADER = [0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]; // 22 bytes

var BASE64_ARRAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").map(function (c) {
  return c.charCodeAt(0);
});
var BASE64_DECODE_TABLE = new Map(BASE64_ARRAY.map(function (ord, i) {
  return [ord, i];
}));
var AES_KEY = new TextEncoder().encode('UKu52ePUBwetZ9wNX88o54dnfKRu0T1l'); // encodes a string to Uint8Array (prepare for AES JS)

var ECB_STREAM_CIPHER = new aesjs.ModeOfOperation.ecb(AES_KEY); // create a new AES stream cipher object using the encoded key
// ---------------- Variables ----------------- //

var benchLSFBegin, benchLSFEnd, benchTotal; // ---------------- Functions ----------------- //

/**
 * Main input tag file function. Selects the first file, reads it as an Array Buffer, starts the processing of the file when loaded.
 * Starts benchmarking.
 * @param {FileList} input FileList object containing a list of File objects. The FileList behaves like an array, so you can check its length property to get the number of selected files.
 */
// eslint-disable-next-line no-unused-vars

function LoadSaveFile(input, time) {
  var inputFileList = input.files; // console.info("Input length: " + input.files.length)
  // Cease further processing if user canceled the file input dialog

  if (inputFileList.length < 1) return false; // start benchmark

  benchLSFBegin = time; // Prepares a File object from the first file of the input files for reading as an Array Buffer

  var inputFileObject = inputFileList[0]; // Cleans the file list to avoid problems after subsequent use
  // document.getElementById("save-area-file").value = "";
  // 1. read file
  // The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.
  // It is an array of bytes, often referred to in other languages as a "byte array".
  // new FileReader()

  var inputReader = new FileReader(); // readAsArrayBuffer(file)

  inputReader.readAsArrayBuffer(inputFileObject); // addEventListener("load", function) - to decode the file when loaded

  inputReader.addEventListener("load", ProcessFileObject);
}
/**
 * Reads the File object as an Array Buffer and does all other operations (decoding, decryption, conversion to string, pasting to text area).
 * Launches the HKReadTextArea() function automatically after pasting the string to text area
 */


function ProcessFileObject() {
  var inputArrayBuffer = this.result;
  var decodedString; // 2. Decode file

  try {
    // Uint8Array(ArrayBuffer) uint8_t equivalent in C
    inputArrayBuffer = new Uint8Array(inputArrayBuffer); // ArrayBuffer.slice()
    // The slice() method copies up to, but not including, the byte indicated by the end parameter.

    inputArrayBuffer.slice(); // remove C# header and LengthPrefixedString header (ArrayBuffer)

    inputArrayBuffer = RemoveHeaders(inputArrayBuffer); // base64 Decoding (ArrayBuffer)

    inputArrayBuffer = Base64Decode(inputArrayBuffer); // AES decryption (ECB) removes pkcs7 padding (ArrayBuffer)

    inputArrayBuffer = AESDecryption(inputArrayBuffer); // Convert ArrayBuffer to string/text TextDecoder().decode(ArrayBuffer)

    decodedString = new TextDecoder().decode(inputArrayBuffer); // finish and show benchmark

    benchLSFEnd = new Date();
    console.info("LoadSaveFile() time (ms) =", benchLSFEnd - benchLSFBegin); // 4. Analyze the decoded string immediately

    try {
      (0,_HKCheckCompletion_js__WEBPACK_IMPORTED_MODULE_0__.HKCheckCompletion)(JSON.parse(decodedString));
    } catch (error) {
      alert("This seems like not a valid Hollow Knight save. ".concat(error));
      console.info("This seems like not a valid Hollow Knight save. ".concat(error));
    } // 5. Paste decoded string file to text area


    document.getElementById("save-area").value = "";
    document.getElementById("save-area").value = decodedString;
    /* (async () => {
        document.getElementById("save-area").value = "";
        document.getElementById("save-area").value = await decodedString;
    })(); */
    // finish total and show benchmark

    benchTotal = new Date();
    console.info("Total time (ms) =", benchTotal - benchLSFBegin); // alert(`Decoded String: ${decodedString}`);
    // alert(`Array Buffer: ${inputArrayBuffer}`);
  } catch (error) {
    alert("The file cannot be decoded. ".concat(error));
    console.info("The file cannot be decoded. ".concat(error));
  }
}
/**
 * Removes C# header, LengthPrefixedString header and byte 11 at the end of the Uint8 Array Buffer
 * @param {Uint8Array} buffer Uint8Array buffer for removing the header from
 * @param {Uint8Array} csHeader Uint8Array for the C# header length calculation
 * @returns {Uint8Array}
 */


function RemoveHeaders(buffer) {
  var csHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSHARP_HEADER;
  // Remove the fixed C# header and byte 11 at the end. 
  buffer = buffer.subarray(csHeader.length, buffer.length - 1); // Remove LengthPrefixedString header

  var lengthCount = 0;

  for (var i = 0; i < 5; i++) {
    lengthCount++;

    if ((buffer[i] & 0x80) == 0) {
      break;
    }
  }

  return buffer.subarray(lengthCount);
}
/**
 * Decodes an Array Buffer using a Base64 decode table
 * @param {Uint8Array} buffer Uint8Array Buffer to decode
 * @returns {Uint8Array}
 */


function Base64Decode(buffer) {
  buffer = new Uint8Array(buffer).slice();
  buffer = buffer.map(function (v) {
    return BASE64_DECODE_TABLE.get(v);
  }); // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

  var p = buffer.indexOf(64);
  var end;

  if (p != -1) {
    end = p;
  } else {
    end = buffer.length;
  }

  buffer = buffer.subarray(0, end);
  var output = new Uint8Array(3 * buffer.length / 4);
  var continuous = Math.floor(buffer.length / 4) * 4;

  for (var i = 0; i < continuous; i += 4) {
    var k = 3 * i / 4;
    output[k] = buffer[i] << 2 | buffer[i + 1] >> 4;
    output[k + 1] = (buffer[i + 1] & 0x0F) << 4 | buffer[i + 2] >> 2;
    output[k + 2] = (buffer[i + 2] & 0x03) << 6 | buffer[i + 3];
  }

  if (buffer[continuous] != undefined) {
    var _k = 3 * continuous / 4;

    output[_k] = buffer[continuous] << 2 | buffer[continuous + 1] >> 4;

    if (buffer[continuous + 2] != undefined) {
      output[_k + 1] = (buffer[continuous + 1] & 0x0F) << 4 | buffer[continuous + 2] >> 2;
    }
  }

  return output;
}
/**
 * Decrypt an Uint8Array Buffer using aesjs (ECB) and a predefined AES key + remove pkcs7 padding
 * @param {Uint8Array} buffer Uint8Array buffer to decrypt
 * @returns {Uint8Array}
 */


function AESDecryption(buffer) {
  var cipherObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ECB_STREAM_CIPHER;
  var output = cipherObject.decrypt(buffer);
  return output.subarray(0, -output[output.length - 1]);
} // Assign actions (functions) to launch when a specific element is used


document.getElementById("save-area-file").addEventListener("change", function (event) {
  LoadSaveFile(event.target, new Date());
});
document.getElementById("save-area-file").addEventListener("click", function (mouseEvent) {
  mouseEvent.target.value = "";
});

/***/ }),

/***/ "./src/js/aes-js.js":
/*!**************************!*\
  !*** ./src/js/aes-js.js ***!
  \**************************/
/***/ (function(module) {

"use strict";
/* eslint-disable */


(function (root) {
  function checkInt(value) {
    return parseInt(value) === value;
  }

  function checkInts(arrayish) {
    if (!checkInt(arrayish.length)) {
      return false;
    }

    for (var i = 0; i < arrayish.length; i++) {
      if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
        return false;
      }
    }

    return true;
  }

  function coerceArray(arg, copy) {
    // ArrayBuffer view
    if (arg.buffer && ArrayBuffer.isView(arg) && arg.name === 'Uint8Array') {
      if (copy) {
        if (arg.slice) {
          arg = arg.slice();
        } else {
          arg = Array.prototype.slice.call(arg);
        }
      }

      return arg;
    } // It's an array; check it is a valid representation of a byte


    if (Array.isArray(arg)) {
      if (!checkInts(arg)) {
        throw new Error('Array contains invalid value: ' + arg);
      }

      return new Uint8Array(arg);
    } // Something else, but behaves like an array (maybe a Buffer? Arguments?)


    if (checkInt(arg.length) && checkInts(arg)) {
      return new Uint8Array(arg);
    }

    throw new Error('unsupported array-like object');
  }

  function createArray(length) {
    return new Uint8Array(length);
  }

  function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
    if (sourceStart != null || sourceEnd != null) {
      if (sourceArray.slice) {
        sourceArray = sourceArray.slice(sourceStart, sourceEnd);
      } else {
        sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
      }
    }

    targetArray.set(sourceArray, targetStart);
  }

  var convertUtf8 = function () {
    function toBytes(text) {
      var result = [],
          i = 0;
      text = encodeURI(text);

      while (i < text.length) {
        var c = text.charCodeAt(i++); // if it is a % sign, encode the following 2 bytes as a hex value

        if (c === 37) {
          result.push(parseInt(text.substr(i, 2), 16));
          i += 2; // otherwise, just the actual byte
        } else {
          result.push(c);
        }
      }

      return coerceArray(result);
    }

    function fromBytes(bytes) {
      var result = [],
          i = 0;

      while (i < bytes.length) {
        var c = bytes[i];

        if (c < 128) {
          result.push(String.fromCharCode(c));
          i++;
        } else if (c > 191 && c < 224) {
          result.push(String.fromCharCode((c & 0x1f) << 6 | bytes[i + 1] & 0x3f));
          i += 2;
        } else {
          result.push(String.fromCharCode((c & 0x0f) << 12 | (bytes[i + 1] & 0x3f) << 6 | bytes[i + 2] & 0x3f));
          i += 3;
        }
      }

      return result.join('');
    }

    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }();

  var convertHex = function () {
    function toBytes(text) {
      var result = [];

      for (var i = 0; i < text.length; i += 2) {
        result.push(parseInt(text.substr(i, 2), 16));
      }

      return result;
    } // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html


    var Hex = '0123456789abcdef';

    function fromBytes(bytes) {
      var result = [];

      for (var i = 0; i < bytes.length; i++) {
        var v = bytes[i];
        result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
      }

      return result.join('');
    }

    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }(); // Number of rounds by keysize


  var numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
  }; // Round constant words

  var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91]; // S-box and Inverse S-box (S is for Substitution)

  var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
  var Si = [0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d]; // Transformations for encryption

  var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
  var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
  var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
  var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c]; // Transformations for decryption

  var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
  var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
  var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
  var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0]; // Transformations for decryption key expansion

  var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
  var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
  var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
  var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];

  function convertToInt32(bytes) {
    var result = [];

    for (var i = 0; i < bytes.length; i += 4) {
      result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }

    return result;
  }

  var AES = function AES(key) {
    if (!(this instanceof AES)) {
      throw Error('AES must be instanitated with `new`');
    }

    Object.defineProperty(this, 'key', {
      value: coerceArray(key, true)
    });

    this._prepare();
  };

  AES.prototype._prepare = function () {
    var rounds = numberOfRounds[this.key.length];

    if (rounds == null) {
      throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
    } // encryption round keys


    this._Ke = []; // decryption round keys

    this._Kd = [];

    for (var i = 0; i <= rounds; i++) {
      this._Ke.push([0, 0, 0, 0]);

      this._Kd.push([0, 0, 0, 0]);
    }

    var roundKeyCount = (rounds + 1) * 4;
    var KC = this.key.length / 4; // convert the key into ints

    var tk = convertToInt32(this.key); // copy values into round key arrays

    var index;

    for (var i = 0; i < KC; i++) {
      index = i >> 2;
      this._Ke[index][i % 4] = tk[i];
      this._Kd[rounds - index][i % 4] = tk[i];
    } // key expansion (fips-197 section 5.2)


    var rconpointer = 0;
    var t = KC,
        tt;

    while (t < roundKeyCount) {
      tt = tk[KC - 1];
      tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
      rconpointer += 1; // key expansion (for non-256 bit)

      if (KC != 8) {
        for (var i = 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        } // key expansion for 256-bit keys is "slightly different" (fips-197)

      } else {
        for (var i = 1; i < KC / 2; i++) {
          tk[i] ^= tk[i - 1];
        }

        tt = tk[KC / 2 - 1];
        tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;

        for (var i = KC / 2 + 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        }
      } // copy values into round key arrays


      var i = 0,
          r,
          c;

      while (i < KC && t < roundKeyCount) {
        r = t >> 2;
        c = t % 4;
        this._Ke[r][c] = tk[i];
        this._Kd[rounds - r][c] = tk[i++];
        t++;
      }
    } // inverse-cipher-ify the decryption round key (fips-197 section 5.3)


    for (var r = 1; r < rounds; r++) {
      for (var c = 0; c < 4; c++) {
        tt = this._Kd[r][c];
        this._Kd[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
      }
    }
  };

  AES.prototype.encrypt = function (plaintext) {
    if (plaintext.length != 16) {
      throw new Error('invalid plaintext size (must be 16 bytes)');
    }

    var rounds = this._Ke.length - 1;
    var a = [0, 0, 0, 0]; // convert plaintext to (ints ^ key)

    var t = convertToInt32(plaintext);

    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Ke[0][i];
    } // apply round transforms


    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ this._Ke[r][i];
      }

      t = a.slice();
    } // the last round is special


    var result = createArray(16),
        tt;

    for (var i = 0; i < 4; i++) {
      tt = this._Ke[rounds][i];
      result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
    }

    return result;
  };

  AES.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length != 16) {
      throw new Error('invalid ciphertext size (must be 16 bytes)');
    }

    var rounds = this._Kd.length - 1;
    var a = [0, 0, 0, 0]; // convert plaintext to (ints ^ key)

    var t = convertToInt32(ciphertext);

    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Kd[0][i];
    } // apply round transforms


    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ this._Kd[r][i];
      }

      t = a.slice();
    } // the last round is special


    var result = createArray(16),
        tt;

    for (var i = 0; i < 4; i++) {
      tt = this._Kd[rounds][i];
      result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
    }

    return result;
  };
  /**
   *  Mode Of Operation - Electonic Codebook (ECB)
   */


  var ModeOfOperationECB = function ModeOfOperationECB(key) {
    if (!(this instanceof ModeOfOperationECB)) {
      throw Error('AES must be instanitated with `new`');
    }

    this.description = "Electronic Code Block";
    this.name = "ecb";
    this._aes = new AES(key);
  };

  ModeOfOperationECB.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);

    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }

    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);

    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);
      block = this._aes.encrypt(block);
      copyArray(block, ciphertext, i);
    }

    return ciphertext;
  };

  ModeOfOperationECB.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);

    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }

    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);

    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);
      copyArray(block, plaintext, i);
    }

    return plaintext;
  };
  /**
   *  Mode Of Operation - Cipher Block Chaining (CBC)
   */


  var ModeOfOperationCBC = function ModeOfOperationCBC(key, iv) {
    if (!(this instanceof ModeOfOperationCBC)) {
      throw Error('AES must be instanitated with `new`');
    }

    this.description = "Cipher Block Chaining";
    this.name = "cbc";

    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }

    this._lastCipherblock = coerceArray(iv, true);
    this._aes = new AES(key);
  };

  ModeOfOperationCBC.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);

    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }

    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);

    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);

      for (var j = 0; j < 16; j++) {
        block[j] ^= this._lastCipherblock[j];
      }

      this._lastCipherblock = this._aes.encrypt(block);
      copyArray(this._lastCipherblock, ciphertext, i);
    }

    return ciphertext;
  };

  ModeOfOperationCBC.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);

    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }

    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);

    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);

      for (var j = 0; j < 16; j++) {
        plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
      }

      copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
    }

    return plaintext;
  };
  /**
   *  Mode Of Operation - Cipher Feedback (CFB)
   */


  var ModeOfOperationCFB = function ModeOfOperationCFB(key, iv, segmentSize) {
    if (!(this instanceof ModeOfOperationCFB)) {
      throw Error('AES must be instanitated with `new`');
    }

    this.description = "Cipher Feedback";
    this.name = "cfb";

    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 size)');
    }

    if (!segmentSize) {
      segmentSize = 1;
    }

    this.segmentSize = segmentSize;
    this._shiftRegister = coerceArray(iv, true);
    this._aes = new AES(key);
  };

  ModeOfOperationCFB.prototype.encrypt = function (plaintext) {
    if (plaintext.length % this.segmentSize != 0) {
      throw new Error('invalid plaintext size (must be segmentSize bytes)');
    }

    var encrypted = coerceArray(plaintext, true);
    var xorSegment;

    for (var i = 0; i < encrypted.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);

      for (var j = 0; j < this.segmentSize; j++) {
        encrypted[i + j] ^= xorSegment[j];
      } // Shift the register


      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }

    return encrypted;
  };

  ModeOfOperationCFB.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length % this.segmentSize != 0) {
      throw new Error('invalid ciphertext size (must be segmentSize bytes)');
    }

    var plaintext = coerceArray(ciphertext, true);
    var xorSegment;

    for (var i = 0; i < plaintext.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);

      for (var j = 0; j < this.segmentSize; j++) {
        plaintext[i + j] ^= xorSegment[j];
      } // Shift the register


      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }

    return plaintext;
  };
  /**
   *  Mode Of Operation - Output Feedback (OFB)
   */


  var ModeOfOperationOFB = function ModeOfOperationOFB(key, iv) {
    if (!(this instanceof ModeOfOperationOFB)) {
      throw Error('AES must be instanitated with `new`');
    }

    this.description = "Output Feedback";
    this.name = "ofb";

    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }

    this._lastPrecipher = coerceArray(iv, true);
    this._lastPrecipherIndex = 16;
    this._aes = new AES(key);
  };

  ModeOfOperationOFB.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);

    for (var i = 0; i < encrypted.length; i++) {
      if (this._lastPrecipherIndex === 16) {
        this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
        this._lastPrecipherIndex = 0;
      }

      encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
    }

    return encrypted;
  }; // Decryption is symetric


  ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;
  /**
   *  Counter object for CTR common mode of operation
   */

  var Counter = function Counter(initialValue) {
    if (!(this instanceof Counter)) {
      throw Error('Counter must be instanitated with `new`');
    } // We allow 0, but anything false-ish uses the default 1


    if (initialValue !== 0 && !initialValue) {
      initialValue = 1;
    }

    if (typeof initialValue === 'number') {
      this._counter = createArray(16);
      this.setValue(initialValue);
    } else {
      this.setBytes(initialValue);
    }
  };

  Counter.prototype.setValue = function (value) {
    if (typeof value !== 'number' || parseInt(value) != value) {
      throw new Error('invalid counter value (must be an integer)');
    }

    for (var index = 15; index >= 0; --index) {
      this._counter[index] = value % 256;
      value = value >> 8;
    }
  };

  Counter.prototype.setBytes = function (bytes) {
    bytes = coerceArray(bytes, true);

    if (bytes.length != 16) {
      throw new Error('invalid counter bytes size (must be 16 bytes)');
    }

    this._counter = bytes;
  };

  Counter.prototype.increment = function () {
    for (var i = 15; i >= 0; i--) {
      if (this._counter[i] === 255) {
        this._counter[i] = 0;
      } else {
        this._counter[i]++;
        break;
      }
    }
  };
  /**
   *  Mode Of Operation - Counter (CTR)
   */


  var ModeOfOperationCTR = function ModeOfOperationCTR(key, counter) {
    if (!(this instanceof ModeOfOperationCTR)) {
      throw Error('AES must be instanitated with `new`');
    }

    this.description = "Counter";
    this.name = "ctr";

    if (!(counter instanceof Counter)) {
      counter = new Counter(counter);
    }

    this._counter = counter;
    this._remainingCounter = null;
    this._remainingCounterIndex = 16;
    this._aes = new AES(key);
  };

  ModeOfOperationCTR.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);

    for (var i = 0; i < encrypted.length; i++) {
      if (this._remainingCounterIndex === 16) {
        this._remainingCounter = this._aes.encrypt(this._counter._counter);
        this._remainingCounterIndex = 0;

        this._counter.increment();
      }

      encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
    }

    return encrypted;
  }; // Decryption is symetric


  ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt; ///////////////////////
  // Padding
  // See:https://tools.ietf.org/html/rfc2315

  function pkcs7pad(data) {
    data = coerceArray(data, true);
    var padder = 16 - data.length % 16;
    var result = createArray(data.length + padder);
    copyArray(data, result);

    for (var i = data.length; i < result.length; i++) {
      result[i] = padder;
    }

    return result;
  }

  function pkcs7strip(data) {
    data = coerceArray(data, true);

    if (data.length < 16) {
      throw new Error('PKCS#7 invalid length');
    }

    var padder = data[data.length - 1];

    if (padder > 16) {
      throw new Error('PKCS#7 padding byte out of range');
    }

    var length = data.length - padder;

    for (var i = 0; i < padder; i++) {
      if (data[length + i] !== padder) {
        throw new Error('PKCS#7 invalid padding byte');
      }
    }

    var result = createArray(length);
    copyArray(data, result, 0, 0, length);
    return result;
  } ///////////////////////
  // Exporting
  // The block cipher


  var aesjs = {
    AES: AES,
    Counter: Counter,
    ModeOfOperation: {
      ecb: ModeOfOperationECB,
      cbc: ModeOfOperationCBC,
      cfb: ModeOfOperationCFB,
      ofb: ModeOfOperationOFB,
      ctr: ModeOfOperationCTR
    },
    utils: {
      hex: convertHex,
      utf8: convertUtf8
    },
    padding: {
      pkcs7: {
        pad: pkcs7pad,
        strip: pkcs7strip
      }
    },
    _arrayTest: {
      coerceArray: coerceArray,
      createArray: createArray,
      copyArray: copyArray
    }
  }; // node.js

  if (true) {
    module.exports = aesjs; // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
  } else {}
})(this);

/***/ }),

/***/ "./src/js/hk-database.js":
/*!*******************************!*\
  !*** ./src/js/hk-database.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// ---------------- Hollow Knight Data Constant Objects ----------------- //

/*
    This is the whole database for the tool, based on the .json save file data
*/
var HK = {
  DIV_ID: {
    intro: {
      h2: "Game Status",
      id: "hk-intro",
      maxPercent: 112,
      saveVersion: "0.0.0.0"
    },
    hints: {
      h2: "My friend Elderbug once told me about...",
      id: "hk-hints"
    },
    bosses: {
      h2: "Bosses",
      id: "hk-bosses",
      percent: 0,
      maxPercent: 14
    },
    charms: {
      h2: "Charms",
      id: "hk-charms",
      percent: 0,
      maxPercent: 36
    },
    equipment: {
      h2: "Equipment",
      id: "hk-equipment",
      percent: 0,
      maxPercent: 14
    },
    nailUpgrades: {
      h2: "Nail Upgrades",
      id: "hk-nailupgrades",
      percent: 0,
      maxPercent: 4
    },
    nailArts: {
      h2: "Nail Arts",
      id: "hk-nailarts",
      percent: 0,
      maxPercent: 3
    },
    spells: {
      h2: "Spells",
      id: "hk-spells",
      percent: 0,
      maxPercent: 6
    },
    maskShards: {
      h2: "Mask Shards",
      id: "hk-maskshards",
      percent: 0,
      maxPercent: 4
    },
    vesselFragments: {
      h2: "Vessel Fragments",
      id: "hk-vesselfragments",
      percent: 0,
      maxPercent: 3
    },
    dreamNail: {
      h2: "Dream Nail and Essence",
      id: "hk-dreamnail",
      percent: 0,
      maxPercent: 3
    },
    warriorDreams: {
      h2: "Warrior Dreams",
      id: "hk-warriordreams",
      percent: 0,
      maxPercent: 7
    },
    dreamers: {
      h2: "Dreamers",
      id: "hk-dreamers",
      percent: 0,
      maxPercent: 3
    },
    colosseum: {
      h2: "Colosseum of Fools",
      id: "hk-colosseum",
      percent: 0,
      maxPercent: 3
    },
    grimmTroupe: {
      h2: "Grimm Troupe Content Pack",
      id: "hk-grimmtroupe",
      percent: 0,
      maxPercent: 6
    },
    lifeblood: {
      h2: "Lifeblood Content Pack",
      id: "hk-lifeblood",
      percent: 0,
      maxPercent: 1
    },
    godmaster: {
      h2: "Godmaster Content Pack",
      id: "hk-godmaster",
      percent: 0,
      maxPercent: 5
    },
    essential: {
      h2: "Game Completion Essentials",
      id: "hk-essential"
    },
    achievements: {
      h2: "Achievements Essentials",
      id: "hk-achievements"
    },
    statistics: {
      h2: "Game Statistics",
      id: "hk-statistics"
    }
  },
  // hk-hints
  HINTS: {
    fireballLevel: {
      spoiler: "...a mysterious shaman living in a dwelling below the town of Dirtmouth"
    },
    hornet1Defeated: {
      spoiler: "...a skilled protector guarding ruins in a lush green forest"
    },
    hasDash: {
      spoiler: "...an old cloak lying on a green path near a broken shell"
    },
    hasWalljump: {
      spoiler: "...a sharp claw lying forgotten somewhere amidst the insect village"
    },
    Crossroads_04: {
      spoiler: "...a mother sleeping peacefully below the town of Dirtmouth"
    },
    slyRescued: {
      spoiler: "...a fellow town bug who seems to be lost somewhere in the crossroads"
    },
    hasLantern: {
      spoiler: "...a precious item able to carry some light to even the darkest places"
    },
    hasSuperDash: {
      spoiler: "...some powerful crystal beating somewhere deep inside the mines"
    },
    hasDreamNail: {
      spoiler: "...a weapon from a dream world only found where the souls can peacefully rest"
    },
    killedInfectedKnight: {
      spoiler: "...a shattered corpse forgotten in a windy cave in the ancient depths below the city"
    },
    hasDoubleJump: {
      spoiler: "...something incredibly light dropped by a monarchfly in the ancient depths below the city"
    },
    killedBlackKnight: {
      spoiler: "...discarded shells of black guards lying on the floor of a high spire"
    },
    lurienDefeated: {
      spoiler: "...a dreamer sleeping somewhere at the top of a high spire"
    },
    dungDefenderOrHornet2: {
      spoiler: "...a skilled combatant living at the heart of the sewers or watching over a shell amidst ash falling from the sky"
    },
    ismaTearOrShadeCloak: {
      spoiler: "...something precious in a grove accessed from the waterways or a massive royal door guarding a cloak behind the darkness"
    },
    defeatedMegaJelly: {
      spoiler: "...an intelligent being floating inside hidden archives behind the fog"
    },
    monomonDefeated: {
      spoiler: "...a dreamer sleeping somewhere hidden in a foggy area"
    },
    hegemolDefeated: {
      spoiler: "...a dreamer sleeping near a spider nest area"
    },
    killedHollowKnight: {
      spoiler: "...a disturbance inside a black temple"
    }
  },
  // hk-bosses
  BOSSES: {
    falseKnightDefeated: {
      name: "False Knight",
      spoiler: "Forgotten Crossroads",
      wiki: "False_Knight"
    },
    // "Battle Scene" - "Crossroads_10" ?
    hornet1Defeated: {
      name: "Hornet Protector",
      spoiler: "Greenpath",
      wiki: "Hornet_Protector"
    },
    defeatedDungDefender: {
      name: "Dung Defender",
      spoiler: "Royal Waterways",
      wiki: "Dung_Defender"
    },
    mageLordDefeated: {
      name: "Soul Master",
      spoiler: "City of Tears: Soul Sanctum",
      wiki: "Soul_Master"
    },
    killedBlackKnight: {
      name: "Watcher Knights",
      spoiler: "City of Tears: Watcher's Spire",
      wiki: "Watcher_Knight"
    },
    collectorDefeated: {
      name: "The Collector",
      spoiler: "City of Tears: Tower of Love",
      wiki: "Collector"
    },
    defeatedMantisLords: {
      name: "Mantis Lords",
      spoiler: "Mantis Village",
      wiki: "Mantis_Lords"
    },
    defeatedMegaJelly: {
      name: "Uumuu",
      spoiler: "Fog Canyon: Teacher's Archives",
      wiki: "Uumuu"
    },
    hornetOutskirtsDefeated: {
      name: "Hornet Sentinel",
      spoiler: "Kingdom's Edge",
      wiki: "Hornet_Sentinel"
    },
    killedInfectedKnight: {
      name: "Broken Vessel",
      spoiler: "Ancient Basin",
      wiki: "Broken_Vessel"
    },
    killedMimicSpider: {
      name: "Nosk",
      spoiler: "Deepnest",
      wiki: "Nosk"
    },
    // "Battle Scene" - "Deepnest_32" ?
    killedTraitorLord: {
      name: "Traitor Lord",
      spoiler: "Queen's Gardens",
      wiki: "Traitor_Lord"
    } // "Battle Scene" - "Fungus3_23" ?

  },
  // hk-bosses
  // "Battle Scene" sceneData.persistentBoolItems.id
  BOSSES_WORLD: {
    Crossroads_04: {
      name: "Gruz Mother",
      spoiler: "Forgotten Crossroads",
      wiki: "Gruz_Mother"
    },
    // killedBigFly
    Crossroads_09: {
      name: "Brooding Mawlek",
      spoiler: "Forgotten Crossroads",
      wiki: "Brooding_Mawlek"
    } // killedMawlek

  },
  // reference: https://radiance.host/apidocs/Charms.html
  CHARMS: {
    gotCharm_1: {
      name: "#1 Gathering Swarm",
      spoiler: "Sly: 300 Geo",
      wiki: "Gathering_Swarm"
    },
    // 1
    gotCharm_2: {
      name: "#2 Wayward Compass",
      spoiler: "Iselda: 220 Geo",
      wiki: "Wayward_Compass"
    },
    // 1
    gotCharm_3: {
      name: "#3 Grubsong",
      spoiler: "Grubfather: 10 Grubs rescued",
      wiki: "Grubsong"
    },
    // 1
    gotCharm_4: {
      name: "#4 Stalwart Shell",
      spoiler: "Sly: 200 Geo",
      wiki: "Stalwart_Shell"
    },
    // 2
    gotCharm_5: {
      name: "#5 Baldur Shell",
      spoiler: "Howling Cliffs",
      wiki: "Baldur_Shell"
    },
    // 2
    gotCharm_6: {
      name: "#6 Fury of the Fallen",
      spoiler: "King's Pass",
      wiki: "Fury_of_the_Fallen"
    },
    // 2
    gotCharm_7: {
      name: "#7 Quick Focus",
      spoiler: "Salubra: 800 Geo",
      wiki: "Quick_Focus"
    },
    // 3
    gotCharm_8: {
      name: "#8 Lifeblood Heart",
      spoiler: "Salubra: 250 Geo",
      wiki: "Lifeblood_Heart"
    },
    // 2
    gotCharm_9: {
      name: "#9 Lifeblood Core",
      spoiler: "The Abyss: 15 Lifeblood masks",
      wiki: "Lifeblood_Core"
    },
    // 3
    gotCharm_10: {
      name: "#10 Defender's Crest",
      spoiler: "Royal Waterways",
      wiki: "Defender's_Crest"
    },
    // 1
    gotCharm_11: {
      name: "#11 Flukenest",
      spoiler: "Royal Waterways",
      wiki: "Flukenest"
    },
    // 3
    gotCharm_12: {
      name: "#12 Thorns of Agony",
      spoiler: "Greenpath",
      wiki: "Thorns_of_Agony"
    },
    // 1
    gotCharm_13: {
      name: "#13 Mark of Pride",
      spoiler: "Mantis Village",
      wiki: "Mark_of_Pride"
    },
    // 3
    gotCharm_14: {
      name: "#14 Steady Body",
      spoiler: "Salubra: 120 Geo",
      wiki: "Steady_Body"
    },
    // 1
    gotCharm_15: {
      name: "#15 Heavy Blow",
      spoiler: "Sly: 350 Geo + Shopkeeper's Key",
      wiki: "Heavy_Blow"
    },
    // 2
    gotCharm_16: {
      name: "#16 Sharp Shadow",
      spoiler: "Deepnest",
      wiki: "Sharp_Shadow"
    },
    // 2
    gotCharm_17: {
      name: "#17 Spore Shroom",
      spoiler: "Fungal Wastes",
      wiki: "Spore_Shroom"
    },
    // 1
    gotCharm_18: {
      name: "#18 Longnail",
      spoiler: "Salubra: 300 Geo",
      wiki: "Longnail"
    },
    // 2
    gotCharm_19: {
      name: "#19 Shaman Stone",
      spoiler: "Salubra: 220 Geo",
      wiki: "Shaman_Stone"
    },
    // 3
    gotCharm_20: {
      name: "#20 Soul Catcher",
      spoiler: "Forgotten Crossroads: Ancestral Mound",
      wiki: "Soul_Catcher"
    },
    // 2
    gotCharm_21: {
      name: "#21 Soul Eater",
      spoiler: "Resting Grounds",
      wiki: "Soul_Eater"
    },
    // 4
    gotCharm_22: {
      name: "#22 Glowing Womb",
      spoiler: "Forgotten Crossroads",
      wiki: "Glowing_Womb"
    },
    // 2
    gotCharm_23: {
      name: "#23 Fragile Heart",
      spoiler: "Leg Eater: 350/280 Geo",
      wiki: "Fragile_Heart"
    },
    // 2
    gotCharm_24: {
      name: "#24 Fragile Greed",
      spoiler: "Leg Eater: 250/200 Geo",
      wiki: "Fragile_Greed"
    },
    // 2
    gotCharm_25: {
      name: "#25 Fragile Strength",
      spoiler: "Leg Eater: 600/480 Geo",
      wiki: "Fragile_Strength"
    },
    // 3
    gotCharm_26: {
      name: "#26 Nailmaster’s Glory",
      spoiler: "Sly: All Nail Arts",
      wiki: "Nailmaster's_Glory"
    },
    // 1
    gotCharm_27: {
      name: "#27 Joni’s Blessing",
      spoiler: "Howling Cliffs: Joni's Repose",
      wiki: "Joni's_Blessing"
    },
    // 4
    gotCharm_28: {
      name: "#28 Shape of Unn",
      spoiler: "Greenpath: Lake of Unn",
      wiki: "Shape_of_Unn"
    },
    // 2
    gotCharm_29: {
      name: "#29 Hiveblood",
      spoiler: "The Hive",
      wiki: "Hiveblood"
    },
    // 4
    gotCharm_30: {
      name: "#30 Dream Wielder",
      spoiler: "Seer: 500 Essence",
      wiki: "Dream_Wielder"
    },
    // 1
    gotCharm_31: {
      name: "#31 Dashmaster",
      spoiler: "Fungal Wastes",
      wiki: "Dashmaster"
    },
    // 2
    gotCharm_32: {
      name: "#32 Quick Slash",
      spoiler: "Kingdom's Edge",
      wiki: "Quick_Slash"
    },
    // 3
    gotCharm_33: {
      name: "#33 Spell Twister",
      spoiler: "City of Tears: Soul Sanctum",
      wiki: "Spell_Twister"
    },
    // 2
    gotCharm_34: {
      name: "#34 Deep Focus",
      spoiler: "Crystal Peak",
      wiki: "Deep_Focus"
    },
    // 4
    gotCharm_35: {
      name: "#35 Grubberfly’s Elegy",
      spoiler: "Grubfather: 46 Grubs rescued",
      wiki: "Grubberfly's_Elegy"
    },
    // 3
    gotCharm_36: {
      name: "#36 Kingsoul",
      spoiler: "Queen's Gardens + Ancient Basin",
      wiki: "Kingsoul"
    } // 5

  },
  COLOSSEUM: {
    colosseumBronzeCompleted: {
      name: "Trial of the Warrior",
      spoiler: "Little Fool: 100 Geo",
      wiki: "Trial_of_the_Warrior"
    },
    colosseumSilverCompleted: {
      name: "Trial of the Conqueror",
      spoiler: "Little Fool: 450 Geo + Warrior completed",
      wiki: "Trial_of_the_Conqueror"
    },
    colosseumGoldCompleted: {
      name: "Trial of the Fool",
      spoiler: "Little Fool: 800 Geo + Conqueror completed",
      wiki: "Trial_of_the_Fool"
    }
  },
  DREAMERS: {
    lurienDefeated: {
      name: "Lurien the Watcher",
      spoiler: "City of Tears: Watcher's Spire",
      wiki: "Lurien"
    },
    monomonDefeated: {
      name: "Monomon the Teacher",
      spoiler: "Fog Canyon: Teacher's Archives",
      wiki: "Monomon"
    },
    hegemolDefeated: {
      name: "Herrah the Beast",
      spoiler: "Deepnest: Distant Village",
      wiki: "Herrah"
    }
  },
  DREAMNAIL: {
    hasDreamNail: {
      name: "Dream Nail acquired",
      spoiler: "Resting Grounds",
      wiki: "Dream_Nail"
    },
    dreamNailUpgraded: {
      name: "Awoken Dream Nail",
      spoiler: "Seer: 1800 Essence",
      wiki: "Dream_Nail#Awoken_Dream_Nail"
    },
    mothDeparted: {
      name: "Hear the Seer's final words",
      spoiler: "Seer: 2400 Essence",
      wiki: "Seer"
    }
  },
  EQUIPMENT: {
    hasDash: {
      name: "Mothwing Cloak",
      spoiler: "Greenpath: Dash ability",
      wiki: "Mothwing_Cloak"
    },
    hasWalljump: {
      name: "Mantis Claw",
      spoiler: "Mantis Village: Wall Jump ability",
      wiki: "Mantis_Claw"
    },
    hasSuperDash: {
      name: "Crystal Heart",
      spoiler: "Crystal Peak: Super Dash ability",
      wiki: "Crystal_Heart"
    },
    hasDoubleJump: {
      name: "Monarch Wings",
      spoiler: "Ancient Basin: Double Jump ability",
      wiki: "Monarch_Wings"
    },
    hasAcidArmour: {
      name: "Isma's Tear",
      spoiler: "Royal Waterways: Acid Armour ability",
      wiki: "Isma's_Tear"
    },
    hasKingsBrand: {
      name: "King's Brand",
      spoiler: "Kingdom's Edge",
      wiki: "King's_Brand"
    },
    hasShadowDash: {
      name: "Shade Cloak",
      spoiler: "The Abyss: Shadow Dash ability",
      wiki: "Shade_Cloak"
    }
  },
  MASKSHARDS: {
    slyShellFrag1: {
      name: "Mask Shard #1",
      spoiler: "Sly: 150 Geo",
      wiki: "Mask_Shard"
    },
    slyShellFrag2: {
      name: "Mask Shard #2",
      spoiler: "Sly: 500 Geo",
      wiki: "Mask_Shard"
    },
    slyShellFrag3: {
      name: "Mask Shard #3",
      spoiler: "Sly: 800 Geo + Shopkeeper's Key",
      wiki: "Mask_Shard"
    },
    slyShellFrag4: {
      name: "Mask Shard #4",
      spoiler: "Sly: 1500 Geo + Shopkeeper's Key",
      wiki: "Mask_Shard"
    },
    dreamReward7: {
      name: "Mask Shard #5",
      spoiler: "Seer: 1500 Essence",
      wiki: "Mask_Shard"
    }
  },
  // "Heart Piece" sceneData.persistentBoolItems.id
  MASKSHARDS_WORLD: {
    Crossroads_13: {
      name: "Mask Shard #6",
      spoiler: "Forgotten Crossroads: below Hot Springs",
      wiki: "Mask_Shard"
    },
    Crossroads_09: {
      name: "Mask Shard #7",
      spoiler: "Forgotten Crossroads: Brooding Mawlek",
      wiki: "Mask_Shard"
    },
    Crossroads_38: {
      name: "Mask Shard #8",
      spoiler: "Grubfather: 5 Grubs rescued",
      wiki: "Mask_Shard"
    },
    Room_Bretta: {
      name: "Mask Shard #9",
      spoiler: "Dirtmouth: Bretta's Room, rescue Bretta",
      wiki: "Mask_Shard"
    },
    Fungus2_01: {
      name: "Mask Shard #10",
      spoiler: "Queen's Station, requires Mantis Claw",
      wiki: "Mask_Shard"
    },
    Waterways_04b: {
      name: "Mask Shard #11",
      spoiler: "Royal Waterways",
      wiki: "Mask_Shard"
    },
    Fungus1_36: {
      name: "Mask Shard #12",
      spoiler: "Greenpath: Stone Sanctuary",
      wiki: "Mask_Shard"
    },
    Mines_32: {
      name: "Mask Shard #13",
      spoiler: "Crystal Peak: Enraged Guardian",
      wiki: "Mask_Shard"
    },
    Fungus2_25: {
      name: "Mask Shard #14",
      spoiler: "Deepnest: entrance from Fungal Wastes",
      wiki: "Mask_Shard"
    },
    Hive_04: {
      name: "Mask Shard #15",
      spoiler: "The Hive, use Hive Guardian",
      wiki: "Mask_Shard"
    },
    Room_Mansion: {
      name: "Mask Shard #16",
      spoiler: "Resting Grounds: Delicate Flower",
      wiki: "Mask_Shard"
    }
  },
  VESSELFRAGMENTS: {
    slyVesselFrag1: {
      name: "Vessel Fragment #1",
      spoiler: "Sly: 550 Geo",
      wiki: "Vessel_Fragment"
    },
    slyVesselFrag2: {
      name: "Vessel Fragment #2",
      spoiler: "Sly: 900 Geo + Shopkeeper's Key",
      wiki: "Vessel_Fragment"
    },
    dreamReward5: {
      name: "Vessel Fragment #3",
      spoiler: "Seer: 700 Essence",
      wiki: "Vessel_Fragment"
    },
    vesselFragStagNest: {
      name: "Vessel Fragment #4",
      spoiler: "Stag Nest",
      wiki: "Vessel_Fragment"
    }
  },
  // "Vessel Fragment" sceneData.persistentBoolItems.id
  VESSELFRAGMENTS_WORLD: {
    Fungus1_13: {
      name: "Vessel Fragment #5",
      spoiler: "Greenpath: near Queen's Gardens exit",
      wiki: "Vessel_Fragment"
    },
    Crossroads_37: {
      name: "Vessel Fragment #6",
      spoiler: "Forgotten Crossroads: unlock City of Tears lift",
      wiki: "Vessel_Fragment"
    },
    Ruins2_09: {
      name: "Vessel Fragment #7",
      spoiler: "Above King's Station",
      wiki: "Vessel_Fragment"
    },
    Deepnest_38: {
      name: "Vessel Fragment #8",
      spoiler: "Deepnest: Goam platforming challenge",
      wiki: "Vessel_Fragment"
    },
    Abyss_04: {
      name: "Vessel Fragment #9",
      spoiler: "Ancient Basin Fountain: 3000 Geo",
      wiki: "Vessel_Fragment"
    }
  },
  NAILARTS: {
    /* this is correct - somehow Team Cherry switched the names here */
    hasDashSlash: {
      name: "Great Slash",
      spoiler: "Nailmaster Sheo: Greenpath",
      wiki: "Great_Slash"
    },

    /* this is correct - somehow Team Cherry switched the names here */
    hasUpwardSlash: {
      name: "Dash Slash",
      spoiler: "Nailmaster Oro: Kingdom's Edge, 800 Geo",
      wiki: "Dash_Slash"
    },
    hasCyclone: {
      name: "Cyclone Slash",
      spoiler: "Nailmaster Mato: Howling Cliffs",
      wiki: "Cyclone_Slash"
    }
  },
  NAILUPGRADES: {
    oldNail: {
      name: "#0 Old Nail",
      spoiler: "Starting Weapon",
      wiki: "Nail"
    },
    sharpenedNail: {
      name: "#1 Sharpened Nail",
      spoiler: "Nailsmith: 250 Geo",
      wiki: "Nail#Nail_Upgrades"
    },
    channeledNail: {
      name: "#2 Channeled Nail",
      spoiler: "Nailsmith: 800 Geo + 1 Pale Ore",
      wiki: "Nail#Nail_Upgrades"
    },
    coiledNail: {
      name: "#3 Coiled Nail",
      spoiler: "Nailsmith: 2000 Geo + 2 Pale Ore",
      wiki: "Nail#Nail_Upgrades"
    },
    pureNail: {
      name: "#4 Pure Nail",
      spoiler: "Nailsmith: 4000 Geo + 3 Pale Ore",
      wiki: "Nail#Nail_Upgrades"
    }
  },
  SPELLS: {
    vengefulSpirit: {
      fireballLevel: 1,
      name: "Vengeful Spirit",
      spoiler: "Forgotten Crossroads: Ancestral Mound",
      wiki: "Vengeful_Spirit"
    },
    shadeSoul: {
      fireballLevel: 2,
      name: "Shade Soul",
      spoiler: "City of Tears: Soul Sanctum + Elegant Key",
      wiki: "Shade_Soul"
    },
    desolateDive: {
      quakeLevel: 1,
      name: "Desolate Dive",
      spoiler: "City of Tears: Soul Sanctum",
      wiki: "Desolate_Dive"
    },
    descendingDark: {
      quakeLevel: 2,
      name: "Descending Dark",
      spoiler: "Crystal Peak: Crystallised Mound",
      wiki: "Descending_Dark"
    },
    howlingWraiths: {
      screamLevel: 1,
      name: "Howling Wraiths",
      spoiler: "Fog Canyon: Overgrown Mound",
      wiki: "Howling_Wraiths"
    },
    abyssShriek: {
      screamLevel: 2,
      name: "Abyss Shriek",
      spoiler: "The Abyss, use Howling Wraiths on podium",
      wiki: "Abyss_Shriek"
    }
  },
  WARRIORDREAMS: {
    xeroDefeated: {
      name: "Xero",
      spoiler: "Resting Grounds",
      wiki: "Xero"
    },
    noEyesDefeated: {
      name: "No Eyes",
      spoiler: "Greenpath: Stone Sanctuary",
      wiki: "No_Eyes"
    },
    elderHuDefeated: {
      name: "Elder Hu",
      spoiler: "Fungal Wastes",
      wiki: "Elder_Hu"
    },
    aladarSlugDefeated: {
      name: "Gorb",
      spoiler: "Howling Cliffs",
      wiki: "Gorb"
    },
    mumCaterpillarDefeated: {
      name: "Marmu",
      spoiler: "Queen's Gardens",
      wiki: "Marmu"
    },
    galienDefeated: {
      name: "Galien",
      spoiler: "Deepnest",
      wiki: "Galien"
    },
    markothDefeated: {
      name: "Markoth",
      spoiler: "Kingdom's Edge, requires Shade Cloak",
      wiki: "Markoth"
    }
  },
  GRIMMTROUPE: {
    gotCharm_37: {
      name: "Charm #37 Sprintmaster",
      spoiler: "Sly: 400 Geo + Shopkeeper's Key",
      wiki: "Sprintmaster"
    },
    gotCharm_38: {
      name: "Charm #38 Dreamshield",
      spoiler: "Resting Grounds",
      wiki: "Dreamshield"
    },
    gotCharm_39: {
      name: "Charm #39 Weaversong",
      spoiler: "Deepnest: Weaver's Den",
      wiki: "Weaversong"
    },
    gotCharm_40: {
      name: "Charm #40 Grimmchild / Carefree Melody",
      spoiler: "Dirtmouth",
      wiki: "Grimmchild"
    },
    killedGrimm: {
      name: "Troupe Leader Grimm",
      spoiler: "Dirtmouth, collect 6 flames",
      wiki: "Grimm"
    },
    grimmChildLevel: {
      name: "Nightmare King Grimm / Banishment",
      spoiler: "Dirtmouth or Howling Cliffs",
      wiki: "Category:The_Grimm_Troupe#Banishment"
    }
  },
  LIFEBLOOD: {
    killedHiveKnight: {
      name: "Hive Knight",
      spoiler: "The Hive, guards Hiveblood charm",
      wiki: "Hive_Knight"
    }
  },
  GODMASTER_DOORS: {
    pantheonMaster: {
      name: "#1 Pantheon of the Master",
      spoiler: "Godhome",
      wiki: "Pantheon_of_the_Master"
    },
    pantheonArtist: {
      name: "#2 Pantheon of the Artist",
      spoiler: "Godhome",
      wiki: "Pantheon_of_the_Artist"
    },
    pantheonSage: {
      name: "#3 Pantheon of the Sage",
      spoiler: "Godhome",
      wiki: "Pantheon_of_the_Sage"
    },
    pantheonKnight: {
      name: "#4 Pantheon of the Knight",
      spoiler: "Godhome, complete #1, #2 and #3",
      wiki: "Pantheon_of_the_Knight"
    }
  },
  GODMASTER: {
    hasGodfinder: {
      name: "Godtuner",
      spoiler: "Junk Pit, requires Simple Key",
      wiki: "Godtuner"
    }
  },
  ESSENTIAL: {
    grubsCollected: {
      name: "Grubs Rescued",
      spoiler: "out of 46 total",
      max: 46,
      wiki: "Grub"
    },
    dreamOrbs: {
      name: "Essence Collected",
      spoiler: "Dream Nail (2400 for completion)",
      max: 2400,
      wiki: "Dream_Nail#Essence"
    },
    stationsOpened: {
      name: "Stag Stations opened",
      spoiler: "out of 10 total",
      max: 10,
      wiki: "Fast_Travel_(Hollow_Knight)#Locations_and_Prices"
    },
    fountainGeo: {
      name: "Geo in Fountain",
      spoiler: "Ancient Basin: 3000 Geo maximum",
      max: 3000,
      wiki: "Ancient_Basin#Description"
    },
    slyRescued: {
      name: "Sly Rescued",
      spoiler: "Forgotten Crossroads, near Gruz Mother",
      wiki: "Sly"
    },
    brettaRescued: {
      name: "Bretta Rescued",
      spoiler: "Fungal Wastes, near Dashmaster charm statue",
      wiki: "Bretta"
    },
    hasLantern: {
      name: "Lumafly Lantern",
      spoiler: "Sly: 1800 Geo",
      wiki: "Lumafly_Lantern"
    },
    shopkeeperKey: {
      name: "Shopkeeper's Key",
      spoiler: "Crystal Peak, below Quirrel location",
      wiki: "Shopkeeper's_Key"
    },
    elegantKey: {
      name: "Elegant Key",
      spoiler: "Sly: 800 Geo + Shopkeeper's Key",
      wiki: "Elegant_Key"
    },
    loveKey: {
      name: "Love Key",
      spoiler: "Queen's Gardens, near Fungal Wastes",
      wiki: "Love_Key"
    },
    slySimpleKey: {
      name: "Simple Key #1",
      spoiler: "Sly: 950 Geo",
      wiki: "Simple_Key"
    },
    simpleKeyCityOfTears: {
      name: "Simple Key #2",
      spoiler: "City of Tears, below west Stag Station",
      wiki: "Simple_Key#How_to_Acquire"
    },
    simpleKeyAncientBasin: {
      name: "Simple Key #3",
      spoiler: "Ancient Basin, below Broken Vessel",
      wiki: "Simple_Key#How_to_Acquire"
    },
    gotLurkerKey: {
      name: "Simple Key #4",
      spoiler: "Colosseum of Fools: Pale Lurker's Retreat",
      wiki: "Simple_Key#How_to_Acquire"
    },
    paleOreAncientBasin: {
      name: "Pale Ore #1",
      spoiler: "Ancient Basin, near Cloth location",
      wiki: "Pale_Ore"
    },
    paleOreSeer: {
      name: "Pale Ore #2",
      spoiler: "Seer: 300 Essence",
      wiki: "Pale_Ore#How_to_Acquire"
    },
    paleOreCrystalPeak: {
      name: "Pale Ore #3",
      spoiler: "Crystal Peak: Hallownest's Crown",
      wiki: "Pale_Ore#How_to_Acquire"
    },
    paleOreDeepnest: {
      name: "Pale Ore #4",
      spoiler: "Deepnest, Nosk reward",
      wiki: "Pale_Ore#How_to_Acquire"
    },
    paleOreGrubfather: {
      name: "Pale Ore #5",
      spoiler: "Grubfather: 31 Grubs rescued",
      wiki: "Pale_Ore#How_to_Acquire"
    },
    paleOreColosseum: {
      name: "Pale Ore #6",
      spoiler: "Colosseum of Fools: Trial of the Conqueror",
      wiki: "Pale_Ore#How_to_Acquire"
    },
    waterwaysAcidDrained: {
      name: "Acid Drained",
      spoiler: "Royal Waterways, lever after Dung Defender",
      wiki: "Royal_Waterways#Sub-area:_Isma.27s_Grove"
    },
    hasTramPass: {
      name: "Tram Pass",
      spoiler: "Deepnest, Failed Tramway",
      wiki: "Tram_Pass"
    },
    gotQueenFragment: {
      name: "White Fragment: Queen",
      spoiler: "White Lady, Queen's Gardens",
      wiki: "Kingsoul#How_to_Acquire"
    },
    gotKingFragment: {
      name: "White Fragment: King",
      spoiler: "Pale King, White Palace",
      wiki: "Kingsoul#How_to_Acquire"
    },
    nightmareLanternLit: {
      name: "Nightmare Lantern Lit",
      spoiler: "Howling Cliffs, corpse of a large bug",
      wiki: "Howling_Cliffs#Nightmare_Lantern_Chamber"
    }
  },
  GRUBS_LIST: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
  ACHIEVEMENTS: {
    areaMaps: {
      name: "Area Maps",
      spoiler: "Cornifer and Iselda (out of 13)",
      max: 13,
      list: ["mapCrossroads", "mapGreenpath", "mapFogCanyon", "mapRoyalGardens", "mapFungalWastes", "mapCity", "mapWaterways", "mapMines", "mapDeepnest", "mapCliffs", "mapOutskirts", "mapRestingGrounds", "mapAbyss"],
      wiki: "Map_and_Quill#Maps"
    },
    journalEntriesCompleted: {
      name: "Creatures Encountered",
      spoiler: "Hunter's Journal (164 max)",
      max: 164,
      wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
    },
    journalNotesCompleted: {
      name: "Hunter Notes Completed",
      spoiler: "Hunter's Journal (164 max)",
      max: 164,
      wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
    },
    hasJournal: {
      name: "Hunter's Journal",
      spoiler: "Greenpath: Hunter",
      wiki: "Hunter%27s_Journal"
    },
    hasHuntersMark: {
      name: "Hunter's Mark",
      spoiler: "Greenpath: Hunter",
      wiki: "Hunter's_Mark"
    },
    killedPrayerSlug: {
      name: "Journal: Maggot",
      spoiler: "Forgotten Crossroads: False Knight secret room",
      wiki: "Maggot"
    },
    killedOrangeScuttler: {
      name: "Journal: Lightseed",
      spoiler: "Infected Crossroads",
      wiki: "Lightseed"
    },
    killedPigeon: {
      name: "Journal: Maskfly",
      spoiler: "Greenpath, Queen's Gardens",
      wiki: "Maskfly"
    },
    killedLazyFlyer: {
      name: "Journal: Aluba",
      spoiler: "Lake of Unn, Queen's Gardens (near White Lady)",
      wiki: "Aluba"
    },
    killedAcidFlyer: {
      name: "Journal: Duranda",
      spoiler: "Greenpath: Nailmaster Sheo's tent path",
      wiki: "Duranda"
    },
    killedAcidWalker: {
      name: "Journal: Durandoo",
      spoiler: "Greenpath, Queen's Gardens",
      wiki: "Durandoo"
    },
    killedPlantShooter: {
      name: "Journal: Gulka",
      spoiler: "Greenpath: west of Stone Sanctuary",
      wiki: "Gulka"
    },
    killedMushroomTurret: {
      name: "Journal: Sporg",
      spoiler: "Fungal Wastes",
      wiki: "Sporg"
    },
    killedZapBug: {
      name: "Journal: Charged Lumafly",
      spoiler: "Fog Canyon: Teacher's Archives (tank)",
      wiki: "Charged_Lumafly"
    },
    killedCrystalCrawler: {
      name: "Journal: Crystal Crawler",
      spoiler: "Crystal Peak",
      wiki: "Crystal_Crawler"
    },
    killedGorgeousHusk: {
      name: "Journal: Gorgeous Husk",
      spoiler: "City of Tears: secret room",
      wiki: "Gorgeous_Husk"
    },
    killedWorm: {
      name: "Journal: Goam",
      spoiler: "Infected Crossroads: near Fungal Wastes entrance",
      wiki: "Goam"
    },
    killedBigCentipede: {
      name: "Journal: Garpede",
      spoiler: "Deepnest: east of Hot Spring",
      wiki: "Garpede"
    },
    killedAbyssTendril: {
      name: "Journal: Void Tendrils",
      spoiler: "The Abyss: secret room",
      wiki: "Void_Tendrils"
    },
    killedPaleLurker: {
      name: "Journal: Pale Lurker",
      spoiler: "Colosseum of Fools: secret area",
      wiki: "Pale_Lurker"
    },
    falseKnightDreamDefeated: {
      name: "Failed Champion",
      spoiler: "Forgotten Crossroads",
      wiki: "Failed_Champion"
    },
    mageLordDreamDefeated: {
      name: "Soul Tyrant",
      spoiler: "City of Tears: Soul Sanctum",
      wiki: "Soul_Tyrant"
    },
    infectedKnightDreamDefeated: {
      name: "Lost Kin",
      spoiler: "Ancient Basin",
      wiki: "Lost_Kin"
    },
    whiteDefenderDefeated: {
      name: "White Defender",
      spoiler: "Royal Waterways",
      wiki: "White_Defender"
    },
    greyPrinceDefeated: {
      name: "Grey Prince Zote",
      spoiler: "Dirtmouth: Bretta's Room (per save choice)",
      wiki: "Grey_Prince_Zote"
    },
    killedHollowKnight: {
      name: "Hollow Knight",
      spoiler: "Forgotten Crossroads: Black Egg Temple",
      wiki: "Hollow_Knight"
    },
    salubraBlessing: {
      name: "Salubra's Blessing",
      spoiler: "Salubra: 800 Geo + all 40 Charms found",
      wiki: "Salubra's_Blessing"
    },
    gotShadeCharm: {
      name: "Void Heart",
      spoiler: "Kingsoul + Birthplace",
      wiki: "Void_Heart"
    },
    killedFinalBoss: {
      name: "Radiance",
      spoiler: "Forgotten Crossroads: Black Egg Temple",
      wiki: "Radiance"
    },
    bossDoorStateTier5: {
      name: "Embrace the Void",
      spoiler: "Godhome: Pantheon of Hallownest",
      wiki: "Pantheon_of_Hallownest"
    },
    zoteStatus: {
      name: "Zote Status",
      nameNeglect: "Zote Choice: Neglect",
      nameRivalry: "Zote Choice: Rivalry",
      nameTrappedVengefly: "Zote Status: Vengefly",
      nameNotRescuedVengefly: "Zote Status: Greenpath",
      nameTrappedDeepnest: "Zote Status: Deepnest",
      nameColosseum: "Zote Status: Colosseum of Fools",
      spoiler: "One achievement per save file",
      spoilerNeglect: "Left Zote to die",
      spoilerRivalry: "Defeated Zote in the Colosseum of Fools",
      spoilerTrappedVengefly: "Greenpath, defeat Vengefly King",
      spoilerNotRescuedVengefly: "Check what happened with Zote",
      spoilerTrappedDeepnest: "Deepnest, free from cobwebs",
      spoilerColosseum: "Trial of the Warrior",
      wiki: "Zote"
    },
    nailsmithStatus: {
      name: "Nailsmith Status",
      nameHappyCouple: "Nailsmith Choice: Happy Couple",
      namePurity: "Nailsmith Choice: Purity",
      nameSheoHutWaiting: "Nailsmith Status: Sheo",
      nameUpgradeNail: "Nailsmith Status: Waiting",
      spoiler: "One achievement per save file",
      spoilerHappyCouple: "Found a new calling",
      spoilerPurity: "Slain with Pure Nail",
      spoilerSheoHutWaiting: "Waiting at Sheo's Hut",
      spoilerUpgradeNail: "Upgrade Nail to Pure Nail",
      wiki: "Nailsmith"
    },
    mrMushroomState: {
      name: "Mr Mushroom",
      spoiler1: "Fungal Wastes, near Cornifer",
      spoiler2: "Kingdom's Edge, near Isma's Grove",
      spoiler3: "Deepnest, near Galien",
      spoiler4: "Howling Cliffs, near Nailmaster Mato",
      spoiler5: "Ancient Basin, near Monarch Wings",
      spoiler6: "Fog Canyon, near Overgrown Mound",
      spoiler7: "King's Pass, game starting location",
      wiki: "Mister_Mushroom"
    }
    /* 
    Mr Mushroom data
    case SplitName.MrMushroom1: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 2; break;
    case SplitName.MrMushroom2: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 3; break;
    case SplitName.MrMushroom3: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 4; break;
    case SplitName.MrMushroom4: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 5; break;
    case SplitName.MrMushroom5: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 6; break;
    case SplitName.MrMushroom6: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 7; break;
    case SplitName.MrMushroom7: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 8; break;
      "mrMushroomState": 4, < this is the current location of Mr Mushroom (Howling Cliffs)
      1. Spawn of self, their minds unite, (Fungal Wastes)
    2. Aside the source of acid blight, (Kingdom's Edge, near Isma's Grove)
    3. Aglow in darkest, winding depths, (Deepnest, near Galien)
    4. Winds all howl above fossilstone steps, (Howling Cliffs)
    5. Monarchflys in air set still, (Ancient Basin, near the Monarch Wings location)
    6. To Root's domain and snail once shrill, (Fog Canyon, near Overgrown Mound)
    7. Path of Wyrm, at new lands entered, (King's Pass)
    8. There journeys end. The kingdom ventured.
    */

  },
  STATISTICS: {
    nailDamage: {
      name: "Nail Damage",
      spoiler: "Nailsmith upgrades, City of Tears",
      max: 21,
      wiki: "Nail#Nail_Upgrades"
    },
    charmSlots: {
      name: "Charm Notches",
      spoiler: "out of 11 total",
      max: 11,
      wiki: "Category:Charms#Notches"
    },
    whisperingRoots: {
      name: "Whispering Roots completed",
      spoiler: "Dream Nail (out of 15)",
      max: 15,
      wiki: "Whispering_Root"
    },
    relicsWandererJournal: {
      name: "Relic #1 found total",
      nameHeld: "trinket1",
      nameSold: "soldTrinket1",
      spoiler: "Wanderer's Journal (out of 14)",
      max: 14,
      wiki: "Wanderer's_Journal"
    },
    relicsHallownestSeal: {
      name: "Relic #2 found total",
      nameHeld: "trinket2",
      nameSold: "soldTrinket2",
      spoiler: "Hallownest Seal (out of 17)",
      max: 17,
      wiki: "Hallownest_Seal"
    },
    relicsKingsIdol: {
      name: "Relic #3 found total",
      nameHeld: "trinket3",
      nameSold: "soldTrinket3",
      spoiler: "King's Idol (out of 8)",
      max: 8,
      wiki: "King's_Idol"
    },
    relicsArcaneEgg: {
      name: "Relic #4 found total",
      nameHeld: "trinket4",
      nameSold: "soldTrinket4",
      spoiler: "Arcane Egg (4 max, 1 missable)",
      max: 4,
      wiki: "Arcane_Egg"
    },
    geoRocks: {
      name: "Geo Rocks",
      spoiler: "Unbroken/Broken/Discovered Total",
      wiki: "Geo#How_to_Acquire"
    },
    // not ghostCoins
    geoPool: {
      name: "Shade Geo",
      spoiler: "Amount of Geo the Shade is currently holding",
      min: 0,
      wiki: "Shade"
    },
    rancidEggs: {
      name: "Rancid Eggs",
      spoiler: "Find: Hallownest, Buy: Sly, Tuk",
      wiki: "Rancid_Egg"
    },
    jinnEggsSold: {
      name: "Rancid Eggs sold to Jinn",
      spoiler: "Only in Steel Soul Mode",
      wiki: "Jinn"
    },
    xunFlowerBrokeTimes: {
      name: "Delicate Flowers broken",
      spoiler: "Resting Grounds: Grey Mourner",
      wiki: "Delicate_Flower"
    },
    notchShroomOgres: {
      name: "Charm Notch #1",
      spoiler: "Fungal Wastes: Shroom Ogres room",
      wiki: "Category:Charms#Notches"
    },
    salubraNotch1: {
      name: "Charm Notch #2",
      spoiler: "Salubra: 120 Geo + 5 Charms found",
      wiki: "Category:Charms#Notches"
    },
    salubraNotch2: {
      name: "Charm Notch #3",
      spoiler: "Salubra: 500 Geo + 10 Charms found",
      wiki: "Category:Charms#Notches"
    },
    salubraNotch3: {
      name: "Charm Notch #4",
      spoiler: "Salubra: 900 Geo + 18 Charms found",
      wiki: "Category:Charms#Notches"
    },
    salubraNotch4: {
      name: "Charm Notch #5",
      spoiler: "Salubra: 1400 Geo + 25 Charms found",
      wiki: "Category:Charms#Notches"
    },
    colosseumBronzeCompleted: {
      name: "Charm Notch #6",
      spoiler: "Colosseum of Fools: Trial of the Warrior",
      wiki: "Category:Charms#Notches"
    },
    notchFogCanyon: {
      name: "Charm Notch #7",
      spoiler: "Fog Canyon: explosive eggs room",
      wiki: "Category:Charms#Notches"
    },
    gotGrimmNotch: {
      name: "Charm Notch #8",
      spoiler: "Dirtmouth: Troupe Leader Grimm",
      wiki: "Category:Charms#Notches"
    },
    hasDreamGate: {
      name: "Dreamgate",
      spoiler: "Seer: 900 Essence",
      wiki: "Dreamgate"
    },
    fragileGreed_unbreakable: {
      name: "Unbreakable Greed",
      spoiler: "Divine: Fragile Greed + 9000 Geo",
      wiki: "Divine#Unbreakable_Charms"
    },
    fragileHealth_unbreakable: {
      name: "Unbreakable Heart",
      spoiler: "Divine: Fragile Heart + 12000 Geo",
      wiki: "Divine#Unbreakable_Charms"
    },
    fragileStrength_unbreakable: {
      name: "Unbreakable Strength",
      spoiler: "Divine: Fragile Strength + 15000 Geo",
      wiki: "Divine#Unbreakable_Charms"
    },
    killedMenderBug: {
      name: "Journal: Menderbug",
      spoiler: "Forgotten Crossroads + destroy sign",
      wiki: "Menderbug"
    },
    killedBindingSeal: {
      name: "Journal: Seal of Binding",
      spoiler: "White Palace: Path of Pain completion",
      wiki: "Seal_of_Binding"
    },
    killedGodseekerMask: {
      name: "Journal: Weathered Mask",
      spoiler: "Godhome: Land of Storms",
      wiki: "Weathered_Mask"
    },
    killedVoidIdol_1: {
      name: "Journal: Void Idol Attuned",
      spoiler: "Godhome: Hall of Gods, defeat all",
      wiki: "Void_Idol"
    },
    killedVoidIdol_2: {
      name: "Journal: Void Idol Ascended",
      spoiler: "Godhome: Hall of Gods, defeat all",
      wiki: "Void_Idol"
    },
    killedVoidIdol_3: {
      name: "Journal: Void Idol Radiant",
      spoiler: "Godhome: Hall of Gods, defeat all",
      wiki: "Void_Idol"
    },
    elderbugGaveFlower: {
      name: "Delicate Flower: Elderbug",
      spoiler: "Delivered from Traitor's Child Grave",
      wiki: "Delicate_Flower#List_of_Possible_Recipients"
    },
    givenGodseekerFlower: {
      name: "Delicate Flower: Godseeker",
      spoiler: "Delivered from Traitor's Child Grave",
      wiki: "Delicate_Flower#List_of_Possible_Recipients"
    },
    givenOroFlower: {
      name: "Delicate Flower: Nailmaster Oro",
      spoiler: "D. from Traitor's Child Grave",
      wiki: "Delicate_Flower#List_of_Possible_Recipients"
    },
    givenWhiteLadyFlower: {
      name: "Delicate Flower: White Lady",
      spoiler: "Delivered from Traitor's Child Grave",
      wiki: "Delicate_Flower#List_of_Possible_Recipients"
    },
    givenEmilitiaFlower: {
      name: "Delicate Flower: Emilitia",
      spoiler: "Delivered from Traitor's Child Grave",
      wiki: "Delicate_Flower#List_of_Possible_Recipients"
    },
    whitePalaceSecretRoomVisited: {
      name: "White Palace Secret Room visited",
      spoiler: "Help identify this room!",
      wiki: "White_Palace#Secret_rooms"
    },
    killsBindingSeal: {
      name: "Path of Pain",
      spoiler: "White Palace: main secret area",
      wiki: "White_Palace#Sub-area:_Path_of_Pain"
    },
    whiteDefenderDefeats: {
      name: "White Defender times defeated",
      spoiler: "Royal Waterways (5 max)",
      max: 5,
      wiki: "White_Defender"
    },
    greyPrinceDefeats: {
      name: "Grey Prince Zote times defeated",
      spoiler: "Dirtmouth (10 max)",
      max: 10,
      wiki: "Grey_Prince_Zote"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HK);

/***/ }),

/***/ "./src/js/hk-dictionary.js":
/*!*********************************!*\
  !*** ./src/js/hk-dictionary.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var MAP = {
  "Tutorial_01": "King's_Pass",
  "Town": "Dirtmouth",
  "Room_shop": "Sly",
  "Room_Sly_Storeroom": "Sly_Basement",
  "Room_Town_Stag_Station": "Dirtmouth_Stag",
  "Room_mapper": "Iselda",
  "Room_Bretta": "Bretta",
  "Room_Bretta_Basement": "Bretta_Basement",
  "Room_Ouiji": "Jiji",
  "Room_Jinn": "Jinn",
  "Room_Tram_RG": "Upper_Tram",
  "Room_Tram": "Lower_Tram",
  "Crossroads_01": "Crossroads_Well",
  "Crossroads_02": "Crossroads_Outside_Temple",
  "Crossroads_03": "Crossroads_Outside_Stag",
  "Crossroads_04": "Crossroads_Gruz_Mother",
  "Crossroads_05": "Crossroads_Central_Grub",
  "Crossroads_06": "Crossroads_Outside_Mound",
  "Crossroads_07": "Crossroads_Gruzzer",
  "Crossroads_08": "Crossroads_Aspid_Arena",
  "Crossroads_09": "Crossroads_Mawlek_Boss",
  "Crossroads_10": "Crossroads_False_Knight_Arena",
  "Crossroads_11_alt": "Crossroads_Greenpath_Entrance",
  "Crossroads_12": "Crossroads_Corridor_to_Acid_Grub",
  "Crossroads_13": "Crossroads_Goam_Mask_Shard",
  "Crossroads_14": "Crossroads_Outside_Myla",
  "Crossroads_15": "Crossroads_Corridor_to_Tram",
  "Crossroads_16": "Crossroads_Above_Lever",
  "Crossroads_18": "Crossroads_Fungal_Entrance",
  "Crossroads_19": "Crossroads_Before_Gruz_Mother",
  "Crossroads_21": "Crossroads_Outside_False_Knight",
  "Crossroads_22": "Crossroads_Glowing_Womb_Arena",
  "Crossroads_25": "Crossroads_Mawlek_Entrance",
  "Crossroads_27": "Crossroads_Outside_Tram",
  "Crossroads_30": "Crossroads_Hot_Spring",
  "Crossroads_31": "Crossroads_Spike_Grub",
  "Crossroads_33": "Crossroads_Cornifer",
  "Crossroads_35": "Crossroads_Acid_Grub",
  "Crossroads_36": "Crossroads_Mawlek_Middle",
  "Crossroads_37": "Crossroads_Vessel_Fragment",
  "Crossroads_38": "Crossroads_Grubfather",
  "Crossroads_39": "Crossroads_Corridor_Right_of_Temple",
  "Crossroads_40": "Crossroads_Corridor_Right_of_Central_Grub",
  "Crossroads_42": "Crossroads_Right_Of_Mask_Shard",
  "Crossroads_43": "Crossroads_Corridor_to_Elevator",
  "Crossroads_45": "Crossroads_Myla",
  "Crossroads_46": "Crossroads_Tram",
  "Crossroads_47": "Crossroads_Stag",
  "Crossroads_48": "Crossroads_Guarded_Grub",
  "Crossroads_49": "Crossroads_Elevator",
  "Crossroads_52": "Crossroads_Goam_Journal",
  "Crossroads_ShamanTemple": "Crossroads_Ancestral_Mound",
  "Room_Mender_House": "Crossroads_Menderbug",
  "Room_Charm_Shop": "Crossroads_Salubra",
  "Room_ruinhouse": "Crossroads_Rescue_Sly",
  "Room_temple": "Crossroads_Inside_Temple",
  "Fungus1_01": "Greenpath_Entrance",
  "Fungus1_01b": "Greenpath_Waterfall_Bench",
  "Fungus1_02": "Greenpath_First_Hornet_Sighting",
  "Fungus1_03": "Greenpath_Storerooms",
  "Fungus1_04": "Greenpath_Hornet",
  "Fungus1_05": "Greenpath_Outside_Thorns",
  "Fungus1_06": "Greenpath_Cornifer",
  "Fungus1_07": "Greenpath_Outside_Hunter",
  "Fungus1_08": "Greenpath_Hunter",
  "Fungus1_09": "Greenpath_Sheo_Gauntlet",
  "Fungus1_10": "Greenpath_Acid_Bridge",
  "Fungus1_11": "Greenpath_Above_Fog_Canyon",
  "Fungus1_12": "Greenpath_MMC_Corridor",
  "Fungus1_13": "Greenpath_Whispering_Root",
  "Fungus1_14": "Greenpath_Thorns_of_Agony",
  "Fungus1_15": "Greenpath_Outside_Sheo",
  "Fungus1_16_alt": "Greenpath_Stag",
  "Fungus1_17": "Greenpath_Charger_Corridor",
  "Fungus1_19": "Greenpath_Above_Sanctuary_Bench",
  "Fungus1_20_v02": "Greenpath_Vengefly_King",
  "Fungus1_21": "Greenpath_Outside_Hornet",
  "Fungus1_22": "Greenpath_Outside_Stag",
  "Fungus1_25": "Greenpath_Corridor_to_Unn",
  "Fungus1_26": "Greenpath_Lake_Of_Unn",
  "Fungus1_29": "Greenpath_Massive_Moss_Charger",
  "Fungus1_30": "Greenpath_Below_Toll_Bench",
  "Fungus1_31": "Greenpath_Toll",
  "Fungus1_32": "Greenpath_Moss_Knight_Arena",
  "Fungus1_34": "Greenpath_Stone_Sanctuary_Entrance",
  "Fungus1_35": "Greenpath_Stone_Sanctuary",
  "Fungus1_36": "Greenpath_Stone_Sanctuary_Mask_Shard",
  "Fungus1_37": "Greenpath_Sanctuary_Bench",
  "Fungus1_Slug": "Greenpath_Unn",
  "Room_nailmaster_02": "Greenpath_Sheo",
  "Room_Slug_Shrine": "Greenpath_Unn_Bench",
  "Deepnest_01": "Fungal_Deepnest_Fall",
  "Fungus2_01": "Fungal_Queen's_Station",
  "Fungus2_02": "Fungal_Queen's_Stag",
  "Fungus2_03": "Fungal_Outside_Queen's",
  "Fungus2_04": "Fungal_Below_Ogres",
  "Fungus2_05": "Fungal_Shrumal_Ogres",
  "Fungus2_06": "Fungal_Outside_Leg_Eater",
  "Fungus2_07": "Fungal_Shrumal_Warrior_Acid_Bridge",
  "Fungus2_08": "Fungal_Outside_Elder_Hu",
  "Fungus2_09": "Fungal_Cloth_Corridor",
  "Fungus2_10": "Fungal_Left_Of_Pilgrim's_Way",
  "Fungus2_11": "Fungal_Right_of_Bouncy_Grub",
  "Fungus2_12": "Fungal_Mantis_Corridor",
  "Fungus2_13": "Fungal_Bretta_Bench",
  "Fungus2_14": "Fungal_Mantis_Village",
  "Fungus2_15": "Fungal_Mantis_Lords",
  "Fungus2_17": "Fungal_Above_Mantis_Village",
  "Fungus2_18": "Fungal_Cornifer",
  "Fungus2_19": "Fungal_Right_Of_Spore_Shroom",
  "Fungus2_20": "Fungal_Spore_Shroom",
  "Fungus2_21": "Fungal_Pilgrim's_Way",
  "Fungus2_23": "Fungal_Dashmaster",
  "Fungus2_26": "Fungal_Leg_Eater",
  "Fungus2_28": "Fungal_Shrumal_Warrior_Loop",
  "Fungus2_29": "Fungal_Core_Upper",
  "Fungus2_30": "Fungal_Core_Lower",
  "Fungus2_31": "Fungal_Mantis_Rewards",
  "Fungus2_32": "Fungal_Elder_Hu",
  "Fungus2_33": "Fungal_Leg_Eater_Root",
  "Fungus2_34": "Fungal_Willoh",
  "Fungus3_01": "Fog_Upper_West_Tall",
  "Fungus3_02": "Fog_Lower_West_Tall",
  "Fungus3_03": "Fog_Queen's_Gardens_Acid_Entrance",
  "Fungus3_24": "Fog_Corridor_to_Overgrown_Mound",
  "Fungus3_25": "Fog_Cornifer",
  "Fungus3_25b": "Fog_Corridor_to_Cornifer",
  "Fungus3_26": "Fog_East_Tall",
  "Fungus3_27": "Fog_Corridor_to_Archives",
  "Fungus3_28": "Fog_Charm_Notch",
  "Fungus3_30": "Fog_Lifeblood",
  "Fungus3_35": "Fog_Millibelle",
  "Fungus3_44": "Fog_Overgrown_Mound_Entrance",
  "Fungus3_47": "Fog_Archives_Entrance",
  "Fungus3_archive": "Fog_Archives_Bench",
  "Fungus3_archive_02": "Fog_Uumuu_Arena",
  "Room_Fungus_Shaman": "Fog_Overgrown_Mound",
  "Cliffs_01": "Cliffs_Main",
  "Cliffs_02": "Cliffs_Gorb",
  "Cliffs_03": "Cliffs_Stag_Nest",
  "Cliffs_04": "Cliffs_Joni's_Dark",
  "Cliffs_05": "Cliffs_Joni's_Pickup",
  "Cliffs_06": "Cliffs_Grimm_Lantern",
  "Fungus1_28": "Cliffs_Baldur's_Shell",
  "Room_nailmaster": "Cliffs_Mato",
  "Mines_01": "Crystal_Dive_Entrance",
  "Mines_02": "Crystal_Dark_Entrance",
  "Mines_03": "Crystal_Spike_Grub",
  "Mines_04": "Crystal_Entrance_Conveyors",
  "Mines_05": "Crystal_Above_Spike_Grub",
  "Mines_06": "Crystal_Deep_Focus_Gauntlet",
  "Mines_07": "Crystal_Dark_Room",
  "Mines_10": "Crystal_Elevator_Entrance",
  "Mines_11": "Crystal_Left_Of_Guardian",
  "Mines_13": "Crystal_Top_Corridor",
  "Mines_16": "Crystal_Mimic",
  "Mines_17": "Crystal_Corridor_to_Spike_Grub",
  "Mines_18": "Crystal_Guardian_Bench",
  "Mines_19": "Crystal_Grub_Crushers",
  "Mines_20": "Crystal_East_Tall",
  "Mines_23": "Crystal_Crown_Whispering_Root",
  "Mines_24": "Crystal_Crown_Grub",
  "Mines_25": "Crystal_Crown_Climb",
  "Mines_28": "Crystal_Outside_Mound",
  "Mines_29": "Crystal_Dark_Bench",
  "Mines_30": "Crystal_Cornifer",
  "Mines_31": "Crystal_Crystal_Heart_Gauntlet",
  "Mines_32": "Crystal_Enraged_Guardian_Arena",
  "Mines_33": "Crossroads_Peak_Dark_Toll",
  "Mines_34": "Crystal_Crown_Peak",
  "Mines_35": "Crystal_Mound",
  "Mines_36": "Crystal_Deep_Focus",
  "Mines_37": "Crystal_Chest_Crushers",
  "Abyss_02": "Basin_Broken_Bridge",
  "Abyss_03": "Basin_Tram",
  "Abyss_04": "Basin_Fountain",
  "Abyss_05": "Basin_Palace_Grounds",
  "Abyss_17": "Basin_Cloth",
  "Abyss_18": "Basin_Corridor_to_Broken_Vessel",
  "Abyss_19": "Basin_Broken_Vessel_Grub",
  "Abyss_20": "Basin_Simple_Key",
  "Abyss_21": "Basin_Monarch_Wings",
  "Abyss_22": "Basin_Hidden_Station",
  "Abyss_06_Core": "Abyss_Core",
  "Abyss_08": "Abyss_Lifeblood_Core",
  "Abyss_09": "Abyss_Lighthouse_Climb",
  "Abyss_10": "Abyss_Shade_Cloak",
  "Abyss_12": "Abyss_Shriek",
  "Abyss_15": "Abyss_Birthplace",
  "Abyss_16": "Abyss_Corridor_to_Lighthouse",
  "Abyss_Lighthouse_room": "Abyss_Lighthouse",
  "Crossroads_46b": "Grounds_Tram",
  "Crossroads_50": "Grounds_Blue_Lake",
  "RestingGrounds_02": "Grounds_Xero",
  "RestingGrounds_04": "Grounds_Dream_Nail_Entrance",
  "RestingGrounds_05": "Grounds_Whispering_Root",
  "RestingGrounds_06": "Grounds_Corridor_Below_Xero",
  "RestingGrounds_07": "Grounds_Seer",
  "RestingGrounds_08": "Grounds_Spirit's_Glade",
  "RestingGrounds_09": "Grounds_Stag",
  "RestingGrounds_10": "Grounds_Crypts",
  "RestingGrounds_12": "Grounds_Outside_Grey_Mourner",
  "RestingGrounds_17": "Grounds_Dreamshield",
  "Room_Mansion": "Grounds_Grey_Mourner",
  "Ruins2_10": "Grounds_Elevator",
  "Abyss_03_c": "Edge_Tram",
  "Deepnest_East_01": "Edge_Left_Of_Hive",
  "Deepnest_East_02": "Edge_Above_Hive",
  "Deepnest_East_03": "Edge_Entrance",
  "Deepnest_East_04": "Edge_Bardoon",
  "Deepnest_East_06": "Edge_Outside_Oro",
  "Deepnest_East_07": "Edge_Whispering_Root",
  "Deepnest_East_08": "Edge_Great_Hopper_Idol",
  "Deepnest_East_09": "Edge_Corridor_Outside_Colosseum",
  "Deepnest_East_10": "Edge_Markoth_Arena",
  "Deepnest_East_11": "Edge_Below_Camp_Bench",
  "Deepnest_East_12": "Edge_Hornet_Sentinel_Corridor",
  "Deepnest_East_13": "Edge_Camp_Bench",
  "Deepnest_East_14": "Edge_Below_Oro",
  "Deepnest_East_14b": "Edge_Quick_Slash",
  "Deepnest_East_15": "Edge_Lifeblood",
  "Deepnest_East_16": "Edge_Oro_Scarecrow",
  "Deepnest_East_17": "Edge_420_Geo_Rock",
  "Deepnest_East_18": "Edge_Outside_Markoth",
  "Deepnest_East_Hornet": "Edge_Hornet_Sentinel_Arena",
  "GG_Lurker": "Edge_Pale_Lurker",
  "Room_Colosseum_01": "Edge_Colo_Entrance",
  "Room_Colosseum_02": "Edge_Colo_Bench",
  "Room_Colosseum_Bronze": "Edge_Colo_1_Arena",
  "Room_Colosseum_Gold": "Edge_Colo_3_Arena",
  "Room_Colosseum_Silver": "Edge_Colo_2_Arena",
  "Room_Colosseum_Spectate": "Edge_Colo_Spectate",
  "Room_nailmaster_03": "Edge_Oro",
  "Room_Wyrm": "Edge_Cast-Off_Shell",
  "Abyss_01": "City_Broken_Elevator",
  "Crossroads_49b": "City_Left_Elevator",
  "Room_nailsmith": "City_Nailsmith",
  "Ruins_Bathhouse": "City_Pleasure_House_Bench",
  "Ruins_Elevator": "City_Pleasure_House_Elevator",
  "Ruins_House_01": "City_Guarded_Grub",
  "Ruins_House_02": "City_Gorgeous_Husk",
  "Ruins_House_03": "City_Emilitia",
  "Ruins1_01": "City_Pilgrim's_Entrance",
  "Ruins1_02": "City_Quirrel_Bench",
  "Ruins1_03": "City_Rafters",
  "Ruins1_04": "City_Outside_Nailsmith",
  "Ruins1_05": "City_Grub_Above_Lemm",
  "Ruins1_05b": "City_Lemm",
  "Ruins1_05c": "City_Egg_Above_Lemm",
  "Ruins1_06": "City_Corridor_to_Storerooms",
  "Ruins1_09": "City_Soul_Twister_Arena",
  "Ruins1_17": "City_Whispering_Root",
  "Ruins1_18": "City_Corridor_to_Spire",
  "Ruins1_23": "City_Sanctum_Entrance",
  "Ruins1_24": "City_Soul_Master_Arena",
  "Ruins1_25": "City_Sanctum_East_Elevators",
  "Ruins1_27": "City_Hollow_Knight_Fountain",
  "Ruins1_28": "City_Storerooms",
  "Ruins1_29": "City_Storerooms_Stag",
  "Ruins1_30": "City_Sanctum_Spell_Twister",
  "Ruins1_31": "City_Toll_Bench",
  "Ruins1_31b": "City_Shade_Soul_Arena",
  "Ruins1_32": "City_Soul_Master_Rewards",
  "Ruins2_01": "City_Spire_Second_Floor",
  "Ruins2_01_b": "City_Spire_First_Floor",
  "Ruins2_03": "City_Spire_Fourth_Floor",
  "Ruins2_03b": "City_Spire_Third_Floor",
  "Ruins2_04": "City_Right_Hub",
  "Ruins2_05": "City_Above_King's",
  "Ruins2_06": "City_King's_Station",
  "Ruins2_07": "City_Grub_Below_King's",
  "Ruins2_08": "City_King's_Stag",
  "Ruins2_09": "City_King's_Vessel_Fragment",
  "Ruins2_10b": "City_Right_Elevator",
  "Ruins2_11": "City_Collector_Arena",
  "Ruins2_11_b": "City_Tower_of_Love",
  "Ruins2_Watcher_Room": "City_Lurien_Elevator",
  "Hive_01": "Hive_Entrance",
  "Hive_02": "Hive_Whispering_Root",
  "Hive_03": "Hive_Outside_Grub",
  "Hive_03_c": "Hive_Outside_Shortcut",
  "Hive_04": "Hive_Mask_Shard",
  "Hive_05": "Hive_Knight_Arena",
  "GG_Pipeway": "Waterways_Flukemunga_Corridor",
  "GG_Waterways": "Waterways_Junk_Pit",
  "Room_GG_Shortcut": "Waterways_Fluke_Hermit",
  "Waterways_01": "Waterways_Entrance",
  "Waterways_02": "Waterways_Main_Bench",
  "Waterways_03": "Waterways_Tuk",
  "Waterways_04": "Waterways_Hidden_Grub",
  "Waterways_04b": "Waterways_Mask_Shard",
  "Waterways_05": "Waterways_Dung_Defender_Arena",
  "Waterways_06": "Waterways_Corridor_to_Broken_Elevator",
  "Waterways_07": "Waterways_Left_Of_Isma's_Grove",
  "Waterways_08": "Waterways_Outside_Flukemarm",
  "Waterways_09": "Waterways_Cornifer",
  "Waterways_12": "Waterways_Flukemarm_Arena",
  "Waterways_13": "Waterways_Isma's_Grove",
  "Waterways_14": "Waterways_Edge_Acid_Corridor",
  "Waterways_15": "Waterways_Dung_Defender's_Cave",
  "Abyss_03_b": "Deepnest_Tram",
  "Deepnest_01b": "Deepnest_Upper_Cornifer",
  "Deepnest_02": "Deepnest_Outside_Mimics",
  "Deepnest_03": "Deepnest_Left_Of_Hot_Spring",
  "Deepnest_09": "Deepnest_Distant_Village_Stag",
  "Deepnest_10": "Deepnest_Distant_Village",
  "Deepnest_14": "Deepnest_Failed_Tramway_Bench",
  "Deepnest_16": "Deepnest_After_Lower_Cornifer",
  "Deepnest_17": "Deepnest_Garpede_Corridor_Below_Cornifer",
  "Deepnest_26": "Deepnest_Failed_Tramway_Lifeblood",
  "Deepnest_26b": "Deepnest_Tram_Pass",
  "Deepnest_30": "Deepnest_Hot_Spring",
  "Deepnest_31": "Deepnest_Nosk_Corridor",
  "Deepnest_32": "Deepnest_Nosk_Arena",
  "Deepnest_33": "Deepnest_Zote_Arena",
  "Deepnest_34": "Deepnest_First_Devout",
  "Deepnest_35": "Deepnest_Outside_Galien",
  "Deepnest_36": "Deepnest_Mimics",
  "Deepnest_37": "Deepnest_Corridor_to_Tram",
  "Deepnest_38": "Deepnest_Vessel_Fragment",
  "Deepnest_39": "Deepnest_Whispering_Root",
  "Deepnest_40": "Deepnest_Galien_Arena",
  "Deepnest_41": "Deepnest_Midwife",
  "Deepnest_42": "Deepnest_Outside_Mask_Maker",
  "Deepnest_44": "Deepnest_Sharp_Shadow",
  "Deepnest_45_v02": "Deepnest_Weaver's_Den",
  "Deepnest_Spider_Town": "Deepnest_Beast's_Den",
  "Fungus2_25": "Deepnest_Lower_Cornifer",
  "Room_Mask_Maker": "Deepnest_Mask_Maker",
  "Room_spider_small": "Deepnest_Brumm",
  "Deepnest_43": "Gardens_Corridor_To_Deepnest",
  "Fungus1_23": "Gardens_First_Loodle_Corridor",
  "Fungus1_24": "Gardens_Cornifer",
  "Fungus3_04": "Gardens_Before_Petra_Arena",
  "Fungus3_05": "Gardens_Petra_Arena",
  "Fungus3_08": "Gardens_Lower_Petra_Corridor",
  "Fungus3_10": "Gardens_Main_Arena",
  "Fungus3_11": "Gardens_Whispering_Root",
  "Fungus3_13": "Gardens_Outside_Stag",
  "Fungus3_21": "Gardens_Corridor_to_Traitor_Lord",
  "Fungus3_22": "Gardens_Upper_Grub",
  "Fungus3_23": "Gardens_Traitor_Lord_Arena",
  "Fungus3_34": "Gardens_Entrance",
  "Fungus3_39": "Gardens_Moss_Prophet",
  "Fungus3_49": "Gardens_Traitor's_Child's_Grave",
  "Fungus3_40": "Gardens_Gardens_Stag",
  "Fungus3_48": "Gardens_Outside_White_Lady",
  "Fungus3_50": "Gardens_Toll_Bench",
  "Room_Queen": "Gardens_White_Lady",
  "White_Palace_01": "Palace_Entrance",
  "White_Palace_02": "Palace_First_Mold",
  "White_Palace_03_hub": "Palace_Hub",
  "White_Palace_04": "Palace_Left_Of_Hub",
  "White_Palace_05": "Palace_Saw_Room",
  "White_Palace_06": "Palace_Balcony",
  "White_Palace_07": "Palace_Lamp_Pogo",
  "White_Palace_08": "Palace_Workshop",
  "White_Palace_09": "Palace_Throne",
  "White_Palace_11": "Palace_Outside",
  "White_Palace_12": "Palace_Spike_Drop",
  "White_Palace_13": "Palace_Thorn_Jump",
  "White_Palace_14": "Palace_Hell_Corridor",
  "White_Palace_15": "Palace_Caged_Lever",
  "White_Palace_16": "Palace_Saw_Climb",
  "White_Palace_17": "POP_Lever",
  "White_Palace_18": "POP_Entrance",
  "White_Palace_19": "POP_Vertical",
  "White_Palace_20": "POP_Final",
  "Dream_Final_Boss": "Egg_Radiance",
  "Room_Final_Boss_Atrium": "Egg_Bench",
  "Room_Final_Boss_Core": "Egg_Hollow_Knight",
  "Grimm_Divine": "Grimm_Divine",
  "Grimm_Main_Tent": "Grimm_Tent",
  "Grimm_Nightmare": "Grimm_NKG",
  "Dream_01_False_Knight": "Dream_Failed_Champion",
  "Dream_02_Mage_Lord": "Dream_Soul_Tyrant",
  "Dream_03_Infected_Knight": "Dream_Lost_Kin",
  "Dream_04_White_Defender": "Dream_White_Defender",
  "Dream_Abyss": "Dream_Abyss",
  "Dream_Backer_Shrine": "Dream_Outside_Shrine",
  "Dream_Guardian_Hegemol": "Dream_Herrah",
  "Dream_Guardian_Lurien": "Dream_Lurien",
  "Dream_Guardian_Monomon": "Dream_Monomon",
  "Dream_Mighty_Zote": "Dream_Grey_Prince_Zote",
  "Dream_Nailcollection": "Dream_Nail",
  "Dream_Room_Believer_Shrine": "Dream_Shrine_of_Believers",
  "GG_Atrium": "Godhome_Atrium",
  "GG_Atrium_Roof": "Godhome_Roof",
  "GG_Blue_Room": "Godhome_Lifeblood",
  "GG_Land_Of_Storms": "Godhome_Land_Of_Storms",
  "GG_Mighty_Zote": "GG_Enchanting_Vigorous_Diligent_Overwhelming_Gorgeous_Passionate_Terrifying_Beautiful_Zote",
  "GG_Unlock_Wastes": "Godhome_Godtuner",
  "GG_Workshop": "Godhome_Hall_Of_Gods"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MAP);

/***/ }),

/***/ "./src/js/hk-functions.js":
/*!********************************!*\
  !*** ./src/js/hk-functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectLength": () => /* binding */ ObjectLength,
/* harmony export */   "TranslateMapName": () => /* binding */ TranslateMapName
/* harmony export */ });
/* harmony import */ var _hk_dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hk-dictionary.js */ "./src/js/hk-dictionary.js");
/* ---------------- Load main Hollow Knight database files ----------------- */

/* -------------------------- Functions ----------------------------- */

/**
 * Checks the length of a JavaScript Object like Array.length
 * @param {object} object JavaScript Object
 * @return {number} length of the Object
 */

function ObjectLength(object) {
  var length = 0;

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      ++length;
    }
  }

  return length;
}
/**
 * Returns a translated map location name string.
 * @param {string} mapCode Code of the Hollow Knight map location the game developers use
 * @param {object} dictionary Main data source for translation
 */


function TranslateMapName(mapCode) {
  var dictionary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _hk_dictionary_js__WEBPACK_IMPORTED_MODULE_0__.default;
  var translation = mapCode;
  if (dictionary.hasOwnProperty(mapCode)) translation = dictionary[mapCode];
  return translation;
}
/* ------------------------- Exports ------------------------------- */




/***/ }),

/***/ "./src/js/page-functions.js":
/*!**********************************!*\
  !*** ./src/js/page-functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefillHTML": () => /* binding */ PrefillHTML,
/* harmony export */   "CompletionHTML": () => /* binding */ CompletionHTML,
/* harmony export */   "AppendHTML": () => /* binding */ AppendHTML,
/* harmony export */   "CheckboxHintsToggle": () => /* binding */ CheckboxHintsToggle,
/* harmony export */   "CheckboxSpoilersToggle": () => /* binding */ CheckboxSpoilersToggle,
/* harmony export */   "StorageAvailable": () => /* binding */ StorageAvailable
/* harmony export */ });
var ROOT = document.documentElement;
var SCROLL_BUTTON = document.querySelector(".scroll-up-button");

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
  var scrollTotal = root.scrollHeight - root.clientHeight;

  if (root.scrollTop / scrollTotal > ratio) {
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


function PrefillHTML(jsObj) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "generated";
  var domElement = document.getElementById(element);
  var sFillText = ""; // Clean "generated" div

  domElement.innerHTML = "";
  var id = "";
  var h2 = "";
  var h2id = "";
  var mp = ""; // max Percent

  var cl = ""; // class

  for (var i in jsObj) {
    id = jsObj[i].id;
    h2 = jsObj[i].h2;
    h2id = "h2-" + jsObj[i].id;
    mp = "<div class='percent-box'>".concat(i === "intro" ? 0 : jsObj[i].maxPercent, "%</div>");
    if (!jsObj[i].hasOwnProperty("maxPercent")) mp = "";
    sFillText += "\n            <div id=\"".concat(id, "\" ").concat(cl, ">\n                <h2 id='").concat(h2id, "'>").concat(h2).concat(mp, "</h2>\n            </div>\n        ");
  }

  domElement.innerHTML = sFillText;
}
/**
 * Replaces the h2 titles with a current percent/max percent values as read from the save file
 * @param {object} jsObj Object with HTML data to fill
 * @param {number} hkGameCompletion Total completion percentage in a save file
 */


function CompletionHTML(jsObj, hkGameCompletion) {
  var h2 = "";
  var h2id = "";
  var cl = "";
  var clGreen = "box-green";
  var clRed = "box-red";
  var cp = 0; // current Percent

  var mp = 0; // max Percent

  var fillText = "";

  for (var i in jsObj) {
    h2 = jsObj[i].h2;
    h2id = "h2-" + jsObj[i].id;
    jsObj[i].hasOwnProperty("percent") ? cp = jsObj[i].percent : cp = 0;
    if (i === "intro") cp = hkGameCompletion; // Don't use percent-box for Essentials, Achievements, Statistics

    if (!jsObj[i].hasOwnProperty("maxPercent")) {
      fillText = "";
    } // otherwise use percent-box with values cp/mp%
    else {
        mp = jsObj[i].maxPercent;

        if (i === "maskShards") {
          var perc = jsObj[i].percent;
          perc % 4 ? cp = Math.floor(perc / 4) : cp = perc / 4;
        } else if (i === "vesselFragments") {
          var _perc = jsObj[i].percent;
          _perc % 3 ? cp = Math.floor(_perc / 3) : cp = _perc / 3;
        } // switches the box to red when a section (h2) is 0


        if (cp === 0) {
          cl = " ".concat(clRed);
        } // switches the box to green when a section (h2) is completed
        else if (cp === mp) {
            cl = " ".concat(clGreen);
          } // default is blue (partially completed and starting value)
          else cl = ""; // needed for Game Status to show percentage properly (adds a slash for all boxes except the Game Status one)


        if (jsObj[i].hasOwnProperty("percent")) cp += "/";
        fillText = "<div class='percent-box".concat(cl, "'>").concat(i === "intro" ? cp : cp + jsObj[i].maxPercent, "%</div>");
      }

    document.getElementById(h2id).innerHTML = h2 + fillText;
  }
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


function CheckboxHintsToggle() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "none";
  var checkboxId = document.getElementById("checkbox-hints");

  switch (param) {
    case "hide":
      document.getElementById("hk-hints").classList.add("hidden");
      checkboxId.value = "hints-off";
      checkboxId.checked = false; // remember this choice for subsequent page visits and browser restarts

      if (StorageAvailable('localStorage')) {
        localStorage.setItem("hkCheckboxHints", "unchecked");
      }

      break;

    case "show":
      document.getElementById("hk-hints").classList.remove("hidden");
      checkboxId.value = "hints-on";
      checkboxId.checked = true; // remember this choice for subsequent page visits and browser restarts

      if (StorageAvailable('localStorage')) {
        localStorage.setItem("hkCheckboxHints", "checked");
      }

      break;

    default:
      // This runs when the checkbox is not checked
      if (checkboxId.checked === false) {
        document.getElementById("hk-hints").classList.add("hidden");
        checkboxId.value = "hints-off"; // remember this choice for subsequent page visits and browser restarts

        if (StorageAvailable('localStorage')) {
          localStorage.setItem("hkCheckboxHints", "unchecked");
        }
      } // This runs when the checkbox is checked
      else {
          document.getElementById("hk-hints").classList.remove("hidden");
          checkboxId.value = "hints-on"; // remember this choice for subsequent page visits and browser restarts

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


function CheckboxSpoilersToggle() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "none";
  var checkboxId = document.getElementById("checkbox-spoilers");
  var allClassElements = document.querySelectorAll(".spoiler-span");
  var length = allClassElements.length;

  switch (param) {
    case "hide":
      for (var i = 0; i < length; i++) {
        allClassElements[i].classList.add("hidden");
      }

      checkboxId.value = "spoilers-off";
      checkboxId.checked = false; // remember this choice for subsequent page visits and browser restarts

      if (StorageAvailable('localStorage')) {
        localStorage.setItem("hkCheckboxSpoilers", "unchecked");
      }

      break;

    case "show":
      for (var _i = 0; _i < length; _i++) {
        allClassElements[_i].classList.remove("hidden");
      }

      checkboxId.value = "spoilers-on";
      checkboxId.checked = true; // remember this choice for subsequent page visits and browser restarts

      if (StorageAvailable('localStorage')) {
        localStorage.setItem("hkCheckboxSpoilers", "checked");
      }

      break;

    default:
      // This runs when the checkbox is not checked
      if (checkboxId.checked === false) {
        for (var _i2 = 0; _i2 < length; _i2++) {
          allClassElements[_i2].classList.add("hidden");
        }

        checkboxId.value = "spoilers-off"; // remember this choice for subsequent page visits and browser restarts

        if (StorageAvailable('localStorage')) {
          localStorage.setItem("hkCheckboxSpoilers", "unchecked");
        }

        break;
      } // This runs when the checkbox is checked
      else {
          for (var _i3 = 0; _i3 < length; _i3++) {
            allClassElements[_i3].classList.remove("hidden");
          }

          checkboxId.value = "spoilers-on"; // remember this choice for subsequent page visits and browser restarts

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
    return e instanceof DOMException && ( // everything except Firefox
    e.code === 22 || // Firefox
    e.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' || // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}
/* ----------------------- Event Listeners -------------------------- */


document.addEventListener("scroll", function () {
  TogglePageScrollElement(
  /* the document element root (<html>) */
  ROOT,
  /* Which element to toggle visibility */
  SCROLL_BUTTON,
  /* How far the user has to scroll to show the element */
  0.1);
});
SCROLL_BUTTON.addEventListener("click", function () {
  ScrollToElement(ROOT);
}); // Checkboxes functions

document.getElementById("checkbox-hints").addEventListener("click", CheckboxHintsToggle, false);
document.getElementById("checkbox-spoilers").addEventListener("click", CheckboxSpoilersToggle, false);
/* ------------------------- Exports ------------------------------- */



/***/ }),

/***/ "./src/css/fontello.css":
/*!******************************!*\
  !*** ./src/css/fontello.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/simpleicon.css":
/*!********************************!*\
  !*** ./src/css/simpleicon.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/geo-shade.png":
/*!*******************************!*\
  !*** ./src/img/geo-shade.png ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/geo.png":
/*!*************************!*\
  !*** ./src/img/geo.png ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/health-mask-steel.png":
/*!***************************************!*\
  !*** ./src/img/health-mask-steel.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/health-mask.png":
/*!*********************************!*\
  !*** ./src/img/health-mask.png ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/notch-filled.png":
/*!**********************************!*\
  !*** ./src/img/notch-filled.png ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/notch-overcharmed.png":
/*!***************************************!*\
  !*** ./src/img/notch-overcharmed.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/notch.png":
/*!***************************!*\
  !*** ./src/img/notch.png ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAMAAABZAGpeAAABMlBMVEUAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCwwQERQQERQaHSEbHiMZHCAPEBMKCwwLDA4KCwwZHCASFBcAAAAGBgcLDA4NDhAPEBMQERQVFxoaHSEbHiMhJCojJy0mKjEnKzIpLTQrLzcuMzsvNDwvND0yN0A1OkQ2PEY3PUc4Pkg/RlFCSVVDSldGTVpHT1xIUF1KUl9LU2FOVmVRWWhRWmlSW2pUXWxYYXJdZ3in/4oOAAAAQHRSTlMABhQZHSMlKjFGS01PUFxdZWdoanBxd4OElJ2jra6wsbS1zM3Q1NfZ3uHq8vP09ff7/P3++v77+unMvczocHAx+yhOAgAAAZZJREFUeNrt1IOWI0EUxvGbWdvKzkpja6VvmGZVbFT0/q+wt7mq7uVRTn5xuv4t0dTEuHT/1erW9tbGwsNL9BvOPNmARwqBjbnL9Cu3VwEIyQTD5lNKN4sToKaGTNWE2Mf+3AylyAJwu6PQoFk2DONlJpOhBDchZWP0jSEXR7OJwbl1yMbwu4ALExeSguwhj/8+4CKXW0oIzu9Y5d7Ip1RNhY0SwHXS+miVwg1oCQCF1shXE3hOWu+tUi8YDwjBTStaxPIp0vlg1Xvh+JpSqoBCFGxcJJ09tz4MgoL32Tk46PgbLoGbpLMbBuGsx8WDYhTc/T/B3nG8SipYpTi4RTpvjPzId3zMB7BRAFrhRm/qL4y3htPxg/YxfOFeQtJu/WQYlVFQyGg8qwEvSOvza8PohOdQo9FojQICuEF673JS8sn3vY6ZePLR6RVw8cP4tNObrnLQ6H83Pu0CYlku6p1RRFXSL1H2CDm7Wm0qT00AOJyfoVR3VgHbFgyerWf0K2cfbyA2f4V+w8V7/q1ybfHBNZqaGF8AvGjIgXx3DDQAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/img/soul-orb.png":
/*!******************************!*\
  !*** ./src/img/soul-orb.png ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/img/thumbnail1200x628.jpg":
/*!***************************************!*\
  !*** ./src/img/thumbnail1200x628.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/thumbnail1200x628.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
// Handle cookies
// require("./cookies.js");
// CSS
// require("../css/cookieconsent.css");
__webpack_require__(/*! ../css/fontello.css */ "./src/css/fontello.css");

__webpack_require__(/*! ../css/simpleicon.css */ "./src/css/simpleicon.css");

__webpack_require__(/*! ../css/style.css */ "./src/css/style.css"); // required for meta tags (social) to be visible by Webpack


__webpack_require__(/*! ../img/thumbnail1200x628.jpg */ "./src/img/thumbnail1200x628.jpg");

__webpack_require__(/*! ./page-functions.js */ "./src/js/page-functions.js"); // Instantly load test save file from .json (fast Debugging script)
// require("./LoadJson.js");
// Main script for analyzing the decoded save file and generating the page on the fly
// require("./HKCheckCompletion.js");


__webpack_require__(/*! ./HKCheckCompletion.js */ "./src/js/HKCheckCompletion.js"); // Load Save File for opening files, decoding, decryption


__webpack_require__(/*! ./LoadSaveFile.js */ "./src/js/LoadSaveFile.js");
})();

/******/ })()
;
//# sourceMappingURL=app.js.map