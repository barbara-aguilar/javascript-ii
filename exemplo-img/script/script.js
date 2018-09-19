const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");

//console.log(links)
//console.log(links.children)

for(let i = 0; i < links.children.length; i++){
    console.log(links.children[i])

    const fio = links.children[i];
    fio.addEventListener("click", function(){
        const img = this.dataset.image;
        console.log(img);

        imagem.src = img

    })
}