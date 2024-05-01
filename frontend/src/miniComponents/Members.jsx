import React from 'react';

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "John",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Doe",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Jane",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Doe",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "John",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jane",
    },
  ];

  return (
    <section className='members'>
      <div className='container'>
        <div className='header_section'>
          <h2>MEMBERS</h2>
          <p>
            {/* Replace this with your desired content */}
            This is a placeholder paragraph. You can replace it with a brief
            description of your members or a welcoming message.
          </p>
        </div>
        <div className="members_container">
          {members.map((member) => (
            <div className='card' key={member.id}>
              <img src={member.image} alt={member.title} />
              <h3>{member.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
