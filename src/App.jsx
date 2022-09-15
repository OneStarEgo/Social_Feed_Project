import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayPosts/DisplayPosts';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import './App.css';


function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h5 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h5>
        <div className='container-fluid'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;