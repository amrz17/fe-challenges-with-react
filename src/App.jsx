import { useState } from "react";
import { Nav } from "./components/Nav";
import { ProductDetail, ProductImg } from "./sections";
import { Button } from "./components/Button";

const App = () => {
  const [numberProduct, setNumberProduct] = useState(0);

  const increment = () => {
    setNumberProduct((numberProduct) => numberProduct + 1);
  };

  const decrement = () => {
    setNumberProduct((numberProduct) => numberProduct - 1);
  };

  const handleSubmit = () => {
    return numberProduct, console.log(numberProduct);
  };
  return (
    <main>
      <Nav numberProduct={numberProduct} />
      <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen lg:gap-16">
        <ProductImg />
        <div>
          <ProductDetail />
          <Button
            numberProduct={numberProduct}
            increment={increment}
            decrement={decrement}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
