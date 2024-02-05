// import './App.css'
// import React from 'react';

// import { ArtistInfo, SongList, MyForm } from './components'


// function App() {
//   return (
//     <div>
//       <ArtistInfo />
//       <SongList />
//       <MyForm />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'

// import './App.css'
const App = () => {
  return (
    // <div className="App">
    <div>


     
      <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/photos" element={<Pages.Photos />} />
        {/* <Route path="shop/:id"  element={<Pages.ShopItem />} />
        <Route path="*" element={<Pages.NotFound />} /> */}


        </Route>
      </Routes>

    </div>
  )
}
export default App
