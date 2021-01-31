// ---------------- Hollow Knight Data Constant Objects ----------------- //
/*
    This is the whole database for the tool, based on the .json save file data
*/

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
    achievements: {
        h2: "Achievements Essentials",
        id: "hk-achievements"
    },
    statistics: {
        h2: "Game Statistics",
        id: "hk-statistics"
    }
};

const HINTS = {
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

const BOSSES = {
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
const BOSSES_WORLD = {
    Crossroads_04: ["Gruz Mother", "Forgotten Crossroads"], // killedBigFly
    Crossroads_09: ["Brooding Mawlek", "Forgotten Crossroads"] // killedMawlek
};

// reference: https://radiance.host/apidocs/Charms.html
const CHARMS = {
    gotCharm_1: ["#1 Gathering Swarm", "Sly: 300 Geo"], // 1
    gotCharm_2: ["#2 Wayward Compass", "Iselda: 220 Geo"], // 1
    gotCharm_3: ["#3 Grubsong", "Grubfather: 10 Grubs rescued"], // 1
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
    gotCharm_35: ["#35 Grubberfly’s Elegy", "Grubfather: 46 Grubs rescued"], // 3
    gotCharm_36: ["#36 Kingsoul", "Queen's Gardens + Ancient Basin"], // 5
};

const COLOSSEUM = {
    colosseumBronzeCompleted: ["Trial of the Warrior", "Little Fool: 100 Geo"],
    colosseumSilverCompleted: ["Trial of the Conqueror", "Little Fool: 450 Geo + Warrior completed"],
    colosseumGoldCompleted: ["Trial of the Fool", "Little Fool: 800 Geo + Conqueror completed"],
};

const DREAMERS = {
    lurienDefeated: ["Lurien the Watcher", "City of Tears: Watcher's Spire"],
    monomonDefeated: ["Monomon the Teacher", "Fog Canyon: Teacher's Archives"],
    hegemolDefeated: ["Herrah the Beast", "Deepnest: Distant Village"]
};

const DREAMNAIL = {
    hasDreamNail: ["Dream Nail acquired", "Resting Grounds"],
    dreamNailUpgraded: ["Awoken Dream Nail", "Seer: 1800 Essence"],
    mothDeparted: ["Hear the Seer's final words", "Seer: 2400 Essence"]
};

const EQUIPMENT = {
    hasDash: ["Mothwing Cloak", "Greenpath: Dash ability"],
    hasWalljump: ["Mantis Claw", "Mantis Village: Wall Jump ability"],
    hasSuperDash: ["Crystal Heart", "Crystal Peak: Super Dash ability"],
    hasDoubleJump: ["Monarch Wings", "Ancient Basin: Double Jump ability"],
    hasAcidArmour: ["Isma's Tear", "Royal Waterways: Acid Armour ability"],
    hasKingsBrand: ["King's Brand", "Kingdom's Edge"],
    hasShadowDash: ["Shade Cloak", "The Abyss: Shadow Dash ability"]
};

const MASKSHARDS = {
    slyShellFrag1: ["Mask Shard #1", "Sly: 150 Geo"],
    slyShellFrag2: ["Mask Shard #2", "Sly: 500 Geo"],
    slyShellFrag3: ["Mask Shard #3", "Sly: 800 Geo + Shopkeeper's Key"],
    slyShellFrag4: ["Mask Shard #4", "Sly: 1500 Geo + Shopkeeper's Key"],
    dreamReward7: ["Mask Shard #5", "Seer: 1500 Essence"]
};

// "Heart Piece" sceneData.persistentBoolItems.id
const MASKSHARDS_WORLD = {
    Crossroads_13: ["Mask Shard #6", "Forgotten Crossroads: below Hot Springs"],
    Crossroads_09: ["Mask Shard #7", "Forgotten Crossroads: Brooding Mawlek"],
    Crossroads_38: ["Mask Shard #8", "Grubfather: 5 Grubs rescued"],
    Room_Bretta: ["Mask Shard #9", "Dirtmouth: Bretta's Room, rescue Bretta"],
    Fungus2_01: ["Mask Shard #10", "Queen's Station, requires Mantis Claw"],
    Waterways_04b: ["Mask Shard #11", "Royal Waterways"],
    Fungus1_36: ["Mask Shard #12", "Greenpath: Stone Sanctuary"],
    Mines_32: ["Mask Shard #13", "Crystal Peak: Enraged Guardian"],
    Fungus2_25: ["Mask Shard #14", "Deepnest: entrance from Fungal Wastes"],
    Hive_04: ["Mask Shard #15", "The Hive, use Hive Guardian"],
    Room_Mansion: ["Mask Shard #16", "Resting Grounds: Delicate Flower"]
};

const VESSELFRAGMENTS = {
    slyVesselFrag1: ["Vessel Fragment #1", "Sly: 550 Geo"],
    slyVesselFrag2: ["Vessel Fragment #2", "Sly: 900 Geo + Shopkeeper's Key"],
    dreamReward5: ["Vessel Fragment #3", "Seer: 700 Essence"],
    vesselFragStagNest: ["Vessel Fragment #4", "Stag Nest"]
};

// "Vessel Fragment" sceneData.persistentBoolItems.id
const VESSELFRAGMENTS_WORLD = {
    Fungus1_13: ["Vessel Fragment #5", "Greenpath: near Queen's Gardens exit"],
    Crossroads_37: ["Vessel Fragment #6", "Forgotten Crossroads: unlock City of Tears lift"],
    Ruins2_09: ["Vessel Fragment #7", "Above King's Station"],
    Deepnest_38: ["Vessel Fragment #8", "Deepnest: Goam platforming challenge"],
    Abyss_04: ["Vessel Fragment #9", "Ancient Basin Fountain: 3000 Geo"]
};

const NAILARTS = {
    hasDashSlash: ["Great Slash", "Nailmaster Sheo: Greenpath"], // this is correct
    hasUpwardSlash: ["Dash Slash", "Nailmaster Oro: Kingdom's Edge, 800 Geo"], // this is correct
    hasCyclone: ["Cyclone Slash", " Nailmaster Mato: Howling Cliffs"],
};

const NAILUPGRADES = [
    ["#0 Old Nail", "Starting Weapon"],
    ["#1 Sharpened Nail", "Nailsmith: 250 Geo"],
    ["#2 Channeled Nail", "Nailsmith: 800 Geo + 1 Pale Ore"],
    ["#3 Coiled Nail", "Nailsmith: 2000 Geo + 2 Pale Ore"],
    ["#4 Pure Nail", "Nailsmith: 4000 Geo + 3 Pale Ore"]
];

const SPELLS = {
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

const WARRIORDREAMS = {
    xeroDefeated: ["Xero", "Resting Grounds"],
    noEyesDefeated: ["No Eyes", "Greenpath: Stone Sanctuary"],
    elderHuDefeated: ["Elder Hu", "Fungal Wastes"],
    aladarSlugDefeated: ["Gorb", "Howling Cliffs"],
    mumCaterpillarDefeated: ["Marmu", "Queen's Gardens"],
    galienDefeated: ["Galien", "Deepnest"],
    markothDefeated: ["Markoth", "Kingdom's Edge, requires Shade Cloak"],
};

const GRIMMTROUPE = {
    gotCharm_37: ["Charm #37 Sprintmaster", "Sly: 400 Geo + Shopkeeper's Key"],
    gotCharm_38: ["Charm #38 Dreamshield", "Resting Grounds"],
    gotCharm_39: ["Charm #39 Weaversong", "Deepnest: Weaver's Den"],
    gotCharm_40: ["Charm #40 Grimmchild / Carefree Melody", "Dirtmouth"],
    killedGrimm: ["Troupe Leader Grimm", "Dirtmouth"]
};

const LIFEBLOOD = {
    killedHiveKnight: ["Hive Knight", "The Hive"]
};

const GODMASTER = {
    hasGodfinder: ["Godtuner", "Junk Pit, requires Simple Key"]
};

const GODMASTER_DOORS = [
    ["#1 Pantheon of the Master", "Godhome"],
    ["#2 Pantheon of the Artist", "Godhome"],
    ["#3 Pantheon of the Sage", "Godhome"],
    ["#4 Pantheon of the Knight", "Godhome"]
];

const ESSENTIAL = {
    grubsCollected: ["Grubs Rescued", "out of 46 total", 46],
    dreamOrbs: ["Essence Collected", "Dream Nail (2400 for completion)", 2400],
    stationsOpened: ["Stag Stations opened", "out of 10 total", 10],
    slyRescued: ["Sly Rescued", "Forgotten Crossroads, near Gruz Mother"],
    brettaRescued: ["Bretta Rescued", "Fungal Wastes, near Dashmaster charm statue"],
    hasLantern: ["Lumafly Lantern", "Sly: 1800 Geo"],
    shopkeeperKey: ["Shopkeeper's Key", "Crystal Peak"],
    elegantKey: ["Elegant Key", "Sly: 800 Geo + Shopkeeper's Key"],
    loveKey: ["Love Key", "Queen's Gardens, near Fungal Wastes"],
    slySimpleKey: ["Simple Key #1", "Sly: 950 Geo"],
    simpleKeyCityOfTears: ["Simple Key #2", "City of Tears"],
    simpleKeyAncientBasin: ["Simple Key #3", "Ancient Basin"],
    gotLurkerKey: ["Simple Key #4", "Kingdom's Edge: Colosseum of Fools"],
    paleOreAncientBasin: ["Pale Ore #1", "Ancient Basin"],
    paleOreSeer: ["Pale Ore #2", "Seer: 300 Essence"],
    paleOreCrystalPeak: ["Pale Ore #3", "Crystal Peak: Hallownest's Crown"],
    paleOreDeepnest: ["Pale Ore #4", "Deepnest, Nosk reward"],
    paleOreGrubfather: ["Pale Ore #5", "Grubfather: 31 Grubs rescued"],
    paleOreColosseum: ["Pale Ore #6", "Colosseum of Fools: Trial of the Conqueror"],
    fountainGeo: ["Geo in Fountain", "Ancient Basin: 3000 Geo maximum", 3000],
    hasTramPass: ["Tram Pass", "Deepnest, Failed Tramway"],
    nightmareLanternLit: ["Nightmare Lantern Lit", "Howling Cliffs, corpse of a large bug"]
};

const ACHIEVEMENTS = {
    areaMaps: ["Area Maps", "Cornifer and Iselda (out of 13)", 13, [
        "mapCrossroads", "mapGreenpath", "mapFogCanyon", "mapRoyalGardens", "mapFungalWastes", "mapCity", "mapWaterways", "mapMines", "mapDeepnest", "mapCliffs", "mapOutskirts", "mapRestingGrounds", "mapAbyss"
    ]],
    hasJournal: ["Hunter's Journal", "Greenpath: Hunter"],
    hasHuntersMark: ["Hunter's Mark", "Greenpath: Hunter"],
    journalEntriesCompleted: ["Creatures Encountered", "Hunter's Journal (164 max)", 164],
    journalNotesCompleted: ["Hunter Notes Completed", "Hunter's Journal (164 max)", 164],
    killedPrayerSlug: ["Journal: Maggot", "Forgotten Crossroads: False Knight secret room"],
    killedOrangeScuttler: ["Journal: Lightseed", "Infected Crossroads"],
    killedPigeon: ["Journal: Maskfly", "Greenpath, Queen's Gardens"],
    killedLazyFlyer: ["Journal: Aluba", "Lake of Unn, Queen's Gardens (near White Lady)"],
    killedAcidFlyer: ["Journal: Duranda", "Greenpath: Nailmaster Sheo's tent path"],
    killedAcidWalker: ["Journal: Durandoo", "Greenpath, Queen's Gardens"],
    killedPlantShooter: ["Journal: Gulka", "Greenpath: west of Stone Sanctuary"],
    killedMushroomTurret: ["Journal: Sporg", "Fungal Wastes"],
    killedZapBug: ["Journal: Charged Lumafly", "Fog Canyon: Teacher's Archives (tank)"],
    killedCrystalCrawler: ["Journal: Crystal Crawler", "Crystal Peak"],
    killedGorgeousHusk: ["Journal: Gorgeous Husk", "City of Tears: secret room"],
    killedWorm: ["Journal: Goam", "Infected Crossroads: near Fungal Wastes entrance"],
    killedBigCentipede: ["Journal: Garpede", "Deepnest: east of Hot Spring"],
    killedAbyssTendril: ["Journal: Void Tendrils", "The Abyss: secret room"],
    killedPaleLurker: ["Journal: Pale Lurker", "Colosseum of Fools: secret area"],
    falseKnightDreamDefeated: ["Failed Champion", "Forgotten Crossroads"],
    mageLordDreamDefeated: ["Soul Tyrant", "City of Tears: Soul Sanctum"],
    infectedKnightDreamDefeated: ["Lost Kin", "Ancient Basin"],
    whiteDefenderDefeated: ["White Defender", "Royal Waterways"],
    greyPrinceDefeated: ["Grey Prince Zote", "Dirtmouth: Bretta's Room (per save choice)"],
    killedHollowKnight: ["Hollow Knight", "Forgotten Crossroads: Black Egg Temple"],
    salubraBlessing: ["Salubra's Blessing", "Salubra: 800 Geo + all 40 Charms found"],
    gotShadeCharm: ["Void Heart", "Kingsoul + Birthplace"],
    killedFinalBoss: ["Radiance", "Forgotten Crossroads: Black Egg Temple"],
    bossDoorStateTier5: ["Embrace the Void", "Godhome: Pantheon of Hallownest"],
    zoteDead: ["Optimal Zote", "Neglect achievement (per save choice)"],
    nailsmithSpared: ["Optimal Nailsmith", "Happy Couple achievement (per save choice)"],
};

const STATISTICS = {
    nailDamage: ["Nail Damage", "Nailsmith upgrades, City of Tears", 21],
    charmSlots: ["Charm Notches", "out of 11 total", 11],
    notchShroomOgres: ["Charm Notch #1", "Fungal Wastes: Shroom Ogres room"],
    salubraNotch1: ["Charm Notch #2", "Salubra: 120 Geo + 5 Charms found"],
    salubraNotch2: ["Charm Notch #3", "Salubra: 500 Geo + 10 Charms found"],
    salubraNotch3: ["Charm Notch #4", "Salubra: 900 Geo + 18 Charms found"],
    salubraNotch4: ["Charm Notch #5", "Salubra: 1400 Geo + 25 Charms found"],
    colosseumBronzeCompleted: ["Charm Notch #6", "Colosseum of Fools: Trial of the Warrior"],
    notchFogCanyon: ["Charm Notch #7", "Fog Canyon: explosive eggs room"],
    gotGrimmNotch: ["Charm Notch #8", "Dirtmouth: Troupe Leader Grimm"],
    relicsWandererJournal: ["Relic #1 found total", "Wanderer's Journal (out of 14)", 14, "trinket1", "soldTrinket1"],
    relicsHallownestSeal: ["Relic #2 found total", "Hallownest Seal (out of 17)", 17, "trinket2", "soldTrinket2"],
    relicsKingsIdol: ["Relic #3 found total", "King's Idol (out of 8)", 8, "trinket3", "soldTrinket3"],
    relicsArcaneEgg: ["Relic #4 found total", "Arcane Egg (out of 4)", 4, "trinket4", "soldTrinket4"],
    geoPool: ["Shade Geo", "Amount of Geo the Shade is currently holding", 0], // not ghostCoins
    rancidEggs: ["Rancid Eggs", "Hallownest, Sly, Tuk"],
    xunFlowerBrokeTimes: ["Delicate Flowers broken", "Resting Grounds: Grey Mourner"],
    hasDreamGate: ["Dream Gate", "Seer: 900 Essence"],
    whisperingRoots: ["Whispering Roots completed", "Dream Nail (out of 15)", 15],
    fragileGreed_unbreakable: ["Unbreakable Greed", "Divine: Fragile Greed + 9000 Geo"],
    fragileHealth_unbreakable: ["Unbreakable Heart", "Divine: Fragile Heart + 12000 Geo"],
    fragileStrength_unbreakable: ["Unbreakable Strength", "Divine: Fragile Strength + 15000 Geo"],
    killedMenderBug: ["Journal: Menderbug", "Forgotten Crossroads + destroy sign"],
    killedBindingSeal: ["Journal: Seal of Binding", "White Palace: Path of Pain completion"],
    killedGodseekerMask: ["Journal: Weathered Mask", "Godhome: Land of Storms"],
    killedVoidIdol_1: ["Journal: Void Idol Attuned", "Godhome: Hall of Gods, defeat all"],
    killedVoidIdol_2: ["Journal: Void Idol Ascended", "Godhome: Hall of Gods, defeat all"],
    killedVoidIdol_3: ["Journal: Void Idol Radiant", "Godhome: Hall of Gods, defeat all"],
    whiteDefenderDefeats: ["White Defender times defeated", "Royal Waterways (5 max)", 5],
    greyPrinceDefeats: ["Grey Prince Zote times defeated", "Dirtmouth (10 max), (save choice)", 10],
    whitePalaceSecretRoomVisited: ["White Palace Secret Room visited", "Help identify this room!"],
    killsBindingSeal: ["Path of Pain", "White Palace: main secret area"],
};

export {
    DIV_ID,
    HINTS,
    BOSSES,
    BOSSES_WORLD,
    CHARMS,
    EQUIPMENT,
    NAILARTS,
    NAILUPGRADES,
    SPELLS,
    MASKSHARDS,
    MASKSHARDS_WORLD,
    VESSELFRAGMENTS,
    VESSELFRAGMENTS_WORLD,
    DREAMERS,
    COLOSSEUM,
    DREAMNAIL,
    WARRIORDREAMS,
    GRIMMTROUPE,
    LIFEBLOOD,
    GODMASTER,
    GODMASTER_DOORS,
    ESSENTIAL,
    ACHIEVEMENTS,
    STATISTICS
};