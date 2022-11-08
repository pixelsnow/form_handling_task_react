const Form = () => {
  return (
    <div className="form-container">
      <h2>Form</h2>
      <form>
        <div>
          <label htmlFor="firstname">First name</label>
          <input type="text" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input type="text" id="lastname" />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" />
        </div>
        <div>
          <label htmlFor="role">Select role</label>
          <select name="role" id="role">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
