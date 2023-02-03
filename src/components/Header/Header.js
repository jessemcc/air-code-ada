import "./Header.scss";
import aeroplan from "../../assets/Images/Aeroplan.png";
import airCanada from "../../assets/Images/air-canada-logo.png";
import profilePic from "../../assets/Images/header_profile_small.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <article className="header__container">
        <div className="header__logo">
          <img
            src={aeroplan}
            alt="aeroplan logo"
            className="header__aeroplan"
          />
          <img
            src={airCanada}
            alt="air canada logo"
            className="header__air-canada"
          />
        </div>
        <div className="header__nav-container">
          <ul className="header__nav-list">
            <Link className="header__link" to="">
              <li className="header__nav-item">Home</li>
            </Link>
            <Link className="header__link" to="">
              <li className="header__nav-item">Book</li>
            </Link>
            <Link className="header__link" to="">
              <li className="header__nav-item">Plan</li>
            </Link>
            <Link className="header__link" to="">
              <li className="header__nav-item">Fly</li>
            </Link>
            <Link className="header__link" to="">
              <li className="header__nav-item">Benefits</li>
            </Link>
          </ul>
          <div className="header__profile">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="header__profile-image"
            />
            <p className="header__name">Rachel 235pts</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Header;
