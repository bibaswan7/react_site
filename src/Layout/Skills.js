import React, {useState, useEffect} from "react";

export default function Skills() {

    const [skill, setSkill] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3452/skills')
            .then(res => res.json())
            .then(data => setSkill(data))
    }, [])

    const skillsHtml = skill.map((item, index) => {

        let title = item.title
        let capitalized = title.split(' ').map(word => word[0].toUpperCase()+word.slice(1).toLowerCase()).join(' ')

        return(

        <div key={index} className="circular-item">
          <h3>{capitalized}</h3>
          <div className="circular">
            <h2>{item.percent}%</h2>
          </div>
        </div>
        )
})
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <h2>My Skills</h2>

      <div className="circular-container">
        {skillsHtml}
      </div>
    </div>
  );
}
