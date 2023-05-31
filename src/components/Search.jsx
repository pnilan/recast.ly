const { useState, useEffect } = React;
import searchYouTube from '../lib/searchYouTube.js';

var Search = ({setVideoList}) => {

  var debouncedSearch = _.debounce(searchYouTube, 500);

  const handleChange = (event) => {
    debouncedSearch(event.target.value, setVideoList);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handleChange}/>
    </div>
  );
};

export default Search;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

