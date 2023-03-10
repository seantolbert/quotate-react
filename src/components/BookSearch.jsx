import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BookSearch = ({ handleBookSearch, search, setSearch }) => {
  return (
    <div className="w-full md:w-3/5 flex justify-center items-end gap-3">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for a book"
        className="p-3 bg-transparent shadow-slate800Shadow rounded-2xl w-full"
      />
      <button
        type="submit"
        className="rounded-full w-12 h-12 shadow-slate800Shadow"
        onClick={handleBookSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
export default BookSearch;
