import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var postGraduation = data.postGraduation.map(function (postGraduation) {
      return (
        <div key={postGraduation.school}>
          <h3>{postGraduation.school}</h3>
          <p className="info">
            {postGraduation.degree} <span>&bull;</span>
            <em className="date">{postGraduation.graduated}</em>
          </p>
          <p>{postGraduation.description}</p>
        </div>
      );
    });
    var graduation = data.graduation.map(function (graduation) {
      return (
        <div key={graduation.company}>
          <h3>{graduation.company}</h3>
          <p className="info">
            {graduation.title}
            <span>&bull;</span> <em className="date">{graduation.years}</em>
          </p>
          <p>{graduation.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row postGraduation">
        <div className="three columns header-col">
          <h1>
            <span>post Graduation</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{postGraduation}</div>
          </div>
        </div>
      </div>

      <div className="row graduation">
        <div className="three columns header-col">
          <h1>
            <span>graduation</span>
          </h1>
        </div>

        <div className="nine columns main-col">{graduation}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
