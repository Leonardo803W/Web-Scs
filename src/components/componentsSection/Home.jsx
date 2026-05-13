import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import { article } from "framer-motion/client";

import imgintroHome from "../../img/introHome.JPG"
import imgLink1 from "../../img/immagini per link footer/ecampus.png";
import imgLink2 from "../../img/immagini per link footer/comune novedrate.jpeg";
import imgLink3 from "../../img/immagini per link footer/regione lombardia.png";
import imgLink4 from "../../img/immagini per link footer/protezione civile como.jpeg";
import imgLink5 from "../../img/immagini per link footer/anci lombardia.gif";

import {datiCards} from '../../data/datiCards';
import {datiCorsi} from '../../data/datiCorsi';


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % datiCorsi.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + datiCorsi.length) % datiCorsi.length);
  };
  
  return (
    <main>
      <section id = "bigIntro">
        <div className = "introHome">
          <h1>
            Studenti Con Le Stellette
            <span>Scuola civica in stile militare.</span>
          </h1>
          <p>La settimana che ti svolterà la vita. Disciplina, coraggio e spirito di squadra.</p>
        </div>

        <div
          variants={fadeIn}
          className = "introProject"
          >
          <div>
            <a
              href = "#features"
              className = "d-block mb-2"
            >
              Scopri il progetto
              <svg xmlns="http://www.w3.org/2000/svg" className = "ms-2" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </a>
            <a
              href = "#story"
              className = "d-block mb-2"
            >
            Guarda il racconto
            <svg xmlns="http://www.w3.org/2000/svg" className = "ms-2" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
            </a>
          </div>

          <img src = {imgintroHome} alt = "foto gruppo" className = "imgintroHome"/>
        </div>
      </section>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className = "mt-4" 
        id = "features"
      >
        <h3 className = "text-center">
          Che cosa ti proponiamo in questo progetto
        </h3>
        
        <section className = "mt-4">
          {datiCards.map((item) => (
            <article key =  {item.id} className = "position-relative">
              <img src = {item.img1} alt = "immagine foresta" className = "articoleCardImg1 articoleCardImgCommonValue"/>
              <div 
                className = "articole-value"
                id={`title-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
              <img src = {item.img2} alt = "immagine consapevolezza digitale" className = "articoleCardImg2 articoleCardImgCommonValue"/>
            </article>
          ))}
        </section>

        <div className = "text-center mb-5 mt-5">
          <Button variant="outline-primary" size="lg">
            <Link to = "/ChiSiamo">
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
        <h2>I Nostri Valori</h2>
        <p>Ogni giorno insegniamo attraverso l'esempio e l'esperienza diretta</p>

        <div className = "d-flex mt-4 justify-content-center flex-wrap">
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className = "courses"
        id="story"
      >
        <h3>Un tuffo nel passato</h3>

        <div className="carousel-container">
          <button className="buttonCarosell prev" onClick={prevSlide}>
            &lt;
          </button>

          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 260}px)`
            }}
          >
            {datiCorsi.map((item, i) => (
              <div
                key={item.id}
                className={`slide ${i === index ? "active" : ""}`}
                id={`course-${item.nameCourse.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h5>{item.nameCourse}</h5>
                <p>{item.contentIntro}</p>
              </div>
            ))}
          </div>

          <button className="buttonCarosell next" onClick={nextSlide}>
            &gt;
          </button>
        </div>

        <div className = "groupBottunCorsi">
          <Button variant="outline-primary" size="lg">
            <Link to = "/VecchiCorsi">
              Scopri di più
            </Link>
          </Button>
          <Button variant="outline-primary" size="lg">
            <Link to = "/Iscrizioni">
              Iscriviti
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