const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsByName("level")
const inputNews = document.getElementById("cadastroInputNews")


const button = document.querySelector(".cadastro__button");

    button.addEventListener("click", function(evento){
    evento.preventDefault();
    

    const optionSelect = inputArea.options
    [inputArea.selectedIndex]
    
    if(inputArea.selectedIndex === 0 ){
        document.querySelector("body").style.backgroundColor = "blue";
    }else if(inputArea.selectedIndex === 1){
        document.querySelector("body").style.backgroundColor = "green";
    }else if(inputArea.selectedIndex === 2){
        document.querySelector("body").style.backgroundColor = "pink";
    }else {
        document.querySelector("body").style.backgroundColor = "orange";
    }

    
    if(inputNome.value === undefined || inputNome.value === null ||
        inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    }else if( inputEmail.value === undefined || inputEmail.value === null ||
        inputEmail.value === "" || inputEmail.value === " " ){
        inputEmail.focus();
        return false;
    }else if(inputEmail.value !== inputEmailConfirm.value){
        inputEmailConfirm.focus();
        alert("Atenção os endereços de email não são compatíveis");
    
    }else if(inputPassword.value.length < 6){
        inputPassword.focus();
        alert("Atenção a senha deve conter no mínimo 7 caracteres");
        
    }else if(inputPassword.value !== inputPasswordConfirm.value){
        alert("Atenção a senha e a confirmação não são compatíveis");
    }else if(inputPhone.value === undefined || inputPhone.value === null ||
        inputPhone.value === "" || inputPhone.value === " " ){
        inputPhone.focus();
        return false;
    }

    let radioItem;
    for(let i = 0; i < inputLevel.length; i++){
        if(inputLevel[i].checked){
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
        }
    }

    if(radioItem.value === "Junior"){
        console.log("0 - 2 anos de experiência")
    }else if(radioItem.value === "Pleno"){
        console.log("2 - 5 anos de experiência")
    }else{
        console.log("5+ anos de experiência")
    }


    if(inputNews.checked === false){
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :c")
    }
   
    document.querySelector("body").style.backgroundColor = "#fff";
    const form = this.closest("form");
    form.submit();

    });