import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const timeCreated = new Date();

    const newItem = {
      time: `${timeCreated.toLocaleString("eng", {
        month: "long",
      })} ${timeCreated.getHours()} : ${timeCreated.getMinutes()}`,
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        Add an Item
        <br />
        <input
          type="textarea"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add +</button>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value} {item.time}
                <button
                  onClick={() => {
                    if (window.confirm("Are u sure?")) {
                      this.deleteItem(item.id);
                    }
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
