import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";

class App extends Component {
  state = {
    firstname: "1",
    lastname: "2",
    phone: "3",
    role: "4",
    message: "5",
  };

  formHandler = (e) => {
    // this.setState({e.target.name : e.target.value});
  };

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <Form event-handler={this.formHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
