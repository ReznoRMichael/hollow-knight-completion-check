// ---------------- Hollow Knight Data Constant Objects ----------------- //
/*
    This is the whole database for the tool, based on the .json save file data
*/

const HK = {
    DIV_ID: {
        intro: {
            h2: "Game Status",
            id: "hk-intro",
            maxPercent: 112,
            saveVersion: "0.0.0.0"
        },
        hints: {
            h2: "My friend Elderbug once told me about...",
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
    },
    // hk-hints
    HINTS: {
        fireballLevel: {
            spoiler: "...a mysterious shaman living in a dwelling below the town of Dirtmouth"
        },
        hornet1Defeated: {
            spoiler: "...a skilled protector guarding ruins in a lush green forest"
        },
        hasDash: {
            spoiler: "...an old cloak lying on a green path near a broken shell"
        },
        hasWalljump: {
            spoiler: "...a sharp claw lying forgotten somewhere amidst the insect village"
        },
        Crossroads_04: {
            spoiler: "...a mother sleeping peacefully below the town of Dirtmouth"
        },
        slyRescued: {
            spoiler: "...a fellow town bug who seems to be lost somewhere in the crossroads"
        },
        hasLantern: {
            spoiler: "...a precious item able to carry some light to even the darkest places"
        },
        hasSuperDash: {
            spoiler: "...some powerful crystal beating somewhere deep inside the mines"
        },
        hasDreamNail: {
            spoiler: "...a weapon from a dream world only found where the souls can peacefully rest"
        },
        killedInfectedKnight: {
            spoiler: "...a shattered corpse forgotten in a windy cave in the ancient depths below the city"
        },
        hasDoubleJump: {
            spoiler: "...something incredibly light dropped by a monarchfly in the ancient depths below the city"
        },
        killedBlackKnight: {
            spoiler: "...discarded shells of black guards lying on the floor of a high spire"
        },
        lurienDefeated: {
            spoiler: "...a dreamer sleeping somewhere at the top of a high spire"
        },
        dungDefenderOrHornet2: {
            spoiler: "...a skilled combatant living at the heart of the sewers or watching over a shell amidst ash falling from the sky"
        },
        ismaTearOrShadeCloak: {
            spoiler: "...something precious in a grove accessed from the waterways or a massive royal door guarding a cloak behind the darkness"
        },
        defeatedMegaJelly: {
            spoiler: "...an intelligent being floating inside hidden archives behind the fog"
        },
        monomonDefeated: {
            spoiler: "...a dreamer sleeping somewhere hidden in a foggy area"
        },
        hegemolDefeated: {
            spoiler: "...a dreamer sleeping near a spider nest area"
        },
        killedHollowKnight: {
            spoiler: "...a disturbance inside a black temple"
        },
    },
    // hk-bosses
    BOSSES: {
        falseKnightDefeated: {
            name: "False Knight",
            spoiler: "Forgotten Crossroads",
            wiki: "False_Knight"
        }, // "Battle Scene" - "Crossroads_10" ?
        hornet1Defeated: {
            name: "Hornet Protector",
            spoiler: "Greenpath",
            wiki: "Hornet_Protector"
        },
        defeatedDungDefender: {
            name: "Dung Defender",
            spoiler: "Royal Waterways",
            wiki: "Dung_Defender"
        },
        mageLordDefeated: {
            name: "Soul Master",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: "Soul_Master"
        },
        killedBlackKnight: {
            name: "Watcher Knights",
            spoiler: "City of Tears: Watcher's Spire",
            wiki: "Watcher_Knight"
        },
        collectorDefeated: {
            name: "The Collector",
            spoiler: "City of Tears: Tower of Love",
            wiki: "Collector"
        },
        defeatedMantisLords: {
            name: "Mantis Lords",
            spoiler: "Mantis Village",
            wiki: "Mantis_Lords"
        },
        defeatedMegaJelly: {
            name: "Uumuu",
            spoiler: "Fog Canyon: Teacher's Archives",
            wiki: "Uumuu"
        },
        hornetOutskirtsDefeated: {
            name: "Hornet Sentinel",
            spoiler: "Kingdom's Edge",
            wiki: "Hornet_Sentinel"
        },
        killedInfectedKnight: {
            name: "Broken Vessel",
            spoiler: "Ancient Basin",
            wiki: "Broken_Vessel"
        },
        killedMimicSpider: {
            name: "Nosk",
            spoiler: "Deepnest",
            wiki: "Nosk"
        }, // "Battle Scene" - "Deepnest_32" ?
        killedTraitorLord: {
            name: "Traitor Lord",
            spoiler: "Queen's Gardens",
            wiki: "Traitor_Lord"
        } // "Battle Scene" - "Fungus3_23" ?
    },
    // hk-bosses
    // "Battle Scene" sceneData.persistentBoolItems.id
    BOSSES_WORLD: {
        Crossroads_04: {
            name: "Gruz Mother",
            spoiler: "Forgotten Crossroads",
            wiki: "Gruz_Mother"
        }, // killedBigFly
        Crossroads_09: {
            name: "Brooding Mawlek",
            spoiler: "Forgotten Crossroads",
            wiki: "Brooding_Mawlek"
        } // killedMawlek
    },
    // reference: https://radiance.host/apidocs/Charms.html
    CHARMS: {
        gotCharm_1: {
            name: "#1 Gathering Swarm",
            spoiler: "Sly: 300 Geo",
            wiki: "Gathering_Swarm"
        }, // 1
        gotCharm_2: {
            name: "#2 Wayward Compass",
            spoiler: "Iselda: 220 Geo",
            wiki: "Wayward_Compass"
        }, // 1
        gotCharm_3: {
            name: "#3 Grubsong",
            spoiler: "Grubfather: 10 Grubs rescued",
            wiki: "Grubsong"
        }, // 1
        gotCharm_4: {
            name: "#4 Stalwart Shell",
            spoiler: "Sly: 200 Geo",
            wiki: "Stalwart_Shell"
        }, // 2
        gotCharm_5: {
            name: "#5 Baldur Shell",
            spoiler: "Howling Cliffs",
            wiki: "Baldur_Shell"
        }, // 2
        gotCharm_6: {
            name: "#6 Fury of the Fallen",
            spoiler: "King's Pass",
            wiki: "Fury_of_the_Fallen"
        }, // 2
        gotCharm_7: {
            name: "#7 Quick Focus",
            spoiler: "Salubra: 800 Geo",
            wiki: "Quick_Focus"
        }, // 3
        gotCharm_8: {
            name: "#8 Lifeblood Heart",
            spoiler: "Salubra: 250 Geo",
            wiki: "Lifeblood_Heart"
        }, // 2
        gotCharm_9: {
            name: "#9 Lifeblood Core",
            spoiler: "The Abyss: 15 Lifeblood masks",
            wiki: "Lifeblood_Core"
        }, // 3
        gotCharm_10: {
            name: "#10 Defender's Crest",
            spoiler: "Royal Waterways",
            wiki: "Defender's_Crest"
        }, // 1
        gotCharm_11: {
            name: "#11 Flukenest",
            spoiler: "Royal Waterways",
            wiki: "Flukenest"
        }, // 3
        gotCharm_12: {
            name: "#12 Thorns of Agony",
            spoiler: "Greenpath",
            wiki: "Thorns_of_Agony"
        }, // 1
        gotCharm_13: {
            name: "#13 Mark of Pride",
            spoiler: "Mantis Village",
            wiki: "Mark_of_Pride"
        }, // 3
        gotCharm_14: {
            name: "#14 Steady Body",
            spoiler: "Salubra: 120 Geo",
            wiki: "Steady_Body"
        }, // 1
        gotCharm_15: {
            name: "#15 Heavy Blow",
            spoiler: "Sly: 350 Geo + Shopkeeper's Key",
            wiki: "Heavy_Blow"
        }, // 2
        gotCharm_16: {
            name: "#16 Sharp Shadow",
            spoiler: "Deepnest",
            wiki: "Sharp_Shadow"
        }, // 2
        gotCharm_17: {
            name: "#17 Spore Shroom",
            spoiler: "Fungal Wastes",
            wiki: "Spore_Shroom"
        }, // 1
        gotCharm_18: {
            name: "#18 Longnail",
            spoiler: "Salubra: 300 Geo",
            wiki: "Longnail"
        }, // 2
        gotCharm_19: {
            name: "#19 Shaman Stone",
            spoiler: "Salubra: 220 Geo",
            wiki: "Shaman_Stone"
        }, // 3
        gotCharm_20: {
            name: "#20 Soul Catcher",
            spoiler: "Forgotten Crossroads: Ancestral Mound",
            wiki: "Soul_Catcher"
        }, // 2
        gotCharm_21: {
            name: "#21 Soul Eater",
            spoiler: "Resting Grounds",
            wiki: "Soul_Eater"
        }, // 4
        gotCharm_22: {
            name: "#22 Glowing Womb",
            spoiler: "Forgotten Crossroads",
            wiki: "Glowing_Womb"
        }, // 2
        gotCharm_23: {
            name: "#23 Fragile Heart",
            spoiler: "Leg Eater: 350/280 Geo",
            wiki: "Fragile_Heart"
        }, // 2
        gotCharm_24: {
            name: "#24 Fragile Greed",
            spoiler: "Leg Eater: 250/200 Geo",
            wiki: "Fragile_Greed"
        }, // 2
        gotCharm_25: {
            name: "#25 Fragile Strength",
            spoiler: "Leg Eater: 600/480 Geo",
            wiki: "Fragile_Strength"
        }, // 3
        gotCharm_26: {
            name: "#26 Nailmaster’s Glory",
            spoiler: "Sly: All Nail Arts",
            wiki: "Nailmaster's_Glory"
        }, // 1
        gotCharm_27: {
            name: "#27 Joni’s Blessing",
            spoiler: "Howling Cliffs: Joni's Repose",
            wiki: "Joni's_Blessing"
        }, // 4
        gotCharm_28: {
            name: "#28 Shape of Unn",
            spoiler: "Greenpath: Lake of Unn",
            wiki: "Shape_of_Unn"
        }, // 2
        gotCharm_29: {
            name: "#29 Hiveblood",
            spoiler: "The Hive",
            wiki: "Hiveblood"
        }, // 4
        gotCharm_30: {
            name: "#30 Dream Wielder",
            spoiler: "Seer: 500 Essence",
            wiki: "Dream_Wielder"
        }, // 1
        gotCharm_31: {
            name: "#31 Dashmaster",
            spoiler: "Fungal Wastes",
            wiki: "Dashmaster"
        }, // 2
        gotCharm_32: {
            name: "#32 Quick Slash",
            spoiler: "Kingdom's Edge",
            wiki: "Quick_Slash"
        }, // 3
        gotCharm_33: {
            name: "#33 Spell Twister",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: "Spell_Twister"
        }, // 2
        gotCharm_34: {
            name: "#34 Deep Focus",
            spoiler: "Crystal Peak",
            wiki: "Deep_Focus"
        }, // 4
        gotCharm_35: {
            name: "#35 Grubberfly’s Elegy",
            spoiler: "Grubfather: 46 Grubs rescued",
            wiki: "Grubberfly's_Elegy"
        }, // 3
        gotCharm_36: {
            name: "#36 Kingsoul",
            spoiler: "Queen's Gardens + Ancient Basin",
            wiki: "Kingsoul"
        }, // 5
    },
    COLOSSEUM: {
        colosseumBronzeCompleted: {
            name: "Trial of the Warrior",
            spoiler: "Little Fool: 100 Geo",
            wiki: ""
        },
        colosseumSilverCompleted: {
            name: "Trial of the Conqueror",
            spoiler: "Little Fool: 450 Geo + Warrior completed",
            wiki: ""
        },
        colosseumGoldCompleted: {
            name: "Trial of the Fool",
            spoiler: "Little Fool: 800 Geo + Conqueror completed",
            wiki: ""
        },
    },
    DREAMERS: {
        lurienDefeated: {
            name: "Lurien the Watcher",
            spoiler: "City of Tears: Watcher's Spire",
            wiki: ""
        },
        monomonDefeated: {
            name: "Monomon the Teacher",
            spoiler: "Fog Canyon: Teacher's Archives",
            wiki: ""
        },
        hegemolDefeated: {
            name: "Herrah the Beast",
            spoiler: "Deepnest: Distant Village",
            wiki: ""
        }
    },
    DREAMNAIL: {
        hasDreamNail: {
            name: "Dream Nail acquired",
            spoiler: "Resting Grounds",
            wiki: ""
        },
        dreamNailUpgraded: {
            name: "Awoken Dream Nail",
            spoiler: "Seer: 1800 Essence",
            wiki: ""
        },
        mothDeparted: {
            name: "Hear the Seer's final words",
            spoiler: "Seer: 2400 Essence",
            wiki: ""
        }
    },
    EQUIPMENT: {
        hasDash: {
            name: "Mothwing Cloak",
            spoiler: "Greenpath: Dash ability",
            wiki: ""
        },
        hasWalljump: {
            name: "Mantis Claw",
            spoiler: "Mantis Village: Wall Jump ability",
            wiki: ""
        },
        hasSuperDash: {
            name: "Crystal Heart",
            spoiler: "Crystal Peak: Super Dash ability",
            wiki: ""
        },
        hasDoubleJump: {
            name: "Monarch Wings",
            spoiler: "Ancient Basin: Double Jump ability",
            wiki: ""
        },
        hasAcidArmour: {
            name: "Isma's Tear",
            spoiler: "Royal Waterways: Acid Armour ability",
            wiki: ""
        },
        hasKingsBrand: {
            name: "King's Brand",
            spoiler: "Kingdom's Edge",
            wiki: ""
        },
        hasShadowDash: {
            name: "Shade Cloak",
            spoiler: "The Abyss: Shadow Dash ability",
            wiki: ""
        }
    },
    MASKSHARDS: {
        slyShellFrag1: {
            name: "Mask Shard #1",
            spoiler: "Sly: 150 Geo",
            wiki: ""
        },
        slyShellFrag2: {
            name: "Mask Shard #2",
            spoiler: "Sly: 500 Geo",
            wiki: ""
        },
        slyShellFrag3: {
            name: "Mask Shard #3",
            spoiler: "Sly: 800 Geo + Shopkeeper's Key",
            wiki: ""
        },
        slyShellFrag4: {
            name: "Mask Shard #4",
            spoiler: "Sly: 1500 Geo + Shopkeeper's Key",
            wiki: ""
        },
        dreamReward7: {
            name: "Mask Shard #5",
            spoiler: "Seer: 1500 Essence",
            wiki: ""
        }
    },
    // "Heart Piece" sceneData.persistentBoolItems.id
    MASKSHARDS_WORLD: {
        Crossroads_13: {
            name: "Mask Shard #6",
            spoiler: "Forgotten Crossroads: below Hot Springs",
            wiki: ""
        },
        Crossroads_09: {
            name: "Mask Shard #7",
            spoiler: "Forgotten Crossroads: Brooding Mawlek",
            wiki: ""
        },
        Crossroads_38: {
            name: "Mask Shard #8",
            spoiler: "Grubfather: 5 Grubs rescued",
            wiki: ""
        },
        Room_Bretta: {
            name: "Mask Shard #9",
            spoiler: "Dirtmouth: Bretta's Room, rescue Bretta",
            wiki: ""
        },
        Fungus2_01: {
            name: "Mask Shard #10",
            spoiler: "Queen's Station, requires Mantis Claw",
            wiki: ""
        },
        Waterways_04b: {
            name: "Mask Shard #11",
            spoiler: "Royal Waterways",
            wiki: ""
        },
        Fungus1_36: {
            name: "Mask Shard #12",
            spoiler: "Greenpath: Stone Sanctuary",
            wiki: ""
        },
        Mines_32: {
            name: "Mask Shard #13",
            spoiler: "Crystal Peak: Enraged Guardian",
            wiki: ""
        },
        Fungus2_25: {
            name: "Mask Shard #14",
            spoiler: "Deepnest: entrance from Fungal Wastes",
            wiki: ""
        },
        Hive_04: {
            name: "Mask Shard #15",
            spoiler: "The Hive, use Hive Guardian",
            wiki: ""
        },
        Room_Mansion: {
            name: "Mask Shard #16",
            spoiler: "Resting Grounds: Delicate Flower",
            wiki: ""
        }
    },
    VESSELFRAGMENTS: {
        slyVesselFrag1: {
            name: "Vessel Fragment #1",
            spoiler: "Sly: 550 Geo",
            wiki: ""
        },
        slyVesselFrag2: {
            name: "Vessel Fragment #2",
            spoiler: "Sly: 900 Geo + Shopkeeper's Key",
            wiki: ""
        },
        dreamReward5: {
            name: "Vessel Fragment #3",
            spoiler: "Seer: 700 Essence",
            wiki: ""
        },
        vesselFragStagNest: {
            name: "Vessel Fragment #4",
            spoiler: "Stag Nest",
            wiki: ""
        }
    },
    // "Vessel Fragment" sceneData.persistentBoolItems.id
    VESSELFRAGMENTS_WORLD: {
        Fungus1_13: {
            name: "Vessel Fragment #5",
            spoiler: "Greenpath: near Queen's Gardens exit",
            wiki: ""
        },
        Crossroads_37: {
            name: "Vessel Fragment #6",
            spoiler: "Forgotten Crossroads: unlock City of Tears lift",
            wiki: ""
        },
        Ruins2_09: {
            name: "Vessel Fragment #7",
            spoiler: "Above King's Station",
            wiki: ""
        },
        Deepnest_38: {
            name: "Vessel Fragment #8",
            spoiler: "Deepnest: Goam platforming challenge",
            wiki: ""
        },
        Abyss_04: {
            name: "Vessel Fragment #9",
            spoiler: "Ancient Basin Fountain: 3000 Geo",
            wiki: ""
        }
    },
    NAILARTS: {
        hasDashSlash: {
            name: "Great Slash",
            spoiler: "Nailmaster Sheo: Greenpath",
            wiki: ""
        }, // this is correct
        hasUpwardSlash: {
            name: "Dash Slash",
            spoiler: "Nailmaster Oro: Kingdom's Edge, 800 Geo",
            wiki: ""
        }, // this is correct
        hasCyclone: {
            name: "Cyclone Slash",
            spoiler: "Nailmaster Mato: Howling Cliffs",
            wiki: ""
        },
    },
    NAILUPGRADES: {
        oldNail: {
            name: "#0 Old Nail",
            spoiler: "Starting Weapon",
            wiki: ""
        },
        sharpenedNail: {
            name: "#1 Sharpened Nail",
            spoiler: "Nailsmith: 250 Geo",
            wiki: ""
        },
        channeledNail: {
            name: "#2 Channeled Nail",
            spoiler: "Nailsmith: 800 Geo + 1 Pale Ore",
            wiki: ""
        },
        coiledNail: {
            name: "#3 Coiled Nail",
            spoiler: "Nailsmith: 2000 Geo + 2 Pale Ore",
            wiki: ""
        },
        pureNail: {
            name: "#4 Pure Nail",
            spoiler: "Nailsmith: 4000 Geo + 3 Pale Ore",
            wiki: ""
        }
    },
    SPELLS: {
        vengefulSpirit: {
            fireballLevel: 1,
            name: "Vengeful Spirit",
            spoiler: "Forgotten Crossroads: Ancestral Mound",
            wiki: ""
        },
        shadeSoul: {
            fireballLevel: 2,
            name: "Shade Soul",
            spoiler: "City of Tears: Soul Sanctum + Elegant Key",
            wiki: ""
        },
        desolateDive: {
            quakeLevel: 1,
            name: "Desolate Dive",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: ""
        },
        descendingDark: {
            quakeLevel: 2,
            name: "Descending Dark",
            spoiler: "Crystal Peak: Crystallised Mound",
            wiki: ""
        },
        howlingWraiths: {
            screamLevel: 1,
            name: "Howling Wraiths",
            spoiler: "Fog Canyon: Overgrown Mound",
            wiki: ""
        },
        abyssShriek: {
            screamLevel: 2,
            name: "Abyss Shriek",
            spoiler: "The Abyss",
            wiki: ""
        }
    },
    WARRIORDREAMS: {
        xeroDefeated: {
            name: "Xero",
            spoiler: "Resting Grounds",
            wiki: ""
        },
        noEyesDefeated: {
            name: "No Eyes",
            spoiler: "Greenpath: Stone Sanctuary",
            wiki: ""
        },
        elderHuDefeated: {
            name: "Elder Hu",
            spoiler: "Fungal Wastes",
            wiki: ""
        },
        aladarSlugDefeated: {
            name: "Gorb",
            spoiler: "Howling Cliffs",
            wiki: ""
        },
        mumCaterpillarDefeated: {
            name: "Marmu",
            spoiler: "Queen's Gardens",
            wiki: ""
        },
        galienDefeated: {
            name: "Galien",
            spoiler: "Deepnest",
            wiki: ""
        },
        markothDefeated: {
            name: "Markoth",
            spoiler: "Kingdom's Edge, requires Shade Cloak",
            wiki: ""
        },
    },
    GRIMMTROUPE: {
        gotCharm_37: {
            name: "Charm #37 Sprintmaster",
            spoiler: "Sly: 400 Geo + Shopkeeper's Key",
            wiki: ""
        },
        gotCharm_38: {
            name: "Charm #38 Dreamshield",
            spoiler: "Resting Grounds",
            wiki: ""
        },
        gotCharm_39: {
            name: "Charm #39 Weaversong",
            spoiler: "Deepnest: Weaver's Den",
            wiki: ""
        },
        gotCharm_40: {
            name: "Charm #40 Grimmchild / Carefree Melody",
            spoiler: "Dirtmouth",
            wiki: ""
        },
        killedGrimm: {
            name: "Troupe Leader Grimm",
            spoiler: "Dirtmouth, collect 6 flames",
            wiki: ""
        },
        grimmChildLevel: {
            name: "Nightmare King Grimm / Banishment",
            spoiler: "Dirtmouth or Howling Cliffs",
            wiki: ""
        }
    },
    LIFEBLOOD: {
        killedHiveKnight: {
            name: "Hive Knight",
            spoiler: "The Hive, guards Hiveblood charm",
            wiki: ""
        }
    },
    GODMASTER_DOORS: {
        pantheonMaster: {
            name: "#1 Pantheon of the Master",
            spoiler: "Godhome",
            wiki: ""
        },
        pantheonArtist: {
            name: "#2 Pantheon of the Artist",
            spoiler: "Godhome",
            wiki: ""
        },
        pantheonSage: {
            name: "#3 Pantheon of the Sage",
            spoiler: "Godhome",
            wiki: ""
        },
        pantheonKnight: {
            name: "#4 Pantheon of the Knight",
            spoiler: "Godhome, complete #1, #2 and #3",
            wiki: ""
        }
    },
    GODMASTER: {
        hasGodfinder: {
            name: "Godtuner",
            spoiler: "Junk Pit, requires Simple Key",
            wiki: ""
        }
    },
    ESSENTIAL: {
        grubsCollected: {
            name: "Grubs Rescued",
            spoiler: "out of 46 total",
            max: 46,
            wiki: ""
        },
        dreamOrbs: {
            name: "Essence Collected",
            spoiler: "Dream Nail (2400 for completion)",
            max: 2400,
            wiki: ""
        },
        stationsOpened: {
            name: "Stag Stations opened",
            spoiler: "out of 10 total",
            max: 10,
            wiki: ""
        },
        fountainGeo: {
            name: "Geo in Fountain",
            spoiler: "Ancient Basin: 3000 Geo maximum",
            max: 3000,
            wiki: ""
        },
        slyRescued: {
            name: "Sly Rescued",
            spoiler: "Forgotten Crossroads, near Gruz Mother",
            wiki: ""
        },
        brettaRescued: {
            name: "Bretta Rescued",
            spoiler: "Fungal Wastes, near Dashmaster charm statue",
            wiki: ""
        },
        hasLantern: {
            name: "Lumafly Lantern",
            spoiler: "Sly: 1800 Geo",
            wiki: ""
        },
        shopkeeperKey: {
            name: "Shopkeeper's Key",
            spoiler: "Crystal Peak, below Quirrel location",
            wiki: ""
        },
        elegantKey: {
            name: "Elegant Key",
            spoiler: "Sly: 800 Geo + Shopkeeper's Key",
            wiki: ""
        },
        loveKey: {
            name: "Love Key",
            spoiler: "Queen's Gardens, near Fungal Wastes",
            wiki: ""
        },
        slySimpleKey: {
            name: "Simple Key #1",
            spoiler: "Sly: 950 Geo",
            wiki: ""
        },
        simpleKeyCityOfTears: {
            name: "Simple Key #2",
            spoiler: "City of Tears, below west Stag Station",
            wiki: ""
        },
        simpleKeyAncientBasin: {
            name: "Simple Key #3",
            spoiler: "Ancient Basin, below Broken Vessel",
            wiki: ""
        },
        gotLurkerKey: {
            name: "Simple Key #4",
            spoiler: "Colosseum of Fools: Pale Lurker's Retreat",
            wiki: ""
        },
        paleOreAncientBasin: {
            name: "Pale Ore #1",
            spoiler: "Ancient Basin, near Cloth location",
            wiki: ""
        },
        paleOreSeer: {
            name: "Pale Ore #2",
            spoiler: "Seer: 300 Essence",
            wiki: ""
        },
        paleOreCrystalPeak: {
            name: "Pale Ore #3",
            spoiler: "Crystal Peak: Hallownest's Crown",
            wiki: ""
        },
        paleOreDeepnest: {
            name: "Pale Ore #4",
            spoiler: "Deepnest, Nosk reward",
            wiki: ""
        },
        paleOreGrubfather: {
            name: "Pale Ore #5",
            spoiler: "Grubfather: 31 Grubs rescued",
            wiki: ""
        },
        paleOreColosseum: {
            name: "Pale Ore #6",
            spoiler: "Colosseum of Fools: Trial of the Conqueror",
            wiki: ""
        },
        waterwaysAcidDrained: {
            name: "Acid Drained",
            spoiler: "Royal Waterways, lever after Dung Defender",
            wiki: ""
        },
        hasTramPass: {
            name: "Tram Pass",
            spoiler: "Deepnest, Failed Tramway",
            wiki: ""
        },
        nightmareLanternLit: {
            name: "Nightmare Lantern Lit",
            spoiler: "Howling Cliffs, corpse of a large bug",
            wiki: ""
        }
    },
    GRUBS_LIST: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
    ACHIEVEMENTS: {
        areaMaps: {
            name: "Area Maps",
            spoiler: "Cornifer and Iselda (out of 13)",
            max: 13,
            list: [
                "mapCrossroads", "mapGreenpath", "mapFogCanyon", "mapRoyalGardens", "mapFungalWastes", "mapCity", "mapWaterways", "mapMines", "mapDeepnest", "mapCliffs", "mapOutskirts", "mapRestingGrounds", "mapAbyss"
            ],
            wiki: ""
        },
        journalEntriesCompleted: {
            name: "Creatures Encountered",
            spoiler: "Hunter's Journal (164 max)",
            max: 164,
            wiki: ""
        },
        journalNotesCompleted: {
            name: "Hunter Notes Completed",
            spoiler: "Hunter's Journal (164 max)",
            max: 164,
            wiki: ""
        },
        hasJournal: {
            name: "Hunter's Journal",
            spoiler: "Greenpath: Hunter",
            wiki: ""
        },
        hasHuntersMark: {
            name: "Hunter's Mark",
            spoiler: "Greenpath: Hunter",
            wiki: ""
        },
        killedPrayerSlug: {
            name: "Journal: Maggot",
            spoiler: "Forgotten Crossroads: False Knight secret room",
            wiki: ""
        },
        killedOrangeScuttler: {
            name: "Journal: Lightseed",
            spoiler: "Infected Crossroads",
            wiki: ""
        },
        killedPigeon: {
            name: "Journal: Maskfly",
            spoiler: "Greenpath, Queen's Gardens",
            wiki: ""
        },
        killedLazyFlyer: {
            name: "Journal: Aluba",
            spoiler: "Lake of Unn, Queen's Gardens (near White Lady)",
            wiki: ""
        },
        killedAcidFlyer: {
            name: "Journal: Duranda",
            spoiler: "Greenpath: Nailmaster Sheo's tent path",
            wiki: ""
        },
        killedAcidWalker: {
            name: "Journal: Durandoo",
            spoiler: "Greenpath, Queen's Gardens",
            wiki: ""
        },
        killedPlantShooter: {
            name: "Journal: Gulka",
            spoiler: "Greenpath: west of Stone Sanctuary",
            wiki: ""
        },
        killedMushroomTurret: {
            name: "Journal: Sporg",
            spoiler: "Fungal Wastes",
            wiki: ""
        },
        killedZapBug: {
            name: "Journal: Charged Lumafly",
            spoiler: "Fog Canyon: Teacher's Archives (tank)",
            wiki: ""
        },
        killedCrystalCrawler: {
            name: "Journal: Crystal Crawler",
            spoiler: "Crystal Peak",
            wiki: ""
        },
        killedGorgeousHusk: {
            name: "Journal: Gorgeous Husk",
            spoiler: "City of Tears: secret room",
            wiki: ""
        },
        killedWorm: {
            name: "Journal: Goam",
            spoiler: "Infected Crossroads: near Fungal Wastes entrance",
            wiki: ""
        },
        killedBigCentipede: {
            name: "Journal: Garpede",
            spoiler: "Deepnest: east of Hot Spring",
            wiki: ""
        },
        killedAbyssTendril: {
            name: "Journal: Void Tendrils",
            spoiler: "The Abyss: secret room",
            wiki: ""
        },
        killedPaleLurker: {
            name: "Journal: Pale Lurker",
            spoiler: "Colosseum of Fools: secret area",
            wiki: ""
        },
        falseKnightDreamDefeated: {
            name: "Failed Champion",
            spoiler: "Forgotten Crossroads",
            wiki: ""
        },
        mageLordDreamDefeated: {
            name: "Soul Tyrant",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: ""
        },
        infectedKnightDreamDefeated: {
            name: "Lost Kin",
            spoiler: "Ancient Basin",
            wiki: ""
        },
        whiteDefenderDefeated: {
            name: "White Defender",
            spoiler: "Royal Waterways",
            wiki: ""
        },
        greyPrinceDefeated: {
            name: "Grey Prince Zote",
            spoiler: "Dirtmouth: Bretta's Room (per save choice)",
            wiki: ""
        },
        killedHollowKnight: {
            name: "Hollow Knight",
            spoiler: "Forgotten Crossroads: Black Egg Temple",
            wiki: ""
        },
        salubraBlessing: {
            name: "Salubra's Blessing",
            spoiler: "Salubra: 800 Geo + all 40 Charms found",
            wiki: ""
        },
        gotShadeCharm: {
            name: "Void Heart",
            spoiler: "Kingsoul + Birthplace",
            wiki: ""
        },
        killedFinalBoss: {
            name: "Radiance",
            spoiler: "Forgotten Crossroads: Black Egg Temple",
            wiki: ""
        },
        bossDoorStateTier5: {
            name: "Embrace the Void",
            spoiler: "Godhome: Pantheon of Hallownest",
            wiki: ""
        },
        zoteStatus: {
            name: "Zote Status",
            nameNeglect: "Zote Choice: Neglect",
            nameRivalry: "Zote Choice: Rivalry",
            nameTrappedVengefly: "Zote Status: Vengefly",
            nameNotRescuedVengefly: "Zote Status: Greenpath",
            nameTrappedDeepnest: "Zote Status: Deepnest",
            nameColosseum: "Zote Status: Colosseum of Fools",
            spoiler: "One achievement per save file",
            spoilerNeglect: "Left Zote to die",
            spoilerRivalry: "Defeated Zote in the Colosseum of Fools",
            spoilerTrappedVengefly: "Greenpath, defeat Vengefly King",
            spoilerNotRescuedVengefly: "Check what happened with Zote",
            spoilerTrappedDeepnest: "Deepnest, free from cobwebs",
            spoilerColosseum: "Trial of the Warrior",
            wiki: ""
        },
        nailsmithStatus: {
            name: "Nailsmith Status",
            nameHappyCouple: "Nailsmith Choice: Happy Couple",
            namePurity: "Nailsmith Choice: Purity",
            nameSheoHutWaiting: "Nailsmith Status: Sheo",
            nameUpgradeNail: "Nailsmith Status: Waiting",
            spoiler: "One achievement per save file",
            spoilerHappyCouple: "Found a new calling",
            spoilerPurity: "Slain with Pure Nail",
            spoilerSheoHutWaiting: "Waiting at Sheo's Hut",
            spoilerUpgradeNail: "Upgrade Nail to Pure Nail",
            wiki: ""
        },
        mrMushroomState: {
            name: "Mr Mushroom",
            spoiler1: "Fungal Wastes, near Cornifer",
            spoiler2: "Kingdom's Edge, near Isma's Grove",
            spoiler3: "Deepnest, near Galien",
            spoiler4: "Howling Cliffs, near Nailmaster Mato",
            spoiler5: "Ancient Basin, near Monarch Wings",
            spoiler6: "Fog Canyon, near Overgrown Mound",
            spoiler7: "King's Pass, game starting location",
            wiki: ""
        }
        /* 
        Mr Mushroom data
        case SplitName.MrMushroom1: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 2; break;
        case SplitName.MrMushroom2: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 3; break;
        case SplitName.MrMushroom3: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 4; break;
        case SplitName.MrMushroom4: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 5; break;
        case SplitName.MrMushroom5: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 6; break;
        case SplitName.MrMushroom6: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 7; break;
        case SplitName.MrMushroom7: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 8; break;

        "mrMushroomState": 4, < this is the current location of Mr Mushroom (Howling Cliffs)

        1. Spawn of self, their minds unite, (Fungal Wastes)
        2. Aside the source of acid blight, (Kingdom's Edge, near Isma's Grove)
        3. Aglow in darkest, winding depths, (Deepnest, near Galien)
        4. Winds all howl above fossilstone steps, (Howling Cliffs)
        5. Monarchflys in air set still, (Ancient Basin, near the Monarch Wings location)
        6. To Root's domain and snail once shrill, (Fog Canyon, near Overgrown Mound)
        7. Path of Wyrm, at new lands entered, (King's Pass)
        8. There journeys end. The kingdom ventured.
        */
    },
    STATISTICS: {
        nailDamage: {
            name: "Nail Damage",
            spoiler: "Nailsmith upgrades, City of Tears",
            max: 21,
            wiki: ""
        },
        charmSlots: {
            name: "Charm Notches",
            spoiler: "out of 11 total",
            max: 11,
            wiki: ""
        },
        whisperingRoots: {
            name: "Whispering Roots completed",
            spoiler: "Dream Nail (out of 15)",
            max: 15,
            wiki: ""
        },
        relicsWandererJournal: {
            name: "Relic #1 found total",
            nameHeld: "trinket1",
            nameSold: "soldTrinket1",
            spoiler: "Wanderer's Journal (out of 14)",
            max: 14,
            wiki: ""
        },
        relicsHallownestSeal: {
            name: "Relic #2 found total",
            nameHeld: "trinket2",
            nameSold: "soldTrinket2",
            spoiler: "Hallownest Seal (out of 17)",
            max: 17,
            wiki: ""
        },
        relicsKingsIdol: {
            name: "Relic #3 found total",
            nameHeld: "trinket3",
            nameSold: "soldTrinket3",
            spoiler: "King's Idol (out of 8)",
            max: 8,
            wiki: ""
        },
        relicsArcaneEgg: {
            name: "Relic #4 found total",
            nameHeld: "trinket4",
            nameSold: "soldTrinket4",
            spoiler: "Arcane Egg (4 max, 1 missable)",
            max: 4,
            wiki: ""
        },
        geoRocks: {
            name: "Geo Rocks",
            spoiler: "Unbroken/Broken/Discovered Total",
            wiki: ""
        },
        // not ghostCoins
        geoPool: {
            name: "Shade Geo",
            spoiler: "Amount of Geo the Shade is currently holding",
            min: 0,
            wiki: ""
        },
        rancidEggs: {
            name: "Rancid Eggs",
            spoiler: "Find: Hallownest, Buy: Sly, Tuk",
            wiki: ""
        },
        jinnEggsSold: {
            name: "Rancid Eggs sold to Jinn",
            spoiler: "Only in Steel Soul Mode",
            wiki: ""
        },
        xunFlowerBrokeTimes: {
            name: "Delicate Flowers broken",
            spoiler: "Resting Grounds: Grey Mourner",
            wiki: ""
        },
        notchShroomOgres: {
            name: "Charm Notch #1",
            spoiler: "Fungal Wastes: Shroom Ogres room",
            wiki: ""
        },
        salubraNotch1: {
            name: "Charm Notch #2",
            spoiler: "Salubra: 120 Geo + 5 Charms found",
            wiki: ""
        },
        salubraNotch2: {
            name: "Charm Notch #3",
            spoiler: "Salubra: 500 Geo + 10 Charms found",
            wiki: ""
        },
        salubraNotch3: {
            name: "Charm Notch #4",
            spoiler: "Salubra: 900 Geo + 18 Charms found",
            wiki: ""
        },
        salubraNotch4: {
            name: "Charm Notch #5",
            spoiler: "Salubra: 1400 Geo + 25 Charms found",
            wiki: ""
        },
        colosseumBronzeCompleted: {
            name: "Charm Notch #6",
            spoiler: "Colosseum of Fools: Trial of the Warrior",
            wiki: ""
        },
        notchFogCanyon: {
            name: "Charm Notch #7",
            spoiler: "Fog Canyon: explosive eggs room",
            wiki: ""
        },
        gotGrimmNotch: {
            name: "Charm Notch #8",
            spoiler: "Dirtmouth: Troupe Leader Grimm",
            wiki: ""
        },
        hasDreamGate: {
            name: "Dream Gate",
            spoiler: "Seer: 900 Essence",
            wiki: ""
        },
        fragileGreed_unbreakable: {
            name: "Unbreakable Greed",
            spoiler: "Divine: Fragile Greed + 9000 Geo",
            wiki: ""
        },
        fragileHealth_unbreakable: {
            name: "Unbreakable Heart",
            spoiler: "Divine: Fragile Heart + 12000 Geo",
            wiki: ""
        },
        fragileStrength_unbreakable: {
            name: "Unbreakable Strength",
            spoiler: "Divine: Fragile Strength + 15000 Geo",
            wiki: ""
        },
        killedMenderBug: {
            name: "Journal: Menderbug",
            spoiler: "Forgotten Crossroads + destroy sign",
            wiki: ""
        },
        killedBindingSeal: {
            name: "Journal: Seal of Binding",
            spoiler: "White Palace: Path of Pain completion",
            wiki: ""
        },
        killedGodseekerMask: {
            name: "Journal: Weathered Mask",
            spoiler: "Godhome: Land of Storms",
            wiki: ""
        },
        killedVoidIdol_1: {
            name: "Journal: Void Idol Attuned",
            spoiler: "Godhome: Hall of Gods, defeat all",
            wiki: ""
        },
        killedVoidIdol_2: {
            name: "Journal: Void Idol Ascended",
            spoiler: "Godhome: Hall of Gods, defeat all",
            wiki: ""
        },
        killedVoidIdol_3: {
            name: "Journal: Void Idol Radiant",
            spoiler: "Godhome: Hall of Gods, defeat all",
            wiki: ""
        },
        elderbugGaveFlower: {
            name: "Delicate Flower: Elderbug",
            spoiler: "Delivered from Traitor's Child Grave",
            wiki: ""
        },
        givenGodseekerFlower: {
            name: "Delicate Flower: Godseeker",
            spoiler: "Delivered from Traitor's Child Grave",
            wiki: ""
        },
        givenOroFlower: {
            name: "Delicate Flower: Nailmaster Oro",
            spoiler: "D. from Traitor's Child Grave",
            wiki: ""
        },
        givenWhiteLadyFlower: {
            name: "Delicate Flower: White Lady",
            spoiler: "Delivered from Traitor's Child Grave",
            wiki: ""
        },
        givenEmilitiaFlower: {
            name: "Delicate Flower: Emilitia",
            spoiler: "Delivered from Traitor's Child Grave",
            wiki: ""
        },
        whitePalaceSecretRoomVisited: {
            name: "White Palace Secret Room visited",
            spoiler: "Help identify this room!",
            wiki: ""
        },
        killsBindingSeal: {
            name: "Path of Pain",
            spoiler: "White Palace: main secret area",
            wiki: ""
        },
        whiteDefenderDefeats: {
            name: "White Defender times defeated",
            spoiler: "Royal Waterways (5 max)",
            max: 5,
            wiki: ""
        },
        greyPrinceDefeats: {
            name: "Grey Prince Zote times defeated",
            spoiler: "Dirtmouth (10 max)",
            max: 10,
            wiki: ""
        },
    }
};

export default HK;