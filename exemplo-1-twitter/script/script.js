const input = document.getElementById("tweetComposerInput");
const button = document.querySelector(".tweet-composer__button")

button.addEventListener("click", function (evento){
evento.preventDefault();

    if(input.value === undefined || input.value === null ||
        input.value === "" || input.value === " "){
        return false;
    }

    const tweetarea = document.querySelector(".tweets-timeline");
    const tweetbox = document.createElement("div")

      
    tweetbox.innerHTML += `<div class="tweets-timeline__box">
    <div class="tweets-timeline__header">
        <span class="tweets-timeline__name">Bah.Lutz</span>
        <span class="tweets-timeline__username">@bahzinhatuitera diz:</span>
        <span class="tweets-timeline__date">${new Date()} </span>
    </div>
    <p class="tweets-timeline__tweet">
    ${input.value}
</p>
<div class="tweets-timeline__footer">
         excluir </div>
</div>`
    
tweetarea.insertBefore(tweetbox, tweetarea.childNodes[0]);

const deletebtn = document.querySelector(".tweets-timeline__footer")

    deletebtn.addEventListener("click", function(evento){
    evento.preventDefault();
    tweetbox.remove();
})
    
input.value = null
    
})
 
const contador = document.getElementById("tweetComposerCounter");

input.addEventListener("keydown", function(){

    let contvalor = 279 - input.value.length
    contador.innerHTML = contvalor

    if(contvalor == 0){
        button.disabled = true
    }

})

// const footer = document.createElement("div");
// footer.className = "tweets-timeline__footer"
// footer.innerHtml = `<button class="tweets-timeline__delete-button button"> Excluir </button>`












