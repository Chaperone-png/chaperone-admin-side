import React from "react";
import { wholeProductData } from "@/configs/constants/testDataforProducts";
import SearchProductGrid from "../collections/search/page";
import { SearchPageProps } from "@/types/search";

const SearchPage: React.FC<SearchPageProps> = ({ query }) => {
  const filteredData = wholeProductData;

  return (
    <div className="search-page mx-auto max-w-7xl responsive-px-15 mb-12 pt-10">
      {/* <h1 className="text-2xl font-semibold text-[var(--text-Primary)] mb-2">
        Search Results
      </h1> */}

      <>
        {filteredData.length > 0 ? (
          <>
            <p className="text-md text-gray-600 mb-4">
              Found <strong>{filteredData.length}</strong> result
              {filteredData.length > 1 ? "s" : ""} for:{" "}
              <strong>“{query}”</strong>
            </p>
            <SearchProductGrid />
          </>
        ) : (
          <p className="mt-4 text-lg text-gray-500 font-medium">
            No results found for <strong>“{query}”</strong>
          </p>
        )}
      </>
    </div>
  );
};

export default SearchPage;
