import Footer from "./footer";
import Navbar from "./Navbar";
import Section1 from "./section1";

const SchermataHome = () => {

    return(
        <>
            <header>
                <Navbar/>
            </header>
            
            <main>
                <Section1/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default SchermataHome;