let divs = document.querySelectorAll(".Animais");
let divInfo = document.querySelectorAll(".informacao");

function aparecer(botao) {  

    for (let i=0; i < divs.length; i++) {
        if (divs[i].id == botao.value) {
            divs[i].style.display = "flex";
        }
            
        else
            divs[i].style.display = "none";
    }
}

function inicio() {

    for (let i=0; i < divs.length; i++) {
        if (divs[i].id == "inicio")
            divs[i].style.display = "flex";
        else
            divs[i].style.display = "none";
    }
}

function MaisOuResumo(botao, animal) {

    for(let i=0; i < divInfo.length; i++) {

        if(divInfo[i].id == animal) {

            if (botao.innerHTML == "Mais Informações") {

                let animalInfo = Animais.find(function (animalBuscar) {
                        return animalBuscar.Nome == animal;
                });

                divInfo[i].innerHTML = animalInfo.Detalhado;

                botao.innerHTML = "Resumo";

            } else if (botao.innerHTML == "Resumo") {

                let animalInfo = Animais.find(function (animalBuscar) {
                        return animalBuscar.Nome == animal;
                });

                divInfo[i].innerHTML = animalInfo.Resumo;

                botao.innerHTML = "Mais Informações";
            }
        }
    }
}