const buttonLogin = document.querySelector(".login__button")
const modal = document.querySelector(".login-modal")
const buttonClose = document.querySelector(".login-modal__button-close")

buttonLogin.addEventListener("click", function(evento){
    evento.preventDefault();
    modal.style.display = "flex"

});

buttonClose.addEventListener("click", function(evento){
    evento.preventDefault();
    modal.style.display = "none"

});