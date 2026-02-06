import { Link } from "react-router-dom";
import img1 from '../img/logo-scs-02.png'

const GlobalNavbarScs = ({ triggerAlert }) => {

    const handelAlert = (n) => {
        
        triggerAlert(1);
    }

    return(
        <>
        <section id='navbar'>
            <div id = "navbarPhone">
                <p onClick = {() => handelAlert(1)} id = "navbarMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </p>
                <Link to={'/'}>
                    <img src = {img1} alt = "logo sito" id = 'navbarlogo'/>
                </Link>
                <p>login</p>
            </div>
            
        
            <div id = "navbarLaptop">
                <div className = "item-content">
                    <Link to={'/'} className = "item-conteLink">
                        <p className = 'item-navbar'>Home</p>
                    </Link>
                </div>    

                <div className = "item-content">
                    <Link to={'/ChiSiamo'} className = "item-conteLink">
                        <p className = 'item-navbar'>Chi siamo</p>
                    </Link>
                </div>
                
                <div className = "item-content">
                    <Link to={'/Iscrizioni'} className = "item-conteLink">
                        <p className = 'item-navbar'>Iscrizioni</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/Collaborazioni'} className = "item-conteLink">
                        <p className = 'item-navbar'>Collaborazioni</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/VecchiCorsi'} className = "item-conteLink">
                        <p className = 'item-navbar'>Vecchi Corsi</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/Contatti'} className = "item-conteLink">
                        <p className = 'item-navbar'>Contatti</p>
                    </Link>
                </div>
            </div> 
        </section>
        </>
    )
}

export default GlobalNavbarScs;