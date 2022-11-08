const View = (props) => {
  return (
    <div>
      <h2>This is your input</h2>
      <p>First name: {props.firstname}</p>
      <p>Last name: {props.lastname}</p>
      <p>Phone number: {props.phone}</p>
      <p>Role: {props.role}</p>
      <p>Message: {props.message}</p>
    </div>
  );
};

export default View;
