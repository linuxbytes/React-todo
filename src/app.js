import React from "react";

import Header from "./Header.js";
import Item from "./Item.js";

import "./App.css";

class App extends React.Component {

constructor(props){

 super(props);
    this.state = {
      items: [
        {
          text: "First Todo",
          done: false,
        },
        {
          text: "Second Todo",
          done: true,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
}

// existing handlers omitted

toggleTodo(index) {
  let items = this.state.items.slice();

  let item = items[index];
  item.done = !item.done;

  this.setState({
    items: items,
  });
}
  // handleChange(event) {
  //   this.setState({ newItemValue: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   let items = this.state.items.slice();

  //   items.push({
  //     text: this.state.newItemValue,
  //     done: false,
  //   });

  //   this.setState({
  //     newItemValue: "",
  //     items: items,
  //   });
  // }

render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newItemValue}
            placeholder="New todo..."
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Item" />
        </form>
        <ol>
          {this.state.items.map((item) => (
            <Item key={item.id} done={item.done} text={item.text} />
          ))}
        </ol>
      </div>
    );
  }

}

export default App;
