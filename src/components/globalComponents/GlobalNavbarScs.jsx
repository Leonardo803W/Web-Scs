import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 
import imgLogo from "../../img/logo-scs-02.png"; 

const NAV_LINKS = [ 
    { to: "/", label: "Home" }, 
    { to: "/ChiSiamo", label: "Chi siamo" }, 
    { to: "/Iscrizioni", label: "Iscrizioni" }, 
    { to: "/VecchiCorsi", label: "Corsi" }, 
    { to: "/Collaborazioni", label: "Collaborazioni" }, 
    { to: "/Contatti", label: "Contatti" }, 
  ]; 
  
const GlobalNavbarScs = ({ isOpen, setIsOpen }) => { 
  
  const [darkLight, setDarkLight] = useState(() => { 
    const saved = localStorage.getItem("theme"); 
    return saved ? JSON.parse(saved) : false; 
  }); 
  
  const toggleLight = () => { 
    setDarkLight(prev => { const newValue = !prev; 
      localStorage.setItem("theme", JSON.stringify(newValue)); 
      window.dispatchEvent(new Event("themeChange")); 
    return newValue; }); 
  }; 
  
  const toggleMenu = () => setIsOpen(prev => !prev); 
  const closeMenu = () => setIsOpen(false); useEffect(() => { 
    localStorage.setItem("theme", JSON.stringify(darkLight)); 
    console.log("Tema salvato:", darkLight); 
  }, [darkLight]);

  return ( 
    <header className="navbar"> {/* Mobile */} 
      <div className="navbar__mobile"> 
        <button onClick={toggleMenu} className="navbar__menu-btn"> ☰ </button> 
        <Link to="/" className = "navbar__logo"> 
          <img src={imgLogo} alt="logo" /> 
        </Link> 
        
        <div id = "containerLight" className = {darkLight ? 'bg-light' : 'bg-dark'}> 
          <div onClick={toggleLight}> 
            <svg xmlns="http://www.w3.org/2000/svg" className = {darkLight ? 'sunUp' : 'd-none'} width="24" height="24" viewBox="0 0 16 16"> 
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/> 
            </svg> 
          </div> 
          
          <div onClick={toggleLight}> 
            <svg xmlns="http://www.w3.org/2000/svg" className = {darkLight ? 'd-none' : 'moonUp'} width="24" height="24" viewBox="0 0 16 16"> 
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/> 
            </svg> 
          </div> 
        </div> 
      </div> 
      
      {/* Mobile menu */} 
      <nav className = {isOpen ? "is-open" : "d-none"}> 
        <div className = "mobile-menu-header"> 
          <span>Menu</span> 
          <p onClick={closeMenu}>✕</p> 
        </div> 
        
        <ul> {NAV_LINKS.map((link, i) => ( 
          <li key={i}> {!link.children ? ( 
            <Link to={link.to} className="link" onClick={closeMenu}> 
              {link.label} 
            </Link> ) : ( <> <span>{link.label}</span> 
            
            <ul> {link.children.map(child => ( 
              <li key={child.to}> 
                <Link to={child.to} className="link"> {child.label}</Link> 
              </li> ))} 
            </ul> </> )} 
          </li> ))} 
        </ul> 
      </nav> 
      
      {/* Desktop */} 
      <nav className = "navbar__desktop">
        <ul> {NAV_LINKS.map(link => ( 
          <li key={link.to}> 
            <Link to={link.to}>{link.label}</Link> 
          </li> ))} 
        </ul> 
      </nav> 
    </header> 
  ); 
}; 

export default GlobalNavbarScs;