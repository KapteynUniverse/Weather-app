const SearchBar = () => {
  return (
    <form
      action="#"
      className="flex flex-col sm:flex-row gap-3 md:gap-4 max-md:w-full md:max-w-[41.125rem] mx-auto"
    >
      <label htmlFor="search" className="sr-only">
        Search for a place...
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search for a place..."
        className="bg-neutral-800 text-neutral-200 rounded-xl flex-1"
      />
      <button className="bg-blue-500 rounded-xl">Search</button>
    </form>
  );
};

export default SearchBar;
