import { ProductInterface} from './type.d';

export const ProductDetailInfo = ({product}: {product: ProductInterface}) => {

  return (
    <>
      <p className="mb-8 text-justify">
        {product.info}
      </p>
    </>
  );
}