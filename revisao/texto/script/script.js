const article = document.querySelector(".articles__texts")
const buttonBigger = document.querySelector(".button__bigger")
const buttonSmaller = document.querySelector(".button__smaller")

let fontSize = 16;

buttonBigger.addEventListener("click", function(evento){
    evento.preventDefault();
    fontSize++
    article.style.fontSize = `${fontSize}px`;

})

buttonSmaller.addEventListener("click", function(evento){
    evento.preventDefault();
    fontSize--
    article.style.fontSize = `${fontSize}px`;
    
})