import {
  BellDot,
  CreditCard,
  HeartPlus,
  MessageCircleQuestionMark,
  Search,
  TruckElectric,
} from "lucide-react";

import BlurCircle from "../ui/BlurCircle";

const TailoredExperiences = () => {
  return (
    <>
      <section className="overflow-x-hidden px-6 lg:px-12 py-24 leading-loose bg-black text-white">
        <BlurCircle top="0" right="0" />
        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-3xl text-center mb-4 font-semibold"
        >
          Tailored experiences for savvy shoppers like you
        </h2>

        {/* perks */}
        <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* trusted payments */}
          <div className="bg-orange-400 rounded-md py-8 px-4 text-black">
            <div className="flex gap-2 items-center mb-2">
              <CreditCard />
              <p className="font-semibold">Trusted Payment</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Pay with ease through WhatsApp! Once your invoice is ready,
              complete your purchase securely via direct chat — fast, safe, and
              personal. For your protection, you'll also receive a two-factor
              authentication code from{" "}
              <a
                href="mailto:team.prizeet@gmail.com"
                className="font-bold underline underline-offset-4 hover:font-semibold transition-all duration-300 ease-in-out"
              >
                team.prizeet@gmail.com
              </a>{" "}
              to confirm that the invoice was legitimately issued by Prizeet.
              Always ensure the email is from{" "}
              <a
                href="mailto:team.prizeet@gmail.com"
                className=" font-bold underline underline-offset-4 hover:font-semibold transition-all duration-300 ease-in-out"
              >
                team.prizeet@gmail.com
              </a>{" "}
              before proceeding with any payment.
            </p>
          </div>

          {/* customer support */}
          <div className="bg-blue-500 rounded-md py-8 px-4">
            <div className="flex gap-2 items-center mb-2">
              <MessageCircleQuestionMark />
              <p className="font-semibold">24/7 Customer Support</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Enjoy peace of mind with our 24/7 Customer Support, ready to
              assist you anytime, any day. Need help?{" "}
              <a
                href="mailto:team.prizeet@gmail.com"
                className="text-black underline underline-offset-4 hover:font-semibold transition-all duration-300 ease-in-out"
              >
                Contact support
              </a>
            </p>
          </div>

          {/* advanced search */}
          <div className="bg-orange-400 rounded-md py-8 px-4 text-black">
            <div className="flex gap-2 items-center mb-2">
              <Search />
              <p className="font-semibold">Advanced Search Filters</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Refine your shopping experience with our Advanced Search Filters,
              allowing you to easily find exactly what you're looking for by
              brand, price, features, and more!
            </p>
          </div>

          {/* order tracking */}
          <div className="bg-blue-500 rounded-md py-8 px-4">
            <div className="flex gap-2 items-center mb-2">
              <TruckElectric />
              <p className="font-semibold">Order Tracking</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Stay updated on your purchase with our real-time Order Tracking
              feature, ensuring you know exactly when your items will arrive!
            </p>
          </div>

          {/* Wishlist */}
          <div className="bg-orange-400 rounded-md py-8 px-4 text-black">
            <div className="flex gap-2 items-center mb-2">
              <HeartPlus />
              <p className="font-semibold">Wishlist & Save for Later</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Save your favorite items for later and create your perfect
              wishlist to make shopping a breeze!
            </p>
          </div>

          {/* stock notifications */}
          <div className="bg-blue-500 rounded-md py-8 px-4">
            <div className="flex gap-2 items-center mb-2">
              <BellDot />
              <p className="font-semibold">Back-in-Stock Notifications</p>
            </div>
            <p className="opacity-75 font-light text-justify">
              Sign up for Back-in-Stock Notifications and be the first to know
              when your favorite items are available again!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TailoredExperiences;
