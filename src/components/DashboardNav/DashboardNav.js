import { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardNav.scss";

const DashboardNav = () => {
  return (
    <section className="nav">
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
