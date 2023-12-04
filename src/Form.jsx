import React from 'react';

import { useState } from 'react';


function MyForm() {
    const [name, setName] = useState("");
    const [songList, setSongList] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSongList(songList.concat(name));
      
    }
  
    return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Queen's song you know:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='inputS'
          />
        </label>
        <input type="submit" className='subBtn'/>
      </form>
      <h2>Queen's songs you know: </h2>
      <ol>
        {songList.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ol>
    </>
      
    )
  }

export default MyForm;
