import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="joke">
                <span>{this.props.joke}</span>
            </section>
        );
    }
}

export default Joke;
