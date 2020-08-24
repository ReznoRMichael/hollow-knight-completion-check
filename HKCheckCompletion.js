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

const DIV_ID = {
    intro: "hk-intro",
    bosses: "hk-bosses",
    colosseum: "hk-colosseum",
    dreamers: "hk-dreamers",
    dreamNail: "hk-dreamnail",
    equipment: "hk-equipment",
    nailArts: "hk-nailarts",
    nailUpgrades: "hk-nailupgrades",
    spells: "hk-spells",
};

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

const HK_DREAMERS = {
    lurienDefeated: "Lurien the Watcher",
    monomonDefeated: "Monomon the Teacher",
    hegemolDefeated: "Herrah the Beast"
};

const HK_DREAMNAIL = {
    hasDreamNail: "Dream Nail acquired",
    dreamNailUpgraded: "Awakening the Dream Nail",
    mothDeparted: "Hear the Seer's final words"
};

const HK_EQUIPMENT = {
    hasKingsBrand: "King's Brand",
    hasSuperDash: "Crystal Heart",
    hasWalljump: "Mantis Claw",
    hasDoubleJump: "Monarch Wings",
    hasAcidArmour: "Isma's Tear",
    hasDash: "Mothwing Cloak",
    hasShadowDash: "Shade Cloak"
};

const HK_NAILARTS = {
    hasAllNailArts: "All Nail Arts",
    hasUpwardSlash: "Great Slash",
    hasDashSlash: "Dash Slash",
    hasCyclone: "Cyclone Slash"
};

const HK_SPELLS = {
    fireballLevel: {
        1: "Vengeful Spirit",
        2: "Shade Soul"
    },
    quakeLevel: {
        1: "Desolate Dive",
        2: "Descending Dark"
    },
    screamLevel: {
        1: "Howling Wraiths",
        2: "Abyss Shriek"
    }
};

function HKCheckCompletion(jsonObject) {

    let HKPlayerData = jsonObject.playerData;

    for (i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue();
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(DIV_ID.intro, "Hollow Knight Completion", " %");
        }

        // ---------------- Bosses (Base Game) --------------------- //

        checkIfDataTrue(DIV_ID.bosses, HK_BOSSES, HKPlayerData);

        // ---------------- Colosseum of Fools --------------------- //

        checkIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM, HKPlayerData);

        // ---------------- Dreamers --------------------- //

        checkIfDataTrue(DIV_ID.dreamers, HK_DREAMERS, HKPlayerData);

        // ---------------- Dream Nail and Essence --------------------- //

        checkIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL, HKPlayerData);

        // ---------------- Equipment --------------------- //

        checkIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT, HKPlayerData);

        // ---------------- Nail Arts --------------------- //

        checkIfDataTrue(DIV_ID.nailArts, HK_NAILARTS, HKPlayerData);

        // ---------------- Nail Upgrades --------------------- //

        if (i === "nailSmithUpgrades") {

            let nailName = ["Old Nail", "Sharpened Nail", "Channeled Nail", "Coiled Nail", "Pure Nail"];

            for (let j = 0; j < nailName.length; j++) {
                currentDataFalse();
                if (HKPlayerData.nailSmithUpgrades >= j) currentDataTrue();
                fillHTML(DIV_ID.nailUpgrades, nailName[j]);
            }
        }

        // ---------------- Spells --------------------- //

        checkSpellLevel(DIV_ID.spells, HK_SPELLS, HKPlayerData);
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

function checkSpellLevel(divId, dataObject, playerData) {
    for (i in dataObject) {
        for (let j = 1; j <= 2; j++) {
            currentDataFalse();
            if (playerData[i] >= j) currentDataTrue();
            fillHTML(divId, dataObject[i][j]);
        }
        delete dataObject[i];
    }
}