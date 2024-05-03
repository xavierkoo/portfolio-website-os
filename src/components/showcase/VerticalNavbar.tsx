import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router-dom';
import falloutme from '../../assets/pictures/falloutme.jpg';
import animatedTheme from "./AnimatedImgTheme"
import AnimatedImg from "./AnimatedImg";

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const path = location.pathname;
    // Check if the pathname ends with '/contact', '/project', or '/experience'
    const displayAnimatedImg = path.endsWith('/contact') || path.endsWith('/projects') || path.endsWith('/experience');

    useEffect(() => {
        if (path.includes('/projects')) {
            setProjectsExpanded(true);
        } else {
            setProjectsExpanded(false);
        }
        if (path === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [path]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Xavier</h1>
                <h1 style={styles.headerText}>Koo</h1>
                <h3 style={styles.headerShowcase}>Portfolio</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link containerStyle={styles.link} to="skills" text="SKILLS" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={Object.assign(
                        {},
                        styles.link,
                        projectsExpanded && styles.expandedLink
                    )}
                    to="projects"
                    text="PROJECTS & CERTIFICATIONS"
                />
                {
                    // if current path contains projects
                    projectsExpanded && (
                        <div style={styles.insetLinks}>
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/software"
                                text="SOFTWARE"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/ml&ai"
                                text="ML/AI"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/misc"
                                text="MISC."
                            />
                        </div>
                    )
                }
                <Link containerStyle={styles.link} to="contact" text="CONTACT" />
            </div>
            <div style={styles.spacer} />
            <div>
                {displayAnimatedImg ? (
                    // If the condition is true, display the <AnimatedImg> component
                    <div style={styles.sideBarImage}>
                        <AnimatedImg theme={animatedTheme} />
                    </div>
                ) : (
                    // Otherwise, display the <img> tag
                    <img src={falloutme} style={styles.sideBarImage} alt="" />
                )}
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    sideBarImage: {
        width: '110%',
    },
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        color: 'blue',
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '80%',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',

        width: '100%',
    },
};

export default VerticalNavbar;
