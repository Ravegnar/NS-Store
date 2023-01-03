export const ProductDetailInfo = (props:any) => {
  const {product} = props;
  return (
    <>
      <p className="mb-8 text-justify">
        {product.info}
      </p>
    </>
  );
}