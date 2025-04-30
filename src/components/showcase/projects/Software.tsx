import React from 'react';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
import psa from '../../../assets/pictures/psa.png';
import portbot from '../../../assets/pictures/projects/psa/portbot.gif';
import lighthouse from '../../../assets/pictures/projects/psa/lighthouse.gif';
import portconnections from '../../../assets/pictures/projects/psa/portconnections.gif';
// @ts-ignore
import supportlocal from '../../../assets/pictures/supportLocal.png';
import spmobile from '../../../assets/pictures/projects/supportlocal/spmobile.png';
// @ts-ignore
import ascenda from '../../../assets/pictures/auth.png';
import dashboard from '../../../assets/pictures/projects/fms/dashboard.png';
import formbuilder from '../../../assets/pictures/projects/fms/formbuilder.png';
import workflowbuilder from '../../../assets/pictures/projects/fms/workflowbuilder.png';
import greenventure1 from '../../../assets/pictures/projects/greenventure/greenventure1.png';
import greenventure2 from '../../../assets/pictures/projects/greenventure/greenventure2.png';
import dashboardUI from '../../../assets/pictures/projects/fyp/dashboardUI.png';
import fypReport from '../../../assets/pictures/projects/fyp/report.pdf';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Here are some personal and school software projects/hackathons I have worked on
                over the last few years.
            </p>
             <br /> 
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Cloud-based Automation for Digitalising Funds Disbursement Processes (FYP)</h2>
                <br />
                <p>
                    A comprehensive solution that addresses critical operational
                    inefficiencies in legal disbursement processing at Anthony Law Corporation (ALC), a law firm
                    specialising in real estate conveyancing. The existing manual workflow, which consumed
                    approximately eight hours daily, posed significant challenges in data accuracy, processing speed,
                    and resource utilisation. Through the implementation of an automated disbursement
                    management system, the team has achieved substantial improvements in operational efficiency
                    while maintaining stringent security and compliance requirements.
                </p>
                <br/>
                <p>
                    The solution's technical architecture combines modern frontend technologies with robust
                    backend services, implementing three key innovations. First, an enterprise-grade on-premise
                    deployment ensures data sovereignty and security compliance. Second, an advanced OCR
                    document processing system successfully handles diverse form formats from five major banks
                    with 99% accuracy. Third, a sophisticated backup and recovery mechanism enables system
                    restoration within five minutes, ensuring business continuity.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={dashboardUI} style={{height: '90%', width: '80%'}} alt="PSA Code Sprint 2023" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Main Dashboard UI
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={fypReport}
                        >
                            <p>
                                <b>[PDF]</b> - Final Year Project Report
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={styles.linebreak}/>
            <div className="text-block">
                <h2>[Champion 🏆] PSA Code Sprint 2023</h2>
                <br />
                <p>
                    My first hackathon experience and first win 🏆 against 100+ other teams! I participated in the PSA Code Sprint 2023
                    and led the winning team ByTheSea in developing OpPORTunity, a next-gen HR platform that enhances PSA’s 
                    HR strategy in 3 key areas: Talent, Experience & Engagement. Leveraging technologies such as LangChain, ChromaDB, 
                    Streamlit, FastAPI, Vue.js, and OpenAI API.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={psa} style={{height: '90%', width: '80%'}} alt="PSA Code Sprint 2023" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Me & my friends at PSA Code Sprint 2023
                        </sub>
                    </p>
                </div>
                <p>
                    OpPORTunity introduces three powerful components: Firstly, PortBOT a chatbot that I developed which 
                    acts as a seamless internal knowledge base, efficiently addressing employee queries. Its intuitive interface 
                    and robust backend architecture ensure swift and accurate responses, enhancing overall productivity. Externally, 
                    it extends its capabilities to potential candidates by providing resume reviews and suggesting potential job role 
                    matches. This unique feature enhances candidate experience and streamlines the hiring process.
                </p>
                <div className="captioned-image">
                    <img src={portbot} style={{marginTop: '15px'}} alt="PortBOT" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> PortBOT in action
                        </sub>
                    </p>
                </div>
                <p>
                    Secondly, LightHouse, a platform which empowers our workforce with personalized development paths and skill profiling. 
                    By harnessing data-driven insights, it enables employees to chart meaningful growth trajectories aligned with 
                    their aspirations and organizational objectives.
                </p>
                <div className="captioned-image">
                    <img src={lighthouse} style={{marginTop: '15px', height: "115%", width: '115%'}} alt="LightHouse" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Lighthouse in action
                        </sub>
                    </p>
                </div>
                <p>
                    Lastly, PortConnections, a platform designed to cultivate a thriving work culture by facilitating connections among 
                    employees across departments. This component encourages participation in various activities, 
                    fostering collaboration and a sense of belonging.
                </p>
                <div className="captioned-image">
                    <img src={portconnections} style={{marginTop: '15px'}} alt="PortConnections" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> PortConnections in action
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/psa-codesprint-2023"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7122807331519696900?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxXggErcFRK2%2F%2BZRXFfuxcg%3D%3D"
                        >
                            <p>
                                <b>[Linkedin]</b> - LinkedIn Post
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={styles.linebreak}/>
            <div className="text-block">
                <h2>Authentication System (Client Project)</h2>
                <br />
                <p>
                    Engineered a highly scalable and secure authentication system for the client company, Ascenda Loyalty with AWS (Cognito,
                    S3, Lambda, CloudFront, Route 53, WAF, API Gateway), and React TypeScript. The solution was designed to handle thousands of
                    concurrent users and to be easily integrated into any client's existing systems.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ascenda} style={{marginTop: '15px'}} alt='ascenda'/>
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 1: </b> Early prototype with POSB as a hypothetical client
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    This project was part of the module IT Solution Architecture which required my team and I to design an authentication solution for a real-world client.
                    It was a fun experience and my first time working with AWS services. I learned a lot about the different services AWS offers
                    and how to design a system that is both scalable and secure. One of the biggest challenges was designing AWS Cognito without
                    the use of the hosted login page, which required the creation of a custom login page and authentication flow that would work
                    with Cognito.
                </p>
                <br />
                <p>
                    Overall it was a success and the client was very happy with the final product. There was a funny incident
                    which led to our domain being flagged as a phishing site posing as a real bank by the Singapore Police Force the day before
                    the client presentation. We took it as a compliment that our site looked so professional that it was mistaken for a real bank's site.
                    In the end, we were able to resolve the issue rather quickly as we designed the system to be easily integrated into any client's
                    existing systems, so a simple change of the domain name and logo was all that was needed.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/authentication-system"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={styles.linebreak}/>
            <div className="text-block">
                <h2>Form Management System (Client Project)</h2>
                <br />
                <p>
                    Developed a Form Management System (FMS) for the client company to digitalize form management processes with Vue.js/Vite, Bootstrap, 
                    SASS, Java Spring Boot, Docker & MySQL, adhering to OOP principles and employing UML, ERD & Use Case Diagrams.
                </p>
                <p>
                    Features include:
                    <ul>
                        <li>
                            Versatile form fields: Nine different field types, including phone number, address, email, and checkboxes, making it easy to collect the data you need.
                        </li>
                        <div className="captioned-image">
                            <img src={formbuilder} style={{marginTop: '15px'}} alt='formbuilder'/>
                            <p style={styles.caption}>
                                <sub>
                                    <b>Figure 1:</b> Drag-and-drop form builder with various form fields
                                </sub>
                            </p>
                        </div>
                        <li>
                            Robust security: Secured with Spring Security authentication, ensuring that only authorized users can access sensitive information.
                        </li>
                        <li>
                            Streamlined workflows: All-in-one dashboard provides easy access for admins and vendors to view, edit, and submit forms in a seamless workflow.
                        </li>
                        <div className="captioned-image">
                            <img src={dashboard} style={{marginTop: '15px'}} alt='dashboard'/>
                            <p style={styles.caption}>
                                <sub>
                                    <b>Figure 2:</b> Dashboard provides an overview of all form and workflow statuses
                                </sub>
                            </p>
                        </div>
                        <li>
                            User-friendly customization: Drag-and-drop workflow and form builders makes customization easy, allowing you to create workflows from created forms quickly.
                        </li>
                        <div className="captioned-image">
                            <img src={workflowbuilder} style={{marginTop: '15px'}} alt='workflowbuilder'/>
                            <p style={styles.caption}>
                                <sub>
                                    <b>Figure 3:</b> Drag-and-drop workflow builder to create and assign form workflows
                                </sub>
                            </p>
                        </div>
                        <li>
                            Efficient validation: Form validation and approval, with the added function of saving partially edited forms, streamlining your workflow.
                        </li>
                        <li>
                            Automated emailing: Sends automatic email notifications for form submissions and reminders, making it easy to keep track of submissions.
                        </li>
                        <li>
                            Automated scoring: For forms enabled with evaluation ratings, the system automatically calculates scores, saving you time and effort.
                        </li>
                        <li>
                            PDF generation: Generate printouts in PDF format, making it easy to share information with others.
                        </li>
                    </ul>
                </p>
                <br />
                <p>
                    This project was done as part of my module on Object Oriented Programming (OOP). It was my first experience using Spring Boot and utilizing 
                    OOP principles to design a system. It was a great learning experience and I learned a lot about how to design a system that is both scalable and secure. 
                    One of the biggest challenges was designing the system to be easily customizable and user-friendly. We wanted to make sure that the client could easily 
                    create and edit forms and workflows. So this project was as much a design challenge as it was a coding challenge.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/leapaheadx"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={styles.linebreak}/>
            <div className="text-block">
                <h2>GreenVenture</h2>
                <br />
                <p>
                    GreenVenture is an innovative mobile application that incentivizes users to recycle non-contaminated materials by providing rewards for their efforts. Inspired by the 
                    successful Healthy 365 app from the Health Promotion Board (HPB), GreenVenture takes a similar approach, allowing users to scan a QR code to earn points for recycling. 
                    This not only motivates users to take action towards a more sustainable future but also provides instant feedback on whether their item is a valid recyclable. 
                    By making recycling a more rewarding and engaging experience, GreenVenture aims to encourage a wider community to participate in environmental efforts and make a 
                    positive impact on the planet.
                </p>
                <br />
                <p>
                    GreenVenture utilizes a scalable microservices-based architecture with React, Express.js, Node.js, MongoDB, and 
                    Docker and integrated a messaging system using AMQP based LavinMQ message broker with nodemailer for user emails.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={greenventure1} style={{marginTop: '15px'}} alt='greenventure1'/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Missions and rewards page
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={greenventure2} style={{marginTop: '15px', height: '90%', width: '60%'}} alt='greenventure2'/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Community Forum and Leaderboards
                        </sub>
                    </p>
                </div>
                <br/>
                <p>
                    This project was part of my Enterprise Solution Development module. This was my first exposure to the concept of microservice architecture and using Docker and 
                    messaging systems.
                </p>
                <br />
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/greenventure-main"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Backend Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/greenventure-frontend"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Frontend Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={styles.linebreak}/>
            <div className="text-block">
                <h2>Support Local</h2>
                <br />
                <p>
                    Support Local is THE one-stop shop for all things local. It compiles all local businesses, and services in an easy-to-use portal and allows them to offer their products and services to customers through the platform.
                    It is a full-stack web application to serve as an eCommerce platform for local businesses, employing HTML, CSS, Bootstrap, Vue.js, Node.js, Express.js, MongoDB.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={supportlocal} style={{marginTop: '15px'}} alt='supportlocal'/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Support Local in action
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={spmobile} style={{marginTop: '15px', height: '90%', width: '60%'}} alt='spmobile'/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Support Local is mobile-responsive with dark and light mode
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    This project was part of my module Web Application Development II and was my first real web development project. The backend was solely developed by me and was what
                    got me my first internship.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/support-local-frontend"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Frontend Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/support-local-backend"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Backend Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://support-local-frontend.onrender.com/"
                        >
                            <p>
                                <b>[Demo]</b> - Project Demo (Might take a while to load due to free hosting)
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
        marginBottom: '15px',   
    },
    linebreak: {
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 15,
    },
};

export default SoftwareProjects;
