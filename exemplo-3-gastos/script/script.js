const button = document.querySelector(".transacao__button");
const inputName = document.getElementById("transacaoInputName");
const inputValor = document.getElementById("transacaoInputMoney");
const inputData = document.getElementById("transacaoInputDate");



    button.addEventListener("click", function(evento){
        evento.preventDefault();
        
        const tabela = document.querySelector(".extrato__table");
       
        const linhaTabela = document.createElement("tr");
        

        const colunaNome = document.createElement("td");
        const colunaNomeText = document.createTextNode(inputName.value)
        colunaNome.appendChild(colunaNomeText);

        const colunaValor = document.createElement("td");
        const colunaValorText = document.createTextNode(inputValor.value)
        colunaValor.appendChild(colunaValorText);

        const colunaData = document.createElement("td");
        const colunaDataText = document.createTextNode(inputData.value)
        colunaData.appendChild(colunaDataText);

        
        linhaTabela.appendChild(colunaNome);
        linhaTabela.appendChild(colunaValor);
        linhaTabela.appendChild(colunaData);


        tabela.appendChild(linhaTabela);
        console.log(tabela)
});
