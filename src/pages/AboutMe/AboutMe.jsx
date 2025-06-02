import styles from './AboutMe.module.css'

// images
import PerfilProfilePicture from '../../assets/icons/perfil.png';


// archives
import curriculoPDF from '../../assets/cv/01 - curriculo Thiago Mendes - Dev.pdf';

// icons
import IconWordpress from '../../assets/icons/logos_wordpress.png';
import IconJava from '../../assets/icons/devicon_java.png';
import IconSpring from '../../assets/icons/devicon_spring.png';
import IconMongoDB from '../../assets/icons/devicon_mongodb.png';
import IconJUnit5 from '../../assets/icons/devicon_junit5.png';
import IconMockito from '../../assets/icons/logo_mockito.png';
import IconSwagger from '../../assets/icons/material-icon_swagger.png';

import IconPHP from '../../assets/icons/devicon_php.png';
import IconJS from '../../assets/icons/vscode_icons_js.png';
import IconReact from '../../assets/icons/icon_react.png';
import IconJQuery from '../../assets/icons/devicon_jquery.png';
import IconBootstrap from '../../assets/icons/logos_bootstrap.png';
import IconFirebase from '../../assets/icons/logos_firebase.png';
import IconMySQL from '../../assets/icons/logos_mysql.png';
import IconPostGre from '../../assets/icons/devicon_postgresql.png';
import IconHTML from '../../assets/icons/logos_html5.png';
import IconCSS from '../../assets/icons/logos_css3.png';
import IconPostman from '../../assets/icons/logos_postman.png';
import IconAWS from '../../assets/icons/logos_aws.png';
import IconDocker from '../../assets/icons/devicon_docker.png';
import IconDocument from '../../assets/icons/mi_document.png';

const AboutMe = () => {
  return (
    <>
        <h2>INFORMAÇÕES PESSOAIS</h2>

        <div className={styles.myDescription}>
            <img src={PerfilProfilePicture} className='sectionToAnimate animate-down' alt="" />
            <div className={`sectionToAnimate animate-up ${styles.myDescriptionInfo}`}>
                <h2>Sobre mim</h2>
                <p>
                    Sou uma pessoa curiosa, comunicativa e apaixonada por resolver problemas e melhorar processos. 
                    Tenho formação técnica em Eletrotécnica e experiência na área elétrica, mas me encontrei na programação, 
                    especialmente no back-end com Java e Spring Boot. Busco constante aperfeiçoamento como desenvolvedor 
                    Full Stack, unindo lógica, criatividade e boas práticas. Acredito que a tecnologia, aliada a valores 
                    humanos, tem o poder de transformar a sociedade.
                </p>
                <a href={curriculoPDF}
                    className={styles.customButton}
                    target="_blank"
                    rel='noopener noreferrer'>
                        <img src={IconDocument} alt="" />
                    CURRÍCULO
                </a>
            </div>
            
        </div>
        <div className={styles.experienceH2}>
            <h2>Experiência</h2>
        </div>
        <div className={styles.experiences}>
            <div className={styles.experience}>
                <div className={styles.experienceName}>
                    <h2>Prefeitura Municipal de Pintadas</h2>
                </div>
                <div className={styles.experienceInfo}>
                    <div>
                        <h2>ANALISTA DE SISTEMA</h2>
                        <p className={styles.period}>Março de 2025 - No momento</p>
                    </div>
                    <div>
                        <p>
                            Implantar e desenvolver sistemas para as secretarias do município, otimizando processos 
                            administrativos. Levantamento de requisitos, desenvolvimento, manutenção e suporte de sistemas. 
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.experience}>
                <div className={styles.experienceName}>
                    <h2>COMPASS UOL</h2>
                </div>
                <div className={styles.experienceInfo}>
                    <div>
                        <h2>Estágio</h2>
                        <p className={styles.period}>Agosto de 2023 - Janeiro de 2024</p>
                    </div>
                    <div>
                        <p>
                            Treinamento intensivo em desenvolvimento com Java e Spring Boot e conhecimentos em AWS. 
                            Participei de ativamente de metodologias ágeis, Scrum e Kanban, Daily, Sprints   
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div className={`sectionToAnimate animate-up ${styles.skills}`}>
            <h2>Skills</h2>
            <div>
                <img src={IconJava}     alt="Java"          title='Java'/>
                <img src={IconSpring}   alt="Springboot"    title='Springboot'/>
                <img src={IconJUnit5}   alt="JUnit5"         title='JUnit5'/>
                <img src={IconMockito}  alt="Mockito"       title='Mockito'/>
                <img src={IconSwagger}  alt="Swagger"       title='Swagger'/>
                <img src={IconJS}       alt="Javascript"    title='Javascript'/>
                <img src={IconReact}    alt="React"         title='React'/>
                <img src={IconWordpress} alt="Wordpress"    title='Wordpress'/>
                <img src={IconMySQL}    alt="MySQL"         title='MySQL'/>
                <img src={IconPostGre}  alt="Postgre"       title='Postgre'/>
                <img src={IconMongoDB}  alt="MongoDB"       title='MongoDB'/>
                <img src={IconPHP}      alt="PHP"           title='PHP'/>
                <img src={IconHTML}     alt="HTML"          title='HTML'/>
                <img src={IconCSS}      alt="CSS"           title='CSS'/>
                <img src={IconJQuery}   alt="JQuery"        title='JQuery'/>
                <img src={IconBootstrap} alt="Bootstrap"    title='Bootstrap'/>
                <img src={IconAWS}      alt="AWS Cloud Practitioner" title='AWS Cloud Practitioner'/>
                <img src={IconPostman}  alt="Postman"       title='Postman'/>
                <img src={IconFirebase} alt="Firebase google" title='Firebase google'/>
                <img src={IconDocker}   alt="Docker"        title='Docker'/> 
            </div>
        </div>
    </>
  )
}

export default AboutMe