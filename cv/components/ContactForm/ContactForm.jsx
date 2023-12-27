import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '', // Use 'email' instead of 'recipient'
    message: '',
    checked: false, // Use a boolean to track checkbox state
  });
  const emailApi = process.env.NEXT_PUBLIC_EMAIL_API;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 
   const rest = () => {
    setFormData('');
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API route
      const response = await axios.post(
        emailApi,
        formData
      );

      // Handle success
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error sending email:', error);
    }
  };

  return (
    <form >
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroupPrepend2">
          @
        </span>
        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          name="email"
          required
          onChange={handleChange}
          defaultValue={formData.email}
          placeholder="E-mail"
          aria-describedby="inputGroupPrepend2"
        />
      </div>
      <textarea
        type="text"
        className="form-control mb-3"
        id="validationDefault03"
        name="message"
        defaultValue={formData.message}
        placeholder="Message"
        onChange={handleChange}
      ></textarea>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="invalidCheck2"
          name="checked"
          onChange={handleCheckboxChange}
          defaultValue={formData.checked}
          checked={formData.checked}
        />
        <label className="form-check-label mb-3" htmlFor="invalidCheck2">
          Accepter les termes et conditions
        </label>
      </div>
      <div className="col-12 btns">
        <button className="btn btn-primary me-2" type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
        <button className="btn btn-danger" type="reset" onClick={rest}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
