import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlaySearch() {
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState(decodeURI(useParams().id));

  const [queryResult, setQueryResult] = useState([]);

  const [plays, setPlays] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/plays/search", {
        input: query,
      })
      .then((res) => {
        setQueryResult(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });

    axios
      .get("http://localhost:4000/plays/")
      .then((res) => setPlays(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  const renderView = () => {
    if (queryResult.length === 0) {
      return (
        <>
          <h1 className="font-medium text-xl mb-4">
            We didn't find any matches for "{query}". Browse our most popular
            theatre plays and musicals.
          </h1>
          <h1 className="font-medium text-xl mb-2">Popular on Stageflix</h1>
          <div className="flex flex-wrap">
            {plays.map((play, index) => {
              return (
                <Link key={index} to={`/plays/${play._id}`} className="card">
                  <img
                    alt="..."
                    className="h-36 w-60 rounded mr-1 mb-1"
                    src={play.images[0]}
                  />
                  <div className="details h-36 w-60 rounded mr-1 mb-1 p-4 flex flex-col justify-start">
                    <h2 className="font-medium line-clamp-1">{play.title}</h2>
                    <p className="line-clamp-4">{play.synopsis}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      );
    }
    return (
      <>
        <h1 className="font-medium text-xl mb-4">Results for "{query}"</h1>
        <div className="flex flex-wrap">
          {queryResult.map((result, index) => {
            return (
              <Link key={index} to={`/plays/${result._id}`} className="card">
                <img
                  alt="..."
                  className="h-36 w-60 rounded mr-1 mb-1"
                  src={result.images[0]}
                />
                <div className="details h-36 w-60 rounded mr-1 mb-1 p-4 flex flex-col justify-start">
                  <h2 className="font-medium line-clamp-1">{result.title}</h2>
                  <p className="line-clamp-4">{result.synopsis}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return <>{!isLoading && renderView()}</>;
}
