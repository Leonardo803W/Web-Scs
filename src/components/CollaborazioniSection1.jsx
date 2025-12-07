import imgCollaborazioni from '../img/immagini per section1/DSC_2429.JPG'

const CollaborazioniSection1 = () => {

    return(
        <>
            <section>
                <h1 className = 'm-3'>Collaborazoni</h1>
                <hr />

                <div className = "m-3">
                    <h5 className = "m-4">Documenti per diventare soci</h5>

                    <p className = "m-4">
                        Ci siamo quasi presto sarai parte della associazione. Ti basta compilare questi moduli e inviarli alla e-mail. segreteriagenerale@studenticonlestellette.it
                        Tutti non vedono l’ora di fare la tua conoscenza
                    </p>      

                    <div className = "m-4">
                        <a href="">"PDF da mettere"</a>
                    </div>              
                </div>

                <img src={imgCollaborazioni} alt="" className='w-100'/>

                <div className = "m-3">
                    <h5 className = "m-4">Sei un associazione o ente pubblico/privato?</h5>

                    <p className = "m-4">
                        Grazie mille per davi davvero una grossisima mano con questi moduli. Una volta compilati dovrai speidirli a questo indirizzo email segreteriagenerale@studenticonlestellette.it
                    </p>  

                    <div className = "m-4">
                        <a href="">"PDF da mettere"</a>
                        <a href="">"PDF da mettere"</a>
                    </div>                  
                </div>
            </section>
        </>
    )
}

export default CollaborazioniSection1;