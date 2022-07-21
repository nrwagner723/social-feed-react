import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import Posts from './Components/Posts/Posts';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck, I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!', date: '07-20-2022'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='row'>
        <div className='col-md-12'>
          <div className='border-box'>
            <Posts addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-md-12'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
