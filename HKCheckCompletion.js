// ---------------- Constants ----------------- //

const DATA_UNKNOWN = "Data unknown";
const SYMBOL_FALSE = "<i class='icon-cancel'></i>"; // "❌ "
const SYMBOL_TRUE = "<i class='icon-ok-squared'></i>"; // "✅ "
const SYMBOL_INFO = "<i class='icon-info-circled'></i>"; // "ℹ "
const SYMBOL_EMPTY = "<span class='padding-left'></span>";
const FLEUR_DIVIDE = "<div class='horizontal-line'></div>";

// ---------------- Variables ----------------- //

let currentData = DATA_UNKNOWN;
let completionSymbol = SYMBOL_FALSE;

let divStart = [
    "<div class='flex-container'>"
].join("\n");

let divEnd = [
    "</div>"
].join("\n");

let pSpan = "<span class='p-left-small'></span>";

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
        percent: 0,
        maxPercent: 14
    },
    charms: {
        h2: "Charms",
        id: "hk-charms",
        percent: 0,
        maxPercent: 36
    },
    equipment: {
        h2: "Equipment",
        id: "hk-equipment",
        percent: 0,
        maxPercent: 14
    },
    nailUpgrades: {
        h2: "Nail Upgrades",
        id: "hk-nailupgrades",
        percent: 0,
        maxPercent: 4
    },
    nailArts: {
        h2: "Nail Arts",
        id: "hk-nailarts",
        percent: 0,
        maxPercent: 3
    },
    spells: {
        h2: "Spells",
        id: "hk-spells",
        percent: 0,
        maxPercent: 6
    },
    maskShards: {
        h2: "Mask Shards",
        id: "hk-maskshards",
        percent: 0,
        maxPercent: 4
    },
    vesselFragments: {
        h2: "Vessel Fragments",
        id: "hk-vesselfragments",
        percent: 0,
        maxPercent: 3
    },
    dreamNail: {
        h2: "Dream Nail and Essence",
        id: "hk-dreamnail",
        percent: 0,
        maxPercent: 3
    },
    warriorDreams: {
        h2: "Warrior Dreams",
        id: "hk-warriordreams",
        percent: 0,
        maxPercent: 7
    },
    dreamers: {
        h2: "Dreamers",
        id: "hk-dreamers",
        percent: 0,
        maxPercent: 3
    },
    colosseum: {
        h2: "Colosseum of Fools",
        id: "hk-colosseum",
        percent: 0,
        maxPercent: 3
    },
    grimmTroupe: {
        h2: "Grimm Troupe Content Pack",
        id: "hk-grimmtroupe",
        percent: 0,
        maxPercent: 6
    },
    lifeblood: {
        h2: "Lifeblood Content Pack",
        id: "hk-lifeblood",
        percent: 0,
        maxPercent: 1
    },
    godmaster: {
        h2: "Godmaster Content Pack",
        id: "hk-godmaster",
        percent: 0,
        maxPercent: 5
    },
    essential: {
        h2: "Game Completion Essentials",
        id: "hk-essential"
    },
    additional: {
        h2: "Additional Information",
        id: "hk-additional"
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
    killedInfectedKnight: ["", "...a shattered corpse forgotten in a windy cave in the ancient depths below the city"],
    hasDoubleJump: ["", "...something incredibly light dropped by a monarchfly in the ancient depths below the city"],
    killedBlackKnight: ["", "...discarded shells of black guards lying on the floor of a high spire"],
    lurienDefeated: ["", "...a dreamer sleeping somewhere at the top of a high spire"],
    dungDefenderOrHornet2: ["", "...a skilled combatant living at the heart of the sewers or watching over a shell amidst ash falling from the sky"],
    ismaTearOrShadeCloak: ["", "...something precious in a grove accessed from the waterways or a massive royal door guarding a cloak behind the darkness"],
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
    gotCharm_1: ["#1 Gathering Swarm", "Sly: 300 Geo"], // 1
    gotCharm_2: ["#2 Wayward Compass", "Iselda: 220 Geo"], // 1
    gotCharm_3: ["#3 Grubsong", "Grubfather: 10 Grubs"], // 1
    gotCharm_4: ["#4 Stalwart Shell", "Sly: 200 Geo"], // 2
    gotCharm_5: ["#5 Baldur Shell", "Howling Cliffs"], // 2
    gotCharm_6: ["#6 Fury of the Fallen", "King's Pass"], // 2
    gotCharm_7: ["#7 Quick Focus", "Salubra: 800 Geo"], // 3
    gotCharm_8: ["#8 Lifeblood Heart", "Salubra: 250 Geo"], // 2
    gotCharm_9: ["#9 Lifeblood Core", "The Abyss: 15 Lifeblood masks"], // 3
    gotCharm_10: ["#10 Defender's Crest", "Royal Waterways"], // 1
    gotCharm_11: ["#11 Flukenest", "Royal Waterways"], // 3
    gotCharm_12: ["#12 Thorns of Agony", "Greenpath"], // 1
    gotCharm_13: ["#13 Mark of Pride", "Mantis Village"], // 3
    gotCharm_14: ["#14 Steady Body", "Salubra: 120 Geo"], // 1
    gotCharm_15: ["#15 Heavy Blow", "Sly: 350 Geo + Shopkeeper's Key"], // 2
    gotCharm_16: ["#16 Sharp Shadow", "Deepnest"], // 2
    gotCharm_17: ["#17 Spore Shroom", "Fungal Wastes"], // 1
    gotCharm_18: ["#18 Longnail", "Salubra: 300 Geo"], // 2
    gotCharm_19: ["#19 Shaman Stone", "Salubra: 220 Geo"], // 3
    gotCharm_20: ["#20 Soul Catcher", "Forgotten Crossroads: Ancestral Mound"], // 2
    gotCharm_21: ["#21 Soul Eater", "Resting Grounds"], // 4
    gotCharm_22: ["#22 Glowing Womb", "Forgotten Crossroads"], // 2
    gotCharm_23: ["#23 Fragile Heart", "Leg Eater: 350/280 Geo"], // 2
    gotCharm_24: ["#24 Fragile Greed", "Leg Eater: 250/200 Geo"], // 2
    gotCharm_25: ["#25 Fragile Strength", "Leg Eater: 600/480 Geo"], // 3
    gotCharm_26: ["#26 Nailmaster’s Glory", "Sly: All Nail Arts"], // 1
    gotCharm_27: ["#27 Joni’s Blessing", "Howling Cliffs: Joni's Repose"], // 4
    gotCharm_28: ["#28 Shape of Unn", "Greenpath: Lake of Unn"], // 2
    gotCharm_29: ["#29 Hiveblood", "The Hive"], // 4
    gotCharm_30: ["#30 Dream Wielder", "Seer: 500 Essence"], // 1
    gotCharm_31: ["#31 Dashmaster", "Fungal Wastes"], // 2
    gotCharm_32: ["#32 Quick Slash", "Kingdom's Edge"], // 3
    gotCharm_33: ["#33 Spell Twister", "City of Tears: Soul Sanctum"], // 2
    gotCharm_34: ["#34 Deep Focus", "Crystal Peak"], // 4
    gotCharm_35: ["#35 Grubberfly’s Elegy", "Grubfather: 46 Grubs"], // 3
    gotCharm_36: ["#36 Kingsoul", "Queen's Gardens + Ancient Basin"], // 5
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
    hasDash: ["Mothwing Cloak", "Greenpath: Dash ability"],
    hasWalljump: ["Mantis Claw", "Mantis Village: Wall Jump ability"],
    hasSuperDash: ["Crystal Heart", "Crystal Peak: Super Dash ability"],
    hasDoubleJump: ["Monarch Wings", "Ancient Basin: Double Jump ability"],
    hasAcidArmour: ["Isma's Tear", "Royal Waterways: Acid Armour ability"],
    hasKingsBrand: ["King's Brand", "Kingdom's Edge"],
    hasShadowDash: ["Shade Cloak", "The Abyss: Shadow Dash ability"]
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
    hasDashSlash: ["Great Slash", "Nailmaster Sheo: Greenpath"], // this is correct
    hasUpwardSlash: ["Dash Slash", "Nailmaster Oro: Kingdom's Edge, 800 Geo"], // this is correct
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

const HK_ESSENTIAL = {
    grubsCollected: ["Grubs Rescued", "out of 46 total", 46],
    dreamOrbs: ["Essence Collected", "Dream Nail (2400 for completion)", 2400],
    stationsOpened: ["Stag Stations opened", "out of 10 total", 10],
    slyRescued: ["Sly Rescued", "Forgotten Crossroads"],
    brettaRescued: ["Bretta Rescued", "Fungal Wastes"],
    hasLantern: ["Lumafly Lantern", "Sly: 1800 Geo"],
    shopkeeperKey: ["Shopkeeper's Key", "Crystal Peak"],
    elegantKey: ["Elegant Key", "Sly: 800 Geo + Shopkeeper's Key"],
    loveKey: ["Love Key", "Queen's Gardens"],
    slySimpleKey: ["Simple Key #1", "Sly: 950 Geo"],
    simpleKeyCityOfTears: ["Simple Key #2", "City of Tears"],
    simpleKeyAncientBasin: ["Simple Key #3", "Ancient Basin"],
    gotLurkerKey: ["Simple Key #4", "Kingdom's Edge: Colosseum of Fools"],
    paleOreAncientBasin: ["Pale Ore #1", "Ancient Basin"],
    paleOreSeer: ["Pale Ore #2", "Seer: 300 Essence"],
    paleOreCrystalPeak: ["Pale Ore #3", "Crystal Peak: Hallownest's Crown"],
    paleOreDeepnest: ["Pale Ore #4", "Deepnest"],
    paleOreGrubfather: ["Pale Ore #5", "Grubfather: 31 Grubs"],
    paleOreColosseum: ["Pale Ore #6", "Colosseum of Fools: Trial of the Conqueror"],
    fountainGeo: ["Geo in Fountain", "Ancient Basin: 3000 Geo maximum", 3000],
    hasTramPass: ["Tram Pass", "Deepnest"],
    nightmareLanternLit: ["Nightmare Lantern Lit", "Howling Cliffs"]
};

const HK_ADDITIONAL = {
    nailDamage: ["Nail Damage", "Nailsmith upgrades", 21],
    charmSlots: ["Charm Notches", "out of 11 total", 11],
    dreamOrbsSpent: ["Essence spent", "Dream Gate travelling"],
    relicsWandererJournal: ["Relic #1 found total", "Wanderer's Journal (out of 14)", 14, "trinket1", "soldTrinket1"],
    relicsHallownestSeal: ["Relic #2 found total", "Hallownest Seal (out of 17)", 17, "trinket2", "soldTrinket2"],
    relicsKingsIdol: ["Relic #3 found total", "King's Idol (out of 8)", 8, "trinket3", "soldTrinket3"],
    relicsArcaneEgg: ["Relic #4 found total", "Arcane Egg (out of 4)", 4, "trinket4", "soldTrinket4"],
    rancidEggs: ["Rancid Eggs", "Hallownest, Sly, Tuk"],
    xunFlowerBrokeTimes: ["Delicate Flowers broken", "Resting Grounds: Grey Mourner"],
    hasJournal: ["Hunter's Journal", "Greenpath: Hunter"],
    hasHuntersMark: ["Hunter's Mark", "Greenpath: Hunter"],
    journalEntriesCompleted: ["Creatures Encountered", "Hunter's Journal (164 max)", 164],
    journalNotesCompleted: ["Hunter Notes Completed", "Hunter's Journal (164 max)", 164],
    hasDreamGate: ["Dream Gate", "Seer: 900 Essence"],
    gotShadeCharm: ["Void Heart", "Kingsoul + Birthplace"],
    fragileHealth_unbreakable: ["Unbreakable Heart", "Divine: 12000 Geo"],
    fragileGreed_unbreakable: ["Unbreakable Greed", "Divine: 9000 Geo"],
    fragileStrength_unbreakable: ["Unbreakable Strength", "Divine: 15000 Geo"],
    whiteDefenderDefeats: ["White Defender times defeated", "Royal Waterways (5 max)", 5],
    greyPrinceDefeats: ["Grey Prince Zote times defeated", "Dirtmouth (10 max)", 10],
    bossDoorStateTier5: ["Pantheon of Hallownest", "Godhome"],
    zoteDead: ["Optimal Zote", "Neglect"],
    nailsmithSpared: ["Optimal Nailsmith", "Happy Couple"],
};

/**
 * Checks Hollow Knight game completion by analyzing the save file
 * @param {object} jsonObject Decoded save data in JavaScript Object Notation form (JSON)
 */
function HKCheckCompletion(jsonObject) {

    // start benchmark
    let countBegin = new Date();

    let HKPlayerData;
    let HKWorldItems;

    if (jsonObject.hasOwnProperty("playerData")) {
        HKPlayerData = jsonObject.playerData;
    } else return false;

    if (jsonObject.hasOwnProperty("sceneData")) {
        if (jsonObject.sceneData.hasOwnProperty("persistentBoolItems")) {
            HKWorldItems = jsonObject.sceneData.persistentBoolItems;
        } else return false;
    } else return false;

    // Pre-Cleaning and filling initial data (h2, id) needed for FillHTML()
    PrefillHTML(DIV_ID);

    // Prevents adding current percent data after each function call (each click of Analyze button)
    ResetCompletion(DIV_ID);

    // Prevents wrong checkbox behaviour
    CheckboxHintsToggle("hide");
    CheckboxLocationsToggle("hide");

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

    // ================================================================================== //

    // ---------------- Time Played ----------------- //

    CheckPlayTime(DIV_ID.intro, HKPlayerData.playTime);

    // ---------------- Game Completion Status ----------------- //

    CheckCompletionPercent(DIV_ID.intro, HKPlayerData.completionPercentage);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.intro, FLEUR_DIVIDE);

    // ---------------- Health Masks ----------------- //

    CheckHealthMasks(DIV_ID.intro, HKPlayerData.maxHealthBase, HKPlayerData.permadeathMode);

    // ---------------- Soul Orbs ----------------- //

    CheckSoulOrbs(DIV_ID.intro, HKPlayerData.maxMP + HKPlayerData.MPReserveMax);

    // ---------------- Geo Amount ----------------- //

    CheckGeo(DIV_ID.intro, HKPlayerData.geo);

    // ---------------- Bosses (Base Game) --------------------- //

    CheckIfDataTrue(DIV_ID.bosses, HK_BOSSES_temp, HKPlayerData);

    // ---------------- Gruz Mother and Mawlek (World Map) --------------------- //

    if (HKWorldItems) CheckWorldDataTrue(DIV_ID.bosses, "Battle Scene", HK_BOSSES_WORLD_temp, HKWorldItems);

    // ---------------- Charms --------------------- //

    CheckIfDataTrue(DIV_ID.charms, HK_CHARMS_temp, HKPlayerData);

    // ---------------- Colosseum of Fools --------------------- //

    CheckIfDataTrue(DIV_ID.colosseum, HK_COLOSSEUM_temp, HKPlayerData);

    // ---------------- Dreamers --------------------- //

    CheckIfDataTrue(DIV_ID.dreamers, HK_DREAMERS_temp, HKPlayerData);

    // ---------------- Dream Nail and Essence --------------------- //

    CheckIfDataTrue(DIV_ID.dreamNail, HK_DREAMNAIL_temp, HKPlayerData);

    // ---------------- Equipment --------------------- //

    CheckIfDataTrue(DIV_ID.equipment, HK_EQUIPMENT_temp, HKPlayerData);

    // ---------------- Nail Upgrades --------------------- //

    for (let i = 0, length = HK_NAILUPGRADES_temp.length; i < length; i++) {
        (HKPlayerData.nailSmithUpgrades >= i) ? CurrentDataTrue(DIV_ID.nailUpgrades): CurrentDataFalse();
        FillHTML(DIV_ID.nailUpgrades, HK_NAILUPGRADES_temp[i][0], HK_NAILUPGRADES_temp[i][1]);
    }
    if (DIV_ID.nailUpgrades.percent) DIV_ID.nailUpgrades.percent--; // subject one for the Old Nail

    // ---------------- Mask Shards --------------------- //

    CheckIfDataTrue(DIV_ID.maskShards, HK_MASKSHARDS_temp, HKPlayerData);

    // ---------------- Mask Shards (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.maskShards, "Heart Piece", HK_MASKSHARDS_WORLD_temp, HKWorldItems);

    // ---------------- Nail Arts --------------------- //

    CheckIfDataTrue(DIV_ID.nailArts, HK_NAILARTS_temp, HKPlayerData);

    // ---------------- Spells --------------------- //

    CheckSpellLevel(DIV_ID.spells, HK_SPELLS_temp, HKPlayerData);

    // ---------------- Vessel Fragments --------------------- //

    CheckIfDataTrue(DIV_ID.vesselFragments, HK_VESSELFRAGMENTS_temp, HKPlayerData);

    // ---------------- Vessel Fragments (World Map) --------------------- //

    CheckWorldDataTrue(DIV_ID.vesselFragments, "Vessel Fragment", HK_VESSELFRAGMENTS_WORLD_temp, HKWorldItems);

    // ---------------- Warrior Dreams --------------------- //

    CheckWarriorDreams(DIV_ID.warriorDreams, HK_WARRIORDREAMS_temp, HKPlayerData);

    // ---------------- Grimm Troupe Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.grimmTroupe, HK_GRIMMTROUPE_temp, HKPlayerData);

    (HKPlayerData.grimmChildLevel >= 4) ? CurrentDataTrue(DIV_ID.grimmTroupe): CurrentDataFalse();
    FillHTML(DIV_ID.grimmTroupe, "Nightmare King Grimm / Banishment", "Dirtmouth or Howling Cliffs");

    // ---------------- Lifeblood Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.lifeblood, HK_LIFEBLOOD_temp, HKPlayerData);

    // ---------------- Godmaster Content Pack --------------------- //

    CheckIfDataTrue(DIV_ID.godmaster, HK_GODMASTER_temp, HKPlayerData);

    for (let i = 1; i <= 4; i++) {
        (HKPlayerData["bossDoorStateTier" + i].completed === true) ? CurrentDataTrue(DIV_ID.godmaster): CurrentDataFalse();
        FillHTML(DIV_ID.godmaster, HK_GODMASTER_DOORS_temp[i - 1][0], HK_GODMASTER_DOORS_temp[i - 1][1]);
    }

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.godmaster, FLEUR_DIVIDE);

    // ------------------------- Essential Things ----------------------------- //

    CheckAdditionalThings(DIV_ID.essential, HK_ESSENTIAL, HKPlayerData, HKWorldItems);

    // ---------------- Fleur Divide ----------------- //

    AppendHTML(DIV_ID.essential, FLEUR_DIVIDE);

    // ------------------------- Additional Things ----------------------------- //

    CheckAdditionalThings(DIV_ID.additional, HK_ADDITIONAL, HKPlayerData, HKWorldItems);

    // ------------------------- Hints ----------------------------- //

    CheckHintsTrue(DIV_ID.hints, HK_HINTS_temp, HKPlayerData, HKWorldItems);

    // ------------------------- Fill completion ----------------------------- //

    CompletionHTML(DIV_ID);

    // finish and show benchmark
    let countEnd = new Date();
    console.info("HKCheckCompletion() time (ms) =", countEnd - countBegin);

    return true;
}

