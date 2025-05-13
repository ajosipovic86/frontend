import React, { useState, useEffect} from "react";
import "../gutenberg.css";

const About = () => {
    const [data, setData] = useState(null);
    useEffect(
            () => {
                fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/280')
                    .then(response => response.json())
                    .then(data => setData(data));
            }, []
        );
        if (!data) return <p>Loading...</p>;
    
        return (
            <div>
              
                <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
            </div>
        );
    }

 
export default About;