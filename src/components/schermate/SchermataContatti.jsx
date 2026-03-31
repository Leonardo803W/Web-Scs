import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import ContattiSection1 from "../section5/ContattiSection1";

const SchermataContatti = () => {

    return(
        <>
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