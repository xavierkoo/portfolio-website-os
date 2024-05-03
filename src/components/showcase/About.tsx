import React from 'react';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import animatedTheme from "./AnimatedImgTheme"
import AnimatedImg from "./AnimatedImg";

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Hello there 👋</h1>
            <h3>I'm Xavier Koo</h3>
            <br />
            <div className="text-block">
                <p>
                    An aspiring software engineer passionate about Full Stack Development, 
                    Artificial Intelligence and Machine Learning.
                </p>
                <br />
                <p>
                    I'm currently a Final-Year Undergraduate pursuing a BSc Information Systems (IS) 
                    at Singapore Management University (SMU) with a Double Major in Digitalisation & 
                    Cloud Solutions (Software Design & Development) and Computer Science 
                    (Artificial Intelligence). If you have any questions or comments, feel
                    free to contact me at{' '}
                    <a href="mailto:xavier.koo.2021@scis.smu.edu.sg">
                        xavier.koo.2021@scis.smu.edu.sg
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My interests in software development was borne out of a desire to learn how to
                    create things. I've always been fascinated by the idea of creating something
                    from nothing, and software development is the perfect medium for that. I love
                    the idea of being able to create something that can be used by people all over
                    the world.
                </p>
                <br />
                <div className="captioned-image">
                    <AnimatedImg theme={animatedTheme} />
                </div>
                <p>
                    I started dabbling in coding, starting with Python when I was still studying in 
                    Singapore Polytechnic (SP), pursuing a Diploma in International Business. Yes
                    you read that right, I was studying business and not computer science. I was
                    always interested in technology and software, but I never had the
                    opportunity to study it in school. So I decided to take matters into my own hands
                    and started learning on my own.
                </p>
                <br />
                <p>
                    In 2018, I got accepted into Singapore Management University (SMU) to pursue a
                    BSc in Information Systems (IS). I was excited to finally be able to study 
                    software development in school. Time really flies, and now I'm in my final year
                    of university. I've learned so much in the past few years from school, internships,
                    personal projects, and hackathons. I'm excited to see where my journey will take me next.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Interests</h3>
                        <br />
                        <p>
                            Beyond software, I have a strong interest in military aviation which led me to
                            signing on as a Pilot Trainee with the Republic of Singapore Air Force (RSAF) for 
                            a little over 3 years. Though my time with the RSAF is over, the experience has
                            left a lasting impact on me.
                        </p>
                        <br />
                        <p>
                            I also unsurprisingly enjoy video games and also enjoy playing the piano.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                 Me after my first solo flight, Sept 2020
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading till the end! Feel free to explore the rest of my website to
                    learn more about me and my projects.
                </p>
                <br />
                <p>
                    If you have any questions or comments, you can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:xavier.koo.2021@scis.smu.edu.sg">
                        xavier.koo.2021@scis.smu.edu.sg
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '90%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
