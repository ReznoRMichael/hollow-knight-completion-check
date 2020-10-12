# Hollow Knight: Analyze Save Completion Online Tool

> Analyze your saves. See precisely what you missed and where. See Completion %, locations (also Shards/Fragments), costs, Game Statistics. I even designed spoiler-free hints based on your progress, if you are completely lost.

## General info

Hollow Knight doesn't have a game completion list. There is no way to easily check what specific things someone forgot to do for full 112% Game Completion. So I wrote a tool for that. It can also give an optional hint if stuck, based on the in-game progress.

Inspirations: discussions on the forum, [KayDeeTee](https://github.com/KayDeeTee/Hollow-Knight-SaveManager) and [bloodorca](https://bloodorca.github.io/hollow)'s Save Editors, programming learning, Elderbug.

If this is your first playthrough and you feel completely lost, I will give you a very slight optional hint which should point you in the right direction (no major spoilers). Hidden by default.

I will show you all individual Mask Shards and Vessel Fragments as well as locations and costs of every item on the list. Hidden by default to avoid spoilers. Tick "Spoiler Mode" to show them.

I will show you all things that don't count towards 112% Game Completion, but are necessary to achieve it. Also all the completely optional things that matter for achievements.

For all number and stats fans, I will show you Game Statistics. Everything you wish to know like Nail damage, notches, total relics found and many others.

## How to use

* Use bloodorca's amazing [Online Save File Editor](https://bloodorca.github.io/hollow) to decode your Hollow Knight **user\*.dat** save file into text.

* **CTRL+A** (Select All) inside the text box after decoding the save. **CTRL+C** (Copy) to copy the whole contents inside the text box. Be careful not to copy the whole webpage! Only the text inside the text box.

* **CTRL+V** (Paste) the text data inside the text box on the [Tool's webpage](http://reznortech.rf.gd/hollow-knight-completion/).

* Click **"Analyze Text"**. If the copy-pasted data was correct, you will see your Completion %, Play Time, and a whole list of things you have done (✅) or not yet done (❌).

## Hollow Knight Save game locations

#### Windows
`%USERPROFILE%\AppData\LocalLow\Team Cherry\Hollow Knight\`

#### Linux
`~/.config/unity3d/Team Cherry/Hollow Knight/`

#### macOS
`~/Library/Application Support/unity.Team Cherry.Hollow Knight/`

#### Filenames

**user\*.dat** — main save file. Where \* is a number between 1 and 4, and it is the appropriate save slot inside the game.
**user\*.dat.bakX** — backup save files. Where X is a number in ascending order meaning how many backups were made during the whole playthrough of that save. The higher the number, the more recent the backup. There are usually 3 save backups at one time, older backups are deleted.

## Support and feedback

All feedback/problems/wrong data are appreciated. Feel free to write them in the [Steam Discussion](https://steamcommunity.com/app/367520/discussions/0/2915472677711090083/) thread for the Tool or under the [Steam Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193).

If you like the tool and wish it developed further with more functions, consider supporting on [PayPal](https://www.paypal.me/ReznoRMichael).

## Version History

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

* JavaScript
* HTML5/CSS
* JSON
* Fontello
* Google Fonts

## Contact

Written and created by [ReznoRMichael](https://github.com/ReznoRMichael)
