"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var introducePerson_1 = require("./introducePerson");
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
var tom = {
    nome: nome,
    age: age,
    pronoum: pronoum,
    isMarried: isMarried
};
(0, introducePerson_1.default)(tom);
var ana = {
    nome: 'Ana',
    age: 25,
    pronoum: 'she'
};
(0, introducePerson_1.default)(ana);
var gregory = {
    nome: 'Gregory',
    age: 18,
    pronoum: 'she',
    isMarried: false
};
var pessoas = [
    tom,
    ana,
    gregory
];
(0, introducePerson_1.default)(pessoas[2]);
var dbActions;
(function (dbActions) {
    dbActions[dbActions["create"] = 0] = "create";
    dbActions[dbActions["read"] = 1] = "read";
    dbActions[dbActions["update"] = 2] = "update";
    dbActions[dbActions["delete"] = 3] = "delete";
})(dbActions || (dbActions = {}));
function runDBAction(action) {
    switch (action) {
        case 0:
            console.log('Creating...');
            break;
        case 1:
            console.log('Reading...');
            break;
        case 2:
            console.log('Updating...');
            break;
        case 3:
            console.log('Deleting...');
            break;
        default:
            console.log('Ooops, invalid database action!');
            break;
    }
}
runDBAction(0);
runDBAction(1);
runDBAction(2);
runDBAction(3);
runDBAction(5);
console.log('');
runDBAction(dbActions.update);
