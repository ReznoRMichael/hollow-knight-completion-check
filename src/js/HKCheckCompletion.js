/* eslint-disable no-prototype-builtins */

/* ---------------- Load main Hollow Knight database files ------------------------------------------------------------------------ */

import HK from "./hk-database.js";

/* ----------------- Helper functions --------------------------------------------------------------------------------------------- */

import {
  GenerateInnerHTML,
  AppendHTML,
  CheckboxHintsToggle,
  CheckboxSpoilersToggle,
  StorageAvailable,
  Benchmark,
  benchmarkTimes
} from "./page-functions.js";

import {
  SetIconGreen,
  SetIconPartial,
  SetIconPartialJournal,
  SetIconRed,
  SetIconNone,
  SetIcon,
  ObjectLength,
  TranslateMapName,
  GenerateDatabaseEntries
} from "./hk-functions.js";

// ---------------- Load image files (necessary for Webpack) ----------------------------------------------------------------------- //

import HEALTH_MASK_IMAGE from "../img/health-mask.png";
import HEALTH_MASK_STEEL_IMAGE from "../img/health-mask-steel.png";
import SOUL_ORB_IMAGE from "../img/soul-orb.png";
import NOTCH_IMAGE from "../img/notch.png";
import NOTCH_FILLED_IMAGE from "../img/notch-filled.png";
import NOTCH_OVERCHARMED_IMAGE from "../img/notch-overcharmed.png";
import GEO_IMAGE from "../img/geo.png";
import GEO_SHADE_IMAGE from "../img/geo-shade.png";

// ---------------- Constants ------------------------------------------------------------------------------------------------------- //

// const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ "
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ "
// const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ "
const SYMBOL_CLOCK = "<i class='icon-clock'></i>"; // "🕑 "
const SYMBOL_EMPTY = "<span class='padding-left'></span>";
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";
const WIKI_LINK = "https://hollowknight.fandom.com/wiki/";

// ---------------- Variables ------------------------------------------------------------------------------------------------------- //

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

/* -------------------------- Functions ------------------------------------------------------------------------------------------- */

/**
 * Main Function. Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */
