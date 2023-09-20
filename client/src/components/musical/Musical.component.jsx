import axios from "axios";
import MusicalSlider from "./MusicalSlider.component";
import { useEffect, useState } from "react";

export default function Musical() {
  const [musicals, setMusicals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/musicals/")
      .then((res) => setMusicals(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  return (
    <>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Watchlist</h1>
        <MusicalSlider itemsList={musicals} />
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Featured</h1>
        <MusicalSlider itemsList={musicals} />
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Popular</h1>
        <MusicalSlider itemsList={musicals} />
      </div>
    </>
  );
}
