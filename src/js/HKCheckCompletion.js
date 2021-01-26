/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */

import {
    DIV_ID,
    HK_HINTS,
    HK_BOSSES,
    HK_BOSSES_WORLD,
    HK_CHARMS,
    HK_EQUIPMENT,
    HK_NAILARTS,
    HK_NAILUPGRADES,
    HK_SPELLS,
    HK_MASKSHARDS,
    HK_MASKSHARDS_WORLD,
    HK_VESSELFRAGMENTS,
    HK_VESSELFRAGMENTS_WORLD,
    HK_DREAMERS,
    HK_COLOSSEUM,
    HK_DREAMNAIL,
    HK_WARRIORDREAMS,
    HK_GRIMMTROUPE,
    HK_LIFEBLOOD,
    HK_GODMASTER,
    HK_GODMASTER_DOORS,
    HK_ESSENTIAL,
    HK_ACHIEVEMENTS,
    HK_STATISTICS
} from "./hk-database.js";
import healthMaskImage from "../img/health-mask.png";
import healthMaskSteelImage from "../img/health-mask-steel.png";
import soulOrbImage from "../img/soul-orb.png";
import geoImage from "../img/geo.png";

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
    "<div class='flex-container'>"
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
 * Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */
function HKCheckCompletion(jsonObject) {

    // start benchmark
    benchHKCCBegin = new Date();

    let HKPlayerData;
    let HKWorldItems;

    if (jsonObject.hasOwnProperty("playerData")) {
        HKPlayerData = jsonObject.playerData;
    } else return false;

    if (jsonObject.hasOwnProperty("sceneData")) {
        if (jsonObject.sceneData.hasOwnProperty("persistentBoolItems")) {
            HKWorldItems = jsonObject.sceneData.persistentBoolItems;
        } else return false;
    } else return false;

    // Pre-Cleaning and filling initial data (h2, id) needed for FillHTML()
    PrefillHTML(DIV_ID);

    // Prevents adding current percent data after each function call (each click of Analyze button)
    ResetCompletion(DIV_ID);

    // Prevents wrong checkbox behaviour
    CheckboxHintsToggle("hide");
    CheckboxLocationsToggle("hide");

    // Shallow Clone const objects (used for destructive functions)
    let HK_HINTS_temp = Object.assign({}, HK_HINTS);
    let HK_BOSSES_temp = Object.assign({}, HK_BOSSES);
    let HK_BOSSES_WORLD_temp = Object.assign({}, HK_BOSSES_WORLD);
    let HK_CHARMS_temp = Object.assign({}, HK_CHARMS);
    let HK_COLOSSEUM_temp = Object.assign({}, HK_COLOSSEUM);
    let HK_DREAMERS_temp = Object.assign({}, HK_DREAMERS);
    let HK_DREAMNAIL_temp = Object.assign({}, HK_DREAMNAIL);
    let HK_EQUIPMENT_temp = Object.assign({}, HK_EQUIPMENT);
    let HK_MASKSHARDS_temp = Object.assign({}, HK_MASKSHARDS);
    let HK_MASKSHARDS_WORLD_temp = Object.assign({}, HK_MASKSHARDS_WORLD);
    let HK_NAILARTS_temp = Object.assign({}, HK_NAILARTS);
    let HK_VESSELFRAGMENTS_temp = Object.assign({}, HK_VESSELFRAGMENTS);
    let HK_VESSELFRAGMENTS_WORLD_temp = Object.assign({}, HK_VESSELFRAGMENTS_WORLD);
    let HK_WARRIORDREAMS_temp = Object.assign({}, HK_WARRIORDREAMS);
    let HK_GRIMMTROUPE_temp = Object.assign({}, HK_GRIMMTROUPE);
    let HK_LIFEBLOOD_temp = Object.assign({}, HK_LIFEBLOOD);
    let HK_GODMASTER_temp = Object.assign({}, HK_GODMASTER);

    // Shallow Clone const arrays (used for destructive functions)
    let HK_GODMASTER_DOORS_temp = Array.from(HK_GODMASTER_DOORS);
    let HK_NAILUPGRADES_temp = Array.from(HK_NAILUPGRADES);

    // Deep Clone const spells multi-layer object (used for destructive functions)
    let HK_SPELLS_temp = JSON.parse(JSON.stringify(HK_SPELLS));

    // ================================================================================== //

    // ---------------- Time Played ----------------- //

    CheckPlayTime(DIV_ID.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(DIV_ID.intro, HKPlayerData.completionPercentage);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.intro, FLEUR_DIVIDE);

    // ---------------- Health Masks ----------------- //

    CheckHealthMasks(DIV_ID.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

    // ---------------- Soul Orbs ----------------- //

    CheckSoulOrbs(DIV_ID.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

    // ---------------- Geo Amount ----------------- //

    CheckGeo(DIV_ID.intro, HKPlayerData.geo);

    // ---------------- Bosses (Base Game) --------------------- //

    CheckIfDataTrue(DIV_ID.bosses, HK_BOSSES_temp, HKPlayerData);

    // ---------------- Gruz Mother and Mawlek (World Map) --------------------- //

    if (HKWorldItems) CheckWorldDataTrue(DIV_ID.bosses, "Battle Scene", HK_BOSSES_WORLD_temp, HKWorldItems);

    // ---------------- Charms --------------------- //

    CheckIfDataTrue(DIV_ID.charms, HK_CHARMS_temp, HKPlayerData);

    // ---------------- Colosseum of Fools --------------------- //

    CheckIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM_temp, HKPlayerData);

    // ---------------- Dreamers --------------------- //

    CheckIfDataTrue(DIV_ID.dreamers, HK_DREAMERS_temp, HKPlayerData);

    // ---------------- Dream Nail and Essence --------------------- //

    CheckIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL_temp, HKPlayerData);

    // ---------------- Equipment --------------------- //

    CheckIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT_temp, HKPlayerData);

    // ---------------- Nail Upgrades --------------------- //

    for (let i = 0, length = HK_NAILUPGRADES_temp.length; i < length; i++) {
        (HKPlayerData.nailSmithUpgrades >= i) ? CurrentDataTrue(DIV_ID.nailUpgrades): CurrentDataFalse();
        FillHTML(DIV_ID.nailUpgrades, HK_NAILUPGRADES_temp[i][0], HK_NAILUPGRADES_temp[i][1]);
    }
    if (DIV_ID.nailUpgrades.percent) DIV_ID.nailUpgrades.percent--; // subject one for the Old Nail

    // ---------------- Mask Shards --------------------- //

    CheckIfDataTrue(DIV_ID.maskShards, HK_MASKSHARDS_temp, HKPlayerData);

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.maskShards, "Heart Piece", HK_MASKSHARDS_WORLD_temp, HKWorldItems);

    // ---------------- Nail Arts --------------------- //

    CheckIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

    // ---------------- Spells --------------------- //

    CheckSpellLevel(DIV_ID.spells, HK_SPELLS_temp, HKPlayerData);

    // ---------------- Vessel Fragments --------------------- //

    CheckIfDataTrue(DIV_ID.vesselFragments, HK_VESSELFRAGMENTS_temp, HKPlayerData);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.vesselFragments, "Vessel Fragment", HK_VESSELFRAGMENTS_WORLD_temp, HKWorldItems);

    // ---------------- Warrior Dreams --------------------- //

    CheckWarriorDreams(DIV_ID.warriorDreams, HK_WARRIORDREAMS_temp, HKPlayerData);

    // ---------------- Grimm Troupe Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.grimmTroupe, HK_GRIMMTROUPE_temp, HKPlayerData);

    (HKPlayerData.grimmChildLevel >= 4) ? CurrentDataTrue(DIV_ID.grimmTroupe): CurrentDataFalse();
    FillHTML(DIV_ID.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");

    // ---------------- Lifeblood Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.lifeblood, HK_LIFEBLOOD_temp, HKPlayerData);

    // ---------------- Godmaster Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.godmaster, HK_GODMASTER_temp, HKPlayerData);

    for (let i = 1; i <= 4; i++) {
        (HKPlayerData["bossDoorStateTier" + i].completed === true) ? CurrentDataTrue(DIV_ID.godmaster): CurrentDataFalse();
        FillHTML(DIV_ID.godmaster, HK_GODMASTER_DOORS_temp[i - 1][0], HK_GODMASTER_DOORS_temp[i - 1][1]);
    }

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.godmaster, FLEUR_DIVIDE);

    // ------------------------- Essential Things ----------------------------- //

    CheckAdditionalThings(DIV_ID.essential, HK_ESSENTIAL, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.essential, FLEUR_DIVIDE);

    // ------------------------- Achievements ----------------------------- //

    CheckAdditionalThings(DIV_ID.achievements, HK_ACHIEVEMENTS, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.achievements, FLEUR_DIVIDE);

    // ------------------------- Game Statistics ----------------------------- //

    CheckAdditionalThings(DIV_ID.statistics, HK_STATISTICS, HKPlayerData, HKWorldItems);

    // ------------------------- Hints ----------------------------- //

    CheckHintsTrue(DIV_ID.hints, HK_HINTS_temp, HKPlayerData, HKWorldItems);

    // ------------------------- Fill completion ----------------------------- //

    CompletionHTML(DIV_ID);

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
        (i === "hints") ? cl = " class='hidden'": cl = "";

        mp = " – " + jsObj[i].maxPercent + "%";
        if (!jsObj[i].hasOwnProperty("maxPercent") || i === "intro") mp = "";

        document.getElementById("generated").innerHTML += "<div id='" + id + "'" + cl + ">" + "</div>";
        document.getElementById(id).innerHTML += "<h2 id='" + h2id + "'>" + h2 + mp + "</h2>";
    }
}

