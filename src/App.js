import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import Posts from './Components/Posts/Posts';

function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck, I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!', date: '07-20-2022'}])

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <Posts addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
