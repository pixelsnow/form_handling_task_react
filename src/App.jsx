import { Component } from "react";
import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    note: { firstname: "", lastname: "", phone: "", role: "", message: "" },
    showPopup: false,
  };

  formHandler = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ showPopup: true });
    e.target.reset();
  };

  closePopup = () => {
    this.setState({ showPopup: false });
    this.setState({
      note: { firstname: "", lastname: "", phone: "", role: "", message: "" },
    });
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
          <View {...this.state.note} />
          {this.state.showPopup && (
            <Popup closePopup={this.closePopup} {...this.state.note} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
