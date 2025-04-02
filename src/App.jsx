import { useState } from 'react'
import FormaVitalLogo from './assets/Forma_Vital.png'


import './App.css'

function App() {
  const [language, setLanguage] = useState('es');

  const content = {
    en: {
      title: 'Forma Vital Miami',
      subtitle: 'Weight Control',
      about: [
        'At Forma Vital Miami our vision and mission is to help you achieve your health goals and thus have a fuller and more radiant life. To achieve this, we use auriculotherapy (from traditional Chinese medicine). Our method is totally natural, alternative, simple, non-invasive and painless.',
        'The consultation includes a body composition analysis to know your very personal composition. Depending on your results, you will be assigned a food guide which with the help of auriculotherapy and the motivation and support of your therapist will make it easier to reach your ideal weight and balance.'
      ],
      aboutTitle: 'About Us',
      contactTitle: 'Contact Information',
      contact1: 'We are committed to supporting your journey to a healthier you.',
      contact2: 'For prices, promotions and further information call us:',
      phone: '305-225-7790',
      email: 'formavitalmiami@gmail.com',
      address: '2801 NW 74th Ave Suite 200, Miami, FL 33122',
      hoursTitle: 'Business Hours',
      hours: [
        { day: 'Monday - Wednesday', time: '10:00 AM - 2:00 PM, 3:00 PM - 5:00 PM' },
        { day: 'Thursday', time: 'Closed' },
        { day: 'Friday', time: '10:00 AM - 2:00 PM, 3:00 PM - 5:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 1:30 PM' },
        { day: 'Sunday', time: 'Closed' }
      ]
    },
    es: {
      title: 'Forma Vital Miami',
      subtitle: 'Control de Peso',
      about: [
        'En Forma Vital Miami nuestra visión y misión es ayudarte a alcanzar tus metas de salud y así tener una vida más plena y radiante. Para lograrlo utilizamos auriculoterapia (proveniente de la medicina tradicional china). Nuestro método es totalmente natural, alternativo, sencillo, no invasivo y sin dolor.',
        'La consulta incluye un análisis de composición corporal para saber tu muy personal composición. Dependiendo de tus resultados, se te asignará una guía de alimentos la cual con la ayuda de la auriculoterapia y la motivacion y apoyo de tu terapeuta hará que sea más fácil alcanzar tu peso y balance ideal.'
      ],
      aboutTitle: 'Sobre Nosotros',
      contactTitle: 'Información de Contacto',
      contact1: 'Estamos comprometidos a apoyar tu camino hacia una versión más saludable de ti mismo. Para precios y promociones, llámanos.',
      contact2: 'Para precios y promociones, llámanos:',
      phone: '305-225-7790',
      email: 'formavitalmiami@gmail.com',
      address: '2801 NW 74th Ave Suite 200, Miami, FL 33122',
      hoursTitle: 'Horario de Atención',
      hours: [
        { day: 'Lunes - Miércoles', time: '10:00 AM - 2:00 PM, 3:00 PM - 5:00 PM' },
        { day: 'Jueves', time: 'Cerrado' },
        { day: 'Viernes', time: '10:00 AM - 2:00 PM, 3:00 PM - 5:00 PM' },
        { day: 'Sábado', time: '9:00 AM - 1:30 PM' },
        { day: 'Domingo', time: 'Cerrado' }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="forma-vital-container">
      <div className="language-picker">
      <button 
          onClick={() => setLanguage('es')}
          className={language === 'es' ? 'active' : ''}
        >
          Español
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          English
        </button>
      </div>

      <div className="header">
        <img 
          src={FormaVitalLogo}
          alt="Forma Vital Miami Logo" 
          className="logo"
        />
        <h1>{currentContent.title}</h1>
        <h2>{currentContent.subtitle}</h2>
      </div>

      <div className="section about-section">
        <h3>{currentContent.aboutTitle}</h3>
        <div className="section-content">
          {currentContent.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {/* <img 
            src="https://via.placeholder.com/400x250" 
            alt="About Us" 
            className="section-image"
          /> */}
        </div>
      </div>

      <div className="section contact-section">
        <h3>{currentContent.contactTitle}</h3>
        <div className="section-content">
          <p>{currentContent.contact1}</p>
          <p>{currentContent.contact2}</p>
          <div className="contact-info">
            <p>📞 {currentContent.phone}</p>
            <p>✉️ {currentContent.email}</p>
            <p>📍 {currentContent.address}</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.13384145949!2d-80.31814052443228!3d25.79915817732842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b890f4c12bfd%3A0x655b792e73a10ff4!2sForma%20Vital%20Miami!5e0!3m2!1sen!2smx!4v1743621302895!5m2!1sen!2smx" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h3>{currentContent.hoursTitle}</h3>
        <div className="business-hours">
          {currentContent.hours.map((hours, index) => (
            <div key={index} className="hours-row">
              <span className="day">{hours.day}</span>
              <span className="time">{hours.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App
