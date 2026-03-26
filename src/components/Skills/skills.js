import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          An Web developer proficient in ReactJS, PHP, and Bootstrap 5.2+,
          with hands-on experience in web design using HTML, CSS, and
          JavaScript. Strong foundation in creating dynamic, responsive, and
          visually appealing web applications.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>  
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>WebDesign</h2>  
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>AppDesign</h2>  
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
      </section>
    );
}

export default Skills;