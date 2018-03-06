import React from "react";
import Link from "gatsby-link";
import Splash from "../components/Splash/Splash";
import Strata from "../components/Strata/Strata";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import farmingHeaderImage from "../assets/successful-farming-ag.svg";
import farmingBackgroundImage from "../assets/bkg-successful-farming.jpg";
import webchefsBackgroundImage from "../assets/bkg-webchefs.jpg";

const IndexPage = () => (
  <div>
    <Splash />
    <Strata
      displaySideRight
      headerImage={farmingHeaderImage}
      paragraph="Explore Carroll Etchen’s shop complex, filled with a collection of tractors, cars, and trucks and a shop with an indoor wash bay."
      backgroundImage={farmingBackgroundImage}
    />
    <Strata
      displaySideRight={false}
      headline="Meet the Web Chefs"
      paragraph="Learn more about the team here at Four Kitchens as you explore their homes and their hobbies."
      backgroundImage={webchefsBackgroundImage}
    />
    <CallToAction />
    <Footer />
    {/* <h1
      style={{
        color: 'red',
      }}
    >
      Hi people
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;
