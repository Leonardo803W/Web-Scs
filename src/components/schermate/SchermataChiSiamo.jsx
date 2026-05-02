import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import ChiSiamoSection1 from "../section1/ChiSiamoSection1";

const SchermataChiSiamo = () => {

    return(
        <>
            <header>
                <GlobalNavbarScs/>
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