import "./Popup.css";

const Popup = ({ firstname, lastname, phone, role, message, closePopup }) => {
  return (
    <div className="popup">
      <div className="overlay">
        <div className="popupWindow">
          <h2>overlay</h2>
          <p>First name: {firstname}</p>
          <p>Last name: {lastname}</p>
          <p>Phone number: {phone}</p>
          <p>Role: {role}</p>
          <p>Message: {message}</p>
          <div className="buttons">
            <button onClick={closePopup}>Button 1</button>
            <button onClick={closePopup}>Button 2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
