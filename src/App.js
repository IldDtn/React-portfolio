// component imports

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

// css imports 
import css from "./pages/Portfolio/Portfolio.css"
import css2 from "./pages/Landing/Landing.css"
import css3 from "../src/components/Header.css"
import css4 from "./pages/Contact/Contact.css"
import css5 from "../src/components/Cards.css"

// data imports
import projectsData from "./components/projects.json"

// page imports
import Portfolio from "./pages/Portfolio/Portfolio";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// react router import 
import { Routes, Route } from "react-router-dom";



function App() {

  const title = 'Ildiko Dutton'
  return (
    <>

      <Header />
      
      {/* <Landing /> */}
      {/* <About /> */}
      
      {/* {projectsData.map((name, i) => (
          <Portfolio
            project_name={name.project_name}
            project_description={name.project_description}
            github_deployed={name.github_deployed}
            github_repo={name.github_repo}
            screenshot_url={name.screenshot_url} />
      ))} */}
      

      {/* <Contact />  */}
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
