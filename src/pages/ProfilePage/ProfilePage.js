import { Link } from "react-router-dom";
import "./ProfilePage.scss";
import PromotionsPage from "../PromotionsPage/PromotionsPage";
import aeroplan from "../../assets/Images/Dashboard_aeroplan-card-box.png";
import progressBar from "../../assets/Images/Dashboard_elite-progress-bar.png";
import linkProgressBar from "../../assets/Images/Dashboard_link-progress-bar.png";
import activityList from "../../assets/Images/Dashboard_activity-details.png";
import rewardsBox from "../../assets/Images/Dashboard_rewards-box.png";

const ProfilePage = () => {
  return (
    <section className="profile">
      <section className="profile__container">
        <article className="profile__aeroplan-container">
          <img
            src={aeroplan}
            alt="points earned and Aeroplan Number"
            className="profile__aeroplan"
          />
        </article>
        <article className="profile__elite-container">
          <h3 className="profile__elite-title">
            Your progress toward Aeroplan 25K Status
          </h3>
          <img
            src={progressBar}
            alt="progress bar to elite status"
            className="profile__elite-progress-bar"
          />
          <Link className="profile__elite-earn-points" to={<PromotionsPage />}>
            How to Earn
          </Link>
        </article>
        <article className="profile__link-progress-container">
          <article className="profile__link-progress-box">
            <h2 className="profile__link-progress-title">
              Complete 9 more
              <br />
              to earn points faster
            </h2>
            <div className="profile__link-progress-counter">
              <h3 className="profile__link-progress-bar-title">Progress</h3>
              <p className="profile__link-progress-fractal">1/10</p>
            </div>
            <img
              src={linkProgressBar}
              alt="progress bar"
              className="profile__link-progress-bar"
            />
          </article>
          <Link className="profile__link-progress-button" to="#">
            See all activities
          </Link>
        </article>
        <article className="profile__activity-container">
          <h3 className="profile__activity-title">Activity</h3>
          <Link className="profile__activity-button" to="#">
            View All
          </Link>
          <img
            src={activityList}
            alt="List of all activities"
            className="profile__activity-list"
          />
        </article>
        <article className="profile__rewards-container">
          <img
            src={rewardsBox}
            alt="list of locations rewards were received"
            className="profile__rewards-locations-img"
          />
        </article>
      </section>
    </section>
  );
};

export default ProfilePage;
