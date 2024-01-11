
export const ProductCard = ( {imgURL, changeBigProduct, bigProductImg} ) => {

  const handleClick = () => {
    if (bigProductImg !== imgURL.bigProduct) {
      changeBigProduct(imgURL.bigProduct);
    }
  };


  return (
    <div
      className={`border-2 rounded-xl ${
        bigProductImg === imgURL.bigProduct
          ? "border-orange"
          : "border-transparent"
      } cursor-pointer `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        <img 
        src={imgURL.thumbnail} 
        alt="" 
        width={80}
        height={80}
        className="rounded-xl border-2"/>
      </div>

    </div>
  )
}
