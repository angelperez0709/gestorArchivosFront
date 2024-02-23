import { useRef } from "react";

const Searcher = ({filter,value}) => {
  const ref = useRef(null);
  const handleSearch = () => {
    filter(ref.current.value);
  };

  return (
    <div className="flex items-center h-full">
      <input
        ref={ref}
        className="ml-5 border p-1 rounded-lg outline-none text-sm"
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searcher;
