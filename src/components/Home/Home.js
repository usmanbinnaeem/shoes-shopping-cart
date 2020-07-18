import React from "react";
import "./Home.css";
import HomeDesign from "./HomeDesign";
import Title from "../Title";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <Title name="Top" title="Rated!" />
        <div className="home__row">
          <HomeDesign
            id="12321341"
            title="Nike Pegasus trail 2"
            price={120}
            rating={5}
            image="https://lh3.googleusercontent.com/proxy/Wt0lQjD6INqjzPghc6zIA-mTxuJG1OjUnNXlcPsJpXyYu8-FxpXXUEb9XyH5tSWhNVqQg29soUCte69hDkRgucADapa7qa1UoHAH-PMRMRJStfnF79CgclGQGt6G8BF8FigJGfJwasw"
          />
          <HomeDesign
            id="49538094"
            title="Nike cortez Basic"
            price={239.0}
            rating={5}
            image="https://s2.sywcdn.net/getImage?url=https%3A%2F%2Fugc.nikeid.com%2Fis%2Fimage%2Fnike%2Fugc%2F875554508.tif%3Ffmt%3Dpng-alpha%26hei%3D1000%26wid%3D1000&t=Product&w=800&h=800&qlt=100&mrg=1&str=1&s=51fec059d714c601010956d4cceea40f"
          />
        </div>
        <Title name="Best" title="Selling!" />

        <div className="home__row">
          <HomeDesign
            id="4903850"
            title="Air Jordan 6 Retro"
            price={459}
            rating={3}
            image="https://cdn.flightclub.com/TEMPLATE/800505/1.jpg"
          />
          <HomeDesign
            id="23445930"
            title="Air Jordan 6 Retro infrared"
            price={98.99}
            rating={5}
            image="https://www.sneak-a-venue.com/files/image/id/56368/fixed/1/w/2000/h/2000/n/nike-air-force-1-high-07-white-ck4369-100-1.jpg"
          />
          <HomeDesign
            id="3254354345"
            title="Solarsoft potmore li"
            price={298}
            rating={4}
            image="https://www.sputniksnowboardshop.com/images/nike-sb-solarsoft-portmore-ii-golden-beige-black-p9747-12752_medium.jpg"
          />
        </div>
        <Title name="Up" title="Coming!" />

        <div className="home__row">
          <HomeDesign
            id="90829332"
            title="Nike Air Force 1"
            price={499.98}
            rating={4}
            image="https://cdn.flightclub.com/TEMPLATE/011869/3.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
