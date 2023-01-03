export const ProductDetailStats = (props: any) => {
  const {product} = props;
  return (
    <>
      <h2 className="mb-8">
        Stats
      </h2>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-white px-2">Stat</span>
        <span className="ml-auto text-white px-2">Stat</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-white px-2">Stat</span>
        <span className="ml-auto text-white px-2">Stat</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-white px-2 mr-3">Stat</span>
        <span className="ml-auto text-white text-right px-2">Stat</span>
      </div>
    </>
  );
}