import "./Starts.css";

export default function Starts({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, index) => (
        <img key={index} src="/svg/starts.jpg" alt="star" />
      ))}
    </div>
  );
}