/**
 * Cleans "generated" and fills all HTML elements of ids from a given list. Creates only div with id, and h2 with title inside it.
 * @param {object} jsObj Object with HTML data to fill
 */
function PrefillHTML(jsObj) {
    // Clean "generated" div
    document.getElementById("generated").innerHTML = "";

    let id = "";
    let h2 = "";
    let h2id = "";
    let mp = ""; // max Percent
    let cl = ""; // class

    for (let i in jsObj) {
        id = jsObj[i].id;
        h2 = jsObj[i].h2;
        h2id = "h2-" + jsObj[i].id;
        (i === "hints") ? cl = " class='hidden'": cl = "";

        mp = " – " + jsObj[i].maxPercent + "%";
        if (!jsObj[i].hasOwnProperty("maxPercent") || i === "intro") mp = "";

        document.getElementById("generated").innerHTML += "<div id='" + id + "'" + cl + ">" + "</div>";
        document.getElementById(id).innerHTML += "<h2 id='" + h2id + "'>" + h2 + mp + "</h2>";
    }
}

/**
 * Replaces the h2 titles with a current percent/max percent values as read from the save file
 * @param {object} jsObj Object with HTML data to fill
 */
function CompletionHTML(jsObj) {

    let h2 = "";
    let h2id = "";
    let cp = ""; // current Percent
    let mp = ""; // max Percent

    for (let i in jsObj) {
        h2 = jsObj[i].h2;
        h2id = "h2-" + jsObj[i].id;

        (jsObj[i].hasOwnProperty("percent")) ? cp = jsObj[i].percent: cp = "";

        if (!jsObj[i].hasOwnProperty("maxPercent") || i === "intro") {
            mp = "";
        } else {

            if (i === "maskShards") {
                let perc = jsObj[i].percent;
                (perc % 4) ? cp = Math.floor(perc / 4): cp = perc / 4;
            } else if (i === "vesselFragments") {
                let perc = jsObj[i].percent;
                (perc % 3) ? cp = Math.floor(perc / 3): cp = perc / 3;
            }

            if (jsObj[i].hasOwnProperty("percent")) cp += "/";
            mp = " – " + cp + jsObj[i].maxPercent + "%";
        }

        document.getElementById(h2id).innerHTML = h2 + mp;
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

    let span = ["<span class='flex-row location hidden'>", "</span>"];
    if (divId === DIV_ID.hints) {
        span[0] = "<span>";
        icon = SYMBOL_INFO;
    }

    let dash = "";
    if (textSuffix.length && textPrefix.length) dash = " — ";

    document.getElementById(divId.id).innerHTML += divStart + icon + b[0] + textPrefix + b[1] + span[0] + pSpan + dash + textSuffix + span[1] + divEnd;
}

/**
 * Adds HTML string to an element with a given ID.
 * @param {object} divId object containing div ID of the HTML element to append to
 * @param {string} content HTML contents to append
 */
function AppendHTML(divId, content) {
    document.getElementById(divId.id).innerHTML += "\n" + content;
}

/**
 * Switches global variable to a "completed" symbol. Adds +1 or +2 to percent property.
 */
function CurrentDataTrue(divId = "") {
    completionSymbol = SYMBOL_TRUE;
    if (divId) {
        divId.percent++;
        if (divId.id === "hk-equipment") divId.percent++; // double % for equipment
    }
}

/**
 * Switches global variable to a "not completed" symbol
 */
function CurrentDataFalse() {
    completionSymbol = SYMBOL_FALSE;
}

/**
 * Switches global variable to an "information" symbol
 */
function CurrentDataInfo() {
    completionSymbol = SYMBOL_INFO;
}

/**
 * Switches global variable to no symbol (span with left padding)
 */
function CurrentDataBlank() {
    completionSymbol = SYMBOL_EMPTY;
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

    if (sec < 10) sec = "0" + sec;
    if (minutes < 10) minutes = "0" + minutes;

    let textFill = "Time Played:" + pSpan + "<b>" + hours + " h " + minutes + " min " + sec + " sec</b>";

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + divEnd;
}

/**
 * Searches for completionPercentage in playerData and fills HTML with the value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} completionPercentage Number of completion percentage
 */
function CheckCompletionPercent(divId, completionPercentage) {

    (completionPercentage >= 112) ? CurrentDataTrue(): CurrentDataFalse();

    let textFill = "Game Completion:" + pSpan + "<b>" + completionPercentage + " %</b>" + pSpan + "(out of " + divId.maxPercent + " %)";
    document.getElementById(divId.id).innerHTML += divStart + completionSymbol + textFill + divEnd;
}

/**
 * Fills HTML with appriopriate number of health mask images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} masks Number of max health masks from the save
 * @param {number} permadeathMode Value of permadeathMode property. 0 = Normal, 1 = Steel Soul
 */
function CheckHealthMasks(divId, masks, permadeathMode) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Health:</span>";
    let maskImages = "";
    let maskNormal = "<img src='img/health-mask.png' class='health-mask'>";
    let maskSteel = "<img src='img/health-mask-steel.png' class='health-mask'>";
    let maskImg = "";

    (permadeathMode === 1) ? maskImg = maskSteel: maskImg = maskNormal;

    for (let i = 0; i < masks; i++) {
        maskImages += maskImg;
    }

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + maskImages + divEnd;
}

