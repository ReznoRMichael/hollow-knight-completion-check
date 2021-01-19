function ShowFile(input) {
    let inputFile = input.files[0];

    alert(`File name: ${inputFile.name}`);
    alert(`Last modified: ${inputFile.lastModified}`)
}