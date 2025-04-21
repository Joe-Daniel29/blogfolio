import React, { useState } from "react";
const ContactContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); 

  async function postData(url = "https://api.joe.sputh.me/submit", data = {}) {
    setStatus("submitting");
    console.log("Sending data:", data); 

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    
      if (!response.ok) {
        console.log("Error")
        
      }

      const result = await response.json(); 
      setStatus("success");
      console.log("Success:", result);
      setName("");
      setEmail("");
      setMessage("");
      return result;

    } catch (error) {
      setStatus("error");
      console.error("Error posting data:", error);
      throw error;
    } finally {
       if (status === "submitting") {
       }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus("validation_error");
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    postData("https://api.joe.sputh.me/submit", formData)
      .then(data => {
        console.log("Form submitted successfully", data);
      })
      .catch(error => {
         console.error("Form submission failed", error);
      });
  };

  return (
    <div className="contactContainer">
      <div className="contactheader">
        <input
          className="name"
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input
          className="email"
          type="email" 
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <textarea
        id="myTextarea"
        name="message"
        rows="3"
        cols="50"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button
         onClick={handleSubmit}
         disabled={status === 'submitting'}
      >
         {status === 'submitting' ? 'Submitting...' : 'Submit'}
      </button>

      {status === "success" && (
        <p style={{ color: "green" }}>Message sent successfully!</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>An error occurred. Please try again.</p>
      )}
      {status === "validation_error" && (
        <p style={{ color: "orange" }}>Please fill in all fields.</p>
      )}
    </div>
  );
};

export default ContactContainer;
