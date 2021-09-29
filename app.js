var translateButton = document.querySelector("#button-translate");
var textArea = document.querySelector("#text-area");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "isfafoisdfnoisdn " +  textArea.value
};
translateButton.addEventListener("click", clickHandler  ); 