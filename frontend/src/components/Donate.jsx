import React, { useState } from 'react';
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [disableBtn, setDisableBtn] = useState(false); // Initialize with false

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setDisableBtn(true);
      await axios.post(
        "http://localhost:4000/api/v1/checkout",
        { name, amount, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      ).then(res => {
        console.log(res.data);
        window.location.href=res.data.result.url;

      });
    } catch (error) {
      setDisableBtn(false);
      console.error(error);
    }
  };

  return (
    <section className='donate'>
      <form onSubmit={handleCheckout}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <label>Show Your Love For Poor</label>
        <input 
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Enter Donation Amount (USD)'
        />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your Email'
        />
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Your Name'
        />
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Leave a Message (optional)'
        />
        {/* Use curly braces for JavaScript expressions */}
        <button type='submit' className='btn' disabled={disableBtn}>Donate {amount ? `$${amount}` : '$0'}</button>
      </form>
    </section>
  );
};

export default Donate;
