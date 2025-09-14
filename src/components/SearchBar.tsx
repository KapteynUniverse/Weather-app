const SearchBar = () => {
  return (
    <form action="#">
      <label htmlFor="search" className="sr-only">
        Search for a place...
      </label>
      <input id="search" type="search" placeholder="Search for a place..." />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
