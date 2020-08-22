var DATA_UNKNOWN = "Data unknown";
var CURRENT_DATA = DATA_UNKNOWN;
var SYMBOL_FALSE = "❌ ";
var SYMBOL_TRUE = "✅ ";
var COMPLETED_CHECK = SYMBOL_FALSE;

function HKCheckCompletion(jsonObject) {
    console.log("Script Run");

    let HKPlayerData = jsonObject.playerData;
    let divIdIntro = "hk-intro";
    let divIdBoss = "hk-bosses";

    for (i in HKPlayerData) {
        COMPLETED_CHECK = SYMBOL_FALSE;
        CURRENT_DATA = DATA_UNKNOWN;

        // ---------------- Game Completion Status ----------------- //

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) currentDataTrue();
            else currentDataFalse(HKPlayerData.completionPercentage);
            fillHTML(divIdIntro, COMPLETED_CHECK, "Hollow Knight Completion: ", CURRENT_DATA, " %");
        }

        // ---------------- Bosses (Base Game) --------------------- //

        if (i === "mawlekDefeated") {
            if (HKPlayerData.mawlekDefeated === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divIdBoss, COMPLETED_CHECK, "Brooding Mawlek: ", CURRENT_DATA);
        }

        if (i === "giantBuzzerDefeated") {
            if (HKPlayerData.giantBuzzerDefeated === true) currentDataTrue();
            else currentDataFalse();
            fillHTML(divIdBoss, COMPLETED_CHECK, "Gruz Mother: ", CURRENT_DATA);
        }
    }
}

function fillHTML(divId = "", completedCheck = COMPLETED_CHECK, textPrefix = "Unknown Completion Element: ", textData = CURRENT_DATA, textSuffix = "") {
    let divStart = [
        "<div>"
    ].join("\n");

    let divEnd = [
        "</div>"
    ].join("\n");

    document.getElementById(divId).innerHTML += divStart + completedCheck + textPrefix + textData + textSuffix + divEnd;
}

function currentDataTrue(textData = "Defeated") {
    COMPLETED_CHECK = SYMBOL_TRUE;
    CURRENT_DATA = textData;
}

function currentDataFalse(textData = "Not Defeated") {
    COMPLETED_CHECK = SYMBOL_FALSE;
    CURRENT_DATA = textData;
}