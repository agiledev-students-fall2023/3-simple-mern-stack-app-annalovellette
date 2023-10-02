// src/AboutMe.js
import React, { useEffect, useState } from 'react';

const AboutMe = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("fetching about data")
        // Fetch the about me data from the backend
        fetch('http://localhost:5002/aboutme')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // error handling..
    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="AboutMe">
            {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src="/anna.jpg" alt="Anna" style={{ width: '200px', height: 'auto', margin: "20px 0" }} />
        </div>
    );
};

export default AboutMe;