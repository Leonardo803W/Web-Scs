import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "./GlobalFooterScs";
import GlobalNavbarScs from "./GlobalNavbarScs";
import ChiSiamoSection1 from "./ChiSiamoSection1";

const SchermataChiSiamo = () => {


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
                    <Link to={'/ChiSiamo'}>
                        <p className = "itemP">Chi siamo</p>
                    </Link>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Iscrizioni</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Collaborazioni</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Vecchi corsi</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Contatti</p>
                    <hr className = "itemHr"/>
                    <Link to={'/'}>
                        <p className = "itemP">Home</p>
                    </Link>
                    <hr className = "itemHr"/>
                </div>
            </div>

            <header>
                <GlobalNavbarScs triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <ChiSiamoSection1/>
            </main>

            <footer>
                <GlobalFooterScs/>
            </footer>
        </>
    )
}

export default SchermataChiSiamo;