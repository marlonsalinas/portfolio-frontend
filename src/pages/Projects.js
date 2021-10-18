import { useState, useEffect } from "react";

function Projects(props) {
    // Create state to hold about data
    const [projects, setProjects] = useState(null);

    // Function to make API call
    const getProjectsData = async() => {
        // API call
        const response = await fetch(props.URL + 'projects');
        // Turn reponse into JS object
        const data = await response.json();
        // Set the projects state to the data
        setProjects(data);
    };

    // Initial call for the data inside a useEffect, only happens once a component loads
    useEffect(() => getProjectsData(), []);

    // Function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
          <div>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>live site</button>
            </a>
          </div>
        ));
      };

    // If data arrives return the result of loaded - if not, an h1 that says loading
    return projects ? loaded() : <h1>Loading...</h1>;

}
    
export default Projects;