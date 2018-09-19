const menuButton = document.querySelector(".sidebar-menu__button")
const menuNav = document.querySelector(".sidebar-menu")

let contador = 1

menuButton.addEventListener("click", function(evento){
    evento.preventDefault();
    
    if( menuNav.style.marginLeft === "0px"){
        menuNav.style.marginLeft = "-435px"
    }else{
        menuNav.style.marginLeft = "0px"
    }

   
   
   //outra possibilidade:
    // contador++
    // if(contador %2 !== 0){
    // menuNav.style.marginLeft = "0";    
    // }
})

