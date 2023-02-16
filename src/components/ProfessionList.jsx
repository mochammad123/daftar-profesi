import React, { useEffect, useState } from "react";
import dataApi from "./data/data.json";
import ProfessionCard from "./ProfessionCard";

const ProfessionList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      return;
    }
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
  };

  console.log(dataApi);

  const filteredData = dataApi.filter((job) => {
    const roleMatch = selectedFilters.includes(job.role);
    const levelMatch = selectedFilters.includes(job.level);
    const languageMatch = selectedFilters.some((language) =>
      job.languages.includes(language)
    );
    const toolsMatch = selectedFilters.some((tool) => job.tools.includes(tool));

    // if (roleMatch && levelMatch && languageMatch && !toolsMatch) {
    //   return roleMatch && levelMatch && languageMatch;
    // } else if (roleMatch && levelMatch && languageMatch && toolsMatch) {
    //   return roleMatch && levelMatch && languageMatch && toolsMatch;
    // }

    // } else if (
    //   roleMatch &&
    //   levelMatch &&
    //   languageMatch &&
    //   toolsMatch === true
    // ) {
    // return roleMatch && levelMatch && languageMatch && toolsMatch;
    // }

    console.log(toolsMatch);

    return roleMatch || levelMatch || languageMatch || toolsMatch;
  });

  console.log(filteredData);

  return (
    <div className="bg-cyan-50 min-w-full min-h-screen w-full">
      <div className="relative bg-teal-600 overflow-hidden z-0">
        {width > 768 ? (
          <img
            src={require("./../components/assets/images/bg-header-desktop.png")}
            alt="header"
          />
        ) : (
          <img
            src={require("./../components/assets/images/bg-header-mobile.png")}
            alt="header"
          />
        )}
      </div>
      <div className="container max-w-screen-lg mx-auto py-5 px-5">
        <div className="relative rounded-lg bg-white shadow-lg w-full gap-4 px-5 -mt-12 z-50">
          <div className="flex flex-row py-5">
            <div className="flex justify-start w-11/12 gap-2">
              {selectedFilters.map((filter, index) => {
                return (
                  <div className="flex flex-row" key={index}>
                    <div className="rounded-md shadow-sm">
                      <p className="bg-teal-50 text-teal-700 rounded-l px-2">
                        {filter}
                      </p>
                    </div>
                    <button
                      className="bg-teal-600 text-white rounded-r hover:bg-gray-900"
                      onClick={() => {
                        const newFilters = [...selectedFilters];
                        newFilters.splice(index, 1);
                        setSelectedFilters(newFilters);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end text-teal-700 w-1/12">
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setSelectedFilters([]);
                }}
              >
                Clear
              </p>
            </div>
          </div>
        </div>

        {!filteredData || filteredData.length === 0 ? (
          <div className="flex flex-col justify-center lg:gap-4 gap-16 mt-20 mb-10">
            {dataApi.map((item, index) => {
              return (
                <ProfessionCard
                  item={item}
                  key={index}
                  handleButtonClick={handleButtonClick}
                />
              );
            })}{" "}
          </div>
        ) : (
          <div className="flex flex-col justify-center lg:gap-4 gap-16 mt-20 mb-10">
            {filteredData.map((item, index) => {
              return (
                <ProfessionCard
                  item={item}
                  key={index}
                  handleButtonClick={handleButtonClick}
                />
              );
            })}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionList;
