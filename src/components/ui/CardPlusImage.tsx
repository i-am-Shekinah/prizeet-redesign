import {
  BadgeDollarSign,
  Logs,
  Podcast,
  ShoppingBag,
  ShoppingCart,
  Wrench,
} from "lucide-react";

import forBuyers from "../../assets/home/for-buyers.png";
import forVendors from "../../assets/home/for-vendors.png";
import { Button } from "./button";

const CardPlusImage = () => {
  return (
    <section>
      {/* for buyers */}
      <div className="relative h-[750px] md:h-[650px] lg:h-fit flex flex-col-reverse lg:grid grid-cols-2 items-center">
        <div className="max-lg:absolute w-full max-lg:rounded-md bg-gradient-to-t from-orange-400 via-orange-400 to-transparent lg:bg-orange-400 p-8 text-black h-full lg:rounded-tl-md lg:rounded-bl-md">
          <p>For buyers</p>
          <p className="max-lg:text-2xl text-5xl mt-4 max-w-[400px]">
            Find your perfect gadget in{" "}
            <span className="text-blue-800 max-lg:text-3xl text-[62px] font-bold">
              4
            </span>{" "}
            simple steps
          </p>

          {/* steps */}

          <div className="mt-12 flex flex-col gap-8">
            {/* 1 */}
            <div className="flex gap-2 items-start">
              <Podcast className="size-5" />
              <div className="-mt-2">
                <p>Tell us what you need</p>
                <p className="font-light opacity-75">
                  Search by brand, price, or deals — we'll help you narrow it
                  down.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-2 items-start">
              <BadgeDollarSign className="size-5" />
              <div className="-mt-2">
                <p>Choose a vendor</p>
                <p className="font-light opacity-75">
                  Select based on pricing, ratings, or exclusive deals
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-2 items-start">
              <ShoppingCart className="size-5" />
              <div className="-mt-2">
                <p>Order through Prizeet</p>
                <p className="font-light opacity-75">
                  Enjoy a smooth, transparent checkout process.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-2 items-start">
              <Wrench className="size-5" />
              <div className="-mt-2">
                <p>Leave it to us</p>
                <p className="font-light opacity-75">
                  We handle delivery right to your doorstep — hassle-free.
                </p>
              </div>
            </div>
          </div>

          <Button className="mt-4">Discover Prizeet For Buyers</Button>
        </div>

        <img
          src={forBuyers}
          alt="Card image for buyers"
          className="max-lg:rounded-md lg:rounded-tr-md lg:rounded-br-md h-full w-full object-cover"
        />
      </div>

      {/* for sellers */}
      <div className="relative h-[720px] md:h-[650px] lg:h-fit flex flex-col-reverse lg:grid grid-cols-2 items-center mt-12">
        <img
          src={forVendors}
          alt="Card image for buyers"
          className="max-lg:rounded-md lg:rounded-tl-md lg:rounded-bl-md h-full w-full object-cover"
        />
        <div className="max-lg:absolute w-full bg-gradient-to-t from-blue-500 via-blue-500 to-transparent lg:bg-blue-500 p-8 text-black h-full max-lg:rounded-md lg:rounded-tr-md lg:rounded-br-md">
          <p className="max-lg:text-white">For vendors</p>
          <p className="max-lg:text-white max-lg:text-2xl text-5xl mt-4 max-w-[400px]">
            Start selling in{" "}
            <span className="text-orange-500 max-lg:text-3xl text-[62px] font-bold">
              4
            </span>{" "}
            simple steps
          </p>

          {/* steps */}

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex gap-2 items-start">
              <ShoppingBag />
              <div className="-mt-2">
                <p>Get your products listed</p>
                <p className="font-light opacity-75">
                  Add your gadgets, set prices, and showcase your best deals.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-2 items-start">
              <Logs />
              <div className="-mt-2">
                <p>Receive purchase orders</p>
                <p className="font-light opacity-75">
                  Get notified when customers place orders for your products.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-2 items-start">
              <Wrench />
              <div className="-mt-2">
                <p>Process purchase orders</p>
                <p className="font-light opacity-75">
                  Confirm, package, and hand over to Prizeet's delivery team.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-2 items-start">
              <BadgeDollarSign />
              <div className="-mt-2">
                <p>Get paid instantly</p>
                <p className="font-light opacity-75">
                  Enjoy fast payouts as soon as orders are fulfilled.
                </p>
              </div>
            </div>
          </div>

          <Button className="mt-4">Discover Prizeet For Vendors</Button>
        </div>
      </div>
    </section>
  );
};

export default CardPlusImage;
