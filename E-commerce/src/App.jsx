import { Nav } from "./components/Nav";
import {
  ProductDesc,
  ProductImg
} from "./sections";

const App = () => {
  return (
    <main>
      <Nav />
      <section className="flex justify-center items-center min-h-screen gap-10">
        <ProductImg />
        <ProductDesc />
      </section>
    </main>
  )
}

export default App;
