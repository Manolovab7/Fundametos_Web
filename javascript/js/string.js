console.log("Carregou")

document.getElementById("btn1").addEventListener("click", function() {
  let texto = document.getElementById("input1").value;
  let valorTexto = texto.trim().toLowerCase();
  document.getElementById("resultado1").textContent = valorTexto;
  console.log(valorTexto);
});

document.getElementById("btn2").addEventListener("click", function() {
    let texto = document.getElementById("input2").value;
    let email = texto.endsWith("@gmail.com");

    document.getElementById("resultado2").textContent = email;
});

document.getElementById("btn3").addEventListener("click", function() {
    let texto = document.getElementById("input3").value;
    let espaco = texto.length;
    let textoSemEspaco = texto.replaceAll(" ", "");
    textoSemEspaco = textoSemEspaco.length;

    document.getElementById("resultado3").textContent = textoSemEspaco + " - " + espaco;

});

document.getElementById("btn4").addEventListener("click", function() {
    let texto = document.getElementById("input4").value;
    let contemPalavra = texto.includes("JavaScript");

    document.getElementById("resultado4").textContent = contemPalavra;
});

document.getElementById("btn5").addEventListener("click", function() {
    let texto = document.getElementById("input5").value;
    let qtd = texto.indexOf("@");

    let resultado = texto.slice(0, qtd);

    document.getElementById("resultado5").textContent = resultado;
});

document.getElementById("btn6").addEventListener("click", function() {
    let texto = document.getElementById("input6").value;
    let substituir = texto.replaceAll("João", "Maria");

    document.getElementById("resultado6").textContent = substituir;

    let texto1 = document.getElementById("input6").value;
    let substituir2 = texto1.replace("/João/g", "Maria");

    document.getElementById("resultado6").textContent = substituir2;

});

document.getElementById("btn7").addEventListener("click", function() {
    let texto = document.getElementById("input7").value;
    let parteDoTexto = texto.slice(0, 3);
    let letraMaiuscula = parteDoTexto.toUpperCase();

    let concatenacao = letraMaiuscula + "-"+ texto.slice(3);

    document.getElementById("resultado7").textContent = concatenacao;
});

document.getElementById("btn8").addEventListener("click", function() {
    let texto = document.getElementById("input8").value;
    let separar = texto.split("");
    let inverter = separar.reverse();
    let resultado = inverter.join("");

    document.getElementById("resultado8").textContent = resultado;

    //console.log(separar);
    //console.log(inverter);
    //console.log(resultado);
});

function validarSenha(senha) {
    if( senha.length >= 8 && senha !== senha.toLowerCase() && senha !== senha.toUpperCase() && senha.match(/[0-9]/) != null) {
        return true;
    }else{
        return false;
    }
}
document.getElementById("btn9").addEventListener("click", function() {
    let senha = document.getElementById("input9").value;

    if(validarSenha(senha)) {
        document.getElementById("resultado9").textContent = "Senha válida";
    }else{
        document.getElementById("resultado9").textContent = "Senha inválida";
    }
});

function formatarNome(nome) {
    nome = nome.trim();
    nome = nome.toLowerCase();
    nome = nome.replaceAll("  ", " ");
    let palavras = nome.split(" ");

    let fraseFormatada = palavras.map(function(palavra){
        return palavra.slice(0, 1).toUpperCase() + palavra.slice(1);
    })

    let resultado = fraseFormatada.join(" ");

    return resultado;
}

document.getElementById("btn10").addEventListener("click", function(){
    let nome = document.getElementById("input10").value;
    let nomeFormatado = formatarNome(nome);

    document.getElementById("resultado10").textContent = nomeFormatado;
});