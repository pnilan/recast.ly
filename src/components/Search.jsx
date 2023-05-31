const { useState, useEffect } = React;
import searchYouTube from '../lib/searchYouTube.js';
const debounce = lodash.debounce;

// import debounce from '../node_modules/lodash.debounce';
// import debounce from '../node_modules/lodash.debounce';

var Search = ({setVideoList}) => {
//We will use this state to store the user's input.
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchYouTube(searchTerm, setVideoList);
  }, [searchTerm]);

  // useEffect(() => {
  //   const debouncedSearch = debounce(handleSearch, 500);

  //   debouncedSearch(searchTerm);


  //   return () => {
  //     debouncedSearch.cancel();
  //   };
  // }, [searchTerm, handleSearch]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedHandleChange = (event) => {
    debounce(handleChange, 500);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={searchTerm} onChange={debouncedHandleChange} />
    </div>
  );
};

export default Search;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

