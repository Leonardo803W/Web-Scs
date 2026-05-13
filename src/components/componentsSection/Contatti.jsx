import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contatti = () => {

    return (
        <>
            <section className = "Contatti">
                <div id = "contacts">
                    <h1>Come e dove puoi trovarci</h1>

                    <p>
                        Per qualsiasi dubbio o curiosità non esitare a contattarci per e-mail oppure telefonicamente:  
                        <div>
                          <span className = "spanContacts">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "me-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            0314153471
                          </span>
                          <span className = "spanContacts">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "me-2" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            segreteriagenerale@studenticonlestellette.it
                          </span>
                        </div>
                        
                        Altrimenti vieni a trovarci il lunedì sera dalle 21.00 presso la nostra sede in: 
                        Casermetta Porro in Via Galileo Galilei, 522040, Lurago d'Erba (CO)
                    </p>
                </div>

                <div id = "coordinate">
                    <h5>
                      Trovaci utilizzando le coordinate geografiche: <span>45.7448700, 9.2167830</span>
                    </h5>

                    

                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4675.873915881634!2d9.216336958624538!3d45.74536932320582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzQxLjUiTiA5wrAxMycwMC40IkU!5e1!3m2!1sit!2sit!4v1778243845296!5m2!1sit!2sit" 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className = "groupSocial"
            >
                  <h5>se vuoi rimanere aggiornato i nostri social sono i seguenti:</h5>
                            
                      <div>
                        <a 
                          href="https://www.tiktok.com/@studentistellette" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" 
                                          width="40" 
                                          height="30" 
                                          id = "tiktok"
                                          viewBox="0 0 16 16"
                                          style={{ cursor: "pointer" }}
                                          className = 'itemSocial'
                                  >
                                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                  </svg>
                                </a>    

                                <a 
                                      href="https://www.youtube.com/@STUDENTICONLESTELLETTE" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" 
                                          width="40" 
                                          height="30" 
                                          id = "youtube"
                                          viewBox="0 0 16 16"
                                          style={{ cursor: "pointer" }}
                                          className = 'itemSocial'
                                  >
                                    <path d="M8.051 1.999h-.102C3.536 1.999 1.999 3.536 1.999 8c0 4.464 1.537 6.001 6.001 6.001h.102C12.464 14.001 14 12.464 14 8s-1.536-6.001-5.949-6.001zM6.5 10.667V5.333L10.667 8 6.5 10.667z" />
                                  </svg>
                                </a>

                                <a 
                                      href="https://www.instagram.com/studenticonlestellette/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" id = "instagram" className = 'itemSocial' width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                  </svg>
                                </a>

                                <a 
                                      href="https://www.facebook.com/studenticonlestellette/?locale=it_IT" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                          width="40" 
                                          height="30" 
                                          id = "facebook"
                                          viewBox="0 0 16 16"
                                          style={{ cursor: "pointer" }}
                                          className = 'itemSocial'
                                >
                                  <path d="M8 0C3.582 0 0 3.582 0 8c0 3.991 2.925 7.305 6.75 7.938v-5.625H4.875V8h1.875V6.25c0-1.856 1.093-2.875 2.765-2.875.801 0 1.625.125 1.625.125v1.78h-.913c-.9 0-1.181.562-1.181 1.139V8h2l-.325 2.313H8.121V15.938C11.925 15.305 14.85 11.991 14.85 8c0-4.418-3.582-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                </motion.div>
            
        </>
    );
}

export default Contatti;