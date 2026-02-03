const IscrizioniSection1 = () => {

    return(
        <>
            <section>
                <h1 className = 'm-3'>Iscrizioni</h1>
                <hr />

                <div id = "introIscrizioni">
                    <p>
                        Salve aspirante Allievo! Ha deciso finalmente di prendere parte a  questa iniziativa se è in questa pagina.
                        Siamo molto entusiasti di accoglierla all’interno dell’associazione. E lei si sente pronto per questa nuova esperienza? 
                        Sappiamo che ha paura di tante cose...
                        Proprio per questo motivo se dovesse avere lo stesso volere delucidazione sul corso la invito a chiamare all 0314153471 o a scrivere a questa e-mail segreteriagenerale@studenticonlestellette.it.
                    </p>
                </div>

                <p className = "m-5 p4">
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