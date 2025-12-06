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
                <p onClick = {() => handelAlert(1)} id = "navbarMenu">menu</p>
                <Link to={'/'}>
                    <img src = {img1} alt = "logo sito" id = 'navbarlogo'/>
                </Link>
                <p className = "m-0">login</p>
            </div>
            
        
            <div id = "navbarLaptop">
                <div className = "item-content">
                    <Link to={'/ChiSiamo'}>
                        <p className = 'item-navbar'>Chi siamo</p>
                    </Link>
                </div>
                
                <div className = "item-content">
                    <p className = 'item-navbar'>Iscrizioni</p>
                </div>

                <div className = "item-content">
                    <p className = 'item-navbar'>Collaborazioni</p>
                </div>

                <div className = "item-content">
                    <p className = 'item-navbar'>Vecchi corsi</p>
                </div>

                <div className = "item-content">
                    <p className = 'item-navbar'>Contatti</p>
                </div>

                <div className = "item-content">
                    <Link to={'/'}>
                        <p className = 'item-navbar'>Home</p>
                    </Link>
                </div>
            </div> 
        </section>
        </>
    )
}

export default GlobalNavbarScs;