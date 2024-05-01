import React, { useState } from 'react'; // Import useState from React

const Donate = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const[disableBtn,setDisableBtn]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Here you can add the logic to handle the donation submission
  };

  return (
    <section className='donate'>
      <form onSubmit={handleSubmit}>
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
