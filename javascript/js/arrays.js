const inventors = [

    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },

    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },

    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },

    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },

    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },

    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },

    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },

    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },

    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },

    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },

    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },

    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }

];


const people = ['Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel',
    'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem',
    'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn',
    'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin',
    'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh',
    'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'];


const result = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
document.getElementById('resposta1').textContent = JSON.stringify(result);

const result2 = inventors.map(inventor => `inventor: ${inventor.first} ${inventor.last}`);
document.getElementById('resposta2').textContent = JSON.stringify(result2);

document.getElementById('resposta3').textContent = JSON.stringify(inventors.sort((a, b) => a.year - b.year));

let nascimento = inventors[0].year;
let falecimento = inventors[0].passed;

for(let i = 1; i < inventors.length; i++){
    if(inventors[i].year > nascimento){
        nascimento = inventors[i].year;
    }
}

for(let i = 1; i < inventors.length; i++){
    if(inventors[i].passed < falecimento){
        falecimento = inventors[i].passed;
    }
}

let resultado = falecimento - nascimento;

document.getElementById('resposta4').textContent = JSON.stringify(resultado);

document.getElementById('resposta5').textContent = JSON.stringify(inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year)));

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const veiculos = data.reduce((acumulador, elem) =>{
    if(!acumulador.includes(elem)){
        acumulador.push(elem);
    }
    return acumulador;
}, []);

document.getElementById('resposta6').textContent = JSON.stringify(veiculos);
