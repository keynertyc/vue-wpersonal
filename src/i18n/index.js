/**
 * Created by Keyner on 7/12/17.
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      icon: 'en',
      career: 'Systems Engineer | Software Developer',
      profileTitle: 'Personal Profile',
      about: 'About',
      skills: 'Skills/Resume',
      contact: 'Contact',
      text1: 'I\'ve got what you need!',
      text2: 'Passionate about technology, self­taught. More than 9 years as a Software Developer, expert on technologies OpenSource, Backend, Rest API, Ethical Hacking, Linux/Mac. Leadership and teamwork experience (office or remote); proactive and creative attitude in constant search of new ideas for technology projects.',
      textDownload: 'Download my Resume',
      textBtnDownload: 'Download Now!',
      textContact1: 'Let\'s Get In Touch!',
      textContact2: 'Ready to start your next project with me? That\'s great! Give me a call or send me an email and I will get back to you as soon as possible!',
    },
  },
  es: {
    message: {
      icon: 'es',
      career: 'Ingeniero de Sistemas | Desarrollador de Software',
      profileTitle: 'Perfil Profesional',
      about: 'Yo',
      skills: 'Habilidades/CV',
      contact: 'Contáctame',
      text1: 'Tengo lo que necesitas!',
      text2: 'Apasionado por la tecnología, autodidacta. Más de 9 años como Desarrollador de Software, experto en tecnologías OpenSource, Backend, API Rest, Ethical Hacking, Linux/Mac. Liderazgo y experiencia de trabajo en equipo (oficina o remoto); actitud proactiva y creativa. En constante búsqueda de nuevas ideas para proyectos de tecnología.',
      textDownload: 'Descarga mi CV',
      textBtnDownload: 'Descargar',
      textContact1: 'Estemos en contacto!',
      textContact2: 'Listo para iniciar su próximo proyecto conmigo? ¡Eso es genial! Dame una llamada o envíame un e-mail y me pondré en contacto con usted tan pronto como sea posible!',
    },
  },
};

export default new VueI18n({
  locale: 'en', // set locale
  messages,
});
