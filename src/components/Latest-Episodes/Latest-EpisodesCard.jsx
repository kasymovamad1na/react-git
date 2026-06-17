import BSkyButton from "../../Buttons/BSkyButton";
import "./Latest-EpisodesCard.css";

export default function LatestEpisodesCard({ cardInfo }) {
  return (
    <div className="card">
      <img src={cardInfo?.img} alt="" className="card-img" />

      <div className="card-content">
        <p className="tag">{cardInfo?.tag}</p>

        <p className="episode">Episode {cardInfo?.episode}</p>

        <p className="title">{cardInfo?.title}</p>

        <p className="desc">{cardInfo?.description}</p>
 <button className="section3-btn">
          View Episode Details
        </button>
      </div>
    </div>
  );
}