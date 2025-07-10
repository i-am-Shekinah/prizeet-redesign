import { useState } from 'react';

import { SlidersHorizontal } from 'lucide-react';

import SearchBar from './SearchBar';

const HeroSearch = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <div className="flex items-center gap-2 w-full">
        <SearchBar
          placeholder="phones under 50k..."
          query={query}
          setQuery={setQuery}
        />
        <div
          onClick={() => setShowFilters((prev) => !prev)}
          className="bg-orange-400 rounded-md p-4 cursor-pointer hover:bg-orange-500 transition-colors duration-200"
        >
          <SlidersHorizontal className="text-black cursor-pointer" />
        </div>
      </div>

      {/* filters */}
      <div className="bg-white rounded-md">
        {/* price range */}

        {showFilters && (
          <div className="mt-4 bg-white p-4 rounded-md shadow-sm grid gap-4 md:grid-cols-2 ">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="₦0"
                  className="w-1/2 px-2 py-1 border rounded-md bg-white border-black"
                />
                <input
                  type="number"
                  placeholder="₦10,000,000"
                  className="w-1/2 px-2 py-1 border rounded-md bg-white border-black"
                />
              </div>
            </div>

            {/* Pay on Delivery */}
            <div>
              <label className="block text-sm font-medium mb-1">Delivery</label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="appearance-none cursor-pointer border-2 border-orange-400 rounded-sm size-5 checked:bg-orange-400 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:top-[-1px] checked:before:text-sm"
                />
                Pay on Delivery
              </label>
            </div>

            {/* Promotions */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Promotions
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="appearance-none cursor-pointer border-2 border-orange-400 rounded-sm size-5 checked:bg-orange-400 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:top-[-1px] checked:before:text-sm"
                />
                Promo / Discount
              </label>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Condition
              </label>
              <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer border-2 border-orange-400 rounded-sm size-5 checked:bg-orange-400 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:top-[-1px] checked:before:text-sm"
                  />
                  New
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer border-2 border-orange-400 rounded-sm size-5 checked:bg-orange-400 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:top-[-1px] checked:before:text-sm"
                  />
                  Used
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer border-2 border-orange-400 rounded-sm size-5 checked:bg-orange-400 relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:top-[-1px] checked:before:text-sm"
                  />
                  Refurbished
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* popular searches */}
      <div className="flex flex-wrap gap-4 items-center mt-4">
        <p className="text-white">Popular searches:</p>
        <p
          className="bg-white px-4 rounded-full cursor-pointer"
          onClick={() => setQuery("I want affordable phones")}
        >
          I want affordable phones
        </p>
        <p
          className="bg-white px-4 rounded-full cursor-pointer"
          onClick={() => setQuery("Show me premium phones")}
        >
          Show me premium phones
        </p>
      </div>
    </>
  );
};

export default HeroSearch;
