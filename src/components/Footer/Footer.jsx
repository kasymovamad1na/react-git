import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1>Castaway</h1>

        <div className="socials">
          <img src="/svg/insta.svg" alt="" />
          <img src="/svg/twit.svg" alt="" />
          <img src="/svg/face.svg" alt="" />
        </div>
      </div>

      <div className="footer-links">
        <div className="column">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Episodes</a>
          <a href="#">Contact</a>
        </div>

        <div className="column">
          <a href="#">Style Guide</a>
          <a href="#">Instructions</a>
          <a href="#">Changelog</a>
          <a href="#">Credit</a>
          <a href="#">Powered by Webflow</a>
          <a href="#">Licenses</a>
        </div>
      </div>

      <div className="platforms">
        <img src="/svg/spot.svg" alt="" />
        <img src="/svg/pocket.svg" alt="" />
        <img src="/svg/cloud.svg" alt="" />
        <img src="/svg/apple.svg" alt="" />
        <img src="/svg/cast.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;