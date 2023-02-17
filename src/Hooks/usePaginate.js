import { useMemo } from "react";

export const usePaginate = (apiData, itemsPerPage, currentPage) => {
  //calculate number of pages round up to closest hole number
  const numberOfPages = Math.ceil(apiData.length / itemsPerPage);

  // check if currentPage is larger than the number of pages
  // if so set the indexoflast to the fist page
  // const indexOfLast = currentPage > numberOfPages ? 1 * itemsPerPage : currentPage * itemsPerPage;

  const indexOfLast = currentPage * itemsPerPage;

  const indexOfFirst = indexOfLast - itemsPerPage;

  // useMemo only updates if apiData or the indexes changes, else it returns the memorized values
  const state = useMemo(() => {
    return apiData?.slice(indexOfFirst, indexOfLast);
  }, [apiData, indexOfFirst, indexOfLast]);

  return { state, numberOfPages };
};
