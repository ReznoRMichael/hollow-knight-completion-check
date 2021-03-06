/* eslint-disable no-prototype-builtins */

/* ---------------- Load main Hollow Knight database files ----------------- */

import HK from "./hk-database.js";

/* ----------------- Helper functions --------------------------------------- */

import {
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

/* let benchHKCCBegin, benchHKCCEnd; */

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
}

/* -------------------------- Functions ----------------------------- */

function Benchmark(bench) {

    for (let time in bench) {

        if (bench[time].timeStart !== 0) {
            console.info(`${bench[time].name} time (ms) =`, bench[time].timeEnd - bench[time].timeStart);
        }
        bench[time].timeStart = 0;
        bench[time].timeEnd = 0;
    }
}

/**
 * Main Function. Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */
function HKCheckCompletion(jsonObject) {

    // start benchmark
    // benchHKCCBegin = new Date();
    benchmarkTimes.CheckCompletion.timeStart = new Date();

    let HKPlayerData;
    let HKWorldItems;
    let HKSceneData;

    if (jsonObject.hasOwnProperty("playerData")) {
        HKPlayerData = jsonObject.playerData;
    } else {
        HK.saveAnalyzed = false;
        return false;
    }

    if (jsonObject.hasOwnProperty("sceneData")) {
        HKSceneData = jsonObject.sceneData;
        if (jsonObject.sceneData.hasOwnProperty("persistentBoolItems")) {
            HKWorldItems = jsonObject.sceneData.persistentBoolItems;
        } else {
            HK.saveAnalyzed = false;
            return false;
        }
    } else {
        HK.saveAnalyzed = false;
        return false;
    }

    // Pre-Cleaning and filling initial data (h2, id) needed for PrepareHTMLString()
    // PrefillHTML(HK.sections);

    // Prevents adding current percent data after each function call and resets what the analyzing has done to the original object. Prevents wrong data display after subsequent save analyzing.
    ResetCompletion(HK);

    // ================================================================================== //

    // ---------------- Time Played ----------------- //

    CheckPlayTime(HK.sections.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(HK.sections.intro, HKPlayerData.completionPercentage);

    // ---------------- Game Completion Status ----------------- //

    CheckSaveFileVersion(HK.sections.intro, HKPlayerData.version);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.sections.intro, FLEUR_DIVIDE);

    // ---------------- Health Masks ----------------- //

    CheckHealthMasks(HK.sections.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

    // ---------------- Soul Orbs ----------------- //

    CheckSoulOrbs(HK.sections.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

    // ---------------- Charm Notches (Slots) ----------------- //

    CheckNotches(HK.sections.intro, HKPlayerData.charmSlots, HKPlayerData.charmSlotsFilled);

    // ---------------- Geo Amount ----------------- //

    CheckGeo(HK.sections.intro, HKPlayerData.geo, HKPlayerData.geoPool);

    // ---------------- Bosses (Base Game) --------------------- //

    CheckIfDataTrue(HK.sections.bosses, HK.sections.bosses.entries, HKPlayerData, HKWorldItems);

    // ---------------- Charms --------------------- //

    CheckIfDataTrue(HK.sections.charms, HK.sections.charms.entries, HKPlayerData);

    // ---------------- Colosseum of Fools --------------------- //

    CheckIfDataTrue(HK.sections.colosseum, HK.sections.colosseum.entries, HKPlayerData);

    // ---------------- Dreamers --------------------- //

    CheckIfDataTrue(HK.sections.dreamers, HK.sections.dreamers.entries, HKPlayerData);

    // ---------------- Dream Nail and Essence --------------------- //

    CheckIfDataTrue(HK.sections.dreamNail, HK.sections.dreamNail.entries, HKPlayerData);

    // ---------------- Equipment --------------------- //

    CheckIfDataTrue(HK.sections.equipment, HK.sections.equipment.entries, HKPlayerData);

    // ---------------- Nail Upgrades --------------------- //

    CheckNailUpgrades(HK.sections.nailUpgrades, HK.sections.nailUpgrades.entries, HKPlayerData);

    // ---------------- Mask Shards --------------------- //

    CheckIfDataTrue(HK.sections.maskShards, HK.sections.maskShards.entries, HKPlayerData, HKWorldItems);

    // ---------------- Nail Arts --------------------- //

    CheckIfDataTrue(HK.sections.nailArts, HK.sections.nailArts.entries, HKPlayerData);

    // ---------------- Spells --------------------- //

    CheckSpellLevel(HK.sections.spells, HK.sections.spells.entries, HKPlayerData);

    // ---------------- Vessel Fragments --------------------- //

    CheckIfDataTrue(HK.sections.vesselFragments, HK.sections.vesselFragments.entries, HKPlayerData, HKWorldItems);

    // ---------------- Warrior Dreams --------------------- //

    CheckWarriorDreams(HK.sections.warriorDreams, HK.sections.warriorDreams.entries, HKPlayerData);

    // ---------------- Grimm Troupe Content Pack --------------------- //

    CheckIfDataTrue(HK.sections.grimmTroupe, HK.sections.grimmTroupe.entries, HKPlayerData);

    // ---------------- Lifeblood Content Pack --------------------- //

    CheckIfDataTrue(HK.sections.lifeblood, HK.sections.lifeblood.entries, HKPlayerData);

    // ---------------- Godmaster Content Pack --------------------- //

    CheckIfDataTrue(HK.sections.godmaster, HK.sections.godmaster.entries, HKPlayerData);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.sections.godmaster, FLEUR_DIVIDE);

    // ------------------------- Essential Things ----------------------------- //

    CheckAdditionalThings(HK.sections.essential, HK.sections.essential.entries, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.sections.essential, FLEUR_DIVIDE);

    // ------------------------- Achievements ----------------------------- //

    CheckAdditionalThings(HK.sections.achievements, HK.sections.achievements.entries, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    // AppendHTML(HK.sections.achievements, FLEUR_DIVIDE);

    // ------------------------- Game Statistics ----------------------------- //

    CheckAdditionalThings(HK.sections.statistics, HK.sections.statistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

    // ------------------------- Godhome Statistics ----------------------------- //

    CheckAdditionalThings(HK.sections.godhomeStatistics, HK.sections.godhomeStatistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

    // ------------------------- Hints ----------------------------- //

    CheckHintsTrue(HK.sections.hints, HK.sections.hints.entries, HKPlayerData, HKWorldItems);

    // ------------------------- Fill completion ----------------------------- //

    /* Percent completion is filled inside GenerateInnerHTML() using CompletionFill() */

    // ------------------------- Indicate that the save file was loaded and analyzed correctly ----------------------------- //

    HK.saveAnalyzed = true;

    // ------------------------- Generate everything on the page with updated values ----------------------------- //

    GenerateInnerHTML(HK);

    // Prevents wrong checkbox behaviour (must run after everything is finished)
    CheckboxHintsToggle();
    CheckboxSpoilersToggle();

    /* focus the text area after analyzing the save, without scrolling the document (too slow) */
    /* document.getElementById("save-area").focus({preventScroll: true}); */

    // finish and show benchmark
    // benchHKCCEnd = new Date();
    benchmarkTimes.CheckCompletion.timeEnd = new Date();
    // console.info("HKCheckCompletion() time (ms) =", benchHKCCEnd - benchHKCCBegin);

    // Benchmark(benchmarkTimes);

    return true;
}

/**
 * Generates and appends a new entry inside the HTML of a given ID
 * @param {object} section object containing div ID and h2 title of the HTML element
 * @param {string} textPrefix Main name of the entry
 * @param {string} textSuffix Optional suffix after the main name (spoilers: locations, costs etc.)
 */
function PrepareHTMLString(section, textPrefix = "Unknown Completion Element: ", textSuffix = "Unknown Description Element", wiki = "") {

    let icon = completionSymbol;
    let b = ["<b>", "</b>"];
    if (!textPrefix.length) b = ["", ""];
    if (wiki.length) b = [`<a class="wiki" href="${WIKI_LINK}${wiki}" target="_blank">`, "</a>"];

    let span = ["<span class='spoiler-span'>", "</span>"];
    let spoilerSpan = ["<span class='spoiler-text'>", "</span>"];
    if (section.id === "hk-hints") {
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
function CurrentDataTrue(section = {}, entry = "") {

    section.percent++;
    if (section.id === "hk-equipment") section.percent++; // double % for equipment

    section.entries[entry].icon = "green";
}

/**
 * Switches global variable to a "not completed" symbol
 */
function CurrentDataFalse(section = {}, entry = "") {

    section.entries[entry].icon = "red";
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
function CurrentDataBlank(section = {}, entry = "") {

    section.entries[entry].icon = "none";
}

/**
 * Fills HTML with the playTime value of the save file
 * @param {object} section ID of the HTML element for data appending
 * @param {number} playTime Number of total gameplay time in seconds
 */
function CheckPlayTime(section, playTime) {

    let seconds = Math.floor(playTime);
    let minutes = Math.floor((seconds / 60) % 60);
    let hours = Math.floor(seconds / 3600);
    let sec = Math.floor(seconds % 60);

    section.entries.timePlayed.timeH = hours;
    section.entries.timePlayed.timeM = minutes;
    section.entries.timePlayed.timeS = sec;

    if (sec < 10) sec = "0" + sec;
    if (minutes < 10) minutes = "0" + minutes;

    let textFill = "Time Played:" + pSpan + "<b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

    section.entries.timePlayed.spoiler = hours + " h " + minutes + " min " + sec + " sec";

    // document.getElementById(section.id).innerHTML += divStart + SYMBOL_CLOCK + textFill + divEnd;
}

/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} section ID of the HTML element for data appending
 * @param {number} completionPercentage Number of completion percentage
 */
function CheckCompletionPercent(section, completionPercentage) {

    /* (completionPercentage >= 112) ? CurrentDataTrue(): CurrentDataFalse(); */

    section.percent = completionPercentage;
    section.entries.gameCompletion.spoiler = completionPercentage;

    let textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + section.maxPercent + " %)";
    // document.getElementById(section.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Reads the "version" string from the save file and appends it to the selected div ID element
 * @param {object} section ID of the HTML element for data appending
 * @param {string} saveVersion Save File version in format 0.0.0.0
 */
function CheckSaveFileVersion(section, saveVersion = HK.sections.intro.entries.saveVersion.spoiler) {

    CurrentDataBlank(section, section.entries.saveVersion.id);

    section.entries.saveVersion.spoiler = `${saveVersion}`;

    /* let textFill = `Save Version:${pSpan}<b>${saveVersion}</b>${pSpan}`; */
    // document.getElementById(section.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Fills HTML with appropriate number of health mask images
 * @param {object} section ID of the HTML element for data appending
 * @param {number} masks Number of max health masks from the save (baseline without charms and lifeblood)
 * @param {number} permadeathMode Value of permadeathMode property. 0 = Normal, 1 = Steel Soul, 2 = Steel Soul broken save
 */
function CheckHealthMasks(section, masks = 5, permadeathMode = 0) {

    section.entries.health.amountTotal = masks;

    if (permadeathMode > 0) {
        section.entries.health.permadeathMode = true;
    } else {
        section.entries.health.permadeathMode = false;
    }

    /* let icon = SYMBOL_EMPTY;
    let textFill = "<span>Health:</span>";
    let maskImages = "";
    let maskNormal = `<img src='${HEALTH_MASK_IMAGE}' class='health-mask' alt='health mask image' title='Health Mask'>`;
    let maskSteel = `<img src='${HEALTH_MASK_STEEL_IMAGE}' class='health-mask' alt='steel health mask image' title='Steel Health Mask'>`;
    let maskImg = "";

    (permadeathMode > 0) ? maskImg = maskSteel: maskImg = maskNormal;

    for (let i = 0; i < masks; i++) {
        maskImages += maskImg;
    } */

    // document.getElementById(section.id).innerHTML += divStartCenter + icon + textFill + maskImages + divEnd;
}

/**
 * Fills HTML with appropriate number of soul orbs images
 * @param {object} section ID of the HTML element for data appending
 * @param {number} totalSoul Number of max Soul reserve from the save. 99 = full Soul Orb
 */
function CheckSoulOrbs(section, totalSoul) {

    /* let icon = SYMBOL_EMPTY;
    let textFill = "<span>Soul:</span>";
    let soulImages = "";
    let soulNormal = `<img src='${SOUL_ORB_IMAGE}' class='soul-orb' alt='soul orb image' title='Single Soul Orb (one spell cast)'>`;
    let soulImg = soulNormal;

    for (let i = 0, total = totalSoul / 33; i < total; i++) {
        soulImages += soulImg;
    } */

    section.entries.soul.amountTotal = totalSoul;

    // document.getElementById(section.id).innerHTML += divStartCenter + icon + textFill + soulImages + divEnd;
}

/**
 * Fills HTML with the Geo value of the save file
 * @param {object} section ID of the HTML element for data appending
 * @param {number} geoValue Number of total Geo value
 */
function CheckGeo(section, geoValue = 0, geoPoolValue = 0) {

    section.entries.geo.amount = geoValue;
    section.entries.geo.amountShade = geoPoolValue;
    section.entries.geo.amountTotal = geoValue + geoPoolValue;

    /* let icon = SYMBOL_EMPTY;
    let textFill = `<span>Geo:</span><img src='${GEO_IMAGE}' class='geo-symbol' alt='geo symbol image' title='Geo'><b>${geoValue}</b>`;

    // Show Shade Geo value and image only if Shade has at least 1 Geo on it
    if (geoPoolValue > 0) textFill += `
    ${pSpan}+<img src='${GEO_SHADE_IMAGE}' class='geo-symbol' alt='shade geo symbol image' title='Shade Geo'><b>${geoPoolValue}</b>`;

    // Show also total Geo (Geo + Shade Geo) if player has at least 1 geo alongside the shade geo
    if (geoValue > 0 && geoPoolValue > 0) textFill += `${pSpan}=${pSpan}<b>${geoValue+geoPoolValue}</b>`; */

    // document.getElementById(section.id).innerHTML += divStartCenter + icon + textFill + divEnd;
}

/**
 * Fills HTML with appropriate number of notch images
 * @param {object} section ID of the HTML element for data appending
 * @param {number} totalNotches Number of total Charm Notches the player has. 11 = max
 * @param {number} filledNotches Number of total used Charm Notches (including overcharmed notches). 15 = max
 */
function CheckNotches(section, notchesTotal = 3, notchesFilled = 0) {

    let {
        notchesOvercharmed,
        notchesUnused
    } = 0;

    section.entries.notches.amountTotal = notchesTotal;

    // How many overcharmed notches images to show
    notchesOvercharmed = notchesFilled - notchesTotal;
    if (notchesOvercharmed < 1) notchesOvercharmed = 0;

    section.entries.notches.amountOvercharmed = notchesOvercharmed;

    // How many unused notches images to show
    notchesUnused = notchesTotal - notchesFilled;
    if (notchesUnused < 1) notchesUnused = 0;

    section.entries.notches.amountUnused = notchesUnused;

    // Correct number of filled/used notches images to show when player is overcharmed
    if (notchesFilled > notchesTotal) notchesFilled = notchesTotal;

    section.entries.notches.amountFilled = notchesFilled;

    /* let icon = SYMBOL_EMPTY;
    let textFill = `<span>Notches:</span>${pSpan}`;

    let notchImages = "";
    let notchNormalImage = `<img src='${NOTCH_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Free)'>`;
    let notchFilledImage = `<img src='${NOTCH_FILLED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Used)'>`;
    let notchOvercharmedImage = `<img src='${NOTCH_OVERCHARMED_IMAGE}' class='notch' alt='notch image' title='Charm Notch (Overcharmed)'>`;

    // First check filled (used) notches and fill them (skips if no filled notches)
    if (notchesFilled > 0) {
        for (let i = 0; i < notchesFilled; i++) {
            notchImages += notchFilledImage;
        }
    }

    // Second check overcharmed notches and fill them (skips if player is not overcharmed)
    if (notchesOvercharmed > 0) {
        for (let i = 0; i < notchesOvercharmed; i++) {
            notchImages += notchOvercharmedImage;
        }
    }

    // Lastly, fill all unused notches
    if (notchesUnused > 0) {
        for (let i = 0; i < notchesUnused; i++) {
            notchImages += notchNormalImage;
        }
    } */

    // document.getElementById(section.id).innerHTML += divStartCenter + icon + textFill + notchImages + divEnd;
}

/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search (playerData)
 * @param {Array} worldData Reference/pointer to specific data where to search (sceneData.persistentBoolItems)
 */
function CheckIfDataTrue(section, dataObject, playerData, worldData = []) {

    /* let {
        textPrefix,
        textSuffix,
    } = "";
    let sFillText = "";
    let wiki = ""; */
    let checkText = "";

    for (let i in dataObject) {

        /* textPrefix = dataObject[i].name;
        textSuffix = dataObject[i].spoiler;
        (dataObject[i].hasOwnProperty("wiki")) ? wiki = dataObject[i].wiki: wiki = ""; */

        switch (i) {
            case "gotCharm_36":
                // prevents green checkbox and adding 1% when only got one white fragment
                (playerData.gotQueenFragment === true && playerData.gotKingFragment === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
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
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */

                    break;
                }

                // Checks for Nightmare King (4) or Banishment (5)
                if (i === "grimmChildLevel") {
                    // (playerData.grimmChildLevel >= 4) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);

                    /* Check if Nightmare King or Banishment by looking at grimmChildLevel */
                    switch (playerData[i]) {

                        case 4:
                            dataObject[i].name = dataObject[i].nameNightmareKing;
                            dataObject[i].spoiler = dataObject[i].spoilerNightmareKing;
                            dataObject[i].wiki = dataObject[i].wikiNightmareKing;

                            CurrentDataTrue(section, i);

                            break;
                        case 5:
                            dataObject[i].name = dataObject[i].nameBanishment;
                            dataObject[i].spoiler = dataObject[i].spoilerBanishment;
                            dataObject[i].wiki = dataObject[i].wikiBanishment;

                            CurrentDataTrue(section, i);

                            break;
                        default:
                            CurrentDataFalse(section, i);
                            dataObject[i].name = dataObject[i].nameDefault;
                            dataObject[i].spoiler = dataObject[i].spoilerDefault;
                            dataObject[i].wiki = dataObject[i].wikiDefault;
                    }

                    break;
                }

                if (i === "gotCharm_40") {
                    CurrentDataFalse(section, i);
                    dataObject[i].name = dataObject[i].nameDefault;
                    dataObject[i].spoiler = dataObject[i].spoilerDefault;
                    dataObject[i].wiki = dataObject[i].wikiDefault;

                    switch (playerData.grimmChildLevel) {

                        case 1:
                            if (playerData[i] === true) {
                                dataObject[i].name = dataObject[i].nameGrimmchildP1;
                                dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP1;
                                dataObject[i].wiki = dataObject[i].wikiGrimmchild;

                                CurrentDataTrue(section, i);
                            }

                            break;
                        case 2:
                            dataObject[i].name = dataObject[i].nameGrimmchildP2;
                            dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP2;
                            dataObject[i].wiki = dataObject[i].wikiGrimmchild;
                                
                            CurrentDataTrue(section, i);

                            break;
                        case 3:
                            dataObject[i].name = dataObject[i].nameGrimmchildP3;
                            dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP3;
                            dataObject[i].wiki = dataObject[i].wikiGrimmchild;
                            
                            CurrentDataTrue(section, i);

                            break;
                        case 4:
                            dataObject[i].name = dataObject[i].nameGrimmchildP4;
                            dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP4;
                            dataObject[i].wiki = dataObject[i].wikiGrimmchild;
                            
                            CurrentDataTrue(section, i);

                            break;
                        case 5:
                            dataObject[i].name = dataObject[i].nameCarefreeMelody;
                            dataObject[i].spoiler = dataObject[i].spoilerCarefreeMelody;
                            dataObject[i].wiki = dataObject[i].wikiCarefreeMelody;
                            
                            CurrentDataTrue(section, i);

                            break;
                        default:
                            dataObject[i].name = dataObject[i].nameDefault;
                            dataObject[i].spoiler = dataObject[i].spoilerDefault;
                            dataObject[i].wiki = dataObject[i].wikiDefault;
                    }

                    break;
                }

                (playerData[i] === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);

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
                (WorldDataActivated(dataObject[i].id, dataObject[i].sceneName, worldData)) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "pantheonMaster":
            case "pantheonArtist":
            case "pantheonSage":
            case "pantheonKnight":
                checkText = CheckGodmasterDoors(dataObject[i], playerData);

                if (checkText === "PropertyNotFound") {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                    break;

                } else if (checkText === "PantheonCompleted") {
                    CurrentDataTrue(section, i);
                    break;

                } else {
                    CurrentDataFalse(section, i);
                }
                break;

            default:
                (playerData[i] === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
        }

        /* sFillText += PrepareHTMLString(section, textPrefix, textSuffix, wiki); */
    }

    // AppendHTML(section, sFillText);
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckSpellLevel(section, dataObject, playerData) {

    let sFillText = "";

    for (let i in dataObject) {
        switch (i) {
            case "vengefulSpirit":
            case "shadeSoul":
                (playerData.fireballLevel >= dataObject[i].fireballLevel) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            case "desolateDive":
            case "descendingDark":
                (playerData.quakeLevel >= dataObject[i].quakeLevel) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            case "howlingWraiths":
            case "abyssShriek":
                (playerData.screamLevel >= dataObject[i].screamLevel) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
                break;
            default:
                break;
        }
    }

    // AppendHTML(section, sFillText);
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(section, dataObject, playerData) {

    let sFillText = "";

    for (let i in dataObject) {
        (playerData[i] >= 2) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
        sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
    }

    // AppendHTML(section, sFillText);
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
 * @param {object} section ID of the HTML element for data appending
 * @param {object} dataObject Object containing nail upgrades data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search in the save file
 */
function CheckNailUpgrades(section, dataObject, playerData) {

    // appends "Nail" to every array element
    // same as names in the database object
    let nail = ["old", "sharpened", "channeled", "coiled", "pure"].map((element) => element + "Nail");

    let sFillText = "";

    for (let i = 0; i < 5; i++) {
        (playerData.nailSmithUpgrades >= i) ? CurrentDataTrue(section, nail[i]): CurrentDataFalse(section, nail[i]);
        sFillText += PrepareHTMLString(section, dataObject[nail[i]].name, dataObject[nail[i]].spoiler, dataObject[nail[i]].wiki);
    }
    if (section.percent) section.percent--; // subject one for the Old Nail

    // AppendHTML(section, sFillText);
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
 * @param {object} section ID of the HTML element for data appending
 * @param {string} idText Text string inside save data to search for
 * @param {object} dataObject Object containing data to be verified
 * @param {object} worldData Reference/pointer to specific data where to search
 */
/* function CheckWorldDataTrue(section, idText, dataObject, worldData) {
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
        if (orderedArray[i][4] === true) CurrentDataTrue(section);
        sFillText += PrepareHTMLString(section, orderedArray[i][1], orderedArray[i][2], orderedArray[i][3]);
    }

    // AppendHTML(section, sFillText);
} */

/**
 * Verifies if the data in a specific object are true or false, or checks what values they have, and appends HTML accordingly.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search (playerData)
 * @param {object} worldData Reference/pointer to specific data where to search (sceneData.persistentBoolItems)
 * @param {object} sceneData Reference/pointer to specific data where to search (sceneData)
 */
function CheckAdditionalThings(section, dataObject, playerData, worldData, sceneData) {

    /* let {
        textPrefix,
        textSuffix,
        wiki
    } = "";
    let sFillText = ""; */

    // Start main loop
    for (let i in dataObject) {
        /* textPrefix = dataObject[i].name;
        (dataObject[i].hasOwnProperty("spoiler")) ? textSuffix = dataObject[i].spoiler: textSuffix = "";
        (dataObject[i].hasOwnProperty("wiki")) ? wiki = dataObject[i].wiki: wiki = ""; */

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
                dataObject[i].amount = amount;

                if (i === "journalEntriesCompleted" || i === "journalNotesCompleted") {
                    countTotal = `${amount} / ${playerData.journalEntriesTotal}`;
                    dataObject[i].amountTotal = playerData.journalEntriesTotal;
                }

                if (i === "grubsCollected") {
                    LogMissingGrubs();
                }

                /* textPrefix += `: ${countTotal}`; */

                if (i === "grubRewards") {
                    dataObject[i].amountTotal = playerData.grubsCollected;
                    /* textPrefix += ` / ${playerData.grubsCollected}`; */
                }

                if (i === "greyPrinceDefeats") {
                    // backwards compatibility with earlier game versions
                    if (playerData.hasOwnProperty(i) === false) {
                        CurrentDataBlank(section, i);
                        dataObject[i].disabled = true;
                        // textPrefix = `<del>${dataObject[i].name}</del>`;
                        break;
                    } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                        dataObject[i].disabled = true;
                        // textPrefix = `<del>${textPrefix}</del>`;
                    }
                }

                if (i === "whiteDefenderDefeats") {
                    // backwards compatibility with earlier game versions
                    if (playerData.hasOwnProperty(i) === false) {
                        CurrentDataBlank(section, i);
                        dataObject[i].disabled = true;
                        // textPrefix = `<del>${dataObject[i].name}</del>`;
                        break;
                    }
                }
                (amount >= dataObject[i].max) ? CurrentDataTrue(section, i): CurrentDataBlank(section, i);
                break;

            case "geoPool":
            case "rancidEggs":
            case "jinnEggsSold":
            case "xunFlowerBrokeTimes":
                // textPrefix += ": " + Math.abs(playerData[i]);

                dataObject[i].amount = Math.abs(playerData[i]);

                (i === "geoPool" && playerData[i] > 0) ? CurrentDataBlank(section, i): CurrentDataTrue(section, i);

                if (i === "jinnEggsSold") {
                    // fade out if not on Steel Soul
                    if (playerData.permadeathMode < 1) {
                        CurrentDataBlank(section, i);
                        dataObject[i].disabled = true;
                        // textPrefix = `<del>${textPrefix}</del>`;
                        break;
                    }
                }

                break;

            case "geoRocks":
                discoveredTotal = sceneData.geoRocks.length;

                notActivated = CountGeoRocks(discoveredTotal, "unbroken");
                activated = CountGeoRocks(discoveredTotal, "broken");

                dataObject[i].discoveredTotal = discoveredTotal;
                dataObject[i].notActivated = notActivated;
                dataObject[i].activated = activated;

                /* textPrefix += `: ${notActivated} | ${activated} | ${discoveredTotal}`; */
                CurrentDataTrue(section, i);
                break;

            case "itemsDiscovered":
                discoveredTotal = sceneData.persistentBoolItems.length;

                notActivated = CountItems(discoveredTotal, "notActivated");
                activated = CountItems(discoveredTotal, "active");

                dataObject[i].discoveredTotal = discoveredTotal;
                dataObject[i].notActivated = notActivated;
                dataObject[i].activated = activated;

                /* textPrefix += `: ${notActivated} | ${activated} | ${discoveredTotal}`; */
                CurrentDataTrue(section, i);
                break;

            case "shopkeeperKey":
                (playerData.hasSlykey === true || playerData.gaveSlykey === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "elegantKey":
                (playerData.hasWhiteKey === true || playerData.usedWhiteKey === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "loveKey":
                (playerData.hasLoveKey === true || playerData.openedLoveDoor === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "paleOreSeer": // #2
                (playerData.dreamReward3 === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
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
                (FindWorldItem(dataObject[i].id, dataObject[i].sceneName)) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "relicsWandererJournal":
            case "relicsHallownestSeal":
            case "relicsKingsIdol":
            case "relicsArcaneEgg":
                total = playerData[dataObject[i].nameHeld] + playerData[dataObject[i].nameSold];

                (total >= dataObject[i].max) ? CurrentDataTrue(section, i): CurrentDataBlank(section, i);

                dataObject[i].amount = total;

                /* textPrefix += ": " + total; */
                break;

            case "bossDoorStateTier5":
                if (playerData.hasOwnProperty("bossDoorStateTier5") === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                } else {
                    (playerData[i].completed === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                }
                break;

            case "killsBindingSeal":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                    break;
                }
                (playerData[i] == 0) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "killsBigBuzzer":
                (playerData[i] == 0) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                break;

            case "killedVoidIdol_1":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                if (playerData[i] === false && (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) CurrentDataTrue(section, i);
                break;

            case "killedVoidIdol_2":
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                    break;
                }
                (playerData[i] === true) ? CurrentDataTrue(section, i): CurrentDataFalse(section, i);
                if (playerData[i] === false && playerData.killedVoidIdol_3 === true) CurrentDataTrue(section, i);
                break;

            case "greyPrinceDefeated":
                // compatibility with earlier game versions
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                    break;
                } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
                    dataObject[i].disabled = true;
                    /* textPrefix = `<del>${textPrefix}</del>`; */
                }
                (playerData[i] === true) ? CurrentDataTrue(section, i): CurrentDataBlank(section, i);
                if (playerData.zoteRescuedBuzzer === true && playerData[i] === false) CurrentDataFalse(section, i);
                break;

            case "zoteStatus":
                CurrentDataFalse(section, i);
                dataObject[i].name = dataObject[i].nameDefault;
                dataObject[i].spoiler = dataObject[i].spoilerDefault;

                if (playerData.zoteDead === true) {
                    /* textPrefix = dataObject[i].nameNeglect;
                    textSuffix = dataObject[i].spoilerNeglect; */
                    dataObject[i].name = dataObject[i].nameNeglect;
                    dataObject[i].spoiler = dataObject[i].spoilerNeglect;

                    CurrentDataTrue(section, i);

                } else if (playerData.killedZote === true) {
                    /* textPrefix = dataObject[i].nameRivalry;
                    textSuffix = dataObject[i].spoilerRivalry; */
                    dataObject[i].name = dataObject[i].nameRivalry;
                    dataObject[i].spoiler = dataObject[i].spoilerRivalry;

                    CurrentDataTrue(section, i);

                } else if (playerData.zoteRescuedBuzzer === false) {
                    if (playerData.hasWalljump === false) {
                        /* textPrefix = dataObject[i].nameTrappedVengefly;
                        textSuffix = dataObject[i].spoilerTrappedVengefly; */
                        dataObject[i].name = dataObject[i].nameTrappedVengefly;
                        dataObject[i].spoiler = dataObject[i].spoilerTrappedVengefly;

                    } else if (playerData.hasWalljump === true) {
                        /* textPrefix = dataObject[i].nameNotRescuedVengefly;
                        textSuffix = dataObject[i].spoilerNotRescuedVengefly; */
                        dataObject[i].name = dataObject[i].nameNotRescuedVengefly;
                        dataObject[i].spoiler = dataObject[i].spoilerNotRescuedVengefly;
                    }
                } else if (playerData.zoteRescuedBuzzer === true) {
                    if (playerData.zoteRescuedDeepnest === false) {
                        /* textPrefix = dataObject[i].nameTrappedDeepnest;
                        textSuffix = dataObject[i].spoilerTrappedDeepnest; */
                        dataObject[i].name = dataObject[i].nameTrappedDeepnest;
                        dataObject[i].spoiler = dataObject[i].spoilerTrappedDeepnest;

                    } else if (playerData.zoteRescuedDeepnest === true) {
                        if (playerData.killedZote === false) {
                            /* textPrefix = dataObject[i].nameColosseum;
                            textSuffix = dataObject[i].spoilerColosseum; */
                            dataObject[i].name = dataObject[i].nameColosseum;
                            dataObject[i].spoiler = dataObject[i].spoilerColosseum;
                        }
                    }
                }
                break;

            case "nailsmithStatus":
                CurrentDataFalse(section, i);
                dataObject[i].name = dataObject[i].nameDefault;
                dataObject[i].spoiler = dataObject[i].spoilerDefault;

                if (playerData.nailsmithKilled === true) {
                    /* textPrefix = dataObject[i].namePurity;
                    textSuffix = dataObject[i].spoilerPurity; */
                    dataObject[i].name = dataObject[i].namePurity;
                    dataObject[i].spoiler = dataObject[i].spoilerPurity;

                    CurrentDataTrue(section, i);

                } else if (playerData.nailsmithConvoArt === true) {
                    /* textPrefix = dataObject[i].nameHappyCouple;
                    textSuffix = dataObject[i].spoilerHappyCouple; */
                    dataObject[i].name = dataObject[i].nameHappyCouple;
                    dataObject[i].spoiler = dataObject[i].spoilerHappyCouple;

                    CurrentDataTrue(section, i);

                } else if (playerData.nailsmithSpared === true) {
                    /* textPrefix = dataObject[i].nameSheoHutWaiting;
                    textSuffix = dataObject[i].spoilerSheoHutWaiting; */
                    dataObject[i].name = dataObject[i].nameSheoHutWaiting;
                    dataObject[i].spoiler = dataObject[i].spoilerSheoHutWaiting;

                } else {
                    /* textPrefix = dataObject[i].nameUpgradeNail;
                    textSuffix = dataObject[i].spoilerUpgradeNail; */
                    dataObject[i].name = dataObject[i].nameUpgradeNail;
                    dataObject[i].spoiler = dataObject[i].spoilerUpgradeNail;
                }
                break;

            case "mrMushroomState1":
            case "mrMushroomState2":
            case "mrMushroomState3":
            case "mrMushroomState4":
            case "mrMushroomState5":
            case "mrMushroomState6":
            case "mrMushroomState7":
                CheckMrMushroomState(section, dataObject[i], playerData["mrMushroomState"]);
                break;

            default:
                // backwards compatibility with earlier game versions
                if (playerData.hasOwnProperty(i) === false) {
                    CurrentDataBlank(section, i);
                    dataObject[i].disabled = true;
                    // textPrefix = `<del>${dataObject[i].name}</del>`;
                    break;
                } else if (playerData[i] === true) {
                    CurrentDataTrue(section, i);
                } else {
                    CurrentDataFalse(section, i);
                }
        } // end switch (i)

        /* sFillText += PrepareHTMLString(section, textPrefix, textSuffix, wiki); */
    } // end for (let i in dataObject)

    // AppendHTML(section, sFillText);

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
        let missingGrubsList = section.grubsList.filter(x => !rescuedGrubsSceneList.includes(x));
        let length = missingGrubsList.length;

        if (!length) {
            console.log("%cAll Grubs Rescued!", "color: #16c60c; font-weight: 700;");
        } else {
            console.groupCollapsed(`%cUnrescued Grubs (${length}):`, "color: #16c60c; font-weight: 700;");

            for (let i = 0; i < length; i++) {
                console.log(`#${section.grubsList.indexOf(missingGrubsList[i]) + 1} 🗺️ ${TranslateMapName(missingGrubsList[i])} ⌨️ ${missingGrubsList[i]}`);
            }

            console.groupEnd();
        }

        return false;
    }
}

/**
 * Checks and fills all the 7 locations of Mr Mushroom.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} entry object containing the Mr Mushroom name and spoilers/locations
 * @param {number} mrMushroomState playerData.mrMushroomState read from the save file. (0-8)
 */
function CheckMrMushroomState(section, entry, mrMushroomState = 0) {

    if (mrMushroomState >= entry.state) {
        CurrentDataTrue(section, `mrMushroomState${entry.state}`);
    } else {
        CurrentDataFalse(section, `mrMushroomState${entry.state}`);
    }
}

/**
 * Checks, validates and shows hints to the player depending on their save progression, in chronological order. Shows only hint for the last uncompleted event. If Hollow Knight is defeated, shows a dummy text.
 * @param {object} section object containing div hints ID and h2 title
 * @param {object} dataObject object containing all hints data
 * @param {object} playerData object containing HK Player Data to look in
 * @param {object} worldData object containing HK World Data to look in
 * @returns {bool} true when defeated Hollow Knight, false if not
 */
function CheckHintsTrue(section, dataObject, playerData, worldData) {

    /* let sFillText = ""; */

    if (playerData.killedHollowKnight === true) {
        // a text to show when player already finished their first playthrough (killed Hollow Knight first time)
        /* AppendHTML(section, "...a successful Knight who doesn't need hints anymore. The Knight explores the world of Hallownest patiently in constant search of its remaining secrets..."); */
        section.current = "endOfHints";
        return true;
    }

    for (let i in dataObject) {

        if (i === "endOfHints") {
            break;
        } else if (playerData[i] === true) {
            continue;
        } else if (i === "fireballLevel") {
            if (playerData[i] >= 1) {
                continue;
            } else {
                section.current = i;
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
                section.current = i;
                break;
            }
        } else if (i === "dungDefenderOrHornet2") {
            if (playerData.defeatedDungDefender === true) {
                continue;
            } else if (playerData.hornetOutskirtsDefeated === true) {
                continue;
            } else { // if no Dung Defender or Hornet 2
                section.current = i;
                break;
            }
        } else if (i === "ismaTearOrShadeCloak") {
            if (playerData.hasAcidArmour === true) {
                continue;
            } else if (playerData.hasKingsBrand === true) {
                if (playerData.hasShadowDash === true) {
                    continue;
                } else { // if Kings Brand but no Shade Cloak
                    section.current = i;
                    break;
                }
            } else { // if no Isma's Tear or Kings Brand
                section.current = i;
                break;
            }
        } else { // if anything from the hints list is not done
            section.current = i;
            break;
        }
    } // end: for (let i in dataObject)

    // AppendHTML(section, sFillText);
} // function CheckHintsTrue()

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */
function HKReadTextArea(textAreaId = "") {

    // start benchmark
    benchmarkTimes.HKReadTextArea.timeStart = new Date();

    // starts the main HTML generating function GenerateInnerHTML() and ensures proper checkbox behaviour
    InitializeHTMLPopulation(HK);

    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {

        try {
            let jsonObject = JSON.parse(contents);
            // console.log(jsonObject);
            if (jsonObject.hasOwnProperty("playerData")) HKCheckCompletion(jsonObject);
            // console.log(jsonObject);

            // end benchmark and show results
            benchmarkTimes.HKReadTextArea.timeEnd = new Date();

            console.info(`HKReadTextArea() time (ms) =`, benchmarkTimes.HKReadTextArea.timeEnd - benchmarkTimes.HKReadTextArea.timeStart);

        } catch (error) {
            HK.saveAnalyzed = false;
            alert(`This seems like not a valid Hollow Knight save.\n${error}`);
            console.info(`This seems like not a valid Hollow Knight save.\n${error}`);
        }
    }
}

/**
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} db JavaScript Object containing all HTML IDs to populate
 */
function InitializeHTMLPopulation(db) {

    /* let sFillText = "";

    CurrentDataFalse(); */

    GenerateInnerHTML(db);

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
 * Reset the object state in memory to default values, like before first save analyzing. Undo all changes.
 * @param {object} db database object reference
 */
function ResetCompletion(db) {

    let sections = db.sections;
    let entries = {};

    db.saveAnalyzed = false;

    for (let section in sections) {
        entries = sections[section].entries;

        if (sections[section].hasOwnProperty("percent")) sections[section].percent = 0;

        switch (section) {
            case "intro":
            case "hints":
                break;

            default:

                for (let entry in entries) {
                    if (entries[entry].hasOwnProperty("icon")) {
                        entries[entry].icon = "red";
                    }

                    if (entries[entry].hasOwnProperty("disabled")) {
                        entries[entry].disabled = false;
                    }

                    if (entries[entry].hasOwnProperty("amount")) {
                        entries[entry].amount = 0;
                    }

                    if (entries[entry].hasOwnProperty("amountTotal")) {
                        entries[entry].amountTotal = 0;
                    }

                    if (entry.hasOwnProperty("currentName")) {
                        delete entries[entry].currentName;
                    }

                    if (entry.hasOwnProperty("currentSpoiler")) {
                        delete entries[entry].currentSpoiler;
                    }
                }
        }
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
    InitializeHTMLPopulation(HK);
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
    HKCheckCompletion,
    benchmarkTimes,
    Benchmark
};