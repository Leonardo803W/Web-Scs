import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../img/immagini per section1/DCS_4417.JPG";
import img2 from "../img/immagini per section1/DSC_9203.JPG allievi nespoli jacchetti lesce_gruppo.JPG";
import img3 from "../img/immagini per section1/DSCF6003.jpg";
import img4 from "../img/immagini per section1/IMG_0948.JPG";
import imgNoBg from "../img/IMG_0622 no sfondo.png";

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
  return (
    <main className="home">
      
      {/* HERO */}
      <section className="hero">
        <div className="hero__content">
          <h1>Studenti con le Stellette</h1>
          <h2>Scuola civica in stile militare</h2>
          <p>La settimana che ti svolterà la vita</p>
        </div>
      </section>

      {/* SEZIONE INFO */}
      <motion.section
        className="section section--info"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="section__title">
          Che cosa ti proponiamo in questo progetto
        </h3>

        <div className="section__grid">

          {/* immagini sinistra */}
          <div className="section__images">
            <img src={img1} alt="attività formativa" />
            <img src={img2} alt="gruppo studenti" />
          </div>

          {/* contenuto centrale */}
          <div className="section__content">
            <div className="section__text-wrapper">
              <img src={imgNoBg} alt="logo decorativo" className="section__cover" />

              <p>
                Durante il progetto, gli allievi parteciperanno ad attività
                formative multidisciplinari 🎓 per sviluppare competenze pratiche
                e consapevolezza civica. Il percorso includerà sicurezza stradale
                e personale 🚦🛡️, primo soccorso 🚑 e gestione dei rischi legati
                a eventi e disastri naturali 🌍⚠️, preparando i partecipanti ad
                affrontare situazioni di emergenza e la vita quotidiana in modo
                responsabile.
              </p>
            </div>

            <Link to="/ChiSiamo" className="btn">
              Leggi di più
            </Link>
          </div>

          {/* immagini destra */}
          <div className="section__images">
            <img src={img3} alt="attività pratica" />
            <img src={img4} alt="esercitazione" />
          </div>
        </div>
      </motion.section>

      {/* VIDEO + PDF */}
      <motion.section
        className="section section--media"
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

          <div className="section__pdf">
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

      {/* COLLABORAZIONI */}
      <motion.section
        className="section section--partners"
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