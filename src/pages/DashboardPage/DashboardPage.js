import './DashboardPage.scss';

// import logos
import star from '../../assets/Images/Frame 37.png'
import uber from '../../assets/Images/uber.png';
import amazon from '../../assets/Images/amazon.png'
import bestbuy from '../../assets/Images/bestbuy.png';
import lcbo from '../../assets/Images/lcbo.png'

// import categories
import gift from '../../assets/Images/giftcard.png';
import home from '../../assets/Images/home.png';
import kitchen from '../../assets/Images/kitchen.png';
import electronics from '../../assets/Images/elec.png';
import accessories from '../../assets/Images/accessories.png';

// import products
import burberry from '../../assets/Images/burberry.png';
import punch from '../../assets/Images/punch.png';
import blender from '../../assets/Images/blender.png';
import diffuser from '../../assets/Images/diffuser.png';
import bike from '../../assets/Images/bike.png';

//
import { Link } from 'react-router-dom';


const DashboardPage = () => {
  return (
  <>
  <section className="shop-container">
    <article className="partners">
      <div className='partners__info'> 
        <h2 className="partners__info-title">Top Partners</h2>
        <Link to="#" className='partners__info-link'> See All</Link>
      </div>
      <div className='partners__cards'> 
        <article className='partner-card'>
          <img className='partner-card__img' src={star}/>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={uber}/>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={lcbo}/>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={amazon}/>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={bestbuy}/>
        </article>
      </div>
    </article>
    <article className="partners">
      <div className='partners__info'> 
        <h2 className="partners__info-title">Top Categories</h2>
        <Link to="#" className='partners__info-link'> See All</Link>
      </div>
      <div className='partners__cards'> 
        <article className='partner-card'>
          <img className='partner-card__img' src={gift}/>
          <p className='partner-card__title'> Gift Cards</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={home}/>
          <p className='partner-card__title'> Home &amp; Garden</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={kitchen}/>
          <p className='partner-card__title'> Kitchen &amp; Dining</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={electronics}/>
          <p className='partner-card__title'> Electronics</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={accessories}/>
          <p className='partner-card__title'> Fashion &amp; Accessories</p>
        </article>
      </div>
    </article>
    <article className="partners">
      <div className='partners__info'> 
        <h2 className="partners__info-title">Top Products</h2>
        <Link to="#" className='partners__info-link'> See All</Link>
      </div>
      <div className='partners__cards'> 
        <article className='partner-card'>
          <img className='partner-card__img' src={burberry}/>
          <p className='partner-card__title'> Burberry My Burberry</p>
          <p className='partner-card__title-wrap'> Black Parfum</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={punch}/>
          <p className='partner-card__title'> Reebok 3FT Punchbag</p>
          <p className='partner-card__title-wrap'>  + Gloves</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={blender}/>
          <p className='partner-card__title'>Vitamix e310</p>
          <p className='partner-card__title-wrap'>Explorian series</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={diffuser}/>
          <p className='partner-card__title'> Joe Malone Peony &amp; </p>
          <p className='partner-card__title-wrap'> Blush Suede Diffuser</p>
        </article>
        <article className='partner-card'>
          <img className='partner-card__img' src={bike}/>
          <p className='partner-card__title'> Echelon EX55 Smart</p>
          <p className='partner-card__title-wrap'> Connect Bike</p>
        </article>
      </div>
    </article>
  </section>
  </>
  );
};

export default DashboardPage;