import Header from "./components/Header";
import Footer from "./components/Footer";

import projectsData from "./components/projects.json"

import Portfolio from "./pages/Portfolio";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {Routes, Route} from "react-router-dom";



function App() {

  
  const title = 'Ildiko Dutton'
  return (
    <>

      <Header title={title} />
      <div>
        {projectsData.map((name, i) => (
          <Portfolio
            project_name={name.project_name}
            project_description={name.project_description}
            github_deployed={name.github_deployed}
            github_repo={name.github_repo}
            screenshot_url={name.screenshot_url} />
        ))}
      </div>
      <Footer title={title} />
      <Landing />
      <About />
      <Contact />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
