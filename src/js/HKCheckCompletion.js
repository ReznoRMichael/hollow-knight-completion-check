/* eslint-disable no-prototype-builtins */

/* ---------------- Load main Hollow Knight database files ----------------- */

import HK from "./hk-database.js";

/* ----------------- Helper functions --------------------------------------- */

import {
    PrefillHTML,
    CompletionHTML,
    GenerateInnerHTML,
    AppendHTML,
    CheckboxHintsToggle,
    CheckboxSpoilersToggle,
    StorageAvailable
} from "./page-functions.js";

import {
    ObjectLength,
    TranslateMapName
} from "./hk-functions.js";

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
const SYMBOL_CLOCK = "<i class='icon-clock'></i>"; // "🕑 "
const SYMBOL_EMPTY = "<span class='padding-left'></span>";
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";
const WIKI_LINK = "https://hollowknight.fandom.com/wiki/";

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

/* -------------------------- Functions ----------------------------- */

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

    // Pre-Cleaning and filling initial data (h2, id) needed for PrepareHTMLString()
    // PrefillHTML(HK.SECTION);

    // Prevents adding current percent data after each function call (each click of Analyze button)
    ResetCompletion(HK.SECTION);

    // ================================================================================== //

    // ---------------- Time Played ----------------- //

    CheckPlayTime(HK.SECTION.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(HK.SECTION.intro, HKPlayerData.completionPercentage);

    // ---------------- Game Completion Status ----------------- //

    CheckSaveFileVersion(HK.SECTION.intro, HKPlayerData.version);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.SECTION.intro, FLEUR_DIVIDE);

    // ---------------- Health Masks ----------------- //

    CheckHealthMasks(HK.SECTION.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

    // ---------------- Soul Orbs ----------------- //

    CheckSoulOrbs(HK.SECTION.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

    // ---------------- Charm Notches (Slots) ----------------- //

    CheckNotches(HK.SECTION.intro, HKPlayerData.charmSlots, HKPlayerData.charmSlotsFilled);

    // ---------------- Geo Amount ----------------- //

    CheckGeo(HK.SECTION.intro, HKPlayerData.geo, HKPlayerData.geoPool);

    // ---------------- Bosses (Base Game) --------------------- //

    CheckIfDataTrue(HK.SECTION.bosses, HK.SECTION.bosses.entries, HKPlayerData, HKWorldItems);

    // ---------------- Charms --------------------- //

    CheckIfDataTrue(HK.SECTION.charms, HK.SECTION.charms.entries, HKPlayerData);

    // ---------------- Colosseum of Fools --------------------- //

    CheckIfDataTrue(HK.SECTION.colosseum, HK.SECTION.colosseum.entries, HKPlayerData);

    // ---------------- Dreamers --------------------- //

    CheckIfDataTrue(HK.SECTION.dreamers, HK.SECTION.dreamers.entries, HKPlayerData);

    // ---------------- Dream Nail and Essence --------------------- //

    CheckIfDataTrue(HK.SECTION.dreamNail, HK.SECTION.dreamNail.entries, HKPlayerData);

    // ---------------- Equipment --------------------- //

    CheckIfDataTrue(HK.SECTION.equipment, HK.SECTION.equipment.entries, HKPlayerData);

    // ---------------- Nail Upgrades --------------------- //

    CheckNailUpgrades(HK.SECTION.nailUpgrades, HK.SECTION.nailUpgrades.entries, HKPlayerData);

    // ---------------- Mask Shards --------------------- //

    CheckIfDataTrue(HK.SECTION.maskShards, HK.SECTION.maskShards.entries, HKPlayerData, HKWorldItems);

    // ---------------- Nail Arts --------------------- //

    CheckIfDataTrue(HK.SECTION.nailArts, HK.SECTION.nailArts.entries, HKPlayerData);

    // ---------------- Spells --------------------- //

    CheckSpellLevel(HK.SECTION.spells, HK.SECTION.spells.entries, HKPlayerData);

    // ---------------- Vessel Fragments --------------------- //

    CheckIfDataTrue(HK.SECTION.vesselFragments, HK.SECTION.vesselFragments.entries, HKPlayerData, HKWorldItems);

    // ---------------- Warrior Dreams --------------------- //

    CheckWarriorDreams(HK.SECTION.warriorDreams, HK.SECTION.warriorDreams.entries, HKPlayerData);

    // ---------------- Grimm Troupe Content Pack --------------------- //

    CheckIfDataTrue(HK.SECTION.grimmTroupe, HK.SECTION.grimmTroupe.entries, HKPlayerData);

    // ---------------- Lifeblood Content Pack --------------------- //

    CheckIfDataTrue(HK.SECTION.lifeblood, HK.SECTION.lifeblood.entries, HKPlayerData);

    // ---------------- Godmaster Content Pack --------------------- //

    CheckIfDataTrue(HK.SECTION.godmaster, HK.SECTION.godmaster.entries, HKPlayerData);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.SECTION.godmaster, FLEUR_DIVIDE);

    // ------------------------- Essential Things ----------------------------- //

    CheckAdditionalThings(HK.SECTION.essential, HK.SECTION.essential.entries, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.SECTION.essential, FLEUR_DIVIDE);

    // ------------------------- Achievements ----------------------------- //

    CheckAdditionalThings(HK.SECTION.achievements, HK.SECTION.achievements.entries, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.SECTION.achievements, FLEUR_DIVIDE);

    // ------------------------- Game Statistics ----------------------------- //

    CheckAdditionalThings(HK.SECTION.statistics, HK.SECTION.statistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

    // ------------------------- Godhome Statistics ----------------------------- //

    CheckAdditionalThings(HK.SECTION.godhomeStatistics, HK.SECTION.godhomeStatistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

    // ------------------------- Hints ----------------------------- //

    CheckHintsTrue(HK.SECTION.hints, HK.SECTION.hints.entries, HKPlayerData, HKWorldItems);

    // ------------------------- Fill completion ----------------------------- //

    CompletionHTML(HK.SECTION, HKPlayerData.completionPercentage);

    GenerateInnerHTML(HK.SECTION);

    // Prevents wrong checkbox behaviour (must run after everything is finished)
    CheckboxHintsToggle();
    CheckboxSpoilersToggle();

    // finish and show benchmark
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
function PrepareHTMLString(divId, textPrefix = "Unknown Completion Element: ", textSuffix = "Unknown Description Element", wiki = "") {

    let icon = completionSymbol;
    let b = ["<b>", "</b>"];
    if (!textPrefix.length) b = ["", ""];
    if (wiki.length) b = [`<a class="wiki" href="${WIKI_LINK}${wiki}" target="_blank">`, "</a>"];

    let span = ["<span class='spoiler-span'>", "</span>"];
    let spoilerSpan = ["<span class='spoiler-text'>", "</span>"];
    if (divId.id === "hk-hints") {
        span[0] = "<span>";
        icon = "";
    }

    // let dash = "";
    if (textSuffix.length && textPrefix.length) textSuffix = "— " + textSuffix;
    if (textPrefix.includes("<del>")) textSuffix = `<del>${textSuffix}</del>`;

    // return divStart + icon + b[0] + textPrefix + b[1] + span[0] + pSpan + spoilerSpan[0] + dash + textSuffix + spoilerSpan[1] + span[1] + divEnd;
    return `
    ${divStart}
        ${icon}${b[0]}${textPrefix}${b[1]}${span[0]}${pSpan}${spoilerSpan[0]}${textSuffix}${spoilerSpan[1]}${span[1]}
    ${divEnd}
    `;
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
    
    let seconds = Math.floor(playTime);
    let minutes = Math.floor((seconds / 60) % 60);
    let hours = Math.floor(seconds / 3600);
    let sec = Math.floor(seconds % 60);

    divId.entries.timePlayed.timeH = hours;
    divId.entries.timePlayed.timeM = minutes;
    divId.entries.timePlayed.timeS = sec;

    if (sec < 10) sec = "0" + sec;
    if (minutes < 10) minutes = "0" + minutes;

    let textFill = "Time Played:" + pSpan + "<b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

    divId.entries.timePlayed.spoiler = hours + " h " + minutes + " min " + sec + " sec";

    // document.getElementById(divId.id).innerHTML += divStart + SYMBOL_CLOCK + textFill + divEnd;
}

/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} completionPercentage Number of completion percentage
 */
function CheckCompletionPercent(divId, completionPercentage) {

    (completionPercentage >= 112) ? CurrentDataTrue(): CurrentDataFalse();

    divId.percent = completionPercentage;

    let textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + divId.maxPercent + " %)";
    // document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Reads the "version" string from the save file and appends it to the selected div ID element
 * @param {object} divId ID of the HTML element for data appending
 * @param {string} saveVersion Save File version in format 0.0.0.0
 */
function CheckSaveFileVersion(divId, saveVersion = HK.SECTION.intro.entries.saveVersion.spoiler) {

    CurrentDataBlank();
    let textFill = `Save Version:${pSpan}<b>${saveVersion}</b>${pSpan}`;
    // document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
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

    // document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + maskImages + divEnd;
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

    // document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + soulImages + divEnd;
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

    // document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + divEnd;
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

    // document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + notchImages + divEnd;
}

/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search (playerData)
 * @param {Array} worldData Reference/pointer to specific data where to search (sceneData.persistentBoolItems)
 */
function CheckIfDataTrue(divId, dataObject, playerData, worldData = []) {

    let {
        textPrefix,
        textSuffix,
    } = "";
    let sFillText = "";
    let wiki = "";
    let checkText = "";

    for (let i in dataObject) {

        textPrefix = dataObject[i].name;
        textSuffix = dataObject[i].spoiler;
        (dataObject[i].hasOwnProperty("wiki")) ? wiki = dataObject[i].wiki: wiki = "";

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
                    break;
                }
                if (i === "grimmChildLevel") {
                    (playerData.grimmChildLevel >= 4) ? CurrentDataTrue(divId): CurrentDataFalse();
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
                break;
            
            case "bossGruzMother":
            case "bossBroodingMawlek":
            case "maskShardCrossroadsSprings":
            case "maskShardCrossroadsMawlek":
            case "maskShardGrubfather":
            case "maskShardBretta":
            case "maskShardQueensStation":
            case "maskShardWaterways":
            case "maskShardStoneSanctuary":
            case "maskShardCrystalPeak":
            case "maskShardDeepnest":
            case "maskShardHive":
            case "maskShardDelicateFlower":
            case "vesselFragmentGreenpath":
            case "vesselFragmentCrossroads":
            case "vesselFragmentCityOfTears":
            case "vesselFragmentDeepnest":
            case "vesselFragmentFountain":
                (WorldDataActivated(dataObject[i].id, dataObject[i].sceneName, worldData)) ? CurrentDataTrue(divId): CurrentDataFalse();
                break;
            
            case "pantheonMaster":
            case "pantheonArtist":
            case "pantheonSage":
            case "pantheonKnight":
                checkText = CheckGodmasterDoors(dataObject[i], playerData);
                if (checkText === "PropertyNotFound") {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    break;
                } else if (checkText === "PantheonCompleted") {
                    CurrentDataTrue(divId);
                    break;
                } else {
                    CurrentDataFalse();
                }
                break;
            
            default:
                (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
        }

        sFillText += PrepareHTMLString(divId, textPrefix, textSuffix, wiki);
    }

    // AppendHTML(divId, sFillText);
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckSpellLevel(divId, dataObject, playerData) {

    let sFillText = "";

    for (let i in dataObject) {
        switch (i) {
            case "vengefulSpirit":
            case "shadeSoul":
                (playerData.fireballLevel >= dataObject[i].fireballLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            case "desolateDive":
            case "descendingDark":
                (playerData.quakeLevel >= dataObject[i].quakeLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            case "howlingWraiths":
            case "abyssShriek":
                (playerData.screamLevel >= dataObject[i].screamLevel) ? CurrentDataTrue(divId): CurrentDataFalse();
                sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            default:
                break;
        }
    }

    // AppendHTML(divId, sFillText);
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(divId, dataObject, playerData) {

    let sFillText = "";

    for (let i in dataObject) {
        (playerData[i] >= 2) ? CurrentDataTrue(divId): CurrentDataFalse();
        sFillText += PrepareHTMLString(divId, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
    }

    // AppendHTML(divId, sFillText);
}

/**
 * Verifies if the Godmaster Pantheons 1-4 are completed by the player, and appends HTML accordingly.
 * @param {object} dataObject Object containing pantheon data to be verified (with property)
 * @param {object} playerData Reference/pointer to specific data where to search in the save file
 */
function CheckGodmasterDoors(dataObject, playerData) {

    if (playerData.hasOwnProperty(dataObject.property) === false) {
        return "PropertyNotFound";
    } else if (playerData[dataObject.property].completed === true) {
        return "PantheonCompleted";
    } else {
        return "PantheonNotCompleted";
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

    let sFillText = "";

    for (let i = 0; i < 5; i++) {
        (playerData.nailSmithUpgrades >= i) ? CurrentDataTrue(divId): CurrentDataFalse();
        sFillText += PrepareHTMLString(divId, dataObject[nail[i]].name, dataObject[nail[i]].spoiler, dataObject[nail[i]].wiki);
    }
    if (divId.percent) divId.percent--; // subject one for the Old Nail

    // AppendHTML(divId, sFillText);
}

/**
 * Verifies if the specific Interactable (Item, Boss, Chest etc.) is activated. Returns true or false.
 * @param {string} idText ID text of the Interactable (id in sceneData)
 * @param {string} sceneNameText Map codename of the Interactable (sceneName in sceneData)
 * @param {Array} worldData Array of Interactable data to search in (sceneData.persistentBoolItems)
 */
function WorldDataActivated(idText, sceneNameText, worldData) {

    // Search for the Interactable
    for (let i = 0, length = worldData.length; i < length; i++) {
        // Verify if the Interactable is activated and return the result
        if (worldData[i].id === idText && worldData[i].sceneName === sceneNameText && worldData[i].activated === true) {
            return true;
        }
    }
    // If not, return false
    return false;
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
    let sFillText = "";

    // Order the items before displaying them (creates a copy of dataObject)
    for (let i in dataObject) {
        orderedArray.push([i, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki, false]);
    }

    // Search for completed items and mark them for display
    for (let i = 0, length = worldData.length; i < length; i++) {
        for (let j = 0; j < size; j++) {
            if (worldData[i].id === idText && worldData[i].sceneName === orderedArray[j][0] && worldData[i].activated === true) {
                orderedArray[j][4] = true;
            }
        }
    }

    // Display the items as they were initially ordered
    for (let i = 0; i < size; i++) {
        CurrentDataFalse();
        if (orderedArray[i][4] === true) CurrentDataTrue(divId);
        sFillText += PrepareHTMLString(divId, orderedArray[i][1], orderedArray[i][2], orderedArray[i][3]);
    }

    // AppendHTML(divId, sFillText);
}

/**
 * Verifies if the data in a specific object are true or false, or checks what values they have, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search (playerData)
 * @param {object} worldData Reference/pointer to specific data where to search (sceneData.persistentBoolItems)
 * @param {object} sceneData Reference/pointer to specific data where to search (sceneData)
 */
function CheckAdditionalThings(divId, dataObject, playerData, worldData, sceneData) {

    let {
        textPrefix,
        textSuffix,
        wiki
    } = "";
    let sFillText = "";

    // Start main loop
    for (let i in dataObject) {
        textPrefix = dataObject[i].name;
        (dataObject[i].hasOwnProperty("spoiler")) ? textSuffix = dataObject[i].spoiler: textSuffix = "";
        (dataObject[i].hasOwnProperty("wiki")) ? wiki = dataObject[i].wiki: wiki = "";

        let {
            amount,
            countTotal,
            total,
            notActivated,
            activated,
            discoveredTotal
        } = 0;

        switch (i) {
            case "areaMaps":
            case "grubsCollected":
            case "grubRewards":
            case "charmsOwned":
            case "charmSlots":
            case "dreamOrbs":
            case "whisperingRoots":
            case "fountainGeo":
            case "nailDamage":
            case "stationsOpened":
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
                    countTotal = `${amount} / ${playerData.journalEntriesTotal}`;
                }

                if (i === "grubsCollected") {
                    LogMissingGrubs();
                }

                textPrefix += `: ${countTotal}`;

                if (i === "grubRewards") {
                    textPrefix += ` / ${playerData.grubsCollected}`;
                }

                if (i === "greyPrinceDefeats") {
                    // backwards compatibility with earlier game versions
                    if (playerData.hasOwnProperty(i) === false) {
                        CurrentDataBlank();
                        textPrefix = `<del>${dataObject[i].name}</del>`;
                        break;
                    } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                        textPrefix = `<del>${textPrefix}</del>`;
                    }
                }

                if (i === "whiteDefenderDefeats") {
                    // backwards compatibility with earlier game versions
                    if (playerData.hasOwnProperty(i) === false) {
                        CurrentDataBlank();
                        textPrefix = `<del>${dataObject[i].name}</del>`;
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
                        break;
                    }
                }

                break;

            case "geoRocks":
                discoveredTotal = sceneData.geoRocks.length;

                notActivated = CountGeoRocks(discoveredTotal, "unbroken");
                activated = CountGeoRocks(discoveredTotal, "broken");

                textPrefix += `: ${notActivated} | ${activated} | ${discoveredTotal}`;
                CurrentDataTrue();
                break;

            case "itemsDiscovered":
                discoveredTotal = sceneData.persistentBoolItems.length;

                notActivated = CountItems(discoveredTotal, "notActivated");
                activated = CountItems(discoveredTotal, "active");

                textPrefix += `: ${notActivated} | ${activated} | ${discoveredTotal}`;
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

            case "paleOreSeer": // #2
                (playerData.dreamReward3 === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;

                /* -------------------- Interactables ------------------------------- */
            case "simpleKeyCityOfTears": // #2
            case "simpleKeyAncientBasin": // #3
            case "paleOreAncientBasin": // #1
            case "paleOreCrystalPeak": // #3
            case "paleOreDeepnest": // #4
            case "paleOreGrubfather": // #5
            case "paleOreColosseum": // #6
            case "pantheonSoulWarrior":
            case "pantheonCrystalGuardian":
            case "pantheonEnragedGuardian":
            case "mantisVillageFloorLever":
            case "pathOfPainEntrance":
            case "whiteLadyRoom":
                (FindWorldItem(dataObject[i].id, dataObject[i].sceneName)) ? CurrentDataTrue(): CurrentDataFalse();
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
                } else {
                    (playerData[i].completed === true) ? CurrentDataTrue(): CurrentDataFalse();
                }
                break;

            case "killsBindingSeal":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    break;
                }
                (playerData[i] == 0) ? CurrentDataTrue(): CurrentDataFalse();
                break;

            case "killsBigBuzzer":
                (playerData[i] == 0) ? CurrentDataTrue(): CurrentDataFalse();
                break;

            case "killedVoidIdol_1":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
                if (playerData[i] === false && (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) CurrentDataTrue();
                break;

            case "killedVoidIdol_2":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
                if (playerData[i] === false && playerData.killedVoidIdol_3 === true) CurrentDataTrue();
                break;

            case "greyPrinceDefeated":
                // compatibility with earlier game versions
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${textPrefix}</del>`;
                    break;
                } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                    textPrefix = `<del>${textPrefix}</del>`;
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
                sFillText += CheckMrMushroomState(divId, dataObject[i], playerData[i]);
                break;
                
            default:
                // backwards compatibility with earlier game versions
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank();
                    textPrefix = `<del>${dataObject[i].name}</del>`;
                    break;
                }
                else if (playerData[i] === true) {
                    CurrentDataTrue();
                }
                else {
                    CurrentDataFalse();
                }
        } // end switch (i)

        if (i === "mrMushroomState") continue;
        sFillText += PrepareHTMLString(divId, textPrefix, textSuffix, wiki);
    } // end for (let i in dataObject)

    // AppendHTML(divId, sFillText);

    // ==========================================
    // -------------- Methods ---------------- //

    /**
     * Verifies if the specific Interactable (Item, Boss, Chest etc.) is activated (completed). Returns true or false.
     * @param {string} idText ID text of the Interactable (id in sceneData)
     * @param {string} sceneNameText Map codename of the Interactable (sceneName in sceneData)
     * @returns {boolean}
     */
    function FindWorldItem(idText = "", sceneNameText = "") {
        for (let i = 0, length = worldData.length; i < length; i++) {
            if (worldData[i].id === idText && worldData[i].sceneName === sceneNameText && worldData[i].activated === true) {
                return true;
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
     * Counts the amount of in-game Interactables Activated or Not Activated. Logs to console all the Not Activated IDs and Map locations.
     * @param {number} arrayLength How many items the Interactables array is currently storing (for iteration)
     * @param {string} mode Choose which Interactables to count (notActivated or activated)
     */
    function CountItems(arrayLength, mode = "notActivated") {

        let countTotal = 0;
        let itemsLog = [];

        if (mode === "notActivated") {
            for (let i = 0; i < arrayLength; i++) {
                if (worldData[i].activated === false &&
                    worldData[i].semiPersistent === false) {
                    countTotal++;
                    itemsLog.push(`#${countTotal} ${worldData[i].id} 🗺️ ${TranslateMapName(worldData[i].sceneName)} ⌨️ ${worldData[i].sceneName}`);
                }
            }

            if (!countTotal) {
                console.log("%cAll Interactables Activated!", "color: #16c60c; font-weight: 700;");
            } else {
                console.groupCollapsed(`%cNot Activated Interactables (${countTotal}):`, "color: #16c60c; font-weight: 700;");

                for (let i = 0, length = itemsLog.length; i < length; i++) {
                    console.log(itemsLog[i]);
                }

                console.groupEnd();
            }
        } else {
            for (let i = 0; i < arrayLength; i++) {
                if (worldData[i].activated === true) countTotal++;
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
        let missingGrubsList = divId.grubsList.filter(x => !rescuedGrubsSceneList.includes(x));
        let length = missingGrubsList.length;

        if (!length) {
            console.log("%cAll Grubs Rescued!", "color: #16c60c; font-weight: 700;");
        } else {
            console.groupCollapsed(`%cUnrescued Grubs (${length}):`, "color: #16c60c; font-weight: 700;");

            for (let i = 0; i < length; i++) {
                console.log(`#${divId.grubsList.indexOf(missingGrubsList[i]) + 1} 🗺️ ${TranslateMapName(missingGrubsList[i])} ⌨️ ${missingGrubsList[i]}`);
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

    let sFillText = "";

    if (mrMushroomState > 1) {
        for (let i = 1; i <= 7; i++) {
            (mrMushroomState > i) ? CurrentDataTrue(): CurrentDataFalse();
            sFillText += PrepareHTMLString(divId, `${dataObject.name} #${i}`, dataObject["spoiler" + i], dataObject.wiki);
        }
    } else {
        CurrentDataFalse();
        for (let i = 1; i <= 7; i++) {
            sFillText += PrepareHTMLString(divId, `${dataObject.name} #${i}`, dataObject["spoiler" + i], dataObject.wiki);
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

    let sFillText = "";

    if (playerData.killedHollowKnight === true) {
        // a text to show when player already finished their first playthrough (killed Hollow Knight first time)
        /* AppendHTML(divId, "...a successful Knight who doesn't need hints anymore. The Knight explores the world of Hallownest patiently in constant search of its remaining secrets..."); */
        return true;
    }

    for (let i in dataObject) {
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
                sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
                break;
            }
        } else if (i === "dungDefenderOrHornet2") {
            if (playerData.defeatedDungDefender === true) {
                continue;
            } else if (playerData.hornetOutskirtsDefeated === true) {
                continue;
            } else { // if no Dung Defender or Hornet 2
                sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
                break;
            }
        } else if (i === "ismaTearOrShadeCloak") {
            if (playerData.hasAcidArmour === true) {
                continue;
            } else if (playerData.hasKingsBrand === true) {
                if (playerData.hasShadowDash === true) {
                    continue;
                } else { // if Kings Brand but no Shade Cloak
                    sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
                    break;
                }
            } else { // if no Isma's Tear or Kings Brand
                sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
                break;
            }
        } else { // if anything from the hints list is not done
            sFillText += PrepareHTMLString(divId, "", dataObject[i].spoiler);
            break;
        }
    } // end: for (let i in dataObject)

    // AppendHTML(divId, sFillText);
} // function CheckHintsTrue()

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */
function HKReadTextArea(textAreaId = "") {

    // refresh and prepare document for filling with data from the save
    InitialHTMLPopulate(HK.SECTION);

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
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} sections JavaScript Object containing all HTML IDs to populate
 */
function InitialHTMLPopulate(sections) {

    let sFillText = "";

    CurrentDataFalse();

    GenerateInnerHTML(sections);

    // PrefillHTML(sections);
/* 
    // Play Time
    CheckPlayTime(sections.intro, 0)

    // Game Completion
    CheckCompletionPercent(sections.intro, 0);

    // Save File Version
    CheckSaveFileVersion(sections.intro);

    // Fleur Divide
    // AppendHTML(sections.intro, FLEUR_DIVIDE);

    // Health Masks
    CheckHealthMasks(sections.intro);

    // Soul Orbs
    CheckSoulOrbs(sections.intro, 99);

    // Charm Notches
    CheckNotches(sections.intro);

    // Geo
    CheckGeo(sections.intro);

    // Keep symbol False
    CurrentDataFalse();
 */
    // First Hint Only
    // AppendHTML(sections.hints, sections.hints.entries.fireballLevel.spoiler);

    /* let entries = {};

    for (let section in sections) {

        entries = sections[section].entries;

        switch(section) {

            case "intro":
            case "hints":
                break;
                
            default:

                for (let entry in entries) {

                    sFillText += PrepareHTMLString(sections[section], entries[entry].name, entries[entry].spoiler, entries[entry].wiki);
                }
        
                // AppendHTML(sections[section], sFillText);
        }

        sFillText = "";
    } */

    /*

    // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)
    let hkObjArray = [HK.BOSSES, HK.CHARMS, HK.EQUIPMENT, HK.NAILARTS, HK.MASKSHARDS, HK.MASKSHARDS_WORLD, HK.VESSELFRAGMENTS, HK.VESSELFRAGMENTS_WORLD, HK.DREAMERS, HK.COLOSSEUM, HK.DREAMNAIL, HK.WARRIORDREAMS, HK.GRIMMTROUPE, HK.LIFEBLOOD, HK.GODMASTER, HK.ESSENTIAL, HK.ACHIEVEMENTS, HK.STATISTICS, HK.GODHOME_STATISTICS];

    // duplicates and order important - must be the same as in hkObjArray[]
    let divObjArray = [divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster, divIdObj.essential, divIdObj.achievements, divIdObj.statistics, divIdObj.godhomeStatistics];

    // Looped filling to reduce redundancy
    do {
        for (let entry in hkObjArray[0]) {
            if (entry === "mrMushroomState") continue;
            sFillText += PrepareHTMLString(divObjArray[0], hkObjArray[0][entry].name, hkObjArray[0][entry].spoiler, hkObjArray[0][entry].wiki);
        }
        if (divObjArray[0]) {
            AppendHTML(divObjArray[0], sFillText);
        }
        sFillText = "";
        divObjArray.shift();
    } while (hkObjArray.shift());

    // Nail Upgrades Misc
    sFillText = "";
    for (let i in HK.NAILUPGRADES) {
        sFillText += PrepareHTMLString(divIdObj.nailUpgrades, HK.NAILUPGRADES[i].name, HK.NAILUPGRADES[i].spoiler, HK.NAILUPGRADES[i].wiki);
    }
    AppendHTML(divIdObj.nailUpgrades, sFillText);

    // Spells Misc
    sFillText = "";
    for (let i in HK.SPELLS) {
        sFillText += PrepareHTMLString(divIdObj.spells, HK.SPELLS[i].name, HK.SPELLS[i].spoiler, HK.SPELLS[i].wiki);
    }
    AppendHTML(divIdObj.spells, sFillText);

    // Godmaster Doors Misc
    sFillText = "";
    for (let i in HK.GODMASTER_DOORS) {
        sFillText += PrepareHTMLString(divIdObj.godmaster, HK.GODMASTER_DOORS[i].name, HK.GODMASTER_DOORS[i].spoiler, HK.GODMASTER_DOORS[i].wiki);
    }
    AppendHTML(divIdObj.godmaster, sFillText);

    // Mr Mushroom 1 - 7
    sFillText = CheckMrMushroomState(divIdObj.achievements, divIdObj.achievements.entries.mrMushroomState);
    AppendHTML(divIdObj.achievements, sFillText);

    */

    // Fleur Dividers
    /* AppendHTML(sections.godmaster, FLEUR_DIVIDE);
    AppendHTML(sections.essential, FLEUR_DIVIDE);
    AppendHTML(sections.achievements, FLEUR_DIVIDE); */

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

/* ----------------------- Event Listeners -------------------------- */

// Populate HTML at load (before img and css)
document.addEventListener("DOMContentLoaded", () => {
    InitialHTMLPopulate(HK.SECTION);
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

export {
    // to use in LoadSaveFile.js for auto-analyzing file after decoding
    HKCheckCompletion
};