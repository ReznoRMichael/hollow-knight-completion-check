// ---------------- Constants ----------------- //

const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ ";
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ ";
const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ ";

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

// ---------------- Hollow Knight Data Constant Objects ----------------- //

const DIV_ID = {
    intro: {
        h2: "Game Status",
        id: "hk-intro",
        maxPercent: 112
    },
    hints: {
        h2: "My old friend Elderbug once told me about...",
        id: "hk-hints",
    },
    bosses: {
        h2: "Bosses",
        id: "hk-bosses",
        maxPercent: 14
    },
    charms: {
        h2: "Charms",
        id: "hk-charms",
        maxPercent: 36
    },
    equipment: {
        h2: "Equipment",
        id: "hk-equipment",
        maxPercent: 14
    },
    nailUpgrades: {
        h2: "Nail Upgrades",
        id: "hk-nailupgrades",
        maxPercent: 4
    },
    nailArts: {
        h2: "Nail Arts",
        id: "hk-nailarts",
        maxPercent: 3
    },
    spells: {
        h2: "Spells",
        id: "hk-spells",
        maxPercent: 6
    },
    maskShards: {
        h2: "Mask Shards",
        id: "hk-maskshards",
        maxPercent: 4
    },
    vesselFragments: {
        h2: "Vessel Fragments",
        id: "hk-vesselfragments",
        maxPercent: 3
    },
    dreamNail: {
        h2: "Dream Nail and Essence",
        id: "hk-dreamnail",
        maxPercent: 3
    },
    warriorDreams: {
        h2: "Warrior Dreams",
        id: "hk-warriordreams",
        maxPercent: 7
    },
    dreamers: {
        h2: "Dreamers",
        id: "hk-dreamers",
        maxPercent: 3
    },
    colosseum: {
        h2: "Colosseum of Fools",
        id: "hk-colosseum",
        maxPercent: 3
    },
    grimmTroupe: {
        h2: "Grimm Troupe Content Pack",
        id: "hk-grimmtroupe",
        maxPercent: 6
    },
    lifeblood: {
        h2: "Lifeblood Content Pack",
        id: "hk-lifeblood",
        maxPercent: 1
    },
    godmaster: {
        h2: "Godmaster Content Pack",
        id: "hk-godmaster",
        maxPercent: 5
    }
};

const HK_HINTS = {
    fireballLevel: ["", "...a mysterious shaman living in a dwelling below the town of Dirtmouth"],
    hornet1Defeated: ["", "...a skilled protector guarding ruins in a lush green forest"],
    hasDash: ["", "...an old cloak lying on a green path by a broken shell"],
    hasWalljump: ["", "...a sharp claw lying forgotten somewhere amidst the insect village"],
    Crossroads_04: ["", "...a mother sleeping peacefully below the town of Dirtmouth"],
    slyRescued: ["", "...a fellow town bug who seems to be lost somewhere in the crossroads"],
    hasLantern: ["", "...a precious item able to carry some light to even the darkest places"],
    hasSuperDash: ["", "...some powerful crystal beating somewhere deep inside the mines"],
    hasDreamNail: ["", "...a weapon from a dream world only found where the souls can peacefully rest"],
    killedInfectedKnight: ["", "...a shattered corpse forgotten in a windy cave in the depths below the city"],
    hasDoubleJump: ["", "...something incredibly light dropped by a monarchfly in the depths below the city"],
    killedBlackKnight: ["", "...discarded shells of black guards lying on the floor of a high spire"],
    lurienDefeated: ["", "...a dreamer sleeping somewhere at the top of a high spire"],
    dungDefenderOrHornet2: ["", "...a skilled combatant living at the heart of the sewers or watching over a shell amidst ash falling from the sky"],
    ismaTearOrShadeCloak: ["", "...something precious in a grove accessed from the waterways or a massive door guarding a cloak behind the darkness"],
    defeatedMegaJelly: ["", "...an intelligent being floating inside hidden archives behind the fog"],
    monomonDefeated: ["", "...a dreamer sleeping somewhere hidden in a foggy area"],
    hegemolDefeated: ["", "...a dreamer sleeping near a spider nest area"],
    killedHollowKnight: ["", "...a disturbance inside a black temple"],
};

