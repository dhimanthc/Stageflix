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

export default function ShowView() {
  const [id, setId] = useState(useParams().id);

  const [showData, setShowData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/shows/${id}`)
      .then((res) => setShowData(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-3">{showData.title}</h1>
      <p className="mb-3">{showData.description}</p>
      <div className="mb-3 text-gray-700">
        <span className="mr-3">{showData.rating}</span>
        <span className="mr-3">{showData.duration}</span>
        <span>{showData.date && showData.date.substr(0, 4)}</span>
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
          {showData.images &&
            showData.images.slice(1).map((image, index) => {
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
        Watch Trailer
      </button>
      <table>
        <tbody>
          <tr>
            <td className="pr-5 font-medium">Venue</td>
            <td>{showData.venue}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Address</td>
            <td>{showData.address}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Ticket Price</td>
            <td>${showData.ticketPrice}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Tickets Available</td>
            <td>{showData.ticketsAvailable}</td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Authors</td>
            <td>
              {showData.authors &&
                showData.authors.map((author, index) => {
                  return (
                    <span key={index}>
                      {author}
                      {index !== showData.authors.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Cast</td>
            <td>
              {showData.cast &&
                showData.cast.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== showData.cast.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Directors</td>
            <td>
              {showData.directors &&
                showData.directors.map((director, index) => {
                  return (
                    <span key={index}>
                      {director}
                      {index !== showData.directors.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Producers</td>
            <td>
              {showData.producers &&
                showData.producers.map((producer, index) => {
                  return (
                    <span key={index}>
                      {producer}
                      {index !== showData.producers.length - 1 && ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Production Companies</td>
            <td>
              {showData.productionCompanies &&
                showData.productionCompanies.map((c, index) => {
                  return (
                    <span key={index}>
                      {c}
                      {index !== showData.productionCompanies.length - 1 &&
                        ", "}
                    </span>
                  );
                })}
            </td>
          </tr>
          <tr>
            <td className="pr-5 font-medium">Genre</td>
            <td>
              {showData.genre &&
                showData.genre.map((g, index) => {
                  return (
                    <span key={index}>
                      {g}
                      {index !== showData.genre.length - 1 && ", "}
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
              url={showData.url}
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
          <div className="video-title">{showData.title}</div>
        </div>
      )}
    </>
  );
}
