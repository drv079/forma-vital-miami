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
        'At Forma Vital Miami our vision and mission is to help you achieve your health goals and thus have a fuller and more radiant life. To achieve this, we use a combination of auriculotherapy (from traditional Chinese medicine) and a food guide. Our method is totally natural, alternative, simple, non-invasive and painless.',
        'The consultation includes a body composition study to know your very personal composition. Depending on your results, you will be assigned a food guide which with the help of auriculotherapy and the motivation and support of your therapist will make it easier to reach your ideal weight and balance.'
      ],
      aboutTitle: 'About Us',
      contactTitle: 'Contact Information',
      contact: 'We are committed to supporting your journey to a healthier you.',
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
        'En Forma Vital Miami nuestra visión y misión es ayudarte a alcanzar tus metas de salud y así tener una vida más plena y radiante. Para lograrlo utilizamos una combinación de auriculoterapia (proveniente de la medicina tradicional china) y una guía de alimentos. Nuestro método es totalmente natural, alternativo, sencillo, no invasivo y sin dolor.',
        'La consulta incluye un estudio de composición corporal para saber tu muy personal composición. Dependiendo de tus resultados, se te asignará una guía de alimentos la cual con la ayuda de la auriculoterapia y la motivacion y apoyo de tu terapeuta hará que sea más fácil alcanzar tu peso y balance ideal.'
      ],
      aboutTitle: 'Sobre Nosotros',
      contactTitle: 'Información de Contacto',
      contact: 'Estamos comprometidos a apoyar tu camino hacia una versión más saludable de ti mismo.',
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
          <p>{currentContent.contact}</p>
          <div className="contact-info">
            <p>📞 {currentContent.phone}</p>
            <p>✉️ {currentContent.email}</p>
            <p>📍 {currentContent.address}</p>
          </div>
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
