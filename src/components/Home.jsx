import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

import imgFastLink from "../img/DSC_9203.JPG allievi nespoli jacchetti lesce_gruppo.JPG"
import imgLink1 from "../img/immagini per link footer/ecampus.png";
import imgLink2 from "../img/immagini per link footer/comune novedrate.jpeg";
import imgLink3 from "../img/immagini per link footer/regione lombardia.png";
import imgLink4 from "../img/immagini per link footer/protezione civile como.jpeg";
import imgLink5 from "../img/immagini per link footer/anci lombardia.gif";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <main className="home">
      
      <section className = "hero">
        <h1>
          Oltre i tuoi limiti.
          <span>Sotto le stellette.</span>
        </h1>
        <p>La settimana che ti svolterà la vita. Disciplina, coraggio e spirito di squadra.</p>
      </section>

      <motion.div
        variants={fadeIn}
        className = "p-3"
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
            href="#diary"
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
      >
        <div id = "intro-project">
          <h3 className = "pb-2 ps-3">
            Che cosa ti proponiamo in questo progetto
          </h3>
          <p className = "pb-2 ps-3">Un percorso formativo multidisciplinare per sviluppare competenze pratiche e consapevolezza civica.📚</p>
        </div>
        
        <section>
          <article className = "articole-value">
            <span>
              📚
            </span>
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

      {/* VIDEO + PDF */}
      <motion.section
        className = "section--media"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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

          <div className = "section_pdf">
            <p>
              Se vuoi consultare la brochure del "X corso Audacia", scarica il PDF:
            </p>

            <a
              href="/PDF/Brochure-2025.PDF"
              download
              className="btn"
            >
              Scarica PDF
            </a>
          </div>
        </div>
      </motion.section>

      <motion.div variants={fadeIn} className="mb-20">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Il Racconto
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mt-3 mb-6">
              Diario di una settimana diversa.
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </motion.div>

      <motion.section
        className = "text-center p-3"
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

      <motion.div
        className = "text-center p-3"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">SCS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Studenti con le Stellette. Un percorso formativo per sviluppare
              consapevolezza civica e spirito di squadra.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground transition">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#diary" className="hover:text-foreground transition">
                  Racconto
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contattaci</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@scs.it"
                  className="hover:text-foreground transition"
                >
                  info@scs.it
                </a>
              </li>
              <li>
                <a href="tel:+39123456789" className="hover:text-foreground transition">
                  +39 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Studenti con le Stellette. Tutti i diritti
            riservati.
          </p>
        </div>
      </motion.div>

    </main>
  );
};

export default Home;