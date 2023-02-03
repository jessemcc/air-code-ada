import { Link } from "react-router-dom";
import "./DashboardNav.scss";
import wave from "../../assets/Images/waving.png";

const DashboardNav = () => {
  return (
    <section className="nav">
      <div className="nav__hello-container">
        <h1 className="nav__hello">
          Hello, Rachel <img className="nav__wave" src={wave} />
        </h1>
      </div>
      <nav className="nav__container">
        <ul className="nav__list">
          <Link className="nav__link" to="/">
            <li className="nav__item">Account</li>
          </Link>
          <Link className="nav__link" to="/promotions">
            <li className="nav__item">My Offers</li>
          </Link>
          <Link className="nav__link" to="/dashboard">
            <li className="nav__item">E-Store</li>
          </Link>
          <Link className="nav__link" to="/travel">
            <li className="nav__item">Flights</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default DashboardNav;
