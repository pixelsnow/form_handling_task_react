import "./View.css";

const View = ({ firstname, lastname, phone, role, message }) => {
  return (
    <div className="view">
      <h2>This is your input</h2>
      <p>
        First name: <span>{firstname}</span>
      </p>
      <p>
        Last name: <span>{lastname}</span>
      </p>
      <p>
        Phone number: <span>{phone}</span>
      </p>
      <p>
        Role: <span>{role}</span>
      </p>
      <p>
        Message: <span>{message}</span>
      </p>
    </div>
  );
};

export default View;
