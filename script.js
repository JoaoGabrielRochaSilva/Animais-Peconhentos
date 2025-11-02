let divs = document.querySelectorAll(".Animais");
let pesquisa = document.getElementById("pesquisa");
let lupa = document.getElementById("lupa");

lupa.addEventListener("click", () => Pesquisar(pesquisa));
pesquisa.addEventListener("input", () => completar(pesquisa));

function Pesquisar(pesquisa) {
    let divres = document.getElementById("res-busca");

    if (divres.classList.contains("show")) {
        divres.classList.remove("show");
        divres.classList.add("hidden"); 
        setTimeout(() => {divres.innerHTML = " "; divres.style.display = "none";}, 500);
    }

    let animal = Animais.find(function(animalBusca) {
        return animalBusca.Titulo.toLowerCase() == pesquisa.value.toLowerCase().replaceAll(" ", "-");
    });

    if (animal != undefined) {
        let divAnimal = criar(animal);

        setTimeout(() => {
            divres.appendChild(divAnimal); 
            divres.style.display = "flex";
            divres.classList.remove("hidden");
            divres.classList.add("show");
            window.location.href = "#res-busca";
        }, 500);

    } else if (pesquisa.value.replaceAll(" ", "") != "")
        alert("Esse animal não está disponível no catálago.");
     
}

function complete(p, pesquisa, divCom) {
    pesquisa.value = p.innerHTML;
    divCom.innerHTML = " ";
}

function completar(pesquisa) {
    let divCom = document.getElementById("completar");
    let divsbusca = document.querySelectorAll(".animal-busca");
    let strpesquisa = pesquisa.value.replaceAll(" ", "-");

    if (strpesquisa.length > 0) {

        for(let i=0; i < Animais.length; i++) {
            let j = 0;

            while(j < strpesquisa.length && strpesquisa[j].toLowerCase() == Animais[i].Titulo[j].toLowerCase()) {
                j++;
            }

            if (j == strpesquisa.length) {
                let res = true;

                for(let y=0; y < divsbusca.length; y++) {

                    if(divsbusca[y].innerHTML == Animais[i].Titulo) {
                        res = false;
                    }
                }

                if (res) {
                    let p = document.createElement("p");
                    p.innerHTML = Animais[i].Titulo;
                    p.setAttribute("class", "animal-busca");
                    p.addEventListener("click", () => complete(p, pesquisa, divCom));

                    divCom.appendChild(p);
                }
                
            }

            for(let i=0; i < divsbusca.length; i++) {
                let j = 0;

                while(j < strpesquisa.length && strpesquisa[j].toLowerCase() == divsbusca[i].innerHTML[j].toLowerCase()) {
                    j++;
                }
                    

                if (j != strpesquisa.length) {
                    divCom.removeChild(divsbusca[i]);
                }
            }
        }

    } else {
        divCom.innerHTML = " ";
    }
        
}

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
            document.getElementById("res-busca").innerHTML = " ";
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