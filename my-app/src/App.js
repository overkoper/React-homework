import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    people: [
      {
        id: 1,
        name: "John",
        surname: "Doe",
        phone: "123-456-789",
        isFavorite: false
      },
      {
        id: 2,
        name: "Steve",
        surname: "Stevens",
        phone: "987-654-321",
        isFavorite: true
      }
    ],
    idInputValue: 0,
    nameInputValue: "",
    surnameInputValue: "",
    phoneInputValue: ""
  };

  toggleFavorite = personId => {
    this.setState({
      people: this.state.people.map(person =>
        person.id !== personId
          ? person
          : { ...person, 
            isFavorite: !person.isFavorite }
      )
    });
  };
targetChange = (personId, personName, personSurname, personPhone) => {
  this.setState({
    idInputValue: personId,
    nameInputValue: personName,
    surnameInputValue: personSurname,
    phoneInputValue: personPhone
  })
}
  editPerson = personId => {
    this.setState({
      people: this.state.people.map(person =>
        person.id !== personId
          ? person
          : { id: Date.now(), 
              name: this.state.nameInputValue,
              surname: this.state.surnameInputValue,
              phone: this.state.phoneInputValue, 
            isFavorite: person.isFavorite }
      ),
      nameInputValue: "",
      surnameInputValue: "",
      phoneInputValue: ""
    });
  };

  removePerson = personId => {
    this.setState({
      people: this.state.people.filter(person => person.id !== personId)
    });
  };
  handleNameChange = event => {
    this.setState({
      nameInputValue: event.target.value
    });
  };
  handleSurnameChange = event => {
    this.setState({
      surnameInputValue: event.target.value
    });
  };
  handlePhoneChange = event => {
    this.setState({
      phoneInputValue: event.target.value
    });
  };
  addPerson = () => {
    this.setState({
      people: this.state.people.concat({
        id: Date.now(),
        name: this.state.nameInputValue,
        surname: this.state.surnameInputValue,
        phone: this.state.phoneInputValue,
        isFavorite: false
      }),
      nameInputValue: "",
      surnameInputValue: "",
      phoneInputValue: ""
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label htmlFor="name">name</label>
            <input
              onChange={this.handleNameChange}
              value={this.state.nameInputValue}
              type="text"
              id="name"
            />
            <label htmlFor="surname">surname</label>
            <input
              onChange={this.handleSurnameChange}
              value={this.state.surnameInputValue}
              type="text"
              id="surname"
            />
            <label htmlFor="phone">phone</label>
            <input
              onChange={this.handlePhoneChange}
              value={this.state.phoneInputValue}
              type="phone"
              id="phone"
            />
            <div className="add-btn" onClick={this.addPerson}>
              add
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map(person =>
                person.isFavorite ? (
                  <tr className="favorite" key={person.id} >
                    <td onClick={()=> this.targetChange(person.id, person.name, person.surname, person.phone)}>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.phone}</td>
                    <td className="button-panel">
                      <button
                        className="fav-btn"
                        onClick={() => this.toggleFavorite(person.id)}
                      >
                        Favorite
                      </button >
                      <button 
                        className="fav-btn"
                        onClick={()=>this.editPerson(person.id)}>
                        Edit
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => this.removePerson(person.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={person.id}>
                    <td onClick={()=> this.targetChange(person.id, person.name, person.surname, person.phone)}>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.phone}</td>
                    <td className="button-panel">
                      <button
                        className="fav-btn"
                        onClick={() => this.toggleFavorite(person.id)}
                      >
                        Favorite
                      </button>
                      <button 
                        className="fav-btn"
                        onClick={()=>this.editPerson(person.id)}>
                        Edit
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => this.removePerson(person.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
