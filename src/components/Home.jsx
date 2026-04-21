import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import imgFastLink from "../img/DSC_9203.JPG allievi nespoli jacchetti lesce_gruppo.JPG"
import imgLink1 from "../img/immagini per link footer/ecampus.png";
import imgLink2 from "../img/immagini per link footer/comune novedrate.jpeg";
import imgLink3 from "../img/immagini per link footer/regione lombardia.png";
import imgLink4 from "../img/immagini per link footer/protezione civile como.jpeg";
import imgLink5 from "../img/immagini per link footer/anci lombardia.gif";
import imgCardArticoleCivica1 from '../img/card-consapevolezza-civica-1.png'
import imgCardArticoleCivica2 from '../img/card-consapevolezza-civica-2.png'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {

  const slides = [
    {
      id: 1,
      nameCourse: "Libertà",
      content: "Il primo Corso 'Libertà' si è tenuto nel 2016 presso la Casa Militare Umberto I di Turate.",
    },
    {
      id: 2,
      nameCourse: "Disciplina",
      content: "lorem lorem",
    },
    {
      id: 3,
      nameCourse: "Nuovo Corso",
      content: "Unisciti e vivi l'esperienza",
    },
  ];

  const [index, setIndex] = useState(0); 
  
  const nextSlide = () => { 
      setIndex((prev) => (prev + 1) % slides.length); 
    }; 

  const prevSlide = () => { 
    setIndex((prev) => (prev - 1 + slides.length) % slides.length); 
  };
  
  return (
    <main className="home">
      
      <section className = "hero">
        <h1>
          Studenti Con Le Stellette
          <span>Oltre i tuoi limiti.</span>
        </h1>
        <p>La settimana che ti svolterà la vita. Disciplina, coraggio e spirito di squadra.</p>
      </section>

      <motion.div
        variants={fadeIn}
        className = "ps-3"
        >
        <div>
          <a
            href="#features"
            className = "d-block mb-2"
          >
            Scopri il progetto
            <svg xmlns="http://www.w3.org/2000/svg" className = "ms-2" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
          </a>
          <a
            href="#story"
            className = "d-block mb-2"
          >
          Guarda il racconto
          <svg xmlns="http://www.w3.org/2000/svg" className = "ms-2" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
          </a>
        </div>

        <img src = {imgFastLink} alt = "foto gruppo" className = "imgFastLink"/>
      </motion.div>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className = "mt-4" 
        id = "features"
      >
        <h3 id = "intro-project">
          Che cosa ti proponiamo in questo progetto
        </h3>
        
        <section>
          <article className = "articole-value">
            <img src = {imgCardArticoleCivica1} alt="" id = "articoleCivicaImg1"/>
            <img src = {imgCardArticoleCivica2} alt="" id = "articoleCivicaImg2"/>
            <h5>
              Consapevolezza Civica
            </h5>
            <p>
              Non è solo addestramento. È imparare a essere cittadini migliori attraverso la sicurezza stradale, il primo soccorso e la gestione delle emergenze.
            </p>
          </article>

          <article className = "articole-value">
            <h5>
              Spirito di Corpo
            </h5>
            <p>
              Insieme si vince. Sviluppa legami indissolubili con i tuoi compagni mentre affronti sfide che mettono alla prova la tua determinazione.
            </p>
          </article>
          
          <article className = "articole-value">
            <h5>
              Sicurezza Stradale
            </h5>
            <p>
              Impara le regole della strada e sviluppa consapevolezza sui rischi della circolazione stradale per proteggere te stesso e gli altri.
            </p>
          </article>
          
          <article className = "articole-value">
            <h5>
              Primo Soccorso
            </h5>
            <p>
              Acquisisce competenze essenziali per intervenire in situazioni di emergenza e salvare vite. Certificazione riconosciuta.
            </p>
          </article>
        </section>

        <div className = "text-center mb-5 mt-5">
          <Button variant="outline-primary" size="lg">
            <Link to = "ChiSiamo">
              Scopri di più
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        className = "section-value"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3>I Nostri Valori</h3>
        <p>Ogni giorno insegniamo attraverso l'esempio e l'esperienza diretta</p>

        <div>
          <article>
            <h5>Disciplina</h5>
            <p>Rispetto delle regole e di se stessi</p>
          </article>
          <article>
            <h5>Spirito di Corpo</h5>
            <p>Condivisione e solidarietà tra i compagni</p>
          </article>
          <article>
            <h5>Dedizione</h5>
            <p>Impegno verso il prossimo e la comunità</p>
          </article>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        id = "courses"
      >

        <h3>Un tuffo nel passato</h3>

        <section className="carousel-container">

          <button className = "buttonCarosell prev styleButton" onClick={prevSlide}>&lt;</button>
          <button className = "buttonCarosell next styleButton" onClick={nextSlide}>&gt;</button>

          {slides.map((slide, i) => {
            const position = (i - index + slides.length) % slides.length;
            const adjustedPosition =
              position > slides.length / 2
                ? position - slides.length
                : position;

            if (Math.abs(adjustedPosition) > 1) return null;

            return (
              <motion.div
                key={slide.id}
                id={`course-${slide.nameCourse.toLowerCase().replace(/\s+/g, '-')}`}
                className="slide"
                animate={{
                  x: adjustedPosition * 250,
                  scale: adjustedPosition === 0 ? 1 : 0.7,
                  opacity: Math.abs(adjustedPosition) > 1 ? 0 : 1,
                  zIndex: adjustedPosition === 0 ? 2 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h5>{slide.nameCourse}</h5>
                  <p>{slide.content}</p>
                </div>
              </motion.div>
            );
          })}
        </section>

        <div className = "text-center mb-5 mt-5 d-flex flex-column">
          <Button variant="outline-primary" size="lg" className = "mt-3 ms-5 me-5">
            <Link to = "ChiSiamo">
              Iscriviti
            </Link>
          </Button>

          <Button variant="outline-primary" size="lg" className = "mt-3 ms-5 me-5">
            <Link to = "ChiSiamo">
              Scopri i corsi
            </Link>
          </Button>
        </div>
      
      </motion.section>

      <motion.section
        className = "collaboration"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="section__title">Con chi collaboriamo?</h3>

        <div className="partners">
          <a href="https://www.uniecampus.it">
            <img src={imgLink1} alt="eCampus" />
          </a>

          <a href="https://www.comune.novedrate.co.it/it">
            <img src={imgLink2} alt="Comune Novedrate" />
          </a>

          <a href="https://www.regione.lombardia.it">
            <img src={imgLink3} alt="Regione Lombardia" />
          </a>

          <a href="https://www.facebook.com/ProtezioneCivileComo">
            <img src={imgLink4} alt="Protezione Civile Como" />
          </a>

          <a href="https://anci.lombardia.it">
            <img src={imgLink5} alt="ANCI Lombardia" />
          </a>
        </div>

        <div className = "text-center mb-5 mt-5">
          <Button variant="outline-primary" size="lg">
            <Link to = "ChiSiamo">
              Unisciti a noi
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <div className = "text-center">
          <h3>L'opportunita' di mettersi sempre in gioco</h3>

          <p>scopri le comissioni in cui gli stessi ragazzi possono sperimentare e aricchire le loro skills, o scoprirne delle nuove!</p>
        </div>

        <div className = "mt-5">
          <p className = "fakeButton">Commissione Social</p>
          <p className = "fakeButton">Commissione Amministrazione</p>
          <p className = "fakeButton">Commissione Contabilita'</p>
        </div>

        <div className = "text-center mb-5 mt-5">
          <Button variant="outline-primary" size="lg">
            <Link to = "Contatti">
              Scopri di piu'
            </Link>
          </Button>
        </div>
      </motion.section>

    </main>
  );
};

export default Home;