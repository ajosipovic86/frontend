import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Exchange = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("EUR");

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?base=" + currency)
      .then(response => response.json())
      .then(data => setCurrencyRates(data))
      .catch(error => console.error("Error fetching exchange rates:", error));
  }, [currency]);

  if (!currencyRates.rates) return <p>Loading...</p>;

  return (
    <div className="container blog">
      <h1>Exchange Rates</h1>

      <div>
        <select
          name="currency"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {Object.keys(currencyRates.rates).map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        {Object.keys(currencyRates.rates).map((cur) => (
          <p key={cur}>
            <strong>{cur}:</strong> {currencyRates.rates[cur] * amount}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Exchange;
