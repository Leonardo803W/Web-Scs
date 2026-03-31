import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import CollaborazioniSection1 from "../section3/CollaborazioniSection1";

const SchermataCollaborazioni = () => {

    return(
        <>
            <header>
                <GlobalNavbarScs triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <CollaborazioniSection1/>
            </main>

            <footer>
                <GlobalFooterScs/>
            </footer>
        </>
    )
}

export default SchermataCollaborazioni;