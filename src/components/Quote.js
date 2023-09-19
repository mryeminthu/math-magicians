import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': 'WGu0pEvy/ezodGVPCwZngw==3WN0Uexnduuh4oAt' },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="quote-block">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote-block">
        <h2>Error: An error occurred!</h2>
      </div>
    );
  }

  return (
    <div className="quote-block">
      <p>{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  );
};

export default Quote;
