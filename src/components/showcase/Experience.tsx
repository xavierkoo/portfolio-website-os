import React from 'react';
import ResumeDownload from './ResumeDownload';
import cypress from "../../assets/pictures/cypress-icon.webp";

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>PSA Singapore</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.singaporepsa.com/'}
                        >
                            <h4>www.singaporepsa.com/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>May 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Ongoing Internship
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            &lt;Work in Progress&gt;
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Singapore Management University</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://computing.smu.edu.sg/'}
                        >
                            <h4>www.computing.smu.edu.sg/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Teaching Assistant</h3>
                        <b>
                            <p>Jan 2024 - May 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Assisted in the teaching of the following modules:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            CS301 - IT Solution Architecture (AY23/24 Sem 2, under Prof. Ouh Eng Lieh)
                        </p>
                    </li>
                    <li>
                        <p>
                            IS213 - Enterprise Solution Development (AY23/24 Sem 2, under Prof. Jiang Lingxiao)
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted and graded in-class exercises along with providing consultation to students.
                        </p>
                    </li>
                </ul>
                <div style={styles.i}>
                    <i className='devicon-java-plain colored' title='Java' style={{ margin: '5px' }}></i>
                    <i className='devicon-docker-plain colored' title='Docker' style={{ margin: '5px' }}></i>
                    <i className="devicon-amazonwebservices-original colored" title='AWS' style={{ margin: '5px' }}></i>
                    <i className="devicon-flask-original" title='Flask' style={{ margin: '5px' }}></i>
                </div>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Asterisk Technologies</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Aug 2023 - Jan 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Converted from an Intern to a Software Engineer on contract basis due to exceptional performance.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Deployed an internal remote device monitoring tool using React and Express + Node, decreasing error notification time by 100%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Spearheaded the software rewrite of a visitor management system for a major client using Flutter, Riverpod and SQLite.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed further enhancements and internal tools for the hospital's facilities management system.
                        </p>
                    </li>
                </ul>
                <div style={styles.i}>
                    <i className="devicon-flutter-plain colored" title="Flutter" style={{ margin: '5px' }}></i>
                    <i className="devicon-dart-plain colored" title="Dart" style={{ margin: '5px' }}></i>
                    <i className="devicon-react-original colored" title="React.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-express-original" title="Express.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-nodejs-plain colored" title="Node.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-sqlite-plain colored" title="SQLite" style={{ margin: '5px' }}></i>
                </div>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Asterisk Technologies</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer & Machine Learning Intern</h3>
                        <b>
                            <p>Feb 2023 - Aug 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Successfully completed a full client project from conceptualization to deployment independently with minimal supervision. Embarked on a new project
                    to develop a license plate detection and character recognition tool.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected independently an organization wide facilities management system (FMS), enabling a major private hospital client to oversee thousands 
                            of bookings, and streamlining admin for 1200+ employees with 0% booking error rate.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engineered automated facility access by integrating tablets as interactive facility displays, seamlessly linked to the FMS and facility door relays, 
                            allowing automated user access via QR Code/TOTP, achieving a 100% reduction in manual facility access requests by users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Spearheaded front-end development with React, Bootstrap, and SASS, building 12 reusable components and 13 dynamic and mobile-responsive web pages.
                            Pioneered a one-click CSV data export feature, enhancing user data accessibility.
                        </p>
                    </li>
                    <li>
                        <p>
                            Constructed backend with Express and Node.js, creating 50 RESTful APIs including email integration with SendGrid API. Implemented MongoDB with a 
                            unified database architecture for brand switching, reducing development time for client deployments. User authentication and secure facility access 
                            accomplished with JWTs and QR/TOTP, generated securely with Network Time Protocol.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enforced code styling and quality via ESLint. Wrote comprehensive unit, integration, and end-to-end tests with Jest, react-testing- library, 
                            and Cypress. Devised basic CI/CD pipeline for automated build, test, and deployment. Authored wiki for documentation of system and managed new 
                            updates and bug fixes on live system via GitHub releases.
                        </p>
                    </li>
                    <li>
                        <p>
                            Employed Electron.js to package React based interactive facility display app for seamless installation on tablets. Utilized PM2 for a resilient, 
                            automatic local server with 99% uptime, ensuring continuous facility operations and security with no disruptions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed a license plate detection and character recognition tool using YOLOv4 and Darknet, subsequently transitioning to YOLOv7. Integrated 
                            PaddleOCR for robust Optical Character Recognition. Trained the model using Region Based Convolutional Neural Networks on annotated data labelled 
                            with LabelImg. Achieved a mean Average Precision of 90%+.
                        </p>
                    </li>
                </ul>
                <div style={styles.i}>
                    <i className="devicon-bootstrap-plain colored" title="Bootstrap" style={{ margin: '5px' }}></i>
                    <i className="devicon-sass-plain colored" title="Sass" style={{ margin: '5px' }}></i>
                    <i className="devicon-react-original colored" title="React.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-express-original" title="Express.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-nodejs-plain colored" title="Node.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-electron-original colored" title="Electron.js" style={{ margin: '5px' }}></i>
                    <i className="devicon-jest-plain colored" title="Jest" style={{ margin: '5px' }}></i>
                    <img id='cypress' src={cypress} style={{height: '40px', width: '40px', margin: '5px'}} title='Cypress' alt=''/>
                    <i className="devicon-eslint-plain colored" title="ESLint" style={{ margin: '5px' }}></i>
                    <i className="devicon-mongodb-plain colored" title="MongoDB" style={{ margin: '5px' }}></i>
                    <i className="devicon-opencv-plain colored" title="OpenCV" style={{ margin: '5px' }}></i>
                    <i className='devicon-python-plain colored' title='Python' style={{ margin: '5px' }}></i>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    i: {
        fontSize: 48,
        margin: 8,
    },
};

export default Experience;
