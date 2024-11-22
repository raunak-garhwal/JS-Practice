
const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacters(){
    const textLength = textarea.value.length;
    counter.innerText = `${textLength}`;
}