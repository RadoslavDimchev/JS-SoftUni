function encodeAndDecodeMessages() {
  const endocePart = document.querySelector('main > div:first-child');
  const decodePart = document.querySelector('main > div:last-child');
  const encodeTextarea = endocePart.querySelector('textarea');
  const decodeTextarea = decodePart.querySelector('textarea');
  let decodedMessage = '';

  endocePart.querySelector('button').addEventListener('click', encode);
  decodePart.querySelector('button').addEventListener('click', () => {
    decodeTextarea.value = decodedMessage;
  });

  function encode() {
    decodedMessage = encodeTextarea.value;
    let encodedMessage = '';

    for (const char of encodeTextarea.value) {
      encodedMessage += String.fromCharCode(char.charCodeAt() + 1);
    }

    decodeTextarea.value = encodedMessage;
    encodeTextarea.value = '';
  }
}