import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Exchange = () => {
const  [currencyRates, setCurrencyRates] = useState([]);
const [amount, setAmount] = useState(1);
const [currency, setCurrency] =useState("EUR");

    useEffect(() => {
         fetch("https://api.frankfurter.dev/v1/latest?base=" + currency)
         .then(response => response.json())
         .then(data => setCurrencyRates(data));
         .catch(error => console.error("Error fetching exchange rates:", error)); 
         
         }, []);

         if (!currencyRates.rates) return <p>Loading...</p>;
         
        
  return (
    <div className="container blog">
    <h1>Exchange Rates</h1>
   
    <div>
      <select 
      name="currency" 
      id="currency" 
      value={currency} 
      onChange={(e) => setCurrency(e.target.value)}>
         
         {Object.keys(currencyRates.rates).map((currency) => (
      <option key={currency} value={currency}>
      {currency}</option>
    ))}
        </select>
      <input 
      type="number" 
      value={amount} 
      onChange={(e)
        =>setAmount(e.target.value)}/>

      {Object.keys(currencyRates.rates).map((currency) => (
      <p key={currency}>
      <strong>{currency}:</strong></p> 
      {currencyRates.rates[currrency] * amount}</p>
    ))}
    
    </div>
    

export default Exchange;