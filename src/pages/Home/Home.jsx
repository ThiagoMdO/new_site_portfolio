import styles from './Home.module.css';

// images
import PerfilProfilePicture from '../../assets/icons/perfil.png';

// icons
import TagChevronIcon from '../../assets/icons/ph_tag-chevron-fill.png'
import IconParkOutline_down from '../../assets/icons/icon-park-outline_down.png';

// pages
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import AboutMe from '../AboutMe/AboutMe';
import Works from '../Works/Works';
import Projects from '../Projects/Projects';

const Home = () => {

    return (
    <>
        <section id='home'>
            <div className={styles.introduction}>
                <div className={styles.nameAndJob}>
                    <h1>THIAGO MENDES</h1>
                    <div className={styles.job}>
                        <h4>WEB DEVELOPER</h4>
                        <div>
                            <img src={TagChevronIcon} alt="" />
                            <img src={TagChevronIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.perfilProfile}>
                    <img src={PerfilProfilePicture} alt="" />
                </div>
            </div>
            <div className={styles.infoRecentWorks}>
                <img
                    src={IconParkOutline_down}
                    alt="seta-para-baixo"
                    className={styles.animatedIcon}
                />
                <span>Trabalhos recentes</span>
            </div>
        </section>

        <section id="trabalhos" className={`${styles.section} ${styles.recentWorks}`}>
            <Works />
        </section>

        <section id="projects" className={`${styles.recentWorks}`}>
            <Projects />
        </section>

        <section id="about" className={`${styles.section} ${styles.aboutMe}`}>
            {/* <AboutMe /> */}
        </section>

        <section id="services" className={`${styles.section} ${styles.typeServices}`}>
            {/* <Services /> */}
        </section>
   
        <section id="contato" className={`${styles.section} ${styles.contact}`}>
            {/* <Contact /> */}
        </section>
    </>        
    );
};

export default Home;