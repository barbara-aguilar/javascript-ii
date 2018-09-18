const input = document.getElementById("feedbackInputMessage");
const botao = document.querySelector(".feedback__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const feed = document.createElement("p");
    const feedText = document.createTextNode(input.value)
    feed.appendChild(feedText);

    const feedForm = document.querySelector(".testimonials");
    feedForm.appendChild(feedText);

});