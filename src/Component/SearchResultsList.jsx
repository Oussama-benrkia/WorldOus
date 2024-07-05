import ItemSearch from "./ItemSearch";
import "./SearchResultsList.css";

 const SearchResultsList = ({ results }) => {
    return (
      <div className="results-list">
        {results.map((result, id) => {
          return <ItemSearch key={id} result={result} />;
        })}
      </div>
    );
  };
  export default SearchResultsList;