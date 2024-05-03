import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Window from '../os/Window';
import Skills from '../showcase/Skills';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import SoftwareProjects from '../showcase/projects/Software';
import MLAIProjects from '../showcase/projects/ML&AI';
import MiscProjects from '../showcase/projects/Misc';
import Contact from '../showcase/Contact';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Xavier Koo - Portfolio"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Xavier Koo'}
        >
            <div className="site-page">
                <VerticalNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/software"
                        element={<SoftwareProjects />}
                    />
                    <Route
                        path="/projects/ml&ai"
                        element={<MLAIProjects />}
                    />
                    <Route path="/projects/misc" element={<MiscProjects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Window>
    );
};

export default ShowcaseExplorer;
