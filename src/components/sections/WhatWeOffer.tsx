import BlurCircle from "../ui/BlurCircle";
import CardPlusImage from "../ui/CardPlusImage";

const WhatWeOffer = () => {
  return (
    <>
      <section className="overflow-x-hidden relative px-6 lg:px-12 py-24 bg-black text-white leading-loose">
        <BlurCircle top="0" right="0" />
        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-3xl text-center mb-4 font-semibold"
        >
          What we offer
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="350"
          className="text-justify md:text-center max-w-3xl mx-auto opacity-85 mb-12"
        >
          We bring together a wide range of smartphones from verified vendors,
          so you don't have to search multiple sites. Easily compare features,
          prices, and deals side by side to make confident choices. Enjoy
          convenience, transparency, and great value — all tailored to help you
          shop smarter.
        </p>

        <CardPlusImage />
      </section>
    </>
  );
};

export default WhatWeOffer;
