import React, { Component } from "react";
import AddForm from "./AddForm";
import Table from "./Table";

class App extends Component {

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti')
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          piatti: res
        })
      })
  }

  state = { 
    piatti: []
  };

  render() {
    const title = "Gestione Menu";

    return (
      <div>
        <h1>{title}</h1>
        <Table piatti={this.state.piatti} removePiatto={this.removePiatto} editPiatto={this.editPiatto}/>
        <AddForm addPiatto={this.addPiatto}/>
      </div>
    );
  }

  removePiatto = (index) => {
    this.setState({
      ...this.state,
      piatti: this.state.piatti.filter((e, i) => i !== index)
    });
  }

  addPiatto = (piatto) => {
    this.setState({
      ...this.state,
      piatti: [...this.state.piatti, piatto]
    })
  }

  editPiatto = (index, piatto) => {
    this.setState({
        ...this.state,
        piatti: this.state.piatti.map((e, i) => i === index ? piatto : e)
    })
}
}

export default App;
