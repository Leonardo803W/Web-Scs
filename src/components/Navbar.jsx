import { Link } from "react-router-dom";
import img1 from '../img/logo-scs-02.png'

const Navbar = ({ triggerAlert }) => {

    const handelAlert = (n) => {
        
        triggerAlert(1);
    }

    return(
        <>
        <section id='navbar'>
            <div id = "navbarPhone">
                <p onClick = {() => handelAlert(1)} id = "navbarMenu">menu</p>
                <img src = {img1} alt = "logo sito" id = 'navbarlogo'/>
                <p className = "m-0">login</p>
            </div>
            
        
            <div id = "navbarLaptop">
                <div className = "item-content">
                    <p className = 'item-navbar'>Chi siamo</p>
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
            </div> 
        </section>
        </>
    )
}

export default Navbar;