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
    });
  }
  checkItem = () => {
    // your code here
  };
  addItem = () => {
    // your code here
  };
  editItem = () => {
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
