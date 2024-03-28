"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function introducePerson(person) {
    var nome = person.nome, age = person.age, pronoum = person.pronoum, isMarried = person.isMarried;
    console.log("".concat(nome, " is ").concat(age, " years old and ").concat(pronoum, " ").concat(isMarried ? 'is' : 'is not', " married"));
    console.log('');
}
exports.default = introducePerson;
