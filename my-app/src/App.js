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
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
            {this.state.people.map(person => (
              <tr key={person.id}>
              <td>{person.name}</td> 
              <td>{person.surname}</td>
              <td>{person.phone}</td>
              </tr>
            ))}
            </tbody>
            </table>
        </header>
      </div>
    );
  }
}

export default App;
