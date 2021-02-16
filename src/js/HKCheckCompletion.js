/* eslint-disable no-prototype-builtins */

// ---------------- Load main Hollow Knight database file ----------------- //

import HK from "./hk-database.js";
import MAP from "./hk-dictionary.js";

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
// const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ "
const SYMBOL_EMPTY = "<span class='padding-left'></span>";
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";

// ---------------- Variables ----------------- //

// let currentData = DATA_UNKNOWN;
let completionSymbol = SYMBOL_FALSE;

let divStart = [
    "<div class='single-entry'>"
].join("\n");

let divStartCenter = [
    "<div class='flex-container align-center'>"
].join("\n");

let divEnd = [
    "</div>"
].join("\n");

let pSpan = "<span class='p-left-small'></span>";

let benchHKCCBegin, benchHKCCEnd;

// ---------------- Functions ----------------- //

/**
 * Main Function. Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */
function HKCheckCompletion(jsonObject) {

    // start benchmark
    benchHKCCBegin = new Date();

    let HKPlayerData;
    let HKWorldItems;
    let HKSceneData;

    if (jsonObject.hasOwnProperty("playerData")) {
        HKPlayerData = jsonObject.playerData;
    } else return false;

    if (jsonObject.hasOwnProperty("sceneData")) {
        HKSceneData = jsonObject.sceneData;
        if (jsonObject.sceneData.hasOwnProperty("persistentBoolItems")) {
            HKWorldItems = jsonObject.sceneData.persistentBoolItems;
        } else return false;
    } else return false;

    // Pre-Cleaning and filling initial data (h2, id) needed for FillHTML()
    PrefillHTML(HK.DIV_ID);

    // Prevents adding current percent data after each function call (each click of Analyze button)
    ResetCompletion(HK.DIV_ID);

    // ================================================================================== //

    // ---------------- Time Played ----------------- //

    CheckPlayTime(HK.DIV_ID.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(HK.DIV_ID.intro, HKPlayerData.completionPercentage);

    // ---------------- Game Completion Status ----------------- //

    CheckSaveFileVersion(HK.DIV_ID.intro, HKPlayerData.version);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(HK.DIV_ID.intro, FLEUR_DIVIDE);

    // ---------------- Health Masks ----------------- //

    CheckHealthMasks(HK.DIV_ID.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

    // ---------------- Soul Orbs ----------------- //

    CheckSoulOrbs(HK.DIV_ID.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

    // ---------------- Charm Notches (Slots) ----------------- //

    CheckNotches(HK.DIV_ID.intro, HKPlayerData.charmSlots, HKPlayerData.charmSlotsFilled);

    // ---------------- Geo Amount ----------------- //

    CheckGeo(HK.DIV_ID.intro, HKPlayerData.geo, HKPlayerData.geoPool);

    // ---------------- Bosses (Base Game) --------------------- //

    CheckIfDataTrue(HK.DIV_ID.bosses, HK.BOSSES, HKPlayerData);

    // ---------------- Gruz Mother and Mawlek (World Map) --------------------- //

    if (HKWorldItems) CheckWorldDataTrue(HK.DIV_ID.bosses, "Battle Scene", HK.BOSSES_WORLD, HKWorldItems);

    // ---------------- Charms --------------------- //

    CheckIfDataTrue(HK.DIV_ID.charms, HK.CHARMS, HKPlayerData);

    // ---------------- Colosseum of Fools --------------------- //

    CheckIfDataTrue(HK.DIV_ID.colosseum, HK.COLOSSEUM, HKPlayerData);

    // ---------------- Dreamers --------------------- //

    CheckIfDataTrue(HK.DIV_ID.dreamers, HK.DREAMERS, HKPlayerData);

    // ---------------- Dream Nail and Essence --------------------- //

    CheckIfDataTrue(HK.DIV_ID.dreamNail, HK.DREAMNAIL, HKPlayerData);

    // ---------------- Equipment --------------------- //

    CheckIfDataTrue(HK.DIV_ID.equipment, HK.EQUIPMENT, HKPlayerData);

    // ---------------- Nail Upgrades --------------------- //

    CheckNailUpgrades(HK.DIV_ID.nailUpgrades, HK.NAILUPGRADES, HKPlayerData);

    // ---------------- Mask Shards --------------------- //

    CheckIfDataTrue(HK.DIV_ID.maskShards, HK.MASKSHARDS, HKPlayerData);

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(HK.DIV_ID.maskShards, "Heart Piece", HK.MASKSHARDS_WORLD, HKWorldItems);

    // ---------------- Nail Arts --------------------- //

    CheckIfDataTrue(HK.DIV_ID.nailArts, HK.NAILARTS, HKPlayerData);

    // ---------------- Spells --------------------- //

    CheckSpellLevel(HK.DIV_ID.spells, HK.SPELLS, HKPlayerData);

    // ---------------- Vessel Fragments --------------------- //

    CheckIfDataTrue(HK.DIV_ID.vesselFragments, HK.VESSELFRAGMENTS, HKPlayerData);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(HK.DIV_ID.vesselFragments, "Vessel Fragment", HK.VESSELFRAGMENTS_WORLD, HKWorldItems);

    // ---------------- Warrior Dreams --------------------- //

    CheckWarriorDreams(HK.DIV_ID.warriorDreams, HK.WARRIORDREAMS, HKPlayerData);

    // ---------------- Grimm Troupe Content Pack --------------------- //

    CheckIfDataTrue(HK.DIV_ID.grimmTroupe, HK.GRIMMTROUPE, HKPlayerData);

    // ---------------- Lifeblood Content Pack --------------------- //

    CheckIfDataTrue(HK.DIV_ID.lifeblood, HK.LIFEBLOOD, HKPlayerData);

    // ---------------- Godmaster Content Pack --------------------- //

    CheckIfDataTrue(HK.DIV_ID.godmaster, HK.GODMASTER, HKPlayerData);

    CheckGodmasterDoors(HK.DIV_ID.godmaster, HK.GODMASTER_DOORS, HKPlayerData);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(HK.DIV_ID.godmaster, FLEUR_DIVIDE);

    // ------------------------- Essential Things ----------------------------- //

    CheckAdditionalThings(HK.DIV_ID.essential, HK.ESSENTIAL, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(HK.DIV_ID.essential, FLEUR_DIVIDE);

    // ------------------------- Achievements ----------------------------- //

    CheckAdditionalThings(HK.DIV_ID.achievements, HK.ACHIEVEMENTS, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(HK.DIV_ID.achievements, FLEUR_DIVIDE);

    // ------------------------- Game Statistics ----------------------------- //

    CheckAdditionalThings(HK.DIV_ID.statistics, HK.STATISTICS, HKPlayerData, HKWorldItems, HKSceneData);

    // ------------------------- Hints ----------------------------- //

    CheckHintsTrue(HK.DIV_ID.hints, HK.HINTS, HKPlayerData, HKWorldItems);

    // ------------------------- Fill completion ----------------------------- //

    CompletionHTML(HK.DIV_ID, HKPlayerData.completionPercentage);

    // Prevents wrong checkbox behaviour (must run after everything is finished)
    CheckboxHintsToggle();
    CheckboxSpoilersToggle();

    // finish and show benchmark
    benchHKCCEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", benchHKCCEnd - benchHKCCBegin);

    return true;
}

/**
 * Cleans "generated" and fills all HTML elements of ids from a given list. Creates only div with id, and h2 with title inside it.
 * @param {object} jsObj Object with HTML data to fill
 */
function PrefillHTML(jsObj) {
    // Clean "generated" div
    document.getElementById("generated").innerHTML = "";

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

        document.getElementById("generated").innerHTML += "<div id='" + id + "'" + cl + ">" + "</div>";
        // document.getElementById(id).innerHTML += "<h2 id='" + h2id + "'>" + h2 + mp + "</h2>";
        document.getElementById(id).innerHTML += `<h2 id='${h2id}'>${h2}${mp}</h2>`;
    }
}

/**
 * Replaces the h2 titles with a current percent/max percent values as read from the save file
 * @param {object} jsObj Object with HTML data to fill
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
            if (jsObj[i].hasOwnProperty("percent")) cp += "/";

            fillText = `<div class='percent-box${cl}'>${(i === "intro") ? cp: cp + jsObj[i].maxPercent}%</div>`;
        }

        document.getElementById(h2id).innerHTML = h2 + fillText;
    }
}

/**
 * Generates and appends a new entry inside the HTML of a given ID
 * @param {object} divId object containing div ID and h2 title of the HTML element
 * @param {string} textPrefix Main name of the entry
 * @param {string} textSuffix Optional suffix after the main name (spoilers: locations, costs etc.)
 */
function FillHTML(divId, textPrefix = "Unknown Completion Element: ", textSuffix = "Unknown Description Element") {

    let icon = completionSymbol;
    let b = ["<b>", "</b>"];
    if (!textPrefix.length) b = ["", ""];

    let span = ["<span class='spoiler-span'>", "</span>"];
    let spoilerSpan = ["<span class='spoiler-text'>", "</span>"];
    if (divId === HK.DIV_ID.hints) {
        span[0] = "<span>";
        icon = "";
    }

    let dash = "";
    if (textSuffix.length && textPrefix.length) dash = "— ";

    document.getElementById(divId.id).innerHTML += divStart + icon + b[0] + textPrefix + b[1] + span[0] + pSpan + spoilerSpan[0] + dash + textSuffix + spoilerSpan[1] + span[1] + divEnd;
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
 * Switches global variable to a "completed" symbol. Adds +1 or +2 to percent property.
 */
function CurrentDataTrue(divId = "") {
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

    let icon = "<i class='icon-clock'></i>";
    let seconds = Math.floor(playTime);
    let minutes = Math.floor((seconds / 60) % 60);
    let hours = Math.floor(seconds / 3600);
    let sec = Math.floor(seconds % 60);

    if (sec < 10) sec = "0" + sec;
    if (minutes < 10) minutes = "0" + minutes;

    let textFill = "Time Played:" + pSpan + "<b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + divEnd;
}

/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} completionPercentage Number of completion percentage
 */
function CheckCompletionPercent(divId, completionPercentage) {

    (completionPercentage >= 112) ? CurrentDataTrue(): CurrentDataFalse();

    let textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + divId.maxPercent + " %)";
    document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Reads the "version" string from the save file and appends it to the selected div ID element
 * @param {object} divId ID of the HTML element for data appending
 * @param {string} saveVersion Save File version in format 0.0.0.0
 */
function CheckSaveFileVersion(divId, saveVersion = HK.DIV_ID.intro.saveVersion) {

    CurrentDataBlank();
    let textFill = `Save Version:${pSpan}<b>${saveVersion}</b>${pSpan}`;
    document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Fills HTML with appropriate number of health mask images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} masks Number of max health masks from the save (baseline without charms and lifeblood)
 * @param {number} permadeathMode Value of permadeathMode property. 0 = Normal, 1 = Steel Soul, 2 = Steel Soul broken save
 */
function CheckHealthMasks(divId, masks = 5, permadeathMode = 0) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Health:</span>";
    let maskImages = "";
    let maskNormal = `<img src='${HEALTH_MASK_IMAGE}' class='health-mask' alt='health mask image' title='Health Mask'>`;
    let maskSteel = `<img src='${HEALTH_MASK_STEEL_IMAGE}' class='health-mask' alt='steel health mask image' title='Steel Health Mask'>`;
    let maskImg = "";

    (permadeathMode > 0) ? maskImg = maskSteel: maskImg = maskNormal;

    for (let i = 0; i < masks; i++) {
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

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Soul:</span>";
    let soulImages = "";
    let soulNormal = `<img src='${SOUL_ORB_IMAGE}' class='soul-orb' alt='soul orb image' title='Single Soul Orb (one spell cast)'>`;
    let soulImg = soulNormal;

    for (let i = 0, total = totalSoul / 33; i < total; i++) {
        soulImages += soulImg;
    }

    document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + soulImages + divEnd;
}

/**
 * Fills HTML with the Geo value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} geoValue Number of total Geo value
 */
function CheckGeo(divId, geoValue = 0, geoPoolValue = 0) {

    let icon = SYMBOL_EMPTY;
    let textFill = `<span>Geo:</span><img src='${GEO_IMAGE}' class='geo-symbol' alt='geo symbol image' title='Geo'><b>${geoValue}</b>`;

    // Show Shade Geo value and image only if Shade has at least 1 Geo on it
    if (geoPoolValue > 0) textFill += `
    ${pSpan}+<img src='${GEO_SHADE_IMAGE}' class='geo-symbol' alt='shade geo symbol image' title='Shade Geo'><b>${geoPoolValue}</b>`;

    // Show also total Geo (Geo + Shade Geo) if player has at least 1 geo alongside the shade geo
    if (geoValue > 0 && geoPoolValue > 0) textFill += `${pSpan}=${pSpan}<b>${geoValue+geoPoolValue}</b>`;

    document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + divEnd;
}

/**
 * Fills HTML with appropriate number of notch images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} totalNotches Number of total Charm Notches the player has. 11 = max
 * @param {number} filledNotches Number of total used Charm Notches (including overcharmed notches). 15 = max
 */
function CheckNotches(divId, totalNotches = 3, filledNotches = 0) {

    let {
        overcharmedNotches,
        unusedNotches
    } = 0;

    // How many overcharmed notches images to show
    overcharmedNotches = filledNotches - totalNotches;
    if (overcharmedNotches < 1) overcharmedNotches = 0;

    // How many unused notches images to show
    unusedNotches = totalNotches - filledNotches;
    if (unusedNotches < 1) unusedNotches = 0;

    // Correct number of filled/used notches images to show when player is overcharmed
    if (filledNotches > totalNotches) filledNotches = totalNotches;

    let icon = SYMBOL_EMPTY;
    let textFill = `<span>Notches:</span>${pSpan}`;

    let notchImages = "";
    let notchNormalImage = `<img src='${NOTCH_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Free)'>`;
    let notchFilledImage = `<img src='${NOTCH_FILLED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Used)'>`;
    let notchOvercharmedImage = `<img src='${NOTCH_OVERCHARMED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Overcharmed)'>`;

    // First check filled (used) notches and fill them (skips if no filled notches)
    if (filledNotches > 0) {
        for (let i = 0; i < filledNotches; i++) {
            notchImages += notchFilledImage;
        }
    }

    // Second check overcharmed notches and fill them (skips if player is not overcharmed)
    if (overcharmedNotches > 0) {
        for (let i = 0; i < overcharmedNotches; i++) {
            notchImages += notchOvercharmedImage;
        }
    }

    // Lastly, fill all unused notches
    if (unusedNotches > 0) {
        for (let i = 0; i < unusedNotches; i++) {
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

    let {textPrefix, textSuffix} = "";

    for (let i in dataObject) {

        textPrefix = dataObject[i].name;
        textSuffix = dataObject[i].spoiler;

        switch (i) {
            case "gotCharm_36":
                // prevents green checkbox and adding 1% when only got one white fragment
                (playerData.gotQueenFragment === true && playerData.gotKingFragment === true) ? CurrentDataTrue(divId): CurrentDataFalse();
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
                    textPrefix = `<del>${textPrefix}</del>`;
                    textSuffix = `<del>${textSuffix}</del>`;
                    break;
                }
                if (i === "grimmChildLevel") {
                    (playerData.grimmChildLevel >= 4) ? CurrentDataTrue(divId): CurrentDataFalse();
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
                break;
            default:
                (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
        }

        FillHTML(divId, textPrefix, textSuffix);
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckSpellLevel(divId, dataObject, playerData) {

    for (let i in dataObject) {
        switch (i) {
            case "vengefulSpirit":
            case "shadeSoul":
                (playerData.fireballLevel >= dataObject[i].fireballLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                FillHTML(divId, dataObject[i].name, dataObject[i].spoiler);
                break;
            case "desolateDive":
            case "descendingDark":
                (playerData.quakeLevel >= dataObject[i].quakeLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                FillHTML(divId, dataObject[i].name, dataObject[i].spoiler);
                break;
            case "howlingWraiths":
            case "abyssShriek":
                (playerData.screamLevel >= dataObject[i].screamLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                FillHTML(divId, dataObject[i].name, dataObject[i].spoiler);
                break;
            default:
                break;
        }
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(divId, dataObject, playerData) {

    for (let i in dataObject) {
        (playerData[i] >= 2) ? CurrentDataTrue(divId): CurrentDataFalse();
        FillHTML(divId, dataObject[i].name, dataObject[i].spoiler);
    }
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
    let pantheon = ["Master", "Artist", "Sage", "Knight"].map((element) => "pantheon" + element);

    for (let i = 0; i < 4; i++) {
        // compatibility with earlier game versions
        if (playerData.hasOwnProperty("bossDoorStateTier" + (i + 1)) === false) {
            CurrentDataBlank();
            FillHTML(divId, `<del>${dataObject[pantheon[i]].name}</del>`, `<del>${dataObject[pantheon[i]].spoiler}</del>`);
        } else {
            (playerData["bossDoorStateTier" + (i + 1)].completed === true) ? CurrentDataTrue(divId): CurrentDataFalse();
            FillHTML(divId, dataObject[pantheon[i]].name, dataObject[pantheon[i]].spoiler);
        }
    }
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
    let nail = ["old", "sharpened", "channeled", "coiled", "pure"].map((element) => element + "Nail");

    for (let i = 0; i < 5; i++) {
        (playerData.nailSmithUpgrades >= i) ? CurrentDataTrue(divId): CurrentDataFalse();
        FillHTML(divId, dataObject[nail[i]].name, dataObject[nail[i]].spoiler);
    }
    if (divId.percent) divId.percent--; // subject one for the Old Nail
}

/**
 * Verifies if the data in a specific object are true or false, and appends HTML accordingly. Creates a copy of dataObject.
 * @param {object} divId ID of the HTML element for data appending
 * @param {string} idText Text string inside save data to search for
 * @param {object} dataObject Object containing data to be verified
 * @param {object} worldData Reference/pointer to specific data where to search
 */
function CheckWorldDataTrue(divId, idText, dataObject, worldData) {
    let orderedArray = [];
    let size = ObjectLength(dataObject);

    // Order the items before displaying them (creates a copy of dataObject)
    for (let i in dataObject) {
        orderedArray.push([i, dataObject[i].name, dataObject[i].spoiler, false]);
    }

    // Search for completed items and mark them for display
    for (let i = 0, length = worldData.length; i < length; i++) {
        for (let j = 0; j < size; j++) {
            if (worldData[i].id === idText && worldData[i].sceneName === orderedArray[j][0] && worldData[i].activated === true) {
                orderedArray[j][3] = true;
            }
        }
    }

    // Display the items as they were initially ordered
    for (let i = 0; i < size; i++) {
        CurrentDataFalse();
        if (orderedArray[i][3] === true) CurrentDataTrue(divId);
        FillHTML(divId, orderedArray[i][1], orderedArray[i][2]);
    }
}

/**
 * Verifies if the data in a specific object are true or false, or checks what values they have, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 * @param {object} worldData Reference/pointer to specific data where to search
 */
function CheckAdditionalThings(divId, dataObject, playerData, worldData, sceneData) {

    let textPrefix = "";
    let textSuffix = "";

    // Start main loop
    for (let i in dataObject) {
        textPrefix = dataObject[i].name;
        (dataObject[i].hasOwnProperty("spoiler")) ? textSuffix = dataObject[i].spoiler: textSuffix = "";

        let {
            amount,
            countTotal,
            total,
            unbroken,
            broken,
            discoveredTotal
        } = 0;

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
                    if (playerData.hasOwnProperty("greyPrinceDefeats") === false) {
                        CurrentDataBlank();
                        textPrefix = `<del>${dataObject[i].name}</del>`;
                        textSuffix = `<del>${textSuffix}</del>`;
                        break;
                    } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                        textPrefix = `<del>${textPrefix}</del>`;
                        textSuffix = `<del>${textSuffix}</del>`;
                    }
                }

                if (i === "whiteDefenderDefeats") {
                    // backwards compatibility with earlier game versions
                    if (playerData.hasOwnProperty("whiteDefenderDefeats") === false) {
                        CurrentDataBlank();
                        textPrefix = `<del>${dataObject[i].name}</del>`;
                        textSuffix = `<del>${textSuffix}</del>`;
                        break;
                    }
                }
                (amount >= dataObject[i].max) ? CurrentDataTrue(): CurrentDataBlank();
                break;
            case "geoPool":
            case "rancidEggs":
            case "jinnEggsSold":
            case "xunFlowerBrokeTimes":
                textPrefix += ": " + Math.abs(playerData[i]);
                (i === "geoPool" && playerData[i] > 0) ? CurrentDataBlank(): CurrentDataTrue();

                if (i === "jinnEggsSold") {
                    // fade out if not on Steel Soul
                    if (playerData.permadeathMode < 1) {
                        CurrentDataBlank();
                        textPrefix = `<del>${textPrefix}</del>`;
                        textSuffix = `<del>${textSuffix}</del>`;
                        break;
                    }
                }

                break;
            case "geoRocks":
                discoveredTotal = sceneData.geoRocks.length;

                unbroken = CountGeoRocks(discoveredTotal, "unbroken");
                broken = CountGeoRocks(discoveredTotal, "broken");

                textPrefix += `: ${unbroken} | ${broken} | ${discoveredTotal}`;
                CurrentDataTrue();
                break;
            case "shopkeeperKey":
                (playerData.hasSlykey === true || playerData.gaveSlykey === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "elegantKey":
                (playerData.hasWhiteKey === true || playerData.usedWhiteKey === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "loveKey":
                (playerData.hasLoveKey === true || playerData.openedLoveDoor === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "simpleKeyCityOfTears": // #2
                (FindWorldItem("Ruins1_17", "Shiny Item")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "simpleKeyAncientBasin": // #3
                (FindWorldItem("Abyss_20", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "gotLurkerKey":
            case "nightmareLanternLit":
            case "killedPaleLurker":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    textSuffix = `<del>${textSuffix}</del>`;
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreAncientBasin": // #1
                (FindWorldItem("Abyss_17", "Battle Scene Ore")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreSeer": // #2
                (playerData.dreamReward2 === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreCrystalPeak": // #3
                (FindWorldItem("Mines_34", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreDeepnest": // #4
                (FindWorldItem("Deepnest_32", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreGrubfather": // #5
                (FindWorldItem("Crossroads_38", "Shiny Item Ore")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreColosseum": // #6
                (FindWorldItem("Room_Colosseum_Silver", "Shiny Item")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "relicsWandererJournal":
            case "relicsHallownestSeal":
            case "relicsKingsIdol":
            case "relicsArcaneEgg":
                total = playerData[dataObject[i].nameHeld] + playerData[dataObject[i].nameSold];
                (total >= dataObject[i].max) ? CurrentDataTrue(): CurrentDataBlank();
                textPrefix += ": " + total;
                break;
            case "bossDoorStateTier5":
                if (playerData.hasOwnProperty("bossDoorStateTier5") === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    textSuffix = `<del>${textSuffix}</del>`;
                } else {
                    (playerData[i].completed === true) ? CurrentDataTrue(): CurrentDataFalse();
                }
                break;
            case "killsBindingSeal":
                (playerData[i] == 0) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "killedVoidIdol_1":
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
                if (playerData[i] === false && (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) CurrentDataTrue();
                break;
            case "killedVoidIdol_2":
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
                if (playerData[i] === false && playerData.killedVoidIdol_3 === true) CurrentDataTrue();
                break;
            case "greyPrinceDefeated":
                // compatibility with earlier game versions
                if (playerData.hasOwnProperty("greyPrinceDefeated") === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    textSuffix = `<del>${textSuffix}</del>`;
                    break;
                } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                    textPrefix = `<del>${textPrefix}</del>`;
                    textSuffix = `<del>${textSuffix}</del>`;
                }
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataBlank();
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
                CheckMrMushroomState(divId, dataObject[i], playerData[i]);
                break;
            default:
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
        } // end switch (i)

        if (i === "mrMushroomState") continue;
        FillHTML(divId, textPrefix, textSuffix);
    } // end for (let i in dataObject)

    // ==========================================
    // -------------- Methods ---------------- //

    /**
     * Searches for a given item in the in-game area and returns true when found and collected.
     * @param {string} itemArea Code of the in-game area on the map
     * @param {string} itemId Name of the item
     * @returns {boolean}
     */
    function FindWorldItem(itemArea = "", itemId = "Shiny Item") {
        for (let i = 0, length = worldData.length; i < length; i++) {
            if (worldData[i].id === itemId) {
                if (worldData[i].sceneName === itemArea) {
                    if (worldData[i].activated === true) return true;
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
    function CountWorldItem(itemId = "") {
        let total = 0;
        for (let i = 0, length = worldData.length; i < length; i++) {
            if (worldData[i].id === itemId) {
                if (worldData[i].activated === true) total++;
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
        let totalMaps = 0;
        for (let i = 0, len = mapArray.length; i < len; i++) {
            if (playerData[mapArray[i]] === true) totalMaps++
        }
        return totalMaps;
    }

    /**
     * Counts the total amount of Geo Rocks Unbroken or Broken. Logs to console all the Unbroken IDs and Map locations.
     * @param {number} arrayLength How many items the Geo Rocks array is currently storing (for iteration)
     * @param {string} mode Choose which Geo Rocks to count (broken or unbroken)
     */
    function CountGeoRocks(arrayLength, mode = "unbroken") {

        let countTotal = 0;
        let geoRocksLog = [];

        if (mode === "unbroken") {
            for (let i = 0; i < arrayLength; i++) {
                if (sceneData.geoRocks[i].hitsLeft > 0) {
                    countTotal++;
                    geoRocksLog.push(`#${countTotal} 🏔️ ${sceneData.geoRocks[i].id} 🗺️ ${TranslateMapName(sceneData.geoRocks[i].sceneName)} ⌨️ ${sceneData.geoRocks[i].sceneName}`);
                }
            }

            if (!countTotal) {
                console.log("%cAll Geo Rocks Broken!", "color: #16c60c; font-weight: 700;");
            } else {
                console.groupCollapsed(`%cUnbroken Geo Rocks (${countTotal}):`, "color: #16c60c; font-weight: 700;");

                for (let i = 0, length = geoRocksLog.length; i < length; i++) {
                    console.log(geoRocksLog[i]);
                }

                console.groupEnd();
            }
        } else {
            for (let i = 0; i < arrayLength; i++) {
                if (sceneData.geoRocks[i].hitsLeft === 0) countTotal++;
            }
        }

        return countTotal;
    }

    /**
     * Compares and logs all unrescued Grubs in a list: IDs and map locations
     */
    function LogMissingGrubs() {

        let rescuedGrubsSceneList = [];

        for (let i = 0, length = worldData.length; i < length; i++) {
            if (worldData[i].id.includes("Grub Bottle")) {
                if (worldData[i].activated === true) {
                    // There are 3 duplicates of the same map scene name from older game save files. Prevents adding duplicates
                    /* if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (1)") {
                        continue;
                    } else if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (2)") {
                        continue;
                    } else { */
                    rescuedGrubsSceneList.push(worldData[i].sceneName);
                    // }
                }
            }
        }

        // Filtering the reference database Grub list to include only the missing values
        let missingGrubsList = HK.GRUBS_LIST.filter(x => !rescuedGrubsSceneList.includes(x));
        let length = missingGrubsList.length;

        if (!length) {
            console.log("%cAll Grubs Rescued!", "color: #16c60c; font-weight: 700;");
        } else {
            console.groupCollapsed(`%cUnrescued Grubs (${length}):`, "color: #16c60c; font-weight: 700;");

            for (let i = 0; i < length; i++) {
                console.log(`#${HK.GRUBS_LIST.indexOf(missingGrubsList[i]) + 1} 🗺️ ${TranslateMapName(missingGrubsList[i])} ⌨️ ${missingGrubsList[i]}`);
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
function CheckMrMushroomState(divId, dataObject, mrMushroomState = 0) {

    if (mrMushroomState > 1) {
        for (let i = 1; i <= 7; i++) {
            (mrMushroomState > i) ? CurrentDataTrue(): CurrentDataFalse();
            FillHTML(divId, `${dataObject.name} #${i}`, dataObject["spoiler" + i]);
        }
    } else {
        CurrentDataFalse();
        for (let i = 1; i <= 7; i++) {
            FillHTML(divId, `${dataObject.name} #${i}`, dataObject["spoiler" + i]);
        }
    }
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

    if (playerData.killedHollowKnight === true) {
        // a text to show when player already finished their first playthrough (killed Hollow Knight first time)
        FillHTML(divId, "", "...a successful Knight who doesn't need hints anymore. The Knight explores the world of Hallownest patiently in constant search of its remaining secrets...");
        return true;
    }

    for (let i in dataObject) {
        if (playerData[i] === true) {
            continue;
        } else if (i === "fireballLevel") {
            if (playerData[i] >= 1) {
                continue;
            } else {
                FillHTML(divId, "", dataObject[i].spoiler);
                return false;
            }
        } else if (i === "Crossroads_04") {
            let GruzMotherDefeated = false;

            for (let k = 0, length = worldData.length; k < length; k++) {
                if (worldData[k].id === "Battle Scene" && worldData[k].sceneName === "Crossroads_04" && worldData[k].activated === true) {
                    GruzMotherDefeated = true;
                    break;
                }
            }
            if (GruzMotherDefeated) {
                continue; // next dataObject (i)
            } else {
                FillHTML(divId, "", dataObject[i].spoiler);
                return false;
            }
        } else if (i === "dungDefenderOrHornet2") {
            if (playerData.defeatedDungDefender === true) {
                continue;
            } else if (playerData.hornetOutskirtsDefeated === true) {
                continue;
            } else { // if no Dung Defender or Hornet 2
                FillHTML(divId, "", dataObject[i].spoiler);
                return false;
            }
        } else if (i === "ismaTearOrShadeCloak") {
            if (playerData.hasAcidArmour === true) {
                continue;
            } else if (playerData.hasKingsBrand === true) {
                if (playerData.hasShadowDash === true) {
                    continue;
                } else { // if Kings Brand but no Shade Cloak
                    FillHTML(divId, "", dataObject[i].spoiler);
                    return false;
                }
            } else { // if no Isma's Tear or Kings Brand
                FillHTML(divId, "", dataObject[i].spoiler);
                return false;
            }
        } else { // if anything from the hints list is not done
            FillHTML(divId, "", dataObject[i].spoiler);
            return false;
        }
    } // end: for (let i in dataObject)
} // function CheckHintsTrue()

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */
function HKReadTextArea(textAreaId = "") {

    // refresh and prepare document for filling with data from the save
    InitialHTMLPopulate(HK.DIV_ID);

    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {

        try {
            let jsonObject = JSON.parse(contents);
            // console.log(jsonObject);
            if (jsonObject.hasOwnProperty("playerData")) HKCheckCompletion(jsonObject);
            // console.log(jsonObject);
        } catch (error) {
            alert(`This seems like not a valid Hollow Knight save. ${error}`);
            console.info(`This seems like not a valid Hollow Knight save. ${error}`);
        }
    }
}

/**
 * Checks the length of a JavaScript Object like Array.length
 * @param {object} object JavaScript Object
 * @return {number} length of the Object
 */
function ObjectLength(object) {
    let length = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
}

/**
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} divIdObj JavaScript Object containing all HTML IDs to populate
 */
function InitialHTMLPopulate(divIdObj) {

    CurrentDataFalse();

    PrefillHTML(divIdObj);

    // Play Time
    CheckPlayTime(divIdObj.intro, 0)

    // Game Completion
    CheckCompletionPercent(divIdObj.intro, 0);

    // Save File Version
    CheckSaveFileVersion(divIdObj.intro);

    // Fleur Divide
    AppendHTML(divIdObj.intro, FLEUR_DIVIDE);

    // Health Masks
    CheckHealthMasks(divIdObj.intro);

    // Soul Orbs
    CheckSoulOrbs(divIdObj.intro, 99);

    // Charm Notches
    CheckNotches(divIdObj.intro);

    // Geo
    CheckGeo(divIdObj.intro);

    // Keep symbol False
    CurrentDataFalse();

    // First Hint Only
    FillHTML(divIdObj.hints, "", HK.HINTS.fireballLevel.spoiler);

    // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)
    let hkObjArray = [HK.BOSSES, HK.BOSSES_WORLD, HK.CHARMS, HK.EQUIPMENT, HK.NAILARTS, HK.MASKSHARDS, HK.MASKSHARDS_WORLD, HK.VESSELFRAGMENTS, HK.VESSELFRAGMENTS_WORLD, HK.DREAMERS, HK.COLOSSEUM, HK.DREAMNAIL, HK.WARRIORDREAMS, HK.GRIMMTROUPE, HK.LIFEBLOOD, HK.GODMASTER, HK.ESSENTIAL, HK.ACHIEVEMENTS, HK.STATISTICS];

    // duplicates and order important - must be the same as in hkObjArray[]
    let divObjArray = [divIdObj.bosses, divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster, divIdObj.essential, divIdObj.achievements, divIdObj.statistics];

    // Looped filling to reduce redundancy
    do {
        for (let entry in hkObjArray[0]) {
            if (entry === "mrMushroomState") continue;
            FillHTML(divObjArray[0], hkObjArray[0][entry].name, hkObjArray[0][entry].spoiler);
        }
        divObjArray.shift();
    } while (hkObjArray.shift());

    // Nail Upgrades Misc
    for (let i in HK.NAILUPGRADES) {
        FillHTML(divIdObj.nailUpgrades, HK.NAILUPGRADES[i].name, HK.NAILUPGRADES[i].spoiler);
    }

    // Spells Misc
    for (let i in HK.SPELLS) {
        FillHTML(divIdObj.spells, HK.SPELLS[i].name, HK.SPELLS[i].spoiler);
    }

    // Godmaster Doors Misc
    for (let i in HK.GODMASTER_DOORS) {
        FillHTML(divIdObj.godmaster, HK.GODMASTER_DOORS[i].name, HK.GODMASTER_DOORS[i].spoiler);
    }

    // Mr Mushroom 1 - 7
    CheckMrMushroomState(divIdObj.achievements, HK.ACHIEVEMENTS.mrMushroomState);

    // Fleur Dividers
    AppendHTML(divIdObj.godmaster, FLEUR_DIVIDE);
    AppendHTML(divIdObj.essential, FLEUR_DIVIDE);
    AppendHTML(divIdObj.achievements, FLEUR_DIVIDE);

    // Check local storage first to set proper checkbox state before the below functions start (default is always unchecked)
    if (StorageAvailable('localStorage')) {
        if (localStorage.getItem("hkCheckboxHints") === "checked") document.getElementById("checkbox-hints").checked = true;
        if (localStorage.getItem("hkCheckboxSpoilers") === "checked") document.getElementById("checkbox-spoilers").checked = true;
    }

    // if (localStorage.getItem("hkCheckboxHints") === "checked") document.getElementById("checkbox-hints").checked = true;
    // if (localStorage.getItem("hkCheckboxSpoilers") === "checked") document.getElementById("checkbox-spoilers").checked = true;

    // Prevents wrong checkbox behaviour (must run after everything is finished)
    CheckboxHintsToggle();
    CheckboxSpoilersToggle();
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
 * Zero-fill all "percent" properties in the JSON Object (reset to default)
 * @param {object} jsObj object containing the "percent" properties to be reset to 0
 */
function ResetCompletion(jsObj) {

    for (let i in jsObj) {
        if (jsObj[i].hasOwnProperty("percent")) jsObj[i].percent = 0;
    }
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
 * Returns a translated map location name string.
 * @param {string} mapCode Code of the Hollow Knight map location the game developers use
 * @param {object} dictionary Main data source for translation
 */
function TranslateMapName(mapCode, dictionary = MAP) {

    let translation = mapCode;
    if (dictionary.hasOwnProperty(mapCode)) translation = dictionary[mapCode];

    return translation;
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

// Make functions global so they can be used on click and change events (for Webpack)
// window.InitialHTMLPopulate = InitialHTMLPopulate;

// Populate HTML at load (before img and css)
document.addEventListener("DOMContentLoaded", () => {
    InitialHTMLPopulate(HK.DIV_ID);
});

// Does an action when the save file location input text is clicked once (auto select & copy to clipboard)
document.getElementById("save-location-input").addEventListener("click", (e) => {
    SelectCopyInputText(e, "save-location-input-tooltip", "Copied save file location to clipboard");
}, false);

// Choose File input field
document.getElementById("save-location-input").addEventListener("mouseout", () => {
    FillInnerHTML("save-location-input-tooltip", "Click once to copy to clipboard");
}, false);

// Analyze Text button
document.getElementById("save-area-read").addEventListener("click", () => {
    HKReadTextArea("save-area");
}, false);

// Checkboxes functions
document.getElementById("checkbox-hints").addEventListener("click", CheckboxHintsToggle, false);
document.getElementById("checkbox-spoilers").addEventListener("click", CheckboxSpoilersToggle, false);

export {
    // to use in LoadSaveFile.js for auto-analyzing file after decoding
    HKReadTextArea
};