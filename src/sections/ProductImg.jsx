import { useState } from "react";
import { products } from "../constants";
import { product1 } from "../assets/images";
import { ProductCard } from "../components/ProductCard";

export const ProductImg = () => {
  const [bigProductImg, setbigProductImg] = useState(product1);

  return (
    <section className="mt-20 lg:mt-8">
      <div className="mb-4 lg:mb-7">
        <img
          className="lg:rounded-2xl object-contain relative z-10"
          src={bigProductImg}
          alt="product-1"
          width={500}
        />
      </div>

      <div className="hidden lg:flex justify-center items-center lg:gap-10">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard
              index={index}
              imgURL={product}
              changeBigProduct={(product) => setbigProductImg(product)}
              bigProductImg={bigProductImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
