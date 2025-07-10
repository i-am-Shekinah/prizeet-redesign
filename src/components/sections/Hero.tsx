import heroImage from '../../assets/home/hero-image.png';
import HeroSearch from '../ui/HeroSearch';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 bg-black text-white lg:pt-48 pt-32 pb-20 lg:py-20 px-6 lg:px-12 leading-loose">
      <div>
        <h1 className="text-4xl font-bold my-2 text-center text-blue-500">
          Save big on <span className="text-orange-400">smartphones!</span>
        </h1>
        <p className="text-center">
          Experience a smarter way to shop — compare smartphones, prices, and
          unbeatable deals from trusted vendors, all in one place.
        </p>

        {/* search section */}
        <div className="text-black pt-12">
          <HeroSearch />
        </div>
      </div>

      {/* hero image */}
      <div className="w-full h-full bg-blue-500 rounded-full">
        <img
          src={heroImage}
          alt="Hero image"
          className="object-cover mx-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
