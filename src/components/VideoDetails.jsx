import getYouTubeVideoInfo from '../lib/getYouTubeVideoInfo.js';

var VideoDetails = ({ video }) => {

  var videoId = video.id.videoId;
  var title = video.snippet.title;
  var description = video.snippet.description;

  var handleClick = function(event) {
    console.log(video);
    getYouTubeVideoInfo(video.id.videoId, (data) => {
      console.log(data);
    });
  };


  return (
    <div className="video-player-details">
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <span className="show-more" onClick={handleClick}>Show More</span>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoDetails;
