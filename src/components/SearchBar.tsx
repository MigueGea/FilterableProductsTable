import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  inStockOnly: boolean;
  filterText: string;
  setFilterText: Dispatch<SetStateAction<string>>;
  setInStockOnly: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  inStockOnly,
  filterText,
  setFilterText,
  setInStockOnly,
}) => {
  const handleCheckboxChange = () => {
    setInStockOnly(!inStockOnly);
  };

  const handleFilterText = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleFilterText}
        value={filterText}
        placeholder="Buscar..."
      ></input>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={inStockOnly}
        ></input>
        Show stock products only
      </label>
    </form>
  );
};
