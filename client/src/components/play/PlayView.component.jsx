import axios from "axios";
import ReactPlayer from "react-player";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import watchNowLogo from "./../../images/watch-now.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PlayView() {
  const [id, setId] = useState(useParams().id);

  const [playData, setPlayData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/plays/${id}`)
      .then((res) => setPlayData(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-3">{playData.title}</h1>
      <p className="mb-3">{playData.synopsis}</p>
      <div className="mb-3 text-gray-700">
        <span className="mr-3">{playData.rating}</span>
        <span className="mr-3">{playData.duration}</span>
        <span>
          {playData.date_of_production &&
            playData.date_of_production.substr(0, 4)}
        </span>
      </div>
      <h2 className="font-medium mb-2">Through Images</h2>
      {!isOpen && (
        <Swiper
          spaceBetween={8}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          slidesPerView={"auto"}
          modules={[Navigation, Pagination]}
          className="mb-4"
        >
          {playData.images &&
            playData.images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img alt="..." className="h-36 w-60 rounded" src={image} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      <button
        onClick={handleOpen}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3"
      >
        <img className="h-6 mr-3 inline" src={watchNowLogo} alt="" />
        Watch Now
      </button>
      <table>
        <tbody>
          <tr>
            <td className="pr-5 font-medium">Authors</td>
            <td>
              {playData.authors &&
                playData.authors.map((author, index) => {
                  return (
                    <span key={index}>
                      {author}
                      {index !== playData.authors.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Cast</td>
            <td>
              {playData.cast &&
                playData.cast.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== playData.cast.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Directors</td>
            <td>
              {playData.directors &&
                playData.directors.map((director, index) => {
                  return (
                    <span key={index}>
                      {director}
                      {index !== playData.directors.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Producers</td>
            <td>
              {playData.producers &&
                playData.producers.map((producer, index) => {
                  return (
                    <span key={index}>
                      {producer}
                      {index !== playData.producers.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Production Companies</td>
            <td>
              {playData.production_companies &&
                playData.production_companies.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== playData.production_companies.length - 1 &&
                        ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Genre</td>
            <td>
              {playData.genre &&
                playData.genre.map((g, index) => {
                  return (
                    <span key={index}>
                      {g}
                      {index !== playData.genre.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Language</td>
            <td>{playData.language}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Country</td>
            <td>{playData.country}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Awards</td>
            <td>
              {playData.awards &&
                playData.awards.map((award, index) => {
                  return (
                    <span key={index}>
                      {award}
                      {index !== playData.awards.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <div className="video-overlay">
          <div className="video-container">
            <ReactPlayer
              url={playData.url}
              playing={true}
              controls={true}
              width="100%"
              height="100%"
              onEnded={handleClose}
            />
          </div>
          <div className="close-btn" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M13.4 12L24 2.4 21.6 0l-9.6 9.6L2.4 0 0 2.4l9.6 9.6L0 21.6 2.4 24l9.6-9.6 9.6 9.6 2.4-2.4z"
              />
            </svg>
          </div>
          <div className="video-title">{playData.title}</div>
        </div>
      )}
    </>
  );
}
