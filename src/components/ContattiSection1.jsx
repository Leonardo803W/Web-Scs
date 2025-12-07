const ContattiSection1 = () => {
    return (
        <>
            <section>
                <h1 className='m-3'>Contatti</h1>
                <hr />

                <div>
                    <h5 className = "m-3">Come e dove puoi trovarci</h5>

                    <p className = "m-3">
                        Per qualsiasi dubbio o curiosità non esitare a contattarci per e-mail al seguente indirizzo: segreteriagenerale@studenticonlestellette.it
                        oppure telefonicamente al numero h24: 0314153471 

                        Altrimenti vieni a trovarci il lunedì sera dalle 21.00 presso la nostra sede in: 
                        Casermetta Porro in Via Galileo Galilei, 522040, Lurago d'Erba (CO)
                    </p>
                </div>

                <hr />

                <div id = "coordinate">
                    <h5>Trovaci utilizzando le coordinate geografiche</h5>

                    <p>45.7448700, 9.2167830</p>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13022.464193011034!2d9.206483275914069!3d45.744869537276294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzQxLjUiTiA5wrAxMycwMC40IkU!5e1!3m2!1sit!2sit!4v1765116022776!5m2!1sit!2sit"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default ContattiSection1;