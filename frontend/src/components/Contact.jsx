import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
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
