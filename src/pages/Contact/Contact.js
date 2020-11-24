import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./style.css"
import GitHub from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import resumeLogo from "../../images/resume.png"
import email from "../../images/gmail.png"
import phone from "../../images/phone.png"
import resume from "../../images/TsinMouaResume.pdf"

function Contact() {
    return (
        <div>
            <NavBar />
            <Header value="Contact" />

            <section id="contact" className="container">
                <h1>Have a project in mind? Lets connect!</h1>

                <div id="contact-information" className="row justify-content-center">
                    <img src={email} alt="Email Address" />
                    <h3>&nbsp;&nbsp;tsinmoua@gmail.com&nbsp;&nbsp;</h3>
                    <img src={phone} alt="Phone" />
                    <h3>&nbsp;( 651 ) 214-1980</h3>
                </div>

                <div className="links">
                    <a href="https://www.linkedin.com/in/tsinmoua/" target="_blank" rel="noreferrer"><input type="image"
                        src={linkedin} alt="LinkedIn Account" /></a>
                    <a href="https://github.com/tsinmoua" target="_blank" rel="noreferrer"><input type="image"
                        src={GitHub} alt="GitHub Account" /></a>
                    <a href={resume} target="_blank" rel="noreferrer"><input type="image"
                        src={resumeLogo} alt="Resume" /></a>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Contact;