/**
 * Fills HTML with appriopriate number of soul orbs images
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} totalSoul Number of max Soul reserve from the save. 99 = full Soul Orb
 */
function CheckSoulOrbs(divId, totalSoul) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Soul:</span>";
    let soulImages = "";
    let soulNormal = "<img src='img/soul-orb.png' class='soul-orb'>";
    let soulImg = soulNormal;

    for (let i = 0, total = totalSoul / 33; i < total; i++) {
        soulImages += soulImg;
    }

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + soulImages + divEnd;
}

/**
 * Fills HTML with the Geo value of the save file
 * @param {object} divId ID of the HTML element for data appending
 * @param {number} geoValue Number of total Geo value
 */
function CheckGeo(divId, geoValue) {

    let icon = SYMBOL_EMPTY;
    let textFill = "<span>Geo:</span><img src='img/geo.png' class='geo-symbol'><b>" + geoValue + "</b>";

    document.getElementById(divId.id).innerHTML += divStart + icon + textFill + divEnd;
}

/**
 * Verifies if the data in a specific object is true or false, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckIfDataTrue(divId, dataObject, playerData) {
    for (let i in dataObject) {
        (playerData[i] === true) ? CurrentDataTrue(divId): CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckSpellLevel(divId, dataObject, playerData) {
    for (let i in dataObject) {
        for (let j = 1; j <= 2; j++) {
            (playerData[i] >= j) ? CurrentDataTrue(divId): CurrentDataFalse();
            FillHTML(divId, dataObject[i][j][0], dataObject[i][j][1]);
        }
    }
}

/**
 * Verifies if the data in a specific object is 0 or > 0, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified (use copy - data inside this object will be deleted)
 * @param {object} playerData Reference/pointer to specific data where to search
 */
