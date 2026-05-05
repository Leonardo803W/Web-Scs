import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalFooterScs from "../GlobalFooterScs";
import GlobalNavbarScs from "../GlobalNavbarScs";
import ChiSiamo from "../section1/ChiSiamo";

const SchermataChiSiamo = () => {

    return(
        <>
            <section className = "position-relative overflow-hidden">
                <header>
                    <GlobalNavbarScs/>
                </header>
                
                <main className = "dark-mode">
                    <ChiSiamo/>
                </main>

                <footer className = "dark-mode">
                    <GlobalFooterScs/>
                </footer>
            </section>
        </>
    )
}

export default SchermataChiSiamo;