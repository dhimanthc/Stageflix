import { useState } from "react";
import Cookies from "js-cookie";

import { Link, useLocation } from "react-router-dom";

import theatreLogo from "./../images/theatre.png";
import homeTheatreLogo from "./../images/theatre-home.png";
import userProfileLogo from "./../images/user.png";

export default function Navbar() {
  const location = useLocation();

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmission = (event) => {
    if (event.keyCode === 13) {
      if (location.pathname === "/plays") {
        window.location = `/plays/search/${encodeURI(query)}`;
      } else if (location.pathname === "/musicals") {
        window.location = `/musicals/search/${encodeURI(query)}`;
      } else if (location.pathname === "/shows") {
        window.location = "/error";
      } /* home page */ else {
        window.location = "/error";
      }
    }
  };

  const getLogoStlye = () => {
    if (location.pathname === "/") {
      return { filter: "brightness(1000%)" };
    }
    return {};
  };

  const [isCardVisible, setCardVisible] = useState(false);

  const handleMouseEnter = () => {
    setCardVisible(true);
  };

  const handleMouseLeave = () => {
    setCardVisible(false);
  };

  const clearCookie = () => {
    return new Promise((resolve) => {
      Cookies.remove("token");
      resolve();
    });
  };

  const logout = () => {
    clearCookie().then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <>
      <nav className="w-full border-gray-200 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={location.pathname === "/" ? homeTheatreLogo : theatreLogo}
              className="h-6 mr-3 sm:h-6"
              alt="..."
              style={getLogoStlye()}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Stageflix
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                onChange={handleChange}
                onKeyDown={handleQuerySubmission}
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="flex items-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={userProfileLogo}
                onClick={logout}
                className="h-6 ml-3 sm:h-6"
                alt="..."
              />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    location.pathname === "/" ? "text-blue-700" : ""
                  } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shows"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    location.pathname === "/shows" ? "text-blue-700" : ""
                  } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer`}
                >
                  Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/plays"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    location.pathname === "/plays" ? "text-blue-700" : ""
                  } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer`}
                >
                  Plays
                </Link>
              </li>
              <li>
                <Link
                  to="/musicals"
                  className={`block py-2 pl-3 pr-4 rounded ${
                    location.pathname === "/musicals" ? "text-blue-700" : ""
                  } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-pointer`}
                >
                  Musicals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