function CheckWarriorDreams(divId, dataObject, playerData) {
    for (let i in dataObject) {
        (playerData[i] > 0) ? CurrentDataTrue(divId): CurrentDataFalse();
        FillHTML(divId, dataObject[i][0], dataObject[i][1]);
    }
}

/**
 * Verifies if the data in a specific object are true or false, and appends HTML accordingly. Creates a copy of dataObject.
 * @param {object} divId ID of the HTML element for data appending
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
        if (orderedArray[i][3] === true) CurrentDataTrue(divId);
        FillHTML(divId, orderedArray[i][1], orderedArray[i][2]);
    }
}

/**
 * Verifies if the data in a specific object are true or false, or checks what values they have, and appends HTML accordingly.
 * @param {object} divId ID of the HTML element for data appending
 * @param {object} dataObject Object containing data to be verified
 * @param {object} playerData Reference/pointer to specific data where to search
 * @param {object} worldData Reference/pointer to specific data where to search
 */
function CheckAdditionalThings(divId, dataObject, playerData, worldData) {

    let textPrefix = "";
    let textSuffix = "";

    /**
     * Searches for a given item in the in-game area and returns true when found and collected.
     * @param {string} itemArea Code of the in-game area on the map
     * @param {string} itemId Name of the item
     * @returns {boolean}
     */
    function FindWorldItem(itemArea = "", itemId = "Shiny Item") {
        for (let i = 0, length = worldData.length; i < length; i++) {
            if (worldData[i].id === itemId) {
                if (worldData[i].sceneName === itemArea) {
                    if (worldData[i].activated === true) return true;
                }
            }
        }
        return false;
    }

    for (let i in dataObject) {
        textPrefix = dataObject[i][0];
        (dataObject[i][1]) ? textSuffix = dataObject[i][1]: textSuffix = "";

        switch (i) {
            case "grubsCollected":
            case "dreamOrbs":
            case "fountainGeo":
            case "nailDamage":
            case "stationsOpened":
            case "charmSlots":
            case "journalEntriesCompleted":
            case "journalNotesCompleted":
            case "whiteDefenderDefeats":
            case "greyPrinceDefeats":
                let amount = playerData[i];
                if (i === "stationsOpened") {
                    if (playerData.openedHiddenStation === true) amount++;
                }
                let countTotal = amount;
                if (i === "journalEntriesCompleted" || i === "journalNotesCompleted") {
                    countTotal = amount + " / " + playerData.journalEntriesTotal;
                }
                textPrefix += ": " + countTotal;
                (amount >= dataObject[i][2]) ? CurrentDataTrue(): CurrentDataBlank();
                break;
            case "dreamOrbsSpent":
            case "rancidEggs":
            case "xunFlowerBrokeTimes":
                CurrentDataBlank();
                textPrefix += ": " + Math.abs(playerData[i]);
                break;
            case "shopkeeperKey":
                (playerData.hasSlykey === true || playerData.gaveSlykey === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "elegantKey":
                (playerData.hasWhiteKey === true || playerData.usedWhiteKey === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "loveKey":
                (playerData.hasLoveKey === true || playerData.openedLoveDoor === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "simpleKeyCityOfTears": // #2
                (FindWorldItem("Ruins1_17", "Shiny Item")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "simpleKeyAncientBasin": // #3
                (FindWorldItem("Abyss_20", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreAncientBasin": // #1
                (FindWorldItem("Abyss_17", "Battle Scene Ore")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreSeer": // #2
                (playerData.dreamReward2 === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreCrystalPeak": // #3
                (FindWorldItem("Mines_34", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreDeepnest": // #4
                (FindWorldItem("Deepnest_32", "Shiny Item Stand")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreGrubfather": // #5
                (FindWorldItem("Crossroads_38", "Shiny Item Ore")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "paleOreColosseum": // #6
                (FindWorldItem("Room_Colosseum_Silver", "Shiny Item")) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            case "relicsWandererJournal":
            case "relicsHallownestSeal":
            case "relicsKingsIdol":
            case "relicsArcaneEgg":
                let total = playerData[dataObject[i][3]] + playerData[dataObject[i][4]];
                (total >= dataObject[i][2]) ? CurrentDataTrue(): CurrentDataBlank();
                textPrefix += ": " + total;
                break;
            case "bossDoorStateTier5":
                (playerData[i].completed === true) ? CurrentDataTrue(): CurrentDataFalse();
                break;
            default:
                (playerData[i] === true) ? CurrentDataTrue(): CurrentDataFalse();
        }

        FillHTML(divId, textPrefix, textSuffix);
    }
}

/**
 * Checks, validates and shows hints to the player depending on their save progression, in chronological order. Shows only hint for the last uncompleted event. If Hollow Knight is defeated, shows a dummy text.
 * @param {object} divId object containing div hints ID and h2 title
 * @param {object} dataObject object containing all hints data
 * @param {object} playerData object containing HK Player Data to look in
 * @param {object} worldData object containing HK World Data to look in
 * @returns {bool} true when defeated Hollow Knight, false if not
 */
function CheckHintsTrue(divId, dataObject, playerData, worldData) {

    if (playerData.killedHollowKnight === true) {
        // a text to show when player already finished their first playthrough (killed Hollow Knight first time)
        FillHTML(divId, "", "...a successful Knight who doesn't need hints anymore");
        return true;
    }

    for (let i in dataObject) {
        if (playerData[i] === true) {
            continue;
        } else if (i === "fireballLevel") {
            if (playerData[i] >= 1) {
                continue;
            } else {
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else if (i === "Crossroads_04") {
            let GruzMotherDefeated = false;

            for (let k = 0, length = worldData.length; k < length; k++) {
                if (worldData[k].id === "Battle Scene" && worldData[k].sceneName === "Crossroads_04" && worldData[k].activated === true) {
                    GruzMotherDefeated = true;
                    break;
                }
            }
            if (GruzMotherDefeated) {
                continue; // next dataObject (i)
            } else {
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else if (i === "dungDefenderOrHornet2") {
            if (playerData.defeatedDungDefender === true) {
                continue;
            } else if (playerData.hornetOutskirtsDefeated === true) {
                continue;
            } else { // if no Dung Defender or Hornet 2
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else if (i === "ismaTearOrShadeCloak") {
            if (playerData.hasAcidArmour === true) {
                continue;
            } else if (playerData.hasKingsBrand === true) {
                if (playerData.hasShadowDash === true) {
                    continue;
                } else { // if Kings Brand but no Shade Cloak
                    FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                    return false;
                }
            } else { // if no Isma's Tear or Kings Brand
                FillHTML(divId, dataObject[i][0], dataObject[i][1]);
                return false;
            }
        } else { // if anything from the hints list is not done
            FillHTML(divId, dataObject[i][0], dataObject[i][1]);
            return false;
        }
    } // end: for (let i in dataObject)
} // function CheckHintsTrue()

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
    CheckPlayTime(divIdObj.intro, 0)

    // Game Completion
    CheckCompletionPercent(divIdObj.intro, 0);

    // Fleur Divide
    AppendHTML(divIdObj.intro, FLEUR_DIVIDE);

    // Health Masks
    CheckHealthMasks(divIdObj.intro, 5, 0);

    // Soul Orbs
    CheckSoulOrbs(divIdObj.intro, 99);

    // Geo
    CheckGeo(divIdObj.intro, 0);

    // First Hint Only
    FillHTML(divIdObj.hints, HK_HINTS.fireballLevel[0], HK_HINTS.fireballLevel[1]);

    // Temp arrays storing references (addresses) to objects for looping through them (duplicates important)
    let hkObjArray = [HK_BOSSES, HK_BOSSES_WORLD, HK_CHARMS, HK_EQUIPMENT, HK_NAILARTS, HK_MASKSHARDS, HK_MASKSHARDS_WORLD, HK_VESSELFRAGMENTS, HK_VESSELFRAGMENTS_WORLD, HK_DREAMERS, HK_COLOSSEUM, HK_DREAMNAIL, HK_WARRIORDREAMS, HK_GRIMMTROUPE, HK_LIFEBLOOD, HK_GODMASTER, HK_ESSENTIAL, HK_ADDITIONAL];

    // duplicates and order important - must be the same as in hkObjArray[]
    let divObjArray = [divIdObj.bosses, divIdObj.bosses, divIdObj.charms, divIdObj.equipment, divIdObj.nailArts, divIdObj.maskShards, divIdObj.maskShards, divIdObj.vesselFragments, divIdObj.vesselFragments, divIdObj.dreamers, divIdObj.colosseum, divIdObj.dreamNail, divIdObj.warriorDreams, divIdObj.grimmTroupe, divIdObj.lifeblood, divIdObj.godmaster, divIdObj.essential, divIdObj.additional];

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

    // Fleur Dividers
    AppendHTML(divIdObj.godmaster, FLEUR_DIVIDE);
    AppendHTML(divIdObj.essential, FLEUR_DIVIDE);
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

/**
 * Zero-fill all "percent" properties in the JSON Object (reset to default)
 * @param {object} jsObj object containing the "percent" properties to be reset to 0
 */
function ResetCompletion(jsObj) {

    for (let i in jsObj) {
        if (jsObj[i].hasOwnProperty("percent")) jsObj[i].percent = 0;
    }
}