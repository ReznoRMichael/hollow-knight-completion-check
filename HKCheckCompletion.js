function HKCheckCompletion(jsonObject) {
    console.log("Script Run");

    let HKPlayerData = jsonObject.playerData;
    let symbolTrue = "✅";
    let symbolFalse = "❌";

    let divStart = [
        "<div>"
    ].join("\n");

    let divEnd = [
        "</div>"
    ].join("\n");

    for(i in HKPlayerData) {
        let completedCheck = symbolFalse;

        if(i === "completionPercentage") {
            if(HKPlayerData.completionPercentage >= 112) completedCheck = symbolTrue;
            document.getElementById("hk-intro").innerHTML += divStart + completedCheck + " Hollow Knight Completion: " + HKPlayerData.completionPercentage + " %" + divEnd;
        }

        if(i === "mawlekDefeated") {
            if(HKPlayerData.mawlekDefeated === true) completedCheck = symbolTrue;
            document.getElementById("hk-bosses").innerHTML += divStart + completedCheck + " Brooding Mawlek: " + HKPlayerData.mawlekDefeated + divEnd;
        }
    }
}