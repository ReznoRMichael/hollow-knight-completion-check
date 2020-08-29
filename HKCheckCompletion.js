// ---------------- Constants ----------------- //

const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ ";
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ ";

// ---------------- Variables ----------------- //

var isCompleted = "";
var isNotCompleted = "";
var currentData = DATA_UNKNOWN;
var completionSymbol = SYMBOL_FALSE;

var divStart = [
    "<div>"
].join("\n");

var divEnd = [
    "</div>"
].join("\n");

var strongStart = "";
var strongEnd = "";

// ---------------- Hollow Knight Data Constant Objects ----------------- //

const DIV_ID = {
    intro: "hk-intro",
    bosses: "hk-bosses",
    charms: "hk-charms",
    colosseum: "hk-colosseum",
    dreamers: "hk-dreamers",
    dreamNail: "hk-dreamnail",
    equipment: "hk-equipment",
    maskShards: "hk-maskshards",
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
    killedBurstingBouncer: "Gruz Mother",
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

// reference: https://radiance.host/apidocs/Charms.html
const HK_CHARMS = {
    gotCharm_1: "Gathering Swarm", // 1
    gotCharm_2: "Wayward Compass", // 1
    gotCharm_3: "Grubsong", // 1
    gotCharm_4: "Stalwart Shell", // 2
    gotCharm_5: "Baldur Shell", // 2
    gotCharm_6: "Fury of the Fallen", // 2
    gotCharm_7: "Quick Focus", // 3
    gotCharm_8: "Lifeblood Heart", // 2
    gotCharm_9: "Lifeblood Core", // 3
    gotCharm_10: "Defender's Crest", // 1
    gotCharm_11: "Flukenest", // 3
    gotCharm_12: "Thorns of Agony", // 1
    gotCharm_13: "Mark of Pride", // 3
    gotCharm_14: "Steady Body", // 1
    gotCharm_15: "Heavy Blow", // 2
    gotCharm_16: "Sharp Shadow", // 2
    gotCharm_17: "Spore Shroom", // 1
    gotCharm_18: "Longnail", // 2
    gotCharm_19: "Shaman Stone", // 3
    gotCharm_20: "Soul Catcher", // 2
    gotCharm_21: "Soul Eater", // 4
    gotCharm_22: "Glowing Womb", // 2
    gotCharm_23: "Fragile Heart / Unbreakable Heart", // 2
    gotCharm_24: "Fragile Greed / Unbreakable Greed", // 2
    gotCharm_25: "Fragile Strength / Unbreakable Strength", // 3
    gotCharm_26: "Nailmaster’s Glory", // 1
    gotCharm_27: "Joni’s Blessing", // 4
    gotCharm_28: "Shape of Unn", // 2
    gotCharm_29: "Hiveblood", // 4
    gotCharm_30: "Dream Wielder", // 1
    gotCharm_31: "Dashmaster", // 2
    gotCharm_32: "Quick Slash", // 3
    gotCharm_33: "Spell Twister", // 2
    gotCharm_34: "Deep Focus", // 4
    gotCharm_35: "Grubberfly’s Elegy", // 3
    gotCharm_36: "Kingsoul / Void Heart", // 5
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
    dreamNailUpgraded: "Awoken Dream Nail (Seer - 1800 Essence)",
    mothDeparted: "Hear the Seer's final words (Seer - 2400 Essence)"
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

const HK_MASKSHARDS = {
    slyShellFrag1: "Mask Shard (Sly - 150 Geo)",
    slyShellFrag2: "Mask Shard (Sly - 500 Geo)",
    slyShellFrag3: "Mask Shard (Sly - 800 Geo)",
    slyShellFrag4: "Mask Shard (Sly - 1500 Geo)",
    dreamReward7: "Mask Shard (Seer - 1500 Essence)"
};

// "Heart Piece" sceneData.persistentBoolItems[n].id
const HK_MASKSHARDS_WORLD = {
    Crossroads_13: "Mask Shard (Forgotten Crossroads - below Hot Springs)",
    Fungus2_01: "Mask Shard (Queen's Station)",
    Crossroads_38: "Mask Shard (Grubfather - rescue 5 Grubs)",
    Waterways_04b: "Mask Shard (Royal Waterways)",
    Fungus1_36: "Mask Shard (Greenpath - Stone Sanctuary)",
    Crossroads_09: "Mask Shard (Forgotten Crossroads - Brooding Mawlek)",
    Mines_32: "Mask Shard (Crystal Peak - Enraged Guardian)",
    Fungus2_25: "Mask Shard (Deepnest - entrance from Fungal Wastes)",
    Room_Bretta: "Mask Shard (Dirtmouth - Bretta's Room)",
    Hive_04: "Mask Shard (The Hive)",
    Room_Mansion: "Mask Shard (Resting Grounds - Delicate Flower)"
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

const HK_VESSELFRAGMENTS = {
    slyVesselFrag1: "Vessel Fragment (Sly - 550 Geo)",
    slyVesselFrag2: "Vessel Fragment (Sly - 900 Geo)",
    dreamReward5: "Vessel Fragment (Seer - 700 Essence)",
    vesselFragStagNest: "Vessel Fragment (Stag Nest)"
};

// "Vessel Fragment" sceneData.persistentBoolItems[n].id
const HK_VESSELFRAGMENTS_WORLD = {
    Fungus1_13: "Vessel Fragment (Greenpath - near Queen's Gardens exit)",
    Crossroads_37: "Vessel Fragment (Forgotten Crossroads - unlock the lift in City of Tears)",
    Ruins2_09: "Vessel Fragment (Above King's Station)",
    Deepnest_38: "Vessel Fragment (Deepnest - Goam platforming challenge)",
    Abyss_04: "Vessel Fragment (Ancient Basin Fountain - 3000 Geo)"
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
    cleanHTML(DIV_ID);

    // Shallow Clone const objects (used for destructive functions)
    let HK_BOSSES_temp = Object.assign({}, HK_BOSSES);
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

    // Deep Clone const spells multi-layer object (used for destructive functions)
    let HK_SPELLS_temp = JSON.parse(JSON.stringify(HK_SPELLS));

    let HKPlayerData = jsonObject.playerData;
    let HKWorldItems = jsonObject.sceneData.persistentBoolItems;
    let bossDoor = ["Pantheon of the Master", "Pantheon of the Artist", "Pantheon of the Sage", "Pantheon of the Knight"];
    let nailName = ["Old Nail", "Sharpened Nail", "Channeled Nail", "Coiled Nail", "Pure Nail"];

    for (i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue(HKPlayerData.completionPercentage);
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(DIV_ID.intro, "Hollow Knight Completion: ", " %");
        }

        // ---------------- Time Played ----------------- //

        if (i === "playTime") {
            let seconds = Math.floor(HKPlayerData.playTime);
            let minutes = Math.floor((seconds / 60) % 60);
            let hours = Math.floor(seconds / 3600);
            let sec = Math.floor(seconds % 60);
            if (sec <= 10) sec = "0" + sec;
            if (minutes <= 10) minutes = "0" + minutes;
            currentDataTrue();
            fillHTML(DIV_ID.intro, "Time Played: " + hours + " h " + minutes + " min " + sec + " sec");
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

        if (HK_MASKSHARDS_temp) checkIfDataTrue(DIV_ID.maskShards, HK_MASKSHARDS_temp, HKPlayerData);

        // ---------------- Nail Arts --------------------- //

        if (HK_NAILARTS_temp) checkIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

        // ---------------- Nail Upgrades --------------------- //

        if (i === "nailSmithUpgrades") {
            for (let j = 0; j < nailName.length; j++) {
                currentDataFalse();
                if (HKPlayerData.nailSmithUpgrades >= j) currentDataTrue();
                fillHTML(DIV_ID.nailUpgrades, nailName[j]);
            }
        }

        // ---------------- Spells --------------------- //

        if (HK_SPELLS_temp) checkSpellLevel(DIV_ID.spells, HK_SPELLS_temp, HKPlayerData);

        // ---------------- Vessel Fragments --------------------- //

        if (HK_VESSELFRAGMENTS_temp) checkIfDataTrue(DIV_ID.vesselFragments, HK_VESSELFRAGMENTS_temp, HKPlayerData);

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
            for (let j = 1; j <= 4; j++) {
                currentDataFalse();
                if (i === ("bossDoorStateTier" + j)) {
                    if (HKPlayerData["bossDoorStateTier" + j].completed === true) currentDataTrue();
                    fillHTML(DIV_ID.godmaster, bossDoor[0]);
                    bossDoor.shift();
                }
            }
        }

    }

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.maskShards, "Heart Piece", HK_MASKSHARDS_WORLD_temp, HKWorldItems);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.vesselFragments, "Vessel Fragment", HK_VESSELFRAGMENTS_WORLD_temp, HKWorldItems);

    // finish and show benchmark
    let countEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", countEnd - countBegin);
};

