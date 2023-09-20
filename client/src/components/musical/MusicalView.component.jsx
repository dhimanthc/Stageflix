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

export default function MusicalView() {
  const [id, setId] = useState(useParams().id);

  const [musicalData, setMusicalData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/musicals/${id}`)
      .then((res) => setMusicalData(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-3">{musicalData.title}</h1>
      <p className="mb-3">{musicalData.synopsis}</p>
      <div className="mb-3 text-gray-700">
        <span className="mr-3">{musicalData.rating}</span>
        <span className="mr-3">{musicalData.duration}</span>
        <span>
          {musicalData.date_of_production &&
            musicalData.date_of_production.substr(0, 4)}
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
          {musicalData.images &&
            musicalData.images.map((image, index) => {
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
            <td className="pr-5 font-medium">Composers</td>
            <td>
              {musicalData.composers &&
                musicalData.composers.map((composer, index) => {
                  return (
                    <span key={index}>
                      {composer}
                      {index !== musicalData.composers.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Lyricists</td>
            <td>
              {musicalData.lyricists &&
                musicalData.lyricists.map((lyricist, index) => {
                  return (
                    <span key={index}>
                      {lyricist}
                      {index !== musicalData.lyricists.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Book Writers</td>
            <td>
              {musicalData.book_writers &&
                musicalData.book_writers.map((writer, index) => {
                  return (
                    <span key={index}>
                      {writer}
                      {index !== musicalData.book_writers.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Cast</td>
            <td>
              {musicalData.cast &&
                musicalData.cast.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== musicalData.cast.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Directors</td>
            <td>
              {musicalData.directors &&
                musicalData.directors.map((director, index) => {
                  return (
                    <span key={index}>
                      {director}
                      {index !== musicalData.directors.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Producers</td>
            <td>
              {musicalData.producers &&
                musicalData.producers.map((producer, index) => {
                  return (
                    <span key={index}>
                      {producer}
                      {index !== musicalData.producers.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Production Companies</td>
            <td>
              {musicalData.production_companies &&
                musicalData.production_companies.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== musicalData.production_companies.length - 1 &&
                        ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Genre</td>
            <td>
              {musicalData.genre &&
                musicalData.genre.map((g, index) => {
                  return (
                    <span key={index}>
                      {g}
                      {index !== musicalData.genre.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Language</td>
            <td>{musicalData.language}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Country</td>
            <td>{musicalData.country}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Awards</td>
            <td>
              {musicalData.awards &&
                musicalData.awards.map((award, index) => {
                  return (
                    <span key={index}>
                      {award}
                      {index !== musicalData.awards.length - 1 && ", "}
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
              url={musicalData.url}
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
          <div className="video-title">{musicalData.title}</div>
        </div>
      )}
    </>
  );
}
