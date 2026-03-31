import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import IscrizioniSection1 from "../section2/IscrizioniSection1";

const SchermataIscrizioni = () => {

    return(
        <>
            <header>
                <GlobalNavbarScs triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <IscrizioniSection1/>
            </main>

            <footer>
                <GlobalFooterScs/>
            </footer>
        </>
    )
}

export default SchermataIscrizioni;