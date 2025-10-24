let divs = document.querySelectorAll(".Animais");

function criar(animal) {
    let divAnimal = document.createElement("div");
    let divImagem = document.createElement("div");
    let divConteudo = document.createElement("div");

    //Adicionar imagem
    let img = document.createElement("img");
    img.setAttribute("src", animal.Imagem);

    divImagem.appendChild(img);
    divImagem.setAttribute("class", "Imagem");

    //Adicionar conteudo
    let h2 = document.createElement("h2");
    h2.innerHTML = animal.Titulo;

    let info = document.createElement("div");
    info.setAttribute("class", "informacao");
    info.innerHTML = animal.Resumo;

    let botao = document.createElement("button");
    botao.innerHTML = "Mais Informações";
    botao.addEventListener("click", () => MaisOuResumo(botao, animal, info));

    divConteudo.appendChild(h2);
    divConteudo.appendChild(info);
    divConteudo.appendChild(botao);
    divConteudo.setAttribute("class", "conteudo")

    //Colocar em uma div especifa do animal
    divAnimal.appendChild(divImagem);
    divAnimal.appendChild(divConteudo);
    divAnimal.setAttribute("class", "busca");

    return divAnimal;
}

function aparecer(botao) {  

    for (let i=0; i < divs.length; i++) {
        
        if (divs[i].id == botao.value.replace(" ", "-")) {

            divs[i].innerHTML = "";

            for(let j=0; j < Animais.length; j++) {
                if(Animais[j].Categoria == botao.value.replace(" ", "-")) {
                    let divAnimal = criar(Animais[j]);
                    divs[i].appendChild(divAnimal);
                }
            }

            setTimeout(() => {divs[i].style.display = "flex";}, 500);
            divs[i].classList.remove("hidden");
            divs[i].classList.add("show");
               
        } else {

            divs[i].classList.remove("show");
            divs[i].classList.add("hidden");

            setTimeout(() => {divs[i].style.display = "none";}, 500);
        }
    }
}

function inicio() {

    for (let i=0; i < divs.length; i++) {
        if (divs[i].id == "inicio") {
            setTimeout(() => {divs[i].style.display = "flex";}, 500);
            divs[i].classList.remove("hidden");
            divs[i].classList.add("show");
        }    
        else {
            divs[i].classList.remove("show");
            divs[i].classList.add("hidden");

            setTimeout(() => {divs[i].style.display = "none";}, 500);
        }      
    }
}

function MaisOuResumo(botao, animal, divInfo) {

    if(botao.innerHTML == "Mais Informações") {
        divInfo.innerHTML = animal.Detalhado;
        botao.innerHTML = "Resumo";
    }
    else if (botao.innerHTML == "Resumo") {
        divInfo.innerHTML = animal.Resumo;
        botao.innerHTML = "Mais Informações";
    }
}