import styles from './Contact.module.css'

import ContactForm from '../ContactForm/ContactForm';

// icons
import IconGitHub from '../../assets/icons/mdi_github.png';
import IconInstagram from '../../assets/icons/icon_instagram.png';
import IconLinkedIn from '../../assets/icons/mdi_linkedin.png';

const Contact = () => {
  return (
    <>
        <h2 className={styles.ContactH2}>FORMULARIO DE CONTATO</h2>
        <ContactForm />

        <div className={styles.iconsSocial}>
            <a href="https://github.com/ThiagoMdO" target='_blank' rel='noopener noreferrer'>
                <img src={IconGitHub} alt="" />
            </a>
            <a href="https://www.instagram.com/thiago_mdo/" target='_blank' rel='noopener noreferrer'>
                <img src={IconInstagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/thiago-mdo/" target='_blank' rel='noopener noreferrer'>
                <img src={IconLinkedIn} alt="" />
            </a>
        </div>
    </>
  )
}

export default Contact