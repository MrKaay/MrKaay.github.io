import React from "react";
import Loader from "react-loaders";
import './About.css';
import '../App.css';
import 'animate.css';
import 'loaders.css';
const About = () => {
    return (<>
<div id='about' className="animate__animated animate__bounce">
        <p>Welcome to my portfolio! I'm a highly motivated Information Technology graduate specializing in Software Development,
          Business Analysis, and Information Systems. Currently, I'm gaining invaluable experience as an Intern in Software Network
          Engineering. This role allows me to immerse myself in the intricate world of networking while providing desktop support,
          enabling me to bridge the gap between software development and practical IT solutions. My skill set encompasses a wide array
          of technical proficiencies, including expertise in Python, SQL, JavaScript, REACT, HTML, CSS, SASS, and the Power
          Platform (Power Apps, Power Automate, etc.). Furthermore, I excel in utilizing BI tools like QlikView and Power BI, harnessing
          statistical modeling techniques, predictive analysis, data mining, and machine learning to derive actionable insights from
          complex datasets.</p>
        <br></br>
        <p>Beyond my academic and professional ventures, I'm driven by a passion for innovation and problem-solving. My background
          in Information Systems allows me to understand the intricate relationship between technology and business needs,
          empowering me to develop solutions that not only meet technical requirements but also align seamlessly with organizational
          objectives. My goal is to leverage my diverse skill set and experiences to contribute meaningfully to a respected organization in
          an entry-level position. I thrive in dynamic environments that challenge me to apply my technical acumen and foster
          continuous growth. Thank you for visiting my portfolio. I'm excited about the opportunities ahead and eager to explore how I
          can contribute to the ever-evolving landscape of technology. <a href="#certifications-navpoint" style={{fontWeight: 'bold', color: '#B4245D'}}>Click here</a> to view qualifications and certificates.</p>
      </div>
      <Loader type="pacman" />
       </>);
    }
    export default About;