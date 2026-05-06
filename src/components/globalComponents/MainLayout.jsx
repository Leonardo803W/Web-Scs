import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import GlobalNavbarScs from "../globalComponents/GlobalNavbarScs";
import GlobalFooterScs from "../globalComponents/GlobalFooterScs";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <section className="position-relative overflow-hidden">
      <header>
        <GlobalNavbarScs 
          isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen}
        />
      </header>

      <section className="dark-mode">
        <main className={`homeMain ${isMenuOpen ? "fog-active" : ""}`}>
          <Outlet />
        </main>

        <footer className={isMenuOpen ? "fog-active" : ""}>
          <GlobalFooterScs />
        </footer>

        {isMenuOpen && <div className="fog-overlay"></div>}
      </section>
    </section>
  );
};

export default MainLayout;
