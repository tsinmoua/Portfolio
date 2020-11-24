import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project"
import Header from "../components/Header/Header"


function Projects() {
    return (
        <div>
            <NavBar />
                <Header value="Projects" />
                <Project />
            <Footer />
        </div>
    )
}

export default Projects;


