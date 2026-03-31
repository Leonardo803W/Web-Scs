import { useEffect, useState } from "react";
import GlobalNavbarScs from "../GlobalNavbarScs";
import GlobalFooterScs from "../GlobalFooterScs";
import Home from "../Home";
import imgLogo from "../../img/logo-scs-02.png";

const SchermataHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
  }, [isLoading]);

  return (
    <>
      <GlobalNavbarScs />

      <main>
        {isLoading && (
          <div className="intro">
            {[1, 2, 3].map(i => (
              <div key={i} className={`intro__logo intro__logo--${i}`}>
                <img src={imgLogo} alt="logo" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && <Home />}
      </main>

      {!isLoading && <GlobalFooterScs />}
    </>
  );
};

export default SchermataHome;