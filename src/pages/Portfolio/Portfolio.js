import projectsData from "../../components/projects.json"


function Portfolio() {
    return (
        <>
            {
                projectsData.map((project, i) => (
                    <div className="container">

                        <p>{project.project_name} </p>
                        <p>{project.project_description}</p>
                        <p>{project.github_deployed}</p>
                        <p>{project.github_repo}</p>
                        <p>{project.screenshot_url}</p>

                    </div>
                ))
            }
        </>)

}

export default Portfolio;

// do I have to import JSON file here and map it here?