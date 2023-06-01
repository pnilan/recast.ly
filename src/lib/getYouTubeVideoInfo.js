import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var getYouTubeVideoInfo = (videoId, callback) => {
  var endpoint = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/getRating';

  $.ajax({
    url: endpoint,
    method: 'GET',
    data: { q: videoId },
    success: function(response, string) {
      console.log(string);
      callback(response);
    }
  });
};

export default getYouTubeVideoInfo;