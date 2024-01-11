import { useState } from "react";
import { Nav } from "./components/Nav";
import { ProductDesc, ProductImg } from "./sections";

const App = () => {
  return (
    <main>
      <Nav />
      <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen lg:gap-16">
        <ProductImg />
        <ProductDesc />
      </section>
    </main>
  );
};

export default App;