function HKCheckCompletion(jsonObject, benchStart = performance.now()) {

  // start benchmark
  // benchHKCCBegin = new Date();
  benchmarkTimes.CheckCompletion.timeStart = benchStart;

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

  // Generate database entries
  // console.log(GenerateDatabaseEntries(HKWorldItems, "Shiny", "Note", "corniferNote", "Cornifer#Locations"));

  /* Initialize DataChecker object for checking status of items in save file */
  let saveDataChecker = new DataChecker(jsonObject);

  // Pre-Cleaning and filling initial data (h2, id) needed for PrepareHTMLString()
  // PrefillHTML(HK.sections);

  // Prevents adding current percent data after each function call and resets what the analyzing has done to the original object. Prevents wrong data display after subsequent save analyzing.
  ResetCompletion(HK);

  // ============================================================================================================================= //

  // ---------------- Time Played ----------------------------------------------------------------------------------------------- //

  CheckPlayTime(HK.sections.intro, HKPlayerData.playTime);

  // ---------------- Game Completion Status ------------------------------------------------------------------------------------ //

  CheckCompletionPercent(HK.sections.intro, HKPlayerData);

  // ---------------- Game Completion Status ------------------------------------------------------------------------------------ //

  CheckSaveFileVersion(HK.sections.intro, HKPlayerData.version);

  // ---------------- Health Masks ---------------------------------------------------------------------------------------------- //

  CheckHealthMasks(HK.sections.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

  // ---------------- Soul Orbs ------------------------------------------------------------------------------------------------- //

  CheckSoulOrbs(HK.sections.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

  // ---------------- Charm Notches (Slots) ------------------------------------------------------------------------------------- //

  CheckNotches(HK.sections.intro, HKPlayerData.charmSlots, HKPlayerData.charmSlotsFilled);

  // ---------------- Geo Amount ------------------------------------------------------------------------------------------------ //

  CheckGeo(HK.sections.intro, HKPlayerData.geo, HKPlayerData.geoPool);

  // ---------------- Bosses (Base Game) ---------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.bosses, HK.sections.bosses.entries, HKPlayerData, HKWorldItems);

  // ---------------- Charms ---------------------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.charms, HK.sections.charms.entries, HKPlayerData);

  // ---------------- Colosseum of Fools ---------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.colosseum, HK.sections.colosseum.entries, HKPlayerData);

  // ---------------- Dreamers -------------------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.dreamers, HK.sections.dreamers.entries, HKPlayerData);

  // ---------------- Dream Nail and Essence ------------------------------------------------------------------------------------ //

  CheckIfDataTrue(HK.sections.dreamNail, HK.sections.dreamNail.entries, HKPlayerData);

  // ---------------- Equipment ------------------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.equipment, HK.sections.equipment.entries, HKPlayerData);

  // ---------------- Nail Upgrades --------------------------------------------------------------------------------------------- //

  CheckNailUpgrades(HK.sections.nailUpgrades, HK.sections.nailUpgrades.entries, HKPlayerData);

  // ---------------- Mask Shards ----------------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.maskShards, HK.sections.maskShards.entries, HKPlayerData, HKWorldItems);

  // ---------------- Nail Arts ------------------------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.nailArts, HK.sections.nailArts.entries, HKPlayerData);

  // ---------------- Spells ---------------------------------------------------------------------------------------------------- //

  CheckSpellLevel(HK.sections.spells, HK.sections.spells.entries, HKPlayerData);

  // ---------------- Vessel Fragments ------------------------------------------------------------------------------------------ //

  CheckIfDataTrue(HK.sections.vesselFragments, HK.sections.vesselFragments.entries, HKPlayerData, HKWorldItems);

  // ---------------- Warrior Dreams -------------------------------------------------------------------------------------------- //

  CheckWarriorDreams(HK.sections.warriorDreams, HK.sections.warriorDreams.entries, HKPlayerData);

  // ---------------- Grimm Troupe Content Pack --------------------------------------------------------------------------------- //

  CheckIfDataTrue(HK.sections.grimmTroupe, HK.sections.grimmTroupe.entries, HKPlayerData);

  // ---------------- Lifeblood Content Pack ------------------------------------------------------------------------------------ //

  CheckIfDataTrue(HK.sections.lifeblood, HK.sections.lifeblood.entries, HKPlayerData);

  // ---------------- Godmaster Content Pack ------------------------------------------------------------------------------------ //

  CheckIfDataTrue(HK.sections.godmaster, HK.sections.godmaster.entries, HKPlayerData);

  // ------------------------- Hunter's Journal --------------------------------------------------------------------------------- //
  /* Must be checked before Statistics (for correct entry numbers) */

  CheckHuntersJournal(HK, "huntersJournal", HKPlayerData);
  CheckHuntersJournal(HK, "huntersJournalOptional", HKPlayerData);

  // ------------------------- Essential Things --------------------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.essential, HK.sections.essential.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Achievements ------------------------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.achievements, HK.sections.achievements.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Collectibles -> Charm Notches ---------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.charmNotches, HK.sections.charmNotches.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Collectibles -> Grubs ---------------------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.grubs);

  // ------------------------- Collectibles -> Whispering Roots ---------------------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.whisperingRoots);

  // ------------------------- Collectibles -> Relics - Wanderer's Journal ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.relicsWanderersJournal);

  // ------------------------- Collectibles -> Relics - Hallownest Seal ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.relicsHallownestSeal);

  // ------------------------- Collectibles -> Relics - King's Idol ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.relicsKingsIdol);

  // ------------------------- Collectibles -> Relics - Arcane Egg ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.relicsArcaneEgg);

  // ------------------------- Collectibles -> Rancid Eggs ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.rancidEggs);

  // ------------------------- Collectibles -> Items ---------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.items, HK.sections.items.entries, HKPlayerData, HKWorldItems);
  
  // ------------------------- Geo Caches -> Geo Chests ----------------------------------------------------------- //

  saveDataChecker.checkItems(HK.sections.geoChests);

  // ------------------------- Geo Caches -> Geo Rocks ----------------------------------------------------------- //

  saveDataChecker.checkGeoRocks(HK.sections.geoRocks);

  // ------------------------- Secrets -> World Interactions ---------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.worldInteractions, HK.sections.worldInteractions.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Secrets -> Secret Rooms ---------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.secretRooms, HK.sections.secretRooms.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Game Statistics ---------------------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.statistics, HK.sections.statistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

  // ------------------------- Godhome Statistics ------------------------------------------------------------------------------- //

  CheckAdditionalThings(HK.sections.godhomeStatistics, HK.sections.godhomeStatistics.entries, HKPlayerData, HKWorldItems, HKSceneData);

  /* ------------------------- Pantheon Statistics ------------------------------------------------------------------------------ */

  CheckPantheon(HK, "pantheonOfTheMaster", HKPlayerData);
  CheckPantheon(HK, "pantheonOfTheArtist", HKPlayerData);
  CheckPantheon(HK, "pantheonOfTheSage", HKPlayerData);
  CheckPantheon(HK, "pantheonOfTheKnight", HKPlayerData);
  CheckPantheon(HK, "pantheonOfHallownest", HKPlayerData);

  CheckHallOfGods(HK, HKPlayerData);

  // ------------------------- Hints ---------------------------------------------------------------------------------------------- //

  CheckHintsTrue(HK.sections.hints, HK.sections.hints.entries, HKPlayerData, HKWorldItems);

  // ------------------------- Extended game completion check --------------------------------------------------------------------- //

  /* Percent completion is filled inside GenerateInnerHTML() using CompletionFill() */
  CheckExtendedCompletion(HK);

  // ------------------------- Indicate that the save file was loaded and analyzed correctly -------------------------------------- //

  HK.saveAnalyzed = true;

  // ------------------------- Generate everything on the page with updated values ------------------------------------------------ //

  GenerateInnerHTML(HK);

  // Prevents wrong checkbox behaviour (must run after everything is finished)
  CheckboxHintsToggle();
  CheckboxSpoilersToggle();

  /* focus the text area after analyzing the save, without scrolling the document (too slow) */
  /* document.getElementById("save-area").focus({preventScroll: true}); */

  // finish and show benchmark
  // benchHKCCEnd = new Date();
  benchmarkTimes.CheckCompletion.timeEnd = performance.now();
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
function CheckCompletionPercent(section, playerData) {

  let completionPercentage = Math.round(playerData.completionPercentage);
  let maxPercent = 0;

  /* Normal (current) game version behaviour: 112% */
  section.maxPercent = section.maxPercentDefault;
  maxPercent = section.maxPercentDefault;
  section.entries.gameCompletion.spoilerAfter = section.entries.gameCompletion.spoilerAfterDefault;

  section.percent = completionPercentage;
  section.entries.gameCompletion.spoiler = completionPercentage;

  /* Lifeblood behaviour: 107% */
  if (!playerData.hasOwnProperty("hasGodfinder")) {

    section.maxPercent = section.maxPercentLifeblood;
    maxPercent = section.maxPercentLifeblood;
    section.entries.gameCompletion.spoilerAfter = section.entries.gameCompletion.spoilerAfterLifeblood;
  }

  /* Grimm Troupe bahaviour: 106% */
  if (!playerData.hasOwnProperty("killedHiveKnight")) {

    section.maxPercent = section.maxPercentGrimmTroupe;
    maxPercent = section.maxPercentGrimmTroupe;
    section.entries.gameCompletion.spoilerAfter = section.entries.gameCompletion.spoilerAfterGrimmTroupe;
  }

  /* Base Game behaviour with no Content Packs: 100% */
  if (!playerData.hasOwnProperty("gotCharm_37")) {

    section.maxPercent = section.maxPercentBaseGame;
    maxPercent = section.maxPercentBaseGame;
    section.entries.gameCompletion.spoilerAfter = section.entries.gameCompletion.spoilerAfterBaseGame;
  }

  (completionPercentage >= maxPercent) ? SetIconGreen(section, "gameCompletion"): SetIconRed(section, "gameCompletion");

  /* let textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + section.maxPercent + " %)"; */
  // document.getElementById(section.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Calculates the amount of all green ticks and total entries. Saves them to database for later display.
 * @param {object} db reference to the main HK database
 */
function CheckExtendedCompletion(db) {

  let sections = db.sections;
  let entries = {};
  let gameCompletionExtended = db.sections.intro.entries.gameCompletionExtended;
  let intro = db.sections.intro;

  let amount = 0;
  let max = 0;

  for (let section in sections) {

    entries = sections[section].entries;

    switch (section) {

      /* Ignore these sections totally */
      case "intro":
      case "hints":
      case "huntersJournal":
      case "huntersJournalOptional":

        continue;

      default:

        // console.info("Section loop:", section);

        for (let entry in entries) {

          // console.info("Entry loop:", entry);

          switch (entry) {

            /* Do not count (ignore) these entries at all */
            case "oldNail":
            case "pantheonMaster": // Pantheons are counted in Godmaster section
            case "pantheonArtist":
            case "pantheonSage":
            case "pantheonKnight":
            case "pantheonHallownest":
            case "geoPool":
            case "dreamOrbs":
            case "charmsOwned":
            case "nailDamage":
            case "jinnEggsSold":
            case "xunFlowerBrokeTimes":
            case "itemsDiscovered":
            case "stagStationsOpened":
            case "areaMaps":
            case "killedMegaMossCharger":
            case "killedBigBuzzer":
            case "killedOblobble":
            case "killedLobsterLancer":
            case "killedFlukeMother":
            case "killedNailBros":
            case "killedPaintmaster":
            case "killedNailsage":
            case "killedHollowKnightPrime":
            case "killsBigBuzzer":
            case "whiteDefenderDefeated":
            case "greyPrinceDefeated":
            case "killedHollowKnight":
            case "killedFinalBoss":
            case "grubsCollected": /* Collectibles are counted in their own sections */
            case "whisperingRoots":
            case "relicsWandererJournal":
            case "relicsHallownestSeal":
            case "relicsKingsIdol":
            case "relicsArcaneEgg":
            case "rancidEggs":
            case "geoRocks":

              // console.info("Ignored:", entry);

              continue;
          }

          if (entries[entry].hasOwnProperty("icon")) {

            switch (entry) {

              /* Do not add these to total and done (they will be added as amount/max later instead) */
              case "grubsCollected":
              case "grubRewards":
              case "areaMaps":
              case "journalEntriesCompleted":
              case "journalNotesCompleted":
              case "whisperingRoots":
              case "relicsWandererJournal":
              case "relicsHallownestSeal":
              case "relicsKingsIdol":
              case "relicsArcaneEgg":
              case "geoRocks":
              case "whiteDefenderDefeats":
              case "greyPrinceDefeats":

                /* console.info("Ignored:", entry); */

                break;

              default:

                if (entries[entry].icon !== "none") {
                  intro.extendedCompletionTotal++;

                  // console.info("Counted Total:", entry);
                }
                /* else {
                  console.info("Not Counted Total:", entry);
                } */

                /* Missable Arcane Egg exception, subtract from total */
                if (entries[entry].icon === "none" && entry === "arcaneEggLifebloodCoreRoom") {

                  /* console.info(`${entry} has passed:`, entries[entry].icon); */

                  /* When got the Lifeblood Core charm, but didn't pick up the Arcane Egg */
                  if (sections.charms.entries.gotCharm_9.icon === "green") {
                    intro.extendedCompletionTotal--;

                    /* console.info(`${entry} completion Total subtracted`); */
                  }
                }

                switch (entries[entry].icon) {

                  case "red":
                  case "none":
                  case "partial":
                  case "partialJournal":
                    continue;

                  default:

                    intro.extendedCompletionDone++;

                    // console.info("Counted (Done):", entry);
                }
            }

            /* Skip disabled entries entirely from counting (subtract a point from Total) */
            if (entries[entry].hasOwnProperty("disabled") && entries[entry].disabled === true) {

              /* Do not subtract a point for WD/GPZ Defeats nr if they were not added to Total in the first place */
              if (entry === "greyPrinceDefeats" || entry === "whiteDefenderDefeats") {
                continue;
              }

              intro.extendedCompletionTotal--;

              // console.info("Subtracted Total:", entry);
            }
            /* Counting amount/max for several entries */
            else if (entries[entry].hasOwnProperty("amount") && entries[entry].hasOwnProperty("max")) {

              /* Skip counting 3000 Fountain Geo, too much */
              if (entry === "fountainGeo") {
                continue; // continue to next entry loop
              }

              amount = entries[entry].amount;
              max = entries[entry].max;

              /* Prevent overflowing the counter */
              if (amount > max) {
                amount = max;
              }

              intro.extendedCompletionDone += amount;
              intro.extendedCompletionTotal += max;

              // console.info(`${entry}: ${amount}/${max}`, entries[entry].name);

              amount = 0;
              max = 0;
            }
            /* Counting Geo Rocks */
            /* else if (entries[entry].hasOwnProperty("activated") && entries[entry].hasOwnProperty("max")) {

              amount = entries[entry].activated;
              max = entries[entry].max;

              // Check in case the player has discovered more than 205 (max) Geo Rocks
              if (max < entries[entry].discoveredTotal) {
                max = entries[entry].discoveredTotal;
              }

              intro.extendedCompletionDone += amount;
              intro.extendedCompletionTotal += max;

              console.info(`${entry}: ${amount}/${max}`, entries[entry].name);

              amount = 0;
              max = 0;
            } */
          }
        }

    }
  }

  if (intro.extendedCompletionDone >= intro.extendedCompletionTotal) {
    gameCompletionExtended.icon = "green";
  } else {
    gameCompletionExtended.icon = "red";
  }

  let percent = (intro.extendedCompletionDone / intro.extendedCompletionTotal) * 100;

  gameCompletionExtended.spoiler = intro.extendedCompletionDone;
  gameCompletionExtended.spoilerAfter = ` / ${intro.extendedCompletionTotal} = <b>${percent.toFixed(2)} %</b>`;
}

/**
 * Reads the "version" string from the save file and appends it to the selected div ID element
 * @param {object} section ID of the HTML element for data appending
 * @param {string} saveVersion Save File version in format 0.0.0.0
 */
function CheckSaveFileVersion(section, saveVersion = HK.sections.intro.entries.saveVersion.spoiler) {

  SetIconNone(section, section.entries.saveVersion.id);

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
        (playerData.gotQueenFragment === true && playerData.gotKingFragment === true) ? SetIconGreen(section, i): SetIconRed(section, i);
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
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */

          break;
        }

        // Checks for Nightmare King (4) or Banishment (5)
        if (i === "grimmChildLevel") {
          // (playerData.grimmChildLevel >= 4) ? SetIconGreen(section, i): SetIconRed(section, i);

          /* Check if Nightmare King or Banishment by looking at grimmChildLevel */
          switch (playerData[i]) {

            case 4:
              dataObject[i].name = dataObject[i].nameNightmareKing;
              dataObject[i].spoiler = dataObject[i].spoilerNightmareKing;
              dataObject[i].wiki = dataObject[i].wikiNightmareKing;

              SetIconGreen(section, i);

              break;

            case 5:
              dataObject[i].name = dataObject[i].nameBanishment;
              dataObject[i].spoiler = dataObject[i].spoilerBanishment;
              dataObject[i].wiki = dataObject[i].wikiBanishment;

              SetIconGreen(section, i);

              break;

            default:
              SetIconRed(section, i);
              dataObject[i].name = dataObject[i].nameDefault;
              dataObject[i].spoiler = dataObject[i].spoilerDefault;
              dataObject[i].wiki = dataObject[i].wikiDefault;
          }

          break;
        }

        if (i === "gotCharm_40") {
          SetIconRed(section, i);
          dataObject[i].name = dataObject[i].nameDefault;
          dataObject[i].spoiler = dataObject[i].spoilerDefault;
          dataObject[i].wiki = dataObject[i].wikiDefault;

          switch (playerData.grimmChildLevel) {

            case 1:
              if (playerData[i] === true) {
                dataObject[i].name = dataObject[i].nameGrimmchildP1;
                dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP1;
                dataObject[i].wiki = dataObject[i].wikiGrimmchild;

                SetIconGreen(section, i);
              }

              break;
            case 2:
              dataObject[i].name = dataObject[i].nameGrimmchildP2;
              dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP2;
              dataObject[i].wiki = dataObject[i].wikiGrimmchild;

              SetIconGreen(section, i);

              break;
            case 3:
              dataObject[i].name = dataObject[i].nameGrimmchildP3;
              dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP3;
              dataObject[i].wiki = dataObject[i].wikiGrimmchild;

              SetIconGreen(section, i);

              break;
            case 4:
              dataObject[i].name = dataObject[i].nameGrimmchildP4;
              dataObject[i].spoiler = dataObject[i].spoilerGrimmchildP4;
              dataObject[i].wiki = dataObject[i].wikiGrimmchild;

              SetIconGreen(section, i);

              break;
            case 5:
              dataObject[i].name = dataObject[i].nameCarefreeMelody;
              dataObject[i].spoiler = dataObject[i].spoilerCarefreeMelody;
              dataObject[i].wiki = dataObject[i].wikiCarefreeMelody;

              SetIconGreen(section, i);

              break;
            default:
              dataObject[i].name = dataObject[i].nameDefault;
              dataObject[i].spoiler = dataObject[i].spoilerDefault;
              dataObject[i].wiki = dataObject[i].wikiDefault;
          }

          break;
        }

        (playerData[i] === true) ? SetIconGreen(section, i): SetIconRed(section, i);

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
        (WorldDataActivated(dataObject[i].id, dataObject[i].sceneName, worldData)) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "pantheonMaster":
      case "pantheonArtist":
      case "pantheonSage":
      case "pantheonKnight":
        checkText = CheckGodmasterDoors(dataObject[i], playerData);

        if (checkText === "PropertyNotFound") {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
          break;

        } else if (checkText === "PantheonCompleted") {
          SetIconGreen(section, i);
          break;

        } else {
          SetIconRed(section, i);
        }
        break;

      default:
        (playerData[i] === true) ? SetIconGreen(section, i): SetIconRed(section, i);
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

  // let sFillText = "";

  for (let i in dataObject) {
    switch (i) {
      case "vengefulSpirit":
      case "shadeSoul":
        (playerData.fireballLevel >= dataObject[i].fireballLevel) ? SetIconGreen(section, i): SetIconRed(section, i);
        // sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
        break;
      case "desolateDive":
      case "descendingDark":
        (playerData.quakeLevel >= dataObject[i].quakeLevel) ? SetIconGreen(section, i): SetIconRed(section, i);
        // sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
        break;
      case "howlingWraiths":
      case "abyssShriek":
        (playerData.screamLevel >= dataObject[i].screamLevel) ? SetIconGreen(section, i): SetIconRed(section, i);
        // sFillText += PrepareHTMLString(section, dataObject[i].name, dataObject[i].spoiler, dataObject[i].wiki);
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
    (playerData[i] >= 2) ? SetIconGreen(section, i): SetIconRed(section, i);
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
    (playerData.nailSmithUpgrades >= i) ? SetIconGreen(section, nail[i]): SetIconRed(section, nail[i]);
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
        SetIconRed();
        if (orderedArray[i][4] === true) SetIconGreen(section);
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
      case "grubsCollected":
      case "grubRewards":
      case "charmsOwned":
      case "dreamOrbs":
      case "whisperingRoots":
      case "fountainGeo":
      case "nailDamage":
      case "journalEntriesCompleted":
      case "journalNotesCompleted":
      case "whiteDefenderDefeats":
      case "greyPrinceDefeats":
        if (i === "whisperingRoots") {
          amount = CountWorldItem("Dream Plant");
        } else {
          amount = playerData[i];
        }

        countTotal = amount;
        dataObject[i].amount = amount;

        if (i === "journalEntriesCompleted" || i === "journalNotesCompleted") {
          countTotal = `${amount} / ${playerData.journalEntriesTotal}`;
          dataObject[i].amountTotal = playerData.journalEntriesTotal;

          dataObject[i].spoiler = `${dataObject[i].spoilerDefault} (${dataObject[i].max} max)`;

          /* when Zote is dead, the max Journal entries will equal 4 less instead of 164. For the green tick */
          if (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true) {

            if (playerData.hasOwnProperty("killedGreyPrince")) {
              dataObject[i].max -= 4; // Subtract GPZ and 3 Zotelings from max
            }
            dataObject[i].spoiler = `${dataObject[i].spoilerDefault} (${dataObject[i].max} max)`; /* Change spoiler for less confusion */
          }

          /* when Grimm Troupe is banished, max Journal entries will be 1 or 2 less */
          if (playerData.hasOwnProperty("destroyedNightmareLantern") && playerData.destroyedNightmareLantern === true) {

            dataObject[i].max--; // Subtract Nightmare King from max

            /* if the player didn't defeat any Grimmkin Nightmare before banishing, subtract it from max */
            if (playerData.killedFlameBearerLarge === false) {
              dataObject[i].max--; // Subtract Grimmkin Nightmare from max
              dataObject[i].spoiler = `${dataObject[i].spoilerDefault} (${dataObject[i].max} max)`; /* Change spoiler for less confusion */
            }
          }
        }

        /* if (i === "grubsCollected") {
          LogMissingGrubs();
        } */

        /* textPrefix += `: ${countTotal}`; */

        if (i === "grubRewards") {
          dataObject[i].amountTotal = playerData.grubsCollected;
          /* textPrefix += ` / ${playerData.grubsCollected}`; */
        }

        if (i === "greyPrinceDefeats") {
          // backwards compatibility with earlier game versions
          if (playerData.hasOwnProperty(i) === false) {
            SetIconNone(section, i);
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
            SetIconNone(section, i);
            dataObject[i].disabled = true;
            // textPrefix = `<del>${dataObject[i].name}</del>`;
            break;
          }
        }

        if (amount >= dataObject[i].max) {

          SetIconGreen(section, i);
        } else if (amount > 0) {

          SetIconPartial(section, i);
        } else {

          SetIconNone(section, i);
        }
        break;

      case "geoPool":
      case "rancidEggs":
      case "jinnEggsSold":
      case "xunFlowerBrokeTimes":
      case "soldTrinket1":
      case "soldTrinket2":
      case "soldTrinket3":
      case "soldTrinket4":
        // textPrefix += ": " + Math.abs(playerData[i]);
        amount = Math.abs(playerData[i]);

        dataObject[i].amount = amount;

        if (amount > 0 && i == "geoPool") {
          SetIconPartial(section, i);
        } else {
          SetIconNone(section, i);
        }

        if (i === "jinnEggsSold") {
          // fade out if not on Steel Soul
          if (playerData.permadeathMode < 1) {

            SetIconNone(section, i);
            dataObject[i].disabled = true;
          }
        }

        break;

      case "tukDungEgg":

        // fade out if on Steel Soul
        if (playerData.permadeathMode > 0) {

          SetIconNone(section, i);
          dataObject[i].disabled = true;

          continue;
        }

        (playerData[i] === true) ? SetIconGreen(section, i): SetIconRed(section, i);

        break;

      case "bankerBalance":

        amount = playerData[i];

        /* When value is negative, reset to zero */
        if (amount < 0) {
          amount = 0;
        }

        dataObject[i].amount = amount;

        SetIconNone(section, i);

        break;

      case "millibelleLeft":

        if (playerData.bankerTheft >= 1) {
          SetIconGreen(section, i);
        } else {
          SetIconRed(section, i);
        }

        break;

      case "millibelleCheckedStand":

        if (playerData.bankerTheft >= 2) {
          SetIconGreen(section, i);
        } else {
          SetIconRed(section, i);
        }

        break;

      case "millibelleReclaimedAllGeo":

        if (playerData.bankerTheft >= 1 && playerData.bankerBalance <= 0) {
          SetIconGreen(section, i);
        } else {
          SetIconRed(section, i);
        }

        break;

      /* case "geoRocks":
        discoveredTotal = sceneData.geoRocks.length;

        notActivated = CountGeoRocks(discoveredTotal, "unbroken");
        activated = CountGeoRocks(discoveredTotal, "broken");

        dataObject[i].discoveredTotal = discoveredTotal;
        dataObject[i].notActivated = notActivated;
        dataObject[i].activated = activated;

        if (activated >= dataObject[i].max) {
          SetIconGreen(section, i);
        } else {
          SetIconNone(section, i);
        }
        break;
      */
      case "itemsDiscovered":
        discoveredTotal = sceneData.persistentBoolItems.length;

        notActivated = CountItems(discoveredTotal, "notActivated");
        activated = CountItems(discoveredTotal, "active");

        dataObject[i].discoveredTotal = discoveredTotal;
        dataObject[i].notActivated = notActivated;
        dataObject[i].activated = activated;

        /* textPrefix += `: ${notActivated} | ${activated} | ${discoveredTotal}`; */
        SetIconNone(section, i);
        break;

      case "shopkeeperKey":
        (playerData.hasSlykey === true || playerData.gaveSlykey === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "elegantKey":
        (playerData.hasWhiteKey === true || playerData.usedWhiteKey === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "loveKey":
        (playerData.hasLoveKey === true || playerData.openedLoveDoor === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "paleOreSeer": // #2
        (playerData.dreamReward3 === true) ? SetIconGreen(section, i): SetIconRed(section, i);
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
      case "throneRoomLoreTablet":
      case "towerOfLoveSecretRoom":
      case "weaversDenSecretRoom1":
      case "weaversDenSecretRoom2":
      case "cityCrest":
        (FindWorldItem(dataObject[i].id, dataObject[i].sceneName)) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "grimmTentSecretRoom":

        /* Backwards compatibility with older save files */
        if (playerData.hasOwnProperty("destroyedNightmareLantern") === false) {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
        } else if (FindWorldItem(dataObject[i].id, dataObject[i].sceneName)) {
          SetIconGreen(section, i);
        } else {

          /* When the Ritual has been completed or Grimm Troupe has been Banished, the secret is no longer possible to discover */
          if (playerData.grimmChildLevel >= 4) {
            SetIconNone(section, i);
            dataObject[i].disabled = true;
          } else {
            SetIconRed(section, i);
          }
        }
        
        break;

      case "relicsWandererJournal":
      case "relicsHallownestSeal":
      case "relicsKingsIdol":
      case "relicsArcaneEgg":
        total = playerData[dataObject[i].nameHeld] + playerData[dataObject[i].nameSold];

        if (total >= dataObject[i].max) {

          SetIconGreen(section, i);
        } else if (total > 0) {

          SetIconPartial(section, i);
        } else {

          SetIconNone(section, i);
        }

        dataObject[i].amount = total;

        /* textPrefix += ": " + total; */
        break;

      case "arcaneEggLifebloodCoreRoom":
        (FindWorldItem(dataObject[i].id, dataObject[i].sceneName)) ? SetIconGreen(section, i): SetIconNone(section, i);
        break;

      case "pantheonHallownest":
        if (playerData.hasOwnProperty("bossDoorStateTier5") === false) {

          SetIconNone(section, i);
          dataObject[i].disabled = true;
        } else {
          (playerData.bossDoorStateTier5.completed === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        }
        break;

      case "killsBindingSeal":
        if (playerData.hasOwnProperty(i) === false) {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
          break;
        }
        (playerData[i] == 0) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "killsBigBuzzer":
        (playerData[i] == 0) ? SetIconGreen(section, i): SetIconRed(section, i);
        break;

      case "killedVoidIdol_1":
        if (playerData.hasOwnProperty(i) === false) {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
          break;
        }
        (playerData[i] === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        if (playerData[i] === false && (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) SetIconGreen(section, i);
        break;

      case "killedVoidIdol_2":
        if (playerData.hasOwnProperty(i) === false) {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
          break;
        }
        (playerData[i] === true) ? SetIconGreen(section, i): SetIconRed(section, i);
        if (playerData[i] === false && playerData.killedVoidIdol_3 === true) SetIconGreen(section, i);
        break;

      case "greyPrinceDefeated":
        // compatibility with earlier game versions
        if (playerData.hasOwnProperty(i) === false) {
          SetIconNone(section, i);
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
          break;
        } else if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {
          dataObject[i].disabled = true;
          /* textPrefix = `<del>${textPrefix}</del>`; */
        }
        (playerData[i] === true) ? SetIconGreen(section, i): SetIconNone(section, i);
        if (playerData.zoteRescuedBuzzer === true && playerData[i] === false) SetIconRed(section, i);
        break;

      case "zoteStatus":
        SetIconRed(section, i);
        dataObject[i].name = dataObject[i].nameDefault;
        dataObject[i].spoiler = dataObject[i].spoilerDefault;

        if (playerData.zoteDead === true) {
          /* textPrefix = dataObject[i].nameNeglect;
          textSuffix = dataObject[i].spoilerNeglect; */
          dataObject[i].name = dataObject[i].nameNeglect;
          dataObject[i].spoiler = dataObject[i].spoilerNeglect;

          SetIconGreen(section, i);

        } else if (playerData.killedZote === true) {
          /* textPrefix = dataObject[i].nameRivalry;
          textSuffix = dataObject[i].spoilerRivalry; */
          dataObject[i].name = dataObject[i].nameRivalry;
          dataObject[i].spoiler = dataObject[i].spoilerRivalry;

          SetIconGreen(section, i);

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
        SetIconRed(section, i);
        dataObject[i].name = dataObject[i].nameDefault;
        dataObject[i].spoiler = dataObject[i].spoilerDefault;

        if (playerData.nailsmithKilled === true) {
          /* textPrefix = dataObject[i].namePurity;
          textSuffix = dataObject[i].spoilerPurity; */
          dataObject[i].name = dataObject[i].namePurity;
          dataObject[i].spoiler = dataObject[i].spoilerPurity;

          SetIconGreen(section, i);

        } else if (playerData.nailsmithConvoArt === true) {
          /* textPrefix = dataObject[i].nameHappyCouple;
          textSuffix = dataObject[i].spoilerHappyCouple; */
          dataObject[i].name = dataObject[i].nameHappyCouple;
          dataObject[i].spoiler = dataObject[i].spoilerHappyCouple;

          SetIconGreen(section, i);

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

      case "openedTownBuilding":
      case "openedCrossroads":
      case "openedGreenpath":
      case "openedRuins1":
      case "openedRuins2":
      case "openedFungalWastes":
      case "openedRoyalGardens":
      case "openedRestingGrounds":
      case "openedDeepnest":
      case "openedHiddenStation":
      case "openedStagNest":

        /* backwards compatibility with earlier game versions */
        if (playerData.hasOwnProperty(i) === false) {

          SetIconNone(section, i);
          dataObject[i].disabled = true;

          break;

        } else if (playerData[i] === true) {

          SetIconGreen(section, i);

          /* Create amount property before incrementing (avoids NaN) */
          if (!dataObject.stagStationsOpened.hasOwnProperty("amount")) {
            dataObject.stagStationsOpened.amount = 0;
          }

          /* increment the stag stations amount by one */
          dataObject.stagStationsOpened.amount++;

        } else {
          SetIconRed(section, i);
        }

        break;

      case "stagStationsOpened":

        /* backwards compatibility check */
        if (!playerData.hasOwnProperty("openedHiddenStation")) {

          /* Subtract one from maximum for extended completion counting */
          dataObject[i].max--;
        }

        if (dataObject[i].amount >= dataObject[i].max) {
          SetIconGreen(section, i);
        } else {
          SetIconRed(section, i);
        }

        break;

      case "mapCrossroads":
      case "mapGreenpath":
      case "mapFungalWastes":
      case "mapCliffs":
      case "mapCity":
      case "mapMines":
      case "mapWaterways":
      case "mapRestingGrounds":
      case "mapAbyss":
      case "mapOutskirts":
      case "mapFogCanyon":
      case "mapRoyalGardens":
      case "mapDeepnest":

        if (playerData[i] === true) {

          SetIconGreen(section, i);

          /* Create amount property before incrementing (avoids NaN) */
          if (!dataObject.areaMaps.hasOwnProperty("amount")) {
            dataObject.areaMaps.amount = 0;
          }

          /* increment the area maps amount by one */
          dataObject.areaMaps.amount++;

        } else {
          SetIconRed(section, i);
        }

        break;

      case "areaMaps":

        if (dataObject[i].amount >= dataObject[i].max) {
          SetIconGreen(section, i);
        } else {
          SetIconRed(section, i);
        }

        break;

      /* Unobtainable Unbreakable Charms after Grimm Troupe Banishment */
      case "fragileGreed_unbreakable":
      case "fragileHealth_unbreakable":
      case "fragileStrength_unbreakable":

        /* backwards compatibility with earlier game versions */
        if (playerData.hasOwnProperty(i) === false) {

          SetIconNone(section, i);
          dataObject[i].disabled = true;

        } else if (playerData[i] === true) {
          SetIconGreen(section, i);
        } else {

          /* If player doesn't have an Unbreakable Charm, and they Banished the Grimm Troupe, the entry needs to be disabled */
          if (playerData.hasOwnProperty("destroyedNightmareLantern") && playerData.destroyedNightmareLantern === true) {
            SetIconNone(section, i);
            dataObject[i].disabled = true;
          } else {
            SetIconRed(section, i);
          }
        }

        break;

      default:

        // backwards compatibility with earlier game versions
        if (playerData.hasOwnProperty(i) === false) {

          SetIconNone(section, i);
          dataObject[i].disabled = true;
          // textPrefix = `<del>${dataObject[i].name}</del>`;
          break;

        } else if (playerData[i] === true) {

          SetIconGreen(section, i);
        } else {

          SetIconRed(section, i);
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
   * Counts the total amount of Geo Rocks Unbroken or Broken. Logs to console all the Unbroken IDs and Map locations.
   * @param {number} arrayLength How many items the Geo Rocks array is currently storing (for iteration)
   * @param {string} mode Choose which Geo Rocks to count (broken or unbroken)
   */
  /* function CountGeoRocks(arrayLength, mode = "unbroken") {

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
  } */

  /**
   * Counts the amount of in-game Interactables Activated or Not Activated. Logs to console all the Not Activated IDs and Map locations.
   * @param {number} arrayLength How many items the Interactables array is currently storing (for iteration)
   * @param {string} mode Choose which Interactables to count (notActivated or activated)
   */
  function CountItems(arrayLength, mode = "notActivated") {

    let countTotal = 0;
    let itemsLog = [];

    if (mode === "notActivated") {

      /* 
      let list = new ItemListBox(worldData);
      
      */

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
        console.groupCollapsed(`%cInteractables Not Activated (${countTotal}):`, "color: #16c60c; font-weight: 700;");

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
  /* function LogMissingGrubs() {

    let rescuedGrubsSceneList = [];

    for (let i = 0, length = worldData.length; i < length; i++) {
      if (worldData[i].id.includes("Grub Bottle")) {
        if (worldData[i].activated === true) {
          // There are 3 duplicates of the same map scene name from older game save files. Prevents adding duplicates
          //  if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (1)") {
          //     continue;
          // } else if (worldData[i].sceneName === "Ruins2_11" && worldData[i].id === "Grub Bottle (2)") {
          //     continue;
          // } else { 
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
  } */
} // end function CheckAdditionalThings()

/**
 * Checks and fills all the 7 locations of Mr Mushroom.
 * @param {object} section ID of the HTML element for data appending
 * @param {object} entry object containing the Mr Mushroom name and spoilers/locations
 * @param {number} mrMushroomState playerData.mrMushroomState read from the save file. (0-8)
 */
function CheckMrMushroomState(section, entry, mrMushroomState = 0) {

  if (mrMushroomState >= entry.state) {
    SetIconGreen(section, `mrMushroomState${entry.state - 1}`);
  } else {
    SetIconRed(section, `mrMushroomState${entry.state - 1}`);
  }
}

/**
 * Checks and marks all the Hunter's Journal creatures entries with amounts, partial completion etc.
 * @param {object} db Reference to the HK database
 * @param {object} playerData Reference to the player's save data
 */
function CheckHuntersJournal(db, sectionName, playerData) {

  let section = db.sections[sectionName];
  let entries = db.sections[sectionName].entries;
  let entriesStatistics = db.sections.statistics.entries;
  let name = "";
  let nameDefault = "";
  let amountKillsLeft = 0;

  for (let entry in entries) {

    name = entries[entry].nameDefault;
    nameDefault = entries[entry].nameDefault;

    entries[entry].name = nameDefault;

    /* Entry Shade always unlocked */
    if (entry === "ShadeJournal") {
      SetIconGreen(section, entry);

      /* Proceed to next entry immediately */
      continue;
    }

    if (playerData.hasOwnProperty(`kills${entry}`)) {

      switch (entry) {

        case "GreyPrince":
        case "ZotelingBalloon":
        case "ZotelingHopper":
        case "ZotelingBuzzer":

          /* When Zote == OFF (Neglect route), fade the entry and move to the next iteration */
          if (playerData.zoteDead === true || (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true)) {

            entries[entry].disabled = true;
            entries[entry].name = nameDefault;
            SetIconNone(section, entry);

            continue;
          }

          break;

        case "FlameBearerLarge":

          /* If the troupe was banished and the player didn't defeat any Grimmkin Nightmare, then it's entry cannot be obtained on this save */
          if (playerData.destroyedNightmareLantern === true && playerData.killedFlameBearerLarge === false) {

            entries[entry].disabled = true;
            entries[entry].name = nameDefault;
            SetIconNone(section, entry);

            continue;
          }

          break;

        case "NightmareGrimm":

          /* if the troupe was banished, the Nightmare King entry cannot be obtained on this save */
          if (playerData.destroyedNightmareLantern === true) {

            entries[entry].disabled = true;
            entries[entry].name = nameDefault;
            SetIconNone(section, entry);

            continue;
          }

          break;
      }

      amountKillsLeft = playerData[`kills${entry}`];

      /* When killed at least 1, the entry has a gray symbol */
      if (playerData[`killed${entry}`] === true) {

        SetIconPartialJournal(section, entry);

        /* When not killed, the entry is undiscovered */
      } else {

        SetIconRed(section, entry);
      }

      /* When the Hunter's Note is unlocked, the entry has a green symbol */
      if (amountKillsLeft === 0) {

        SetIconGreen(section, entry);

        /* If not, show how many remain to defeat in the name */
      } else {

        name += ` (${amountKillsLeft})`;
        entries[entry].name = name;
      }

      /* Void Idol backwards compatibility */
      if (entry === "VoidIdol_1") {
        if (playerData.killedVoidIdol_1 === false &&
          (playerData.killedVoidIdol_2 === true || playerData.killedVoidIdol_3 === true)) {

          SetIconGreen(section, entry);
          entries[entry].name = nameDefault;
        }
      }

      /* Earlier save files backwards compatibility (no undefined) */
    } else {

      amountKillsLeft = 0;
      entries[entry].disabled = true;
      entries[entry].name = name;

      /* Subtract one from maximum of journal entries (for extended completion and green icons) */
      switch (entry) {
        case "VoidIdol_1":
        case "VoidIdol_2":
        case "VoidIdol_3":
        case "BindingSeal":
        case "GodseekerMask":

          break;

        default:

          entriesStatistics.journalEntriesCompleted.max--;
          entriesStatistics.journalNotesCompleted.max--;
      }

      SetIconNone(section, entry);
    }
  }
}


function CheckPantheon(db, sectionName, playerData) {

  let section = db.sections[sectionName];
  let property = db.sections[sectionName].property;
  let entries = db.sections[sectionName].entries;

  for (let entry in entries) {

    /* Backwards compatibility, disable and skip to next when not found */
    if (!playerData.hasOwnProperty(property)) {

      SetIconNone(section, entry);
      entries[entry].disabled = true;

      continue;
    }

    if (playerData[property][entry] === true) {

      switch (entry) {

        case "boundNail":
          SetIcon(section, entry, "bindingNail");
          break;

        case "boundShell":
          SetIcon(section, entry, "bindingShell");
          break;

        case "boundCharms":
          SetIcon(section, entry, "bindingCharms");
          break;

        case "boundSoul":
          SetIcon(section, entry, "bindingSoul");
          break;

        case "allBindings":
          SetIcon(section, entry, "bindingAll");
          break;

        default:
          SetIconGreen(section, entry);
      }
    } else {
      SetIconRed(section, entry);
    }
  }
}


function CheckHallOfGods(db, playerData) {

  let section = db.sections.hallOfGods;
  let entries = db.sections.hallOfGods.entries;
  let id = "";
  let check = "";
  let isUnlocked = false;

  for (let entry in entries) {

    id = entries[entry].id;

    /* Backwards compatibility, disable and skip to next when not found */
    if (!playerData.hasOwnProperty(`statueState${id}`)) {

      SetIconNone(section, entry);
      entries[entry].disabled = true;

      continue;
    }

    check = entries[entry].check;
    isUnlocked = playerData[`statueState${id}`].isUnlocked;

    switch (entry) {

      case "GreyPrinceUnlocked":
      case "GreyPrinceAttuned":
      case "GreyPrinceAscended":
      case "GreyPrinceRadiant":

        /* When Zote OFF, disable entry and skip to next entry */
        if (playerData.zoteRescuedBuzzer === false && playerData.hasWalljump === true) {

          SetIconNone(section, entry);
          entries[entry].disabled = true;

          continue;
        }
    }

    if (playerData[`statueState${id}`][check] === true) {

      switch (check) {

        case "isUnlocked":
          SetIconGreen(section, entry);
          break;

        case "completedTier1":
          SetIcon(section, entry, "attuned");
          break;

        case "completedTier2":
          SetIcon(section, entry, "ascended");
          break;

        case "completedTier3":
          SetIcon(section, entry, "radiant");
          break;

        default:
          SetIcon(section, entry, "partial");
          break;
      }

    }
    /* When boss is only unlocked, other entries get a gray icon (awaiting completion) */
    else if (isUnlocked) {
      SetIcon(section, entry, "partial");
    }
    /* When not unlocked, every entry gets a red icon */
    else {
      SetIconRed(section, entry);
    }

  } /* end for (let entry in entries) */

}


/**
 * Checks, validates and shows hints to the player depending on their save progression, in chronological order. Shows only hint for the last uncompleted event. If Hollow Knight is defeated, shows a dummy text.
 * @param {object} section object containing div hints ID and h2 title
 * @param {object} dataObject object containing all hints data
 * @param {object} playerData object containing HK Player Data to look in
 * @param {object} worldData object containing HK World Data to look in
 * @returns {boolean} true when defeated Hollow Knight, false if not
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
  benchmarkTimes.HKReadTextArea.timeStart = performance.now();

  let contents = document.getElementById(textAreaId).value;

  if (contents.length) {

    // starts the main HTML generating function GenerateInnerHTML() and ensures proper checkbox behaviour
    InitializeHTMLPopulation(HK);

    try {
      let jsonObject = JSON.parse(contents);
      // console.log(jsonObject);
      if (jsonObject.hasOwnProperty("playerData")) {

        HKCheckCompletion(jsonObject);
      }

      // end benchmark and show results
      benchmarkTimes.HKReadTextArea.timeEnd = performance.now();

      let result = benchmarkTimes.HKReadTextArea.timeEnd - benchmarkTimes.HKReadTextArea.timeStart;

      console.info(`HKReadTextArea() time (ms) = %c${result.toFixed(2)}`, `color: #008cdc; font-weight: 700;`);

    } catch (error) {
      HK.saveAnalyzed = false;
      alert(`This seems like not a valid Hollow Knight save.\n${error}`);
      console.info(`This seems like not a valid Hollow Knight save.\n${error}`);
    }
  } else {
    /* reset timer */
    benchmarkTimes.HKReadTextArea.timeStart = 0;
  }
}

/**
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} db JavaScript Object containing all HTML IDs to populate
 */
function InitializeHTMLPopulation(db) {

  GenerateInnerHTML(db);

  // Check local storage first to set proper checkbox state before the below functions start (default is always unchecked)
  if (StorageAvailable('localStorage')) {
    if (localStorage.getItem("hkCheckboxHints") === "checked") document.getElementById("checkbox-hints").checked = true;
    if (localStorage.getItem("hkCheckboxSpoilers") === "checked") document.getElementById("checkbox-spoilers").checked = true;
  }

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

  /* Bring Extended Completion to default values (0) */
  let gameCompletionExtended = db.sections.intro.entries.gameCompletionExtended;
  let intro = db.sections.intro;

  intro.extendedCompletionDone = 0;
  intro.extendedCompletionTotal = 0;
  gameCompletionExtended.spoiler = 0;
  gameCompletionExtended.spoilerAfter = "";

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

          if (entries[entry].hasOwnProperty("max")) {
            entries[entry].max = entries[entry].maxDefault;
          }
        }
    }
  }
}

/* -------------------------- Classes --------------------------------------------------------------------------------------- */

class DataChecker {

  /**
   * Used for checking and verifying data (like Grubs, Items or Geo Rocks) inside a player's save file.
   * Pass a save to the object and it will be split automatically to playerData, boolData and geoRocksData.
   * @param {object} saveFile The whole player's save file, in JSON format
   */
  constructor(saveFile) {
    this.saveFile = saveFile;
    this.playerData = saveFile.playerData;
    this.boolData = saveFile.sceneData.persistentBoolItems;
    this.geoRocksData = saveFile.sceneData.geoRocks;
  }

  /**
   * Verifies if a specific Collectible is found in boolData and returns true/false.
   * @param {string} id the Collectible's id in the database.
   * @param {string} sceneName the Collectible's sceneName in the database.
   * @returns {boolean}
   */
  _FindItem(entry = {}) {

    for (let i = 0, length = this.boolData.length; i < length; i++) {
      if (this.boolData[i].id === entry.id &&
        this.boolData[i].sceneName === entry.sceneName &&
        this.boolData[i].activated === true) {
        return true;
      }
    }

    return false;
  } // end _FindItem

  /**
   * Verifies if a specific Geo Rock is destroyed and returns true/false.
   * @param {string} id the Geo Rock's id in the database.
   * @param {string} sceneName the Geo Rock's sceneName in the database.
   * @returns {boolean}
   */
  _FindGeoRock(entry = {}) {

    for (let i = 0, length = this.geoRocksData.length; i < length; i++) {
      if (this.geoRocksData[i].id === entry.id &&
        this.geoRocksData[i].sceneName === entry.sceneName &&
        this.geoRocksData[i].hitsLeft === 0) {
        return true;
      }
    }

    return false;
  } // end _FindGeoRock

  /**
   * Verifies the status of all items in a given section (e.g. Grubs or Whispering Roots) from the database.
   * @param {object} section Provide a section object to check.
   */
  checkItems(section) {
    this.section = section;
    this.entries = section.entries;

    for (let entry in this.entries) {
      
      switch(entry) {

        // The Collector: Tower of Love Grubs activation Bug in the game - needs a workaround.
        // All 3 Grubs in the Tower of Love must be treated as one.
        case "grub33":
        case "grub34":

          if (this.entries.grub32.icon === "green") {
            SetIconGreen(this.section, entry);
          } else {
            SetIconRed(this.section, entry);
          }

          break;

        // playerData activation checks true/false
        case "hallownestSeal17": // The Seer's Essence Reward - Hallownest Seal
        case "arcaneEgg2": // The Seer's Essence Reward - Arcane Egg
        case "rancidEgg20": // Sly's Rancid Egg shop item

          if (this.playerData[this.entries[entry].id] === true) {
            SetIconGreen(this.section, entry);
          } else {
            SetIconRed(this.section, entry);
          }

          break;

        // Tuk's Rancid Egg - Normal or Steel Soul mode behaviour
        case "rancidEgg21":

          // Steel Soul
          if (this.playerData.permadeathMode > 0) {

            // id: "Shiny Item", sceneName: "Waterways_03"
            if (this._FindItem(this.entries[entry])) {
              SetIconGreen(this.section, entry);
            } else {
              SetIconRed(this.section, entry);
            }

            // Set Steel Soul text description
            this.entries[entry].spoiler = this.entries[entry].spoilerSteelSoul;
          }
          // Normal Mode
          else {

            // playerData.tukDungEgg
            if (this.playerData[this.entries[entry].idPlayerData] === true) {
              SetIconGreen(this.section, entry);
            } else {
              SetIconRed(this.section, entry);
            }

            // Set Normal Mode text description
            this.entries[entry].spoiler = this.entries[entry].spoilerNormal;
          }

          break;

        // missable Arcane Egg in Lifeblood Core Room
        case "arcaneEgg4":

          if (this._FindItem(this.entries[entry])) {
            SetIconGreen(this.section, entry);
          }
          // When got the Lifeblood Core charm, but didn't pick up the Arcane Egg
          else if (this.playerData.gotCharm_9 === true) {
            SetIconNone(this.section, entry);
            this.entries[entry].disabled = true;
          } else {
            SetIconRed(this.section, entry);
          }

          break;

        // boolData activation checks
        default:

          if (this._FindItem(this.entries[entry])) {
            SetIconGreen(this.section, entry);
          } else {
            SetIconRed(this.section, entry);
          }
      }
    }
  } // end checkItems

  /**
   * Verifies the status of all Geo Rocks from the database.
   * @param {object} section Provide a Geo Rocks section object to check.
   */
   checkGeoRocks(section) {
    this.section = section;
    this.entries = section.entries;

    for (let entry in this.entries) {
      
      switch(entry) {

        default:

          if (this._FindGeoRock(this.entries[entry])) {
            SetIconGreen(this.section, entry);
          } else {
            SetIconRed(this.section, entry);
          }
      }
    }
  } // end checkGeoRocks

} // end class DataChecker

/* ----------------------- Event Listeners -------------------------- */

// Populate HTML at load (before img and css)
document.addEventListener("DOMContentLoaded", () => {
  InitializeHTMLPopulation(HK);
});

// Analyze Text button
document.getElementById("save-area-read").addEventListener("click", () => {
  HKReadTextArea("save-area");
}, false);

export {
  // to use in LoadSaveFile.js for auto-analyzing file after decoding
  HKCheckCompletion
};