/**
 * Replaces the h2 titles with a current percent/max percent values as read from the save file
 * @param {object} jsObj Object with HTML data to fill
 */
function CompletionHTML(jsObj) {

    let h2 = "";
    let h2id = "";
    let cp = ""; // current Percent
    let mp = ""; // max Percent

    for (let i in jsObj) {
        h2 = jsObj[i].h2;
        h2id = "h2-" + jsObj[i].id;

        (jsObj[i].hasOwnProperty("percent")) ? cp = jsObj[i].percent: cp = "";

        if (!jsObj[i].hasOwnProperty("maxPercent") || i === "intro") {
            mp = "";
        } else {

            if (i === "maskShards") {
                let perc = jsObj[i].percent;
                (perc % 4) ? cp = Math.floor(perc / 4): cp = perc / 4;
            } else if (i === "vesselFragments") {
                let perc = jsObj[i].percent;
                (perc % 3) ? cp = Math.floor(perc / 3): cp = perc / 3;
            }

            if (jsObj[i].hasOwnProperty("percent")) cp += "/";
            mp = " – " + cp + jsObj[i].maxPercent + "%";
        }

        document.getElementById(h2id).innerHTML = h2 + mp;
    }
}

/**
 * Generates and appends a new entry inside the HTML of a given ID
 * @param {object} divId object containing div ID and h2 title of the HTML element
 * @param {string} textPrefix Main name of the entry
 * @param {string} textSuffix Optional suffix after the main name
 */
