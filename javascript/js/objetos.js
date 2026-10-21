// QUESTÃO 1
const aluno = {
    nome: "Mariana",
    idade: 21,
    curso: "Sistemas de Informação"
};

console.log(aluno.nome);
console.log(aluno["idade"]);
console.log(aluno.curso);

aluno.idade = 22;
console.log(aluno);


// QUESTÃO 2
const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
};

produto.categoria = "Informática";
produto.estoque = 8;
delete produto.estoque;
produto.desconto = 10;

console.log(produto);


// QUESTÃO 3
const usuario = {
    nome: "Carlos",
    email: "carlos@email.com",
    idade: 30
};

console.log(Object.prototype.hasOwnProperty.call(usuario, "email"));
console.log(Object.prototype.hasOwnProperty.call(usuario, "telefone"));
console.log(Object.prototype.hasOwnProperty.call(usuario, "idade"));

console.log("email" in usuario);


// QUESTÃO 4
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "preto"
};

console.log(Object.keys(carro));
console.log(Object.values(carro));

Object.entries(carro).forEach(function(item) {
    console.log(item[0] + ": " + item[1]);
});


// QUESTÃO 5
const produtoTeclado = {
    nome: "Teclado",
    preco: 250,
    quantidade: 4
};

function calcularTotal(objeto) {
    return objeto.preco * objeto.quantidade;
}

produtoTeclado.total = calcularTotal(produtoTeclado);
console.log(produtoTeclado);


// QUESTÃO 6
const funcionario = {
    nome: "Ana",
    cargo: "Desenvolvedora",
    endereco: {
        cidade: "Nova Friburgo",
        estado: "RJ",
        cep: "28600-000"
    }
};

console.log(funcionario.endereco.cidade);
console.log(funcionario.endereco.estado);
console.log(funcionario.endereco.cep);

funcionario.endereco.cidade = "Rio de Janeiro";
console.log(funcionario.endereco.cidade);

console.log(funcionario.contato ? funcionario.contato.telefone : undefined);


// QUESTÃO 7
const conta = {
    titular: "João",
    saldo: 1500,

    depositar: function(valor) {
        this.saldo = this.saldo + valor;
    },

    consultarSaldo: function() {
        console.log(this.saldo);
    },

    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
};

conta.depositar(500);
conta.consultarSaldo();

conta.sacar(200);
conta.consultarSaldo();

conta.sacar(5000);


// QUESTÃO 8
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 9.2 },
    { nome: "Daniel", nota: 7.0 }
];

const nomesAlunos = alunos.map(function(aluno) {
    return aluno.nome;
});

console.log(nomesAlunos);

const aprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 7;
});

console.log(aprovados);

const maiorNota = alunos.reduce(function(maior, aluno) {
    if (aluno.nota > maior.nota) {
        return aluno;
    }
    return maior;
});

console.log(maiorNota);

const soma = alunos.reduce(function(total, aluno) {
    return total + aluno.nota;
}, 0);

const media = soma / alunos.length;
console.log(media);


// QUESTÃO 9
const dadosPessoais = {
    nome: "Marina",
    idade: 28
};

const dadosProfissionais = {
    cargo: "Analista",
    salario: 4500
};

const pessoa = {
    ...dadosPessoais,
    ...dadosProfissionais
};

pessoa.resumo = pessoa.nome + " trabalha como " +
    pessoa.cargo + " e recebe " + pessoa.salario + " reais.";

console.log(pessoa);


// QUESTÃO 10
const produtos = [
    { id: 1, nome: "Notebook", categoria: "Informática", preco: 3500, estoque: 4 },
    { id: 2, nome: "Mouse", categoria: "Informática", preco: 120, estoque: 15 },
    { id: 3, nome: "Cadeira", categoria: "Móveis", preco: 900, estoque: 6 },
    { id: 4, nome: "Teclado", categoria: "Informática", preco: 250, estoque: 10 }
];

const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log(nomesProdutos);

const produtosCalculados = produtos.map(function(produto) {
    return {
        ...produto,
        total: produto.preco * produto.estoque
    };
});

console.log(produtosCalculados);

const totalEstoque = produtosCalculados.reduce(function(soma, produto) {
    return soma + produto.total;
}, 0);

console.log(totalEstoque);

const maisCaro = produtos.reduce(function(maior, produto) {
    if (produto.preco > maior.preco) {
        return produto;
    }
    return maior;
});

console.log(maisCaro);

const informatica = produtos.filter(function(produto) {
    return produto.categoria === "Informática";
});

console.log(informatica);

function buscarProduto(id) {
    return produtos.find(function(produto) {
        return produto.id === id;
    });
}

console.log(buscarProduto(2));

const resumoProdutos = {
    quantidadeProdutos: produtos.length,
    valorTotalEstoque: totalEstoque
};

console.log(resumoProdutos);
