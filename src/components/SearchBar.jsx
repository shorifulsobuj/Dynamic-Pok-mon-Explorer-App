const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border-b-2 border-gray-500 focus:outline-none px-4 py-2 w-80"
      />
    </div>
  );
};

export default SearchBar;
