import { HeartPlus } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  imgUrl: string[];
  productName: string;
  price: string;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgUrl,
  productName,
  price,
  colors,
}) => {
  return (
    <>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative rounded-xl px-7 py-6 bg-orange-400 hover:cursor-pointer shadow-md hover:border-white hover:border-2 transition-all duration-200 ease-linear text-black"
      >
        <div className="relative w-full h-full">
          <img
            src={imgUrl[0]}
            alt={`An image of ${productName}`}
            className="mx-auto"
          />
        </div>
        <HeartPlus
          className="hidden group-hover:block absolute text-white size-7 top-6 right-6"
          aria-label="Add to wishlist"
        />
        <p>{productName}</p>
        <p className="text-sm font-light mt-2">Starting from</p>
        <p className="text-2xl font-bold">{price}</p>

        <div className="space-x-2 mt-2">
          {colors.map((color) => (
            <span className="rounded-full bg-blue-500 text-black py-1.5 px-2">
              {color}
            </span>
          ))}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
