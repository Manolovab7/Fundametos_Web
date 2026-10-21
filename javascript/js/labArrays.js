// QUESTÃO 1
const frutas = ["maçã", "banana", "laranja"];

frutas.push("uva");
frutas.unshift("abacaxi");
frutas.pop();
frutas.shift();

console.log(frutas);


// QUESTÃO 2
const numeros = [10, 20, 30, 40, 50, 60];

const parte = numeros.slice(2, 5);

console.log(parte);


// QUESTÃO 3
const cores = ["azul", "verde", "amarelo", "vermelho"];

cores.splice(1, 2, "roxo", "laranja");
cores.splice(1, 0, "preto");

console.log(cores);


// QUESTÃO 4
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Python", "Java"];

const tecnologias = frontEnd.concat(backEnd);

console.log(tecnologias);


// QUESTÃO 5
const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

const frase = palavras.join(" ");

console.log(frase);


// QUESTÃO 6
const linguagens = ["JavaScript", "Python", "Java", "C#"];

function temLinguagem(nome) {
    return linguagens.includes(nome);
}

console.log(temLinguagem("Python"));
console.log(temLinguagem("Ruby"));


// QUESTÃO 7
const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniel"];

console.log(nomes.indexOf("Ana"));
console.log(nomes.lastIndexOf("Ana"));
console.log(nomes.indexOf("Marcos"));


// QUESTÃO 8
const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.forEach(function(produto, indice) {
    console.log(indice + " - " + produto);
});


// QUESTÃO 9
const precos = [100, 250, 80, 320, 150];

const precosComDesconto = precos.map(function(preco) {
    return preco * 0.9;
});

console.log(precosComDesconto);


// QUESTÃO 10
const numeros2 = [3, 8, 11, 14, 21, 26, 30, 35];

const pares = numeros2.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares);


// QUESTÃO 11
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.2 },
    { nome: "Daniel", nota: 7.5 }
];

const aluno = alunos.find(function(aluno) {
    return aluno.nota >= 9;
});

console.log(aluno);


// QUESTÃO 12
const produtosPorId = [
    { id: 101, nome: "Notebook" },
    { id: 205, nome: "Mouse" },
    { id: 310, nome: "Teclado" },
    { id: 450, nome: "Monitor" }
];

function buscarIndice(id) {
    return produtosPorId.findIndex(function(produto) {
        return produto.id === id;
    });
}

console.log(buscarIndice(205));
console.log(buscarIndice(999));


// QUESTÃO 13
const notas = [5.5, 6.0, 7.2, 8.0, 9.5];

const temNotaAlta = notas.some(function(nota) {
    return nota >= 9;
});

const temNotaBaixa = notas.some(function(nota) {
    return nota < 6;
});

console.log(temNotaAlta);
console.log(temNotaBaixa);


// QUESTÃO 14
const idades = [22, 31, 19, 27, 40];
const idades2 = [22, 17, 19, 27, 40];

console.log(idades.every(function(idade) {
    return idade >= 18;
}));

console.log(idades2.every(function(idade) {
    return idade >= 18;
}));


// QUESTÃO 15
const precos2 = [29.90, 49.90, 15.50, 100.00];

const total = precos2.reduce(function(soma, preco) {
    return soma + preco;
}, 0);

console.log(total.toFixed(2));


// QUESTÃO 16
const numeros3 = [100, 8, 25, 3, 45, 12];

const crescente = numeros3.slice().sort(function(a, b) {
    return a - b;
});

const decrescente = numeros3.slice().sort(function(a, b) {
    return b - a;
});

console.log(crescente);
console.log(decrescente);


// QUESTÃO 17
const fila = ["Ana", "Bruno", "Carlos", "Daniel"];

const filaInvertida = fila.slice().reverse();

console.log(filaInvertida);
console.log(fila);


// QUESTÃO 18
const categorias = [
    ["HTML", "CSS"],
    ["JavaScript", "TypeScript"],
    ["Node.js", "Express"]
];

const tecnologias2 = categorias.flat();

console.log(tecnologias2);


// QUESTÃO 19
const turmas = [
    { nome: "Turma A", alunos: ["Ana", "Bruno"] },
    { nome: "Turma B", alunos: ["Carlos", "Daniel", "Eva"] }
];

const alunos2 = turmas.flatMap(function(turma) {
    return turma.alunos;
});

console.log(alunos2);


// DESAFIO
const alunosComTurma = turmas.flatMap(function(turma) {
    return turma.alunos.map(function(aluno) {
        return {
            nome: aluno,
            turma: turma.nome
        };
    });
});

console.log(alunosComTurma);


// QUESTÃO 20
const vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 120, quantidade: 5 },
    { produto: "Cadeira", categoria: "Móveis", valor: 900, quantidade: 3 },
    { produto: "Teclado", categoria: "Informática", valor: 250, quantidade: 4 },
    { produto: "Mesa", categoria: "Móveis", valor: 1200, quantidade: 1 }
];

const informatica = vendas.filter(function(venda) {
    return venda.categoria === "Informática";
});

const vendasCalculadas = informatica.map(function(venda) {
    return {
        produto: venda.produto,
        categoria: venda.categoria,
        valor: venda.valor,
        quantidade: venda.quantidade,
        total: venda.valor * venda.quantidade
    };
});

const faturamento = vendasCalculadas.reduce(function(soma, venda) {
    return soma + venda.total;
}, 0);

const maiorVenda = vendasCalculadas.reduce(function(maior, venda) {
    if (venda.total > maior.total) {
        return venda;
    }
    return maior;
});

const nomesProdutos = vendasCalculadas.map(function(venda) {
    return venda.produto;
});

console.log("Vendas:", vendasCalculadas);
console.log("Faturamento:", faturamento);
console.log("Maior venda:", maiorVenda);
console.log("Produtos:", nomesProdutos);