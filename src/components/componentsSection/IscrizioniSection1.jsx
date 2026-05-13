import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const IscrizioniSection1 = () => {

    return(
        <>
            <section id = "iscrizioni">
                <h1 className = 'text-center'>Iscrizioni</h1>

                <div id = "introIscrizioni">
                    <p>
                        Salve aspirante Allievo! Ha deciso di prendere parte a  questa iniziativa se è in questa pagina.
                        Siamo molto entusiasti di accoglierla all’interno dell’associazione. E lei si sente pronto per questa nuova esperienza? 
                    </p>
                </div>

                <p id = "infoIscrizioni">
                    In caso di di dubbi sul corso la invitiamo a scrivere a questa e-mail 
                    <span>segreteriagenerale@studenticonlestellette.it</span>
                </p>
            </section>

            <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className = "moduloInteresse"
            >
                In caso di interesse per avere ulteriori aggiornamenti per eventuali procedure effettive o per info,
                compilare il "Modulo di interesse" &rarr;

                <a 
                    href="/PDF/DichiarazioneDiInteresse2026-V1.pdf"
                    download
                    class="btn btn-primary m-3"
                >
                    Clicca per il PDF
                </a>   
            </motion.p>
            
        </>
    )
}

export default IscrizioniSection1;