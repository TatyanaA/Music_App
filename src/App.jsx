import './App.css'
import React from 'react';
import ArtistInfo from './Artist';
import SongList from './Songs';
import MyForm from './Form';

function App() {
  return (
    <div>
      <ArtistInfo />
      <SongList />
      <MyForm />
    </div>
  );
}

export default App;