const HK_BOSSES = {
    falseKnightDefeated: ["False Knight", "Forgotten Crossroads"], // "Battle Scene" - "Crossroads_10" ?
    hornet1Defeated: ["Hornet Protector", "Greenpath"],
    defeatedDungDefender: ["Dung Defender", "Royal Waterways"],
    mageLordDefeated: ["Soul Master", "City of Tears: Soul Sanctum"],
    killedBlackKnight: ["Watcher Knights", "City of Tears: Watcher's Spire"],
    collectorDefeated: ["The Collector", "City of Tears: Tower of Love"],
    defeatedMantisLords: ["Mantis Lords", "Mantis Village"],
    defeatedMegaJelly: ["Uumuu", "Fog Canyon: Teacher's Archives"],
    hornetOutskirtsDefeated: ["Hornet Sentinel", "Kingdom's Edge"],
    killedInfectedKnight: ["Broken Vessel", "Ancient Basin"],
    killedMimicSpider: ["Nosk", "Deepnest"], // "Battle Scene" - "Deepnest_32" ?
    killedTraitorLord: ["Traitor Lord", "Queen's Gardens"] // "Battle Scene" - "Fungus3_23" ?
};

// "Battle Scene" sceneData.persistentBoolItems.id
const HK_BOSSES_WORLD = {
    Crossroads_04: ["Gruz Mother", "Forgotten Crossroads"], // killedBigFly
    Crossroads_09: ["Brooding Mawlek", "Forgotten Crossroads"] // killedMawlek
};

// reference: https://radiance.host/apidocs/Charms.html
const HK_CHARMS = {
    gotCharm_1: ["Gathering Swarm", "Sly: 300 Geo"], // 1
    gotCharm_2: ["Wayward Compass", "Iselda: 220 Geo"], // 1
    gotCharm_3: ["Grubsong", "Grubfather: 10 Grubs"], // 1
    gotCharm_4: ["Stalwart Shell", "Sly: 200 Geo"], // 2
    gotCharm_5: ["Baldur Shell", "Howling Cliffs"], // 2
    gotCharm_6: ["Fury of the Fallen", "King's Pass"], // 2
    gotCharm_7: ["Quick Focus", "Salubra: 800 Geo"], // 3
    gotCharm_8: ["Lifeblood Heart", "Salubra: 250 Geo"], // 2
    gotCharm_9: ["Lifeblood Core", "The Abyss: 15 Lifeblood masks"], // 3
    gotCharm_10: ["Defender's Crest", "Royal Waterways"], // 1
    gotCharm_11: ["Flukenest", "Royal Waterways"], // 3
    gotCharm_12: ["Thorns of Agony", "Greenpath"], // 1
    gotCharm_13: ["Mark of Pride", "Mantis Village"], // 3
    gotCharm_14: ["Steady Body", "Salubra: 120 Geo"], // 1
    gotCharm_15: ["Heavy Blow", "Sly: 350 Geo + Shopkeeper's Key"], // 2
    gotCharm_16: ["Sharp Shadow", "Deepnest"], // 2
    gotCharm_17: ["Spore Shroom", "Fungal Wastes"], // 1
    gotCharm_18: ["Longnail", "Salubra: 300 Geo"], // 2
    gotCharm_19: ["Shaman Stone", "Salubra: 220 Geo"], // 3
    gotCharm_20: ["Soul Catcher", "Forgotten Crossroads: Ancestral Mound"], // 2
    gotCharm_21: ["Soul Eater", "Resting Grounds"], // 4
    gotCharm_22: ["Glowing Womb", "Forgotten Crossroads"], // 2
    gotCharm_23: ["Fragile / Unbreakable Heart", "Leg Eater: 350/280 Geo"], // 2
    gotCharm_24: ["Fragile / Unbreakable Greed", "Leg Eater: 250/200 Geo"], // 2
    gotCharm_25: ["Fragile / Unbreakable Strength", "Leg Eater: 600/480 Geo"], // 3
    gotCharm_26: ["Nailmaster’s Glory", "Sly: All Nail Arts"], // 1
    gotCharm_27: ["Joni’s Blessing", "Howling Cliffs: Joni's Repose"], // 4
    gotCharm_28: ["Shape of Unn", "Greenpath: Lake of Unn"], // 2
    gotCharm_29: ["Hiveblood", "The Hive"], // 4
    gotCharm_30: ["Dream Wielder", "Seer: 500 Essence"], // 1
    gotCharm_31: ["Dashmaster", "Fungal Wastes"], // 2
    gotCharm_32: ["Quick Slash", "Kingdom's Edge"], // 3
    gotCharm_33: ["Spell Twister", "City of Tears: Soul Sanctum"], // 2
    gotCharm_34: ["Deep Focus", "Crystal Peak"], // 4
    gotCharm_35: ["Grubberfly’s Elegy", "Grubfather: 46 Grubs"], // 3
    gotCharm_36: ["Kingsoul / Void Heart", "Queen's Gardens, Ancient Basin, Birthplace"], // 5
};

