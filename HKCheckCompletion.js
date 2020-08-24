// ---------------- Constants ----------------- //

const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "❌ ";
const SYMBOL_TRUE = "✅ ";

// ---------------- Variables ----------------- //

var isCompleted = "Completed";
var isNotCompleted = "Not Completed";
var currentData = DATA_UNKNOWN;
var completionSymbol = SYMBOL_FALSE;

var divStart = [
    "<div>"
].join("\n");

var divEnd = [
    "</div>"
].join("\n");

var strongStart = "<strong>"
var strongEnd = "</strong>"

const HK_BOSSES = {
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

const HK_COLOSSEUM = {
    colosseumBronzeCompleted: "Trial of the Warrior",
    colosseumSilverCompleted: "Trial of the Conqueror",
    colosseumGoldCompleted: "Trial of the Fool"
};

var HK_DREAMERS = {
    lurienDefeated: "Lurien the Watcher",
    monomonDefeated: "Monomon the Teacher",
    hegemolDefeated: "Herrah the Beast"
};

var HK_DREAMNAIL = {
    hasDreamNail: "Dream Nail acquired",
    dreamNailUpgraded: "Awakening the Dream Nail",
    mothDeparted: "Hear the Seer's final words"
};

var HK_EQUIPMENT = {
    hasKingsBrand: "King's Brand",
    hasSuperDash: "Crystal Heart",
    hasWalljump: "Mantis Claw",
    hasDoubleJump: "Monarch Wings",
    hasAcidArmour: "Isma's Tear",
    hasDash: "Mothwing Cloak",
    hasShadowDash: "Shade Cloak"
};

function HKCheckCompletion(jsonObject) {

    let HKPlayerData = jsonObject.playerData;
    let divId = "";
    let divIdIntro = "hk-intro";
    let divIdBosses = "hk-bosses";
    let divIdColosseum = "hk-colosseum";
    let divIdDreamers = "hk-dreamers";
    let divIdDreamNail = "hk-dreamnail";
    let divIdEquipment = "hk-equipment";

    for (i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        divId = divIdIntro;

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue();
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(divId, "Hollow Knight Completion", " %");
        }

        // ---------------- Bosses (Base Game) --------------------- //

        checkIfDataTrue(divIdBosses, HK_BOSSES, HKPlayerData);

        // ---------------- Colosseum of Fools --------------------- //

        checkIfDataTrue(divIdColosseum, HK_COLOSSEUM, HKPlayerData);

        // ---------------- Dreamers --------------------- //

        divId = divIdDreamers;

        for (j in HK_DREAMERS) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_DREAMERS[j]);
            delete HK_DREAMERS[j];
        }

        // ---------------- Dream Nail and Essence --------------------- //

        divId = divIdDreamNail;

        for (j in HK_DREAMNAIL) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_DREAMNAIL[j]);
            delete HK_DREAMNAIL[j];
        }

        // ---------------- Equipment --------------------- //

        divId = divIdEquipment;

        for (j in HK_EQUIPMENT) {
            if (HKPlayerData[j] === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divId, HK_EQUIPMENT[j]);
            delete HK_EQUIPMENT[j];
        }
    }
}

function fillHTML(divId = "", textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    document.getElementById(divId).innerHTML += divStart + completionSymbol + strongStart + textPrefix + ": " + strongEnd + currentData + textSuffix + divEnd;
}

function currentDataTrue(textData = isCompleted) {
    completionSymbol = SYMBOL_TRUE;
    currentData = textData;
}

function currentDataFalse(textData = isNotCompleted) {
    completionSymbol = SYMBOL_FALSE;
    currentData = textData;
}

function checkIfDataTrue(divId, dataObject, playerData) {
    for (i in dataObject) {
        if (playerData[i] === true) currentDataTrue();
        else currentDataFalse();
        fillHTML(divId, dataObject[i]);
        delete dataObject[i];
    }
}