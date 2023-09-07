import { Button } from "../components/Button"

export const ProductDesc = () => {
  return (
    <section className="p-10">
      <p className="text-orange font-bold mb-4">SNEAKER COMPANY</p>
      <h1 className="font-bold text-6xl mb-10">Fall Limited Edition <br /> Sneakers</h1> 
      <p className="text-dark-grayish-blue text-xl mb-6">These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they'll <br /> whitstand everyting the weather can offer.</p>
      <p className="flex">
      <strong className="text-4xl">$125.00</strong>
      <span className="ml-3 mt-1 items-center h-6 w-12 text-center font-bold text-orange bg-pale-orange  rounded-md">50%</span>
      </p>
      <p className="font-bold text-grayish-blue line-through mb-8">$250.00</p>
      <Button />
    </section>
  )
}

