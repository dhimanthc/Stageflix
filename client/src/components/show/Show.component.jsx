import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Show() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/shows")
      .then((res) => setShows(res.data))
      .catch((err) => (window.location = "/error"));
  });

  return (
    <>
      <div className="grid grid-cols-7 gap-3">
        {shows.map((show, index) => {
          return (
            <Link to={`/shows/${show._id}`} key={index}>
              <div className="rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="h-72 w-full rounded-lg"
                  src={show.images[0]}
                  alt=""
                />
                <div className="py-5">
                  <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                    {show.title}
                  </h5>
                  <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    {show.description}
                  </p>
                  <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    {show.genre &&
                      show.genre.map((value, index) => {
                        return (
                          <span>
                            {value}
                            {index !== show.genre.length - 1 && ", "}
                          </span>
                        );
                      })}
                  </p>
                  <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    {show.duration}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
