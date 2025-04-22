import React, { useState, useEffect } from "react";
import{useParams} from "react-router-dom"

const SingleCountry = () => {
    const {name} = useParams();
    const [country, setCountry] = useState(null);
}
   useEffect (
        () => {
              fetch('https://restcountries.com/v3.1/alpha/' + name)
              .then(response => response.json())
              .then(data => setCountry(data))
          }, [name]
      );

      if(!singleCountry) return <p>Loading...</p>

export default SingleCountry;
