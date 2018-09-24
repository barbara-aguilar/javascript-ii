const seletor = document.getElementById("selectInputArea")
const button = document.querySelector(".select__button")

button.addEventListener("click", function(evento){
evento.preventDefault();

seletor[seletor.selectedIndex].remove()


console.log(seletor[seletor.selectedIndex])

})