const CSHARP_HEADER = [0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]; // 22 bytes

const BASE64_ARRAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").map(c => c.charCodeAt(0));
const BASE64_DECODE_TABLE = new Map(BASE64_ARRAY.map((ord, i) => [ord, i]));

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
    inputReader.addEventListener("load", FileObjectToArrayBuffer);

    // 2. Decode file

    // AES decryption (ECB) removes pkcs7 padding (ArrayBuffer)
    // Convert ArrayBuffer to string/text TextDecoder().decode(ArrayBuffer)

    // 3. Convert file to JSON string (optional?)
    // JSON.stringify(JSON.parse(decrypted), undefined, 2)

    // 4. Paste decoded string file to text area
}

// reads the File object as an Array Buffer
function FileObjectToArrayBuffer() {
    let inputArrayBuffer = this.result;

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

        alert(`File: ${inputArrayBuffer}`);
    } catch (error) {
        alert(`The file cannot be read. Error: ${error}`);
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

// From bloodorca https://github.com/bloodorca/hollow based on KayDeeTee https://github.com/KayDeeTee/Hollow-Knight-SaveManager
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