import React from 'react';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
// @ts-ignore
import abm from '../../../assets/pictures/projects/abm/model.mov';
// @ts-ignore
import yolo1 from '../../../assets/pictures/projects/yolo/yolo1.gif';
import yolo2 from '../../../assets/pictures/projects/yolo/yolo2.png';
import task1 from '../../../assets/pictures/projects/genai/task1.png';
import task1pic from '../../../assets/pictures/projects/genai/task1pic.png';
import task2abl from '../../../assets/pictures/projects/genai/task2abl.png';
import task2pic from '../../../assets/pictures/projects/genai/task2pic.png';

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
                <h2>CycleGAN for Image-to-Image Translation: Implementation, Optimization & Novel Applications</h2>
                <br />
                <p>
                    Image-to-image translation using Generative Adversarial Networks (GANs) has
                    witnessed rapid advancements, with CycleGAN emerging as a key framework for
                    unsupervised domain transfer. This project explores and enhances CycleGAN through
                    two distinct tasks: (1) photorealistic face-to-cartoon translation and (2) young-to-old facial
                    age progression. To address limitations in vanilla CycleGAN, such as poor structural
                    preservation, training instability, and lack of global context, architectural
                    innovations were introduced, including dual self-attention modules, perceptual VGG-based loss functions,
                    edge-aware enhancements, and spectral normalization in discriminators. Additionally,
                    training strategies like warm-up cosine annealing, AMP for mixed-precision training,
                    and gradient clipping for improved stability were adopted. 
                </p>
                <br />
                <p>
                    Quantitative and qualitative evaluations
                    demonstrate significant improvements across both tasks. For Task 1, the enhanced model
                    achieved lower GMS scores—indicating higher visual realism—compared to the vanilla
                    CycleGAN, particularly in the Real-to-Cartoon direction. For Task 2, ablation studies
                    show that the integration of VGG loss and self-attention yields the most visually convincing
                    and age-accurate transformations, with an average age gap reduction from 20.73 to 7.54.
                    Experiments validate that these enhancements not only improve visual fidelity but also
                    align closely with semantic expectations of aging and style translation, pushing the
                    boundaries of what unsupervised translation frameworks can achieve in facial domains.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={task1} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Task 1 Enhanced and Vanilla CycleGAN Model Results
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={task1pic} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Task 1 Photorealistic/ Cartoon Domain Comparison
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={task2abl} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Task 2 Ablation Comparison
                        </sub>
                    </p>
                </div>
                <div className="captioned-image">
                    <img src={task2pic} style={styles.video} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> Task 2 Comparison of Qualitative Results
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
                            href="https://github.com/xavierkoo/cycleGAN"
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
                <h2>Job Recommender and Interview Dialogue System</h2>
                <br />
                <p>
                    This project presents a hybrid dialogue system designed to enhance the job-seeking process by
                    integrating two core functionalities: a job recommendation system and an interview simulation
                    bot. The job recommendation system employs Information Retrieval (IR) techniques to analyze
                    user skills and experiences, delivering personalized job suggestions that align with their profiles.
                    The interview simulation bot, ASKIMO, uses a rule-based conversational framework to conduct
                    tailored, role-specific mock interviews, providing users with an adaptive and realistic practice
                    environment.
                </p>
                <br />
                <p>
                    Quantitative evaluations demonstrate the system’s effectiveness, with job recommendation
                    accuracy reaching 82.25% and ASKIMO achieving 66.67%-88.89% question accuracy and
                    60.2%-75% response accuracy. Qualitative feedback highlights its clarity, engagement, and
                    relevance, while suggesting enhancements in soft skills coverage and adaptive follow-ups. The
                    system’s seamless integration of job discovery and interview preparation addresses critical gaps
                    in traditional tools, offering users a comprehensive and accessible career development platform.
                    Future iterations aim to incorporate sentiment analysis, emotion recognition, and advanced
                    dialogue capabilities to further refine user experience and efficacy.
                </p>
                <br /> 
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/askimo"
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
            <hr style={styles.linebreak}/>
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
            <hr style={styles.linebreak}/>
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
    linebreak: {
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 15,
    },
};

export default MLAIProjects;
