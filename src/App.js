// component imports

import Header from "./components/Header";
import Footer from "./components/Footer";

// css imports 
import css from "./pages/Portfolio/Portfolio.css"

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

      <Footer />
    </>
  );
}

export default App;
