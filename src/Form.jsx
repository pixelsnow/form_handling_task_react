import "./Form.css";

const Form = ({ formHandler, submitHandler }) => {
  /* const submitForm = () => {
    currId++;
    axios.post("http://localhost:3001/notes", {
      id: currId,
      firstname: "Jane",
      lastname: "River",
      phone: "34087560163",
      role: "teacher",
      message: "some really important message",
    });
  }; */

  return (
    <div className="form-container">
      <h2>Add your note</h2>
      <form onChange={formHandler} onSubmit={submitHandler}>
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" name="firstname" />
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" name="lastname" />
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="role">Select role</label>
        <select name="role" id="role" defaultValue="empty">
          <option disabled value="empty">
            Select a role
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
