import { useEffect, useState } from "react";

import GlobalNavbarScs from "../GlobalNavbarScs";
import GlobalFooterScs from "../GlobalFooterScs";
import Home from "../Home";
import { color } from "framer-motion";

const SchermataHome = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <section className = "position-relative overflow-hidden">
      <header>
        <GlobalNavbarScs 
          isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen}
        />
      </header>

      <section 
        className = "dark-mode"
      >
        <main className={`homeMain ${isMenuOpen ? "fog-active" : ""}`}>
          <Home/>
        </main>

        <footer className={isMenuOpen ? "fog-active" : ""}>
          <GlobalFooterScs />
        </footer>

        {isMenuOpen && <div className="fog-overlay"></div>}
      </section>
    </section>
  );
};

export default SchermataHome;