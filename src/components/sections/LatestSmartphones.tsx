import tecnoSpark40Pro from "../../assets/products/tecno-spark-4o-pro.png";
import tecnoSpark40Pro2 from "../../assets/products/tecno-spark-4o-pro2.png";
import tecnoSpark40Pro3 from "../../assets/products/tecno-spark-4o-pro3.png";
import BlurCircle from "../ui/BlurCircle";
import ProductCard from "../ui/ProductCard";

interface Product {
  imgUrl: string[];
  productName: string;
  price: string;
  colors: string[];
}

const products: Product[] = [
  {
    imgUrl: [tecnoSpark40Pro, tecnoSpark40Pro2, tecnoSpark40Pro3],
    productName: "Tecno Spark 40 Pro",
    price: "₦280,000",
    colors: ["ocean blue", "vintage green"],
  },
  {
    imgUrl: [tecnoSpark40Pro, tecnoSpark40Pro2, tecnoSpark40Pro3],
    productName: "Tecno Spark 40 Pro",
    price: "₦280,000",
    colors: ["ocean blue", "vintage green"],
  },
  {
    imgUrl: [tecnoSpark40Pro, tecnoSpark40Pro2, tecnoSpark40Pro3],
    productName: "Tecno Spark 40 Pro",
    price: "₦280,000",
    colors: ["ocean blue", "vintage green"],
  },
  {
    imgUrl: [tecnoSpark40Pro, tecnoSpark40Pro2, tecnoSpark40Pro3],
    productName: "Tecno Spark 40 Pro",
    price: "₦280,000",
    colors: ["ocean blue", "vintage green"],
  },
];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        {products.map((product) => (
          <ProductCard
            imgUrl={product.imgUrl}
            productName={product.productName}
            price={product.price}
            colors={product.colors}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestSmartphones;
