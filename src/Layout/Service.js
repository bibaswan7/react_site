import React, {useState, useEffect} from "react";

export default function Service() {

  const [skill, setSkill] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3452/skills')
          .then(res => res.json())
          .then(data => setSkill(data))
  }, [])

  const serviceHtml = skill.map((item,index)=>(
    <div className="item-container">
                <h3>{index+1} - {item.title}</h3>
                <ul>
                  {item.content.map((liItem, index)=> (
                    <li>{liItem}</li>
                  ))}
                </ul>
              </div>
  ))
  
  return (
    <>
      <div className="services-section">
        <h1>Services</h1>
        
        <div className="services-img-info-wrapper">
          <div className="services-info">
            <p>My services</p>
            <h2>Here Are Some of My Skills</h2>
            <div className="services-list service-page-list">
            {serviceHtml}
            </div>
          </div>
          <img
            className="services-page-img"
            src="../../images/services-img-1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
