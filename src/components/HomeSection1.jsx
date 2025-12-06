import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLink1 from '../img/immagini per link footer/ecampus.png'
import imgLink2 from '../img/immagini per link footer/comune novedrate.jpeg'
import imgLink3 from '../img/immagini per link footer/regione lombardia.png'
import imgLink4 from '../img/immagini per link footer/protezione civile como.jpeg'
import imgLink5 from '../img/immagini per link footer/anci lombardia.gif'

const HomeSection1 = () => {

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
                        L’Associazione Studenti con le Stellette organizza una settimana di impegno-vacanza per studenti del triennio delle superiori, generalmente nell’ultima settimana di agosto. 
                        Durante il corso i partecipanti vivranno attività formative legate alla sicurezza stradale e personale, primo soccorso, prevenzione, orientamento sul territorio e introduzione a Istituzioni, Polizia e Forze Armate. 
                        La settimana alterna momenti di formazione a svago, visite, giochi ed escursioni, con rilascio di attestati utili anche per l’alternanza scuola-lavoro…
                    </p>   

                    <Link to={'/ChiSiamo'}>
                        <button>Leggi di piu'</button>
                    </Link>                 
                </div>
            </article>

            <article id = 'articole2'>
                <h5 className = 'm-0 p-3'> L’esperienza sotto la lente d’ingrandimento</h5>
                
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

export default HomeSection1;