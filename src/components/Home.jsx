import { motion } from "framer-motion";
//import { ChevronRight } from "lucide-react";

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
        <h1>Oltre i tuoi limiti.</h1>
        <h2>Sotto le stellette.</h2>
        <p>La settimana che ti svolterà la vita. Disciplina, coraggio e spirito di squadra.</p>
      </section>

      <motion.div
        variants={fadeIn}
        className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
        <a
          href="#features"
          className="group inline-flex items-center gap-2 text-accent hover:text-accent/80 transition font-medium text-lg"
        >
          Scopri il progetto
        </a>
        <a
          href="#diary"
          className="group inline-flex items-center gap-2 text-accent hover:text-accent/80 transition font-medium text-lg"
        >
        Guarda il racconto
        </a>
      </motion.div>

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <h3>
            Che cosa ti proponiamo in questo progetto
          </h3>
          <p>Un percorso formativo multidisciplinare per sviluppare competenze pratiche e consapevolezza civica.📚</p>
        </div>
        
        <section>
          <article>
            <p>
              📚
            </p>
            <h5>
              Consapevolezza Civica
            </h5>
            <p>
              Non è solo addestramento. È imparare a essere cittadini migliori attraverso la sicurezza stradale, il primo soccorso e la gestione delle emergenze.
            </p>
          </article>

          <article>
            <p>
              🤝
            </p>
            <h5>
              Spirito di Corpo
            </h5>
            <p>
              Insieme si vince. Sviluppa legami indissolubili con i tuoi compagni mentre affronti sfide che mettono alla prova la tua determinazione.
            </p>
          </article>
          
          <article>
            <p>
              🚦
            </p>
            <h5>
              Sicurezza Stradale
            </h5>
            <p>
              Impara le regole della strada e sviluppa consapevolezza sui rischi della circolazione stradale per proteggere te stesso e gli altri.
            </p>
          </article>
          
          <article>
            <p>
              🚑
            </p>
            <h5>
              Primo Soccorso
            </h5>
            <p>
              Acquisisce competenze essenziali per intervenire in situazioni di emergenza e salvare vite. Certificazione riconosciuta.
            </p>
          </article>

          <button>Scopri di più</button>
          
        </section>
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