/* 
    Parts of the code thanks to bloodorca https://github.com/bloodorca/hollow (base64.js, functions.js) with slight modifications.
    The steps used there for decryption were taken from KayDeeTee https://github.com/KayDeeTee/Hollow-Knight-SaveManager
    Without these two people the existence of this tool wouldn't be possible :)
*/

// ---------------- Constants ----------------- //

// AES JS for file decryption
const aesjs = require("./aes-js.js");
// For reading the text area after save decoding
import {
  HKCheckCompletion,
  benchmarkTimes,
  Benchmark
} from "./HKCheckCompletion.js";

const CSHARP_HEADER = [0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]; // 22 bytes

const BASE64_ARRAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").map(c => c.charCodeAt(0));
const BASE64_DECODE_TABLE = new Map(BASE64_ARRAY.map((ord, i) => [ord, i]));

const AES_KEY = new TextEncoder().encode('UKu52ePUBwetZ9wNX88o54dnfKRu0T1l'); // encodes a string to Uint8Array (prepare for AES JS)
const ECB_STREAM_CIPHER = new aesjs.ModeOfOperation.ecb(AES_KEY); // create a new AES stream cipher object using the encoded key

// ---------------- Variables ----------------- //

/* let benchLSFBegin, benchLSFEnd, benchTotal; */

// ---------------- Functions ----------------- //

/**
 * Main input tag file function. Selects the first file, reads it as an Array Buffer, starts the processing of the file when loaded.
 * Starts benchmarking.
 * @param {FileList} input FileList object containing a list of File objects. The FileList behaves like an array, so you can check its length property to get the number of selected files.
 */
// eslint-disable-next-line no-unused-vars
function LoadSaveFile(input, time) {

  const inputFileList = input.files;
  // console.info("Input length: " + input.files.length)
  // Cease further processing if user canceled the file input dialog
  if (inputFileList.length < 1) return false;

  // start benchmark
  benchmarkTimes.LoadSaveFile.timeStart = time;
  benchmarkTimes.Total.timeStart = time;

  // Prepares a File object from the first file of the input files for reading as an Array Buffer
  let inputFileObject = inputFileList[0];

  // Cleans the file list to avoid problems after subsequent use
  // document.getElementById("save-area-file").value = "";

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

/**
 * Reads the File object as an Array Buffer and does all other operations (decoding, decryption, conversion to string, pasting to text area).
 * Launches the HKReadTextArea() function automatically after pasting the string to text area
 */
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

    // remove C# header and LengthPrefixedString header (ArrayBuffer)
    inputArrayBuffer = RemoveHeaders(inputArrayBuffer);

    // base64 Decoding (ArrayBuffer)
    inputArrayBuffer = Base64Decode(inputArrayBuffer);

    // AES decryption (ECB) removes pkcs7 padding (ArrayBuffer)
    inputArrayBuffer = AESDecryption(inputArrayBuffer);

    // Convert ArrayBuffer to string/text TextDecoder().decode(ArrayBuffer)
    decodedString = new TextDecoder().decode(inputArrayBuffer);

    // finish and show benchmark
    /* benchLSFEnd = new Date(); */
    benchmarkTimes.LoadSaveFile.timeEnd = new Date();
    /* console.info("LoadSaveFile() time (ms) =", benchLSFEnd - benchLSFBegin); */

    // 4. Analyze the decoded string immediately
    try {
      HKCheckCompletion(JSON.parse(decodedString));
    } catch (error) {
      alert(`This seems like not a valid Hollow Knight save. ${error}`);
      console.info(`This seems like not a valid Hollow Knight save. ${error}`);
    }

    // 5. Paste decoded string file to text area
    (async () => {
      document.getElementById("save-area").value = "";
      document.getElementById("save-area").value = await decodedString;
    })();

    // finish total and show benchmark
    benchmarkTimes.Total.timeEnd = new Date();

    Benchmark(benchmarkTimes);
    /* console.info("Total time (ms) =", benchTotal - benchLSFBegin); */

    // alert(`Decoded String: ${decodedString}`);
    // alert(`Array Buffer: ${inputArrayBuffer}`);
  } catch (error) {
    alert(`The file cannot be decoded. ${error}`);
    console.info(`The file cannot be decoded. ${error}`);
  }
}

/**
 * Removes C# header, LengthPrefixedString header and byte 11 at the end of the Uint8 Array Buffer
 * @param {Uint8Array} buffer Uint8Array buffer for removing the header from
 * @param {Uint8Array} csHeader Uint8Array for the C# header length calculation
 * @returns {Uint8Array}
 */
function RemoveHeaders(buffer, csHeader = CSHARP_HEADER) {
  // Remove the fixed C# header and byte 11 at the end. 
  buffer = buffer.subarray(csHeader.length, buffer.length - 1);

  // Remove LengthPrefixedString header
  let lengthCount = 0;
  for (let i = 0; i < 5; i++) {
    lengthCount++;
    if ((buffer[i] & 0x80) == 0) {
      break;
    }
  }

  return buffer.subarray(lengthCount);
}

/**
 * Decodes an Array Buffer using a Base64 decode table
 * @param {Uint8Array} buffer Uint8Array Buffer to decode
 * @returns {Uint8Array}
 */
function Base64Decode(buffer) {
  buffer = new Uint8Array(buffer).slice();
  buffer = buffer.map(v => BASE64_DECODE_TABLE.get(v));

  // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  let p = buffer.indexOf(64);
  let end;

  if (p != -1) {
    end = p;
  } else {
    end = buffer.length;
  }

  buffer = buffer.subarray(0, end);

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

/**
 * Decrypt an Uint8Array Buffer using aesjs (ECB) and a predefined AES key + remove pkcs7 padding
 * @param {Uint8Array} buffer Uint8Array buffer to decrypt
 * @returns {Uint8Array}
 */
function AESDecryption(buffer, cipherObject = ECB_STREAM_CIPHER) {
  let output = cipherObject.decrypt(buffer);
  return output.subarray(0, -output[output.length - 1]);
}

// Assign actions (functions) to launch when a specific element is used
document.getElementById("save-area-file").addEventListener("change", (event) => {
  LoadSaveFile(event.target, new Date());
});
document.getElementById("save-area-file").addEventListener("click", (mouseEvent) => {
  mouseEvent.target.value = "";
});

export {
  LoadSaveFile
};