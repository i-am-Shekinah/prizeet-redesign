import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-orange-400 overflow-x-hidden px-6 lg:px-12 leading-loose text-black">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 border-b-[0.5px] border-black/40">
          {/* email subscription */}
          <div className="pt-12 lg:py-12">
            <p className="font-semibold text-2xl">
              Get Beta deals straight to your email
            </p>
            <p className="font-light">
              We send weekly affordable deals straight to your inbox
            </p>

            <form
              data-aos="fade-up"
              data-aos-delay="150"
              action=""
              className="bg-white rounded-full pl-4 mt-4 pr-2 py-2 flex gap-4 justify-between items-center"
            >
              <input
                type="email"
                placeholder="Enter your email address..."
                className="bg-transparent outline-none w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-200 ease-linear cursor-pointer px-6 py-1 rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row py-4 lg:py-12 gap-8 w-full">
            {/* products */}
            <div className="w-full lg:pl-8">
              <p className="font-semibold text-2xl mb-8">Products</p>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="group flex items-center justify-between hover:gap-6 transition-all duration-300 ease-linear"
                >
                  For Vendors
                  <ArrowRight className="-rotate-45 size-5 group-hover:translate-x-1 transform transition-transform duration-300 ease-linear" />
                </Link>

                <Link
                  to="/"
                  className="group flex items-center justify-between hover:gap-6 transition-all duration-300 ease-linear"
                >
                  For Buyers
                  <ArrowRight className="-rotate-45 size-5 group-hover:translate-x-1 transform transition-transform duration-300 ease-linear" />
                </Link>
              </div>
            </div>

            {/* company */}
            <div className="w-full lg:pl-8">
              <p className="font-semibold text-2xl mb-8">Company</p>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="group flex items-center justify-between hover:gap-6 transition-all duration-300 ease-linear"
                >
                  About us
                  <ArrowRight className="-rotate-45 size-5 group-hover:translate-x-1 transform transition-transform duration-300 ease-linear" />
                </Link>

                <Link
                  to="/"
                  className="group flex items-center justify-between hover:gap-6 transition-all duration-300 ease-linear"
                >
                  Contact us
                  <ArrowRight className="-rotate-45 size-5 group-hover:translate-x-1 transform transition-transform duration-300 ease-linear" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* copyright and socials */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* copyright */}
          <div className="flex gap-4 items-center">
            <p className="font-light text-sm py-4">
              ©2025 Prizeet. All rights reserved.
            </p>

            <Link
              to="/"
              className="font-light text-sm hover:underline hover:underline-offset-4 transition-all duration-300 ease-linear"
            >
              Privacy Policy
            </Link>
            <Link to="/" className="font-light text-sm">
              Terms of Service
            </Link>
          </div>

          {/* socials */}
          <div className="font-bold flex items-center gap-4">
            <p>Follow us</p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="size-4 hover:scale-110 transition" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="size-4 hover:scale-110 transition" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
            >
              <FaTiktok className="size-4 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
