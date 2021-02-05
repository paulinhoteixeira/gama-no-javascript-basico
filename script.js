console.log("JavaScript carregado");

function validaCPF(cpf) {


}

function validacao() {
  console.log("Iniciando validação CPF");
  var cpf = document.getElementById("cpf_digitado").value;

  var resultadoValidacao = validaCPF(cpf);

  if(resultadoValidacao){
      document.getElementById("success").style.display = "block";
  }else{
      document.getElementById("error").style.display = "block";
  }
}
