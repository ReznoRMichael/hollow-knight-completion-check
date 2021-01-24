// save file names list in the save/ folder

var fileName = [
    "reznor0", // 0
    "reznor1beforegruz", // 1
    "reznor2aftergruz", // 2
    "reznor5hornet", // 3
    "reznor29ss", // 4
    "ext48", // 5
    "reznor88banish", // 6
    "reznor99whitefragment", // 7
    "reznor100", // 8
    "reznor103ss", // 9
    "reznor107", // 10
    "reznor112grimm", // 11
    "PoP/kanna", // 12
    "PoP/Reaper4578", // 13
    "PoP/tintingaroo", // 14
];

/**
 * Reads the .json file and parses it to a JS object (jsonObj).
 * @param {string} filename Path and .json file name to be loaded
 * @param callback Function to be called when the request completes
 */
function LoadJSON(filename) {
    // new Http request object (asynchronous), both the web page and the XML file it tries to load, must be located on the same server.
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");

    // Specifies the request
    /* method: the request type GET or POST
    url: the file location
    async: true (asynchronous) or false (synchronous)
    user: optional user name
    psw: optional password */
    xobj.open('GET', filename, true); // Path to the file

    // Sends the request to the server - Used for GET requests
    xobj.send(null);

    // Defines a function to be called when the readyState property changes
    /* xobj.onreadystatechange = function GetResponseText() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            // Returns the response data as a string
            return callback(xobj.responseText);
        } else return false;
    }; */
    // Sends the request to the server - Used for GET requests
    // xobj.send(null);

    xobj.onload = function JSONparse() {
        // Parse JSON string into object
        const jsonObject = JSON.parse(xobj.responseText);
        document.getElementById("save-area").value = JSON.stringify(jsonObject);
        return jsonObject;
        // console.log(jsonObj);
    }
}

/* function JSONparse(response) {
    // Parse JSON string into object
    let jsonObject = JSON.parse(response);
    document.getElementById("save-area").value = response;
    return jsonObject;
    // console.log(jsonObj);
} */

// jsonObj = LoadJSON("../save/" + fileName[5], JSONparse(response));
LoadJSON("../save/" + fileName[5] + ".json");