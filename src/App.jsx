import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
    showPopup: false,
  };

  formHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    console.log("hei");
    e.preventDefault();
    this.setState({ showPopup: true });
  };

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <div className="form-view-container">
          <Form
            formHandler={this.formHandler}
            submitHandler={this.submitForm}
          />
          <View
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}
          />
          {this.state.showPopup && <Popup />}
        </div>
      </div>
    );
  }
}

export default App;
