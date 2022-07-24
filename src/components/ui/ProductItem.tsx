import { IProduct } from "@/models";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: IProduct;
  onAddProduct: (product: IProduct) => void;
  alreadyAdded: boolean;
}

export const ProductItem: React.FC<Props> = (props) => {
  const { alreadyAdded, onAddProduct, product } = props;

  const clickHandler = () => {
    if (alreadyAdded) {
      return;
    }

    onAddProduct(product);
  };

  return (
    <div
      style={{ backgroundColor: "#E5F0EA" }}
      className="rounded-xl p-3 shadow-sm"
    >
      <div className="text-center">
        <Image
          src={product.image}
          alt={product.title}
          width="100"
          height="143"
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <Link href={`product/${product.id}`}>
          <a className="text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5">
            {product.title}
          </a>
        </Link>
        <div className="text-sm text-green-600">${product.price}</div>
      </div>
      <button
        className="text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200"
        onClick={clickHandler}
      >
        {alreadyAdded ? "Already in cart" : "Add to cart"}
      </button>
    </div>
  );
};
