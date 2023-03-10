import { Link } from "react-router-dom";
import bestbuy from "../../assets/Images/offers-bestbuy.png";
import lcbo1 from "../../assets/Images/offers-lcbo-03.png";
import lcbo2 from "../../assets/Images/offers-lcbo-06.png";
import starbucks1 from "../../assets/Images/offers-starbucks-02.png";
import starbucks2 from "../../assets/Images/offers-starbucks-05.png";
import uber from "../../assets/Images/offers-uber-07-en.png";
import "./PromotionsPage.scss";

const PromotionsPage = () => {
  const cardArr = [
    {
      id: 1,
      subtitle: "Earn 100 points",
      image: starbucks1,
    },
    {
      id: 2,
      subtitle: "Convert points to Starbucks Stars",
      image: starbucks2,
    },
    {
      id: 3,
      subtitle: "Earn 1pt/$1 spent",
      image: bestbuy,
    },
    {
      id: 4,
      subtitle: "Earn 1pt/$4 spent at the LCBO",
      image: lcbo1,
    },
    {
      id: 5,
      subtitle: "Redeem for your next meal",
      image: uber,
    },
    {
      id: 6,
      subtitle: "Earn bonus points",
      image: lcbo2,
    },
  ];

  const displayCard = cardArr.map((element) => {
    return (
      <div className="card__container" key={element.id}>
        <img className="card__img" src={element.image} alt="cards"></img>
        <div className="card__details">
          <h4 className="card__subtitle">{element.subtitle}</h4>
          <Link to="#" className="card__unlock">
            <p className="card__unlock__p">Unlock offer</p>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="card">
      <div className="card__box">
        <h1 className="card__title"> Your Exclusive Offers</h1>
        <Link to="#" className="card__link">
          <p className="card__link__text">See All</p>
        </Link>
      </div>
      <div className="card__wrapper">{displayCard}</div>
    </section>
  );
};

export default PromotionsPage;
