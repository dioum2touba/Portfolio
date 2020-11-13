import React from 'react';
import './Skill.css';
import SkillCompetences from './details/SkillCompetences';

const Skill = (props) => {
  return (
    <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{props.specialty}</span>
            <h2 className="colorlib-heading animate-box">{props.skills}</h2>
          </div>
        </div>
        
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <p>{props.description}</p>
          </div>
        </div>
       
        <SkillCompetences rows={props.rows} />
      </div>
    </section>
  );
};

export default Skill;
