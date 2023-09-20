import { useParams } from "react-router-dom";
import { useState } from "react";

export default function PersonView() {
  const [id, setId] = useState(useParams().id);

  return (
    <>
      <h1>Person - {id}</h1>
    </>
  );
}
