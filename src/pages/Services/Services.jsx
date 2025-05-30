import styles from './Services.module.css';

import IconWebDev from '../../assets/icons/icon-park-solid_web-page.png';
import IconBackend from '../../assets/icons/simple-icons_dailydotdev.png';
import IconFrontend from '../../assets/icons/devicon-plain_devicon.png';
import IconDatas from '../../assets/icons/carbon_development.png';

const Services = () => {
  return (
    <>
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
    </>
  )
}

export default Services