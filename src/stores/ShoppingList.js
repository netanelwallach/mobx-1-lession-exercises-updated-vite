/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;
    // your code here
    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
      addItem: action,
      editItem: action,
      deleteItem: action,
    });
  }
  checkItem = (name) => {
    // your code here
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
  addItem = (newItem) => {
    // your code here
    let item = new Item(newItem);
    this.list.push(item);
  };
  editItem = (name, location) => {
    // your code here
    let item = this.list.find((i) => i.name === name);
    if (item) {
      item.location = location;
    }
  };
  deleteItem = (name) => {
    // your code here
    let index = this.list.findIndex((i) => i.name === name);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
}
