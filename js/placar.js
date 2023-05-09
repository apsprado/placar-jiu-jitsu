var pontoAzul = 0;
var vantagemAzul = 0;
var punicaoAzul = 0;
var pontoBranco = 0;
var vantagemBranco = 0;
var punicaoBranco = 0;

//PONTUAÇÃO AZUL
function pontoA(valor) {
  if (valor == "2") {
    pontoAzul += 2;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  } else if (valor == "3") {
    pontoAzul += 3;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  } else if (valor == "4") {
    pontoAzul += 4;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  } else if (valor == "-2") {
    pontoAzul -= 2;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  } else if (valor == "-3") {
    pontoAzul -= 3;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  } else if (valor == "-4") {
    pontoAzul -= 4;
    if (pontoAzul < 0) {
      pontoAzul = 0;
    }
    document.getElementById("numeroA").innerHTML = pontoAzul;
  }
}

function vantagemA(valor) {
  if (valor == "1") {
    vantagemAzul += 1;
    if (vantagemAzul < 0) {
      vantagemAzul = 0;
    }
    document.getElementById("numeroAV").innerHTML = vantagemAzul;
  } else if (valor == "0") {
    vantagemAzul -= 1;
    if (vantagemAzul < 0) {
      vantagemAzul = 0;
    }
    document.getElementById("numeroAV").innerHTML = vantagemAzul;
  }
}

function punicaoA(valor) {
  if (valor == "1") {
    punicaoAzul += 1;
    if (punicaoAzul < 0) {
      punicaoAzul = 0;
    }
    document.getElementById("numeroAP").innerHTML = punicaoAzul;
  } else if (valor == "0") {
    punicaoAzul -= 1;
    if (punicaoAzul < 0) {
      punicaoAzul = 0;
    }
    document.getElementById("numeroAP").innerHTML = punicaoAzul;
  }
}

//PONTUAÇÃO BRANCO
function pontoB(valor) {
  if (valor == "2") {
    pontoBranco += 2;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  } else if (valor == "3") {
    pontoBranco += 3;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  } else if (valor == "4") {
    pontoBranco += 4;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  } else if (valor == "-2") {
    pontoBranco -= 2;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  } else if (valor == "-3") {
    pontoBranco -= 3;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  } else if (valor == "-4") {
    pontoBranco -= 4;
    if (pontoBranco < 0) {
      pontoBranco = 0;
    }
    document.getElementById("numeroB").innerHTML = pontoBranco;
  }
}

function vantagemB(valor) {
  if (valor == "1") {
    vantagemBranco += 1;
    if (vantagemBranco < 0) {
      vantagemBranco = 0;
    }
    document.getElementById("numeroBV").innerHTML = vantagemBranco;
  } else if (valor == "0") {
    vantagemBranco -= 1;
    if (vantagemBranco < 0) {
      vantagemBranco = 0;
    }
    document.getElementById("numeroBV").innerHTML = vantagemBranco;
  }
}

function punicaoB(valor) {
  if (valor == "1") {
    punicaoBranco += 1;
    if (punicaoBranco < 0) {
      punicaoBranco = 0;
    }
    document.getElementById("numeroBP").innerHTML = punicaoBranco;
  } else if (valor == "0") {
    punicaoBranco -= 1;
    if (punicaoBranco < 0) {
      punicaoBranco = 0;
    }
    document.getElementById("numeroBP").innerHTML = punicaoBranco;
  }
}
