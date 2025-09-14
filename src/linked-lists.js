class node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class linkedLists {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  prepend(value) {
    const newNode = new node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  toString() {
    let current = this.head
    let string = ''
    do {
      let objstr = JSON.stringify(current.value)
      string += objstr
      current = current.next
    } while (current)
    let filtered = string.replace(/""/g, ' ) => ( ')
    let secondFiltered = filtered.replace(/"/, '( ')
    let thirdFiltered = secondFiltered.replace(/"([^"]*)$/, ' )')
    return `${thirdFiltered} => null`
  }

  size() {
    let current = this.head
    let index = 0
    do {
      index++
      current = current.next
    } while (current)
    return `length : ${index}`
  }

  getHead() {
    const current = this.head
    return current.value
  }

  tail() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current.value
  }

  at(Index) {
    let current = this.head
    let newIndex = 0
    while (current && newIndex < Index) {
      current = current.next
      newIndex++
    }

    return current ? current.value : null
  }

  pop() {
    if (!this.head) return
    if (!this.head.next) {
      this.head = null
      return
    }

    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
  }

  contains(value) {
    let current = this.head
    while (current.next) {
      current = current.next

      if (current.value == value) {
        return true
      }
    }
    return false
  }

  find(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value == value) {
        return `value is in ${index} index`
      }
      current = current.next
      index++
    }
    return null
  }
}

export { linkedLists }
