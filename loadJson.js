var jsonObj = "";

// save file names list in the save/ folder
var fileName = [
    "reznor0.json",
    "reznor1beforegruz.json",
    "reznor2aftergruz.json",
    "reznor5hornet.json",
    "reznor29ss.json",
    "ext48.json",
    "reznor88banish.json",
    "reznor100.json",
    "reznor103ss.json",
    "reznor112grimm.json",
];

/**
 * Reads the .json file and parses it to a JS object (jsonObj).
 * @param callback Asynchronous function.
 */
function loadJSON(filename, callback) {
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

    // Defines a function to be called when the readyState property changes
    xobj.onreadystatechange = function GetResponseText() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            // Returns the response data as a string
            callback(xobj.responseText);
        }
    };
    // Sends the request to the server - Used for GET requests
    xobj.send(null);
}

loadJSON("save/" + fileName[5],
    function JSONparse(response) {
        // Parse JSON string into object
        jsonObj = JSON.parse(response);
        document.getElementById("save-area").value = response;
        // console.log(jsonObj);
    }
);