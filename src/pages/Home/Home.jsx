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

import IconWebDev from '../../assets/icons/icon-park-solid_web-page.png';
import IconBackend from '../../assets/icons/simple-icons_dailydotdev.png';
import IconFrontend from '../../assets/icons/devicon-plain_devicon.png';
import IconDatas from '../../assets/icons/carbon_development.png';

import IconGitHub from '../../assets/icons/mdi_github.png';
import IconInstagram from '../../assets/icons/icon_instagram.png';
import IconLinkedIn from '../../assets/icons/mdi_linkedin.png';




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
            <h2>TRABALHOS RECENTES</h2>
            <div>
                <a href='#'>Mais trabalhos...</a>
            </div>
            <ul>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Festival Nacional de Curta Pensar Filmes</h2>
                            <a 
                                href="https://festivalpensarfilmes.com.br/"
                                target='blank'
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
                            <img src={IconWordpress} alt="" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Festival Nacional de Curta Pensar Filmes</h2>
                            <a 
                                href="https://festivalpensarfilmes.com.br/"
                                target='blank'
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
                            <img src={IconWordpress} alt="" />
                        </div>
                    </div>
                    
                </li>
            </ul>
      </section>
      <section id="projects" className={`${styles.recentWorks}`}>
            <h2>PROJETOS RECENTES</h2>
            <div>
                <a href='#'>Mais projetos...</a>
            </div>
            <ul>
                <li>
                    <div className={styles.work}>
                        <div>
                            <h2>Desafio Backend: Book_Store - Parte 1</h2>
                            <a
                                href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                                target='blank'
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
                            <img src={IconJava} alt="" />
                            <img src={IconSpring} alt="" />
                            <img src={IconMongoDB} alt="" />
                            <img src={IconJUnit5} alt="" />
                            <img src={IconMockito} alt="" />
                            <img src={IconSwagger} alt="" />
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                            className={styles.customButton}
                            target="_blank">
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
                                target='blank'
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
                            <img src={IconJava} alt="" />
                            <img src={IconSpring} alt="" />
                            <img src={IconMongoDB} alt="" />
                            <img src={IconJUnit5} alt="" />
                            <img src={IconMockito} alt="" />
                            <img src={IconSwagger} alt="" />    
                        </div>
                        <a href="https://github.com/ThiagoMdO/SpringBoot_Challenge_Book_Store"
                            className={styles.customButton}
                            target="_blank">
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
                                target='blank'
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
                            <img src={IconPHP} alt="" />
                            <img src={IconJS} alt="" />
                            <img src={IconJQuery} alt="" />
                            <img src={IconMySQL} alt="" />
                            <img src={IconHTML} alt="" />
                            <img src={IconCSS} alt="" />    
                        </div>
                        <a
                            href="https://github.com/ThiagoMdO/ERP_Basico_Loja_roupa"
                            className={styles.customButton}
                            target="_blank">
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
                                target='blank'
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
                            target="_blank">
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
                                target='blank'
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
                            target="_blank">
                            GITHUB
                        </a>
                    </div>
                </li>
            </ul>
      </section>

      <section id="about" className={`${styles.section} ${styles.aboutMe}`}>
        <h2>INFORMAÇÕES PESSOAIS</h2>

        <div className={styles.myDescription}>
            <img src={PerfilProfilePicture} alt="" />
            <div className={styles.myDescriptionInfo}>
                <h2>Sobre mim</h2>
                <p>
                    Sou uma pessoa curiosa, comunicativa e apaixonada por resolver problemas e melhorar processos. 
                    Tenho formação técnica em Eletrotécnica e experiência na área elétrica, mas me encontrei na programação, 
                    especialmente no back-end com Java e Spring Boot. Busco constante aperfeiçoamento como desenvolvedor 
                    Full Stack, unindo lógica, criatividade e boas práticas. Acredito que a tecnologia, aliada a valores 
                    humanos, tem o poder de transformar a sociedade.
                </p>
                <a href="../../assets/cv/01 - curriculo Thiago Mendes - Dev.pdf"
                    className={styles.customButton}
                    target="_blank">
                    CURRICULO
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
        <div className={styles.skills}>
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
      </section>

      <section id="services" className={`${styles.section} ${styles.typeServices}`}>
        <h2>TIPOS DE SERVIÇOS</h2>
        <div className={styles.services}>
            <ul>
                <li>
                    <img src={IconWebDev} alt="" />
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Criação de web sites institucionais, portifólio, divulgação de conteúdo digital</p>
                </li>
                <li>
                    <img src={IconBackend} alt="" />
                    <h3>BACKEND</h3>
                    <p>
                        Criação e ou consumo de APIs, utilizando arquitetura de projeto, com foco na organização, 
                        segurança e cobertura de testes
                    </p>
                </li>
                <li>
                    <img src={IconFrontend} alt="" />
                    <h3>FRONTEND</h3>
                    <p>
                        Criação de interfaces graficas faceis utilizando através de UX/UI
                    </p>
                </li>
                <li>
                    <img src={IconDatas} alt="" />
                    <h3>ANALISTA DE SISTEMA</h3>
                    <p>
                        Foco total na busca por melhoria de software, em automatizar tarefas repetitivas e tratamento de dados mais simples.
                    </p>
                </li>
            </ul>
        </div>
      </section>

      <section id="contato" className={`${styles.section} ${styles.contact}`}>
        <h2>FORMULARIO DE CONTATO</h2>
        <form id="contactForm">
            <div>
                <input type="text" name="name" placeholder="Nome*" required />
                <input type="email" name="email" placeholder="Email*" required />

            </div>
            <textarea name="message" placeholder="Mensagem*" required></textarea>
            <button type="submit">ENVIAR MENSAGEM</button>
        </form>
        <div className={styles.iconsSocial}>
            <a href="https://github.com/ThiagoMdO" target='blank'>
                <img src={IconGitHub} alt="" />
            </a>
            <a href="https://www.instagram.com/thiago_mdo/" target='blank'>
                <img src={IconInstagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/thiago-mdo/" target='blank'>
                <img src={IconLinkedIn} alt="" />
            </a>
            
            
        </div>
      </section>
        
    </>

        
    );
};

export default Home;