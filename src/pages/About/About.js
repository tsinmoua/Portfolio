import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./style.css"
import ProfilePic from "../../images/ProfilePic.png"

function About() {
    return (
        <div id="about">
            <NavBar />

            <Header value="About" />

            <section className="about-container">
                <div className="row justify-content-center">
                    <div className="circle-image" >
                        <img src={ProfilePic} alt="Profile" />
                    </div>
                </div>
                <div>
                    <p>
                        I am a Full Stack Developer based in St. Paul, Minnesota.
                    <br />I can build and provide support for your full stack web applications.
                    <br />Feel free to take a look at my latest projects in my projects tab.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About;
