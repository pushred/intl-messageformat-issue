import React from 'react';
import IntlMessageFormat from 'intl-messageformat';

function App() {
  const message = new IntlMessageFormat(
    'Dollar value: {amount, number, dollars}',
    'en-US', {
      number: {
        dollars: {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }
      }
    }
  ).format({
    amount: 20500.50
  });

  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
