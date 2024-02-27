import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./AddArticle.css";
import FormInput from "../components/FormInput";
import axios from "axios";

const AddArticle = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    try {
      await axios.post("http://localhost/5000/auth/signup", data);
      // Redirect to login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Router>
      <h1 className="contact">Contact Us</h1>
      <div className="">
        <div className="form-image container">
          <div className="signup-wrapper">
            <div className="signup-container">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <FormInput type="text" name="username" labelText="Username" />
                </div>
                <FormInput type="email" name="email" labelText="Email" />
                <FormInput type="password" name="password" labelText="Password" />
                <button type="submit" className="button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AddArticle;
