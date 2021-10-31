import { ReactNode } from "react";
import { ProductsProvider } from "./Catalogue/index";
import { CartProvider } from "./Cart/index";

interface IProvidersProp {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProp) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
export default Providers;
