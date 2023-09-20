import axios from "axios";
import PlaySlider from "./PlaySlider.component";
import { useEffect, useState } from "react";

export default function Play() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/plays/")
      .then((res) => setPlays(res.data))
      .catch((err) => (window.location = "/error"));
  }, []);

  return (
    <>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Recently Added</h1>
        <PlaySlider itemsList={plays} />
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Recommended</h1>
        <PlaySlider itemsList={plays} />
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-xl mb-2">Top Rated</h1>
        <PlaySlider itemsList={plays} />
      </div>
    </>
  );
}
