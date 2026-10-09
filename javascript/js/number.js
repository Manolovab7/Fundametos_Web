 const valor = 17.684;

document.getElementById("resultado1").innerHTML =
    "Arredondado: " + Math.round(valor) +
    "<br>Para baixo: " + Math.floor(valor) +
    "<br>Para cima: " + Math.ceil(valor);

// Questão 2 ------------------------------------

    const preco = 149.98765;

    document.getElementById("resultado2").textContent =
        "Preço: " + Number(preco.toFixed(2));


// Questão 3 ------------------------------------

    const valor1 = "25";
    const valor2 = "17.5";

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    document.getElementById("resultado3").textContent =
        "Soma: " + (numero1 + numero2) +
        "\nDiferença: " + (numero1 - numero2) +
        "\nProduto: " + (numero1 * numero2) +
        "\nQuociente: " + (numero1 / numero2);

// Questão 4 ------------------------------------

    const valor4 = "123.45";
    const numero = Number(valor);

    document.getElementById("resultado4").textContent =
        Number.isNaN(numero) ? "Valor inválido" : "Valor numérico válido";


// Questão 5 -----------------------------------

    const verificacao = 42.0;
    const verificacao1 = 42.5;
    const verificacao2 = "42";
    const verificacao3 = NaN;


    document.getElementById("resultado5").textContent =
        Number.isInteger(numero)
            ? "O número é inteiro."
            : "O número não é inteiro.";
        
document.getElementById("resultado5.1").textContent =
    "42.5: " + Number.isInteger(verificacao) +
    " | \"42\": " + Number.isInteger(verificacao2) +
    " | NaN: " + Number.isInteger(verificacao3);

// Questão 6 -----------------------------------

    const numeros = [17, 4, 89, 32, 12, 56];

    document.getElementById("resultado6").textContent =
        "Maior: " + Math.max(...numeros) +
        "\nMenor: " + Math.min(...numeros);

        console.log(numeros)
// Questão 7 ----------------------------------

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    document.getElementById("resultado7").textContent =
        "Número gerado: " + gerarNumero();

// Questão 8 ----------------------------------

    const nota1 = 7.5;
    const nota2 = 8.25;
    const nota3 = 9.0;

    const media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado8").textContent =
        "Média: " + media.toFixed(2);

// Questão 9 ---------------------------------

    document.getElementById("resultado9").textContent =
        "Maior inteiro seguro: " + Number.MAX_SAFE_INTEGER +
        "\nMenor inteiro seguro: " + Number.MIN_SAFE_INTEGER +
        "\nMaior valor finito: " + Number.MAX_VALUE;

// Questão 10 ---------------------------------

    function analisarNumero(valor) {
        return {
            numero: typeof valor === "number",
            inteiro: Number.isInteger(valor),
            finito: Number.isFinite(valor),
            inteiroSeguro: Number.isSafeInteger(valor)
        };
    }

    const valores = [42, 42.5, "42", Infinity, NaN];

    document.getElementById("resultado10").textContent =
        valores.map(function(valor) {
            return String(valor) + ": " +
                JSON.stringify(analisarNumero(valor));
        }).join("\n");
