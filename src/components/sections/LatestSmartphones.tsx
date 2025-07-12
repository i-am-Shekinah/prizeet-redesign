import BlurCircle from "../ui/BlurCircle";

const LatestSmartphones = () => {
  return (
    <section className="overflow-x-hidden relative px-6 lg:px-12 py-24 bg-black text-white leading-loose">
      <BlurCircle top="0" right="0" />
      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-3xl text-center mb-4 font-semibold"
      >
        Explore the latest smartphones
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="350"
        className="text-justify md:text-center max-w-3xl mx-auto opacity-85 mb-12"
      >
        Experience top-notch performance and stunning designs—all at your
        fingertips. Shop now for exclusive deals.
      </p>
    </section>
  );
};

export default LatestSmartphones;
