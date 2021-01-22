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
    // readAsArrayBuffer(file)
    // addEventListener("load", function) - to decode the file when loaded

    let inputReader = new FileReader();
    inputReader.readAsArrayBuffer(inputFileObject);

    inputReader.addEventListener("load", () => {
        let inputArrayBuffer = inputReader.result;

        try {
            alert(`File: ${inputArrayBuffer}`);
        } 
        catch (error) {
            alert(`The file cannot be decoded. Error: ${error}`);
        }
    });

    // 2. Decode file
    // The slice() method copies up to, but not including, the byte indicated by the end parameter.

    // Uint8Array(ArrayBuffer)
    // ArrayBuffer.slice()
    // remove C# header (ArrayBuffer)
    // base64 Decoding (ArrayBuffer)
    // AES decryption (ECB) removes pkcs7 padding (ArrayBuffer)
    // Convert ArrayBuffer to string/text TextDecoder().decode(ArrayBuffer)

    // 3. Convert file to JSON string (optional?)
    // JSON.stringify(JSON.parse(decrypted), undefined, 2)

    // 4. Paste decoded string file to text area
}

