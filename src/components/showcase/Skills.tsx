import chromadb from "../../assets/pictures/chromadb.png";
import langchain from "../../assets/pictures/langchain.png";
import streamlit from "../../assets/pictures/streamlit.png";

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {

    return (
        <div className="site-page-content">
            <h1>Skills</h1>
            <p>
                  My Technical Toolbox: Diverse Skills for Building Innovative Software Solutions.
            </p>
            <br />
            <div style={styles.skills}>
                <h2>Programming Languages</h2> 
                <div style={styles.i}>
                    <i className='devicon-html5-plain colored' title='HTML5' style={{ margin: '5px' }}></i>
                    <i className='devicon-css3-plain colored' title='CSS3' style={{ margin: '5px' }}></i>
                    <i className='devicon-sass-original colored' title='Sass' style={{ margin: '5px' }}></i>
                    <i className='devicon-javascript-plain colored' title='JavaScript' style={{ margin: '5px' }}></i>
                    <i className="devicon-typescript-plain colored" title='TypeScript' style={{ margin: '5px' }}></i>
                    <i className='devicon-python-plain colored' title='Python' style={{ margin: '5px' }}></i>
                    <i className='devicon-java-plain colored' title='Java' style={{ margin: '5px' }}></i>
                    <i className='devicon-dart-plain colored' title="Dart" style={{ margin: '5px' }}></i>
                </div>
                <h2>Frameworks & Libraries</h2>
                <div className='item' style={styles.i}>
                    <i className='devicon-bootstrap-plain colored' title='Bootstrap' style={{ margin: '5px' }}></i>
                    <i className='devicon-react-original colored' title='React.js' style={{ margin: '5px' }}></i>
                    <i className='devicon-vuejs-plain colored' title='Vue.js' style={{ margin: '5px' }}></i>
                    <i className="devicon-angularjs-plain colored" title='Angular.js' style={{ margin: '5px' }}></i>
                    <i className='devicon-express-original' title='Express.js' style={{ margin: '5px' }}></i>
                    <i className='devicon-nodejs-plain colored' title='Node.js' style={{ margin: '5px' }}></i>
                    <i className='devicon-electron-original colored' title='Electron.js' style={{ margin: '5px' }}></i>
                    <i className="devicon-flutter-plain colored" title="Flutter" style={{ margin: '5px' }}></i>
                    <i className='devicon-spring-plain colored' title='Spring/Spring Boot' style={{ margin: '5px' }}></i>
                    <i className='devicon-jest-plain colored' title='Jest' style={{ margin: '5px' }}></i>
                    <i className="devicon-junit-plain colored" title='JUnit' style={{ margin: '5px' }}></i>
                    <i className="devicon-opencv-plain colored" title='OpenCV'></i>
                    <div style={styles.i}>
                        <img src={langchain} style={{height: '40px', width: '75px', margin: '5px'}} title='LangChain' alt=""/>
                        <img src={streamlit} style={{height: '40px', width: '55px', margin: '5px'}} title='StreamLit' alt=""/>
                        <i className="devicon-fastapi-plain colored" title='FastAPI' style={{ margin: '5px' }}></i>
                    </div>
                </div>
                <h2>Tools</h2>
                <div style={styles.i}>
                    <i className='devicon-docker-plain colored' title='Docker' style={{ margin: '5px' }}></i>
                    <i className='devicon-git-plain colored' title='Git' style={{ margin: '5px' }}></i>
                    <i className='devicon-github-original' title='GitHub' style={{ margin: '5px' }}></i>
                    <i className="devicon-cypressio-plain colored" title='Cypress.io' style={{ margin: '5px' }}></i>
                    <i className="devicon-amazonwebservices-original colored" title='AWS' style={{ margin: '5px' }}></i>
                    <i className="devicon-azuredevops-plain colored" title='Azure Devops' style={{ margin: '5px' }}></i>
                    <i className="devicon-intellij-plain colored" title='IntelliJ IDEA' style={{ margin: '5px' }}></i>
                    <i className='devicon-eslint-original colored' title="ESLint" style={{ margin: '5px' }}></i>
                    <i className='devicon-heroku-original colored' title='Heroku' style={{ margin: '5px' }}></i>
                    <i className='devicon-jira-plain colored' title='Jira' style={{ margin: '5px' }}></i>
                    <i className='devicon-figma-plain colored' title='Figma' style={{ margin: '5px' }}></i>
                </div>
                <h2>Database</h2>
                <div style={styles.i}>
                    <i className='devicon-mongodb-plain colored' title='MongoDB' style={{ margin: '5px' }}></i>
                    <i className='devicon-mysql-plain colored' title='MySQL' style={{ margin: '5px' }}></i>
                    <i className="devicon-dbeaver-plain colored" title='DBeaver' style={{ margin: '5px' }}></i>
                    <img src={chromadb} style={{height: '40px', width: '55px', margin: '5px'}} title='ChromaDB' alt=""/>
                    <i className="devicon-sqlite-plain colored" title='SQLite' style={{ margin: '5px' }}></i>
                </div>
            </div>
        </div>
    );
}

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
    skills: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    i: {
        display: 'block',
        fontSize: 48,
        margin: 10,
    },
};

export default Skills;