const HK_COLOSSEUM = {
    colosseumBronzeCompleted: ["Trial of the Warrior", "Little Fool: 100 Geo"],
    colosseumSilverCompleted: ["Trial of the Conqueror", "Little Fool: 450 Geo + Warrior completed"],
    colosseumGoldCompleted: ["Trial of the Fool", "Little Fool: 800 Geo + Conqueror completed"],
};

const HK_DREAMERS = {
    lurienDefeated: ["Lurien the Watcher", "City of Tears: Watcher's Spire"],
    monomonDefeated: ["Monomon the Teacher", "Fog Canyon: Teacher's Archives"],
    hegemolDefeated: ["Herrah the Beast", "Deepnest: Distant Village"]
};

const HK_DREAMNAIL = {
    hasDreamNail: ["Dream Nail acquired", "Resting Grounds"],
    dreamNailUpgraded: ["Awoken Dream Nail", "Seer: 1800 Essence"],
    mothDeparted: ["Hear the Seer's final words", "Seer: 2400 Essence"]
};

const HK_EQUIPMENT = {
    hasDash: ["Mothwing Cloak", "Greenpath; Dash ability"],
    hasWalljump: ["Mantis Claw", "Mantis Village; Wall Jump ability"],
    hasSuperDash: ["Crystal Heart", "Crystal Peak; Super Dash ability"],
    hasAcidArmour: ["Isma's Tear", "Royal Waterways; Acid Armour ability"],
    hasDoubleJump: ["Monarch Wings", "Ancient Basin; Double Jump ability"],
    hasKingsBrand: ["King's Brand", "Kingdom's Edge"],
    hasShadowDash: ["Shade Cloak", "The Abyss; Shadow Dash ability"]
};

const HK_MASKSHARDS = {
    slyShellFrag1: ["Mask Shard #1", "Sly: 150 Geo"],
    slyShellFrag2: ["Mask Shard #2", "Sly: 500 Geo"],
    slyShellFrag3: ["Mask Shard #3", "Sly: 800 Geo + Shopkeeper's Key"],
    slyShellFrag4: ["Mask Shard #4", "Sly: 1500 Geo + Shopkeeper's Key"],
    dreamReward7: ["Mask Shard #5", "Seer: 1500 Essence"]
};

// "Heart Piece" sceneData.persistentBoolItems.id
const HK_MASKSHARDS_WORLD = {
    Crossroads_13: ["Mask Shard #6", "Forgotten Crossroads: below Hot Springs"],
    Crossroads_09: ["Mask Shard #7", "Forgotten Crossroads: Brooding Mawlek"],
    Crossroads_38: ["Mask Shard #8", "Grubfather: 5 Grubs"],
    Room_Bretta: ["Mask Shard #9", "Dirtmouth: Bretta's Room"],
    Fungus2_01: ["Mask Shard #10", "Queen's Station"],
    Waterways_04b: ["Mask Shard #11", "Royal Waterways"],
    Fungus1_36: ["Mask Shard #12", "Greenpath: Stone Sanctuary"],
    Mines_32: ["Mask Shard #13", "Crystal Peak: Enraged Guardian"],
    Fungus2_25: ["Mask Shard #14", "Deepnest: entrance from Fungal Wastes"],
    Hive_04: ["Mask Shard #15", "The Hive"],
    Room_Mansion: ["Mask Shard #16", "Resting Grounds: Delicate Flower"]
};

const HK_VESSELFRAGMENTS = {
    slyVesselFrag1: ["Vessel Fragment #1", "Sly: 550 Geo"],
    slyVesselFrag2: ["Vessel Fragment #2", "Sly: 900 Geo"],
    dreamReward5: ["Vessel Fragment #3", "Seer: 700 Essence"],
    vesselFragStagNest: ["Vessel Fragment #4", "Stag Nest"]
};

// "Vessel Fragment" sceneData.persistentBoolItems.id
const HK_VESSELFRAGMENTS_WORLD = {
    Fungus1_13: ["Vessel Fragment #5", "Greenpath: near Queen's Gardens exit"],
    Crossroads_37: ["Vessel Fragment #6", "Forgotten Crossroads: unlock City of Tears lift"],
    Ruins2_09: ["Vessel Fragment #7", "Above King's Station"],
    Deepnest_38: ["Vessel Fragment #8", "Deepnest: Goam platforming challenge"],
    Abyss_04: ["Vessel Fragment #9", "Ancient Basin Fountain: 3000 Geo"]
};

