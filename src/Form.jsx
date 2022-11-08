import "./Form.css";

const Form = (props) => {
  return (
    <div className="form-container">
      <h2>Form</h2>
      <form onChange={props.formHandler} onSubmit={props.submitHandler}>
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" name="firstname" />
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" name="lastname" />
        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" name="phone" />
        <label htmlFor="role">Select role</label>
        <select name="role" id="role">
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
