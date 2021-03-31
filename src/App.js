import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

// using class because it has state
class App extends Component {
  state = {
    characters: [],
  }
  // this method is to remove a character on the list by using filter
  // the arg being passed is index because of the key value in the list
  removeCharacter = (index) => {
    // we use state here to access the data since were not passing it down
    const { characters } = this.state

    // once we have that data we then filter to remove  by using setState
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    // we need characters to be passed down into table as props
    const { characters } = this.state

    return (
      <div className="App">
        <Table
          // we can call the property whatever we want as long as its not a keyword
          // here its characterData, the data were passing through is the characters variable
          // so that our Table (child component) can have access to the characters
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
