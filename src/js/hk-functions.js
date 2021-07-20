/* ---------------- Load main Hollow Knight database files ----------------- */

import MAP from "./hk-dictionary.js";

/* -------------------------- Functions ----------------------------- */

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

/* ------------------------- Exports ------------------------------- */

export {
  ObjectLength,
  TranslateMapName
};