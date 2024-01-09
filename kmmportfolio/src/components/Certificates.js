import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Certificates.css";

const Certificates = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div id="certifications" style={{ color: "white" }}>
      <h1>Certificates</h1>
      <button onClick={toggleDetails} className="more-info-button">
        {showDetails ? "Simple View" : "Detailed View"}
      </button>
      <div className="Cert">
        <ol>
          <li>
            <h5>National Diploma in Information Technology</h5>
            <p>
              <span>Vaal University of Technology</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned</h6>
                <ul>
                  <li>
                    Understanding the architecture, components, and
                    functionalities of information systems.
                  </li>
                  <li>
                    Learning various software development methodologies, tools,
                    and practices to build applications.
                  </li>
                  <li>
                    Acquiring foundational knowledge of programming concepts,
                    logic, and problem-solving techniques.
                  </li>
                  <li>
                    Exploring the basics of starting and managing an IT-related
                    business.
                  </li>
                  <li>
                    Studying operating systems, drivers, and system-level
                    software components.
                  </li>
                  <li>
                    Enhancing communication abilities tailored to the IT
                    industry.
                  </li>
                  <li>
                    Understanding accounting principles and practices relevant
                    to IT environments.
                  </li>
                  <li>
                    Exploring legal aspects related to cybersecurity, privacy,
                    and digital rights.
                  </li>
                  <li>
                    Learning legal considerations and regulations pertinent to
                    the IT field.
                  </li>
                </ul>

                <h6>Skills Acquired:</h6>
                <ol>
                  <li>
                    Software Development: Proficiency in using development tools
                    and methodologies.
                  </li>
                  <li>
                    Programming: Understanding programming logic and
                    problem-solving using code.
                  </li>
                  <li>
                    System Analysis: Analyzing and designing information
                    systems.
                  </li>
                  <li>
                    Communication Skills: Tailoring communication for technical
                    and non-technical audiences.
                  </li>
                  <li>
                    Entrepreneurial Mindset: Grasping business aspects relevant
                    to IT ventures.
                  </li>
                  <li>
                    Operating Systems Knowledge: Understanding the functioning
                    of operating systems.
                  </li>
                  <li>
                    Problem-Solving: Applying logical thinking to troubleshoot
                    and debug software.
                  </li>
                  <li>
                    Accounting in IT: Understanding financial aspects and
                    managing accounts in IT setups.
                  </li>
                  <li>
                    Cyberlaw Compliance: Knowledge of legal frameworks governing
                    cybersecurity and digital rights.
                  </li>
                  <li>
                    Team Collaboration: Working effectively in teams for IT
                    project development.
                  </li>
                </ol>
              </div>
            )}
          </li>
          <li>
            <h5>CCNA Routing and Switching: Introduction to Networks</h5>
            <p>
              <span>Cisco Networking Academy</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned:</h6>
                <ul>
                  <li>
                    Explanation of network technologies and their
                    functionalities.
                  </li>
                  <li>
                    Methods for devices to access both local and remote network
                    resources.
                  </li>
                  <li>
                    Description of router hardware and its role in network
                    infrastructure.
                  </li>
                  <li>
                    Operations of switching within small to medium-sized
                    business networks.
                  </li>
                  <li>
                    Designing an IP addressing scheme for connectivity in such
                    networks.
                  </li>
                  <li>Configuration of initial settings on network devices.</li>
                  <li>
                    Implementation of basic network connectivity between
                    devices.
                  </li>
                  <li>
                    Configuration and utilization of monitoring tools for these
                    networks.
                  </li>
                </ul>

                <h6>Skills Acquired:</h6>
                <ol>
                  <li>
                    Understanding Network Technologies: Functionality and
                    application.
                  </li>
                  <li>
                    Accessing Network Resources: Local and remote resource
                    accessibility.
                  </li>
                  <li>
                    Router Hardware Knowledge: Understanding and utilizing
                    router hardware.
                  </li>
                  <li>
                    Switching Operations: Application of switching in business
                    networks.
                  </li>
                  <li>
                    IP Addressing Design: Crafting effective network
                    connectivity via IP addresses.
                  </li>
                  <li>
                    Network Device Configuration: Initial setup and settings on
                    devices.
                  </li>
                  <li>
                    Implementing Network Connectivity: Establishing device
                    connections.
                  </li>
                  <li>
                    Network Monitoring Tools: Configuration and usage for
                    business networks.
                  </li>
                </ol>
              </div>
            )}
          </li>
          <li>
            <h5>Big Data Emerging Technologies</h5>
            <p>
              <span>Coursera</span>
            </p>
            {showDetails && (
  <div className="certificate-details">
    <h6>Summary of what I learned</h6>
    <ul>
      <li>Understanding of big data concepts and technologies.</li>
      <li>Exploration of various big data storage and processing frameworks (e.g., Hadoop, Spark).</li>
      <li>Application of machine learning and AI in analyzing large datasets.</li>
      <li>Examination of real-time data processing and streaming technologies.</li>
      <li>Implementation of big data solutions for business and industry.</li>
      <li>Consideration of security and ethical concerns in big data applications.</li>
      <li>Hands-on experience with big data tools and platforms.</li>
      <li>Understanding emerging trends and future directions in big data.</li>
    </ul>
    
    <h6>Skills Acquired:</h6>
    <ol>
      <li>Comprehensive Understanding of Big Data: Concepts and technologies.</li>
      <li>Proficiency in Big Data Frameworks: Hadoop, Spark, etc.</li>
      <li>Application of Machine Learning in Big Data Analysis.</li>
      <li>Real-time Data Processing Skills.</li>
      <li>Implementation of Big Data Solutions.</li>
      <li>Awareness of Security and Ethics in Big Data.</li>
      <li>Practical Experience with Big Data Tools.</li>
      <li>Insight into Future Trends in Big Data.</li>
    </ol>
  </div>
)}

          </li>
          <li>
            <h5>Data Analysis with R</h5>
            <p>
              <span>IBM via Coursera</span>
            </p>
          </li>
          <li>
            <h5>Introduction to Artificial Intelligence</h5>
            <p>
              <span>IBM via Coursera</span>
            </p>
          </li>
        </ol>

        {showDetails && (
          <div className="certificate-details">
            <h6>Summary of what I learned</h6>
            <p>
              In this course, I gained comprehensive insight into Artificial
              Intelligence (AI) and its transformative impact on various
              industries. I learned about the fundamental concepts of AI, its
              applications, and its significance in reshaping our lives. Topics
              covered included:
            </p>
            <ul>
              <li>Explanation of AI and its wide-ranging applications</li>
              <li>
                Understanding of Machine Learning, Deep Learning, and Neural
                Networks
              </li>
              <li>Exploration of ethical concerns and issues surrounding AI</li>
              <li>
                Insights and advice from experts on learning and launching a
                career in AI
              </li>
            </ul>

            <h6>Skills Acquired:</h6>
            <ol>
              <li>Artificial Intelligence (AI)</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
