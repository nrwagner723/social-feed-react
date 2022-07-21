import React, { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck, I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!', date: '07-20-2022'}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
