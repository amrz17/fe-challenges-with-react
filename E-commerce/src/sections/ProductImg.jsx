import { product1, product2, product3, product4 , thumbnailProduct1, thumbnailProduct2, thumbnailProduct3, thumbnailProduct4 } from "../constants";

export const ProductImg = () => {
  return (
    <section className="mt-8">
      <div className="mb-7">
        <img
          className="rounded-2xl"
          src={product1}
          alt="product-1"
          width={500}
        />
      </div>
      <div className="flex justify-between">
        <img
          className="rounded-xl"
          src={thumbnailProduct1}
          alt="thumbnail-product1"
          width={95}
          height={80}
        />
        <img
          className="rounded-xl"
          src={thumbnailProduct2}
          alt="thumbnail-product1"
          width={95}
          height={80}
        />
        <img
          className="rounded-xl"
          src={thumbnailProduct3}
          alt="thumbnail-product1"
          width={95}
          height={80}
        />
        <img
          className="rounded-xl"
          src={thumbnailProduct4}
          alt="thumbnail-product1"
          width={95}
          height={80}
        />
      </div>
    </section>
  );
}
