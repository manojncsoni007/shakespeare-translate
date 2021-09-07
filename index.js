let inputText = document.querySelector('#txt-input');
let outputBox = document.querySelector('#txt-output');
let translateButton = document.querySelector('#translate');

let url = 'https://api.funtranslations.com/translate/shakespeare.json';

function eventHandler() {
    let text = inputText.value;
    console.log('clicked it');
    console.log(text);

}

translateButton.addEventListener('click', eventHandler);