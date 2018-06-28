import React, { Component } from 'react';

class Tag extends Component {
    render () {
        return (
            <span className="App-tag">
                {this.props.name} <span className="App-close">×</span>
            </span>
        );
    }
}

export default Tag;