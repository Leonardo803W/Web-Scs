import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section1 from "./section1";

const SchermataHome = () => {


    const [menuShow, setMenuShow] = useState (false);
    
    const handleMenu = (n) => {
    
        if(n = 1)
        {
                setMenuShow(true)
                console.log(menuShow)
        }
        else
        {
            setMenuShow(false)
            console.log(menuShow)
        }
    }

    return(
        <>
            <div className = {menuShow ? 'showMenuOn' : 'showmenuOf'}>
                <div className = "d-flex justify-content-between">
                    <p className = "itemP">Menu:</p>
                    <p id = "itemNavbarClose" onClick = {() => handleMenu()}>&times;</p>
                </div>
                <hr className = "itemHr"/>
                <div className = "ps-4">
                    <p className = "itemP">Chi siamo</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Iscrizioni</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Collaborazioni</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Vecchi corsi</p>
                    <hr className = "itemHr"/>
                    <p className = "itemP">Contatti</p>
                    <hr className = "itemHr"/>
                </div>
            </div>

            <header>
                <Navbar triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <Section1/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default SchermataHome;