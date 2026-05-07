const IscrizioniSection1 = () => {

    return(
        <>
            <section>
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


                <p className = "moduloInteresse">
                    In caso di interesse per avere ulteriori aggiornamenti per eventuali procedure effettive o per info,
                    compilare il "Modulo di interesse" &rarr;

                    <a 
                        href="/PDF/DichiarazioneDiInteresse2026-V1.pdf"
                        download
                        class="btn btn-primary m-3">
                        Clicca per il PDF
                    </a>   
                </p>
            </section>
        </>
    )
}

export default IscrizioniSection1;