import "./Section2.css";
function Section2() {
  return (
    <section className="Section2">

      <div className="Section2-left">

        <div className="button">
          Meet your host
        </div>
   

      <h1 className="host__name">Jacob Paulaner</h1>

      <div className="host__text">
        <p>
          Jacob has a background in audio engineering, and has been podcasting since the early days.
        </p>

        <p>
          He’s here to help you level up your game by sharing everything he’s learned along the way.
        </p>
      </div>
      </div>

      <div className="Section2-right">
        <img src="/section2.jpg" alt="" />
      </div>

    </section>
  );
}

export default Section2;