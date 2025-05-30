import styles from './Home.module.css';

// images
import PerfilProfilePicture from '../../assets/icons/perfil.png';

// icons
import TagChevronIcon from '../../assets/icons/ph_tag-chevron-fill.png'
import IconParkOutline_down from '../../assets/icons/icon-park-outline_down.png';
import IconParkOutline_right from '../../assets/icons/icon-park-outline_right.png';
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


import IconGitHub from '../../assets/icons/mdi_github.png';

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
                <div>
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
            {/* <h2>TRABALHOS RECENTES</h2>
            <ul>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Festival Nacional de Curta Pensar Filmes</h2>
                            <a 
                                href="https://festivalpensarfilmes.com.br/"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                Desenvolvi em WordPress o site da 2ª edição do Festival Nacional Curta Pensar Filmes,
                                com foco na divulgação de mostras audiovisuais, oficinas e atrações culturais.
                                O projeto inclui páginas personalizadas, formulários de inscrição e design responsivo.
                            </p>
                        </div>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/hcZhs7LtNdQ?si=uF45gFR33yJj9LeM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconWordpress} alt="Wordpress" title='Wordpress'/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Festival Nacional de Curta Pensar Filmes</h2>
                            <a 
                                href="https://festivalpensarfilmes.com.br/"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                Desenvolvi em WordPress o site da 2ª edição do Festival Nacional Curta Pensar Filmes,
                                com foco na divulgação de mostras audiovisuais, oficinas e atrações culturais.
                                O projeto inclui páginas personalizadas, formulários de inscrição e design responsivo.
                            </p>
                        </div>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/hcZhs7LtNdQ?si=uF45gFR33yJj9LeM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconWordpress} alt="Wordpress" title='Wordpress'/>
                        </div>
                    </div>
                    
                </li>
            </ul> */}
      </section>
      <section id="projects" className={`${styles.recentWorks}`}>
            <Projects />
            {/* <h2>PROJETOS RECENTES</h2>
            <ul>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Desafio Backend: Book_Store - Parte 1</h2>
                            <a
                                href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                Este projeto foi realizado com base em um desafio.
                                A aplicação é responsável por parte de um sistema capaz de gerir o controle
                                de vendas de livros numa Livraria e é possível receber feedback onde o cliente
                                pode escolher o seu nível de satisfação e criar ou editar um comentário num pedido
                                Possui três microsserviços: Product, Order e Feedback.
                            </p>
                        </div>
                        <iframe 
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/QFQKDeA8Uyw?si=uV_9hKSZVThdRP-N"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconJava} alt="Java" title='Java'/>
                            <img src={IconSpring} alt="Springboot" title='Springboot'/>
                            <img src={IconMongoDB} alt="MongoDB" title='MongoDB'/>
                            <img src={IconJUnit5} alt="JUnit5" title='JUnit5'/>
                            <img src={IconMockito} alt="Mockito" title='Mockito'/>
                            <img src={IconSwagger} alt="Swagger" title='Swagger'/>
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                            className={styles.customButton}
                            target="_blank"
                            rel='noopener noreferrer'>
                                <img src={IconGitHub} />
                            GITHUB
                        </a>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Desafio Backend: Book_Store - Parte 2</h2>
                            <a
                                href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                Proximo video do desafio de código back end com Java e Springboot
                            </p>
                        </div>
                        <iframe 
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/O2e-UoFXtnQ?si=u6o-MLapjf5dHqnk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconJava} alt="Java" title='Java'/>
                            <img src={IconSpring} alt="Springboot" title='Springboot'/>
                            <img src={IconMongoDB} alt="MongoDB" title='MongoDB'/>
                            <img src={IconJUnit5} alt="JUnit5" title='JUnit5'/>
                            <img src={IconMockito} alt="Mockito" title='Mockito'/>
                            <img src={IconSwagger} alt="Swagger" title='Swagger'/>
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                            className={styles.customButton}
                            target="_blank"
                            rel='noopener noreferrer'>
                                <img src={IconGitHub} />
                            GITHUB
                        </a>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Projeto Pessoal: ERP Basico Loja Roupa</h2>
                            <a
                                href="https://github.com/ThiagoMdO/ERP_Basico_Loja_roupa"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                O serviço, Loja de Roupa, é um ERP focado em vendas de roupas e semelhantes
                                É possível gerenciar Controle de Caixa, Contas a Pagar, Controles de Produtos, 
                                como cadastrá-los, Exibir em estoque, Valores de estoque, Registrar compras de 
                                fornecedores, e Vendas para clientes cadastrados na loja.
                                É possível acompanhar histórico de vendas, compras, contas pagas e qualquer ação 
                                de cadastrar, editar e excluir dados serão registradas.
                            </p>
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.loom.com/embed/a4287b2b5ce44259891654e11b886cb8?sid=78bd7d0c-2101-4d04-9141-766fbce758c6"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconPHP} alt="PHP" title='PHP'/>
                            <img src={IconJS} alt="Javascript" title='Javascript'/>
                            <img src={IconJQuery} alt="JQuery" title='JQuery'/>
                            <img src={IconMySQL} alt="MySQL" title='MySQL'/>
                            <img src={IconHTML} alt="HTML" title='HTML'/>
                            <img src={IconCSS} alt="CSS" title='CSS'/>    
                        </div>
                        <a
                            href="https://github.com/ThiagoMdO/ERP_Basico_Loja_roupa"
                            className={styles.customButton}
                            target="_blank"
                            rel='noopener noreferrer'>
                                <img src={IconGitHub} />
                            GITHUB
                        </a>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Desafio Backend: Challenge02 User - Parte 1</h2>
                            <a
                                href="https://github.com/ThiagoMdO/SpringBoot_Challenge02_User_Management_Thiago_Mendes"
                                target='__blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                                Esta é uma aplicação Backend na qual é possível cadastrar, logar, autenticar com token,
                                 JTW, exibir informações do usuário por ID, editar informações da conta e senha do usuário.
                                No primeiro vídeo, mostro o passo a passo da aplicação funcionando com requests com dados 
                                corretos e incorretos, nos endpoints CreateNewUser, LoginUser e GetUserById e no segundo 
                                vídeo continuo a explicar o funcionamento dos endpoints UpdateUser e UpdatePasswordUser, 
                                as exceções tratadas.
                            </p>
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.loom.com/embed/930813abdb0241a5a29f56b93cdab1bf?sid=c448e78b-2e7e-4f4c-ac6c-387e0f4a413c"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconJava} alt="" />
                            <img src={IconSpring} alt="" />
                            <img src={IconMySQL} alt="" />
                            <img src={IconPostman} alt="" />
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge02_User_Management_Thiago_Mendes"
                            className={styles.customButton}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={IconGitHub} />
                            GITHUB
                        </a>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Desafio Backend: Challenge02 User - Parte 2</h2>
                            <a
                                href="https://github.com/ThiagoMdO/SpringBoot_Challenge02_User_Management_Thiago_Mendes"
                                target='_blank'
                                rel='noopener noreferrer'
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add(styles.moreInfo);
                                    e.currentTarget.classList.remove(styles.lessInfo);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.classList.remove(styles.moreInfo);
                                    e.currentTarget.classList.add(styles.lessInfo);
                                }}
                            >
                                <img src={IconParkOutline_right} alt="" />
                            </a>
                        </div>
                        <div className={styles.infoWork}>
                            <p>
                               Proximo video do desafio de código Challenge02 User
                            </p>
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.loom.com/embed/01b6cc4b9ce443f08c4c2c0cfd9a3fd4?sid=d01ac61c-c897-464e-94c7-68a482871fca"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen>
                        </iframe>
                        <div className={styles.technologies}>
                            <img src={IconJava} alt="" />
                            <img src={IconSpring} alt="" />
                            <img src={IconMySQL} alt="" />
                            <img src={IconPostman} alt="" />
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge02_User_Management_Thiago_Mendes"
                            className={styles.customButton}
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={IconGitHub} />
                            GITHUB
                        </a>
                    </div>
                </li>
            </ul> */}
      </section>

      <section id="about" className={`${styles.section} ${styles.aboutMe}`}>
        <AboutMe />
      </section>

      <section id="services" className={`${styles.section} ${styles.typeServices}`}>
        <Services />
      </section>
   
      <section id="contato" className={`${styles.section} ${styles.contact}`}>
        <Contact />
      </section>
        
    </>        
    );
};

export default Home;