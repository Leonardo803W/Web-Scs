const CollaborazioniSection1 = () => {

    return(
        <>
            <section className = "text-center">
                <h1>Collaborazoni</h1>

                    <div className = "documentazioneCollaborazioni">
                        <h5>Documenti per diventare soci</h5>

                        <p>
                            Ci siamo quasi presto sarai parte della associazione. Ti basta compilare questi moduli e inviarli alla e-mail. segreteriagenerale@studenticonlestellette.it
                            Tutti non vedono l’ora di fare la tua conoscenza
                        </p>      

                        <a 
                            href="/PDF/01_-_domanda_di_iscrizione_associazione_-_compilabile.pdf"
                            download
                            class="btn btn-primary m-3">
                            PDF modulo per diventare socio
                        </a>                
                    </div>

                    <div className = "documentazioneCollaborazioni">
                        <h5>Sei un associazione o ente pubblico/privato?</h5>

                        <p>
                            Grazie mille per davi davvero una grossisima mano con questi moduli. Una volta compilati dovrai speidirli a questo indirizzo email segreteriagenerale@studenticonlestellette.it
                        </p>  

                        <div>
                            <a 
                                class="btn btn-primary m-3">
                                PDF
                            </a>   
                            <a 
                                class="btn btn-primary m-3">
                                PDF
                            </a>   
                        </div>                  
                    </div>
            </section>
        </>
    )
}

export default CollaborazioniSection1;