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

// ---------------- Hollow Knight Data Constant Objects ----------------- //

const DIV_ID = {
    intro: "hk-intro",
    bosses: "hk-bosses",
    charms: "hk-charms",
    colosseum: "hk-colosseum",
    dreamers: "hk-dreamers",
    dreamNail: "hk-dreamnail",
    equipment: "hk-equipment",
    nailArts: "hk-nailarts",
    nailUpgrades: "hk-nailupgrades",
    spells: "hk-spells",
    vesselFragments: "hk-vesselfragments",
    warriorDreams: "hk-warriordreams",
    grimmTroupe: "hk-grimmtroupe",
    lifeblood: "hk-lifeblood",
    godmaster: "hk-godmaster"
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

const HK_CHARMS = {
    gotCharm_1: "Wayward Compass", // 1 ?
    gotCharm_2: "Gathering Swarm", // 1 ?
    gotCharm_3: "Thorns of Agony", // 1 ?
    gotCharm_4: "Stalwart Shell", // 2 ?
    gotCharm_5: "Soul Catcher", // 2 ?
    gotCharm_6: "Dashmaster", // 2 ?
    gotCharm_7: "Shaman Stone", // 3 ?
    gotCharm_8: "Fury of the Fallen", // 2 ?
    gotCharm_9: "Fragile Strength / Unbreakable Strength", // 3 ?
    gotCharm_10: "Steady Body", // 1 ?
    gotCharm_11: "Quick Slash", // 3 ?
    gotCharm_12: "Defender's Crest", // 1 ?
    gotCharm_13: "Mark of Pride", // 3 ?
    gotCharm_14: "Grubsong", // 1 ?
    gotCharm_15: "Fragile Heart / Unbreakable Heart", // 2 ?
    gotCharm_16: "Fragile Greed / Unbreakable Greed", // 2 ?
    gotCharm_17: "Spore Shroom", // 1 ?
    gotCharm_18: "Spell Twister", // 2 ?
    gotCharm_19: "Flukenest", // 3 ?
    gotCharm_20: "Heavy Blow", // 2 ?
    gotCharm_21: "",
    gotCharm_22: "",
    gotCharm_23: "",
    gotCharm_24: "",
    gotCharm_25: "",
    gotCharm_26: "",
    gotCharm_27: "",
    gotCharm_28: "",
    gotCharm_29: "",
    gotCharm_30: "",
    gotCharm_31: "",
    gotCharm_32: "",
    gotCharm_33: "",
    gotCharm_34: "",
    gotCharm_35: "",
    gotCharm_36: "",
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

const HK_WARRIORDREAMS = {
    galienDefeated: "Galien",
    mumCaterpillarDefeated: "Marmu",
    markothDefeated: "Markoth",
    xeroDefeated: "Xero",
    noEyesDefeated: "No Eyes",
    elderHuDefeated: "Elder Hu",
    aladarSlugDefeated: "Gorb"
};

const HK_GRIMMTROUPE = {
    gotCharm_40: "Grimmchild / Carefree Melody",
    gotCharm_38: "Dreamshield",
    gotCharm_37: "Sprintmaster",
    gotCharm_39: "Weaversong",
    gotGrimmNotch: "Troupe Leader Grimm"
};

const HK_LIFEBLOOD = {
    killedHiveKnight: "Hive Knight"
};

const HK_GODMASTER = {
    hasGodfinder: "Godtuner"
};

function HKCheckCompletion(jsonObject) {

    // start benchmark
    let countBegin = new Date();

    // Pre-Cleaning all divs for safety
    for (i in DIV_ID) {
        document.getElementById(DIV_ID[i]).innerHTML = "";
    }

    // Shallow Clone const objects (used for destructive functions)
    let HK_BOSSES_temp = Object.assign({}, HK_BOSSES);
    let HK_CHARMS_temp = Object.assign({}, HK_CHARMS);
    let HK_COLOSSEUM_temp = Object.assign({}, HK_COLOSSEUM);
    let HK_DREAMERS_temp = Object.assign({}, HK_DREAMERS);
    let HK_DREAMNAIL_temp = Object.assign({}, HK_DREAMNAIL);
    let HK_EQUIPMENT_temp = Object.assign({}, HK_EQUIPMENT);
    let HK_NAILARTS_temp = Object.assign({}, HK_NAILARTS);
    let HK_WARRIORDREAMS_temp = Object.assign({}, HK_WARRIORDREAMS);
    let HK_GRIMMTROUPE_temp = Object.assign({}, HK_GRIMMTROUPE);
    let HK_LIFEBLOOD_temp = Object.assign({}, HK_LIFEBLOOD);
    let HK_GODMASTER_temp = Object.assign({}, HK_GODMASTER);

    let HKPlayerData = jsonObject.playerData;
    let bossDoor = ["Pantheon of the Master", "Pantheon of the Artist", "Pantheon of the Sage", "Pantheon of the Knight"]

    for (i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue(HKPlayerData.completionPercentage);
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(DIV_ID.intro, "Hollow Knight Completion", " %");
        }

        // ---------------- Bosses (Base Game) --------------------- //

        if (HK_BOSSES_temp) checkIfDataTrue(DIV_ID.bosses, HK_BOSSES_temp, HKPlayerData);

        // ---------------- Charms --------------------- //

        if (HK_CHARMS_temp) checkIfDataTrue(DIV_ID.charms, HK_CHARMS_temp, HKPlayerData);

        // ---------------- Colosseum of Fools --------------------- //

        if (HK_COLOSSEUM_temp) checkIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM_temp, HKPlayerData);

        // ---------------- Dreamers --------------------- //

        if (HK_DREAMERS_temp) checkIfDataTrue(DIV_ID.dreamers, HK_DREAMERS_temp, HKPlayerData);

        // ---------------- Dream Nail and Essence --------------------- //

        if (HK_DREAMNAIL_temp) checkIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL_temp, HKPlayerData);

        // ---------------- Equipment --------------------- //

        if (HK_EQUIPMENT_temp) checkIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT_temp, HKPlayerData);

        // ---------------- Mask Shards --------------------- //

        //

        // ---------------- Nail Arts --------------------- //

        if (HK_NAILARTS_temp) checkIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

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

        if (HK_SPELLS) checkSpellLevel(DIV_ID.spells, HK_SPELLS, HKPlayerData);

        // ---------------- Vessel Fragments --------------------- //

        //

        // ---------------- Warrior Dreams --------------------- //

        if (HK_WARRIORDREAMS_temp) checkWarriorDreams(DIV_ID.warriorDreams, HK_WARRIORDREAMS_temp, HKPlayerData);

        // ---------------- Grimm Troupe Content Pack --------------------- //

        if (HK_GRIMMTROUPE_temp) checkIfDataTrue(DIV_ID.grimmTroupe, HK_GRIMMTROUPE_temp, HKPlayerData);

        if (i === "grimmChildLevel") {
            if (HKPlayerData.grimmChildLevel >= 4) currentDataTrue();
            else currentDataFalse();
            fillHTML(DIV_ID.grimmTroupe, "Nightmare King Grimm / Banishment");
        }

        // ---------------- Lifeblood Content Pack --------------------- //

        if (HK_LIFEBLOOD_temp) checkIfDataTrue(DIV_ID.lifeblood, HK_LIFEBLOOD_temp, HKPlayerData);

        // ---------------- Godmaster Content Pack --------------------- //

        if (HK_GODMASTER_temp) checkIfDataTrue(DIV_ID.godmaster, HK_GODMASTER_temp, HKPlayerData);

        if (bossDoor.length) {
            for (let j=1; j<=4; j++) {
                currentDataFalse();
                if (i === ("bossDoorStateTier" + j)) {
                    if (HKPlayerData["bossDoorStateTier" + j].completed === true) currentDataTrue();
                    fillHTML(DIV_ID.godmaster, bossDoor[0]);
                    bossDoor.shift();
                }
            }
        }

    }

    // finish and show benchmark
    let countEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", countEnd - countBegin);
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

function checkWarriorDreams(divId, dataObject, playerData) {
    for (i in dataObject) {
        if (playerData[i] > 0) currentDataTrue();
        else currentDataFalse();
        fillHTML(divId, dataObject[i]);
        delete dataObject[i];
    }
}