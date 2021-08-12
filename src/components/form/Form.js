import "./Form.scss";

const form = () => {
  return (
    <div className="agencyForm">
      <form className="agencyForm__form">
        <div className="agencyForm__form-item">
          <label>Username</label>
          <input type="text" placeholder="Username"></input>
        </div>
        <div className="agencyForm__form-item">
          <label>Full Name</label>
          <input type="text" placeholder="name"></input>
        </div>
        <div className="agencyForm__form-item">
          <label>Email</label>
          <input type="email" placeholder="email"></input>
        </div>
        <div className="agencyForm__form-item">
          <label>Phone</label>
          <input type="text" placeholder="Phone"></input>
        </div>
        <div className="agencyForm__form-item">
          <label>Address</label>
          <input type="text" placeholder="Address"></input>
        </div>
        <div className="agencyForm__form-item">
          <label>Age</label>
          <input type="number" placeholder="Age"></input>
        </div>
        <button className="agencyForm__form-button">Send</button>
      </form>
    </div>
  );
};

export default form;
