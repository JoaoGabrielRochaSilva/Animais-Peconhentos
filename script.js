let divs = document.querySelectorAll(".Animais");
let divInfo = document.querySelectorAll(".informacao");
let buttons = document.querySelectorAll("button");

function aparecer(botao) {  

    for (let i=0; i < divs.length; i++) {
        if (divs[i].id == botao.value.replace(" ", "-")) {

            divs[i].style.display = "flex";//Fazer a categoria certa aparecer

            //Colocar conteudo dinamicamente
            let cat = document.getElementsByClassName(divs[i].id);
            let animalInfo = Animais.filter(function (animalBusca) {
                    return animalBusca.Categoria == divs[i].id;
                });
            
            for(let i=0; i < cat.length; i++) {
                
                for(let i=0; i < animalInfo.length; i++) {
                    if(animalInfo[i].Nome == cat[i].id)
                        cat[i].innerHTML = animalInfo[i].Resumo;
                }
            }

            //Resetar botões ao trocar de categoria
            for(let i=0; i < buttons.length; i++) {
                if (buttons[i].innerHTML == "Resumo")
                    buttons[i].innerHTML = "Mais Informações";
            }
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