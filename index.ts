let myName = 'Guilherme'

// myName = true

console.log(`Hi, I'm ${myName}! Welcome to the 'JavaScript' for QA's series!`)

console.log('')

let color
console.log(typeof(color))

color = 'pink'
console.log('Color:', color)
color = true
console.log('Color:', color)

const nome: string = 'Tom'
const age: number = 36
const pronoum: string = 'he'
const isMarried: boolean = true

type person = {
    nome: string,
    age: number,
    pronoum: string,
    isMarried?: boolean
}

function introducePerson(person: person): void {
    const { nome, age, pronoum, isMarried } = person
    console.log(`${nome} is ${age} years old and ${pronoum} ${isMarried ? 'is' : 'is not'} married`)
}

const tom: person = {
    nome: nome,
    age: age,
    pronoum: pronoum,
    isMarried: isMarried
}

introducePerson(tom)

const ana = {
    nome: 'Ana',
    age: 25,
    pronoum: 'she'
}

introducePerson(ana)

type people = Array<person>

const gregory: person = {
    nome: 'Gregory',
    age: 18,
    pronoum: 'she',
    isMarried: false
}

const people: people = [
    tom,
    ana,
    gregory
]

introducePerson(people[2])