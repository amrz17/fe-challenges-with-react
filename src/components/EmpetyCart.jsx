export const EmpetyCart = () => {
  return (
    <div
      className="w-82 h-56 border rounded-md absolute top-16 md:right-40 
      mt-4 bg-white"
    >
      <h2 className="text-black font-bold ml-3 mt-3 text-lg">Cart</h2>
      <hr className="bg-grayish-blue mt-4" />
      <div className="flex justify-center items-center pb-10 h-full">
        <h2 className="text-gray-500 text-xl font-bold">Your cart is empty.</h2>
      </div>
    </div>
  );
};
