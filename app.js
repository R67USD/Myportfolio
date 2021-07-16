const texts = ['websites', 'illustrations', "vadapaw's"]
const last = ['facebook', 'linkedin', 'twitter']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type (){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++
        index = 0;
    }
    setTimeout(type, 600)

}());
(function type (){

    if(count === last.length){
        count = 0;
    }
    currentText = last[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".ending").textContent = letter;
    if(letter.length === currentText.length){
        count++
        index = 0;
    }
    setTimeout(type, 600)

}());