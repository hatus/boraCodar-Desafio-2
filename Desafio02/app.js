// Pegando o Botão e a imagem
let btn360 = document.getElementById("btn360");
let img = document.getElementById("img");

// Começando o Estado do 0
let state = 0;

function changeToGif() {
    state = 1;

    //  Verificando o Estado, trocando a imagem estática pelo gif e o ícone do botão

  if (state == 1) {
    img.setAttribute("src", "assets/sofa-gif.gif");
    btn360.style.background = "url(assets/close.svg)";
    state -= 1;
  }

  // Ativando o botão novamente em caso de um novo evento e retornando ao estado inicial (estático)
  
  btn360.addEventListener("click", function () {
    if (state !== 1) {
      img.setAttribute("src", "assets/sofa.png");
      btn360.style.background = "url(assets/vector.svg)";
      state += 1;
    } else {
      changeToGif();
    }
  });
}
