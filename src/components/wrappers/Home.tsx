import { useAppActions, useAppSelector } from "@/store";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/store/product";
import { ProductItem, Filters } from "components/ui";
import { useMemo, useState } from "react";

export const Home: React.FC = () => {
  const { data, isError, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [activeFilter, setActiveFilter] = useState<string>("");
  const { cart } = useAppSelector((state) => state);
  const { addProduct } = useAppActions();

  const onSelectFilter = (filter: string) => setActiveFilter(filter);
  const resetFilter = () => setActiveFilter("");

  const productList = useMemo(() => {
    if (!data) return [];

    if (!activeFilter) return data;

    return data.filter((product) => product.category === activeFilter);
  }, [data, activeFilter]);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-green-900 font-medium">
          Let&apos;s find your products!
        </h1>
      </div>

      {categories ? (
        <Filters
          filters={categories}
          onFilterSelect={onSelectFilter}
          onFilterReset={resetFilter}
          activeFilter={activeFilter}
          className="mb-10"
        />
      ) : null}

      {isLoading ? <p>Loading</p> : null}
      {isError ? <p>error</p> : null}
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {productList.map((product: any) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddProduct={addProduct}
              alreadyAdded={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
