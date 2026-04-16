import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
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
            <span>
              🤝
            </span>
            <h5>
              Spirito di Corpo
            </h5>
            <p>
              Insieme si vince. Sviluppa legami indissolubili con i tuoi compagni mentre affronti sfide che mettono alla prova la tua determinazione.
            </p>
          </article>
          
          <article className = "articole-value">
            <span>
              🚦
            </span>
            <h5>
              Sicurezza Stradale
            </h5>
            <p>
              Impara le regole della strada e sviluppa consapevolezza sui rischi della circolazione stradale per proteggere te stesso e gli altri.
            </p>
          </article>
          
          <article className = "articole-value">
            <span>
              🚑
            </span>
            <h5>
              Primo Soccorso
            </h5>
            <p>
              Acquisisce competenze essenziali per intervenire in situazioni di emergenza e salvare vite. Certificazione riconosciuta.
            </p>
          </article>
        </section>

        <div className = "text-center mb-5 mt-5">
          <Button variant="outline-primary" size="lg">Scopri di più</Button>
        </div>
      </motion.section>

      <motion.section
        className = "section--media"
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

      {/* VIDEO */}
      <motion.section
        className = "section--media"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        id = "story"
      >
        <h3 className="section__title">
          L’esperienza sotto la lente d’ingrandimento
        </h3>

        <div className="section__media">

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/w_ZsGiLbCOc"
              title="Studenti con le Stellette"
              allowFullScreen
            />
          </div>
        </div>
      </motion.section>

      <motion.div
        className = "text-center p-3"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h5>ScS sul’onda delle nuove tendenze social</h5>
          <div>
            <p>se vuoi rimanere aggiornato i nostri social sono i seguenti:</p>
                   
            <div>
              <a 
                href="https://www.tiktok.com/@studentistellette" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="black" 
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemSocial'
                        >
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>
                      </a>    

                      <a 
                            href="https://www.youtube.com/@STUDENTICONLESTELLETTE" 
                            target="_blank" 
                            rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="red"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemSocial'
                        >
                          <path d="M8.051 1.999h-.102C3.536 1.999 1.999 3.536 1.999 8c0 4.464 1.537 6.001 6.001 6.001h.102C12.464 14.001 14 12.464 14 8s-1.536-6.001-5.949-6.001zM6.5 10.667V5.333L10.667 8 6.5 10.667z" />
                        </svg>
                      </a>

                      <a 
                            href="https://www.instagram.com/studenticonlestellette/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="#933ff3"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemSocial'
                        >
                          <path d="M8 0C5.347 0 5.057.01 3.657.07 2.253.131 1.2.5.447 1.253c-.753.753-1.122 1.806-1.183 3.21C-.01 5.057 0 5.347 0 8s.01 2.943.07 4.343c.061 1.404.43 2.457 1.183 3.21.753.753 1.806 1.122 3.21 1.183C5.057 16.01 5.347 16 8 16s2.943.01 4.343-.07c1.404-.061 2.457-.43 3.21-1.183.753-.753 1.122-1.806 1.183-3.21.06-1.4.07-1.69.07-4.343s-.01-2.943-.07-4.343c-.061-1.404-.43-2.457-1.183-3.21C14.8.5 13.747.131 12.343.07 10.943.01 10.653 0 8 0zm0 3.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324zm0 6.838a2.676 2.676 0 1 0 0-5.352 2.676 2.676 0 0 0 0 5.352zm4.406-7.744a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
                        </svg>
                      </a>

                      <a 
                            href="https://www.facebook.com/studenticonlestellette/?locale=it_IT" 
                            target="_blank" 
                            rel="noopener noreferrer"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="blue"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemSocial'
                      >
                        <path d="M8 0C3.582 0 0 3.582 0 8c0 3.991 2.925 7.305 6.75 7.938v-5.625H4.875V8h1.875V6.25c0-1.856 1.093-2.875 2.765-2.875.801 0 1.625.125 1.625.125v1.78h-.913c-.9 0-1.181.562-1.181 1.139V8h2l-.325 2.313H8.121V15.938C11.925 15.305 14.85 11.991 14.85 8c0-4.418-3.582-8-8-8z"/>
                      </svg>
                  </a>
              </div>
            </div>
      </motion.div>

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
      </motion.section>

    </main>
  );
};

export default Home;