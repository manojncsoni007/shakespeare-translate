let inputText = document.querySelector('#txt-input');
let outputBox = document.querySelector('#txt-output');
let translateButton = document.querySelector('#translate');

let url = 'https://api.funtranslations.com/translate/shakespeare.json';


function urlTranslator(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log('error occured, error')
}

function clickEventHandler() {
    let text = inputText.value;

    fetch(urlTranslator(text))
        .then(response => response.json())
        .then(data =>
            outputBox.innerText = data.contents.translated)
        .catch(errorHandler);
}


translateButton.addEventListener('click', clickEventHandler);