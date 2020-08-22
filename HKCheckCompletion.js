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
    killedMawlek: "Brooding Mawlek",
    killedBigBuzzer: "Gruz Mother",
    collectorDefeated: "The Collector",
    defeatedMegaJelly: "Uumuu",
    killedMimicSpider: "Nosk",
    killedTraitorLord: "Traitor Lord",
    killedInfectedKnight: "Broken Vessel",
    killedMageKnight: "Watcher Knights",
    defeatedDungDefender: "Dung Defender",
    mageLordDefeated: "Soul Master",
    defeatedMantisLords: "Mantis Lords",
    hornet1Defeated: "Hornet Protector",
    hornetOutskirtsDefeated: "Hornet Sentinel",
    falseKnightDefeated: "False Knight"
};

var HK_COLOSSEUM = {
    colosseumBronzeCompleted: "Trial of the Warrior",
    colosseumSilverCompleted: "Trial of the Conqueror",
    colosseumGoldCompleted: "Trial of the Fool"
};

var HK_DREAMERS = {
    lurienDefeated: "Lurien the Watcher",
    monomonDefeated: "Monomon the Teacher",
    hegemolDefeated: "Herrah the Beast"
};

function HKCheckCompletion(jsonObject) {

    let HKPlayerData = jsonObject.playerData;
    let divId = "";
    let divIdIntro = "hk-intro";
    let divIdBoss = "hk-bosses";
    let divIdColosseum = "hk-colosseum";
    let divIdDreamers = "hk-dreamers";

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

        // ---------------- Dreamers --------------------- //

        divId = divIdDreamers;

        for (j in HK_DREAMERS) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_DREAMERS[j]);
            delete HK_DREAMERS[j];
        }

        // ---------------- Colosseum of Fools --------------------- //

        divId = divIdColosseum;

        for (j in HK_COLOSSEUM) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_COLOSSEUM[j]);
            delete HK_COLOSSEUM[j];
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