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
  editItem = () => {
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
