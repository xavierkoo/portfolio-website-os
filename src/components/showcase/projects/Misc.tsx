import React from 'react';
import ResumeDownload from '../ResumeDownload';
import aws from '../../../assets/pictures/aws.png';
import oracle from '../../../assets/pictures/oracle.png';
import heicoders from '../../../assets/pictures/heicoders.png';
import ev from '../../../assets/pictures/ev.png';
import irecycle from '../../../assets/pictures/irecycle.png';

export interface MiscProjectsProps {}

const MiscProjects: React.FC<MiscProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Misc.</h1>
            <h3>Projects & Certifications</h3>
            <br />
            <p>
                Here are some projects and certifications I have worked on that are not related to software development or machine learning and artificial intelligence.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>AWS Certified Solutions Architect – Associate</h2>
                <br />
                <div className="captioned-image">
                    <img src={aws} style={{height: "100%", width: "60%"}} alt="" />
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.credly.com/badges/3fd2c590-3850-478c-912b-b804eb82eff2/linked_in_profile"
                        >
                            <p>
                                <b>[Credly]</b> - Certification Badge
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Oracle Certified Foundations Associate, Java</h2>
                <br />
                <div className="captioned-image">
                    <img src={oracle} style={{height: "100%", width: "60%"}} alt="" />
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=7021571107EBACF10CEBF555B3AA492FCB2EEC46A68DADBD70477A29390A6EB4"
                        >
                            <p>
                                <b>[Oracle]</b> - Certification Badge
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>AI200: Applied Machine Learning</h2>
                <br />
                <div className="captioned-image">
                    <img src={heicoders} style={{height: "80%", width: "40%"}} alt="" />
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://cert.heicodersacademy.com/KoGXmhqZKWhwICc8"
                        >
                            <p>
                                <b>[Heicoders]</b> - Certificate
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>EV Charging Model</h2>
                <br />
                <p>
                   Spreadsheet model of the EV charging infrastructure in Singapore, which estimates the number of charging stations required to support the growing number of electric vehicles in the country.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ev} style={{height: "80%", width: "40%"}} alt="" />
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/xavierkoo/evchargingmodel"
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
                            href="https://medium.com/@xavier2812/exploratory-model-for-ev-charging-infrastructure-in-singapore-f9a20e76ca3f"
                        >
                            <p>
                                <b>[Medium]</b> - Blog Post
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>iRecycle</h2>
                <br />
                <p>
                    UI/UX project of an app that motivate users to recycle. The app provides a platform for users to track their recycling habits, earn rewards, and learn more about recycling.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={irecycle} style={{height: "100%", width: "40%"}} alt="" />
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://aaronkwah.dev/irecycle"
                        >
                            <p>
                                <b>[Write-Up]</b> - Project Write-Up on Team Member's Portfolio
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default MiscProjects;
