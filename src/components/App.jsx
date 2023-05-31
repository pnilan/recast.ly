import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import React, { useState } from 'react';

// App
// || => Search
// || => VideoPlayer
// || => VideoList
//         || => VideoListEntry
//

// import VideoList from './VideoList';
var App = () => {

  const [video, setVideo] = useState(exampleVideoData[0]);

  // 1. Set up useState hook for video to pass
  // down to VideoPlayer component
  // 2. Create 'play video' function that
  // invokes setVideo with clicked video
  // list entry

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video}/>

        </div>
        <div className="col-md-5">
          {/* changed this */}
          <VideoList videos={exampleVideoData} />
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
