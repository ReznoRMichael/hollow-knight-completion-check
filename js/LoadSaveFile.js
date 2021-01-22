const CSHARP_HEADER = [0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0];

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

    // base64 Decoding (ArrayBuffer)
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
        // Uint8Array(ArrayBuffer)
        inputArrayBuffer = new Uint8Array(inputArrayBuffer);

        // ArrayBuffer.slice()
        // The slice() method copies up to, but not including, the byte indicated by the end parameter.
        inputArrayBuffer.slice();

        // remove C# header (ArrayBuffer)
        inputArrayBuffer = RemoveCSharpHeader(inputArrayBuffer);

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