import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  };

  formHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <div className="form-view-container">
          <Form formHandler={this.formHandler} />
          <View
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}
          />
        </div>
      </div>
    );
  }
}

export default App;
