import React from 'react';
import { Link } from '../general';
import banner from '../../assets/pictures/home-banner.webp';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {

    return (
        <div style={styles.page}>
            <img style={styles.image} src={banner} alt="banner"/>
            <div style={styles.header}>
                <h1 style={styles.name}>Xavier Koo</h1>
                <h2>Software Engineer</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link containerStyle={styles.link} to="skills" text="SKILLS" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS & CERTIFICATIONS"
                />
                <Link
                    containerStyle={styles.link}
                    to="devlog"
                    text="DEVLOGS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        color: 'blue',
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
