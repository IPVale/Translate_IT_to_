const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input')
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');

langButtons.forEach (function(langButton) {
    langButton.addEventListener('click', function() {
        const text = textInput.value;
        const lang = langButton.dataset.lang;
        const flag = langButton.innerText;
        translate(text, lang, flag);
    });
})
// langBbutton.addEventListener('click', function() {
//    console.log('cliceked')
// }) 


// Utilizzare Fetch API su JS   
//sync function logMovies() {
//    const response = await fetch("http://example.com/movies.json");
//    const movies = await response.json();
//    console.log(movies);

// creiamo una funzione asincrona e tutto quello che al suo interno e' 
// asincrono viene eseguito nel tempo che decidiamo noi

async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;
    console.log(result);    
    translationText.innerHTML = result;
    translationFlag.innerText = flag;
}



