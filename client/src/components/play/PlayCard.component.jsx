import { Link } from "react-router-dom";

export default function PlayCard(props) {
  return (
    <Link to={`/plays/${props.play._id}`} className="card">
      <img alt="..." className="h-36 w-60 rounded" src={props.play.images[0]} />
      <div className="details h-36 w-60 rounded p-4 flex flex-col justify-start">
        <h2 className="font-medium line-clamp-1">{props.play.title}</h2>
        <p className="line-clamp-4">{props.play.synopsis}</p>
      </div>
    </Link>
  );
}
