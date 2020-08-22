var DATA_UNKNOWN = "Data unknown";
var COMPLETED = "Completed";
var NOT_COMPLETED = "Not Completed";
var CURRENT_DATA = DATA_UNKNOWN;
var SYMBOL_FALSE = "❌ ";
var SYMBOL_TRUE = "✅ ";
var COMPLETED_CHECK = SYMBOL_FALSE;

var DIV_START = [
    "<div>"
].join("\n");

var DIV_END = [
    "</div>"
].join("\n");

var STRONG_START = "<strong>"
var STRONG_END = "</strong>"

var HK_BOSSES = {
    mawlekDefeated: "Brooding Mawlek",
    giantBuzzerDefeated: "Gruz Mother",
    collectorDefeated: "The Collector",
    defeatedMegaJelly: "Uumuu",
    killedMimicSpider: "Nosk",
    killedTraitorLord: "Traitor Lord"
};

function HKCheckCompletion(jsonObject) {
    console.log("Script Run");

    let HKPlayerData = jsonObject.playerData;
    let divId = "";
    let divIdIntro = "hk-intro";
    let divIdBoss = "hk-bosses";

    for (i in HKPlayerData) {
        COMPLETED_CHECK = SYMBOL_FALSE;
        CURRENT_DATA = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        divId = divIdIntro;

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue();
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(divId, "Hollow Knight Completion", " %");
        }

        // ---------------- Bosses (Base Game) --------------------- //

        divId = divIdBoss;

        for (j in HK_BOSSES) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_BOSSES[j]);
            delete HK_BOSSES[j];
        }
    }
}

function fillHTML(divId = "", textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    document.getElementById(divId).innerHTML += DIV_START + COMPLETED_CHECK + STRONG_START + textPrefix + ": " + STRONG_END + CURRENT_DATA + textSuffix + DIV_END;
}

function currentDataTrue(textData = COMPLETED) {
    COMPLETED_CHECK = SYMBOL_TRUE;
    CURRENT_DATA = textData;
}

function currentDataFalse(textData = NOT_COMPLETED) {
    COMPLETED_CHECK = SYMBOL_FALSE;
    CURRENT_DATA = textData;
}