function FillHTML(divId, textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    let icon = completionSymbol;
    let b = ["<b>", "</b>"];
    if (!textPrefix.length) b = ["", ""];

    let span = ["<span class='flex-row location hidden'>", "</span>"];
    if (divId === DIV_ID.hints) {
        span[0] = "<span>";
        icon = "";
    }

    let dash = "";
    if (textSuffix.length && textPrefix.length) dash = " — ";

    document.getElementById(divId.id).innerHTML += divStart + icon + b[0] + textPrefix + b[1] + span[0] + pSpan + dash + textSuffix + span[1] + divEnd;
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
 * Fills HTML with appriopriate number of health mask images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} masks Number of max health masks from the save
 * @param {number} permadeathMode Value of permadeathMode property. 0 = Normal, 1 = Steel Soul
 */
function CheckHealthMasks(divId, masks = 5, permadeathMode = 0) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Health:</span>";
    let maskImages = "";
    let maskNormal = `<img src='${healthMaskImage}' class='health-mask'>`;
    let maskSteel = `<img src='${healthMaskSteelImage}' class='health-mask'>`;
    let maskImg = "";

    (permadeathMode === 1) ? maskImg = maskSteel: maskImg = maskNormal;

    for (let i = 0; i < masks; i++) {
        maskImages += maskImg;
    }

    document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + maskImages + divEnd;
}

/**
 * Fills HTML with appriopriate number of soul orbs images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} totalSoul Number of max Soul reserve from the save. 99 = full Soul Orb
 */
function CheckSoulOrbs(divId, totalSoul) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Soul:</span>";
    let soulImages = "";
    let soulNormal = `<img src='${soulOrbImage}' class='soul-orb'>`;
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
function CheckGeo(divId, geoValue) {

    let icon = SYMBOL_EMPTY;
    let textFill = `<span>Geo:</span><img src='${geoImage}' class='geo-symbol'><b>${geoValue}</b>`;

    document.getElementById(divId.id).innerHTML += divStartCenter + icon + textFill + divEnd;
}

