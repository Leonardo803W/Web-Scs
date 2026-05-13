import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

import {datiCorsi} from '../../data/datiCorsi';
import { p, section } from "framer-motion/client";

const VecchiCorsiSection1 = () => {

    const [index, setIndex] = useState(0);
    const visibleCourses = datiCorsi.slice(0, 8);
    
      const nextSlide = () => {
        setIndex((prev) => (prev + 1) % visibleCourses.length);
      };
    
      const prevSlide = () => {
        setIndex((prev) => (prev - 1 + visibleCourses.length) % visibleCourses.length);
      };

    return(
        <>

            <section id = "vecchiCorsi">
                <div className="carousel-containerCorsi">
                          <div
                            className="carousel-trackCorsi"
                            style={{
                                transform: `translateX(-${index * 100}%)`
                            }}
                            >
                            {datiCorsi.slice(0, 8).map((item, i) => (
                              <section
                                    key={item.id}
                                    className={`slideCorsi ${i === index ? "active" : ""}`}
                                    id={`corsiEffettivi-${item.nameCourse.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                <h5>Corso {item.nameCourse}</h5>
                                <p>{item.content}</p>
                                <article></article>

                                <div className = "m-4 text-center">
                                    <div>
                                        Relazione del corso
                                        <a 
                                            href={item.relazioneCorso}
                                            download
                                            className="btn btn-primary m-4">
                                            Scarica qui
                                        </a>  
                                    </div>
                                    <div>
                                        Programma della settimana
                                        <a 
                                            href={item.programmaSettimana}
                                            download
                                            className="btn btn-primary m-4">
                                            Scarica qui
                                        </a>  
                                    </div>
                                </div>
                              </section>
                            ))}
                          </div>
                </div>
                <div className = "buttonGroupCorsi">
                    <Button variant="outline-primary" size="lg" onClick={prevSlide}>
                        &lt;
                    </Button>
                    <Button variant="outline-primary" size="lg" onClick={nextSlide}>
                        &gt;
                    </Button>
                </div>
            </section>
        </>
    )
}

export default VecchiCorsiSection1;