function extractFile(filePath) {
    let fileNameStartIndex = filePath.lastIndexOf('\\') + 1;
    let fileExtensionStartIndex = filePath.lastIndexOf('.') + 1;
    let fileNameEndIndex = fileExtensionStartIndex - 1;

    let fileName = filePath.substring(fileNameStartIndex, fileNameEndIndex);
    let fileExtension = filePath.substring(fileExtensionStartIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

// second solution

/* function extractFile(input) {
    let tokens = input.split('\\');

    let file = tokens.pop().split('.');

    let extension = file.pop();
    let name = file.join('.');

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
} */

extractFile('C:\\Internal\\training-internal\\Template.back.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');