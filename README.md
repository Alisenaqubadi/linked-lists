# Linked Lists

## Overview
This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum. It demonstrates the implementation of a **Linked List** data structure in JavaScript.

## Features
- **Node Class**: Represents individual elements in the linked list.
- **LinkedLists Class**: Provides various methods to manipulate the linked list, such as:
  - `append(value)`: Adds a new node to the end of the list.
  - `prepend(value)`: Adds a new node to the beginning of the list.
  - `toString()`: Converts the linked list into a string representation.
  - `size()`: Returns the size of the linked list.
  - `getHead()`: Retrieves the value of the head node.
  - `tail()`: Retrieves the value of the tail node.
  - `at(index)`: Retrieves the value at a specific index.
  - `pop()`: Removes the last node from the list.
  - `contains(value)`: Checks if a value exists in the list.
  - `find(value)`: Finds the index of a specific value.

## Usage
The project includes a `main.js` file to demonstrate the functionality of the linked list. Below is an example of how the linked list is used:

```javascript
import { linkedLists } from './linked-lists.js';

const list = new linkedLists();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.prepend('turtle');
console.log(list.getHead());
console.log(list.tail());
console.log(list.size());
console.log(list.at(0));
console.log(list.contains('snake'));
console.log(list.find('snake'));
console.log(list.toString());
```

## Tools Used
- **JavaScript**: The programming language used to implement the linked list.
- **Node.js**: For running the JavaScript code.

## Fancy Icons
✨🐢🐕🐈🐦🐹🐍✨

Enjoy exploring the linked list implementation!
