import { IProduct } from "@/models";

interface Props {
  product: IProduct;
}

export const Product: React.FC<Props> = (props) => {
  const { product } = props;

  return (
    <div>
      <pre>{JSON.stringify(product)}</pre>
    </div>
  );
};
