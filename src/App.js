import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck, I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!', date: '07-20-2022'}])

  return (
    <div>
      
    </div>
  );
}

export default App;
