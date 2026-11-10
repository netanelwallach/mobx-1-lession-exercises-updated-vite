import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = () => {
    //your code here
  };
  editItem = () => {
    //your code here
  };
  deleteItem = () => {
    //your code here
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
        <input type="checkbox" value={item.name} />
        <span>
          {item.name} - {item.location}
        </span>
      </div>
    );
  }
}

export default observer(Item);
