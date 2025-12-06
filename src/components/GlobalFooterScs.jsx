const GlobalFooterScs = () => {

    return(
        <>
            <section id = "footer">
                <h5 className = "m-0">ScS sul’onda delle nuove tendenze social</h5>
                <div>
                    <p className = "m-0 d-inline">se vuoi rimanere aggiornato i nostri social sono i seguenti:</p>
                   
                   <div className = "d-inline">
                        <a 
                            href="https://www.tiktok.com/@studentistellette" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="black" 
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemFooter'
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
                                fill="red"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemFooter'
                            >
                                <path d="M8.051 1.999h-.102C3.536 1.999 1.999 3.536 1.999 8c0 4.464 1.537 6.001 6.001 6.001h.102C12.464 14.001 14 12.464 14 8s-1.536-6.001-5.949-6.001zM6.5 10.667V5.333L10.667 8 6.5 10.667z" />
                            </svg>
                        </a>

                        <a 
                            href="https://www.instagram.com/studenticonlestellette/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="30" 
                                fill="#933ff3"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemFooter'
                            >
                                <path d="M8 0C5.347 0 5.057.01 3.657.07 2.253.131 1.2.5.447 1.253c-.753.753-1.122 1.806-1.183 3.21C-.01 5.057 0 5.347 0 8s.01 2.943.07 4.343c.061 1.404.43 2.457 1.183 3.21.753.753 1.806 1.122 3.21 1.183C5.057 16.01 5.347 16 8 16s2.943.01 4.343-.07c1.404-.061 2.457-.43 3.21-1.183.753-.753 1.122-1.806 1.183-3.21.06-1.4.07-1.69.07-4.343s-.01-2.943-.07-4.343c-.061-1.404-.43-2.457-1.183-3.21C14.8.5 13.747.131 12.343.07 10.943.01 10.653 0 8 0zm0 3.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324zm0 6.838a2.676 2.676 0 1 0 0-5.352 2.676 2.676 0 0 0 0 5.352zm4.406-7.744a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
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
                                fill="blue"
                                viewBox="0 0 16 16"
                                style={{ cursor: "pointer" }}
                                className = 'itemFooter'
                            >
                                <path d="M8 0C3.582 0 0 3.582 0 8c0 3.991 2.925 7.305 6.75 7.938v-5.625H4.875V8h1.875V6.25c0-1.856 1.093-2.875 2.765-2.875.801 0 1.625.125 1.625.125v1.78h-.913c-.9 0-1.181.562-1.181 1.139V8h2l-.325 2.313H8.121V15.938C11.925 15.305 14.85 11.991 14.85 8c0-4.418-3.582-8-8-8z"/>
                            </svg>
                        </a>
                   </div>
                </div>
            </section>
        </>
    )
}

export default GlobalFooterScs;