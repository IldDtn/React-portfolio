
function Portfolio (props) {
    return (
        <div id='container'>
            
            <p class='projectDetail'>{props.project_name } </p> 
            <p class='projectDetail'>{props.project_description}</p>
            <p class='projectDetail'>{props.github_deployed}</p>
            <p class='projectDetail'>{props.github_repo}</p>
            <p class='projectDetail'>{props.screenshot_url}</p>

        </div>

    )

}

export default Portfolio;