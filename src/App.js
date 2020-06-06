import React from "react";
import "./App.css";
import ListItem from "./ListItem"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.addItem = this.addItem.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const items = this.state.items;
      items.push(newItem);
      this.setState({
        item: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    return (
      <div class="App">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="What need to be done..."
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem items = {this.state.items}></ListItem>
      </div>
    );
  }
}

export default App;