const HK_NAILARTS = {
    hasUpwardSlash: ["Great Slash", "Nailmaster Sheo: Greenpath"],
    hasDashSlash: ["Dash Slash", "Nailmaster Oro: Kingdom's Edge, 800 Geo"],
    hasCyclone: ["Cyclone Slash", " Nailmaster Mato: Howling Cliffs"],
};

const HK_NAILUPGRADES = [
    ["#0 Old Nail", "Starting Weapon"],
    ["#1 Sharpened Nail", "Nailsmith: 250 Geo"],
    ["#2 Channeled Nail", "Nailsmith: 800 Geo + 1 Pale Ore"],
    ["#3 Coiled Nail", "Nailsmith: 2000 Geo + 2 Pale Ore"],
    ["#4 Pure Nail", "Nailsmith: 4000 Geo + 3 Pale Ore"]
];

const HK_SPELLS = {
    fireballLevel: {
        1: ["Vengeful Spirit", "Forgotten Crossroads: Ancestral Mound"],
        2: ["Shade Soul", "City of Tears: Soul Sanctum + Elegant Key"],
    },
    quakeLevel: {
        1: ["Desolate Dive", "City of Tears: Soul Sanctum"],
        2: ["Descending Dark", "Crystal Peak: Crystallised Mound"],
    },
    screamLevel: {
        1: ["Howling Wraiths", "Fog Canyon: Overgrown Mound"],
        2: ["Abyss Shriek", "The Abyss"],
    }
};

const HK_WARRIORDREAMS = {
    xeroDefeated: ["Xero", "Resting Grounds"],
    noEyesDefeated: ["No Eyes", "Greenpath: Stone Sanctuary"],
    elderHuDefeated: ["Elder Hu", "Fungal Wastes"],
    aladarSlugDefeated: ["Gorb", "Howling Cliffs"],
    mumCaterpillarDefeated: ["Marmu", "Queen's Gardens"],
    galienDefeated: ["Galien", "Deepnest"],
    markothDefeated: ["Markoth", "Kingdom's Edge"],
};

const HK_GRIMMTROUPE = {
    gotCharm_37: ["Charm #37 Sprintmaster", "Sly: 400 Geo + Shopkeeper's Key"],
    gotCharm_38: ["Charm #38 Dreamshield", "Resting Grounds"],
    gotCharm_39: ["Charm #39 Weaversong", "Deepnest: Weaver's Den"],
    gotCharm_40: ["Charm #40 Grimmchild / Carefree Melody", "Dirtmouth"],
    killedGrimm: ["Troupe Leader Grimm", "Dirtmouth"]
};

const HK_LIFEBLOOD = {
    killedHiveKnight: ["Hive Knight", "The Hive"]
};

const HK_GODMASTER = {
    hasGodfinder: ["Godtuner", "Junk Pit"]
};

const HK_GODMASTER_DOORS = [
    ["#1 Pantheon of the Master", "Godhome"],
    ["#2 Pantheon of the Artist", "Godhome"],
    ["#3 Pantheon of the Sage", "Godhome"],
    ["#4 Pantheon of the Knight", "Godhome"]
];

/**
 * Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Save data in JavaScript Object form
 */
