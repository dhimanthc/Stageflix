import { Link } from "react-router-dom";

export default function MusicalCard(props) {
  return (
    <Link to={`/musicals/${props.musical._id}`} className="card">
      <img
        alt="..."
        className="h-36 w-60 rounded"
        src={props.musical.images[0]}
      />
      <div className="details h-36 w-60 rounded p-4 flex flex-col justify-start">
        <h2 className="font-medium line-clamp-1">{props.musical.title}</h2>
        <p className="line-clamp-4">{props.musical.synopsis}</p>
      </div>
    </Link>
  );
}
