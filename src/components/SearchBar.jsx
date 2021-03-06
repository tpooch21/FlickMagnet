// Build SearchBar as functional stateless component
// SearchBar will build searchBar input box, and Go! Button
// When Go! Button is clicked, input in SearchBar will update the state of app


var SearchBar = (props) => {

  if (props.state === 'toWatch') {

  return (
    <div className="search-bar">

      <div className="search-here">
        <input className="type-search" type="text" placeholder="Search here"/>
        <button className="go-button" onClick={(e) => {
          props.onSubmit(e.target.previousSibling.value);
          e.target.previousSibling.value = '';
          }}>Go!</button>
      </div>

      <div className="list-buttons">
        <button className='watchedList-button' onClick={props.watchButton}>Watched</button>
        <button className='toWatchList-button selected' onClick={props.watchButton}>To Watch</button>
      </div>

    </div>
  );

  } else {

    return (
      <div className="search-bar">

        <div className="search-here">
          <input className="type-search" type="text" placeholder="Search here"/>
          <button className="go-button" onClick={(e) => {
            props.onSubmit(e.target.previousSibling.value);
            e.target.previousSibling.value = '';
            }}>Go!</button>
        </div>

        <div className="list-buttons">
          <button className='watchedList-button selected' onClick={props.watchButton}>Watched</button>
          <button className='toWatchList-button' onClick={props.watchButton}>To Watch</button>
        </div>

      </div>
    );
  }

};

export default SearchBar;