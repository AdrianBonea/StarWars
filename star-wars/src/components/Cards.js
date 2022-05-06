import React from "react";

import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

export default function Cards(props) {
  const { people, favorite, handleSearch, handleFavorite, search } = props;

  return (
    <main className="bg-[#272727] relative">
      <div className="flex justify-center items-center">
        <input
          type="serach"
          placeholder="Search"
          className="flex justify-center rounded-lg border-2 border-white h-10 p-2 mt-10 "
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-2 place-items-center bg-[#272727] h-[100vh] relative top-20">
        {
          people
            .filter((people) => {
              if (search === "") {
                return people;
              } else if (
                people.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return people;
              }
            }) // filter the characters
            .map((people, index) => {
              return (
                <main>
                  <ul
                    key={index}
                    className={`m-2 w-60 h-40 flex flex-col justify-center align-center items-center rounded-lg border shadow-lg z-0
                        ${
                          index % 2 === 0
                            ? "border-red-500 shadow-red-500/50"
                            : "border-yellow-500 shadow-yellow-500/50"
                        }
                        bg-[#242424] hover:bg-[#242424]/25  text-white relative`}
                  >
                    <li className="m-2 text-lg font-bold flex flex-row items-center">
                      <div className="mr-1">{people.name}</div>
                      <button
                        type="button"
                        onClick={() => handleFavorite(people.name)}
                      >
                        {favorite ? (
                          <TiStarOutline
                            className={`${
                              index % 2 === 0
                                ? "text-red-500 "
                                : "text-yellow-500 "
                            }`}
                          />
                        ) : (
                          <TiStarFullOutline
                            className={`${
                              index % 2 === 0
                                ? "text-red-500 "
                                : "text-yellow-500 "
                            }`}
                          />
                        )}
                      </button>
                    </li>
                    <li className="m-2 font-light text-sm">
                      <span className="font-bold">Height: </span>
                      {people.height} cm
                    </li>
                    <li className="m-2 font-light text-sm">
                      <span className="font-bold">Birth year: </span>
                      {people.birth_year}
                    </li>
                    <div
                      className={`${
                        index % 2 === 0
                          ? "bg-gradient-to-r from-red-500 "
                          : "bg-gradient-to-r from-yellow-500/50 "
                      } absolute -left-8 -bottom-4 rounded-full w-16 h-16 z-10 `}
                    ></div>
                  </ul>
                </main>
              );
            })
            .sort((a, b) => (a.homeworld > b.homeworld ? 1 : -1)) //sort the characters by homeworld
        }
      </div>
    </main>
  );
}
