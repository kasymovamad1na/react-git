import "./Section4.css";

const reviews = [
  {
    id: 1,
    text: "I can't recommend  this podcast enough",
    author: "Betty Lacey",
  },
  {
    id: 2,
    text: "Jacob is the best in the business",
    author: "Adam Driver",
  },
  {
    id: 3,
    text: "A wealth of audio knowledge",
    author: "Marcus Brown",
  },
  {
    id: 4,
    text: "Every episode is a gem!",
    author: "Jessica Knowl",
  },
  {
    id: 5,
    text: "Whoa whoa, let me take some notes!",
    author: "Scott Adams",
  },
  {
    id: 6,
    text: "I've upped my game considerably since I started listening",
    author: "Steven Blast",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {reviews.map((review) => (
          <div key={review.id} className="card">
            <div className="stars">★★★★★</div>

            <h3 className="card-title">
              {review.text}
            </h3>

            <p className="card-author">
              {review.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;