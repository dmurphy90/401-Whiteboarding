'use strict';

const Node = require('./node.js');

class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertHead(val) { 
    if (!val) return null;
    let nd = new Node(val);
    nd.next = this.head;
    this.head = nd;
    this.size++;
    return this;
  }

  insertEnd(val) { 
    if (!val) return null;
    let nd = new Node(val);
    if(!this.head) {
      this.head = nd;
      this.size++;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    this.size++;
    return this;
  }

  reverseSLL() { 
    let current, next, prev;
    current = this.head;
    next = null;
    prev = null;
    this.head = null;

    while (!this.head) {
      if (current.next) {
        next = current.next;
      } else {
        next = null;
      }

      if (prev) {
        current.next = prev;
      } else {
        current.next = null;
      }

      prev = current;

      if (next) {
        current = next;
      } else {
        this.head = current;
      }
    }

    return this;
  }

  removeSLL(index) { 
    if(!index || typeof index !== 'number') return null;
    if(index === 1) {
      this.head = this.head.next;
      return this;
    }
    let current = this.head, prev;
    for(var itr = 1; itr <= index; itr++) {
      if (itr === index) {
        if (current.next) {
          prev.next = current.next;
        } else {
          prev.next = null;
        }
        return this;
      }
      prev = current;
      current = current.next;
    }
  }
}

module.exports = SLL;