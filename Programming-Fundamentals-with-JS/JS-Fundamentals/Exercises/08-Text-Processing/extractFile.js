function extractFile(input = '') {
  const tokens = input
    .split('\\')
    .pop()
    .split('.');
  const extension = tokens.pop();
  const fileName = tokens.join('.');

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}


// second solution with RegExp

/* function extractFile(input = '') {
  const pattern = /([\w\.\-]+)\.([\w]+)/g;
  const match = pattern.exec(input);
  const fileName = match[1];
  const extension = match[2];

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
} */

extractFile('C:\\Internal\\training-internal\\Template.back.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');