function cleanHTML(jsObj) {
    for (i in jsObj) {
        document.getElementById(jsObj[i]).innerHTML = "";
    }
};

function fillHTML(divId = "", textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    document.getElementById(divId).innerHTML += divStart + completionSymbol + strongStart + textPrefix + "" + strongEnd + currentData + textSuffix + divEnd;
};

function currentDataTrue(textData = isCompleted) {
    completionSymbol = SYMBOL_TRUE;
    currentData = textData;
};

function currentDataFalse(textData = isNotCompleted) {
    completionSymbol = SYMBOL_FALSE;
    currentData = textData;
};

function checkIfDataTrue(divId, dataObject, playerData) {
    for (i in dataObject) {
        if (playerData[i] === true) currentDataTrue();
        else currentDataFalse();
        fillHTML(divId, dataObject[i]);
        delete dataObject[i];
    }
};

function checkSpellLevel(divId, dataObject, playerData) {
    for (i in dataObject) {
        for (let j = 1; j <= 2; j++) {
            currentDataFalse();
            if (playerData[i] >= j) currentDataTrue();
            fillHTML(divId, dataObject[i][j]);
        }
        delete dataObject[i];
    }
};

function checkWarriorDreams(divId, dataObject, playerData) {
    for (i in dataObject) {
        if (playerData[i] > 0) currentDataTrue();
        else currentDataFalse();
        fillHTML(divId, dataObject[i]);
        delete dataObject[i];
    }
};

function CheckWorldDataTrue(divId, idText, dataObject, worldData) {
    let foundData = 0;
    let size = ObjectLength(dataObject);

    for (let i = 0; i < worldData.length; i++) {
        for (j in dataObject) {
            if (worldData[i].id === idText && worldData[i].sceneName === j && worldData[i].activated === true) {
                currentDataTrue();
                foundData++;
                fillHTML(divId, dataObject[j]);
                delete dataObject[j];
            }
        }
    }
    if (foundData < size) {
        currentDataFalse();
        for (j in dataObject) {
            fillHTML(divId, dataObject[j]);
            delete dataObject[j];
        }
    }
};

function HKReadTextArea() {
    cleanHTML(DIV_ID);

    let textAreaId = "save-area";
    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {
        let jsonObject = JSON.parse(contents);
        HKCheckCompletion(jsonObject);
        // console.log(jsonObject);
    }
};

function ObjectLength(object) {
    var length = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
};