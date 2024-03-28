import { person, people } from './types'

import introducePerson from './introducePerson'

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

const gregory: person = {
    nome: 'Gregory',
    age: 18,
    pronoum: 'she',
    isMarried: false
}

const pessoas: people = [
    tom,
    ana,
    gregory
]

introducePerson(pessoas[2])

enum dbActions {
    create,
    read,
    update,
    delete
}

function runDBAction(action: dbActions) {
    switch(action) {
        case 0:
            console.log('Creating...')
            break
        case 1:
            console.log('Reading...')
            break
        case 2:
            console.log('Updating...')
            break
        case 3:
            console.log('Deleting...')
            break
        default:
            console.log('Ooops, invalid database action!')
            break
    }
}

runDBAction(0)
runDBAction(1)
runDBAction(2)
runDBAction(3)
runDBAction(5)

console.log('')

runDBAction(dbActions.update)
