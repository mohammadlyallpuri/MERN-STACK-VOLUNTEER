import React from 'react'


const Qualities = ()=>{
  const  qualities=[
    {
      
      id:1,
      image:"/community.jpg",
      title:"COMMUNITY DEVELOPMENT",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum eaque, animi, maxime voluptates nam culpa nulla, deleniti in a tempora quas aperiam incidunt id veritatis! Alias eaque atque quis. Ducimus sunt molestiae veritatis praesentium! Voluptatem numquam nisi rerum minus?"
    },,
    {
      id:2,
      image:"/transparency.jpg",
      title:"TRANSPARENCY",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum eaque, animi, maxime voluptates nam culpa nulla, deleniti in a tempora quas aperiam incidunt id veritatis! Alias eaque atque quis. Ducimus sunt molestiae veritatis praesentium! Voluptatem numquam nisi rerum minus?"
    },
    {
      id:3,
      image:"/impact.jpg",
      title:"IMPACT MEASUREMENT",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum eaque, animi, maxime voluptates nam culpa nulla, deleniti in a tempora quas aperiam incidunt id veritatis! Alias eaque atque quis. Ducimus sunt molestiae veritatis praesentium! Voluptatem numquam nisi rerum minus?"
    }


  ];
  return(
   <>
   <div className="qualities">
    <h2>OUR QUALITIES</h2>
    <div className="container">
      {qualities.map((element)=>{
        return(
          <div className="card" key={element.id}>
            <div className="img-wrapper">
              <img src={element.image} alt={element.title} />

            </div>
            <div className="content">
              <p className='content'>
                <p className='title' > {element.title}</p>
                <p className='description'>{element.description}</p>
              </p>
            </div>
          </div>
        )
      })}
    </div>
   </div>
   </>
  )

}
export default Qualities