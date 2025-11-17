import { useState } from 'react';
import img1 from '../img/logo-scs-02.png'
import imgLink1 from '../img/immagini per link footer/ecampus.png'
import imgLink2 from '../img/immagini per link footer/comune novedrate.jpeg'
import imgLink3 from '../img/immagini per link footer/regione lombardia.png'
import imgLink4 from '../img/immagini per link footer/protezione civile como.jpeg'
import imgLink5 from '../img/immagini per link footer/anci lombardia.gif'

const cards = [
    {id: 1,
        title: 'nesi',
        content: 'lorem lipsu'
    },
    {id: 2,
        title: 'riccardo',
        content: 'lorem lipsu'
    },
    {id: 3,
        title: 'mazza',
        content: 'lorem lipsu'
    }
];

const Section1 = () => {

    //variabili per le animazioni
    const [animateDiv, setAnimateDiv] = useState(false);

    //variabili per il carosello
    const [activeIndex, setActiveIndex] = useState (0)
    const totalCards = cards.length

    //funzione per fermare il carosello o all'inizio o alla fine per telefono
    const goToNextOrPrev = (next) => {

        if(next === 'next')
        {
            setAnimateDiv(true);
            setActiveIndex(prev => Math.min(prev + 1, totalCards - 1));
            setActiveIndexTablet(prev => Math.min(prev + 1, totalCards - 1));
        }
        else
        {
            setAnimateDiv(false);            
            setActiveIndex(prev => Math.max(prev - 1, 0));
            setActiveIndexTablet(prev => Math.max(prev - 1, 0));
        }
    };

    return(
        <>
        <section id = 'section1'>

            <div id = 'intro'>
                <img src = {img1} alt = "logo sito" />
                <div id = 'introduzione'>
                    <h1 className = 'm-0 p-2'>Studenti con le Stellette</h1>
                    <h3 className = 'm-0 p-2'>la settimana che ti svolterà la vita</h3>
                </div>
                <img src = {img1} alt = "logo sito" />
            </div>
            
            <article id = 'articole1'>
                <h5 className = 'm-0 p-3'>Che cosa ti proponiamo in questo progetto</h5>
                <p className = 'm-0 p-3'>
                    L’Associazione Studenti con le stellette organizza un Corso di una settimana, di impegno-vacanza per un gruppo di studenti frequentanti il triennio della scuola secondaria di secondo grado.
                    Il periodo in cui si svolge l'iniziativa è generalmente l'ultima settimana di agosto.
                    I ragazzi e le ragazze saranno protagonisti di momenti formativi teorici e pratici in materia di sicurezza stradale e personale, pronto soccorso, prevenzione dei orientamento sul territorio, auto-protezione in caso di calamità naturali e tanto altro anche in materia di Istituzioni, Polizia e Forze Armate. Durante la settimana saranno alternati momenti di impegno a momenti di svago e divertimento, compresa “libera uscita serale”, visite, escursioni, giochi, sport. Agli allievi saranno rilasciati degli attestati di frequenza per alcuni corsi come “BLSD Laico” e per aspirante volontario di Protezione Civile A0-01 da AREU-AAT Como e Regione Lombardia, inoltre, le ore di addestramento, servizi e istruzione potranno essere conteggiate quale alternanza scuola-lavoro previa stipula di apposita convenzione con i Dirigenti Scolastici degli Istituti di appartenenza dei partecipanti.
                </p>
            </article>

            <article id = 'articole2' className = 'text-center'>
                <h5 className = 'm-0 p-3'> L’esperienza sotto la lente d’ingrandimento</h5>
                <iframe width="100%" height="391" src="https://www.youtube.com/embed/w_ZsGiLbCOc" title="Studenti con le Stellette, il racconto..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </article>

            <article id = 'articole3' className = 'text-center mt-5 mb-5'>
                <h5 className = 'm-4'>Ascolta chi l’esperienza l’ha fatta davvero</h5>
                <div className = {animateDiv ? 'avantiDiv' : 'indietroDiv'}>
                    {cards.map((card, index) => (
                        <div
                        key={card.id}
                        className={index === activeIndex ? 'activeCard' : 'd-none'}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    ))}
                </div>

                <div className=' mb-4 mt-4 pe-2 ps-2 d-flex justify-content-around'>
                    <button className = "allArrow" onClick = {() => goToNextOrPrev()}>clicca per andare indietro;</button>
                    <button className = "allArrow" onClick = {() => goToNextOrPrev('next')}>clicca per tornare avanti;</button> 
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

export default Section1;