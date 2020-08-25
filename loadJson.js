var jsonObj = "";

/**
 * Reads the .json file and parses it to a JS object (jsonObj).
 * @param callback Asynchronous function.
 */
function loadJSON(callback) {
    jsonObj = "";
    // new Http request object (asynchronous), both the web page and the XML file it tries to load, must be located on the same server.
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");

    let fileName = ["reznor88banish.json", "reznor112grimm.json"];

    // Specifies the request
    /* method: the request type GET or POST
    url: the file location
    async: true (asynchronous) or false (synchronous)
    user: optional user name
    psw: optional password */
    xobj.open('GET', fileName[0], true); // Path to the file

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

loadJSON(
    function JSONparse(response) {
        // Parse JSON string into object
        jsonObj = JSON.parse(response);
        // console.log(jsonObj);
    }
);

function HKReadTextArea() {
    jsonObj = "";
    
    cleanHTML(DIV_ID);

    let textAreaId = "save-area";
    let contents = document.getElementById(textAreaId).value;

    if(contents.length > 0) {
        jsonObj = JSON.parse(contents);
        HKCheckCompletion(jsonObj);
        // console.log(jsonObj);
    }
}