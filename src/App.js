import React, { Component } from 'react';

import Joke from './Joke';

class App extends Component {
  constructor() {
    super();
    this.getJoke = this.getJoke.bind(this);

    this.getJoke();

    this.state = {
      joke: ''
    }
  }

    getJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(resp => resp.json())
        .then(joke => {
          this.setState({
            joke: joke.value
          });
        });
    }

    render() {
      return (
        <div>
          <Joke joke={this.state.joke}/>
          <button onClick={this.getJoke}>Chuck Me!</button>
        </div>
      );
    }
}

export default App;
