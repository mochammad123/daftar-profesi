import React, { useState } from "react";

const ProfessionCard = ({ item, handleButtonClick }) => {
  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: newUpload,
    position,
    postedAt,
    role,
    tools,
  } = item;

  return (
    <div>
      {newUpload === true && featured === true ? (
        <div className="flex flex-col lg:flex-row rounded-lg bg-white shadow-lg w-full gap-4 px-5 border-l-4 border-l-teal-600">
          <div className="relative -mt-8 lg:m-auto lg:p-0 pl-6 flex flex-col justify-start lg:w-1/12 w-full">
            <img
              className=" w-16 h-16 rounded-full "
              src={require(`${logo}`)}
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col justify-start lg:w-5/12 w-full">
            <div className="flex flex-row gap-4">
              <h6 className="text-teal-600 font-medium">{company}</h6>
              {newUpload === true ? (
                <button className="bg-teal-600 pt-1 px-2 my-auto rounded-full text-white font-medium text-xs">
                  NEW!
                </button>
              ) : (
                ""
              )}

              {featured === true ? (
                <button className="bg-gray-800 pt-1 px-2 my-auto rounded-full text-white font-medium text-xs">
                  FEATURED
                </button>
              ) : (
                ""
              )}
            </div>
            <h3 className="text-black hover:text-teal-600 text-xl font-semibold cursor-pointer">
              {position}
            </h3>
            <div className="flex flex-row lg:gap-3 gap-2 text-gray-400 text-sm">
              <p className="">{postedAt}</p>
              <p className="">.</p>
              <p className="">{contract}</p>
              <p className="">.</p>
              <p className="">{location}</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-end lg:w-6/12 w-full lg:m-auto grid grid-cols-3 grid-flow-row gap-4 pl-6 mb-4">
            <div className="flex justify-start lg:gap-4 gap-2">
              {role ? (
                <button
                  className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                  onClick={() => handleButtonClick(role)}
                >
                  {role}
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-start lg:gap-4 gap-2">
              {level ? (
                <button
                  className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                  onClick={() => handleButtonClick(level)}
                >
                  {level}
                </button>
              ) : (
                ""
              )}
            </div>

            {languages.map((language, index) => {
              return (
                <div className="flex justify-start lg:gap-4 gap-2">
                  <button
                    className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                    key={index}
                    onClick={() => handleButtonClick(language)}
                  >
                    {language}
                  </button>
                </div>
              );
            })}

            {tools.map((tool, index) => {
              return (
                <div className="flex justify-start lg:gap-4 gap-2">
                  <button
                    className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                    key={index}
                    onClick={() => handleButtonClick(tool)}
                  >
                    {tool}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center rounded-lg bg-white shadow-lg w-full gap-4 px-5 ">
          <div className="relative -mt-8 lg:m-auto lg:p-0 pl-6 flex flex-col justify-start lg:w-1/12 w-full">
            <img
              className=" w-16 h-16 rounded-full "
              src={require(`${logo}`)}
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col justify-start lg:w-5/12 w-full">
            <div className="flex flex-row gap-4">
              <h6 className="text-teal-600 font-medium">{company}</h6>
              {newUpload === true ? (
                <button className="bg-teal-600 pt-1 px-2 my-auto rounded-full text-white font-medium text-xs">
                  NEW!
                </button>
              ) : (
                ""
              )}

              {featured === true ? (
                <button className="bg-gray-800 pt-1 px-2 my-auto rounded-full text-white font-medium text-xs">
                  FEATURED
                </button>
              ) : (
                ""
              )}
            </div>
            <h3 className="text-black hover:text-teal-600 text-xl font-semibold cursor-pointer">
              {position}
            </h3>
            <div className="flex flex-row lg:gap-3 gap-2 text-gray-400 text-sm">
              <p className="">{postedAt}</p>
              <p className="my-auto">.</p>
              <p className="">{contract}</p>
              <p className="">.</p>
              <p className="">{location}</p>
            </div>
          </div>
          <hr />
          <div className="lg:flex lg:flex-row lg:justify-end lg:w-6/12 w-full lg:m-auto grid grid-cols-3 grid-flow-row gap-4 pl-6 mb-4">
            <div className="flex justify-start lg:gap-4 gap-2">
              {role ? (
                <button
                  className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                  onClick={() => handleButtonClick(role)}
                >
                  {role}
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-start lg:gap-4 gap-2">
              {level ? (
                <button
                  className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                  onClick={() => handleButtonClick(level)}
                >
                  {level}
                </button>
              ) : (
                ""
              )}
            </div>

            {languages.map((language, index) => {
              return (
                <div className="flex justify-start lg:gap-4 gap-2">
                  <button
                    className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                    key={index}
                    onClick={() => handleButtonClick(language)}
                  >
                    {language}
                  </button>
                </div>
              );
            })}

            {tools.map((tool, index) => {
              return (
                <div className="flex justify-start lg:gap-4 gap-2">
                  <button
                    className="bg-teal-50 py-1 px-2 rounded text-teal-800 hover:bg-teal-600 font-medium hover:text-white"
                    key={index}
                    onClick={() => handleButtonClick(tool)}
                  >
                    {tool}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionCard;
