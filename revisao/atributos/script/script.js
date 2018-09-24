const atributos = document.getElementById("externo");
const atributosBox = document.createElement("p");
const atributosText = document.querySelector(".atributosText")


function getAttributes(){

atributosBox.innerHTML = `<p>A id é ${atributos.id}, O Type é ${atributos.type}  O rel é ${atributos.rel} O target é ${atributos.target} e o href é ${atributos.href}</p>`
atributosText.appendChild(atributosBox)

console.log(atributosText)
}