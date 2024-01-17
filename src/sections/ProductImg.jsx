import { useState } from "react";
import { products } from "../constants";
import { product1 } from "../assets/images";
import { ProductCard } from "../components/ProductCard";
import { ProductImgMobile } from "./ProductImgMobile";

export const ProductImg = () => {
  const [bigProductImg, setbigProductImg] = useState(product1);

  return (
    <section className="mt-20 md:mt-24 lg:mt-8">
      <div className="relative mb-4 lg:mb-7 z-0">
        <div className="lg:hidden">
          <ProductImgMobile />
        </div>
        <button>
          <img
            className="hidden lg:flex lg:rounded-2xl object-contain relative z-10"
            src={bigProductImg}
            alt="product-1"
            width={500}
            onClick={() => document.getElementById("my_modal_3").showModal()}
          />
        </button>
        <dialog id="my_modal_3" className="modal bg-transparent">
          <div className="w-full flex flex-col items-center">
            <form method="dialog">
              <button
                className="btn btn-sm text-white btn-circle btn-ghost 
                 text-4xl absolute top-30 right-1/3"
              >
                ✕
              </button>
            </form>
            <div className="mt-12 ">
              <img
                src={bigProductImg}
                alt="product-1"
                width={600}
                className="mx-auto rounded-2xl"
              />
            </div>

            <div className="hidden lg:flex justify-center items-center mt-6 lg:gap-10">
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
          </div>
        </dialog>
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
