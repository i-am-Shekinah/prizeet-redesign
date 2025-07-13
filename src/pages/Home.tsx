import Footer from "../components/layouts/Footer";
import FAQs from "../components/sections/FAQs";
import Hero from "../components/sections/Hero";
import LatestSmartphones from "../components/sections/LatestSmartphones";
import TailoredExperiences from "../components/sections/TailoredExperiences";
import WhatWeOffer from "../components/sections/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <LatestSmartphones />
      <TailoredExperiences />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
