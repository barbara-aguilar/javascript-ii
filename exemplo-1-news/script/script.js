// const input = document.getElementById("newsInputEmail");

// const botao = document.querySelector(".news__button");

// console.log(input)
// console.log(botao)

// botao.addEventListener("click", function(evento){
//     evento.preventDefault();
//     const email = input.value;
//     const newsForm = document.querySelector(".news__form")
//     newsForm.innerHTML = `O email ${email} foi cadastrado com sucesso.`;
//     // alert(`O email ${email} foi cadastrado com sucesso.`)

// });

const input = document.getElementById("newsInputEmail");

const botao = document.querySelector(".news__button");


botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso");
    resposta.appendChild(respostaMensagem);
    const newsForm = document.querySelector(".news__form");
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);

})