import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  var endpoint = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

  $.ajax({
    url: endpoint,
    method: 'GET',
    data: { q: query },
    success: function(response) {
      var videosData = response.slice(0, 5);
      callback(videosData);
    }
  });
};


export default searchYouTube;
