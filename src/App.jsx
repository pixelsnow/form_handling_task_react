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
    e.preventDefault();
    this.setState({ showPopup: true });
    e.target.reset();
  };

  closePopup = () => {
    this.setState({ showPopup: false });
    this.setState({ firstname: "" });
    this.setState({ lastname: "" });
    this.setState({ phone: "" });
    this.setState({ role: "" });
    this.setState({ message: "" });
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
          {this.state.showPopup && (
            <Popup
              closePopup={this.closePopup}
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              phone={this.state.phone}
              role={this.state.role}
              message={this.state.message}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
