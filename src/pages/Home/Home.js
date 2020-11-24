import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom";
import "./style.css"

function Home() {
  return (
    <div id="hello">
      <NavBar />
      <h1>Hello,</h1>
      <h2>My name is Tsin Moua.</h2>
      <br />
      <Link to="/about">
          <button class="btn">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
      </Link>
      <Footer />
    </div>
  )
}

export default Home;
