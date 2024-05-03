import React from 'react';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
// @ts-ignore
import abm from '../../../assets/pictures/projects/abm/model.mov';
// @ts-ignore
import yolo1 from '../../../assets/pictures/projects/yolo/yolo1.gif';
import yolo2 from '../../../assets/pictures/projects/yolo/yolo2.png';

export interface MLAIProjectsProps {}

const MLAIProjects: React.FC<MLAIProjectsProps> = (props) => {

    return (
        <div className="site-page-content">
            <h1>ML & AI</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Here are some personal, school and work ML/AI projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Agent-Based Simulation Approach To Queue Management In Theme Parks</h2>
                <br />
                <p>
                    Amusement parks have always fascinated me since I was a child, and one of the more interesting projects I have worked on
                    was a project that leverages Agent-Based Modeling and Simulation (ABMS) using Netlogo to enhance visitor movement and queue 
                    management in amusement parks. By simulating visitors as autonomous agents, it explores flow and queue dynamics patterns 
                    across various attractions and queueing strategies, such as virtual and express queues. 
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={abm}/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Model simulation of queue management in theme parks
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
                            href="https://github.com/xavierkoo/theme-park-simulation"
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
                            href="https://towardsdev.com/an-agent-based-simulation-approach-to-queue-management-in-theme-parks-abba87957697"
                        >
                            <p>
                                <b>[Medium]</b> - Blog Post
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>License Plate Detection and Recognition</h2>
                <br />
                <p>
                    License Plate Detection and Recognition Tool built upon YOLOv4/YOLOv7 for license plate detection and PaddleOCR for license plate character recognition. It allows the 
                    processing of images and videos to accurately detect license plates and extract their characters, enabling a variety of applications such as traffic monitoring, 
                    parking management, and law enforcement.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={yolo1} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Early trial version with YOLOv4
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={yolo2} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Testing out YOLOv7 with own dataset
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    This was my first foray into computer vision and deep learning, and it was a great learning experience. I learned how to train a model from scratch,
                    how to preprocess data, and how to evaluate the model's performance. I also learned how to use PaddleOCR for text recognition, which was a fun experience.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/computer_vision_anpr_alpr"
                        >
                            <p>
                                <b>[GitHub]</b> - Project Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Facebook Humans or Robots</h2>
                <br />
                <p>
                    Kaggle Competition to determine if auction bids are made by humans or robots as part of the machine learning course I took
                    at Heicoders Academy. This was my first time dabbling in machine learning and I learned a lot about data preprocessing, feature
                    engineering, and model evaluation. I also learned how to use various machine learning algorithms and techniques to solve classification
                    problems.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/facebook-human-or-robots-kaggle"
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
                            href="https://www.kaggle.com/competitions/ai200-dec-2021-human-or-bot/overviewt"
                        >
                            <p>
                                <b>[Kaggle]</b> - Competition Page
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
};

export default MLAIProjects;
