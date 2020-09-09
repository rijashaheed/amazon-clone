import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__container">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR26S1X63b2uoB6qDb6Ohfvbv00q2sPTB-jTF3Y7RkNznE74hI4If-fLyD8"
        alt="heroimg"
      />
      <div className="home_row">
        <Product
          title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={20.09}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg?fbclid=IwAR2N5efcj-kuziHwmF4QjB_dnt1owbXqJKGn2v-Q8BxSnKIFp2wTp8G6RaA"
        />
        <Product
          title=" Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (3rd Generation)"
          price={432.29}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg?fbclid=IwAR2N5efcj-kuziHwmF4QjB_dnt1owbXqJKGn2v-Q8BxSnKIFp2wTp8G6RaA"
        />
        <Product
          title=" Samsung 49 CHG90 curved Gaming monitor with QLED Quanum Dot technology."
          price={32.29}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg?fbclid=IwAR2N5efcj-kuziHwmF4QjB_dnt1owbXqJKGn2v-Q8BxSnKIFp2wTp8G6RaA"
        />
      </div>

      <div className="home_row">
        <Product
          title="Kenwood mixer for baking. Stylish Kitchen Mixer with K beater, synamics hooks and whisks, 5 litre wall"
          price={15.69}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg?fbclid=IwAR2N5efcj-kuziHwmF4QjB_dnt1owbXqJKGn2v-Q8BxSnKIFp2wTp8G6RaA"
        />
        <Product
          title="Echo (3rd generation) has new premium speakers powered by Dolby to play 360° audio with crisp vocals and dynamic bass response."
          price={12.89}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>

      <div className="home_row">
        <Product
          title="Samsun YABS12JFSHFHSB6 -Super ultra wide dual WQHD 5120x1440"
          price={10236.89}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg?fbclid=IwAR2N5efcj-kuziHwmF4QjB_dnt1owbXqJKGn2v-Q8BxSnKIFp2wTp8G6RaA"
        />
      </div>
    </div>
  );
}

export default Home;
