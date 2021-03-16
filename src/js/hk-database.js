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
        },
        godhomeStatistics: {
            h2: "Godhome Statistics",
            id: "hk-godhome-statistics"
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
            spoiler: "...bright little crystal companion able to light a way through the thickest dark places"
        },
        hasSuperDash: {
            spoiler: "...some powerful crystal beating somewhere deep inside the mines"
        },
        hasDreamNail: {
            spoiler: "...a weapon from a dream world only found where the souls can peacefully rest"
        },
        /* 
        Either:
        - used the elevator in Resting Grounds to City of Tears
        - opened the Fungal Wastes city gate
        */
        killedInfectedKnight: {
            spoiler: "...a shattered corpse forgotten in a windy cave in the ancient depths below the rainy city"
        },
        hasDoubleJump: {
            spoiler: "...something incredibly light dropped by a monarchfly in the ancient depths below the rainy city"
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
        // killedBigFly
        bossGruzMother: {
            name: "P1 Gruz Mother",
            spoiler: "Forgotten Crossroads, lower right area",
            id: "Battle Scene",
            sceneName: "Crossroads_04",
            wiki: "Gruz_Mother"
        },
        falseKnightDefeated: {
            name: "P1 False Knight",
            spoiler: "Forgotten Crossroads, middle area map symbol",
            wiki: "False_Knight"
        }, // "Battle Scene" - "Crossroads_10" ?
        hornet1Defeated: {
            name: "P1 Hornet Protector",
            spoiler: "Greenpath, above Stag Station",
            wiki: "Hornet_Protector"
        },
        defeatedDungDefender: {
            name: "P1 Dung Defender",
            spoiler: "Royal Waterways, right area",
            wiki: "Dung_Defender"
        },
        // killedMawlek
        bossBroodingMawlek: {
            name: "P1 Brooding Mawlek",
            spoiler: "Forgotten Crossroads, use Mantis Claw",
            id: "Battle Scene",
            sceneName: "Crossroads_09",
            wiki: "Brooding_Mawlek"
        },
        mageLordDefeated: {
            name: "P2 Soul Master",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: "Soul_Master"
        },
        defeatedMantisLords: {
            name: "P2 Mantis Lords",
            spoiler: "Fungal Wastes: Mantis Village",
            wiki: "Mantis_Lords"
        },
        // "Battle Scene" - "Deepnest_32" ?
        killedMimicSpider: {
            name: "P2 Nosk",
            spoiler: "Deepnest, use Crystal Heart, left of Hot Spring",
            wiki: "Nosk"
        },
        killedInfectedKnight: {
            name: "P2 Broken Vessel",
            spoiler: "Ancient Basin, lower left, use Crystal Heart",
            wiki: "Broken_Vessel"
        },
        collectorDefeated: {
            name: "P3 The Collector",
            spoiler: "City of Tears: Tower of Love",
            wiki: "Collector"
        },
        defeatedMegaJelly: {
            name: "P3 Uumuu",
            spoiler: "Fog Canyon: Teacher's Archives",
            wiki: "Uumuu"
        },
        hornetOutskirtsDefeated: {
            name: "P3 Hornet Sentinel",
            spoiler: "Kingdom's Edge, requires Monarch Wings",
            wiki: "Hornet_Sentinel"
        },
        // "Battle Scene" - "Fungus3_23" ?
        killedTraitorLord: {
            name: "P4 Traitor Lord",
            spoiler: "Queen's Gardens, requires Shade Cloak",
            wiki: "Traitor_Lord"
        },
        killedBlackKnight: {
            name: "P4 Watcher Knights",
            spoiler: "City of Tears: Watcher's Spire",
            wiki: "Watcher_Knight"
        }
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
            spoiler: "Howling Cliffs, bottom, near Greenpath",
            wiki: "Baldur_Shell"
        }, // 2
        gotCharm_6: {
            name: "#6 Fury of the Fallen",
            spoiler: "King's Pass, nail-bounce spikes",
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
            spoiler: "Royal Waterways, defeat Dung Defender",
            wiki: "Defender's_Crest"
        }, // 1
        gotCharm_11: {
            name: "#11 Flukenest",
            spoiler: "Royal Waterways, defeat Flukemarm",
            wiki: "Flukenest"
        }, // 3
        gotCharm_12: {
            name: "#12 Thorns of Agony",
            spoiler: "Greenpath, requires Mothwing Cloak",
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
            /* 
            "id": "Shiny Item Stand",
            "sceneName": "Fungus2_23",
            */
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
            spoiler: "Queen's Gardens + White Palace",
            wiki: "Kingsoul"
        }, // 5
    },
    COLOSSEUM: {
        colosseumBronzeCompleted: {
            name: "Trial of the Warrior",
            spoiler: "Little Fool: 100 Geo",
            wiki: "Trial_of_the_Warrior"
        },
        colosseumSilverCompleted: {
            name: "Trial of the Conqueror",
            spoiler: "Little Fool: 450 Geo + Warrior completed",
            wiki: "Trial_of_the_Conqueror"
        },
        colosseumGoldCompleted: {
            name: "Trial of the Fool",
            spoiler: "Little Fool: 800 Geo + Conqueror completed",
            wiki: "Trial_of_the_Fool"
        },
    },
    DREAMERS: {
        lurienDefeated: {
            name: "Lurien the Watcher",
            spoiler: "City of Tears: Watcher's Spire",
            wiki: "Lurien"
        },
        monomonDefeated: {
            name: "Monomon the Teacher",
            spoiler: "Fog Canyon: Teacher's Archives",
            wiki: "Monomon"
        },
        hegemolDefeated: {
            name: "Herrah the Beast",
            spoiler: "Deepnest: Distant Village",
            wiki: "Herrah"
        }
    },
    DREAMNAIL: {
        hasDreamNail: {
            name: "Dream Nail acquired",
            spoiler: "Resting Grounds",
            wiki: "Dream_Nail"
        },
        dreamNailUpgraded: {
            name: "Awoken Dream Nail",
            spoiler: "Seer: 1800 Essence",
            wiki: "Dream_Nail#Awoken_Dream_Nail"
        },
        mothDeparted: {
            name: "Hear the Seer's final words",
            spoiler: "Seer: 2400 Essence",
            wiki: "Seer"
        }
    },
    EQUIPMENT: {
        hasDash: {
            name: "Mothwing Cloak",
            spoiler: "Greenpath: Dash ability",
            wiki: "Mothwing_Cloak"
        },
        hasWalljump: {
            name: "Mantis Claw",
            spoiler: "Mantis Village: Wall Jump ability",
            wiki: "Mantis_Claw"
        },
        hasSuperDash: {
            name: "Crystal Heart",
            spoiler: "Crystal Peak: Super Dash ability",
            wiki: "Crystal_Heart"
        },
        hasDoubleJump: {
            name: "Monarch Wings",
            spoiler: "Ancient Basin: Double Jump ability",
            wiki: "Monarch_Wings"
        },
        hasAcidArmour: {
            name: "Isma's Tear",
            spoiler: "Royal Waterways: Acid Armour ability",
            wiki: "Isma's_Tear"
        },
        hasKingsBrand: {
            name: "King's Brand",
            spoiler: "Kingdom's Edge",
            wiki: "King's_Brand"
        },
        hasShadowDash: {
            name: "Shade Cloak",
            spoiler: "The Abyss: Shadow Dash ability",
            wiki: "Shade_Cloak"
        }
    },
    MASKSHARDS: {
        slyShellFrag1: {
            name: "Mask Shard #1",
            spoiler: "Sly: 150 Geo",
            wiki: "Mask_Shard"
        },
        slyShellFrag2: {
            name: "Mask Shard #2",
            spoiler: "Sly: 500 Geo",
            wiki: "Mask_Shard"
        },
        slyShellFrag3: {
            name: "Mask Shard #3",
            spoiler: "Sly: 800 Geo + Shopkeeper's Key",
            wiki: "Mask_Shard"
        },
        slyShellFrag4: {
            name: "Mask Shard #4",
            spoiler: "Sly: 1500 Geo + Shopkeeper's Key",
            wiki: "Mask_Shard"
        },
        dreamReward7: {
            name: "Mask Shard #5",
            spoiler: "Seer: 1500 Essence",
            wiki: "Mask_Shard"
        }
    },
    // "Heart Piece" sceneData.persistentBoolItems.id
    MASKSHARDS_WORLD: {
        Crossroads_13: {
            name: "Mask Shard #6",
            spoiler: "Forgotten Crossroads, below Hot Springs",
            wiki: "Mask_Shard"
        },
        Crossroads_09: {
            name: "Mask Shard #7",
            spoiler: "Forgotten Crossroads: Brooding Mawlek",
            wiki: "Mask_Shard"
        },
        Crossroads_38: {
            name: "Mask Shard #8",
            spoiler: "Grubfather: 5 Grubs rescued",
            wiki: "Mask_Shard"
        },
        Room_Bretta: {
            name: "Mask Shard #9",
            spoiler: "Dirtmouth: Bretta's Room, rescue Bretta",
            wiki: "Mask_Shard"
        },
        Fungus2_01: {
            name: "Mask Shard #10",
            spoiler: "Queen's Station, requires Mantis Claw",
            wiki: "Mask_Shard"
        },
        Waterways_04b: {
            name: "Mask Shard #11",
            spoiler: "Royal Waterways",
            wiki: "Mask_Shard"
        },
        Fungus1_36: {
            name: "Mask Shard #12",
            spoiler: "Greenpath: Stone Sanctuary",
            wiki: "Mask_Shard"
        },
        Mines_32: {
            name: "Mask Shard #13",
            spoiler: "Crystal Peak: Enraged Guardian",
            wiki: "Mask_Shard"
        },
        Fungus2_25: {
            name: "Mask Shard #14",
            spoiler: "Deepnest, entrance from Fungal Wastes",
            wiki: "Mask_Shard"
        },
        Hive_04: {
            name: "Mask Shard #15",
            spoiler: "The Hive, use Hive Guardian",
            wiki: "Mask_Shard"
        },
        Room_Mansion: {
            name: "Mask Shard #16",
            spoiler: "Resting Grounds: Delicate Flower",
            wiki: "Mask_Shard"
        }
    },
    VESSELFRAGMENTS: {
        slyVesselFrag1: {
            name: "Vessel Fragment #1",
            spoiler: "Sly: 550 Geo",
            wiki: "Vessel_Fragment"
        },
        slyVesselFrag2: {
            name: "Vessel Fragment #2",
            spoiler: "Sly: 900 Geo + Shopkeeper's Key",
            wiki: "Vessel_Fragment"
        },
        dreamReward5: {
            name: "Vessel Fragment #3",
            spoiler: "Seer: 700 Essence",
            wiki: "Vessel_Fragment"
        },
        vesselFragStagNest: {
            name: "Vessel Fragment #4",
            spoiler: "Stag Nest",
            wiki: "Vessel_Fragment"
        }
    },
    // "Vessel Fragment" sceneData.persistentBoolItems.id
    VESSELFRAGMENTS_WORLD: {
        Fungus1_13: {
            name: "Vessel Fragment #5",
            spoiler: "Greenpath: near Queen's Gardens exit",
            wiki: "Vessel_Fragment"
        },
        Crossroads_37: {
            name: "Vessel Fragment #6",
            spoiler: "Forgotten Crossroads: unlock City of Tears lift",
            wiki: "Vessel_Fragment"
        },
        Ruins2_09: {
            name: "Vessel Fragment #7",
            spoiler: "Above King's Station",
            wiki: "Vessel_Fragment"
        },
        Deepnest_38: {
            name: "Vessel Fragment #8",
            spoiler: "Deepnest: Goam platforming challenge",
            wiki: "Vessel_Fragment"
        },
        Abyss_04: {
            name: "Vessel Fragment #9",
            spoiler: "Ancient Basin Fountain: 3000 Geo",
            wiki: "Vessel_Fragment"
        }
    },
    NAILARTS: {
        /* this is correct - somehow Team Cherry switched the names here */
        hasDashSlash: {
            name: "Great Slash",
            spoiler: "Nailmaster Sheo: Greenpath",
            wiki: "Great_Slash"
        },
        /* this is correct - somehow Team Cherry switched the names here */
        hasUpwardSlash: {
            name: "Dash Slash",
            spoiler: "Nailmaster Oro: Kingdom's Edge, 800 Geo",
            wiki: "Dash_Slash"
        },
        hasCyclone: {
            name: "Cyclone Slash",
            spoiler: "Nailmaster Mato: Howling Cliffs",
            wiki: "Cyclone_Slash"
        },
    },
    NAILUPGRADES: {
        oldNail: {
            name: "#0 Old Nail",
            spoiler: "Starting Weapon",
            wiki: "Nail"
        },
        sharpenedNail: {
            name: "#1 Sharpened Nail",
            spoiler: "Nailsmith: 250 Geo",
            wiki: "Nail#Nail_Upgrades"
        },
        channeledNail: {
            name: "#2 Channeled Nail",
            spoiler: "Nailsmith: 800 Geo + 1 Pale Ore",
            wiki: "Nail#Nail_Upgrades"
        },
        coiledNail: {
            name: "#3 Coiled Nail",
            spoiler: "Nailsmith: 2000 Geo + 2 Pale Ore",
            wiki: "Nail#Nail_Upgrades"
        },
        pureNail: {
            name: "#4 Pure Nail",
            spoiler: "Nailsmith: 4000 Geo + 3 Pale Ore",
            wiki: "Nail#Nail_Upgrades"
        }
    },
    SPELLS: {
        vengefulSpirit: {
            fireballLevel: 1,
            name: "Vengeful Spirit",
            spoiler: "Forgotten Crossroads: Ancestral Mound",
            wiki: "Vengeful_Spirit"
        },
        shadeSoul: {
            fireballLevel: 2,
            name: "Shade Soul",
            spoiler: "City of Tears: Soul Sanctum + Elegant Key",
            wiki: "Shade_Soul"
        },
        desolateDive: {
            quakeLevel: 1,
            name: "Desolate Dive",
            spoiler: "City of Tears: Soul Sanctum",
            wiki: "Desolate_Dive"
        },
        descendingDark: {
            quakeLevel: 2,
            name: "Descending Dark",
            spoiler: "Crystal Peak: Crystallised Mound",
            wiki: "Descending_Dark"
        },
        howlingWraiths: {
            screamLevel: 1,
            name: "Howling Wraiths",
            spoiler: "Fog Canyon: Overgrown Mound",
            wiki: "Howling_Wraiths"
        },
        abyssShriek: {
            screamLevel: 2,
            name: "Abyss Shriek",
            spoiler: "The Abyss, use Howling Wraiths on podium",
            wiki: "Abyss_Shriek"
        }
    },
    WARRIORDREAMS: {
        aladarSlugDefeated: {
            name: "P1 Gorb",
            spoiler: "Howling Cliffs",
            wiki: "Gorb"
        },
        xeroDefeated: {
            name: "P2 Xero",
            spoiler: "Resting Grounds",
            wiki: "Xero"
        },
        mumCaterpillarDefeated: {
            name: "P2 Marmu",
            spoiler: "Queen's Gardens",
            wiki: "Marmu"
        },
        elderHuDefeated: {
            name: "P3 Elder Hu",
            spoiler: "Fungal Wastes, above acid bridge",
            wiki: "Elder_Hu"
        },
        galienDefeated: {
            name: "P3 Galien",
            spoiler: "Deepnest, below Failed Tramway",
            wiki: "Galien"
        },
        noEyesDefeated: {
            name: "P4 No Eyes",
            spoiler: "Greenpath: Stone Sanctuary",
            wiki: "No_Eyes"
        },
        markothDefeated: {
            name: "P4 Markoth",
            spoiler: "Kingdom's Edge, requires Shade Cloak",
            wiki: "Markoth"
        },
    },
    GRIMMTROUPE: {
        gotCharm_37: {
            name: "Charm #37 Sprintmaster",
            spoiler: "Sly: 400 Geo + Shopkeeper's Key",
            wiki: "Sprintmaster"
        },
        gotCharm_38: {
            name: "Charm #38 Dreamshield",
            spoiler: "Resting Grounds",
            wiki: "Dreamshield"
        },
        gotCharm_39: {
            name: "Charm #39 Weaversong",
            spoiler: "Deepnest: Weaver's Den",
            wiki: "Weaversong"
        },
        gotCharm_40: {
            name: "Charm #40 Grimmchild / Carefree Melody",
            spoiler: "Dirtmouth",
            wiki: "Grimmchild"
        },
        killedGrimm: {
            name: "P3 Troupe Master Grimm",
            spoiler: "Dirtmouth, collect 6 flames",
            wiki: "Grimm"
        },
        grimmChildLevel: {
            name: "Nightmare King Grimm / Banishment",
            spoiler: "Dirtmouth or Howling Cliffs",
            wiki: "Category:The_Grimm_Troupe#Banishment"
        }
    },
    LIFEBLOOD: {
        killedHiveKnight: {
            name: "P3 Hive Knight",
            spoiler: "The Hive, guards Hiveblood charm",
            wiki: "Hive_Knight"
        }
    },
    GODMASTER_DOORS: {
        pantheonMaster: {
            name: "P1 Pantheon of the Master",
            spoiler: "Godhome, defeat P1 bosses",
            wiki: "Pantheon_of_the_Master"
        },
        pantheonArtist: {
            name: "P2 Pantheon of the Artist",
            spoiler: "Godhome, defeat P2 bosses",
            wiki: "Pantheon_of_the_Artist"
        },
        pantheonSage: {
            name: "P3 Pantheon of the Sage",
            spoiler: "Godhome, defeat P3 bosses",
            wiki: "Pantheon_of_the_Sage"
        },
        pantheonKnight: {
            name: "P4 Pantheon of the Knight",
            spoiler: "Godhome: complete P1, P2 and P3",
            wiki: "Pantheon_of_the_Knight"
        }
    },
    GODMASTER: {
        hasGodfinder: {
            name: "Godtuner",
            spoiler: "Junk Pit, requires Simple Key",
            wiki: "Godtuner"
        }
    },
    ESSENTIAL: {
        grubsCollected: {
            name: "Grubs Rescued",
            spoiler: "out of 46 total",
            max: 46,
            wiki: "Grub"
        },
        /* 
        Grub Rewards Collected:
        */
        /* 
        Charms Found:
        */
        dreamOrbs: {
            name: "Essence Collected",
            spoiler: "Dream Nail (2400 for completion)",
            max: 2400,
            wiki: "Dream_Nail#Essence"
        },
        stationsOpened: {
            name: "Stag Stations opened",
            spoiler: "out of 10 total",
            max: 10,
            wiki: "Fast_Travel_(Hollow_Knight)#Locations_and_Prices"
        },
        fountainGeo: {
            name: "Geo in Fountain",
            spoiler: "Ancient Basin: 3000 Geo maximum",
            max: 3000,
            wiki: "Ancient_Basin#Description"
        },
        slyRescued: {
            name: "Sly Rescued",
            spoiler: "Forgotten Crossroads, near Gruz Mother",
            wiki: "Sly"
        },
        brettaRescued: {
            name: "Bretta Rescued",
            spoiler: "Fungal Wastes, near Dashmaster charm statue",
            wiki: "Bretta"
        },
        mantisVillageFloorLever: {
            name: "Mantis Village Floor Lever",
            spoiler: "Fungal Wastes, right of Mantis Claw",
            id: "Mantis Lever (1)",
            sceneName: "Fungus2_14",
            wiki: "Fungal_Wastes#Sub-area:_Mantis_Village"
        },
        hasLantern: {
            name: "Lumafly Lantern",
            spoiler: "Sly: 1800 Geo",
            wiki: "Lumafly_Lantern"
        },
        shopkeeperKey: {
            name: "Shopkeeper's Key",
            spoiler: "Crystal Peak, below Quirrel location",
            wiki: "Shopkeeper's_Key"
        },
        elegantKey: {
            name: "Elegant Key",
            spoiler: "Sly: 800 Geo + Shopkeeper's Key",
            wiki: "Elegant_Key"
        },
        loveKey: {
            name: "Love Key",
            spoiler: "Queen's Gardens, near Fungal Wastes",
            wiki: "Love_Key"
        },
        slySimpleKey: {
            name: "Simple Key #1",
            spoiler: "Sly: 950 Geo",
            wiki: "Simple_Key"
        },
        simpleKeyCityOfTears: {
            name: "Simple Key #2",
            spoiler: "City of Tears, below west Stag Station",
            id: "Shiny Item",
            sceneName: "Ruins1_17",
            wiki: "Simple_Key#How_to_Acquire"
        },
        simpleKeyAncientBasin: {
            name: "Simple Key #3",
            spoiler: "Ancient Basin, below Broken Vessel",
            id: "Shiny Item Stand",
            sceneName: "Abyss_20",
            wiki: "Simple_Key#How_to_Acquire"
        },
        gotLurkerKey: {
            name: "Simple Key #4",
            spoiler: "Colosseum of Fools: Pale Lurker's Retreat",
            wiki: "Simple_Key#How_to_Acquire"
        },
        paleOreAncientBasin: {
            name: "Pale Ore #1",
            spoiler: "Ancient Basin, near Cloth location",
            id: "Battle Scene Ore",
            sceneName: "Abyss_17",
            wiki: "Pale_Ore"
        },
        paleOreSeer: {
            name: "Pale Ore #2",
            spoiler: "Seer: 300 Essence",
            wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreCrystalPeak: {
            name: "Pale Ore #3",
            spoiler: "Crystal Peak: Hallownest's Crown",
            id: "Shiny Item Stand",
            sceneName: "Mines_34",
            wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreDeepnest: {
            name: "Pale Ore #4",
            spoiler: "Deepnest, Nosk reward",
            id: "Shiny Item Stand",
            sceneName: "Deepnest_32",
            wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreGrubfather: {
            name: "Pale Ore #5",
            spoiler: "Grubfather: 31 Grubs rescued",
            id: "Shiny Item Ore",
            sceneName: "Crossroads_38",
            wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreColosseum: {
            name: "Pale Ore #6",
            spoiler: "Colosseum of Fools: Trial of the Conqueror",
            id: "Shiny Item",
            sceneName: "Room_Colosseum_Silver",
            wiki: "Pale_Ore#How_to_Acquire"
        },
        waterwaysAcidDrained: {
            name: "Acid Drained",
            spoiler: "Royal Waterways, lever after Dung Defender",
            wiki: "Royal_Waterways#Sub-area:_Isma.27s_Grove"
        },
        hasTramPass: {
            name: "Tram Pass",
            spoiler: "Deepnest: Failed Tramway",
            wiki: "Tram_Pass"
        },
        gotQueenFragment: {
            name: "White Fragment: Queen",
            spoiler: "White Lady: Queen's Gardens",
            wiki: "Kingsoul#How_to_Acquire"
        },
        gotKingFragment: {
            name: "White Fragment: King",
            spoiler: "Pale King: White Palace",
            wiki: "Kingsoul#How_to_Acquire"
        },
        nightmareLanternLit: {
            name: "Nightmare Lantern Lit",
            spoiler: "Howling Cliffs, corpse of a large bug",
            wiki: "Howling_Cliffs#Nightmare_Lantern_Chamber"
        },
        killedMegaMossCharger: {
            name: "P1 Massive Moss Charger",
            spoiler: "Greenpath, near Fog Canyon",
            wiki: "Massive_Moss_Charger"
        },
        pantheonSoulWarrior: {
            name: "P1 Soul Warrior",
            spoiler: "City of Tears: Soul Sanctum",
            id: "Battle Scene v2",
            sceneName: "Ruins1_23",
            wiki: "Soul_Warrior"
        },
        pantheonCrystalGuardian: {
            name: "P2 Crystal Guardian",
            spoiler: "Crystal Peak, guards Central Bench",
            id: "Mega Zombie Beam Miner (1)",
            sceneName: "Mines_18",
            wiki: "Crystal_Guardian"
        },
        killedOblobble: {
            name: "P2 Oblobble",
            spoiler: "Colosseum of Fools: Trial of the Conqueror",
            wiki: "Oblobbles"
        },
        killedFlukeMother: {
            name: "P2 Flukemarm",
            spoiler: "Royal Waterways, requires Desolate Dive",
            wiki: "Flukemarm"
        },
        pantheonEnragedGuardian: {
            name: "P4 Enraged Guardian",
            spoiler: "Crystal Peak, requires Monarch Wings",
            id: "Zombie Beam Miner Rematch",
            sceneName: "Mines_32",
            wiki: "Enraged_Guardian"
        },
        killedNailBros: {
            name: "Brothers Oro & Mato",
            spoiler: "Godhome: Pantheon of the Master",
            wiki: "Brothers_Oro_%26_Mato"
        },
        killedPaintmaster: {
            name: "Paintmaster Sheo",
            spoiler: "Godhome: Pantheon of the Artist",
            wiki: "Paintmaster_Sheo"
        },
        killedNailsage: {
            name: "Great Nailsage Sly",
            spoiler: "Godhome: Pantheon of the Sage",
            wiki: "Great_Nailsage_Sly"
        },
        killedHollowKnightPrime: {
            name: "Pure Vessel",
            spoiler: "Godhome: Pantheon of the Knight",
            wiki: "Pure_Vessel"
        },
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
            wiki: "Map_and_Quill#Maps"
        },
        journalEntriesCompleted: {
            name: "Creatures Encountered",
            spoiler: "Hunter's Journal (164 max)",
            max: 164,
            wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        /* 
        Add 4 remaining to Hunter Notes max
        */
        journalNotesCompleted: {
            name: "Hunter Notes Completed",
            spoiler: "Hunter's Journal (164 max)",
            max: 164,
            wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        hasJournal: {
            name: "Hunter's Journal",
            spoiler: "Greenpath: Hunter, above Stone Sanctuary",
            wiki: "Hunter%27s_Journal"
        },
        hasHuntersMark: {
            name: "Hunter's Mark",
            spoiler: "Greenpath: Hunter, complete base 146 Hunter Notes",
            wiki: "Hunter's_Mark"
        },
        killedPrayerSlug: {
            name: "Journal: Maggot",
            spoiler: "Forgotten Crossroads: False Knight secret room",
            wiki: "Maggot"
        },
        killedOrangeScuttler: {
            name: "Journal: Lightseed",
            spoiler: "Infected Crossroads",
            wiki: "Lightseed"
        },
        killedPigeon: {
            name: "Journal: Maskfly",
            spoiler: "Greenpath, Queen's Gardens",
            wiki: "Maskfly"
        },
        killedLazyFlyer: {
            name: "Journal: Aluba",
            spoiler: "Lake of Unn, Queen's Gardens (near White Lady)",
            wiki: "Aluba"
        },
        killedAcidFlyer: {
            name: "Journal: Duranda",
            spoiler: "Greenpath: Nailmaster Sheo's tent path",
            wiki: "Duranda"
        },
        killedAcidWalker: {
            name: "Journal: Durandoo",
            spoiler: "Greenpath, Queen's Gardens",
            wiki: "Durandoo"
        },
        killedPlantShooter: {
            name: "Journal: Gulka",
            spoiler: "Greenpath: west of Stone Sanctuary",
            wiki: "Gulka"
        },
        killedMushroomTurret: {
            name: "Journal: Sporg",
            spoiler: "Fungal Wastes",
            wiki: "Sporg"
        },
        killedZapBug: {
            name: "Journal: Charged Lumafly",
            spoiler: "Fog Canyon: Teacher's Archives (tank)",
            wiki: "Charged_Lumafly"
        },
        killedCrystalCrawler: {
            name: "Journal: Crystal Crawler",
            spoiler: "Crystal Peak",
            wiki: "Crystal_Crawler"
        },
        killedGorgeousHusk: {
            name: "Journal: Gorgeous Husk",
            spoiler: "City of Tears: secret room",
            wiki: "Gorgeous_Husk"
        },
        killedWorm: {
            name: "Journal: Goam",
            spoiler: "Infected Crossroads: near Fungal Wastes entrance",
            wiki: "Goam"
        },
        killedBigCentipede: {
            name: "Journal: Garpede",
            spoiler: "Deepnest: east of Hot Spring",
            wiki: "Garpede"
        },
        killedAbyssTendril: {
            name: "Journal: Void Tendrils",
            spoiler: "The Abyss: secret room",
            wiki: "Void_Tendrils"
        },
        killedLobsterLancer: {
            name: "Journal: God Tamer",
            spoiler: "Colosseum of Fools: Trial of the Fool boss",
            wiki: "God_Tamer"
        },
        killedPaleLurker: {
            name: "Journal: Pale Lurker",
            spoiler: "Colosseum of Fools: secret area",
            wiki: "Pale_Lurker"
        },
        falseKnightDreamDefeated: {
            name: "Failed Champion",
            spoiler: "Forgotten Crossroads, near False Knight",
            wiki: "Failed_Champion"
        },
        mageLordDreamDefeated: {
            name: "Soul Tyrant",
            spoiler: "City of Tears: Soul Sanctum, near Soul Master",
            wiki: "Soul_Tyrant"
        },
        infectedKnightDreamDefeated: {
            name: "Lost Kin",
            spoiler: "Ancient Basin, Broken Vessel location",
            wiki: "Lost_Kin"
        },
        whiteDefenderDefeated: {
            name: "White Defender",
            spoiler: "Royal Waterways, Dung Defender, use Desolate Dive",
            wiki: "White_Defender"
        },
        greyPrinceDefeated: {
            name: "Grey Prince Zote",
            spoiler: "Dirtmouth: Bretta's Room (per save choice)",
            wiki: "Grey_Prince_Zote"
        },
        killedHollowKnight: {
            name: "Hollow Knight",
            spoiler: "Forgotten Crossroads: Black Egg Temple",
            wiki: "Hollow_Knight"
        },
        salubraBlessing: {
            name: "Salubra's Blessing",
            spoiler: "Salubra: 800 Geo + all 40 Charms found",
            wiki: "Salubra's_Blessing"
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
            wiki: "Zote"
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
            wiki: "Nailsmith"
        },
        gotShadeCharm: {
            name: "Void Heart",
            spoiler: "Equip Kingsoul Charm and find Birthplace",
            wiki: "Void_Heart"
        },
        killedFinalBoss: {
            name: "The Radiance",
            spoiler: "Requires Void Heart & Dream Nail Hollow Knight",
            wiki: "Radiance"
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
            wiki: "Mister_Mushroom"
        },
        bossDoorStateTier5: {
            name: "P5 Embrace the Void",
            spoiler: "Godhome: Pantheon of Hallownest",
            wiki: "Pantheon_of_Hallownest"
        },
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
            wiki: "Nail#Nail_Upgrades"
        },
        charmSlots: {
            name: "Charm Notches",
            spoiler: "out of 11 total",
            max: 11,
            wiki: "Category:Charms#Notches"
        },
        whisperingRoots: {
            name: "Whispering Roots Completed",
            spoiler: "Dream Nail (out of 15)",
            max: 15,
            wiki: "Whispering_Root"
        },
        relicsWandererJournal: {
            name: "Relic #1 found total",
            nameHeld: "trinket1",
            nameSold: "soldTrinket1",
            spoiler: "Wanderer's Journal (out of 14)",
            max: 14,
            wiki: "Wanderer's_Journal"
        },
        relicsHallownestSeal: {
            name: "Relic #2 found total",
            nameHeld: "trinket2",
            nameSold: "soldTrinket2",
            spoiler: "Hallownest Seal (out of 17)",
            max: 17,
            wiki: "Hallownest_Seal"
        },
        relicsKingsIdol: {
            name: "Relic #3 found total",
            nameHeld: "trinket3",
            nameSold: "soldTrinket3",
            spoiler: "King's Idol (out of 8)",
            max: 8,
            wiki: "King's_Idol"
        },
        relicsArcaneEgg: {
            name: "Relic #4 found total",
            nameHeld: "trinket4",
            nameSold: "soldTrinket4",
            spoiler: "Arcane Egg (4 max, 1 missable)",
            max: 4,
            wiki: "Arcane_Egg"
        },
        // not ghostCoins
        geoPool: {
            name: "Shade Geo",
            spoiler: "Amount of Geo the Shade is currently holding",
            min: 0,
            wiki: "Shade"
        },
        rancidEggs: {
            name: "Rancid Eggs",
            spoiler: "Find: Hallownest, Buy: Sly, Tuk",
            wiki: "Rancid_Egg"
        },
        jinnEggsSold: {
            name: "Rancid Eggs sold to Jinn",
            spoiler: "Only in Steel Soul Mode",
            wiki: "Jinn"
        },
        xunFlowerBrokeTimes: {
            name: "Delicate Flowers Destroyed",
            spoiler: "Grey Mourner, Traitor's Child Grave",
            wiki: "Delicate_Flower"
        },
        geoRocks: {
            name: "Geo Rocks",
            spoiler: "Unbroken | Broken | Discovered",
            wiki: "Geo#How_to_Acquire"
        },
        itemsDiscovered: {
            name: "Interactables",
            spoiler: "Not A. | Activated | Discovered",
            wiki: "Category:Exploration_(Hollow_Knight)"
        },
        notchShroomOgres: {
            name: "Charm Notch #1",
            spoiler: "Fungal Wastes: Shroom Ogres room",
            wiki: "Category:Charms#Notches"
        },
        salubraNotch1: {
            name: "Charm Notch #2",
            spoiler: "Salubra: 120 Geo + 5 Charms found",
            wiki: "Category:Charms#Notches"
        },
        salubraNotch2: {
            name: "Charm Notch #3",
            spoiler: "Salubra: 500 Geo + 10 Charms found",
            wiki: "Category:Charms#Notches"
        },
        salubraNotch3: {
            name: "Charm Notch #4",
            spoiler: "Salubra: 900 Geo + 18 Charms found",
            wiki: "Category:Charms#Notches"
        },
        salubraNotch4: {
            name: "Charm Notch #5",
            spoiler: "Salubra: 1400 Geo + 25 Charms found",
            wiki: "Category:Charms#Notches"
        },
        colosseumBronzeCompleted: {
            name: "Charm Notch #6",
            spoiler: "Colosseum of Fools: Trial of the Warrior",
            wiki: "Category:Charms#Notches"
        },
        notchFogCanyon: {
            name: "Charm Notch #7",
            spoiler: "Fog Canyon: explosive eggs room",
            wiki: "Category:Charms#Notches"
        },
        gotGrimmNotch: {
            name: "Charm Notch #8",
            spoiler: "Dirtmouth: Troupe Leader Grimm",
            wiki: "Category:Charms#Notches"
        },
        hasDreamGate: {
            name: "Dreamgate",
            spoiler: "Seer: 900 Essence",
            wiki: "Dreamgate"
        },
        fragileGreed_unbreakable: {
            name: "Unbreakable Greed",
            spoiler: "Divine: Fragile Greed + 9000 Geo",
            wiki: "Divine#Unbreakable_Charms"
        },
        fragileHealth_unbreakable: {
            name: "Unbreakable Heart",
            spoiler: "Divine: Fragile Heart + 12000 Geo",
            wiki: "Divine#Unbreakable_Charms"
        },
        fragileStrength_unbreakable: {
            name: "Unbreakable Strength",
            spoiler: "Divine: Fragile Strength + 15000 Geo",
            wiki: "Divine#Unbreakable_Charms"
        },
        killedMenderBug: {
            name: "Journal: Menderbug",
            spoiler: "Forgotten Crossroads + destroy sign",
            wiki: "Menderbug"
        },
        /* 
        Path of Pain entrance discovered
        */
        pathOfPainEntrance: {
            name: "White Palace: Path of Pain Entrance",
            spoiler: "Break left wall above spikes",
            id: "Breakable Wall Ruin Lift",
            sceneName: "White_Palace_06",
            wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        killsBindingSeal: {
            name: "White Palace: Path of Pain",
            spoiler: "Main Secret Area, After Middle Lift",
            wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        killedBindingSeal: {
            name: "Journal: Seal of Binding",
            spoiler: "White Palace: Path of Pain completion",
            wiki: "Seal_of_Binding"
        },
        whitePalaceSecretRoomVisited: {
            name: "White Palace: Secret Room #1",
            spoiler: "The Pale King's Workshop",
            wiki: "White_Palace#The_Pale_King.27s_workshop"
        },
        whiteLadyRoom: {
            name: "White Palace: Secret Room #2",
            spoiler: "White Lady's Room, break floor",
            id: "Quake Floor",
            sceneName: "White_Palace_09",
            wiki: "White_Palace#White_Lady.27s_room"
        },
        elderbugGaveFlower: {
            name: "Delicate Flower: Elderbug",
            spoiler: "Deliver from Traitor's Child Grave",
            wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenGodseekerFlower: {
            name: "Delicate Flower: Godseeker",
            spoiler: "Possible after completing 2 Pantheons",
            wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenOroFlower: {
            name: "Delicate Flower: Nailmaster Oro",
            spoiler: "D. from Traitor's Child Grave",
            wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenWhiteLadyFlower: {
            name: "Delicate Flower: White Lady",
            spoiler: "Deliver from Traitor's Child Grave",
            wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenEmilitiaFlower: {
            name: "Delicate Flower: Emilitia",
            spoiler: "Deliver from Traitor's Child Grave",
            wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        whiteDefenderDefeats: {
            name: "White Defender times defeated",
            spoiler: "Royal Waterways (5 max)",
            max: 5,
            wiki: "White_Defender"
        },
        greyPrinceDefeats: {
            name: "Grey Prince Zote times defeated",
            spoiler: "Dirtmouth (10 max)",
            max: 10,
            wiki: "Grey_Prince_Zote"
        }
    },
    GODHOME_STATISTICS: {
        seenGGWastes: {
            name: "Tuner Memory",
            spoiler: "Requires completing 3 Pantheons, 2% chance",
            wiki: "Godhome#Tuner_Memory"
        },
        killedVoidIdol_1: {
            name: "Journal: Void Idol Attuned",
            spoiler: "Hall of Gods: Defeat All (Attuned)",
            wiki: "Void_Idol"
        },
        killedVoidIdol_2: {
            name: "Journal: Void Idol Ascended",
            spoiler: "Hall of Gods: Defeat All (Ascended)",
            wiki: "Void_Idol"
        },
        killedVoidIdol_3: {
            name: "Journal: Void Idol Radiant",
            spoiler: "Hall of Gods: Defeat All (Radiant)",
            wiki: "Void_Idol"
        },
        killedGodseekerMask: {
            name: "Journal: Weathered Mask",
            spoiler: "Land of Storms: All Pantheons & Bindings",
            wiki: "Weathered_Mask"
        },
        zoteStatueWallBroken: {
            name: "Intruder Discovered",
            spoiler: "Hall of Gods: Zote Statue (North-East)",
            wiki: "Hall_of_Gods#Zote"
        },
        ordealAchieved: {
            name: "The Eternal Ordeal",
            spoiler: "Reach 57 Zotelings defeated",
            wiki: "Eternal_Ordeal"
        }
    }
};

export default HK;