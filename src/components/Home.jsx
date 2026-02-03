import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLink1 from '../img/immagini per link footer/ecampus.png'
import imgLink2 from '../img/immagini per link footer/comune novedrate.jpeg'
import imgLink3 from '../img/immagini per link footer/regione lombardia.png'
import imgLink4 from '../img/immagini per link footer/protezione civile como.jpeg'
import imgLink5 from '../img/immagini per link footer/anci lombardia.gif'

const Home = () => {

    return(
        <>
        <section id = 'section1'>

            <div id = 'intro'>
                <div id = 'introduzione'>
                    <h1>Studenti con le Stellette</h1>
                    <h3>Scuola civica in stile militare</h3>
                    <p className = 'm-0'>la settimana che ti svolterà la vita</p>
                </div>
            </div>
            
            <article id = 'articole1'>
                <h5>Che cosa ti proponiamo in questo progetto</h5>
                <div>
                    <p>
                        Durante il progetto, gli allievi del corso prenderanno parte a attività formative multidisciplinari 🎓, pensate per sviluppare competenze pratiche e consapevolezza civica.
                    </p>   
                        
                    <p>
                        Il percorso includerà moduli dedicati alla sicurezza stradale e personale 🚦🛡️, al primo soccorso 🚑, alla prevenzione e gestione dei rischi legati a eventi e disastri naturali 🌍⚠️, 
                        oltre a numerose altre attività formative volte a preparare i partecipanti ad affrontare situazioni di emergenza e di vita quotidiana in modo responsabile e consapevole...
                    </p>  
                    
                    <Link to={'/ChiSiamo'}>
                        <button>Leggi di piu'</button>
                    </Link>              
                </div>
            </article>

            <article id = 'articole2'>
                <h5> L’esperienza sotto la lente d’ingrandimento</h5>
                
                <iframe 
                    width="100%" 
                    height="391" 
                    src="https://www.youtube.com/embed/w_ZsGiLbCOc" 
                    title="Studenti con le Stellette, il racconto..." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe> 

                <div id = 'brochureArticole2'>
                    <p>
                        Se vuoi consultare la Broschure riguardante il "X corso Audacia" scarica il PDF:
                        <a 
                            href="/PDF/Brochure-2025.PDF"
                            download
                            class="btn btn-primary mt-3">
                            Clicca per il PDF
                        </a>                        
                    </p>


                </div>
            </article>

            <article id = 'articole4'>
                <h5>Con chi collaboriamo?</h5>
                <div id = 'group-loghi'>
                    <a href="https://www.uniecampus.it"><img src = {imgLink1} alt = "logo ecampus" className = 'loghi-link-collaborazioni'/></a>
                    <a href="https://www.comune.novedrate.co.it/it"><img src = {imgLink2} alt = "logo comune novedrate" className = 'loghi-link-collaborazioni'/></a>
                    <a href="https://www.regione.lombardia.it/wps/portal/istituzionale"><img src = {imgLink3} alt = "logo regione lombardia" className = 'loghi-link-collaborazioni'/></a>
                    <a href="https://www.facebook.com/ProtezioneCivileComo"><img src = {imgLink4} alt = "logo protezione civile como" className = 'loghi-link-collaborazioni'/></a>
                    <a href="https://anci.lombardia.it"><img src = {imgLink5} alt = "logo anci lombardia" className = 'loghi-link-collaborazioni'/></a>
                </div>
            </article>

            </section>
        </>
    )
}

export default Home;