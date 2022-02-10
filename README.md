<p align="center">
  <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Steam&message=Guide&color=grey&style=for-the-badge&logo=Steam"></a>
  <a href="https://www.paypal.me/ReznoRMichael" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal"></a><br>
  <a href="https://twitter.com/intent/follow?screen_name=ReznoRMichael" target="_blank">
  <img src="https://img.shields.io/twitter/follow/ReznoRMichael?style=social&logo=twitter"></a>
  <a href="https://www.youtube.com/c/MichaelReznoR" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Youtube&message=reznor.technology&labelColor=lightgrey&color=FF0000&style=flat&logo=youtube"></a>
  <a href="https://www.instagram.com/reznor.technology/" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Instagram&message=reznor.technology&labelColor=lightgrey&color=E4405F&style=flat&logo=Instagram"></a>
</p>

# Save Completion Analyzer for Hollow Knight

> Now you can see what you missed easily! Game Completion %, every Shard/Fragment/Ore, costs, locations, Game Statistics, Hunter's Journal, Achievements, Game Completion essentials. And if you are completely lost, I designed a spoiler-free Hint system based on your individual game progress.

## Support Tool (PayPal)

![donate](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal&link=https://www.paypal.com/paypalme/ReznoRMichael)

Every single penny counts: [Donate any amount](https://www.paypal.me/ReznoRMichael). By donating you directly contribute to the purpose of improving the tool for yourself and everyone else.

> **PayPal supporters are immortalized on the Tool's Web page** with a Lvl indicating the amount of support for the Tool. You can get your name/nick immortalized too! Donate at least $1 for the Tool development 🙂 You can include the name or nick in the PayPal donation message (optional) or "Anonymous" if you wish to be featured anonymously. If you don't want to be featured on the page, please write it in the message too.

## General info

There is no game completion list in Hollow Knight. There is no easy way to check in-game what specific things you forgot to do or missed for full 112% Game Completion, Hunter's Journal, Achievements and many other hidden things. This Analyzer I created should help checking all of it incredibly easier for you.

*Inspirations and thanks: love for Hollow Knight, discussions on the forum, [KayDeeTee](https://github.com/KayDeeTee/Hollow-Knight-SaveManager) and [bloodorca](https://bloodorca.github.io/hollow)'s Save Editors, programming learning, Elderbug, ManicJamie for [HKTranslator](https://github.com/ManicJamie/HKTranslator), [Klocus](https://klocus.pl/) for cookiealert.*

## Steam Guide

More info with features and visual previews can be found in the official [Steam Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193) for the Tool.

## How to use

There are two ways to use this web tool:

1. **Simple way**: just choose your **user\*.dat** save file and see the magic happen! See [save game locations paragraph](#hollow-knight-save-game-locations) below on where to find your Hollow Knight save files.  
The tool doesn't have the power to modify *any* of your files, but *always* do backups just in case.

2. **Advanced way**: for people who wish to share saves on forums in text format through [pastebin.com](https://pastebin.com/). Step by step tutorial:

   * Use bloodorca's amazing [Online Save File Editor](https://bloodorca.github.io/hollow) to decode your Hollow Knight **user\*.dat** save file into text.

   * Left-click inside the text box in the Editor after decoding the save and press **CTRL+A** (or Right-click -> Select All). Only the text inside the text box (decoded save file contents) should be selected.
  
   * Press **CTRL+C** (or Right-click -> Copy) to copy the whole contents inside the text box.

   * Go to the [Tool's webpage](https://reznormichael.github.io/hollow-knight-completion-check/) and press **CTRL+V** (or Right-click -> Paste) to paste the copied text inside the text box.

   * Click **"Analyze Text"**. If the copy-pasted data was correct, you will see your Completion %, Play Time, and a whole list of things you have done (✅) or not yet done (❌).

## Hollow Knight Save game locations

### Your Steam Cloud

If you have Steam Cloud enabled for Hollow Knight, you can download your save [directly from here.](https://store.steampowered.com/account/remotestorageapp/?appid=367520)  
You can use this if you want to check your save progress without access to your PC (on mobile/tablet for example) or if you don't want to search manually for the save files.

### Windows

`%USERPROFILE%\AppData\LocalLow\Team Cherry\Hollow Knight\`  
**Pro Tip:** Copy and paste this code into the folder path bar of the Windows File Explorer window and press Enter to go there instantly (Windows 10). You can also paste it inside the Run window (Windows key + R).  
*Example path: C:\Users\your-username\AppData\LocalLow\Team Cherry\Hollow Knight*

### Linux

`~/.config/unity3d/Team Cherry/Hollow Knight/`

### macOS

`~/Library/Application Support/unity.Team Cherry.Hollow Knight/`

### Filenames

**user\*.dat** — main save file. Where \* is a number between 1 and 4, and it is the appropriate save slot inside the game.  
**user\*.dat.bak1** — auto-backup save file.  
**user\*_\[game-version-numbers\].dat** — duplicate of the main save file. Serves as a backup after any game update.

## Use offline or online (web) - your choice

My tool uses client-side Javascript, so it runs on anything that has a modern browser. Even without internet access. You can use it locally on your PC, on mobile or on any operating system you desire (Windows, MacOS, Linux) without internet connection — everything is done on your device and your CPU. To do that, you can either download the source code [directly from GitHub](https://github.com/ReznoRMichael/hollow-knight-completion-check/archive/master.zip), go to `/docs` folder and launch `index.html`. Only contents inside the `/docs` folder are required for the program to run. Or go to the tool's webpage and choose *Page -> Save As...* like you would save a normal program.  
On Android running the tool locally requires manually typing the address `file:///storage/emulated/0` in your browser and from there pointing to the `index.html` file in the folder you saved the tool into. Then you can save it in your bookmarks for easy subsequent usage.

## Support and feedback

All feedback/problems/wrong data are appreciated. Feel free to write them in the [Steam Discussion](https://steamcommunity.com/app/367520/discussions/0/2915472677711090083/) thread for the Tool or under the [Steam Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193).

If you like the tool and wish it developed further with more functions and easier usage, consider supporting on [PayPal](https://www.paypal.me/ReznoRMichael). PayPal supporters with at least $1 are **immortalized on the Tool's Web page.**

![donate](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal&link=https://www.paypal.com/paypalme/ReznoRMichael)

## Version History

* v2.1.0 Upcoming:  

  — **General Changes:**  
  ✅ Added Cornifer's Notes to the Secrets tab.  

  — **Game Completion Essentials** additions:  
  ✅ Paid to See Something Nice.  
  ✅ Shopkeeper's Key Returned to Sly.  
  ✅ Godseeker Cocoon Unlocked.  

  — **World Interactions** additions:  
  ✅ Gossipping Bugs.  
  ✅ Confessor Jiji's Cave Unlocked.  
  ✅ Pleasure House Door Unlocked.  
  ✅ Spirits' Glade Door Unlocked.  
  ✅ City of Tears Gate Opened.  
  ✅ Mask Maker Unmasked.  

  — **Game Statistics** additions:  
  ✅ Total Geo from Sold Relics.  
  ✅ Pale Ore (current amount in inventory).  
  ✅ Simple Keys (current amount in inventory).  

  — **Bug Fixes:**  
  ✅ Corrected Hallownest Seal #2 location.  

* v2.0.0 2022-01-21:  

  — **General Changes:**  
  ✅ Added three new tabs: Collectibles, Geo Caches and Secrets.  
  ✅ More things counted towards True Completion number.  
  ✅ True Completion % box now shown right below Game Status and the color of the box changes depending on progress (red/blue/green).  

  — **(New Tab) Collectibles**:  
  ✅ Charm Notches (8).  
  ✅ Grubs (46).  
  Note: Due to a bug in recent versions of Hollow Knight, Grubs #33 and #34 (The Collector/Tower of Love) are not marked as released correctly in the save file. As a workaround for this bug, when Grub #32 is detected as released, #33 and #34 are automatically marked as released too in this app.  
  ✅ Whispering Roots (15).  
  ✅ Relics - Wanderer's Journal (14).  
  ✅ Relics - Hallownest Seal (17).  
  ✅ Relics - King's Idol (8).  
  ✅ Relics - Arcane Egg (4).  
  ✅ Rancid Eggs (21).  
  ✅ Items.  

  — **(New Tab) Geo Caches**:  
  ✅ Geo Chests (14).  
  ✅ Geo Rocks (205).  

  — **(New Tab) Secrets**:  
  ✅ World Interactions.  
  ✅ Secret Rooms.  

  — **Items** additions:  
  ✅ City Crest.  

  — **World Interactions** additions:  
  ✅ Inspected Stag Nest Egg.  

  — **Game Statistics** changes:  
  ✅ Removed Whispering Roots, Relics, Geo Rocks (duplicates).  
  ✅ Added Wanderer's Journals Sold.  
  ✅ Added Hallownest Seals Sold.  
  ✅ Added King's Idols Sold.  
  ✅ Added Arcane Eggs Sold.  

* v1.6.1 2022-01-14:  

  — **Bug Fixes:**  
  ✅ Fixed True Completion showing a red X instead of a green check when at 100.00% (thanks to Araraura).  

* v1.6.0 2022-01-12:  

  — **General Changes:**  
  ✅ Increased scrollbar width.  
  ✅ Switch between two Modes: File or Text. File Mode set as default.  
  ✅ More descriptive location names in the Secret Console Tab.  
  ✅ Several text description changes for improved readability.  

  — **Bug Fixes:**  
  ✅ Fixed Mr. Mushroom status bug where it was marked as green one step too early. (thanks to Perseus)  
  ✅ Fixed Unbreakable Charms not obtained after Banishment: are now recognized, not included in True Completion % and have their entry names faded out.  

  — **(New) Game Statistics** additions:  
  ✅ Grimm's Tent: Secret Room (missable).  
  ✅ Tower of Love: Secret Room.  
  ✅ Weaver's Den: Secret Room #1.  
  ✅ Weaver's Den: Secret Room #2.  

* v1.5.0 2021-08-08:  

  — **General Changes/Fixes:**  
  ✅ Rewrote and optimized large parts of the code. Should work a bit faster now, especially on mobile devices. Most people probably won't notice any change.  
  ✅ Drag and Drop save file should now work for the whole window (not just for the file input field).  
  ✅ Added True Completion to the program. A true perfectionist's dream/nightmare come true.  
  ✅ Added full Hunter's Journal to the program. Now you can see and check all journal entries, as well as partial note completion and number of kills left to uncover Hunter's notes for each creature.  
  ✅ Choose Save File button appearance change. Will now show file's name, date and time after file is loaded (also after drag & drop).  
  ✅ Divided the page to different switchable tabs for easier navigation.  
  ✅ Number of Health Masks, Soul Orbs and Charm Notches is now displayed as a number next to the graphics.  
  ✅ Hide the whole entry when Spoilers are disabled. Display all entries when Spoilers enabled. Hover over the name and/or description to uncover it one-by-one. (thanks to kanna for the idea and inspiration!)  
  ✅ When an entry is already done/completed, the whole entry is always visible (even when Spoilers are disabled).  
  ✅ When an entry is partially done, the name of the entry is always visible, but the entry description is hidden.  
  ✅ All sections now have brief text descriptions and/or explanations.  
  ✅ Automatically detect the save version's Content Pack and display the correct Max Percent % for each one: Base Game 100%, Grimm Troupe 106%, Lifeblood 107%, Current 112%. (thanks to Perseus for the suggestion!)  
  ✅ Fixed incorrect display of Soul orbs amount for early HK save file versions (like 1.0.0.6).  
  ✅ Fixed not cleaning text area and file input after page refresh (Firefox).  
  ✅ Added Secret data information at the bottom of the tool.  

  — **(New) Game Status** additions:  
  ✅ addition: True Completion. Shows a detailed extended game completion (up to 100%) by counting basically as much as possible in the game and for the current save and Analyzer version. Missable things are not counted, unless you already did them. Choices in the save file are taken into account and not counted when not available. True Completion will most likely expand after adding new things to the Analyzer. Note: this is still rather experimental and may not always work accurately. When you will find any bugs, please let me know.  

  — **(New) Hunter's Journal Section** additions/changes/fixes:  
  ✅ change + addition: now showing all 146 base entries needed for Keen/True Hunter achievements (with partial completion and number of kills left). The most commonly missed entries are shown at the top.  
  ✅ addition: Optional Journal Entries. All other Hunter's Journal entries that are not required for Keen/True Hunter achievements.  
  ✅ fix: Crystal Crawler was actually Glimback before, despite being named CrystalCrawler in the save files.  

  — **(New) Godmaster Section** additions:  
  ✅ additions: All Pantheons details. Unlocked, Completed, Bindings, Completed with No Damage, All Bindings.  
  ✅ additions: All Hall of Gods bosses. Unlocked, Attuned, Ascended, Radiant.  
  ✅ additions: Unique Icons for completed Bindings.  
  ✅ additions: Unique Icons for completed bosses in the Hall of Gods (Attuned, Ascended, Radiant).  

  — **Hints** changes:  
  ✅ change: Made the Hints section stand out more from the rest of the tool.  
  ✅ change: Re-phrased all clues.  
  ✅ change: Rearranged the sequence of the clues. More emphasis on gradually increasing difficulty (magic words: Watcher Knights).  

  — **Grimm Troupe Content Pack** changes:  
  ✅ change: Charm #40 Grimmchild Phase detection (No charm, 1-4), Carefree Melody detection and wiki links  
  ✅ change: Nightmare King/Banishment player save choice detection and wiki links  

  — **Game Completion Essentials** fixes/additions:  
  ✅ addition: God Tamer (needed for Trial of the Fool %)  
  ✅ addition: Vengefly King (needed for Trial of the Warrior %)  
  ✅ addition: All 11 Stag Stations listed one by one  
  ✅ fix: Pale Ore #2 should now be showing up correctly (thanks to EmrldPhoenix for the bug report!)  

  — **Achievements Essentials** changes/additions:  
  ✅ change: Moved Creatures Encountered and Hunter Notes Completed to Game Statistics (not all 164 entries are required for the achievements)  
  ✅ change: Moved all Journal entries to Hunter's Journal section  
  ✅ addition: Quirrel: Witness achievement  
  ✅ addition: Grey Mourner: Solace achievement  
  ✅ additions: Maps for all areas  

  — **Game Statistics** fixes/additions/changes:  
  ✅ fix: Hunter's Journal now detects and displays the correct amount of maximum entries on both Zote routes and Banishment route (158-164).  
  ✅ change: Moved Menderbug and Seal of Binding to Optional Journal Entries  
  ✅ change: Removed Charm Notches (they are already shown in Game Status section)  
  ✅ addition: World Sense Ability (completion rate viewable in inventory/save slot)  
  ✅ addition: Lifeblood Core Room Arcane Egg (the only missable relic in the game)  
  ✅ addition: White Palace: Secret Room #3 (Lore Tablet)  
  ✅ additions: 6 entries related to Millibelle the Banker: Account, Balance, Disappeared, Investigate Stand, Found & Talked, Reclaimed All Geo  
  ✅ additions: All Map Pins  
  ✅ addition: Collector's Map  
  ✅ addition: Tuk: Free Rancid Egg (while Defender's Crest equipped)  

  — **Godhome Statistics** changes/additions:  
  ✅ addition: Lifeblood Door Open  

* v1.4.1 2021-03-16:

  — **Game Completion Essentials** additions:  
  ✅ Grubfather Rewards Collected (shows how many rewards the player has collected, and how many remain waiting to collect)  
  ✅ Charms Owned (useful for Salubra Notches)  
  ✅ Mantis Village Floor Lever (required for 1% Mantis Lords and 1% Mark of Pride)  

  — **Game Statistics** changes/additions:  
  ✅ "White Palace Secret Room Discovered" becomes White Palace: Secret Room #1 (Pale King's Workshop) (thanks to kanna for double-checking)  
  ✅ White Palace: Secret Room #2 (White Lady's Room) (thanks to kanna for the idea)  
  ✅ White Palace: Path of Pain Entrance  

  — Removed red cross mark appearing near hints text

  — Changed the Lumafly Lantern hint, and some smaller hint texts additions  

  — Minor spoiler changes and additions for better precision  

  — v1.4.1 2021-03-18: Changed Grubfather Rewards text to Awarded instead of Collected  

* v1.3.0 2021-02-24:

  — **Game Statistics** Section now divided into Game Statistics and Godhome Statistics

  — **Godhome Statistics** additions:  
  ✅ Tuner Memory  
  ✅ Intruder Discovered  
  ✅ The Eternal Ordeal  

  — **Achievements Essentials** additions:  
  ✅ Journal: God Tamer  

  — Added info that offering Godseeker the Delicate Flower is possible after completing at least 2 Pantheons

  — Minor description changes/additions and order changes

* v1.2.0 2021-02-23:

  — Bosses and Warrior Dreams required for opening Pantheons 1-4 are now prefixed with P1, P2, P3 or P4. They are also sorted accordingly.
  
  — **Game Completion Essentials** additions:  
  ✅ P1 Massive Moss Charger  
  ✅ P1 Soul Warrior  
  ✅ P2 Crystal Guardian  
  ✅ P2 Oblobble  
  ✅ P2 Flukemarm  
  ✅ P4 Enraged Guardian  
  ✅ Brothers Oro & Mato  
  ✅ Paintmaster Sheo  
  ✅ Great Nailsage Sly  
  ✅ Pure Vessel  

  — **Game Statistics** additions:  
  ✅ Interactables: Not Activated, Activated and Discovered Total (experimental). See also Ctrl + Shift + I > Console for all Not Activated list.  

  — Polyfills for most browsers (to ensure webpage compatibility).

* v1.1.0 2021-02-17:

  — **PayPal supporters are immortalized on the Tool's Web page** with a Lvl indicating the amount of support for the Tool. You can get your name/nick immortalized too! Donate at least $1 for the Tool development 🙂 You can include the name or nick in the PayPal donation message (optional) or "Anonymous" if you wish to be featured anonymously. If you don't want to be featured on the page, please write it in the message too.

  — **Hollow Knight Wiki links** to every entry in the tool for quick and easy access/map locations etc. No need to search manually now.

  — **General Backwards Compatibility** with Hollow Knight version 1.0.0.6 save files (February 2017 release version) and all newer HK versions. Save Version info added to Game Status.

  — **Game Completion Essentials** additions:  
  ✅ Acid Drained in Waterways  
  ✅ Two White Fragments (Queen and King)  

  — **Game Statistics** additions:  
  ✅ Delicate Flowers given to NPCs (Elderbug, Godseeker, Oro, White Lady, Emilitia)  
  ✅ Rancid Eggs sold to Jinn — relevant to Steel Soul Mode  
  
  — File Reading now launches automatically when you open the same file subsequently. Useful for quick analyzing the same save file after modification without reloading the page.

  — The tool can now be used even when you disabled all cookies in your browser. You won't have the ability to remember your selected checkboxes in this case, but all else will work.

  — Added a small scroll up arrow for fast returning to top.

  — Performance optimizations. Should work ~2x faster. Difference may be noticeable rather more on mobile devices than on PCs.

* v1.0.3 2021-02-14:

  — Prototype Unrescued Grubs and Unbroken Geo Rocks lists now include number of items in the title. Additionally, number of Grubs is now shown correctly – error was due to the fact, that in 1.4.3.2 HK version the 3 Collector's Arena Grubs are treated as one by the game, instead of individually, like in 1.0.0.6. They have now one number (#32) but the rest is numbered normally from #35 until #46.

  — **Achievements Essentials** changes:  
  ✅ Altered "Optimal Zote". Instead this line now shows the current Zote save file state (Trapped Greenpath, Not Rescued, Dead, Trapped Deepnest, Colosseum, Defeated)  
  ✅ Altered "Optimal Nailsmith". Instead this line now shows the current Nailsmith save file state (Waiting for Upgrade, Waiting in Sheo's Hut, Spared, Slain)  
  ✅ "Grey Prince Zote" and "Grey Prince Zote defeats total" get faded out if Zote is dead.  
  ✅ "Grey Prince Zote" line gets a red cross if Zote was rescued in Greenpath and GPZ is not yet defeated.

* v1.0.2 2021-02-12:

  — Prototype Lists: Unrescued Grubs, Unbroken Geo Rocks (Beta). If you want to see them, press **Ctrl + Shift + I** and select Console tab.

  — **Achievements Essentials** additions:  
  ✅ Mr Mushroom #1–7 locations

  — **Game Statistics** additions:  
  ✅ Geo Rocks Unbroken/Broken/Discovered Total

* v1.0.1 2021-02-01:

  — Quick hotfix for windows save file input text on mobile and broken steel soul save detection

* 2021-01-31:

  — **Major New Release v1.0!** Finally out of Beta/Early Access.

  — I want to sincerely thank **one single person** (from my country - Poland) who donated a total of 70 PLN ($18.21 / €15.04) to my PayPal account since the first release of my tool in August 2020. This is currently the *only person* who donated *anything at all* since the tool's release, and I am very grateful for the support, especially in these dark times, which are hard for everyone (myself included). This update and 1.0 release is dedicated mainly to this person, as well as my **awesome brother and his family** for being hugely supportive. I wish to also give my thanks to all people who supported the tool in other ways: by beta-testing, giving comments, new ideas, saves, Steam Points rewards, Steam Guide likes, favourites, sharing this tool with others or giving emotional support. I hope you all will enjoy this version even more and find it much easier to use 😊

  — **Much easier to use:** Just choose a \*.dat or \*.bak save file to analyze. And that's it! You don't even have to press "Analyze", because *programming magic* does that for you.

  — Go to **your Steam Cloud Storage ☁ for Hollow Knight** instantly with a press of a button! It can't get any easier to get your save file than this. Steam Cloud can be also useful if you want to quickly check your in-game progress on mobile outside your PC. Saves in the Steam Cloud are updated after exiting the game.

  — **Optimized:** Now tool is compressed, works faster and is more web- and mobile-friendly than before. At least I hope 😉

  — **Visual completion percentages** in all sections for better readability (red = not started yet (0%), blue = partially completed, green = fully completed)

  — **Game Status** additions:  
  ✅ **Charm Notches** + visuals  
  ✅ **Shade Geo** + visuals. Will appear only if the Shade is holding at least 1 Geo. If you have at least 1 Geo alongside the Shade Geo, a total amount (Geo + Shade Geo) will be displayed as well.  

  — **Game Statistics** additions:  
  ✅ Shade Geo (Amount of Geo the Shade is currently holding)  
  ✅ Journal: Void Idol Attuned  
  ✅ Journal: Void Idol Ascended  
  ✅ Journal: Void Idol Radiant  
  ✅ White Palace Secret Room visited (Unidentified secret room, help us identify this room!)  

  — **Hints/Spoilers Checkboxes now don't reset** each time a save is analyzed (you don't have to click them again). Your choice is also remembered between different visits, system restarts or page reloads!

  —  **Easy auto-copy Windows HK Save files location to clipboard.** Just Left-click the text, then click Choose File/Browse..., and paste into top address bar to go to the HK Windows save file location instantly without searching!

  — Improved text area focus, graphics and readability

  — Increased brightness of the Steel Soul Health Masks when analyzing a Steel Soul save file

  — Error messages when chosen an invalid file, or when the text inside the text area is not a valid HK save file

  — Rearranged some entries and added + corrected some spoiler/location descriptions

* 2021-01-19:

  — Changed the site address to GitHub Pages using https. Now the site is published directly from the GitHub source. This should fix the problem for some people who were not able to visit the previous webpage, as well as the "this site is not safe" notifications in some browsers.

* 2020-12-27:

  — added Journal: Pale Lurker

* 2020-12-25:

  — fixed the Path of Pain check (thanks to Reaper4578, kanna, tintingaroo for greatly helping in this, and kiotosmith, Reaper4578 for bringing this to my attention)

  — added some new journal entries:

  **Achievements Essentials additions**  
  (rare missable enemies/entries for the Keen Hunter/True Hunter/Hunter's Mark achievements)  
  ✅ Journal: Maggot  
  ✅ Journal: Lightseed  
  ✅ Journal: Maskfly  
  ✅ Journal: Aluba  
  ✅ Journal: Duranda  
  ✅ Journal: Durandoo  
  ✅ Journal: Gulka  
  ✅ Journal: Sporg  
  ✅ Journal: Charged Lumafly  
  ✅ Journal: Crystal Crawler  
  ✅ Journal: Gorgeous Husk  
  ✅ Journal: Goam  
  ✅ Journal: Garpede  
  ✅ Journal: Void Tendrils  
  ✅ Journal: Pale Lurker  

  **Game Statistics additions**  
  ✅ Journal: Seal of Binding  
  ✅ Journal: Weathered Mask  

* 2020-09-28:

  — showing Health Masks, Soul and Geo

  — **Game Completion Essentials:** showing all things that don't count towards 112% Game Completion, but are necessary to achieve it, like number of Grubs, Essence, individual Simple Keys & Pale Ore, Keys, Tram Pass etc.

  — **Achievements Essentials:** all things that matter for achievements like Hunter's Journal, fifth Pantheon, Void Heart, Zote, Nailsmith and others

  — **Game Statistics:** everything else like Nail damage, notches, relics found and many others

  — **Visual additions:** health masks, soul orbs, geo, separators

  — small bug fixes and name changes

* 2020-09-23:

  — now showing current % completion of all sub-categories (Bosses, Charms, Mask Shards etc.) in addition to total Game Completion % after analyzing a save.

* 2020-09-13:

  — changed theme to a more Hollow k\[N\]ight atmosphere.

  — fixed switched Dash Slash and Great Slash check.

* 2020-09-06:

  — Introduced: **Optional Hints** - if this is your first playthrough and you feel completely lost, analyze your save, and I will give you a small hint where you can investigate next (based on your progress in the game). Inspired by Elderbug (and people on the forums asking where to go next).

  — Introduced: **Show/Hide Locations and Hints** - Now hidden by default if you don't like spoilers! Just click the checkboxes to instantly toggle their visibility.

* 2020-09-02:

  — Gruz Mother and Brooding Mawlek check should work now even for extremely rare cases

  — Showing all Completion Data by default on page load

* 2020-08-30:

  — Added all locations and costs of all individual items

  — Fixed Watcher Knights incorrect data check, should be okay now

  — Showing total percentage of all categories (not calculated)

  — Cosmetic improvements

* 2020-08-29:

  — All individual 16 Mask Shards and 9 Vessel Fragments as well as their locations are shown now as requested

  — Fixed Gruz Mother incorrect data check, should be okay now

  — Added save's Play Time

## Using

* JavaScript (compiled to ES 6 / ES 2015)
* [ESLint](https://eslint.org/)
* [AES-JS](https://github.com/ricmoo/aes-js)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [core-js](https://github.com/zloirock/core-js)
* [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)
* [Simple Icons](https://github.com/simple-icons/simple-icons)
* [Fontello](https://github.com/fontello/fontello)
* [Google Fonts](https://fonts.google.com/)
* HTML5/CSS/JSON

## Contact

Written and created by [ReznoRMichael](https://github.com/ReznoRMichael)
