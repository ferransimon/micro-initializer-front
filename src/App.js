import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from 'react-autocomplete';
import TagList from './components/TagList'


class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            tags: [],
        }
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Microservices Initializer</h1>
            </header>
            <div className="App-intro">
              <h2>Dependencies</h2>
                <Autocomplete
                    value={this.state.value}
                    inputProps={{ id: 'states-autocomplete' }}
                    wrapperStyle={{ position: 'relative', display: 'inline-block', width: '100%', margin: '20px' }}
                    items={[
                        { abbr: 'AL', name: 'Alabama' },
                        { abbr: 'AK', name: 'Alaska' },
                        { abbr: 'AZ', name: 'Arizona' },
                        { abbr: 'AR', name: 'Arkansas' },
                        { abbr: 'CA', name: 'California' },
                        { abbr: 'CO', name: 'Colorado' },
                        { abbr: 'CT', name: 'Connecticut' },
                        { abbr: 'DE', name: 'Delaware' },
                        { abbr: 'FL', name: 'Florida' },
                        { abbr: 'GA', name: 'Georgia' },
                        { abbr: 'HI', name: 'Hawaii' }
                    ]}
                    getItemValue={(item) => item.name}
                    shouldItemRender={(item, value) => {
                        var isAdded = this.state.tags.find(element => element.name === item.name) === undefined;
                        return isAdded && item.name.toLowerCase().startsWith(value.toLowerCase())
                    }}
                    onChange={(event, value) => this.setState({ value })}
                    onSelect={value => {
                        this.setState({
                            value: '',
                            tags : this.state.tags.concat([{id: this.state.tags.length + 1 , name: value}])
                            })
                        }
                    }
                    renderInput={props => {
                        return <input {...props} className="App-form-control"/>
                    }}
                    renderMenu={(items, value, style) => {
                        return <div style={{ ...style}} className="App-form-menu" children={items}/>
                    }}
                    renderItem={(item, isHighlighted) =>
                        <div className="App-suggestion" style={{ background: isHighlighted ? '#0097cf' : 'white' }}
                        key={item.abbr}>
                            <strong>{item.name}</strong><br/>
                            <small>{item.abbr}</small>
                        </div>
                    }
                />
                <TagList tags={this.state.tags}/>
            </div>
          </div>
        );
    }
}

export default App;
