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
                    <Link to={'/'}>
                        <p className = 'item-navbar'>Home</p>
                    </Link>
                </div>    

                <div className = "item-content">
                    <Link to={'/ChiSiamo'}>
                        <p className = 'item-navbar'>Chi siamo</p>
                    </Link>
                </div>
                
                <div className = "item-content">
                    <Link to={'/Iscrizioni'}>
                        <p className = 'item-navbar'>Iscrizioni</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/Collaborazioni'}>
                        <p className = 'item-navbar'>Collaborazioni</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/VecchiCorsi'}>
                        <p className = 'item-navbar'>Vecchi Corsi</p>
                    </Link>
                </div>

                <div className = "item-content">
                    <Link to={'/Contatti'}>
                        <p className = 'item-navbar'>Contatti</p>
                    </Link>
                </div>
            </div> 
        </section>
        </>
    )
}

export default GlobalNavbarScs;