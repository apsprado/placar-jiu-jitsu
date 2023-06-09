var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var minuto = 0;
var segundo = 0;

function IniciarCronometro(valor) {
  this.evento = valor;
  this.configMinuto = document.getElementById("min").value;
  this.configSegundo = document.getElementById("seg").value;
  this.mostrarValor = document.getElementById("mostrarValor");

  if (evento == "start") {
    if (!document.getElementById("min").readOnly) {
      if (!this.validarNumero(this.configMinuto)) {
        alert("Campo minuto não é um número!");
        return;
      }
      if (
        !this.validarNumero(this.configSegundo) ||
        document.getElementById("seg").value > 59
      ) {
        alert("Campo segundo não é um número válido (0 a 59)!");
        return;
      }

      document.getElementById("min").readOnly = true;
      document.getElementById("seg").readOnly = true;
      document.getElementById("btnIniciar").disabled = true;
      document.getElementById("btnResetar").disabled = false;
      document.getElementById("btnPausar").disabled = false;
      this.minuto = document.getElementById("min").value;
      this.segundo = document.getElementById("seg").value;

      document.getElementById("mostrarValor").classList.remove("mostrarValor");
      document.getElementById("mostrarValor").classList.add("mostrarValor2");
      document.getElementById("tempo").classList.remove("Classexibe");
      document.getElementById("tempo").classList.add("Classexibe2");
    } else {
      if (this.segundo == 0 && this.minuto != 0) {
        this.segundo = 59;
        this.minuto--;
      } else {
        this.segundo--;
      }
      if (this.minuto == 0 && this.segundo == 0) {
        document.getElementById("min").readOnly = false;
        document.getElementById("seg").readOnly = false;
        document.getElementById("btnIniciar").disabled = false;
        document.getElementById("btnResetar").disabled = true;
        document.getElementById("btnPausar").disabled = true;
        this.mostrarValor.value = "00:00";

        document
          .getElementById("mostrarValor")
          .classList.remove("mostrarValor2");
        document.getElementById("mostrarValor").classList.add("mostrarValor");
        document.getElementById("tempo").classList.remove("Classexibe2");
        document.getElementById("tempo").classList.add("Classexibe");

        clearTimeout(this.contador);
        return;
      }

      novoMinuto = null;
      novoSegundo = null;
      if (this.minuto <= 9) {
        novoMinuto = "0" + this.minuto;
      } else {
        novoMinuto = this.minuto;
      }
      if (this.segundo <= 9) {
        novoSegundo = "0" + this.segundo;
      } else {
        novoSegundo = this.segundo;
      }
      this.mostrarValor.value = novoMinuto + ":" + novoSegundo;
    }
  }
  clearTimeout(this.contador);
  this.contador = setTimeout("IniciarCronometro(evento)", 995);
}

function validarNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function PausarCronometro() {
  if (document.getElementById("btnPausar").value == "PAUSAR") {
    document.getElementById("btnPausar").value = "CONTINUAR";
    this.evento = "pause";
  } else {
    document.getElementById("btnPausar").value = "PAUSAR";
    this.evento = "start";
  }
}

function ResetarCronometro() {
  document.getElementById("min").readOnly = false;
  document.getElementById("seg").readOnly = false;
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnResetar").disabled = true;
  document.getElementById("btnPausar").disabled = true;
  document.getElementById("btnPausar").value = "PAUSAR";
  document.getElementById("AtletaA").value = "NOME DO ATLETA A";
  document.getElementById("AtletaB").value = "NOME DO ATLETA B";
  document.getElementById("EquipeA").value = "NOME DA EQUIPE A";
  document.getElementById("EquipeB").value = "NOME DA EQUIPE B";

  var pontoAzul = 0;
  var vantagemAzul = 0;
  var punicaoAzul = 0;
  var pontoBranco = 0;
  var vantagemBranco = 0;
  var punicaoBranco = 0;

  document.getElementById("numeroA").innerHTML = pontoAzul;
  document.getElementById("numeroAV").innerHTML = vantagemAzul;
  document.getElementById("numeroAP").innerHTML = punicaoAzul;

  document.getElementById("numeroB").innerHTML = pontoBranco;
  document.getElementById("numeroBV").innerHTML = vantagemBranco;
  document.getElementById("numeroBP").innerHTML = punicaoBranco;

  this.mostrarValor.value = "00:00";

  document.getElementById("mostrarValor").classList.remove("mostrarValor2");
  document.getElementById("mostrarValor").classList.add("mostrarValor");
  document.getElementById("tempo").classList.remove("Classexibe2");
  document.getElementById("tempo").classList.add("Classexibe");

  clearTimeout(this.contador);
}
