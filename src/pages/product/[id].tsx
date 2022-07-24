import { IProduct } from "@/models";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { Product } from "components/wrappers";
import { axiosService } from "@/services";

interface ProductPageProps {
  product: IProduct;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const { product } = props;

  return <Product product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axiosService.get<IProduct[]>("/products");

  const paths =
    response.data.map((p) => ({ params: { id: p.id.toString() } })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps, Params> = async ({
  params,
}) => {
  const notFound = { props: { product: {} as IProduct }, notFound: true };

  if (!params) {
    return notFound;
  }

  try {
    const response = await axiosService.get<IProduct>(`/products/${params.id}`);

    return {
      props: {
        product: response.data,
      },
    };
  } catch (error) {}

  return notFound;
};

export default Product;
