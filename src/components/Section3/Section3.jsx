import "./Section3.css";

function Section3() {
  return (
    <section className="section3">
      <div className="section3-left">
        <span className="section3-label">
          Email Newsletter
        </span>

        <h2 className="section3-title">
          Subscribe <br />
          for updates
        </h2>
      </div>

      <form className="section3-form">
        <input
          type="text"
          placeholder="Name"
          className="section3-input"
        />

        <input
          type="email"
          placeholder="Email"
          className="section3-input"
        />

        <button className="section3-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Section3;