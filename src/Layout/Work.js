import React, { useEffect, useState } from "react";

export default function Work({ count, customClass }) {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3452/images")
      .then((res) => res.json())
      .then((data) => setImageFiles(data.work.slice(0, count)));
  }, []);

  const workHtml = imageFiles.map((item, index) => {
    let style = {
      background: `url("${item.imageUrl}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div key={index} className="work-item">
        <div className="work-banner" style={style}>
          <div className="banner-container"></div>
          <div className="banner-title">
            <h2>{item.title}</h2>
          </div>
        </div>
        <p>
          {item.description}
        </p>
        <div className="view-detail">
          <a href="#">View details</a>
        </div>
      </div>
    );
  });

  return (
    <div className="projects-page">
      <div className="section-works">
        {customClass ? <h1 className={customClass}>Works</h1>: <h1>Works</h1>}
        <h3>Portfolio</h3>
        <h2>Done Projects</h2>
        {workHtml}
      </div>
    </div>
  );
}
