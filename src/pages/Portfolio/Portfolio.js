import projectsData from "../../components/projects.json"


function Portfolio() {
    return (
        <>
            {
                projectsData.map((project, i) => (
                    <div className="container">

                        <p className='appName'>{project.project_name} </p>
                        <p className='appDescription'>{project.project_description}</p>
                        <p className='deployed'>{project.github_deployed}</p>
                        <p className='repo'>{project.github_repo}</p>
                        <img src={project.screenshot_url} className='picture'></img>

                    </div>
                ))
            }
        </>)

}

export default Portfolio;

// do I have to import JSON file here and map it here?