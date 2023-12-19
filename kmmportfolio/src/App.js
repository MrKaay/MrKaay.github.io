import './App.css';
import navBar from './components/NavBar';
import NavBar from './components/NavBar'; // Update the component name and path if necessary

function App() {
  return (
    <div className="App">
      <NavBar /> {navBar}
      <div className="main-container">
        <div class="main-header">
        <h1 className="header">Hey, I am Khayelihle</h1>
        <p className="header-cap">
          a Software Network Engineer
        </p>
        </div>
        <div class="about">
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
              can contribute to the ever-evolving landscape of technology. Click here to view qualifications and certificates.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
