const inputName = document.getElementById("feedbackInputName")
const inputCity = document.getElementById("feedbackInputCity")
const inputReviews = document.getElementById("feedbackInputReviews")
const button = document.querySelector(".feedback__button")

    button.addEventListener("click", function(evento){
        evento.preventDefault();

        const tabela = document.querySelector(".respostas__table");
        const linhaTabela = document.createElement("tr");
        
        const colunaName = document.createElement("td");
        const colunaNameText = document.createTextNode(inputName.value);
        colunaName.appendChild(colunaNameText);

        const colunaCity = document.createElement("td");
        const colunaCityText = document.createTextNode(inputCity.value);
        colunaCity.appendChild(colunaCityText);

        const colunaReviews = document.createElement("td");
        const colunaReviewtext = document.createTextNode(inputReviews.value);
        colunaReviews.appendChild(colunaReviewtext);

        linhaTabela.appendChild(colunaName)
        linhaTabela.appendChild(colunaCity)
        linhaTabela.appendChild(colunaReviews)

        tabela.appendChild(linhaTabela)

    })