/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckIfDataTrue(divId, dataObject, playerData) {
    for (let i in dataObject) {
        switch (i) {
            case "gotCharm_36":
                // prevents green checkbox and adding 1% when only got one white fragment
                (playerData.gotQueenFragment === true && playerData.gotKingFragment === true) ? CurrentDataTrue(divId): CurrentDataFalse();
                break;
            default:
                (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
        }
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
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
        for (let j = 1; j <= 2; j++) {
            (playerData[i] >= j) ? CurrentDataTrue(divId): CurrentDataFalse();
            FillHTML(divId, dataObject[i][j][0], dataObject[i][j][1]);
        }
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(divId, dataObject, playerData) {
    for (let i in dataObject) {
        (playerData[i] > 0) ? CurrentDataTrue(divId): CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
    }
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
        orderedArray.push([i, dataObject[i][0], dataObject[i][1], false]);
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
function CheckAdditionalThings(divId, dataObject, playerData, worldData) {

    let textPrefix = "";
    let textSuffix = "";

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

    for (let i in dataObject) {
        textPrefix = dataObject[i][0];
        (dataObject[i][1]) ? textSuffix = dataObject[i][1]: textSuffix = "";

        let amount = 0;
        let countTotal = 0;
        let total = 0;

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
                    amount = CountMaps(dataObject[i][3]);
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
                textPrefix += ": " + countTotal;
                (amount >= dataObject[i][2]) ? CurrentDataTrue(): CurrentDataBlank();
                break;
            case "ghostCoins":
            case "rancidEggs":
            case "xunFlowerBrokeTimes":
                CurrentDataBlank();
                textPrefix += ": " + Math.abs(playerData[i]);
                if (i === "ghostCoins" && playerData[i] <= 0) CurrentDataTrue();
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
                total = playerData[dataObject[i][3]] + playerData[dataObject[i][4]];
                (total >= dataObject[i][2]) ? CurrentDataTrue(): CurrentDataBlank();
                textPrefix += ": " + total;
                break;
            case "bossDoorStateTier5":
                (playerData[i].completed === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "killsBindingSeal":
                (playerData[i] == 0) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "greyPrinceDefeated":
            case "zoteDead":
            case "nailsmithSpared":
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataBlank();
                break;
            default:
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
        }

        FillHTML(divId, textPrefix, textSuffix);
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
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
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
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else if (i === "dungDefenderOrHornet2") {
            if (playerData.defeatedDungDefender === true) {
                continue;
            } else if (playerData.hornetOutskirtsDefeated === true) {
                continue;
            } else { // if no Dung Defender or Hornet 2
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else if (i === "ismaTearOrShadeCloak") {
            if (playerData.hasAcidArmour === true) {
                continue;
            } else if (playerData.hasKingsBrand === true) {
                if (playerData.hasShadowDash === true) {
                    continue;
                } else { // if Kings Brand but no Shade Cloak
                    FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    return false;
                }
            } else { // if no Isma's Tear or Kings Brand
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else { // if anything from the hints list is not done
            FillHTML(divId, dataObject[i][0], dataObject[i][1]);
            return false;
        }
    } // end: for (let i in dataObject)
} // function CheckHintsTrue()

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */
function HKReadTextArea() {
    InitialHTMLPopulate(DIV_ID);

    let textAreaId = "save-area";
    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {

        let jsonObject = JSON.parse(contents);
        // console.log(jsonObject);
        if (jsonObject.hasOwnProperty("playerData")) HKCheckCompletion(jsonObject);
        // console.log(jsonObject);
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

    PrefillHTML(divIdObj);
    CurrentDataFalse();

    // Play Time
    CheckPlayTime(divIdObj.intro, 0)

    // Game Completion
    CheckCompletionPercent(divIdObj.intro, 0);

    // Fleur Divide
    AppendHTML(divIdObj.intro, FLEUR_DIVIDE);

    // Health Masks
    CheckHealthMasks(divIdObj.intro);

    // Soul Orbs
    CheckSoulOrbs(divIdObj.intro, 99);

    // Geo
    CheckGeo(divIdObj.intro, 0);

    // First Hint Only
    FillHTML(divIdObj.hints, HK_HINTS.fireballLevel[0], HK_HINTS.fireballLevel[1]);

    // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)
    let hkObjArray = [HK_BOSSES, HK_BOSSES_WORLD, HK_CHARMS, HK_EQUIPMENT, HK_NAILARTS, HK_MASKSHARDS, HK_MASKSHARDS_WORLD, HK_VESSELFRAGMENTS, HK_VESSELFRAGMENTS_WORLD, HK_DREAMERS, HK_COLOSSEUM, HK_DREAMNAIL, HK_WARRIORDREAMS, HK_GRIMMTROUPE, HK_LIFEBLOOD, HK_GODMASTER, HK_ESSENTIAL, HK_ACHIEVEMENTS, HK_STATISTICS];

    // duplicates and order important - must be the same as in hkObjArray[]
    let divObjArray = [divIdObj.bosses, divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster, divIdObj.essential, divIdObj.achievements, divIdObj.statistics];

    // Looped filling to reduce redundancy
    do {
        for (let parameter in hkObjArray[0]) {
            FillHTML(divObjArray[0], hkObjArray[0][parameter][0], hkObjArray[0][parameter][1]);
        }
        divObjArray.shift();
    } while (hkObjArray.shift());

    // Nail Upgrades Misc
    for (let i = 0; i < HK_NAILUPGRADES.length; i++) {
        FillHTML(divIdObj.nailUpgrades, HK_NAILUPGRADES[i][0], HK_NAILUPGRADES[i][1]);
    }

    // Spells Misc
    for (let i in HK_SPELLS) {
        for (let j = 1; j <= 2; j++) {
            FillHTML(divIdObj.spells, HK_SPELLS[i][j][0], HK_SPELLS[i][j][1]);
        }
    }

    // Nightmare King Grimm / Banishment Misc
    FillHTML(divIdObj.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");

    // Godmaster Doors Misc
    for (let i = 0; i < ObjectLength(HK_GODMASTER_DOORS); i++) {
        FillHTML(divIdObj.godmaster, HK_GODMASTER_DOORS[i][0], HK_GODMASTER_DOORS[i][1]);
    }

    // Fleur Dividers
    AppendHTML(divIdObj.godmaster, FLEUR_DIVIDE);
    AppendHTML(divIdObj.essential, FLEUR_DIVIDE);
    AppendHTML(divIdObj.achievements, FLEUR_DIVIDE);
}

/**
 * Toggles display of "hk-hints". On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxHintsToggle(param) {
    let checkboxId = document.getElementById("checkbox-hints");

    switch (param) {
        case "hide":
            document.getElementById("hk-hints").classList.add("hidden");
            checkboxId.value = "hints-off";
            checkboxId.checked = false;
            break;
        case "show":
            document.getElementById("hk-hints").classList.remove("hidden");
            checkboxId.value = "hints-on";
            checkboxId.checked = true;
            break;
        default:
            if (checkboxId.checked === false) {
                document.getElementById("hk-hints").classList.add("hidden");
                checkboxId.value = "hints-off";
            } else {
                document.getElementById("hk-hints").classList.remove("hidden");
                checkboxId.value = "hints-on";
            }
    }
}

/**
 * Toggles display of ".location" class. On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxLocationsToggle(param) {
    let checkboxId = document.getElementById("checkbox-locations");
    let allClassElements = document.querySelectorAll(".location");
    let length = allClassElements.length;

    switch (param) {
        case "hide":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.add("hidden");
            }
            checkboxId.value = "locations-off";
            checkboxId.checked = false;
            break;
        case "show":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.remove("hidden");
            }
            checkboxId.value = "locations-on";
            checkboxId.checked = true;
            break;
        default:
            if (checkboxId.checked === false) {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.add("hidden");
                }
                checkboxId.value = "locations-off";
            } else {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.remove("hidden");
                }
                checkboxId.value = "locations-on";
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

// Populate HTML at load (before img and css)
document.addEventListener("DOMContentLoaded", InitialHTMLPopulate(DIV_ID));

// Make functions global so they can be used on click and change events (for Webpack)
window.HKReadTextArea = HKReadTextArea;
window.InitialHTMLPopulate = InitialHTMLPopulate;
window.CheckboxLocationsToggle = CheckboxLocationsToggle;
window.CheckboxHintsToggle = CheckboxHintsToggle;