import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <header>
          <form id="todo-form">
            <input type="text" placeholder="What need to be done..." />
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
