import { useState } from "react";
import { product } from "../constants";
import { product1 } from "../assets/images";


export const ProductImg = () => {
  const [bigProductImg, setbigProductImg] = useState(product1)

  return (
    <section className="mt-8">
      <div className="mb-7">
        <img
          className="rounded-2xl"
          src={bigProductImg}
          alt="product-1"
          width={500}
        />
      </div>
      {/* <div className="flex justify-between">
        {product.map((img, index) => (
          <div key={index}>
            <ProductImg 
              index={index} 
              imgUrl={img}
              changeBigProduct={(shoe) => setbigProductImg(shoe)}
              bigProductImg={bigProductImg}
            />
          </div>
        ))} 
      </div> */}
    </section>
  );
}
