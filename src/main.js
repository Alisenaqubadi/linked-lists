import { linkedLists } from './linked-lists.js'

const list = new linkedLists()

list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.append('snake')
list.prepend('turtle')
console.log(list.getHead())
console.log(list.tail())
console.log(list.size())
console.log(list.at(0))
console.log(list.contains('snake'))
console.log(list.find('snake'))
console.log(list.toString())
