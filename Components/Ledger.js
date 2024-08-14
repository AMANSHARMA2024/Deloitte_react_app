import React, { useState } from 'react';
import './Ledger.css';
 
function Ledger() {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);
  const [balance, setBalance] = useState(0);
 
  const handleAddEntry = (event) => {
    event.preventDefault(); // Prevent form submission
    const newEntry = {
      date,
      description,
      debit,
      credit,
      balance: balance - debit + credit,
    };
    setEntries([...entries, newEntry]);
    setDate('');
    setDescription('');
    setDebit(0);
    setCredit(0);
    setBalance(newEntry.balance);
  };
 
  return (
    <div>
      <h1>Ledger</h1>
      <form onSubmit={handleAddEntry}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>Debit:</label>
        <input
          type="number"
          value={debit}
          onChange={(e) => setDebit(parseFloat(e.target.value))}
        />
        <br />
        <label>Credit:</label>
        <input
          type="number"
          value={credit}
          onChange={(e) => setCredit(parseFloat(e.target.value))}
        />
        <br />
        <button type="submit">Add Entry</button>
      </form>
      <h2>Entries:</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.description}</td>
              <td>{entry.debit}</td>
              <td>{entry.credit}</td>
              <td>{entry.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default Ledger;