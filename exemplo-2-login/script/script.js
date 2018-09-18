// const input = document.getElementById("loginInputEmail");
// const botao = document.querySelector(".login__button");

// botao.addEventListener("click", function(evento){
//     evento.preventDefault();
//     const email = input.value;

//     const loginForm = document.querySelector(".login__form");
//     loginForm.innerHTML = `Seu loggin ${email} foi realizado com sucesso!!!`;

//     // alert(`Seu loggin ${email} foi realizado com sucesso!!!`)

// });

const input = document.getElementById("loginInputEmail");
const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Login realizado com sucesso");
    resposta.appendChild(respostaMensagem);
    const logForm = document.querySelector(".login__form");
    logForm.insertBefore(resposta, logForm.childNodes[0]);
});