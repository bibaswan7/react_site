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
      background: `url("${item}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div key={index} className="work-item">
        <div className="work-banner" style={style}>
          <div className="banner-container"></div>
          <div className="banner-title">
            <h2>Pursuing Best</h2>
          </div>
        </div>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
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
