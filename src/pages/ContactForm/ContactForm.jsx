import styles from './ContactForm.module.css'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const form = useRef();
  const [captchaValido, setCaptchaValido] = useState(false);

  const handleRecaptcha = (value) => {
    if (value) {
      setCaptchaValido(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValido) {
      alert('Por favor, confirme que você não é um robô.');
      return;
  }

    emailjs.sendForm(
      'service_8u5pkos',   // ex: 'service_xxxxxx'
      'template_pngt2ps',  // ex: 'template_xxxxxx'
      form.current,
      '2_sU6FaZEFmfpAnS6'    // ex: 'vL0x8N6X4H7aBcD3F'
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Erro ao enviar mensagem.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
          <input type="text" name="name" placeholder="Nome*" required />
          <input type="email" name="email" placeholder="Email*" required />
      </div>
      <textarea name="message" placeholder="Mensagem*" required></textarea>
     
      <div className={styles.recaptcha}>
        <ReCAPTCHA
          sitekey="6LccS1ArAAAAALAN9Aqdp06mr37YSBBdR-P6ZmPe"
          onChange={handleRecaptcha}
        />

      </div>
      <button type="submit">ENVIAR MENSAGEM</button>
    </form>
  );
};

export default ContactForm;