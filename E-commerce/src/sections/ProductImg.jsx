import { product1 } from "../constants"

export const ProductImg = () => {
  return (
    <section className="">
      <img 
      className="rounded-2xl"
      src={ product1 } 
      alt="product-1"
      width={550}
       />
    </section>
  )
}
