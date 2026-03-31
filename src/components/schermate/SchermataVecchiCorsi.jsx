import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import VecchiCorsiSection1 from "../section4/VecchiCorsiSection1";

const SchermataVecchiCorsi = () => {

    return(
        <>
            <header>
                <GlobalNavbarScs triggerAlert = {handleMenu}/>
            </header>
            
            <main>
                <VecchiCorsiSection1/>
            </main>

            <footer>
                <GlobalFooterScs/>
            </footer>
        </>
    )
}

export default SchermataVecchiCorsi;