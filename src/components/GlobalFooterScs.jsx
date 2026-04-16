const GlobalFooterScs = () => {
    
    const currentYear = new Date().getFullYear();

    return(
        <>
            <section id = "footer">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">SCS</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                        Studenti con le Stellette. Un percorso formativo per sviluppare
                        consapevolezza civica e spirito di squadra.
                        </p>
                    </div>

                    <section className = "d-flex">
                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Link Utili</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href="#hero" className="hover:text-foreground transition">
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-foreground transition">
                            Chi siamo
                            </a>
                        </li>
                        <li>
                            <a href="#diary" className="hover:text-foreground transition">
                            Racconto
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-foreground transition">
                            Contatti
                            </a>
                        </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contattaci</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a
                            href="mailto:info@scs.it"
                            className="hover:text-foreground transition"
                            >
                            info@scs.it
                            </a>
                        </li>
                        <li>
                            <a href="tel:+39123456789" className="hover:text-foreground transition">
                            +39 123 456 789
                            </a>
                        </li>
                        </ul>
                    </div>
                    </section>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-8" />
                    <hr />
                    {/* Copyright */}
                    <div className="text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {currentYear} Studenti con le Stellette. Tutti i diritti
                        riservati.
                    </p>
                </div>
            </section>
        </>
    )
}

export default GlobalFooterScs;