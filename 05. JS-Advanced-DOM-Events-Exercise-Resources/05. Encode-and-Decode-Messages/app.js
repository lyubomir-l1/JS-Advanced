function encodeAndDecodeMessages() {
 const textAreas = document.querySelectorAll("textarea");
 const buttons = document.querySelectorAll("button");
 buttons[0].addEventListener("click", encode);
 buttons[1].addEventListener("click", decode);

 function encode(){
    const input = textAreas[0].value;
    let encodeMsg = "";
    for(let i = 0; i < input.length; i++){
        const element = input[i];
        encodeMsg += String.fromCharCode(element.charCodeAt(0) + 1);
    }
    textAreas[1].value = encodeMsg;
    textAreas[0].value = "";
 }
  function decode(){
    const input = textAreas[1].value;
    let decodeMsg = "";
    for(let i = 0; i < input.length; i++){
        const element = input[i];
        decodeMsg += String.fromCharCode(element.charCodeAt(0) - 1);
    }
    textAreas[1].value = decodeMsg;
   
  }
}