function HKCheckCompletion(jsonObject) {

    // start benchmark
    let countBegin = new Date();

    // Prevents wrong checkbox behaviour
    CheckboxHintsToggle("hide");
    CheckboxLocationsToggle("hide");

    // Pre-Cleaning and filling initial data
    PrefillHTML(DIV_ID);

    // Shallow Clone const objects (used for destructive functions)
    let HK_HINTS_temp = Object.assign({}, HK_HINTS);
    let HK_BOSSES_temp = Object.assign({}, HK_BOSSES);
    let HK_BOSSES_WORLD_temp = Object.assign({}, HK_BOSSES_WORLD);
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

    // Shallow Clone const arrays (used for destructive functions)
    let HK_GODMASTER_DOORS_temp = Array.from(HK_GODMASTER_DOORS);
    let HK_NAILUPGRADES_temp = Array.from(HK_NAILUPGRADES);

    // Deep Clone const spells multi-layer object (used for destructive functions)
    let HK_SPELLS_temp = JSON.parse(JSON.stringify(HK_SPELLS));

    let HKPlayerData = jsonObject.playerData;
    let HKWorldItems = jsonObject.sceneData.persistentBoolItems;

    // ---------------- Time Played ----------------- //

    CheckPlayTime(DIV_ID.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(DIV_ID.intro, HKPlayerData);

    for (let i in HKPlayerData) {
        completionSymbol = SYMBOL_FALSE;
        currentData = DATA_UNKNOWN;

        // ---------------- Bosses (Base Game) --------------------- //

        if (HK_BOSSES_temp) CheckIfDataTrue(DIV_ID.bosses, HK_BOSSES_temp, HKPlayerData);

        // ---------------- Charms --------------------- //

        if (HK_CHARMS_temp) CheckIfDataTrue(DIV_ID.charms, HK_CHARMS_temp, HKPlayerData);

        // ---------------- Colosseum of Fools --------------------- //

        if (HK_COLOSSEUM_temp) CheckIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM_temp, HKPlayerData);

        // ---------------- Dreamers --------------------- //

        if (HK_DREAMERS_temp) CheckIfDataTrue(DIV_ID.dreamers, HK_DREAMERS_temp, HKPlayerData);

        // ---------------- Dream Nail and Essence --------------------- //

        if (HK_DREAMNAIL_temp) CheckIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL_temp, HKPlayerData);

        // ---------------- Equipment --------------------- //

        if (HK_EQUIPMENT_temp) CheckIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT_temp, HKPlayerData);

        // ---------------- Mask Shards --------------------- //

        if (HK_MASKSHARDS_temp) CheckIfDataTrue(DIV_ID.maskShards, HK_MASKSHARDS_temp, HKPlayerData);

        // ---------------- Nail Arts --------------------- //

        if (HK_NAILARTS_temp) CheckIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

        // ---------------- Nail Upgrades --------------------- //

        if (i === "nailSmithUpgrades") {
            for (let j = 0; j < HK_NAILUPGRADES_temp.length; j++) {
                (HKPlayerData.nailSmithUpgrades >= j) ? CurrentDataTrue(): CurrentDataFalse();
                FillHTML(DIV_ID.nailUpgrades, HK_NAILUPGRADES_temp[j][0], HK_NAILUPGRADES_temp[j][1]);
            }
        }

        // ---------------- Spells --------------------- //

        if (HK_SPELLS_temp) CheckSpellLevel(DIV_ID.spells, HK_SPELLS_temp, HKPlayerData);

        // ---------------- Vessel Fragments --------------------- //

        if (HK_VESSELFRAGMENTS_temp) CheckIfDataTrue(DIV_ID.vesselFragments, HK_VESSELFRAGMENTS_temp, HKPlayerData);

        // ---------------- Warrior Dreams --------------------- //

        if (HK_WARRIORDREAMS_temp) CheckWarriorDreams(DIV_ID.warriorDreams, HK_WARRIORDREAMS_temp, HKPlayerData);

        // ---------------- Grimm Troupe Content Pack --------------------- //

        if (HK_GRIMMTROUPE_temp) CheckIfDataTrue(DIV_ID.grimmTroupe, HK_GRIMMTROUPE_temp, HKPlayerData);

        if (i === "grimmChildLevel") {
            (HKPlayerData.grimmChildLevel >= 4) ? CurrentDataTrue(): CurrentDataFalse();
            FillHTML(DIV_ID.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");
        }

        // ---------------- Lifeblood Content Pack --------------------- //

        if (HK_LIFEBLOOD_temp) CheckIfDataTrue(DIV_ID.lifeblood, HK_LIFEBLOOD_temp, HKPlayerData);

        // ---------------- Godmaster Content Pack --------------------- //

        if (HK_GODMASTER_temp) CheckIfDataTrue(DIV_ID.godmaster, HK_GODMASTER_temp, HKPlayerData);

        if (HK_GODMASTER_DOORS_temp.length) {
            for (let j = 1; j <= 4; j++) {
                CurrentDataFalse();
                if (i === ("bossDoorStateTier" + j)) {
                    if (HKPlayerData["bossDoorStateTier" + j].completed === true) CurrentDataTrue();
                    FillHTML(DIV_ID.godmaster, HK_GODMASTER_DOORS_temp[0][0], HK_GODMASTER_DOORS_temp[0][1]);
                    HK_GODMASTER_DOORS_temp.shift()
                }
            }
        }

    } // end for (let i in HKPlayerData)

    // ---------------- Hints --------------------- //

    CheckHintsTrue(DIV_ID.hints, HK_HINTS_temp, HKPlayerData, HKWorldItems);

    // Outside playerData checks

    // ---------------- Gruz Mother and Mawlek (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.bosses, "Battle Scene", HK_BOSSES_WORLD_temp, HKWorldItems);

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.maskShards, "Heart Piece", HK_MASKSHARDS_WORLD_temp, HKWorldItems);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.vesselFragments, "Vessel Fragment", HK_VESSELFRAGMENTS_WORLD_temp, HKWorldItems);

    // finish and show benchmark
    let countEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", countEnd - countBegin);
}

