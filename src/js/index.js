// Handle cookies
// require("./cookies.js");

// CSS
// require("../css/cookieconsent.css");
require("../css/fontello.css");
require("../css/simpleicon.css");
require("../css/reznoricon.css");
require("../css/style.css");

// required for meta tags (social) to be visible by Webpack
require("../img/thumbnail1200x628.jpg");

import "core-js";
import "regenerator-runtime/runtime.js";

require("./page-functions.js");

// Instantly load test save file from .json (fast Debugging script)
// require("./LoadJson.js");

// Main script for analyzing the decoded save file and generating the page on the fly
require("./HKCheckCompletion.js");

// Load Save File for opening files, decoding, decryption
require("./LoadSaveFile.js");