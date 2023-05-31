const { useState, useEffect } = React;
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

// App
// || => Search
// || => VideoPlayer
// || => VideoList
//         || => VideoListEntry

var App = () => {

  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(exampleVideoData[0]);

  useEffect(() => {
    searchYouTube('', setVideoList);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search setVideoList={setVideoList} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videoList} handleClick={setVideo} />
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
