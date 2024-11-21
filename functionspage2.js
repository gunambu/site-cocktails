let contadorCliques = 0;

function alterPanda(){
    contadorCliques++;

    var imagem = document.getElementById("drunk_panda");

    if (contadorCliques === 5){
        imagem.src = "images/panda2.jpg";
    } else if (contadorCliques === 10){
        imagem.src = "images/panda3.jpg";
    }
}

document.getElementById("panda_alter").addEventListener("click", alterPanda);

function resetContador() {
    contadorCliques = 0; // Reseta o contador de cliques
    var imagem = document.getElementById("drunk_panda");
    imagem.src = "images/panda1.jpg"; // Volta para a primeira imagem
}

// Adiciona o evento de clique ao botão de resetar
document.getElementById("reset_Panda").addEventListener("click", resetContador);