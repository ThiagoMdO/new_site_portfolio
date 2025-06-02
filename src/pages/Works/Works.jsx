import styles from './Works.module.css';

// icons
import IconParkOutline_right from '../../assets/icons/icon-park-outline_right.png';
import IconWordpress from '../../assets/icons/logos_wordpress.png';

const Works = () => {
    const urlFestivalPensarFilmesSite = 'https://festivalpensarfilmes.com.br/';
    const urlFestivalPensarFilmesApresentacaoYoutube = 'https://www.youtube.com/embed/hcZhs7LtNdQ?si=uF45gFR33yJj9LeM';

  return (
    <>
        <h2>TRABALHOS RECENTES</h2>
        <ul>
            <li className={styles.workLi}>
                <div className={`sectionToAnimate animate-up ${styles.work}`}>
                    <div>
                        <h2>Festival Nacional de Curta Pensar Filmes</h2>
                        <a 
                            href={urlFestivalPensarFilmesSite}
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
                        src={urlFestivalPensarFilmesApresentacaoYoutube}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <div className={`sectionToAnimate animate-up ${styles.technologies}`}>
                        <img src={IconWordpress} alt="Wordpress" title='Wordpress'/>
                    </div>
                </div>
            </li>
            <li  className={styles.workLi}>
                <div className={`sectionToAnimate animate-up ${styles.work}`}>
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
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <div className={`sectionToAnimate animate-up ${styles.technologies}`}>
                        <img src={IconWordpress} alt="Wordpress" title='Wordpress'/>
                    </div>
                </div>
                
            </li>
        </ul>
    </>
  )
}

export default Works;