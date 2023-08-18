import { useEffect, useState } from 'react';
import './quote.css';

function FetchQuote() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [quote, setQuote] = useState([]);
  const apiKey = 't/EcXPkl89lAkR32T8GeKg==aJAPNSSjt4PdbIsU';
  const category = 'life';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setQuote(data);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="author">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <div className="author">
          <p>{ isError }</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {quote.length > 0 ? (
        <div className="author">
          <p className="quote">
            &quot;
            {quote[0]?.quote}
            &quot;
          </p>
          <p className="author">
            &#8722;
            {quote[0]?.author}
          </p>
        </div>
      ) : (
        <div className="author">
          <p className="quote">
            No quotes available, please refresh.
          </p>
        </div>
      )}

    </div>
  );
}

export default FetchQuote;