/**
 * Cleans "generated" and fills all HTML elements of ids from a given list. Creates only div with id, and h2 with title inside it.
 * @param {object} jsObj Object with HTML data to fill
 */
function PrefillHTML(jsObj) {
    // Clean "generated" div
    document.getElementById("generated").innerHTML = "";

    let h2 = "";
    let id = "";
    let mp = ""; // max Percent
    let cl = ""; // class

    for (let i in jsObj) {
        h2 = jsObj[i].h2;
        id = jsObj[i].id;
        (i === "hints") ? cl = " class='hidden'": cl = "";

        mp = " (" + jsObj[i].maxPercent + "%)";
        if (!jsObj[i].hasOwnProperty("maxPercent") || i === "intro") mp = "";

        document.getElementById("generated").innerHTML += "<div id='" + id + "'" + cl + ">" + "</div>";
        document.getElementById(id).innerHTML += "<h2>" + h2 + mp + "</h2>";
    }
}

/**
 * Generates and appends a new entry inside the HTML of a given ID
 * @param {object} divId object containing div ID and h2 title of the HTML element
 * @param {string} textPrefix Main name of the entry
 * @param {string} textSuffix Optional suffix after the main name
 */
function FillHTML(divId, textPrefix = "Unknown Completion Element: ", textSuffix = "") {
    let icon = completionSymbol;
    let b = ["<b>", "</b>"];
    if (!textPrefix.length) b = ["", ""];

    let span = ["<span class='location hidden'>", "</span>"];
    if (divId === DIV_ID.hints) {
        span[0] = "<span>";
        icon = SYMBOL_INFO;
    }

    let dash = "";
    if (textSuffix.length && textPrefix.length) dash = " — ";

    document.getElementById(divId.id).innerHTML += divStart + icon + b[0] + textPrefix + b[1] + span[0] + dash + textSuffix + span[1] + divEnd;
}

/**
 * Switches global variables to a "completed" symbol
 * @param {string} textData Optional completion name for use in HTML
 */
function CurrentDataTrue(textData = isCompleted) {
    completionSymbol = SYMBOL_TRUE;
    currentData = textData;
}

/**
 * Switches global variables to a "not completed" symbol
 * @param {string} textData Optional completion name for use in HTML
 */
function CurrentDataFalse(textData = isNotCompleted) {
    completionSymbol = SYMBOL_FALSE;
    currentData = textData;
}

/**
 * Fills HTML with the playTime value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} playTime Number of total gameplay time in seconds
 */
function CheckPlayTime(divId, playTime) {

    let icon = "<i class='icon-clock'></i>";
    let seconds = Math.floor(playTime);
    let minutes = Math.floor((seconds / 60) % 60);
    let hours = Math.floor(seconds / 3600);
    let sec = Math.floor(seconds % 60);

    if (sec <= 10) sec = "0" + sec;
    if (minutes <= 10) minutes = "0" + minutes;

    let textFill = "Time Played: <b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + divEnd;
}

/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckCompletionPercent(divId, playerData) {
    
    let textFill = "";
    CurrentDataFalse();

    for (let i in playerData) {
        if (i === "completionPercentage") {
            if (playerData[i] >= 112) CurrentDataTrue();
    
            textFill = "Game Completion: <b>" + playerData[i] + " %</b> (out of " + divId.maxPercent + " %)";
            document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
        }
    }
}

