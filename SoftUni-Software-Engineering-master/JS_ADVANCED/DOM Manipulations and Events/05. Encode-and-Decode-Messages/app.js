function encodeAndDecodeMessages() {
  let sendTextBox = document.querySelector(
    "#main > div:nth-child(1) > textarea"
  );
  let receiveTextBox = document.querySelector(
    "#main > div:nth-child(2) > textarea"
  );

  let encodeSendButton = document.querySelector(
    "#main > div:nth-child(1) > button"
  );
  encodeSendButton.addEventListener("click", encodeMessage);

  let decodeReceiveButton = document.querySelector(
    "#main > div:nth-child(2) > button"
  );
  decodeReceiveButton.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let inputText = sendTextBox.value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
      outputText += String.fromCharCode(inputText[i].charCodeAt(0) + 1);
    }
    receiveTextBox.value = outputText;
    sendTextBox.value = "";
  }

  function decodeMessage() {
    let inputText = receiveTextBox.value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
      outputText += String.fromCharCode(inputText[i].charCodeAt(0) - 1);
    }
    receiveTextBox.value = outputText;
  }
}
