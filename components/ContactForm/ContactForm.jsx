import React, { useState } from "react";
import axios from "axios";
import { config } from "dotenv";
import "./ContactForm.css"
config();
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [chekeds, setChekeds] = useState(false);
  const sendEmail = async () => {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: email,
                subject: message,
             
            }),
        });

        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.error('Failed to send email:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
  }
  return (
    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroupPrepend2">
          @
        </span>
        <input
          type="text"
          class="form-control"
          id="validationDefaultUsername"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
          aria-describedby="inputGroupPrepend2"
        />
      </div>
      <textarea
        type="text"
        class="form-control mb-3"
        id="validationDefault03"
        name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="invalidCheck2"
          onChange={(e) => setChekeds(e.target.value)}
          value={chekeds}
        />
        <label class="form-check-label mb-3" for="invalidCheck2">
          Accepter les termes et conditions
        </label>
      </div>
      <div class="col-12 btns">
        <button class="btn btn-primary me-2" type="submit" onClick={sendEmail}>
          Envoyer
        </button>
        <button class="btn btn-danger" type="submit">
          Annuler
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
