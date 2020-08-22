function HKCheckCompletion(jsonObject) {
    console.log("Script Run");

    let HKPlayerData = jsonObject.playerData;
    let completedCheck = "❌ ";
    let symbolTrue = "✅ ";
    let divIdIntro = "hk-intro";
    let divIdBoss = "hk-bosses";

    for (i in HKPlayerData) {

        if (i === "completionPercentage") {
            if (HKPlayerData.completionPercentage >= 112) completedCheck = symbolTrue;
            fillHTML(divIdIntro, completedCheck, "Hollow Knight Completion: ", HKPlayerData.completionPercentage, " %");
        }

        if (i === "mawlekDefeated") {
            if (HKPlayerData.mawlekDefeated === true) completedCheck = symbolTrue;
            fillHTML(divIdBoss, completedCheck, "Brooding Mawlek: ", HKPlayerData.mawlekDefeated);
        }

        if (i === "giantBuzzerDefeated") {
            if (HKPlayerData.giantBuzzerDefeated === true) completedCheck = symbolTrue;
            fillHTML(divIdBoss, completedCheck, "Gruz Mother: ", HKPlayerData.giantBuzzerDefeated);
        }
    }
}

function fillHTML(divId = "", completedCheck = "❌ ", textPrefix = "Completion Element: ", textData = "Data unknown", textSuffix = "") {
    let divStart = [
        "<div>"
    ].join("\n");

    let divEnd = [
        "</div>"
    ].join("\n");

    document.getElementById(divId).innerHTML += divStart + completedCheck + textPrefix + textData + textSuffix + divEnd;
}