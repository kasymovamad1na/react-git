import BSkyButton from "../../buttons/BSkyButton";
import "./Latest-EpisodesHeader.css";

export default function LatestEpisodesHeader() {
  return (
    <div className="header">
      <h4 className="title">Latest episodes</h4>

      <BSkyButton>
        View all episodes
      </BSkyButton>
    </div>
  );
}