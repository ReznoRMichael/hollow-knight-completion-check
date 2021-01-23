const CSHARP_HEADER = [0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]; // 22 bytes

const BASE64_ARRAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").map(c => c.charCodeAt(0));
const BASE64_DECODE_TABLE = new Map(BASE64_ARRAY.map((ord, i) => [ord, i]));

const AES_KEY = new TextEncoder().encode('UKu52ePUBwetZ9wNX88o54dnfKRu0T1l'); // encodes to Uint8Array
const ECB_STREAM_CIPHER = new aesjs.ModeOfOperation.ecb(AES_KEY); // create a new AES stream cipher object

// console.log(`AES_KEY: ${AES_KEY}`);
// console.log(`ECB_STREAM_CIPHER: ${ECB_STREAM_CIPHER}`);

function ShowFile(input) {
    let inputFileObject = input.files[0];

    alert(`File name: ${inputFileObject.name}`);
    alert(`Last modified: ${inputFileObject.lastModified}`);
}

// main input tag file function
function LoadSaveFile(input) {
    // Prepares a File object from the first file of the input files for reading as an Array Buffer
    let inputFileObject = input.files[0];

    // 1. read file
    // The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.
    // It is an array of bytes, often referred to in other languages as a "byte array".

    // new FileReader()
    let inputReader = new FileReader();
    // readAsArrayBuffer(file)
    inputReader.readAsArrayBuffer(inputFileObject);
    // addEventListener("load", function) - to decode the file when loaded
    inputReader.addEventListener("load", ProcessFileObject);
}

// reads the File object as an Array Buffer and does all other operations (decoding, decryption, conversion to string, pasting to text area)
function ProcessFileObject() {
    let inputArrayBuffer = this.result;
    let decodedString;

    // 2. Decode file

    try {
        // Uint8Array(ArrayBuffer) uint8_t equivalent in C
        inputArrayBuffer = new Uint8Array(inputArrayBuffer);

        // ArrayBuffer.slice()
        // The slice() method copies up to, but not including, the byte indicated by the end parameter.
        inputArrayBuffer.slice();

        // remove C# header (ArrayBuffer)
        inputArrayBuffer = RemoveCSharpHeader(inputArrayBuffer);

        // base64 Decoding (ArrayBuffer)
        inputArrayBuffer = Base64Decode(inputArrayBuffer);

        // AES decryption (ECB) removes pkcs7 padding (ArrayBuffer)
        inputArrayBuffer = AESDecryption(inputArrayBuffer);

        // Convert ArrayBuffer to string/text TextDecoder().decode(ArrayBuffer)
        decodedString = new TextDecoder().decode(inputArrayBuffer);

    // 4. Paste decoded string file to text area

        document.getElementById("save-area").value = "";
        document.getElementById("save-area").value = decodedString;

        // after pasting the decoded string, launch the main analyzing function immediately
        HKReadTextArea();

        // alert(`Decoded String: ${decodedString}`);
        // alert(`Array Buffer: ${inputArrayBuffer}`);
    } catch (error) {
        alert(`The file cannot be decoded. Error: ${error}`);
    }
}

// removes C# header, LengthPrefixedString header and byte 11 at the end of the Uint8 Array Buffer
function RemoveCSharpHeader(buffer) {
    // Remove the fixed C# header and byte 11 at the end. 
    buffer = buffer.subarray(CSHARP_HEADER.length, buffer.length - 1);

    // Remove LengthPrefixedString header
    let lengthCount = 0;
    for (let i = 0; i < 5; i++) {
        lengthCount++;
        if ((buffer[i] & 0x80) == 0) {
            break;
        }
    }

    let fixedArrayBuffer = buffer.subarray(lengthCount);

    return fixedArrayBuffer;
}

// Thanks to KayDeeTee https://github.com/KayDeeTee/Hollow-Knight-SaveManager and bloodorca https://github.com/bloodorca/hollow (base64.js)
function Base64Decode(buffer) {
    buffer = new Uint8Array(buffer).slice();
    buffer = buffer.map(v => BASE64_DECODE_TABLE.get(v))
    {
        let p = buffer.indexOf(64);
        buffer = buffer.subarray(0, p != -1 ? p : buffer.length);
    }
    let output = new Uint8Array(3 * buffer.length / 4);
    let continuous = Math.floor(buffer.length / 4) * 4;
    for (let i = 0; i < continuous; i += 4) {
        let k = 3 * i / 4;
        output[k] = buffer[i] << 2 | buffer[i + 1] >> 4;
        output[k + 1] = (buffer[i + 1] & 0x0F) << 4 | buffer[i + 2] >> 2;
        output[k + 2] = (buffer[i + 2] & 0x03) << 6 | buffer[i + 3];
    }
    if (buffer[continuous] != undefined) {
        let k = 3 * continuous / 4;
        output[k] = buffer[continuous] << 2 | buffer[continuous + 1] >> 4;
        if (buffer[continuous + 2] != undefined) {
            output[k + 1] = (buffer[continuous + 1] & 0x0F) << 4 | buffer[continuous + 2] >> 2;
        }
    }
    return output;
}

// Thanks to KayDeeTee https://github.com/KayDeeTee/Hollow-Knight-SaveManager and bloodorca https://github.com/bloodorca/hollow (functions.js)
// Decrypt the Uint8Array Buffer using aesjs and a predefined AES key + remove pkcs7 padding
function AESDecryption(buffer) {
    let output = ECB_STREAM_CIPHER.decrypt(buffer);
    return output.subarray(0, -output[output.length - 1]);
}