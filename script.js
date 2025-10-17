let divs = document.querySelectorAll(".Animais");

function aparecer(botao) {  

    for (let i=0; i < divs.length; i++) {
        if (divs[i].id == botao.value)
            divs[i].style.display = "flex";
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