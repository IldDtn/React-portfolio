function Portfolio (props) {
    return (
        <div id='container'>
            <p>{props.project_name}</p>
            <p>{props.project_description}</p>
            <p>{props.github_deployed}</p>
            <p>{props.github_repo}</p>
            <p>{props.screenshot_url}</p>

        </div>

    )

}

export default Portfolio;