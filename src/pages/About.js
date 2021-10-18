import { useState, useEffect } from "react";

function About(props) {
    // Create state to hold about data
    const [about, setAbout] = useState(null);

    // Function to make API call
    const getAboutData = async() => {
        // API call
        const response = await fetch(props.URL + 'about');
        // Turn reponse into JS object
        const data = await response.json();
        // Set the about state to the data
        setAbout(data);
    };

    // Initial call for the data inside a useEffect, only happens once a component loads
    useEffect(() => getAboutData(), []);

    // Function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h2>{about.email}</h2>
            <p>{about.bio}</p>
        </div>
    );

    // If data arrives return the result of loaded - if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;

}
    
export default About;