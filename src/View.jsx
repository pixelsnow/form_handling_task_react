import "./View.css";

const View = (props) => {
  return (
    <div className="View">
      <h2>This is your input</h2>
      <p>
        First name: <span>{props.firstname}</span>
      </p>
      <p>
        Last name: <span>{props.lastname}</span>
      </p>
      <p>
        Phone number: <span>{props.phone}</span>
      </p>
      <p>
        Role: <span>{props.role}</span>
      </p>
      <p>
        Message: <span>{props.message}</span>
      </p>
    </div>
  );
};

export default View;
