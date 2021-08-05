// ---------------- Hollow Knight Data Constant Objects ----------------- //
/*
    This is the whole database for the tool, based on the .json save file data
*/

const HK = {

  saveAnalyzed: false,

  sections: {

    /* ################ Intro ################### */

    intro: {
      h2: "Game Status",
      id: "hk-intro",

      percent: 0,
      maxPercent: 112,
      maxPercentDefault: 112,
      maxPercentBaseGame: 100,
      maxPercentGrimmTroupe: 106,
      maxPercentLifeblood: 107,

      extendedCompletionDone: 0,
      extendedCompletionTotal: 0,

      entries: {
        timePlayed: {
          id: "timePlayed",
          icon: "clock",
          name: "Time Played:",
          spoiler: "0 h 00 min 00 sec",
          timeH: 0,
          timeM: 0,
          timeS: 0,
        },
        gameCompletion: {
          id: "gameCompletion",
          icon: "red",
          name: "Game Completion:",
          spoiler: 0,
          spoilerAfter: "(out of 112 %)",
          spoilerAfterDefault: "(out of 112 %)",
          spoilerAfterBaseGame: "(out of 100 %)",
          spoilerAfterGrimmTroupe: "(out of 106 %)",
          spoilerAfterLifeblood: "(out of 107 %)",
        },
        gameCompletionExtended: {
          id: "gameCompletionExtended",
          icon: "red",
          name: "Detailed Extended Completion:",
          spoiler: 0,
          spoilerAfter: " / 0 = <b>0.00 %</b>",
          spoilerAfterDefault: " / 0 = <b>0.00 %</b>",
        },
        saveVersion: {
          id: "saveVersion",
          icon: "none",
          name: "Save Version:",
          spoiler: "0.0.0.0"
        },
        health: {
          id: "health",
          icon: "none",
          name: "Health:",
          spoiler: "",
          amountTotal: 5,
          permadeathMode: false,
        },
        soul: {
          id: "soul",
          icon: "none",
          name: "Soul:",
          spoiler: "",
          amountTotal: 99
        },
        notches: {
          id: "notches",
          icon: "none",
          name: "Notches:",
          spoiler: "",
          amountTotal: 3,
          amountFilled: 0,
          amountUnused: 3,
          amountOvercharmed: 0
        },
        geo: {
          id: "geo",
          icon: "none",
          name: "Geo:",
          spoiler: "",
          amount: 0,
          amountShade: 0,
          amountTotal: 0
        }
      },
    },

    /* ################ Hints ################### */

    hints: {
      h2: "Elderbug once told me...",
      id: "hk-hints",
      current: "fireballLevel",
      entries: {
        fireballLevel: {
          spoiler: "A mysterious shaman is living in a dwelling, somewhere below the town of Dirtmouth."
        },
        hornet1Defeated: {
          spoiler: "A skilled protector is guarding old ruins in a lush green forest."
        },
        hasDash: {
          spoiler: "An old cloak is lying on a green path near a broken shell."
        },
        hasWalljump: {
          spoiler: "A sharp claw is lying forgotten, somewhere amidst the insect village."
        },
        Crossroads_04: {
          spoiler: "A mother is sleeping peacefully, somewhere below the town of Dirtmouth."
        },
        slyRescued: {
          spoiler: "Our fellow town bug seems to be lost, somewhere in the crossroads."
        },
        hasLantern: {
          spoiler: "Did you know? A bright little crystal companion is able to light a way through the thickest dark places."
        },
        hasSuperDash: {
          spoiler: "There is some powerful crystal beating somewhere deep inside the mines."
        },
        hasDreamNail: {
          spoiler: "A weapon from a dream world can only be found, where the souls can peacefully rest."
        },
        /* 
        Either:
        - used the elevator in Resting Grounds to City of Tears
        - opened the Fungal Wastes city gate
        */
        killedInfectedKnight: {
          spoiler: "A shattered corpse forgotten in a windy cave is lying somewhere in the ancient depths below the rainy city."
        },
        hasDoubleJump: {
          spoiler: "Something incredibly light was dropped by a monarchfly in the ancient depths below the rainy city."
        },
        dungDefenderOrHornet2: {
          spoiler: "There are two skilled combatants. One is living at the heart of the sewers. One is watching over a shell amidst ash falling from the sky."
        },
        ismaTearOrShadeCloak: {
          spoiler: "There are two precious items. One in a grove accessed from the waterways. One guarded by a massive royal door behind the darkness."
        },
        defeatedMegaJelly: {
          spoiler: "An intelligent being is floating inside hidden archives, behind the fog."
        },
        monomonDefeated: {
          spoiler: "A dreamer is sleeping somewhere, hidden in a foggy area."
        },
        hegemolDefeated: {
          spoiler: "A dreamer is sleeping near a spider nest area."
        },
        killedBlackKnight: {
          spoiler: "Discarded shells of black guards can be seen lying on the floor of a high spire."
        },
        lurienDefeated: {
          spoiler: "A dreamer is sleeping somewhere, at the top of a high spire."
        },
        killedHollowKnight: {
          spoiler: "He heard a disturbance from inside a black temple."
        },
        endOfHints: {
          spoiler: `The Knight still explores the world of Hallownest patiently, in constant search of its remaining secrets. [this is the end of the hint system (for the moment). The rest is up to you]`
        },
      },
    },

    /* ################### Bosses ################### */

    bosses: {
      h2: "Bosses",
      id: "hk-bosses",
      description: "Bosses in this section are part of the Game Completion Percentage set by the game developers. Each boss from this list equals +1% Completion. Note: There are many other bosses in the game, some don't count towards % (see below). P1-4 means increasing difficulty as well as which <span class='spoiler-span blurred'>Pantheon</span> it unlocks.",
      percent: 0,
      maxPercent: 14,
      entries: {
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
    },

    /* #################### Charms ################### */

    charms: {
      h2: "Charms",
      id: "hk-charms",
      description: "Each Charm found in the game equals +1% to Game Completion Percentage. Note: 4 new Charms were added to the game in version 1.2.1.0. They are part of the Grimm Troupe Content Pack section below.",
      percent: 0,
      maxPercent: 36,
      // reference: https://radiance.host/apidocs/Charms.html
      entries: {
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
          spoiler: "Mantis Village, defeat Mantis Lords",
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
          spoiler: "Deepnest, requires Shade Cloak",
          wiki: "Sharp_Shadow"
        }, // 2
        gotCharm_17: {
          name: "#17 Spore Shroom",
          spoiler: "Fungal Wastes, near Queen's Gardens",
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
          spoiler: "Resting Grounds, requires Desolate Dive",
          wiki: "Soul_Eater"
        }, // 4
        gotCharm_22: {
          name: "#22 Glowing Womb",
          spoiler: "Forgotten Crossroads, requires Crystal Heart",
          wiki: "Glowing_Womb"
        }, // 2
        gotCharm_23: {
          name: "#23 Fragile Heart",
          spoiler: "Leg Eater: 350 Geo (280 with Defender's Crest)",
          wiki: "Fragile_Heart"
        }, // 2
        gotCharm_24: {
          name: "#24 Fragile Greed",
          spoiler: "Leg Eater: 250 Geo (200 with Defender's Crest)",
          wiki: "Fragile_Greed"
        }, // 2
        gotCharm_25: {
          name: "#25 Fragile Strength",
          spoiler: "Leg Eater: 600 Geo (480 with Defender's Crest)",
          wiki: "Fragile_Strength"
        }, // 3
        gotCharm_26: {
          name: "#26 Nailmaster’s Glory",
          spoiler: "Sly: Learn all Nail Arts",
          wiki: "Nailmaster's_Glory"
        }, // 1
        gotCharm_27: {
          name: "#27 Joni’s Blessing",
          spoiler: "Howling Cliffs: Joni's Repose",
          wiki: "Joni's_Blessing"
        }, // 4
        gotCharm_28: {
          name: "#28 Shape of Unn",
          spoiler: "Greenpath: Lake of Unn, requires Isma's Tear",
          wiki: "Shape_of_Unn"
        }, // 2
        gotCharm_29: {
          name: "#29 Hiveblood",
          spoiler: "The Hive, defeat Hive Knight",
          wiki: "Hiveblood"
        }, // 4
        gotCharm_30: {
          name: "#30 Dream Wielder",
          spoiler: "Seer: 500 Essence",
          wiki: "Dream_Wielder"
        }, // 1
        gotCharm_31: {
          name: "#31 Dashmaster",
          spoiler: "Fungal Wastes, below bench, near Bretta",
          wiki: "Dashmaster"
          /* 
          "id": "Shiny Item Stand",
          "sceneName": "Fungus2_23",
          */
        }, // 2
        gotCharm_32: {
          name: "#32 Quick Slash",
          spoiler: "Kingdom's Edge, requires Desolate Dive",
          wiki: "Quick_Slash"
        }, // 3
        gotCharm_33: {
          name: "#33 Spell Twister",
          spoiler: "City of Tears: Soul Sanctum",
          wiki: "Spell_Twister"
        }, // 2
        gotCharm_34: {
          name: "#34 Deep Focus",
          spoiler: "Crystal Peak, requires Crystal Heart",
          wiki: "Deep_Focus"
        }, // 4
        gotCharm_35: {
          name: "#35 Grubberfly’s Elegy",
          spoiler: "Grubfather: All 46 Grubs rescued",
          wiki: "Grubberfly's_Elegy"
        }, // 3
        gotCharm_36: {
          name: "#36 Kingsoul",
          spoiler: "Queen's Gardens (Shade Cloak) + White Palace (Awoken Dream Nail)",
          wiki: "Kingsoul"
        }, // 5
      },
    },

    /* ################ Equipment ################### */

    equipment: {
      h2: "Equipment",
      id: "hk-equipment",
      description: "Also known as Abilities. Each piece of equipment collected provides +2% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 14,
      entries: {
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
          spoiler: "Kingdom's Edge, defeat Hornet Sentinel",
          wiki: "King's_Brand"
        },
        hasShadowDash: {
          name: "Shade Cloak",
          spoiler: "The Abyss: Shadow Dash ability",
          wiki: "Shade_Cloak"
        }
      },
    },

    /* ################ Nail Upgrades ################### */

    nailUpgrades: {
      h2: "Nail Upgrades",
      id: "hk-nailupgrades",
      description: "Upgrades to the Knight's main weapon damage. Each upgrade provides +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 4,
      entries: {
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
    },

    /* ################ Nail Arts ################### */

    nailArts: {
      h2: "Nail Arts",
      id: "hk-nailarts",
      description: "Advanced weapon combat techniques. Each new technique learned provides +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 3,
      entries: {
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
    },

    /* ################ Spells ################### */

    spells: {
      h2: "Spells",
      id: "hk-spells",
      description: "Skills that consume Soul. Each new spell learned or upgraded provides +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 6,
      entries: {
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
    },

    /* ################ Mask Shards ################### */

    maskShards: {
      h2: "Mask Shards",
      id: "hk-maskshards",
      description: "Fragments for increasing max health. Each 4 Mask Fragments collected (a full Mask) provide +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 4,
      entries: {
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
        },
        /* ########## Mask Shards World ########## */
        /* "Heart Piece" sceneData.persistentBoolItems.id */
        maskShardCrossroadsSprings: {
          name: "Mask Shard #6",
          spoiler: "Forgotten Crossroads: below Hot Springs",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_13"
        },
        maskShardCrossroadsMawlek: {
          name: "Mask Shard #7",
          spoiler: "Forgotten Crossroads: defeat Brooding Mawlek",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_09"
        },
        maskShardGrubfather: {
          name: "Mask Shard #8",
          spoiler: "Grubfather: 5 Grubs rescued",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Crossroads_38"
        },
        maskShardBretta: {
          name: "Mask Shard #9",
          spoiler: "Dirtmouth: Bretta's Room, rescue Bretta",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Room_Bretta"
        },
        maskShardQueensStation: {
          name: "Mask Shard #10",
          spoiler: "Queen's Station: requires Mantis Claw",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus2_01"
        },
        maskShardWaterways: {
          name: "Mask Shard #11",
          spoiler: "Royal Waterways: top left area, swim left",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Waterways_04b"
        },
        maskShardStoneSanctuary: {
          name: "Mask Shard #12",
          spoiler: "Greenpath: Stone Sanctuary, Lumafly Lantern",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus1_36"
        },
        maskShardCrystalPeak: {
          name: "Mask Shard #13",
          spoiler: "Crystal Peak: defeat Enraged Guardian",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Mines_32"
        },
        maskShardDeepnest: {
          name: "Mask Shard #14",
          spoiler: "Deepnest: from Fungal Core (Monarch Wings)",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Fungus2_25"
        },
        maskShardHive: {
          name: "Mask Shard #15",
          spoiler: "The Hive: use Hive Guardian to break wall",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Hive_04"
        },
        maskShardDelicateFlower: {
          name: "Mask Shard #16",
          spoiler: "Resting Grounds: Delicate Flower (Grey Mourner)",
          wiki: "Mask_Shard",
          id: "Heart Piece",
          sceneName: "Room_Mansion"
        }
      },
    },

    /* ################ Vessel Fragments ################### */

    vesselFragments: {
      h2: "Vessel Fragments",
      id: "hk-vesselfragments",
      description: "Fragments for increasing max soul. Each 3 Vessel Fragments collected (a full Soul Vessel) provide +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 3,
      entries: {
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
        },
        /* ########## Vessel Fragments World ############ */
        /* "Vessel Fragment" sceneData.persistentBoolItems.id */
        vesselFragmentGreenpath: {
          name: "Vessel Fragment #5",
          spoiler: "Greenpath: near Queen's Gardens exit",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Fungus1_13"
        },
        vesselFragmentCrossroads: {
          name: "Vessel Fragment #6",
          spoiler: "Forgotten Crossroads: unlock City of Tears lift",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Crossroads_37"
        },
        vesselFragmentCityOfTears: {
          name: "Vessel Fragment #7",
          spoiler: "City of Tears: above King's Station",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Ruins2_09"
        },
        vesselFragmentDeepnest: {
          name: "Vessel Fragment #8",
          spoiler: "Deepnest: Goam platforming challenge",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Deepnest_38"
        },
        vesselFragmentFountain: {
          name: "Vessel Fragment #9",
          spoiler: "Ancient Basin Fountain: 3000 Geo",
          wiki: "Vessel_Fragment",
          id: "Vessel Fragment",
          sceneName: "Abyss_04"
        }
      },
    },

    /* ################ Dream Nail and Essence ################### */

    dreamNail: {
      h2: "Dream Nail and Essence",
      id: "hk-dreamnail",
      description: "A special dream Ability. Can collect Essence and enter dreams. Each milestone here will provide +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 3,
      entries: {
        hasDreamNail: {
          name: "Dream Nail Acquired",
          spoiler: "Resting Grounds",
          wiki: "Dream_Nail"
        },
        dreamNailUpgraded: {
          name: "Awoken Dream Nail",
          spoiler: "Seer: 1800 Essence",
          wiki: "Dream_Nail#Awoken_Dream_Nail"
        },
        mothDeparted: {
          name: "Hear the Seer's Final Words",
          spoiler: "Seer: 2400 Essence",
          wiki: "Seer"
        }
      },
    },

    /* ################ Warrior Dreams ################### */

    warriorDreams: {
      h2: "Warrior Dreams",
      id: "hk-warriordreams",
      description: "Special kind of bosses in Hollow Knight, which provide Essence after defeat. The Essence must be collected before each boss will provide +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 7,
      entries: {
        aladarSlugDefeated: {
          name: "P1 Gorb",
          spoiler: "Howling Cliffs, top middle area",
          wiki: "Gorb"
        },
        xeroDefeated: {
          name: "P2 Xero",
          spoiler: "Resting Grounds, below Crystal Peak drop",
          wiki: "Xero"
        },
        mumCaterpillarDefeated: {
          name: "P2 Marmu",
          spoiler: "Queen's Gardens, left of Stag Station",
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
          spoiler: "Greenpath: Stone Sanctuary, requires Lumafly Lantern",
          wiki: "No_Eyes"
        },
        markothDefeated: {
          name: "P4 Markoth",
          spoiler: "Kingdom's Edge, requires Shade Cloak",
          wiki: "Markoth"
        },
      },
    },

    /* ################ Dreamers ################### */

    dreamers: {
      h2: "Dreamers",
      id: "hk-dreamers",
      description: "Each Dreamer will provide +1% to Game Completion Percentage.",
      percent: 0,
      maxPercent: 3,
      entries: {
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
    },

    /* ################ Colosseum of Fools ################### */

    colosseum: {
      h2: "Colosseum of Fools",
      id: "hk-colosseum",
      description: "Completing each Trial in the Colosseum provides +1% to Game Completion Percentage. This section sums up the original 100% Game Completion Percentage from Hollow Knight in 2017 (without Content Packs).",
      percent: 0,
      maxPercent: 3,
      entries: {
        colosseumBronzeCompleted: {
          name: "Trial of the Warrior",
          spoiler: "Kingdom's Edge: top area, Little Fool: 100 Geo",
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
    },

    /* ################ Grimm Troupe Content Pack ################### */

    grimmTroupe: {
      h2: "Grimm Troupe Content Pack",
      id: "hk-grimmtroupe",
      description: "The first Content Pack. Released October 26th, 2017 (1.2.1.0 Game Update). It added additional +6% to max Game Completion Percentage. Note: It requires making a choice, but no matter what you will choose, you will still get the same +1%.",
      percent: 0,
      maxPercent: 6,
      entries: {
        gotCharm_37: {
          name: "Charm #37 Sprintmaster",
          spoiler: "Sly: 400 Geo + Shopkeeper's Key",
          wiki: "Sprintmaster"
        },
        gotCharm_38: {
          name: "Charm #38 Dreamshield",
          spoiler: "Resting Grounds, go left below Seer",
          wiki: "Dreamshield"
        },
        gotCharm_39: {
          name: "Charm #39 Weaversong",
          spoiler: "Deepnest: Weaver's Den",
          wiki: "Weaversong"
        },
        gotCharm_40: {
          name: "Charm #40 Grimmchild or Carefree Melody",
          nameDefault: "Charm #40 Grimmchild or Carefree Melody",
          nameGrimmchildP1: "Charm #40: Grimmchild (Phase 1)",
          nameGrimmchildP2: "Charm #40: Grimmchild (Phase 2)",
          nameGrimmchildP3: "Charm #40: Grimmchild (Phase 3)",
          nameGrimmchildP4: "Charm #40: Grimmchild (Phase 4)",
          nameCarefreeMelody: "Charm #40: Carefree Melody",
          spoiler: "Dirtmouth",
          spoilerDefault: "Dirtmouth",
          spoilerGrimmchildP1: "Collect 3 flames",
          spoilerGrimmchildP2: "Collect 3 flames",
          spoilerGrimmchildP3: "Collect 3 flames",
          spoilerGrimmchildP4: "Completed the Ritual",
          spoilerCarefreeMelody: "Banished Grimm Troupe",
          wiki: "Grimmchild",
          wikiDefault: "Grimmchild",
          wikiGrimmchild: "Grimmchild",
          wikiCarefreeMelody: "Carefree_Melody"
        },
        killedGrimm: {
          name: "P3 Troupe Master Grimm",
          spoiler: "Dirtmouth, collect 6 flames",
          wiki: "Grimm"
        },
        grimmChildLevel: {
          name: "Complete Ritual or Banish Troupe",
          nameDefault: "Complete Ritual or Banish Troupe",
          nameNightmareKing: "Grimm Troupe Choice: Nightmare King",
          nameBanishment: "Grimm Troupe Choice: Banishment",
          spoiler: "One choice per save file: Dirtmouth or Howling Cliffs",
          spoilerDefault: "One choice per save file: Dirtmouth or Howling Cliffs",
          spoilerNightmareKing: "Completed the Ritual",
          spoilerBanishment: "Banished Grimm Troupe",
          wiki: "Grimm_Troupe_(Quest)",
          wikiDefault: "Grimm_Troupe_(Quest)",
          wikiNightmareKing: "Nightmare_King_Grimm",
          wikiBanishment: "Nymm",
        }
      },
    },

    /* ################ Lifeblood Content Pack ################### */

    lifeblood: {
      h2: "Lifeblood Content Pack",
      id: "hk-lifeblood",
      description: "The second Content Pack. Released April 20th, 2018 (1.3.1.5 Game Update). Among many quality changes, it added one new boss, which increased the max Game Completion Percentage by +1%.",
      percent: 0,
      maxPercent: 1,
      entries: {
        killedHiveKnight: {
          name: "P3 Hive Knight",
          spoiler: "The Hive, guards Hiveblood charm",
          wiki: "Hive_Knight"
        }
      },
    },

    /* ################ Godmaster Content Pack ################### */

    godmaster: {
      h2: "Godmaster Content Pack",
      id: "hk-godmaster",
      description: "The third Content Pack. Released August 23rd, 2018 (1.4.2.4 Game Update). It added additional +5% to max Game Completion Percentage (up to a total of 112%).",
      percent: 0,
      maxPercent: 5,
      entries: {
        hasGodfinder: {
          name: "Godtuner",
          spoiler: "Royal Waterways: Junk Pit, requires Simple Key",
          wiki: "Godtuner"
        },
        /* ########## Godmaster doors ########## */
        pantheonMaster: {
          name: "P1 Pantheon of the Master",
          spoiler: "Godhome: defeat P1 bosses",
          wiki: "Pantheon_of_the_Master",
          property: "bossDoorStateTier1"
        },
        pantheonArtist: {
          name: "P2 Pantheon of the Artist",
          spoiler: "Godhome: defeat P2 bosses",
          wiki: "Pantheon_of_the_Artist",
          property: "bossDoorStateTier2"
        },
        pantheonSage: {
          name: "P3 Pantheon of the Sage",
          spoiler: "Godhome: defeat P3 bosses",
          wiki: "Pantheon_of_the_Sage",
          property: "bossDoorStateTier3"
        },
        pantheonKnight: {
          name: "P4 Pantheon of the Knight",
          spoiler: "Godhome: complete P1, P2 and P3",
          wiki: "Pantheon_of_the_Knight",
          property: "bossDoorStateTier4"
        }
      },
    },

    /* ################ Game Completion Essentials ################### */

    essential: {
      h2: "Game Completion Essentials",
      id: "hk-essential",
      description: "All things that don't count directly towards 112% Game Completion, but are required to achieve a large part of 112% points.",
      entries: {
        /* 
        Soul Warrior 2 (Shade Soul)
        Absolute Radiance (for P5, achievements)
        Sisters of Battle (for P5, achievements)
        Winged Nosk (for P5, achievements)
        */
        grubsCollected: {
          name: "Grubs Rescued",
          spoiler: "46 Grubs total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub"
        },
        grubRewards: {
          name: "Grubfather Rewards Awarded",
          spoiler: "46 Rewards total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub#Rewards_and_locations"
        },
        charmsOwned: {
          name: "Charms Owned",
          spoiler: "40 Charms total, useful for Salubra Notches",
          max: 40,
          maxDefault: 40,
          wiki: "Category:Charms#List_of_Charms"
        },
        dreamOrbs: {
          name: "Essence Collected",
          spoiler: "Dream Nail (2400 for completion)",
          max: 2400,
          maxDefault: 2400,
          wiki: "Dream_Nail#Essence"
        },
        fountainGeo: {
          name: "Geo in Fountain",
          spoiler: "Ancient Basin: 3000 Geo maximum",
          max: 3000,
          maxDefault: 3000,
          wiki: "Ancient_Basin#Description"
        },
        openedTownBuilding: {
          name: "Stag Station: Dirtmouth",
          spoiler: "Opened from inside after travelling",
          wiki: "Dirtmouth"
        },
        openedCrossroads: {
          name: "Stag Station: Forgotten Crossroads",
          spoiler: "50 Geo: Right middle-bottom area",
          wiki: "Forgotten_Crossroads"
        },
        openedGreenpath: {
          name: "Stag Station: Greenpath",
          spoiler: "140 Geo: Top middle area, below Hornet",
          wiki: "Greenpath"
        },
        openedFungalWastes: {
          name: "Stag Station: Queen's Station",
          spoiler: "120 Geo: Fungal Wastes, near Fog Canyon",
          wiki: "Fungal_Wastes#Sub-area:_Queen.27s_Station"
        },
        openedRuins1: {
          name: "Stag Station: City Storerooms",
          spoiler: "200 Geo: City of Tears, top left area",
          wiki: "City_of_Tears#City_Storerooms"
        },
        openedRestingGrounds: {
          name: "Stag Station: Resting Grounds",
          spoiler: "0 Geo: Right middle area, near Seer",
          wiki: "Resting_Grounds"
        },
        openedRuins2: {
          name: "Stag Station: King's Station",
          spoiler: "300 Geo: City of Tears, far right area",
          wiki: "City_of_Tears#Sub-area:_King.27s_Station"
        },
        openedRoyalGardens: {
          name: "Stag Station: Queen's Gardens",
          spoiler: "200 Geo: Middle area, near Traitor's Grave",
          wiki: "Queen's_Gardens"
        },
        openedDeepnest: {
          name: "Stag Station: Distant Village",
          spoiler: "250 Geo: Deepnest, far left area",
          wiki: "Deepnest#Sub-area:_Distant_Village"
        },
        openedHiddenStation: {
          name: "Stag Station: Hidden Station",
          spoiler: "300 Geo: Ancient Basin: Palace Grounds",
          wiki: "Ancient_Basin#Sub-Area:_Palace_Grounds"
        },
        openedStagNest: {
          name: "Stag Station: Stag Nest",
          spoiler: "Open all stations: Howling Cliffs, top area",
          wiki: "Howling_Cliffs#Sub-area:_Stag_Nest"
        },
        stagStationsOpened: {
          name: "Stag Stations Opened",
          spoiler: "11 Stag Stations total including Dirtmouth",
          max: 11,
          maxDefault: 11,
          wiki: "Fast_Travel_(Hollow_Knight)#Locations_and_Prices"
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
          spoiler: "City of Tears, below left Stag Station",
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
          spoiler: "Ancient Basin, left of Tram Station",
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
          spoiler: "Top of Crystal Peak, use Monarch Wings",
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
        /* 
        "abyssGateOpened": false,
        */
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
        killedBigBuzzer: {
          name: "Vengefly King",
          spoiler: "Colosseum of Fools: Trial of the Warrior, Greenpath",
          wiki: "Vengefly_King"
        },
        killedOblobble: {
          name: "P2 Oblobble",
          spoiler: "Colosseum of Fools: Trial of the Conqueror",
          wiki: "Oblobbles"
        },
        killedLobsterLancer: {
          name: "God Tamer",
          spoiler: "Colosseum of Fools: Trial of the Fool",
          wiki: "God_Tamer"
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
          name: "Nailmasters Oro & Mato",
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
      grubsList: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
    },

    /* ################ Achievements Essentials ################### */

    achievements: {
      h2: "Achievements Essentials",
      id: "hk-achievements",
      description: `All the completely optional things that matter for achievements. This includes Zote/Nailsmith choices that you've made on your save file.`,
      entries: {
        hasMap: {
          name: "Inventory Map",
          spoiler: "First map bought from Cornifer or Iselda",
          wiki: "Map_and_Quill"
        },
        mapCrossroads: {
          name: "Map: Forgotten Crossroads",
          spoiler: "30/40 Geo: below Gruzzer area",
          wiki: "Forgotten_Crossroads"
        },
        mapGreenpath: {
          name: "Map: Greenpath",
          spoiler: "60/80 Geo: just below Greenpath entrance",
          wiki: "Greenpath"
        },
        mapFungalWastes: {
          name: "Map: Fungal Wastes",
          spoiler: "75/100 Geo: right of Queen's Station",
          wiki: "Fungal_Wastes"
        },
        mapCliffs: {
          name: "Map: Howling Cliffs",
          spoiler: "75/100 Geo: left middle area, near Journal",
          wiki: "Howling_Cliffs"
        },
        mapCity: {
          name: "Map: City of Tears",
          spoiler: "90/120 Geo: left of Soul Sanctum",
          wiki: "City_of_Tears"
        },
        mapMines: {
          name: "Map: Crystal Peak",
          spoiler: "120/150 Geo: top left area",
          wiki: "Crystal_Peak"
        },
        mapWaterways: {
          name: "Map: Royal Waterways",
          spoiler: "75/100 Geo: far left area, near Fungal",
          wiki: "Royal_Waterways"
        },
        mapRestingGrounds: {
          name: "Map: Resting Grounds",
          spoiler: "75 Geo: Iselda's Shop",
          wiki: "Resting_Grounds"
        },
        mapAbyss: {
          name: "Map: Ancient Basin",
          spoiler: "112/150 Geo: center area, near fountain",
          wiki: "Ancient_Basin"
        },
        mapOutskirts: {
          name: "Map: Kingdom's Edge",
          spoiler: "112/150 Geo: left bottom area, inside pipe",
          wiki: "Kingdom's_Edge"
        },
        mapFogCanyon: {
          name: "Map: Fog Canyon",
          spoiler: "150/200 Geo: above Teacher's Archives",
          wiki: "Fog_Canyon"
        },
        mapRoyalGardens: {
          name: "Map: Queen's Gardens",
          spoiler: "150/200 Geo: below Fog Canyon entrance",
          wiki: "Queen's_Gardens"
        },
        mapDeepnest: {
          name: "Map: Deepnest",
          spoiler: "38/50 Geo: near both Fungal Wastes entrances",
          wiki: "Deepnest"
        },
        areaMaps: {
          name: "Area Maps",
          spoiler: "Cornifer and Iselda, 13 Area Maps total",
          max: 13,
          maxDefault: 13,
          wiki: "Map_and_Quill#Maps"
        },
        hasJournal: {
          name: "Hunter's Journal",
          spoiler: "Greenpath: Hunter, above Stone Sanctuary",
          wiki: "Hunter's_Journal"
        },
        hasHuntersMark: {
          name: "Hunter's Mark",
          spoiler: "Greenpath: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        killsBigBuzzer: {
          name: "Vengefly King Journal Note",
          spoiler: "Colosseum: Trial of the Warrior",
          wiki: "Vengefly_King"
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
          spoiler: "Salubra: 800 Geo + all 40 Charms Owned",
          wiki: "Salubra's_Blessing"
        },
        quirrelEpilogueCompleted: {
          name: "Quirrel: Witness",
          spoiler: "Blue Lake: after defeating Monomon the Teacher",
          wiki: "Quirrel"
        },
        xunRewardGiven: {
          name: "Grey Mourner: Solace",
          spoiler: "Resting Grounds: Complete Delicate Flower quest",
          wiki: "Grey_Mourner"
        },
        zoteStatus: {
          id: "zoteStatus",
          name: "Zote Status",
          nameDefault: "Zote Status",
          nameNeglect: "Zote Choice: Neglect",
          nameRivalry: "Zote Choice: Rivalry",
          nameTrappedVengefly: "Zote Status: Vengefly",
          nameNotRescuedVengefly: "Zote Status: Greenpath",
          nameTrappedDeepnest: "Zote Status: Deepnest",
          nameColosseum: "Zote Status: Colosseum of Fools",
          spoiler: "One achievement per save file",
          spoilerDefault: "One achievement per save file",
          spoilerNeglect: "Left Zote to die",
          spoilerRivalry: "Defeated Zote in the Colosseum of Fools",
          spoilerTrappedVengefly: "Greenpath, defeat Vengefly King",
          spoilerNotRescuedVengefly: "Check what happened with Zote",
          spoilerTrappedDeepnest: "Deepnest, free from cobwebs",
          spoilerColosseum: "Trial of the Warrior",
          wiki: "Zote"
        },
        nailsmithStatus: {
          id: "nailsmithStatus",
          name: "Nailsmith Status",
          nameDefault: "Nailsmith Status",
          nameHappyCouple: "Nailsmith Choice: Happy Couple",
          namePurity: "Nailsmith Choice: Purity",
          nameSheoHutWaiting: "Nailsmith Status: Sheo",
          nameUpgradeNail: "Nailsmith Status: Waiting",
          spoiler: "One achievement per save file",
          spoilerDefault: "One achievement per save file",
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
        mrMushroomState1: {
          name: "Mr Mushroom #1",
          spoiler: "Fungal Wastes, near Cornifer",
          wiki: "Mister_Mushroom",
          state: 1
        },
        mrMushroomState2: {
          name: "Mr Mushroom #2",
          spoiler: "Kingdom's Edge, near Isma's Grove",
          wiki: "Mister_Mushroom",
          state: 2
        },
        mrMushroomState3: {
          name: "Mr Mushroom #3",
          spoiler: "Deepnest, near Galien",
          wiki: "Mister_Mushroom",
          state: 3
        },
        mrMushroomState4: {
          name: "Mr Mushroom #4",
          spoiler: "Howling Cliffs, near Nailmaster Mato",
          wiki: "Mister_Mushroom",
          state: 4
        },
        mrMushroomState5: {
          name: "Mr Mushroom #5",
          spoiler: "Ancient Basin, near Monarch Wings",
          wiki: "Mister_Mushroom",
          state: 5
        },
        mrMushroomState6: {
          name: "Mr Mushroom #6",
          spoiler: "Fog Canyon, near Overgrown Mound",
          wiki: "Mister_Mushroom",
          state: 6
        },
        mrMushroomState7: {
          name: "Mr Mushroom #7",
          spoiler: "King's Pass, game starting location",
          wiki: "Mister_Mushroom",
          state: 7
        },
        pantheonHallownest: {
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
    },

    /* ################ Hunter's Journal ################### */

    huntersJournal: {
      h2: "Hunter's Journal (Base)",
      id: "hk-journal",
      description: `All 146 base Hunter's Journal entries that are required for Hunter's Mark and Keen Hunter/True Hunter achievements. There are more entries than base 146 (below), but they are completely optional. Green = note completed. Gray = entry discovered, but note not completed. Red = entry not yet discovered. (nr) = amount left to complete note.`,
      percent: 0,
      maxPercent: 146,
      entries: {
        PrayerSlug: {
          name: "Maggot (2)",
          nameDefault: "Maggot",
          spoiler: "Forgotten Crossroads: False Knight secret room",
          wiki: "Maggot"
        },
        OrangeScuttler: {
          name: "Lightseed (20)",
          nameDefault: "Lightseed",
          spoiler: "Infected Crossroads",
          wiki: "Lightseed"
        },
        Pigeon: {
          name: "Maskfly (15)",
          nameDefault: "Maskfly",
          spoiler: "Greenpath, Queen's Gardens",
          wiki: "Maskfly"
        },
        LazyFlyer: {
          name: "Aluba (1)",
          nameDefault: "Aluba",
          spoiler: "Lake of Unn, Queen's Gardens (near White Lady)",
          wiki: "Aluba"
        },
        AcidFlyer: {
          name: "Duranda (8)",
          nameDefault: "Duranda",
          spoiler: "Greenpath: Nailmaster Sheo's tent path",
          wiki: "Duranda"
        },
        AcidWalker: {
          name: "Durandoo (8)",
          nameDefault: "Durandoo",
          spoiler: "Greenpath, Queen's Gardens",
          wiki: "Durandoo"
        },
        PlantShooter: {
          name: "Gulka (15)",
          nameDefault: "Gulka",
          spoiler: "Greenpath: left of Stone Sanctuary",
          wiki: "Gulka"
        },
        MushroomTurret: {
          name: "Sporg (20)",
          nameDefault: "Sporg",
          spoiler: "Fungal Wastes",
          wiki: "Sporg"
        },
        ZapBug: {
          name: "Charged Lumafly (1)",
          nameDefault: "Charged Lumafly",
          spoiler: "Fog Canyon: Teacher's Archives (tank)",
          wiki: "Charged_Lumafly"
        },
        LaserBug: {
          name: "Crystal Crawler (15)",
          nameDefault: "Crystal Crawler",
          spoiler: "Crystal Peak: try to use spells",
          wiki: "Crystal_Crawler"
        },
        GorgeousHusk: {
          name: "Gorgeous Husk (1)",
          nameDefault: "Gorgeous Husk",
          spoiler: "City of Tears: secret room",
          wiki: "Gorgeous_Husk"
        },
        Worm: {
          name: "Goam (10)",
          nameDefault: "Goam",
          spoiler: "Infected Crossroads: near Fungal Wastes entrance",
          wiki: "Goam"
        },
        BigCentipede: {
          name: "Garpede (10)",
          nameDefault: "Garpede",
          spoiler: "Deepnest: right of Hot Spring",
          wiki: "Garpede"
        },
        AbyssTendril: {
          name: "Void Tendrils (10)",
          nameDefault: "Void Tendrils",
          spoiler: "The Abyss: secret room near Shade Cloak",
          wiki: "Void_Tendrils"
        },
        LobsterLancer: {
          name: "God Tamer (1)",
          nameDefault: "God Tamer",
          spoiler: "Colosseum of Fools: Trial of the Fool boss",
          wiki: "God_Tamer"
        },
        FatFluke: {
          name: "Flukemunga (8)",
          nameDefault: "Flukemunga",
          spoiler: "Royal Waterways: secret area, left of bench",
          wiki: "Flukemunga"
        },
        PaleLurker: {
          name: "Pale Lurker (1)",
          nameDefault: "Pale Lurker",
          spoiler: "Colosseum of Fools: top right breakable wall",
          wiki: "Pale_Lurker"
        },
        Crawler: {
          name: "Crawlid (0)",
          nameDefault: "Crawlid",
          spoiler: "King's Pass, Forgotten Crossroads, Greenpath",
          wiki: "Crawlid"
        },
        Buzzer: {
          name: "Vengefly (45)",
          nameDefault: "Vengefly",
          spoiler: "Howling Cliffs, Forgotten Crossroads, City of Tears",
          wiki: "Vengefly"
        },
        Bouncer: {
          name: "Gruzzer (25)",
          nameDefault: "Gruzzer",
          spoiler: "Forgotten Crossroads",
          wiki: "Gruzzer"
        },
        Climber: {
          name: "Tiktik (30)",
          nameDefault: "Tiktik",
          spoiler: "Forgotten Crossroads, Howling Cliffs, Greenpath",
          wiki: "Tiktik"
        },
        Hopper: {
          name: "Hopper (25)",
          nameDefault: "Hopper",
          spoiler: "Kingdom's Edge",
          wiki: "Hopper"
        },
        Spitter: {
          name: "Aspid Hunter (20)",
          nameDefault: "Aspid Hunter",
          spoiler: "Forgotten Crossroads, Ancient Basin, The Collector",
          wiki: "Aspid_Hunter"
        },
        Hatcher: {
          name: "Aspid Mother (15)",
          nameDefault: "Aspid Mother",
          spoiler: "Forgotten Crossroads, mainly next to the Tram station",
          wiki: "Aspid_Mother"
        },
        Hatchling: {
          name: "Aspid Hatchling (30)",
          nameDefault: "Aspid Hatchling",
          spoiler: "Forgotten Crossroads, summoned by Aspid Mother",
          wiki: "Aspid_Hatchling"
        },
        ZombieRunner: {
          name: "Wandering Husk (35)",
          nameDefault: "Wandering Husk",
          spoiler: "Forgotten Crossroads, City of Tears, Deepnest",
          wiki: "Wandering_Husk"
        },
        ZombieHornhead: {
          name: "Husk Hornhead (35)",
          nameDefault: "Husk Hornhead",
          spoiler: "Forgotten Crossroads, City of Tears, Deepnest",
          wiki: "Husk_Hornhead"
        },
        ZombieLeaper: {
          name: "Leaping Husk (35)",
          nameDefault: "Leaping Husk",
          spoiler: "Forgotten Crossroads, City of Tears, Howling Cliffs",
          wiki: "Leaping_Husk"
        },
        ZombieBarger: {
          name: "Husk Bully (35)",
          nameDefault: "Husk Bully",
          spoiler: "Forgotten Crossroads, City of Tears, Howling Cliffs",
          wiki: "Husk_Bully"
        },
        ZombieShield: {
          name: "Husk Warrior (10)",
          nameDefault: "Husk Warrior",
          spoiler: "Forgotten Crossroads: right of the Stag Station",
          wiki: "Husk_Warrior"
        },
        ZombieGuard: {
          name: "Husk Guard (6)",
          nameDefault: "Husk Guard",
          spoiler: "Forgotten Crossroads: upper right area",
          wiki: "Husk_Guard"
        },
        BigBuzzer: {
          name: "Vengefly King (2)",
          nameDefault: "Vengefly King",
          spoiler: "Greenpath, Colosseum: Trial of the Warrior",
          wiki: "Vengefly_King"
        },
        BigFly: {
          name: "Gruz Mother (3)",
          nameDefault: "Gruz Mother",
          spoiler: "Forgotten Crossroads: lower right area",
          wiki: "Gruz_Mother"
        },
        Mawlek: {
          name: "Brooding Mawlek (1)",
          nameDefault: "Brooding Mawlek",
          spoiler: "Forgotten Crossroads: down from Grubfather",
          wiki: "Brooding_Mawlek"
        },
        FalseKnight: {
          name: "False Knight (1)",
          nameDefault: "False Knight",
          spoiler: "Forgotten Crossroads: middle area map symbol",
          wiki: "False_Knight"
        },
        Roller: {
          name: "Baldur (20)",
          nameDefault: "Baldur",
          spoiler: "Ancestral Mound, Crystallised Mound, Howling Cliffs",
          wiki: "Baldur"
        },
        Blocker: {
          name: "Elder Baldur (1)",
          nameDefault: "Elder Baldur",
          spoiler: "Ancestral Mound, Greenpath, Howling Cliffs",
          wiki: "Elder_Baldur"
        },
        MossmanRunner: {
          name: "Mosskin (25)",
          nameDefault: "Mosskin",
          spoiler: "Greenpath: usually near a Volatile Mosskin",
          wiki: "Mosskin"
        },
        MossmanShaker: {
          name: "Volatile Mosskin (25)",
          nameDefault: "Volatile Mosskin",
          spoiler: "Greenpath",
          wiki: "Volatile_Mosskin"
        },
        Mosquito: {
          name: "Squit (25)",
          nameDefault: "Squit",
          spoiler: "Greenpath and the Overgrown Mound",
          wiki: "Squit"
        },
        BlobFlyer: {
          name: "Obble (20)",
          nameDefault: "Obble",
          spoiler: "Greenpath: top left of Stone Sanctuary",
          wiki: "Obble"
        },
        FungifiedZombie: {
          name: "Fungified Husk (10)",
          nameDefault: "Fungified Husk",
          spoiler: "Found only in Fungal Wastes",
          wiki: "Fungified_Husk"
        },
        MossCharger: {
          name: "Moss Charger (15)",
          nameDefault: "Moss Charger",
          spoiler: "Found only in Greenpath",
          wiki: "Moss_Charger"
        },
        MegaMossCharger: {
          name: "Massive Moss Charger (1)",
          nameDefault: "Massive Moss Charger",
          spoiler: "Greenpath: bottom left near Fog Canyon",
          wiki: "Massive_Moss_Charger"
        },
        SnapperTrap: {
          name: "Fool Eater (15)",
          nameDefault: "Fool Eater",
          spoiler: "Greenpath and Queen's Gardens",
          wiki: "Fool_Eater"
        },
        MossKnight: {
          name: "Moss Knight (8)",
          nameDefault: "Moss Knight",
          spoiler: "Found only in Greenpath",
          wiki: "Moss_Knight"
        },
        GrassHopper: {
          name: "Loodle (15)",
          nameDefault: "Loodle",
          spoiler: "Found only in Queen's Gardens",
          wiki: "Loodle"
        },
        MossFlyer: {
          name: "Mossfly (25)",
          nameDefault: "Mossfly",
          spoiler: "Queen's Gardens, Overgrown Mound",
          wiki: "Mossfly"
        },
        MossKnightFat: {
          name: "Mossy Vagabond (10)",
          nameDefault: "Mossy Vagabond",
          spoiler: "Queen's Gardens: near exit to Fungal Wastes",
          wiki: "Mossy_Vagabond"
        },
        MossWalker: {
          name: "Mosscreep (30)",
          nameDefault: "Mosscreep",
          spoiler: "Greenpath and Queen's Gardens",
          wiki: "Mosscreep"
        },
        InfectedKnight: {
          name: "Broken Vessel (1)",
          nameDefault: "Broken Vessel",
          spoiler: "Ancient Basin: far left, needs Crystal Heart",
          wiki: "Broken_Vessel"
        },
        Jellyfish: {
          name: "Ooma (12)",
          nameDefault: "Ooma",
          spoiler: "Fog Canyon: almost everywhere",
          wiki: "Ooma"
        },
        JellyCrawler: {
          name: "Uoma (20)",
          nameDefault: "Uoma",
          spoiler: "Fog Canyon: almost everywhere",
          wiki: "Uoma"
        },
        MegaJellyfish: {
          name: "Uumuu (1)",
          nameDefault: "Uumuu",
          spoiler: "Fog Canyon: inside Teacher's Archives",
          wiki: "Uumuu"
        },
        FungoonBaby: {
          name: "Fungling (30)",
          nameDefault: "Fungling",
          spoiler: "Fungal Wastes, Fungal Core, Junk Pit",
          wiki: "Fungling"
        },
        Mantis: {
          name: "Mantis Warrior (25)",
          nameDefault: "Mantis Warrior",
          spoiler: "Fungal Wastes: Mantis Village",
          wiki: "Mantis_Warrior"
        },
        MushroomRoller: {
          name: "Shrumal Warrior (20)",
          nameDefault: "Shrumal Warrior",
          spoiler: "Fungal Wastes, Fungal Core",
          wiki: "Shrumal_Warrior"
        },
        MushroomBrawler: {
          name: "Shrumal Ogre (8)",
          nameDefault: "Shrumal Ogre",
          spoiler: "Fungal Wastes, bottom of Fungal Core",
          wiki: "Shrumal_Ogre"
        },
        MushroomBaby: {
          name: "Shrumeling (20)",
          nameDefault: "Shrumeling",
          spoiler: "Fungal Wastes, near Shrumal Warriors",
          wiki: "Shrumeling"
        },
        MantisFlyerChild: {
          name: "Mantis Youth (25)",
          nameDefault: "Mantis Youth",
          spoiler: "Fungal Wastes: Mantis Village",
          wiki: "Mantis_Youth"
        },
        FungusFlyer: {
          name: "Fungoon (20)",
          nameDefault: "Fungoon",
          spoiler: "Found only in Fungal Wastes",
          wiki: "Fungoon"
        },
        FungCrawler: {
          name: "Ambloom (15)",
          nameDefault: "Ambloom",
          spoiler: "Fungal Wastes, Fungal Core",
          wiki: "Ambloom"
        },
        MantisLord: {
          name: "Mantis Lords (1)",
          nameDefault: "Mantis Lords",
          spoiler: "Fungal Wastes: Mantis Village, switch lever",
          wiki: "Mantis_Lords"
        },
        BlackKnight: {
          name: "Watcher Knight (10)",
          nameDefault: "Watcher Knight",
          spoiler: "City of Tears: Watcher's Spire, Monarch Wings",
          wiki: "Watcher_Knight"
        },
        ElectricMage: {
          name: "Volt Twister (6)",
          nameDefault: "Volt Twister",
          spoiler: "Colosseum of Fools: Trial of the Fool",
          wiki: "Volt_Twister"
        },
        Mage: {
          name: "Soul Twister (20)",
          nameDefault: "Soul Twister",
          spoiler: "City of Tears: Soul Sanctum, Trial of the Fool",
          wiki: "Soul_Twister"
        },
        MageKnight: {
          name: "Soul Warrior (2)",
          nameDefault: "Soul Warrior",
          spoiler: "City of Tears: Soul Sanctum, Trial of the Fool",
          wiki: "Soul_Warrior"
        },
        RoyalDandy: {
          name: "Husk Dandy (25)",
          nameDefault: "Husk Dandy",
          spoiler: "City of Tears: right section",
          wiki: "Husk_Dandy"
        },
        RoyalCoward: {
          name: "Cowardly Husk (25)",
          nameDefault: "Cowardly Husk",
          spoiler: "City of Tears: right section",
          wiki: "Cowardly_Husk"
        },
        RoyalPlumper: {
          name: "Gluttonous Husk (25)",
          nameDefault: "Gluttonous Husk",
          spoiler: "City of Tears: right section",
          wiki: "Gluttonous_Husk"
        },
        FlyingSentrySword: {
          name: "Winged Sentry (30)",
          nameDefault: "Winged Sentry",
          spoiler: "City of Tears, Royal Waterways, Ancient Basin",
          wiki: "Winged_Sentry"
        },
        FlyingSentryJavelin: {
          name: "Lance Sentry (25)",
          nameDefault: "Lance Sentry",
          spoiler: "City of Tears, Royal Waterways, Ancient Basin",
          wiki: "Lance_Sentry"
        },
        Sentry: {
          name: "Husk Sentry (25)",
          nameDefault: "Husk Sentry",
          spoiler: "City of Tears, Royal Waterways, Isma's Grove",
          wiki: "Husk_Sentry"
        },
        SentryFat: {
          name: "Heavy Sentry (20)",
          nameDefault: "Heavy Sentry",
          spoiler: "Found only in City of Tears",
          wiki: "Heavy_Sentry"
        },
        MageBlob: {
          name: "Mistake (25)",
          nameDefault: "Mistake",
          spoiler: "City of Tears: Soul Sanctum, Trial of the Fool",
          wiki: "Mistake"
        },
        GreatShieldZombie: {
          name: "Great Husk Sentry (10)",
          nameDefault: "Great Husk Sentry",
          spoiler: "City of Tears, Watcher's Spire",
          wiki: "Great_Husk_Sentry"
        },
        JarCollector: {
          name: "The Collector (1)",
          nameDefault: "The Collector",
          spoiler: "City of Tears: Tower of Love, Love Key",
          wiki: "The_Collector"
        },
        MageBalloon: {
          name: "Folly (15)",
          nameDefault: "Folly",
          spoiler: "City of Tears: Soul Sanctum, Trial of the Fool",
          wiki: "Folly"
        },
        MageLord: {
          name: "Soul Master (1)",
          nameDefault: "Soul Master",
          spoiler: "City of Tears: Soul Sanctum",
          wiki: "Soul_Master"
        },
        FlipHopper: {
          name: "Pilflip (20)",
          nameDefault: "Pilflip",
          spoiler: "Royal Waterways: central part",
          wiki: "Pilflip"
        },
        Flukeman: {
          name: "Flukemon (20)",
          nameDefault: "Flukemon",
          spoiler: "Royal Waterways: central part",
          wiki: "Flukemon"
        },
        Inflater: {
          name: "Hwurmp (20)",
          nameDefault: "Hwurmp",
          spoiler: "Royal Waterways, Isma's Grove",
          wiki: "Hwurmp"
        },
        Flukefly: {
          name: "Flukefey (15)",
          nameDefault: "Flukefey",
          spoiler: "Found only in Royal Waterways",
          wiki: "Flukefey"
        },
        FlukeMother: {
          name: "Flukemarm (1)",
          nameDefault: "Flukemarm",
          spoiler: "Royal Waterways: bottom, Desolate Dive",
          wiki: "Flukemarm"
        },
        DungDefender: {
          name: "Dung Defender (1)",
          nameDefault: "Dung Defender",
          spoiler: "Royal Waterways: right area",
          wiki: "Dung_Defender"
        },
        CrystalCrawler: {
          name: "Glimback (15)",
          nameDefault: "Glimback",
          spoiler: "Crystal Peak, Forgotten Crossroads toll booth",
          wiki: "Glimback"
        },
        CrystalFlyer: {
          name: "Crystal Hunter (20)",
          nameDefault: "Crystal Hunter",
          spoiler: "Crystal Peak, Crystallized Mound",
          wiki: "Crystal_Hunter"
        },
        BeamMiner: {
          name: "Crystallised Husk (15)",
          nameDefault: "Crystallised Husk",
          spoiler: "Crystal Peak: top right areas",
          wiki: "Crystallised_Husk"
        },
        ZombieMiner: {
          name: "Husk Miner (20)",
          nameDefault: "Husk Miner",
          spoiler: "Found only in Crystal Peak",
          wiki: "Husk_Miner"
        },
        MegaBeamMiner: {
          name: "Crystal Guardian (2)",
          nameDefault: "Crystal Guardian",
          spoiler: "Crystal Peak: center bench area",
          wiki: "Crystal_Guardian"
        },
        MinesCrawler: {
          name: "Shardmite (15)",
          nameDefault: "Shardmite",
          spoiler: "Found only in Crystal Peak",
          wiki: "Shardmite"
        },
        AngryBuzzer: {
          name: "Furious Vengefly (15)",
          nameDefault: "Furious Vengefly",
          spoiler: "Infected Crossroads, Trial of the Fool",
          wiki: "Furious_Vengefly"
        },
        BurstingBouncer: {
          name: "Volatile Gruzzer (15)",
          nameDefault: "Volatile Gruzzer",
          spoiler: "Infected Crossroads, Colosseum Trials",
          wiki: "Volatile_Gruzzer"
        },
        BurstingZombie: {
          name: "Violent Husk (15)",
          nameDefault: "Violent Husk",
          spoiler: "Found only in Infected Crossroads",
          wiki: "Violent_Husk"
        },
        SpittingZombie: {
          name: "Slobbering Husk (15)",
          nameDefault: "Slobbering Husk",
          spoiler: "Found only in Infected Crossroads",
          wiki: "Slobbering_Husk"
        },
        BabyCentipede: {
          name: "Dirtcarver (35)",
          nameDefault: "Dirtcarver",
          spoiler: "Deepnest, Carver Hatcher",
          wiki: "Dirtcarver"
        },
        CentipedeHatcher: {
          name: "Carver Hatcher (15)",
          nameDefault: "Carver Hatcher",
          spoiler: "Deepnest: top area Failed Tramway",
          wiki: "Carver_Hatcher"
        },
        LesserMawlek: {
          name: "Lesser Mawlek (10)",
          nameDefault: "Lesser Mawlek",
          spoiler: "Ancient Basin: left of tram, Trial of the Fool",
          wiki: "Lesser_Mawlek"
        },
        SlashSpider: {
          name: "Stalking Devout (15)",
          nameDefault: "Stalking Devout",
          spoiler: "Deepnest: left area, Distant Village",
          wiki: "Stalking_Devout"
        },
        SpiderCorpse: {
          name: "Corpse Creeper (15)",
          nameDefault: "Corpse Creeper",
          spoiler: "Found only in Deepnest: middle area",
          wiki: "Corpse_Creeper"
        },
        ShootSpider: {
          name: "Deephunter (20)",
          nameDefault: "Deephunter",
          spoiler: "Found only in Deepnest",
          wiki: "Deephunter"
        },
        MiniSpider: {
          name: "Deepling (25)",
          nameDefault: "Deepling",
          spoiler: "Deepnest: left areas",
          wiki: "Deepling"
        },
        SpiderFlyer: {
          name: "Little Weaver (20)",
          nameDefault: "Little Weaver",
          spoiler: "Deepnest: left areas",
          wiki: "Little_Weaver"
        },
        MimicSpider: {
          name: "Nosk (1)",
          nameDefault: "Nosk",
          spoiler: "Deepnest: left of Hot Spring, use Crystal Heart",
          wiki: "Nosk"
        },
        BeeHatchling: {
          name: "Hiveling (30)",
          nameDefault: "Hiveling",
          spoiler: "The Hive, Kingdom's Edge",
          wiki: "Hiveling"
        },
        BeeStinger: {
          name: "Hive Soldier (15)",
          nameDefault: "Hive Soldier",
          spoiler: "Found only in the Hive",
          wiki: "Hive_Soldier"
        },
        BigBee: {
          name: "Hive Guardian (12)",
          nameDefault: "Hive Guardian",
          spoiler: "Found only in the Hive",
          wiki: "Hive_Guardian"
        },
        HiveKnight: {
          name: "Hive Knight (1)",
          nameDefault: "Hive Knight",
          spoiler: "The Hive: right area",
          wiki: "Hive_Knight"
        },
        BlowFly: {
          name: "Boofly (20)",
          nameDefault: "Boofly",
          spoiler: "Found only in Kingdom's Edge",
          wiki: "Boofly"
        },
        CeilingDropper: {
          name: "Belfly (15)",
          nameDefault: "Belfly",
          spoiler: "City of Tears, Royal Waterways, Kingdom's Edge",
          wiki: "Belfly"
        },
        GiantHopper: {
          name: "Great Hopper (10)",
          nameDefault: "Great Hopper",
          spoiler: "Kingdom's Edge, Trial of the Conqueror",
          wiki: "Great_Hopper"
        },
        GrubMimic: {
          name: "Grub Mimic (5)",
          nameDefault: "Grub Mimic",
          spoiler: "Crystal Peak, Deepnest, Trial of the Conqueror",
          wiki: "Grub_Mimic"
        },
        MawlekTurret: {
          name: "Mawlurk (10)",
          nameDefault: "Mawlurk",
          spoiler: "Ancient Basin: left area",
          wiki: "Mawlurk"
        },
        HealthScuttler: {
          name: "Lifeseed (10)",
          nameDefault: "Lifeseed",
          spoiler: "Hallownest: inside Lifeblood Cocoons",
          wiki: "Lifeseed"
        },
        ZombieHive: {
          name: "Husk Hive (10)",
          nameDefault: "Husk Hive",
          spoiler: "found only in the Hive",
          wiki: "Husk_Hive"
        },
        Hornet: {
          name: "Hornet (2)",
          nameDefault: "Hornet",
          spoiler: "Greenpath, Kingdom's Edge, Godhome",
          wiki: "Hornet"
        },
        AbyssCrawler: {
          name: "Shadow Creeper (20)",
          nameDefault: "Shadow Creeper",
          spoiler: "Ancient Basin, the Abyss",
          wiki: "Shadow_Creeper"
        },
        SuperSpitter: {
          name: "Primal Aspid (25)",
          nameDefault: "Primal Aspid",
          spoiler: "Kingdom's Edge, Colosseum of Fools Trials",
          wiki: "Primal_Aspid"
        },
        Sibling: {
          name: "Sibling (25)",
          nameDefault: "Sibling",
          spoiler: "The Abyss, lighthouse, Birthplace",
          wiki: "Sibling"
        },
        PalaceFly: {
          name: "Wingmould (10)",
          nameDefault: "Wingmould",
          spoiler: "Found only in the White Palace",
          wiki: "Wingmould"
        },
        EggSac: {
          name: "Bluggsac (5)",
          nameDefault: "Bluggsac",
          spoiler: "Royal Waterways, Crystal Peak, Deepnest, Hallownest",
          wiki: "Bluggsac"
        },
        Mummy: {
          name: "Entombed Husk (10)",
          nameDefault: "Entombed Husk",
          spoiler: "Resting Grounds: bottom area tombs",
          wiki: "Entombed_Husk"
        },
        OrangeBalloon: {
          name: "Infected Balloon (10)",
          nameDefault: "Infected Balloon",
          spoiler: "Ancient Basin: left areas",
          wiki: "Infected_Balloon"
        },
        HeavyMantis: {
          name: "Mantis Traitor (15)",
          nameDefault: "Mantis Traitor",
          spoiler: "Queen's Gardens, Trial of the Fool",
          wiki: "Mantis_Traitor"
        },
        TraitorLord: {
          name: "Traitor Lord (1)",
          nameDefault: "Traitor Lord",
          spoiler: "Queen's Gardens: upper left, Shade Cloak",
          wiki: "Traitor_Lord"
        },
        MantisHeavyFlyer: {
          name: "Mantis Petra (16)",
          nameDefault: "Mantis Petra",
          spoiler: "Queen's Gardens, Trial of the Fool",
          wiki: "Mantis_Petra"
        },
        GardenZombie: {
          name: "Spiny Husk (20)",
          nameDefault: "Spiny Husk",
          spoiler: "Found only in Queen's Gardens",
          wiki: "Spiny_Husk"
        },
        RoyalGuard: {
          name: "Kingsmould (2)",
          nameDefault: "Kingsmould",
          spoiler: "Found only in the White Palace",
          wiki: "Kingsmould"
        },
        WhiteRoyal: {
          name: "Royal Retainer (10)",
          nameDefault: "Royal Retainer",
          spoiler: "Found only in the White Palace",
          wiki: "Royal_Retainer"
        },
        Oblobble: {
          name: "Oblobble (3)",
          nameDefault: "Oblobble",
          spoiler: "Trial of the Conqueror, Godhome",
          wiki: "Oblobbles"
        },
        Blobble: {
          name: "Battle Obble (15)",
          nameDefault: "Battle Obble",
          spoiler: "Colosseum of Fools: Trials #2 and #3",
          wiki: "Battle_Obble"
        },
        ColMosquito: {
          name: "Armoured Squit (15)",
          nameDefault: "Armoured Squit",
          spoiler: "Colosseum of Fools: Trials #2 and #3",
          wiki: "Armoured_Squit"
        },
        ColRoller: {
          name: "Sharp Baldur (20)",
          nameDefault: "Sharp Baldur",
          spoiler: "Colosseum of Fools: Trials #1 and #3",
          wiki: "Sharp_Baldur"
        },
        ColFlyingSentry: {
          name: "Winged Fool (25)",
          nameDefault: "Winged Fool",
          spoiler: "Colosseum of Fools: Trials #2 and #3",
          wiki: "Winged_Fool"
        },
        ColMiner: {
          name: "Sturdy Fool (25)",
          nameDefault: "Sturdy Fool",
          spoiler: "Colosseum of Fools: Trials #1 and #3",
          wiki: "Sturdy_Fool"
        },
        ColShield: {
          name: "Shielded Fool (25)",
          nameDefault: "Shielded Fool",
          spoiler: "Colosseum of Fools: All Trials",
          wiki: "Shielded_Fool"
        },
        ColWorm: {
          name: "Heavy Fool (20)",
          nameDefault: "Heavy Fool",
          spoiler: "Colosseum of Fools: Trials #2 and #3",
          wiki: "Heavy_Fool"
        },
        ColHopper: {
          name: "Death Loodle (15)",
          nameDefault: "Death Loodle",
          spoiler: "Colosseum of Fools: Trial of the Fool",
          wiki: "Death_Loodle"
        },
        GhostAladar: {
          name: "Gorb (1)",
          nameDefault: "Gorb",
          spoiler: "Howling Cliffs: top area",
          wiki: "Gorb"
        },
        GhostXero: {
          name: "Xero (1)",
          nameDefault: "Xero",
          spoiler: "Resting Grounds: left area",
          wiki: "Xero"
        },
        GhostHu: {
          name: "Elder Hu (1)",
          nameDefault: "Elder Hu",
          spoiler: "Fungal Wastes: above acid bridge",
          wiki: "Elder_Hu"
        },
        GhostMarmu: {
          name: "Marmu (1)",
          nameDefault: "Marmu",
          spoiler: "Queen's Gardens: left of Stag Station",
          wiki: "Marmu"
        },
        GhostNoEyes: {
          name: "No Eyes (1)",
          nameDefault: "No Eyes",
          spoiler: "Greenpath: Stone Sanctuary, requires Lumafly Lantern",
          wiki: "No_Eyes"
        },
        GhostMarkoth: {
          name: "Markoth (1)",
          nameDefault: "Markoth",
          spoiler: "Kingdom's Edge, requires Shade Cloak",
          wiki: "Markoth"
        },
        GhostGalien: {
          name: "Galien (1)",
          nameDefault: "Galien",
          spoiler: "Deepnest: below Failed Tramway",
          wiki: "Galien"
        },
        ShadeJournal: {
          name: "Shade (0)",
          nameDefault: "Shade",
          spoiler: "Unlocked automatically after getting the Journal",
          wiki: "Shade"
        },
      },
    },

    /* ################ Optional Journal Entries ################### */

    huntersJournalOptional: {
      h2: "Optional Journal Entries",
      id: "hk-journal-optional",
      description: "The remaining Hunter's Journal entries which don't count for Hunter's Mark and Keen/True Hunter achievements. Note: 6 entries can be permanently unobtainable, depending on your choices in the save file (<span class='spoiler-span blurred'>Grey Prince Zote, all 3 Zotelings, Grimmkin Nightmare and Nightmare King</span>).",
      entries: {
        HunterMark: {
          name: "Hunter's Mark (1)",
          nameDefault: "Hunter's Mark",
          spoiler: "Greenpath: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        MenderBug: {
          name: "Menderbug (1)",
          nameDefault: "Menderbug",
          spoiler: "Forgotten Crossroads: destroy sign",
          wiki: "Menderbug"
        },
        Zote: {
          name: "Zote (1)",
          nameDefault: "Zote",
          spoiler: "Colosseum: Trial of the Warrior or The Eternal Ordeal",
          wiki: "Zote"
        },
        HollowKnight: {
          name: "Hollow Knight (1)",
          nameDefault: "Hollow Knight",
          spoiler: "Forgotten Crossroads: Black Egg Temple",
          wiki: "Hollow_Knight"
        },
        FinalBoss: {
          name: "The Radiance (1)",
          nameDefault: "The Radiance",
          spoiler: "Requires Void Heart & Dream Nail Hollow Knight",
          wiki: "Radiance"
        },
        WhiteDefender: {
          name: "White Defender (1)",
          nameDefault: "White Defender",
          spoiler: "Royal Waterways: Dung Defender, Desolate Dive",
          wiki: "White_Defender"
        },
        GreyPrince: {
          name: "Grey Prince Zote (1)",
          nameDefault: "Grey Prince Zote",
          spoiler: "Dirtmouth: Bretta's Room (per save choice)",
          wiki: "Grey_Prince_Zote"
        },
        ZotelingBalloon: {
          name: "Volatile Zoteling (1)",
          nameDefault: "Volatile Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 3+",
          wiki: "Volatile_Zoteling"
        },
        ZotelingHopper: {
          name: "Hopping Zoteling (1)",
          nameDefault: "Hopping Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 2+",
          wiki: "Hopping_Zoteling"
        },
        ZotelingBuzzer: {
          name: "Winged Zoteling (1)",
          nameDefault: "Winged Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 1+",
          wiki: "Winged_Zoteling"
        },
        FlameBearerSmall: {
          name: "Grimmkin Novice (3)",
          nameDefault: "Grimmkin Novice",
          spoiler: "Greenpath, Crystal Peak, City of Tears",
          wiki: "Grimmkin_Novice"
        },
        FlameBearerMed: {
          name: "Grimmkin Master (4)",
          nameDefault: "Grimmkin Master",
          spoiler: "King's Pass, Resting Grounds, Kingdom's Edge",
          wiki: "Grimmkin_Master"
        },
        FlameBearerLarge: {
          name: "Grimmkin Nightmare (5)",
          nameDefault: "Grimmkin Nightmare",
          spoiler: "Fungal Core, Royal Waterways, Hive",
          wiki: "Grimmkin_Nightmare"
        },
        Grimm: {
          name: "Troupe Master Grimm (1)",
          nameDefault: "Troupe Master Grimm",
          spoiler: "Dirtmouth: collect 6 flames",
          wiki: "Grimm"
        },
        NightmareGrimm: {
          name: "Nightmare King (1)",
          nameDefault: "Nightmare King",
          spoiler: "Dirtmouth: collect 9 flames",
          wiki: "Nightmare_King"
        },
        BindingSeal: {
          name: "Seal of Binding (1)",
          nameDefault: "Seal of Binding",
          spoiler: "White Palace: Path of Pain completion",
          wiki: "Seal_of_Binding"
        },
        NailBros: {
          name: "Nailmasters Oro & Mato (1)",
          nameDefault: "Nailmasters Oro & Mato",
          spoiler: "Godhome: Pantheon of the Master",
          wiki: "Brothers_Oro_%26_Mato"
        },
        Paintmaster: {
          name: "Paintmaster Sheo (1)",
          nameDefault: "Paintmaster Sheo",
          spoiler: "Godhome: Pantheon of the Artist",
          wiki: "Paintmaster_Sheo"
        },
        Nailsage: {
          name: "Great Nailsage Sly (1)",
          nameDefault: "Great Nailsage Sly",
          spoiler: "Godhome: Pantheon of the Sage",
          wiki: "Great_Nailsage_Sly"
        },
        HollowKnightPrime: {
          name: "Pure Vessel (1)",
          nameDefault: "Pure Vessel",
          spoiler: "Godhome: Pantheon of the Knight",
          wiki: "Pure_Vessel"
        },
        GodseekerMask: {
          name: "Weathered Mask (1)",
          nameDefault: "Weathered Mask",
          spoiler: "Land of Storms: All Pantheons & Bindings",
          wiki: "Weathered_Mask"
        },
        VoidIdol_1: {
          name: "Void Idol Attuned (1)",
          nameDefault: "Void Idol Attuned",
          spoiler: "Hall of Gods: Defeat All (Attuned)",
          wiki: "Void_Idol"
        },
        VoidIdol_2: {
          name: "Void Idol Ascended (1)",
          nameDefault: "Void Idol Ascended",
          spoiler: "Hall of Gods: Defeat All (Ascended)",
          wiki: "Void_Idol"
        },
        VoidIdol_3: {
          name: "Void Idol Radiant (1)",
          nameDefault: "Void Idol Radiant",
          spoiler: "Hall of Gods: Defeat All (Radiant)",
          wiki: "Void_Idol"
        },
      },
    },

    /* ################ Game Statistics ################### */

    statistics: {
      h2: "Game Statistics",
      id: "hk-statistics",
      description: "This section is dedicated to all secrets, numbers and stats fans. Everything else you wish to know or the game doesn't tell you: Secrets, Whispering Roots, Geo deposits, Nail damage, Notches, total Relics found and many others.",
      entries: {
        unlockedCompletionRate: {
          name: "World Sense Ability",
          spoiler: "Temple of the Black Egg: Lore Tablet",
          wiki: "World_Sense"
        },
        journalEntriesCompleted: {
          name: "Creatures Encountered",
          spoiler: "Hunter's Journal (158-164 max)",
          spoilerDefault: "Hunter's Journal",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        /* 
        Add 4 remaining to Hunter Notes max
        */
        journalNotesCompleted: {
          name: "Hunter Notes Completed",
          spoiler: "Hunter's Journal (158-164 max)",
          spoilerDefault: "Hunter's Journal",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        nailDamage: {
          name: "Base Nail Damage",
          spoiler: "Nailsmith upgrades, City of Tears",
          max: 21,
          maxDefault: 21,
          wiki: "Nail#Nail_Upgrades"
        },
        whisperingRoots: {
          name: "Whispering Roots Completed",
          spoiler: "Dream Nail (15 Roots total)",
          max: 15,
          maxDefault: 15,
          wiki: "Whispering_Root"
        },
        relicsWandererJournal: {
          name: "Relic #1 Found Total",
          nameHeld: "trinket1",
          nameSold: "soldTrinket1",
          spoiler: "Wanderer's Journal (14 Journals total)",
          max: 14,
          maxDefault: 14,
          wiki: "Wanderer's_Journal"
        },
        relicsHallownestSeal: {
          name: "Relic #2 Found Total",
          nameHeld: "trinket2",
          nameSold: "soldTrinket2",
          spoiler: "Hallownest Seal (17 Seals total)",
          max: 17,
          maxDefault: 17,
          wiki: "Hallownest_Seal"
        },
        relicsKingsIdol: {
          name: "Relic #3 Found Total",
          nameHeld: "trinket3",
          nameSold: "soldTrinket3",
          spoiler: "King's Idol (8 Idols total)",
          max: 8,
          maxDefault: 8,
          wiki: "King's_Idol"
        },
        relicsArcaneEgg: {
          name: "Relic #4 Found Total",
          nameHeld: "trinket4",
          nameSold: "soldTrinket4",
          spoiler: "Arcane Egg (4 Eggs max, 1 missable)",
          max: 3,
          maxDefault: 3,
          wiki: "Arcane_Egg"
        },
        /* "id": "Shiny Item (1)",
        "sceneName": "Abyss_08", */
        arcaneEggLifebloodCoreRoom: {
          name: "Lifeblood Core Room Arcane Egg",
          spoiler: "The only missable Relic",
          id: "Shiny Item (1)",
          sceneName: "Abyss_08",
          wiki: "Abyss#Lifeblood_Chamber"
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
          name: "Rancid Eggs Sold",
          spoiler: "Dirtmouth: Jinn, Steel Soul Mode only",
          wiki: "Jinn"
        },
        tukDungEgg: {
          name: "Tuk: Free Rancid Egg",
          spoiler: "Royal Waterways: Tuk, with Defender's Crest",
          wiki: "Tuk"
        },
        xunFlowerBrokeTimes: {
          name: "Delicate Flowers Destroyed",
          spoiler: "Grey Mourner, Traitor's Child Grave",
          wiki: "Delicate_Flower"
        },
        geoRocks: {
          id: "geoRocks",
          name: "Geo Rocks",
          spoiler: "Unbroken | Broken | Discovered",
          wiki: "Geo#How_to_Acquire",
          notActivated: 0,
          activated: 0,
          discoveredTotal: 0,
          max: 205,
          maxDefault: 205,
        },
        itemsDiscovered: {
          id: "itemsDiscovered",
          name: "Interactables",
          spoiler: "Not A. | Activated | Discovered",
          wiki: "Category:Exploration_(Hollow_Knight)",
          notActivated: 0,
          activated: 0,
          discoveredTotal: 0
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
        hasQuill: {
          name: "Quill",
          spoiler: "120 Geo: Iselda's Shop, updates map with explored areas",
          wiki: "Map_and_Quill#Mapping_Tools"
        },
        hasPinBench: {
          name: "Map Pin: Bench",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Bench_(Hollow_Knight)"
        },
        hasPinShop: {
          name: "Map Pin: Vendor",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Category:NPCs_(Hollow_Knight)#Merchants"
        },
        hasPinCocoon: {
          name: "Map Pin: Lifeblood Cocoon",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Lifeblood_Cocoon"
        },
        hasPinSpa: {
          name: "Map Pin: Hot Springs",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Hot_Springs"
        },
        hasPinStag: {
          name: "Map Pin: Stag Station",
          spoiler: "100 Geo: Iselda's Shop, unlock first Station",
          wiki: "Stag_Station"
        },
        hasPinGhost: {
          name: "Map Pin: Warrior's Grave",
          spoiler: "180 Geo: Iselda's Shop, acquire Dream Nail",
          wiki: "Warrior_Dreams"
        },
        hasPinDreamPlant: {
          name: "Map Pin: Whispering Root",
          spoiler: "150 Geo: Iselda's Shop, acquire Dream Nail",
          wiki: "Whispering_Root"
        },
        hasPinTram: {
          name: "Map Pin: Tram",
          spoiler: "100 Geo: Iselda's Shop, acquire Tram Pass",
          wiki: "Tram"
        },
        hasMarker_r: {
          name: "Map Pin: Shell Marker",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_b: {
          name: "Map Pin: Scarab Marker",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_y: {
          name: "Map Pin: Token Marker",
          spoiler: "100 Geo: Iselda's Shop, acquire Mothwing Cloak",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_w: {
          name: "Map Pin: Gleaming Marker",
          spoiler: "210 Geo: Iselda, acquire Mothwing Cloak",
          wiki: "Iselda#Map_Pins"
        },
        hasPinGuardian: {
          name: "Map Pin: Dreamers",
          spoiler: "Resting Grounds: Inspect the shrine",
          wiki: "Dreamers"
        },
        hasPinBlackEgg: {
          name: "Map Pin: Temple of the Black Egg",
          spoiler: "City of Tears: Inspect fountain",
          wiki: "Temple_of_the_Black_Egg"
        },
        hasPinGrub: {
          name: "Collector's Map",
          spoiler: "Kingdom's Edge: Tower of Love, Love Key",
          wiki: "Map_and_Quill#The_Collector's_Map"
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
        bankerAccountPurchased: {
          name: "Opened Bank Account",
          spoiler: "100 Geo: Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        bankerBalance: {
          name: "Bank Account Balance",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleLeft: {
          name: "Banker Disappeared",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleCheckedStand: {
          name: "Investigated Banker Stand",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        bankerSpaMet: {
          name: "Found & Talked to Millibelle",
          spoiler: "City of Tears: Hot Springs, Simple Key",
          wiki: "Millibelle"
        },
        millibelleReclaimedAllGeo: {
          name: "Reclaimed All Geo",
          spoiler: "City of Tears: Hot Springs, Millibelle the Thief",
          wiki: "Millibelle"
        },
        /* 
        Path of Pain entrance discovered
        */
        pathOfPainEntrance: {
          name: "White Palace: Path of Pain Entrance",
          spoiler: "Break left wall above lift area",
          id: "Breakable Wall Ruin Lift",
          sceneName: "White_Palace_06",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        killsBindingSeal: {
          name: "White Palace: Path of Pain",
          spoiler: "Main Secret Area, After Middle Lift",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
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
        throneRoomLoreTablet: {
          name: "White Palace: Secret Room #3",
          spoiler: "Throne Room, break right wall",
          id: "Breakable Wall Waterways",
          sceneName: "White_Palace_09",
          wiki: "White_Palace#Throne_room_Lore_Tablet"
        },
        /* 
        #52 Quake Floor 🗺️ Palace Caged Lever ⌨️ White_Palace_15
        #53 Breakable Wall Waterways 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        #54 Break Floor 1 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        */
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
          name: "White Defender Times Defeated",
          spoiler: "Royal Waterways (5 max)",
          max: 5,
          maxDefault: 5,
          wiki: "White_Defender"
        },
        greyPrinceDefeats: {
          name: "Grey Prince Zote Times Defeated",
          spoiler: "Dirtmouth (10 max)",
          max: 10,
          maxDefault: 10,
          wiki: "Grey_Prince_Zote"
        }
      },
    },

    /* ################################################# Godhome Statistics ############################################## */

    godhomeStatistics: {
      h2: "Godhome Statistics",
      id: "hk-godhome-statistics",
      description: "Everything about Godhome, that didn't fit any other category. Currently a little empty here, but I plan to definitively add more stats in the future.",
      entries: {
        seenGGWastes: {
          name: "Tuner Memory",
          spoiler: "Requires completing 3 Pantheons, 2% chance",
          wiki: "Godhome#Tuner_Memory"
        },
        blueRoomDoorUnlocked: {
          name: "Lifeblood Door Open",
          spoiler: "Complete any 8 Pantheon bindings total",
          wiki: "Godhome#Locked_Lifeblood_Room"
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
          spoiler: "Hall of Gods: Zote Statue (upper right)",
          wiki: "Hall_of_Gods#Zote"
        },
        ordealAchieved: {
          name: "The Eternal Ordeal",
          spoiler: "Reach 57 Zotelings defeated",
          wiki: "Eternal_Ordeal"
        }
      },
    },

    /* ################################################### Pantheon of the Master #################################################### */

    pantheonOfTheMaster: {
      h2: "Pantheon of the Master (P1)",
      id: "hk-pantheon-master",
      property: "bossDoorStateTier1",
      description: "Seek the Gods of Nail and Shell",
      entries: {
        unlocked: {
          name: "P1 Unlocked",
          spoiler: "Defeat P1 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Master"
        },
        completed: {
          name: "P1 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Master"
        },
        boundNail: {
          name: "P1 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P1 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P1 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P1 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P1 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P1 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Artist #################################################### */

    pantheonOfTheArtist: {
      h2: "Pantheon of the Artist (P2)",
      id: "hk-pantheon-artist",
      property: "bossDoorStateTier2",
      description: "Seek the God Inspired",
      entries: {
        unlocked: {
          name: "P2 Unlocked",
          spoiler: "Defeat P2 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Artist"
        },
        completed: {
          name: "P2 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Artist"
        },
        boundNail: {
          name: "P2 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P2 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P2 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P2 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P2 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P2 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Sage #################################################### */

    pantheonOfTheSage: {
      h2: "Pantheon of the Sage (P3)",
      id: "hk-pantheon-sage",
      property: "bossDoorStateTier3",
      description: "Seek the God of Wealth and Power",
      entries: {
        unlocked: {
          name: "P3 Unlocked",
          spoiler: "Defeat P3 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Sage"
        },
        completed: {
          name: "P3 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Sage"
        },
        boundNail: {
          name: "P3 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P3 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P3 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P3 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P3 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P3 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of the Knight #################################################### */

    pantheonOfTheKnight: {
      h2: "Pantheon of the Knight (P4)",
      id: "hk-pantheon-knight",
      property: "bossDoorStateTier4",
      description: "Seek the Pure God",
      entries: {
        unlocked: {
          name: "P4 Unlocked",
          spoiler: "Complete 3 previous Pantheons to unlock",
          wiki: "Pantheon_of_the_Knight"
        },
        completed: {
          name: "P4 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Knight"
        },
        boundNail: {
          name: "P4 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P4 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P4 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P4 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P4 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P4 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Pantheon of Hallownest #################################################### */

    pantheonOfHallownest: {
      h2: "Pantheon of Hallownest (P5)",
      id: "hk-pantheon-hallownest",
      property: "bossDoorStateTier5",
      description: "Seek the Kingdom's Forgotten Light",
      entries: {
        unlocked: {
          name: "P5 Unlocked",
          spoiler: "Complete 4 previous Pantheons to unlock",
          wiki: "Pantheon_of_Hallownest"
        },
        completed: {
          name: "P5 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_Hallownest"
        },
        boundNail: {
          name: "P5 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P5 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P5 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P5 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P5 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P5 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },

    /* ################################################### Hall of Gods ############################################################# */

    hallOfGods: {
      h2: "Hall of Gods",
      id: "hk-hall-of-gods",
      property: "statueState",
      description: "Bottom of Godhome. Detecting what bosses have been unlocked and defeated on all three difficulty levels: Attuned, Ascended and Radiant.",
      entries: {
        GruzMotherUnlocked: {
          name: "Gruz Mother: Unlocked",
          spoiler: "I sleep amongst winding roads",
          id: "GruzMother",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAttuned: {
          name: "Gruz Mother: Attuned",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAscended: {
          name: "Gruz Mother: Ascended",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherRadiant: {
          name: "Gruz Mother: Radiant",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        VengeflyUnlocked: {
          name: "Vengefly King: Unlocked",
          spoiler: "I keep guard above a verdant land",
          id: "Vengefly",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAttuned: {
          name: "Vengefly King: Attuned",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAscended: {
          name: "Vengefly King: Ascended",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyRadiant: {
          name: "Vengefly King: Radiant",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        BroodingMawlekUnlocked: {
          name: "Brooding Mawlek: Unlocked",
          spoiler: "I call out to no one...",
          id: "BroodingMawlek",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAttuned: {
          name: "Brooding Mawlek: Attuned",
          spoiler: "...hidden by roads and highways",
          id: "BroodingMawlek",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAscended: {
          name: "Brooding Mawlek: Ascended",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekRadiant: {
          name: "Brooding Mawlek: Radiant",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        FalseKnightUnlocked: {
          name: "False Knight: Unlocked",
          spoiler: "I protect the weak in...",
          id: "FalseKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAttuned: {
          name: "False Knight: Attuned",
          spoiler: "...the heart of the crossroads",
          id: "FalseKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAscended: {
          name: "False Knight: Ascended",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightRadiant: {
          name: "False Knight: Radiant",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FailedChampionUnlocked: {
          name: "Failed Champion: Unlocked",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAttuned: {
          name: "Failed Champion: Attuned",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAscended: {
          name: "Failed Champion: Ascended",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionRadiant: {
          name: "Failed Champion: Radiant",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        Hornet1Unlocked: {
          name: "Hornet Protector: Unlocked",
          spoiler: "I watch over lush pathways...",
          id: "Hornet1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Attuned: {
          name: "Hornet Protector: Attuned",
          spoiler: "...and distant ash-swept graves",
          id: "Hornet1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Ascended: {
          name: "Hornet Protector: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Radiant: {
          name: "Hornet Protector: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet2Unlocked: {
          name: "Hornet Sentinel: Unlocked",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Attuned: {
          name: "Hornet Sentinel: Attuned",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Ascended: {
          name: "Hornet Sentinel: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Radiant: {
          name: "Hornet Sentinel: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        MegaMossChargerUnlocked: {
          name: "Massive Moss Charger: Unlocked",
          spoiler: "Together we hunt in paths...",
          id: "MegaMossCharger",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAttuned: {
          name: "Massive Moss Charger: Attuned",
          spoiler: "...overgrown with green",
          id: "MegaMossCharger",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAscended: {
          name: "Massive Moss Charger: Ascended",
          spoiler: "Restless god of those...",
          id: "MegaMossCharger",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerRadiant: {
          name: "Massive Moss Charger: Radiant",
          spoiler: "...who band together",
          id: "MegaMossCharger",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        FlukemarmUnlocked: {
          name: "Flukemarm: Unlocked",
          spoiler: "I lie within a maze of pipes",
          id: "Flukemarm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAttuned: {
          name: "Flukemarm: Attuned",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAscended: {
          name: "Flukemarm: Ascended",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmRadiant: {
          name: "Flukemarm: Radiant",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        MantisLordsUnlocked: {
          name: "Mantis Lords: Unlocked",
          spoiler: "We watch over a village of warriors",
          id: "MantisLords",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAttuned: {
          name: "Mantis Lords: Attuned",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAscended: {
          name: "Mantis Lords: Ascended",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsRadiant: {
          name: "Mantis Lords: Radiant",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsExtraUnlocked: {
          name: "Sisters of Battle: Unlocked",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAttuned: {
          name: "Sisters of Battle: Attuned",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAscended: {
          name: "Sisters of Battle: Ascended",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraRadiant: {
          name: "Sisters of Battle: Radiant",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        OblobblesUnlocked: {
          name: "Oblobbles: Unlocked",
          spoiler: "Together we are chained in a strange colosseum",
          id: "Oblobbles",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAttuned: {
          name: "Oblobbles: Attuned",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAscended: {
          name: "Oblobbles: Ascended",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesRadiant: {
          name: "Oblobbles: Radiant",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        HiveKnightUnlocked: {
          name: "Hive Knight: Unlocked",
          spoiler: "I guard the heart of the hive for my Queen",
          id: "HiveKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAttuned: {
          name: "Hive Knight: Attuned",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAscended: {
          name: "Hive Knight: Ascended",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightRadiant: {
          name: "Hive Knight: Radiant",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        BrokenVesselUnlocked: {
          name: "Broken Vessel: Unlocked",
          spoiler: "I sleep in the deep caves below the world",
          id: "BrokenVessel",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAttuned: {
          name: "Broken Vessel: Attuned",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAscended: {
          name: "Broken Vessel: Ascended",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselRadiant: {
          name: "Broken Vessel: Radiant",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        LostKinUnlocked: {
          name: "Lost Kin: Unlocked",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAttuned: {
          name: "Lost Kin: Attuned",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAscended: {
          name: "Lost Kin: Ascended",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinRadiant: {
          name: "Lost Kin: Radiant",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        NoskUnlocked: {
          name: "Nosk: Unlocked",
          spoiler: "I wait patiently in a dark nest of predators",
          id: "Nosk",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAttuned: {
          name: "Nosk: Attuned",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAscended: {
          name: "Nosk: Ascended",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskRadiant: {
          name: "Nosk: Radiant",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskHornetUnlocked: {
          name: "Winged Nosk: Unlocked",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAttuned: {
          name: "Winged Nosk: Attuned",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAscended: {
          name: "Winged Nosk: Ascended",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetRadiant: {
          name: "Winged Nosk: Radiant",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        CollectorUnlocked: {
          name: "The Collector: Unlocked",
          spoiler: "I lurk at the peak of a forsaken tower",
          id: "Collector",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAttuned: {
          name: "The Collector: Attuned",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier1",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAscended: {
          name: "The Collector: Ascended",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier2",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorRadiant: {
          name: "The Collector: Radiant",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier3",
          wiki: "Hall_of_Gods#The_Collector"
        },
        GodTamerUnlocked: {
          name: "God Tamer: Unlocked",
          spoiler: "I wait, weapon in hand, within the colosseum",
          id: "GodTamer",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAttuned: {
          name: "God Tamer: Attuned",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier1",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAscended: {
          name: "God Tamer: Ascended",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier2",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerRadiant: {
          name: "God Tamer: Radiant",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier3",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        CrystalGuardian1Unlocked: {
          name: "Crystal Guardian: Unlocked",
          spoiler: "I rest amongst crystals...",
          id: "CrystalGuardian1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Attuned: {
          name: "Crystal Guardian: Attuned",
          spoiler: "...and strange machinery",
          id: "CrystalGuardian1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Ascended: {
          name: "Crystal Guardian: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Radiant: {
          name: "Crystal Guardian: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian2Unlocked: {
          name: "Enraged Guardian: Unlocked",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Attuned: {
          name: "Enraged Guardian: Attuned",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Ascended: {
          name: "Enraged Guardian: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Radiant: {
          name: "Enraged Guardian: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        UumuuUnlocked: {
          name: "Uumuu: Unlocked",
          spoiler: "I sleep submerged in the depths of the archive",
          id: "Uumuu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAttuned: {
          name: "Uumuu: Attuned",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAscended: {
          name: "Uumuu: Ascended",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuRadiant: {
          name: "Uumuu: Radiant",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Uumuu"
        },
      },
    }


  },
};

export default HK;