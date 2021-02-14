<p align="center">
  <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Steam&message=Guide&color=grey&style=for-the-badge&logo=Steam"></a>
  <a href="https://www.paypal.me/ReznoRMichael" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal"></a><br>
  <a href="https://twitter.com/intent/follow?screen_name=ReznoRMichael" target="_blank">
  <img src="https://img.shields.io/twitter/follow/ReznoRMichael?style=social&logo=twitter"></a>
  <a href="https://www.youtube.com/c/MichaelReznoR" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Youtube&message=reznor.technology&labelColor=lightgrey&color=FF0000&style=flat&logo=youtube"></a>
  <a href="https://www.instagram.com/reznormichael/" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Instagram&message=reznormichael&labelColor=lightgrey&color=E4405F&style=flat&logo=Instagram"></a>
</p>

# Hollow Knight: Analyze Save Completion Web Tool

> Now you can see what you missed easily! Game Completion %, every Shard/Fragment/Ore, costs, locations, Game Statistics, Hunter's Journal, Achievements, Game Completion essentials. And if you are completely lost, I designed a spoiler-free Hint system based on your individual game progress.

## Support Tool (PayPal)

![donate](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal&link=https://www.paypal.com/paypalme/ReznoRMichael)

Every single penny counts: [Donate any amount](https://www.paypal.me/ReznoRMichael). By donating you directly contribute to the purpose of improving the tool for yourself and everyone else.

## General info

Hollow Knight doesn't have a game completion list in-game. There is no way to easily check what specific things you forgot to do or missed for full 112% Game Completion, Hunter's Journal and Achievements. Until now! I wrote a tool for that for you.

*Inspirations: love for Hollow Knight, discussions on the forum, [KayDeeTee](https://github.com/KayDeeTee/Hollow-Knight-SaveManager) and [bloodorca](https://bloodorca.github.io/hollow)'s Save Editors, programming learning, Elderbug.*

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
**Pro Tip:** Copy and paste this code into the folder path bar of the Windows File Explorer window and press Enter to go there instantly (Windows 10).  
*Example path: C:\Users\your-username\AppData\LocalLow\Team Cherry\Hollow Knight*

### Linux

`~/.config/unity3d/Team Cherry/Hollow Knight/`

### macOS

`~/Library/Application Support/unity.Team Cherry.Hollow Knight/`

### Filenames

**user\*.dat** — main save file. Where \* is a number between 1 and 4, and it is the appropriate save slot inside the game.  
**user\*.dat.bakX** — backup save files. Where X is a number in ascending order meaning how many backups were made during the whole playthrough of that save. The higher the number, the more recent the backup. There are usually 3 save backups at one time, older backups are deleted.

## Use offline or online (web) - your choice

My tool uses client-side Javascript, so it runs on anything that has a modern browser. Even without internet access. You can use it locally on your PC, on mobile or on any operating system you desire (Windows, MacOS, Linux) without internet connection — everything is done on your device and your CPU. To do that, you can either download the source code [directly from GitHub](https://github.com/ReznoRMichael/hollow-knight-completion-check/archive/master.zip), go to `/docs` folder and launch `index.html`, or go to the tool's webpage and choose *Page -> Save As...* like you would save a normal program. Only contents inside the `/docs` folder are required for the program to run.  
On Android running the tool locally requires manually typing the address `file:///storage/emulated/0` in your browser and from there pointing to the `index.html` file in the folder you saved the tool into. Then you can save it in your bookmarks for easy subsequent usage.

## Support and feedback

All feedback/problems/wrong data are appreciated. Feel free to write them in the [Steam Discussion](https://steamcommunity.com/app/367520/discussions/0/2915472677711090083/) thread for the Tool or under the [Steam Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193).

If you like the tool and wish it developed further with more functions and easier usage, consider supporting on [PayPal](https://www.paypal.me/ReznoRMichael).

![donate](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue&labelColor=lightgrey&style=for-the-badge&logo=paypal&link=https://www.paypal.com/paypalme/ReznoRMichael)

## Version History

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

  — I want to sincerely thank **one single person** (from my country - Poland) who donated a total of 60 PLN ($15.38 / €12.73) to my PayPal account since the first release of my tool in August 2020. This is currently the *only person* who donated *anything at all* since the tool's release, and I am very grateful for the support, especially in these dark times, which are hard for everyone (myself included). This update and 1.0 release is dedicated mainly to this person, as well as my **awesome brother and his family** for being hugely supportive. I wish to also give my thanks to all people who supported the tool in other ways: by beta-testing, giving comments, new ideas, saves, Steam Points rewards, Steam Guide likes, favourites, sharing this tool with others or giving emotional support. I hope you all will enjoy this version even more and find it much easier to use 😊

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
* [AES-JS](https://github.com/ricmoo/aes-js)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* HTML5/CSS
* JSON
* Fontello
* Google Fonts

## Contact

Written and created by [ReznoRMichael](https://github.com/ReznoRMichael)
