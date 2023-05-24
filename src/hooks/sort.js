import { useState } from "react";

export const useSortData = (data) => {
  const [sortData, setSortData] = useState([]);

  function sort(option) {
    if (option === "ASC") {
      const sortedData = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData([...data, sortedData]);
    } else if (option === "DESC") {
      const sortedData = data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData([...data, sortedData]);
    } else {
      return 0;
    }
  }

  return { sortData, sort };
};
