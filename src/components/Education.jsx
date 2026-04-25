import React, { useState } from "react";
import "./Education.css";

import bitMesraImg from "../assets/mypic1.jpeg";
import schoolImg from "../assets/avatar.png";

const educationData = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    place: "BIT Mesra",
    year: "2023 – 2027",
    desc: "Focused on Operating Systems, DSA, and Web Development.",
    image: bitMesraImg,
    extra: "Participated in coding competitions, workshops, and open-source projects."
  },
  {
    id: 2,
    title: "Higher Secondary School",
    place: "Your School Name",
    year: "2020 – 2022",
    desc: "Science stream with Mathematics and Computer Science.",
    image: schoolImg,
    extra: "Active in science fairs, math competitions, and school clubs."
  }
];

function Education() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="section-dark">
      <h2>Education</h2>

      <div className="grid">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="card"
            onClick={() =>
              setSelectedCard(selectedCard === edu.id ? null : edu.id)
            }
          >
            <h3>{edu.title}</h3>
            <h4>{edu.place}</h4>
            <span>{edu.year}</span>
            <p>{edu.desc}</p>

            {selectedCard === edu.id && (
              <div className="edu-extra">
                <img src={edu.image} alt="" className="edu-image" />
                <p>{edu.extra}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;