import { useEffect, useState } from "react";
import AppService from "../App/Appservices/Appservice";
import ProductCard from "../components/ProductCard";

import { usePaginate } from "../Hooks/usePaginate";

export const Pagination = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getApiData = async () => {
      const response = await AppService.GetList("products?limit=100");
      setApiData(response.data.products);
    };

    getApiData();
  }, []);

  // custom hook for pagnination
  // takes array you wish to paginate through and itemsperpage, and the current page
  // it returns a chunk of data at the index of the current page and the total number of pages.
  const { state, numberOfPages } = usePaginate(apiData, itemsPerPage, currentPage);

  return (
    <>
      <section className="maincontents">
        <main className="main_wrapper">
          <h1>Pagination</h1>

          <ul>
            {state &&
              state.map((product, i) => (
                <li key={i}>
                  <ProductCard product={product} />
                </li>
              ))}
          </ul>

          <div>
            <span>
              {[10, 20, 30, 40, 50].map((item, i) => (
                <button
                  onClick={() => {
                    setItemsPerPage(item);
                    setCurrentPage(1);
                  }}
                  className={itemsPerPage === item ? "active" : ""}
                  key={i}
                >
                  {item} pr side
                </button>
              ))}
            </span>
          </div>

          <div>
            <span>
              {[...Array(numberOfPages)].map((_, i) => (
                <button onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? "active" : ""} key={i}>
                  {i + 1}
                </button>
              ))}
            </span>
          </div>
        </main>
      </section>
    </>
  );
};
