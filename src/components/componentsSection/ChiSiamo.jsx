import imgProgect from '../../img/chi siamo progect.jpg';

const ChiSiamo = () => {

    return(
        <>
            <section>
                <h1 className = 'text-center'>Chi siamo</h1>

                <div id = 'nascita'>

                    <div>
                        <p>
                            L'Associazione Studenti con le stellette e nata nel 2016, inizialmente creata dai reduci di guerra,
                            cosi come altre associazioni, infatti basandosi su associazioni come associazione combattentistiche d'arma (Associazione Nazionale Carabinieri, Marinai d’Italia, Associazione Nazionale Alpini).
                        </p>                          
                    </div>
                  
                </div>

                <div id = 'mission'>

                    <div>
                        <h3>La nostra mission:</h3>

                        <p>
                            La missione che l'Associazione si e posta e quello di poter dare agli allievi che aderiscono a questa iniziativa,
                            per poter dare agli allievi nozioni tramite lezioni teoriche ma anche pratiche, ma sopratutto tramite il regolamento e la disciplina data,
                            per poter far si che alla fine del corso l'allievo possa essere anche una persona non solo disciplinata ma anche un cittadino attivo tramite il senso civico che viene trasmesso durantre il corso.
                        </p>
                    </div>
                </div>

                <div className = "text-center">

                    <h3 className = "m-3">Che cosa l'allievo si porta a casa da questo progetto</h3>

                    <div className = "course-box">
                        <h3>Formazione concreta, non solo teoria.</h3>

                        <p>
                            Durante il corso gli studenti sviluppano competenze pratiche e senso di responsabilità attraverso attività coinvolgenti:
                        </p>

                        <ul>
                            <li>Primo soccorso e BLSD</li>
                            <li>Sicurezza e prevenzione</li>
                            <li>Orientamento e auto-protezione</li>
                            <li>Istituzioni e legalità</li>
                        </ul>
                        
                        <p>Le giornate alternano lezioni, esercitazioni e momenti di svago: escursioni, sport e attività di gruppo.</p>
                        
                        <p>Ogni partecipante ottiene certificazioni riconosciute valide anche per il PCTO, arricchendo il proprio percorso formativo.</p>

                        <p>Un’esperienza che forma cittadini consapevoli, responsabili e pronti ad agire per la comunità, con possibilità di volontariato in realtà come Protezione Civile e Croce Rossa.</p>

                        <img src = {imgProgect} alt="Immagine del progetto" />
                    </div>
                </div>

                <section
                    className = "media"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className="section__title">
                        L’esperienza sotto la lente d’ingrandimento
                    </h3>

                    <div className="video-wrapper">
                        <iframe
                        src="https://www.youtube.com/embed/w_ZsGiLbCOc"
                        title="Studenti con le Stellette"
                        allowFullScreen
                        />
                    </div>
                </section>

            </section>
        </>
    )
}

export default ChiSiamo;