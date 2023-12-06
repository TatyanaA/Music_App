import React, { useState } from 'react';
import fred from "/freddie-mercury-71848_640.jpg"; 

const SongList = () => {
  const [likedTracks, setLikedTracks] = useState([]);

  const handleLike = (trackName) => { if (likedTracks.includes(trackName)) {
      setLikedTracks(likedTracks.filter((track) => track !== trackName));
    } else {
        setLikedTracks(likedTracks.concat(trackName));
    }
  };

  return (
    <>
      <h2>Songs List</h2>
      <div className='songList'>
        <ol>
            <li>
            <div className='songs' >Bohemian Rhapsody, Release Date: October 31, 1975 </div>

            <button onClick={() => handleLike('track1')}>
                {likedTracks.includes('track1') ? 'Like more' : 'Like'}
            </button>
            
            </li>

            <li>
            <div className='songs' >Another One Bites the Dust", Release Date: June 22, 1980</div>
            <button onClick={() => handleLike('track2')}>
                {likedTracks.includes('track2') ? 'Like more' : 'Like'}
            </button>
            </li>

            <li>
            <div className='songs'>We Will Rock You, Release Date: October 7, 1977</div>
            <button onClick={() => handleLike('track3')}>
                {likedTracks.includes('track3') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>We Are the Champions, Release Date: October 7, 1977</div>
            <button onClick={() => handleLike('track4')}>
                {likedTracks.includes('track4') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Don't Stop Me Now, Release Date: January 26, 1979</div>
            <button onClick={() => handleLike('track5')}>
                {likedTracks.includes('track5') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Somebody to Love, Release Date: November 12, 1976</div>
            <button onClick={() => handleLike('track6')}>
                {likedTracks.includes('track6') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Under Pressure, Release Date: October 26, 1981</div>
            <button onClick={() => handleLike('track7')}>
                {likedTracks.includes('track7') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Radio Ga Ga, Release Date: January 23, 1984 </div>
            <button onClick={() => handleLike('track8')}>
                {likedTracks.includes('track8') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Crazy Little Thing Called Love, Release Date: October 5, 1979 </div>
            <button onClick={() => handleLike('track9')}>
                {likedTracks.includes('track9') ? 'Like more' : 'Like'}
            </button>
            </li>
            <li>
            <div className='songs'>Killer Queen, Release Date: October 21, 1974</div>
            <button onClick={() => handleLike('track10')}>
                {likedTracks.includes('track10') ? 'Like more' : 'Like'}
            </button>
            </li>


            
        </ol>
        <img src={fred}></img>
      </div>

      
    </>
  );
};

export default SongList;
