import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "./GlobalFooterScs";
import GlobalNavbarScs from "./GlobalNavbarScs";
import ContattiSection1 from "./ContattiSection1";

const SchermataContatti = () => {


    const [menuShow, setMenuShow] = useState (false);
    
    const handleMenu = (n) => {
    
        if(n === 1)
        {
            setMenuShow(true)
            //console.log(menuShow)
        }
        else
        {
            setMenuShow(false)
            //console.log(menuShow)
        }
    }

    return(
        <>
            <div className = {menuShow ? 'showMenuOn' : 'showmenuOf'}>
                <div className = "d-flex justify-content-between">
                    <p className = "itemP">Menu:</p>
                    <p id = "itemNavbarClose" onClick = {() => handleMenu(2)}>&times;</p>
                </div>
                <hr className = "itemHr"/>
                <div className = "ps-4">
                    <Link to={'/'}>
                        <p className = "itemP">Home</p>
                    </Link>
                    <hr className = "itemHr"/>                    
                    <Link to={'/ChiSiamo'}>
                        <p className = "itemP">Chi siamo</p>
                    </Link>
                    <hr className = "itemHr"/>
                    <Link to={'/Iscrizioni'}>
                        <p className = "itemP">Iscrizioni</p>
                    </Link>
                    <hr className = "itemHr"/>
                    <Link to={'/Collaborazioni'}>
                        <p className = "itemP">Collaborazioni</p>
                    </Link>
                    <hr className = "itemHr"/>
                    <Link to={'/VecchiCorsi'}>
                        <p className = "itemP">Vecchi corsi</p>
                    </Link>
                    <hr className = "itemHr"/>
                    <Link to={'/Contatti'}>
                        <p className = "itemP">Contatti</p>
                    </Link>
                    <hr className = "itemHr"/>
                </div>
            </div>

            <header>
                <GlobalNavbarScs triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <ContattiSection1/>
            </main>

            <footer>
                <GlobalFooterScs/>
            </footer>
        </>
    )
}

export default SchermataContatti;