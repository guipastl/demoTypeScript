import { person } from './types'

export default function introducePerson(person: person): void {
    const { nome, age, pronoum, isMarried } = person
    console.log(`${nome} is ${age} years old and ${pronoum} ${isMarried ? 'is' : 'is not'} married`)
    console.log('')
}
