import React, { useState } from "react";
const ContactContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function postData(url = "https://api.joe.sputh.me/submit", data = {}) {
    setStatus("submitting");
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      const response = await fetch(url, {
        method: "POST",

        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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
      .then((data) => {
        console.log("Form submitted successfully", data);
      })
      .catch((error) => {
        console.error("Form submission failed", error);
      });
  };

  return (
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

      <button onClick={handleSubmit}>Submit</button>

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
