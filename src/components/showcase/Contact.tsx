import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import meIcon from '../../assets/pictures/contact-me.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/xavierkoo'}
                    />
                    <SocialBox
                        icon={inIcon}
                        link={'https://www.linkedin.com/in/xavier-koo/'}
                    />
                    <SocialBox
                        icon={meIcon}
                        link={'https://medium.com/@xavier2812'}
                    />
                </div>
            </div>
            <br/>
            <div>
                <p>
                    Email me at{' '}
                    <a href="mailto:xavier.koo.2021@scis.smu.edu.sg">xavier.koo.2021@scis.smu.edu.sg</a>
                </p>
            </div>
            <br/>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',

        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        // borderRadius: 1000,

        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;