/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly. Destructive function.
 * @param {string} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckIfDataTrue(divId, dataObject, playerData) {
    for (let i in dataObject) {
        (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
        delete dataObject[i];
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly. Destructive function.
 * @param {string} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckSpellLevel(divId, dataObject, playerData) {
    for (let i in dataObject) {
        for (let j = 1; j <= 2; j++) {
            (playerData[i] >= j) ? CurrentDataTrue(): CurrentDataFalse();
            FillHTML(divId, dataObject[i][j][0], dataObject[i][j][1]);
        }
        delete dataObject[i];
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly. Destructive function.
 * @param {string} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(divId, dataObject, playerData) {
    for (let i in dataObject) {
        (playerData[i] > 0) ? CurrentDataTrue(): CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
        delete dataObject[i];
    }
}

/**
 * Verifies if the data in a specific object are true or false, and appends HTML accordingly. Creates a copy of dataObject.
 * @param {string} divId ID of the HTML element for data appending
 * @param {string} idText Text string inside save data to search for
 * @param {object} dataObject Object containing data to be verified
 * @param {object} worldData Reference/pointer to specific data where to search
 */
function CheckWorldDataTrue(divId, idText, dataObject, worldData) {
    let orderedArray = [];
    let size = ObjectLength(dataObject);

    // Order the items before displaying them (creates a copy of dataObject)
    for (let i in dataObject) {
        orderedArray.push([i, dataObject[i][0], dataObject[i][1], false]);
    }

    // Search for completed items and mark them for display
    for (let i = 0, length = worldData.length; i < length; i++) {
        for (let j = 0; j < size; j++) {
            if (worldData[i].id === idText && worldData[i].sceneName === orderedArray[j][0] && worldData[i].activated === true) {
                orderedArray[j][3] = true;
            }
        }
    }

    // Display the items as they were initially ordered
    for (let i = 0; i < size; i++) {
        CurrentDataFalse();
        if (orderedArray[i][3] === true) CurrentDataTrue();
        FillHTML(divId, orderedArray[i][1], orderedArray[i][2]);
    }
}

/**
 * Checks, validates and shows hints to the player depending on their save progression, in chronological order. Shows only hint for the last uncompleted event. If Hollow Knight is defeated, shows a dummy text.
 * @param {object} divId object containing div hints ID and h2 title
 * @param {object} dataObject object containing all hints data
 * @param {object} playerData object containing HK Player Data to look in
 * @param {object} worldData object containing HK World Data to look in
 */
function CheckHintsTrue(divId, dataObject, playerData, worldData) {
    let hollowKnightDefeated = false;

    for (let i in dataObject) {
        CurrentDataFalse();

        for (let j in playerData) {
            if (i === j) {
                if (playerData[i] === true) {
                    if (i === "killedHollowKnight") {
                        hollowKnightDefeated = true;
                    }
                    CurrentDataTrue();
                    // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                } else if (i === "fireballLevel") {
                    if (playerData[i] >= 1) {
                        CurrentDataTrue();
                        // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                        delete dataObject[i];
                    } else {
                        CurrentDataFalse();
                        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                        delete dataObject[i];
                    }
                } else {
                    CurrentDataFalse();
                    FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                }
            }
        }

        if (i === "Crossroads_04") {
            for (let k = 0, length = worldData.length; k < length; k++) {
                if (worldData[k].id === "Battle Scene" && worldData[k].sceneName === "Crossroads_04" && worldData[k].activated === true) {
                    CurrentDataTrue();
                    // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                    break;
                }
            }
            if (completionSymbol === SYMBOL_FALSE) {
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                delete dataObject[i];
            }
        }

        if (i === "dungDefenderOrHornet2") {
            for (let k in playerData) {
                if (k === "defeatedDungDefender" && playerData[k] === true) {
                    CurrentDataTrue();
                    // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                    break;
                } else if (k === "hornetOutskirtsDefeated" && playerData[k] === true) {
                    CurrentDataTrue();
                    // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                    break;
                } else if ((k === "defeatedDungDefender" && playerData[k] === false) &&
                    (k === "hornetOutskirtsDefeated" && playerData[k] === false)) {
                    CurrentDataFalse();
                    FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    delete dataObject[i];
                    break;
                }
            }
        }

        if (i === "ismaTearOrShadeCloak") {
            for (let k in playerData) {
                if (k === "hasAcidArmour") {
                    if (playerData[k] === true) {
                        CurrentDataTrue();
                        // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                        delete dataObject[i];
                        break;
                    }
                } else if (k === "hasKingsBrand") {
                    if (playerData[k] === true) {
                        for (let l in playerData) {
                            if (l === "hasShadowDash") {
                                if (playerData[l] === true) {
                                    CurrentDataTrue();
                                    // FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                                    delete dataObject[i];
                                    break;
                                } else {
                                    CurrentDataFalse();
                                    FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                                    delete dataObject[i];
                                    break;
                                }
                            }
                        }
                    } else {
                        CurrentDataFalse();
                        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                        delete dataObject[i];
                        break;
                    }
                }
            }
        }

        // show only the last uncompleted hint
        if (completionSymbol === SYMBOL_FALSE) {
            break;
        }
    } // end for (let i in dataObject)

    // prevents showing hints when player already has seen the credits
    if (hollowKnightDefeated) {
        FillHTML(divId, "", "...a successful Knight who doesn't need hints anymore");
    }
}

/**
 * Pre-Cleans HTML. Reads contents inside text area and parses it to a JavaScript object. If not empty, runs HKCheckCompletion() to check data.
 */
function HKReadTextArea() {
    InitialHTMLPopulate(DIV_ID);

    let textAreaId = "save-area";
    let contents = document.getElementById(textAreaId).value;

    if (contents.length) {

        let jsonObject = JSON.parse(contents);
        // console.log(jsonObject);
        if (jsonObject.hasOwnProperty("playerData")) HKCheckCompletion(jsonObject);
        // console.log(jsonObject);
    }
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
 * Populate all HTML with given ID and their initial data set as false (used at DOM load)
 * @param {object} divIdObj JavaScript Object containing all HTML IDs to populate
 */
function InitialHTMLPopulate(divIdObj) {
    PrefillHTML(divIdObj);
    CurrentDataFalse();

    // Play Time
    let icon = "<i class='icon-clock'></i>";
    let textFill = "Time Played: <b>0 h 00 min 00 sec</b>";
    document.getElementById(divIdObj.intro.id).innerHTML += divStart + icon + textFill + divEnd;

    // Game Completion
    textFill = "Game Completion: <b>0 %</b> (out of " + divIdObj.intro.maxPercent + " %)";
    document.getElementById(divIdObj.intro.id).innerHTML += divStart + completionSymbol + textFill + divEnd;

    // First Hint Only
    FillHTML(divIdObj.hints, HK_HINTS.fireballLevel[0], HK_HINTS.fireballLevel[1]);

    // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)
    let hkObjArray = [HK_BOSSES, HK_BOSSES_WORLD, HK_CHARMS, HK_EQUIPMENT, HK_NAILARTS, HK_MASKSHARDS, HK_MASKSHARDS_WORLD, HK_VESSELFRAGMENTS, HK_VESSELFRAGMENTS_WORLD, HK_DREAMERS, HK_COLOSSEUM, HK_DREAMNAIL, HK_WARRIORDREAMS, HK_GRIMMTROUPE, HK_LIFEBLOOD, HK_GODMASTER];

    // duplicates and order important - must be the same as in hkObjArray[]
    let divObjArray = [divIdObj.bosses, divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster];

    // Looped filling to reduce redundancy
    do {
        for (let parameter in hkObjArray[0]) {
            FillHTML(divObjArray[0], hkObjArray[0][parameter][0], hkObjArray[0][parameter][1]);
        }
        divObjArray.shift();
    } while (hkObjArray.shift());

    // Nail Upgrades Misc
    for (let i = 0; i < HK_NAILUPGRADES.length; i++) {
        FillHTML(divIdObj.nailUpgrades, HK_NAILUPGRADES[i][0], HK_NAILUPGRADES[i][1]);
    }

    // Spells Misc
    for (let i in HK_SPELLS) {
        for (let j = 1; j <= 2; j++) {
            FillHTML(divIdObj.spells, HK_SPELLS[i][j][0], HK_SPELLS[i][j][1]);
        }
    }

    // Nightmare King Grimm / Banishment Misc
    FillHTML(divIdObj.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");

    // Godmaster Doors Misc
    for (let i = 0; i < ObjectLength(HK_GODMASTER_DOORS); i++) {
        FillHTML(divIdObj.godmaster, HK_GODMASTER_DOORS[i][0], HK_GODMASTER_DOORS[i][1]);
    }
}

/**
 * Toggles display of "hk-hints". On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxHintsToggle(param) {
    let checkboxId = document.getElementById("checkbox-hints");

    switch (param) {
        case "hide":
            document.getElementById("hk-hints").classList.add("hidden");
            checkboxId.value = "hints-off";
            checkboxId.checked = false;
            break;
        case "show":
            document.getElementById("hk-hints").classList.remove("hidden");
            checkboxId.value = "hints-on";
            checkboxId.checked = true;
            break;
        default:
            if (checkboxId.checked === false) {
                document.getElementById("hk-hints").classList.add("hidden");
                checkboxId.value = "hints-off";
            } else {
                document.getElementById("hk-hints").classList.remove("hidden");
                checkboxId.value = "hints-on";
            }
    }
}

/**
 * Toggles display of ".location" class. On click with no parameters or on demand when called with a parameter
 * @param {string} param "hide", "show" or none (optional)
 */
function CheckboxLocationsToggle(param) {
    let checkboxId = document.getElementById("checkbox-locations");
    let allClassElements = document.querySelectorAll(".location");
    let length = allClassElements.length;

    switch (param) {
        case "hide":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.add("hidden");
            }
            checkboxId.value = "locations-off";
            checkboxId.checked = false;
            break;
        case "show":
            for (let i = 0; i < length; i++) {
                allClassElements[i].classList.remove("hidden");
            }
            checkboxId.value = "locations-on";
            checkboxId.checked = true;
            break;
        default:
            if (checkboxId.checked === false) {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.add("hidden");
                }
                checkboxId.value = "locations-off";
            } else {
                for (let i = 0; i < length; i++) {
                    allClassElements[i].classList.remove("hidden");
                }
                checkboxId.value = "locations-on";
            }
    }
}