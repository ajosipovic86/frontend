import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch()
        .then(response => response.json())
        .then ((data) => setCountries(data))
    }, []);

    return (
  
       

    );
};
export default Countries;