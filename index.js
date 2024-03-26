var myName = 'Guilherme';
// myName = true
console.log("Hi, I'm ".concat(myName, "! Welcome to the 'JavaScript' for QA's series!"));
console.log('');
var color;
console.log(typeof (color));
color = 'pink';
console.log('Color:', color);
color = true;
console.log('Color:', color);
var nome = 'Tom';
var age = 36;
var pronoum = 'he';
var isMarried = true;
function introducePerson(person) {
    var nome = person.nome, age = person.age, pronoum = person.pronoum, isMarried = person.isMarried;
    console.log("".concat(nome, " is ").concat(age, " years old and ").concat(pronoum, " ").concat(isMarried ? 'is' : 'is not', " married"));
}
var tom = {
    nome: nome,
    age: age,
    pronoum: pronoum,
    isMarried: isMarried
};
introducePerson(tom);
var ana = {
    nome: 'Ana',
    age: 25,
    pronoum: 'she'
};
introducePerson(ana);
var gregory = {
    nome: 'Gregory',
    age: 18,
    pronoum: 'she',
    isMarried: false
};
var people = [
    tom,
    ana,
    gregory
];
introducePerson(people[2]);
