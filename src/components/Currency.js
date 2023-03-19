import React, { useState } from 'react';

const Currency = ({ changeCurrency }) => {
  const [currency, setCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
    changeCurrency(selectedCurrency);
  }

  return (
    <div className='alert alert-secondary'>
      <label style={{ marginLeft: '1rem', backgroundColor: '#9be0a0', color: 'white' }}>Currency
        <select name='hover_color' id="currency" onChange={handleCurrencyChange} style={{ marginLeft: '1rem', backgroundColor: '#9be0a0', color: 'white' }}>
          <option style={{ color: 'black' }} value="£">£ Pound</option>
          <option style={{ color: 'black' }} value="$">$ Dollar</option>
          <option style={{ color: 'black' }} value="€">€ Euro</option>
          <option style={{ color: 'black' }} value="₹">₹ Rupee</option>
        </select>
      </label>
    </div>
  );
};

export default Currency;
