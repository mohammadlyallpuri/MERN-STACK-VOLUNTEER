import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/v1/message/send",
      { name, phone, message },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      })
      .then((res) => {
        setName("");
        setPhone("");
        setMessage("");
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <section className='contact'>
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT US</h2>
            <div>
              <input type="text" value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input type="tel" value={phone} placeholder='Your Phone' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <textarea value={message} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
