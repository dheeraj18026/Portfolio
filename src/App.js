import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
