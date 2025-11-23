const Footer = () => {

    return(
        <>
            <section id = "footer">
                <h5 className = "m-0">ScS sul’onda delle nuove tendenze social</h5>
                <div>
                    <p className = "m-0">se vuoi rimanere aggiornato i nostri social sono i seguenti:</p>
                   
                   <a 
                        href="https://www.tiktok.com/@studentistellette" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            fill="currentColor" 
                            className="bi bi-tiktok" 
                            viewBox="0 0 16 16"
                            style={{ cursor: "pointer" }}
                        >
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Footer;