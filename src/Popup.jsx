import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="Popup">
      <div className="overlay">
        <div className="popupWindow">
          <h2>overlay</h2>
          <p>First name: {props.firstname}</p>
          <p>Last name: {props.lastname}</p>
          <p>Phone number: {props.phone}</p>
          <p>Role: {props.role}</p>
          <p>Message: {props.message}</p>
          <div className="buttons">
            <button onClick={props.closePopup}>Button 1</button>
            <button onClick={props.closePopup}>Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
