import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import software from '../../assets/pictures/projects/software.gif';
import robot from '../../assets/pictures/projects/robot.gif';
import printer from '../../assets/resume/printer.gif';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Certifications</h3>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={software}
                    iconStyle={styles.computerIcon}
                    title="Software"
                    subtitle="PROJECTS"
                    route="software"
                />
                <ProjectBox
                    icon={robot}
                    iconStyle={styles.robotIcon}
                    title="ML & AI"
                    subtitle="PROJECTS"
                    route="ml&ai"
                />
                <ProjectBox
                    icon={printer}
                    iconStyle={styles.miscIcon}
                    title="Miscellaneous"
                    subtitle="PROJECTS & CERTIFICATIONS"
                    route="misc"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 60,
        height: 60,
    },
    robotIcon: {
        width: 60,
        height: 60,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    miscIcon: {
        width: 30 * 2,
        height: 30 * 2,
    },
};

export default Projects;
