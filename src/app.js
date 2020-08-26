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

}

render() {
    return (
      <div>
        <Header />

        <ol>
          {this.state.items.map((item) => (
            <Item key={item.id} done={item.done} text={item.text} />
          ))}
        </ol>
      </div>
    );
  }

}

// function App() {
//   return (
//     <div>
//       <Header />

//       <ol>
//         <Item done={false} text={"First Todo"} />
//       </ol>
//     </div>
//   );
// }

export default App;
