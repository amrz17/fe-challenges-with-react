import { carousel } from "../constants";

export const ProductImgMobile = () => {
  return (
    <div className="carousel">
      {carousel.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="carousel-item relative w-full"
        >
          <img src={item.product} width={500} className="mx-auto" />;
          <div
            className="absolute flex justify-between transform -translate-y-1/2 
          left-5 right-5 top-1/2 md:left-[14.5rem] md:right-[14.5rem]"
          >
            <a
              href={item.hrefLeft}
              className="btn btn-circle bg-white text-black
            border border-none hover:text-orange hover:bg-white"
            >
              ❮
            </a>
            <a
              href={item.hrefRight}
              className="btn btn-circle bg-white text-black
            border border-none hover:text-orange hover:bg-white"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
