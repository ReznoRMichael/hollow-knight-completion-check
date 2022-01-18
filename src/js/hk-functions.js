/* ---------------- Load main Hollow Knight database files ----------------- */

import MAP from "./hk-dictionary.js";

/* -------------------------- Functions ----------------------------- */

/**
 * Switches global variable to a "completed" symbol. Adds +1 or +2 to percent property.
 */
 function SetIconGreen(section = {}, entry = "") {

  /* Increase section percentage except the Game Status and Hints sections */
  switch (section.id) {

    case "hk-intro":
    case "hk-hints":
      break;

    case "hk-equipment":

      // double % for equipment
      section.percent += 2;
      break;

    default:
      section.percent++;
  }

  section.entries[entry].icon = "green";
}

/**
 * Switches global variable to a "partially completed" symbol (prevents blurring the textPrefix).
 */
function SetIconPartial(section = {}, entry = "") {

  section.entries[entry].icon = "partial";
}

/**
 * Switches global variable to a "partially completed" symbol (prevents blurring whole entry).
 */
function SetIconPartialJournal(section = {}, entry = "") {

  section.entries[entry].icon = "partialJournal";
}

/**
 * Switches global variable to a "not completed" symbol
 */
function SetIconRed(section = {}, entry = "") {

  section.entries[entry].icon = "red";
}

/**
 * Switches global variable to no symbol (span with left padding)
 */
function SetIconNone(section = {}, entry = "") {

  section.entries[entry].icon = "none";
}

/**
 * Switches global variable to a chosen symbol
 */
 function SetIcon(section = {}, entry = "", icon = "") {

  section.entries[entry].icon = icon;
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
 * Generates database entries text. Provides an easy filling solution.
 * @param {array} objectArray 
 * @param {string} searchText 
 * @param {string} entryName 
 * @param {string} entryDB 
 * @param {string} wiki 
 */
function GenerateDatabaseEntries(objectArray, searchText = "", entryName = "", entryDB = "", wiki = "") {

  let fillText = "";
  let count = 0;

  for (let i = 0, ln = objectArray.length; i < ln; i++) {

    if (objectArray[i].id.includes(searchText)) {

      count++;

      fillText += `
      ${entryDB}${count}: {
        name: "${entryName} #${count}",
        spoiler: "${TranslateMapName(objectArray[i].sceneName)}",
        id: "${objectArray[i].id}",
        sceneName: "${objectArray[i].sceneName}",
        wiki: "${wiki}"
      },`;
    }
  }

  return fillText;
}

/* ------------------------- Exports ------------------------------- */

export {
  SetIconGreen,
  SetIconPartial,
  SetIconPartialJournal,
  SetIconRed,
  SetIconNone,
  SetIcon,
  ObjectLength,
  TranslateMapName,
  GenerateDatabaseEntries
};