import GlobalNavbarScs from "../GlobalNavbarScs";
import GlobalFooterScs from "../GlobalFooterScs";
import { useState } from "react";
import Home from "../Home";

const SchermataHome = () => {

  return (
    <>
      <section className = "position-relative">
        <header>
          <GlobalNavbarScs/>
        </header>

        <main id = "home-main">
          <Home/>
        </main>

        <footer>
          <GlobalFooterScs />
        </footer>
      </section>
    </>
  );
};

export default SchermataHome;