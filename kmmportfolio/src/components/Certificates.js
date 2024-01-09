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
      <p>
        Discover my certification journey, showcasing expertise from renowned
        institutions like Vaal University of Technology, Cisco Networking
        Academy, IBM, and freeCodeCamp.
        <button onClick={toggleDetails} className="more-info-button">
          {showDetails ? "Simple View" : "Detailed View"}
        </button>
      </p>
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
                <br></br>
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
                <br></br>
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
                <br></br>
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
                <br></br>
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
                  <li>
                    Exploration of various big data storage and processing
                    frameworks (e.g., Hadoop, Spark).
                  </li>
                  <li>
                    Application of machine learning and AI in analyzing large
                    datasets.
                  </li>
                  <li>
                    Examination of real-time data processing and streaming
                    technologies.
                  </li>
                  <li>
                    Implementation of big data solutions for business and
                    industry.
                  </li>
                  <li>
                    Consideration of security and ethical concerns in big data
                    applications.
                  </li>
                  <li>
                    Hands-on experience with big data tools and platforms.
                  </li>
                  <li>
                    Understanding emerging trends and future directions in big
                    data.
                  </li>
                </ul>
                <br></br>
                <h6>Skills Acquired:</h6>
                <ol>
                  <li>
                    Comprehensive Understanding of Big Data: Concepts and
                    technologies.
                  </li>
                  <li>
                    Proficiency in Big Data Frameworks: Hadoop, Spark, etc.
                  </li>
                  <li>Application of Machine Learning in Big Data Analysis.</li>
                  <li>Real-time Data Processing Skills.</li>
                  <li>Implementation of Big Data Solutions.</li>
                  <li>Awareness of Security and Ethics in Big Data.</li>
                  <li>Practical Experience with Big Data Tools.</li>
                  <li>Insight into Future Trends in Big Data.</li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
          <li>
            <h5>Data Analysis with R</h5>
            <p>
              <span>IBM via Coursera</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned:</h6>
                <ul>
                  <li>
                    Introduction to R programming language for data analysis.
                  </li>
                  <li>
                    Data manipulation and cleaning using R packages (e.g.,
                    dplyr, tidyr).
                  </li>
                  <li>Exploratory data analysis (EDA) techniques with R.</li>
                  <li>
                    Statistical analysis and visualization of data using R.
                  </li>
                  <li>
                    Introduction to statistical models and their implementation
                    in R.
                  </li>
                  <li>Hypothesis testing and regression analysis with R.</li>
                  <li>
                    Practical projects or case studies applying data analysis
                    techniques in R.
                  </li>
                  <li>
                    Best practices for reproducible research and reporting with
                    R Markdown.
                  </li>
                </ul>
                <br></br>
                <h6>Skills Acquired:</h6>
                <ol>
                  <li>Proficiency in R Programming for Data Analysis.</li>
                  <li>Data Manipulation and Cleaning using R Packages.</li>
                  <li>Exploratory Data Analysis Techniques with R.</li>
                  <li>Statistical Analysis and Visualization using R.</li>
                  <li>Implementation of Statistical Models in R.</li>
                  <li>Hypothesis Testing and Regression Analysis with R.</li>
                  <li>
                    Application of Data Analysis Techniques in Practical
                    Projects.
                  </li>
                  <li>Reproducible Research and Reporting with R Markdown.</li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
          <li>
            <h5>Introduction to Artificial Intelligence</h5>
            <p>
              <span>IBM via Coursera</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned</h6>
                <p>
                  In this course, I gained comprehensive insight into Artificial
                  Intelligence (AI) and its transformative impact on various
                  industries. I learned about the fundamental concepts of AI,
                  its applications, and its significance in reshaping our lives.
                  Topics covered included:
                </p>
                <ul>
                  <li>Explanation of AI and its wide-ranging applications</li>
                  <li>
                    Understanding of Machine Learning, Deep Learning, and Neural
                    Networks
                  </li>
                  <li>
                    Exploration of ethical concerns and issues surrounding AI
                  </li>
                  <li>
                    Insights and advice from experts on learning and launching a
                    career in AI
                  </li>
                </ul>
                <br></br>
                <h6>Skills Acquired:</h6>
                <ol>
                  <li>Artificial Intelligence (AI)</li>
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
          <li>
            <h5>IT Essentials</h5>
            <p>
              <span>Cisco Networking Academy</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned:</h6>
                <ul>
                  <li>
                    Selecting appropriate computer components for building,
                    repairing, or upgrading personal computers.
                  </li>
                  <li>
                    Explaining proper tool usage and lab safety protocols.
                  </li>
                  <li>
                    Installing components for personal computer assembly,
                    repair, or upgrades.
                  </li>
                  <li>
                    Performing preventive maintenance and troubleshooting on
                    personal computers.
                  </li>
                  <li>Installing Windows operating systems.</li>
                  <li>Managing and maintaining Windows operating systems.</li>
                  <li>
                    Configuring devices for Internet and Cloud service
                    connectivity.
                  </li>
                  <li>
                    Using, configuring, and managing laptops and mobile devices.
                  </li>
                  <li>
                    Configuring, securing, and troubleshooting mobile, OS X, and
                    Linux operating systems.
                  </li>
                  <li>Installing and sharing printers to meet requirements.</li>
                  <li>Implementing basic host, data, and network security.</li>
                  <li>
                    Explaining the roles and responsibilities of IT
                    professionals.
                  </li>
                  <li>
                    Troubleshooting advanced hardware and software problems.
                  </li>
                </ul>

                <h6>Skills Acquired:</h6>
                <ol>
                  <li>
                    Gained proficiency in selecting computer components for
                    assembly, repair, or upgrades.
                  </li>
                  <li>
                    Mastered tool usage and observed lab safety for efficient
                    work practices.
                  </li>
                  <li>
                    Developed expertise in installing personal computer
                    components.
                  </li>
                  <li>
                    Acquired skills in preventive maintenance and
                    troubleshooting.
                  </li>
                  <li>
                    Proficiently installed and managed Windows operating
                    systems.
                  </li>
                  <li>
                    Capable of configuring devices for Internet and Cloud
                    connectivity.
                  </li>
                  <li>
                    Skilled in managing laptops, mobile devices, and various
                    operating systems.
                  </li>
                  <li>
                    Competent in printer installation and sharing as per
                    requirements.
                  </li>
                  <li>
                    Implemented fundamental host, data, and network security
                    measures.
                  </li>
                  <li>
                    Understood roles and responsibilities expected in the IT
                    professional domain.
                  </li>
                  <li>
                    Developed troubleshooting expertise for advanced hardware
                    and software issues.
                  </li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
          <li>
            <h5>
              CCNA Routing and Switching: Routing and Switching Essentials
            </h5>
            <p>
              <span>IBM via Coursera</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned:</h6>
                <ul>
                  <li>
                    Determining router traffic forwarding based on routing table
                    contents.
                  </li>
                  <li>
                    Explaining switching operations in small to medium-sized
                    business networks.
                  </li>
                  <li>
                    Utilizing monitoring tools and network management protocols
                    for troubleshooting data networks.
                  </li>
                  <li>
                    Configuring monitoring tools for small to medium-sized
                    business networks.
                  </li>
                  <li>Configuring initial settings on network devices.</li>
                  <li>Configuring Ethernet switch ports.</li>
                  <li>Implementing VLANs (Virtual Local Area Networks).</li>
                  <li>
                    Implementing static routing and RIPv2 (Routing Information
                    Protocol version 2).
                  </li>
                  <li>
                    Implementing DHCP (Dynamic Host Configuration Protocol) on a
                    router.
                  </li>
                  <li>Implementing network address translation (NAT).</li>
                  <li>
                    Implementing access control lists (ACLs) for traffic
                    filtering.
                  </li>
                </ul>

                <h6>Skills Acquired:</h6>
                <ol>
                  <li>
                    Gained proficiency in routing table-based traffic forwarding
                    on routers.
                  </li>
                  <li>
                    Understood switching operations within small to medium-sized
                    business networks.
                  </li>
                  <li>
                    Mastered the use of monitoring tools and network protocols
                    for troubleshooting.
                  </li>
                  <li>
                    Configured monitoring tools specific to small to
                    medium-sized business networks.
                  </li>
                  <li>
                    Expertise in configuring initial settings on network
                    devices.
                  </li>
                  <li>Capability in configuring Ethernet switch ports.</li>
                  <li>Implemented VLANs effectively.</li>
                  <li>Applied static routing and RIPv2 in network setups.</li>
                  <li>Implemented DHCP functionality on routers.</li>
                  <li>Implemented network address translation (NAT).</li>
                  <li>
                    Competently set up access control lists (ACLs) for traffic
                    filtering.
                  </li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
          <li>
            <h5>Responsive Web Design</h5>
            <p>
              <span>freeCodeCamp</span>
            </p>
            {showDetails && (
              <div className="certificate-details">
                <h6>Summary of what I learned:</h6>
                <ul>
                  <li>HTML and HTML5 essentials for web development.</li>
                  <li>CSS and CSS3 techniques for styling and layout.</li>
                  <li>Responsive web design principles and best practices.</li>
                  <li>Flexbox and Grid for advanced layout options.</li>
                  <li>
                    Applied Accessibility to ensure inclusive web experiences.
                  </li>
                  <li>Optimizing websites for usability and performance.</li>
                  <li>Basic JavaScript and its interaction with web design.</li>
                  <li>Applied Visual Design for enhanced user experiences.</li>
                  <li>
                    Projects demonstrating responsive web design techniques.
                  </li>
                </ul>

                <h6>Skills Acquired:</h6>
                <ol>
                  <li>Mastery of HTML and HTML5 for web development.</li>
                  <li>Proficiency in CSS and CSS3 for styling and layout.</li>
                  <li>
                    Ability to implement responsive web design principles
                    effectively.
                  </li>
                  <li>
                    Expertise in Flexbox and Grid for advanced layout options.
                  </li>
                  <li>
                    Understanding and application of Accessibility standards.
                  </li>
                  <li>
                    Optimization of websites for usability and performance.
                  </li>
                  <li>
                    Basic proficiency in JavaScript and its interaction with web
                    design.
                  </li>
                  <li>
                    Applied Visual Design skills for improved user experiences.
                  </li>
                  <li>
                    Demonstrated ability through projects showcasing responsive
                    web design.
                  </li>
                </ol>
                <br></br>
              </div>
            )}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Certificates;
