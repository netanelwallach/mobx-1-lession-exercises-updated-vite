import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = (e) => {
    //your code here
    this.props.store.checkItem(e.target.value);
  };
  editItem = () => {
    //your code here
    let item = this.props.item;
    let newLocation = prompt("Please enter your location", item.location);
    if (newLocation != null && newLocation != "") {
      this.props.store.editItem(item.name, newLocation);
    }
  };
  deleteItem = () => {
    //your code here
    let item = this.props.item;
    this.props.store.deleteItem(item.name);
  };
  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? "crossed" : ""}>
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
        <input type="checkbox" onClick={this.checkItem} value={item.name} />
        <span>
          {item.name} - {item.location}
        </span>
        <button className="editButton" onClick={this.editItem}>
          Edit
        </button>
        <button className="deleteButton" onClick={this.deleteItem}>
          Delete
        </button>
      </div>
    );
  }
}

export default observer(Item);
