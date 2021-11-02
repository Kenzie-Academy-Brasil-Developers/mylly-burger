import { ReactNode } from "react";
import { ProductsProvider } from "./Catalogue/index";
import { CartProvider } from "./Cart/index";
import { PromotionsProvider } from "./Promotions/index";

interface IProvidersProp {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProp) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <PromotionsProvider>{children}</PromotionsProvider>
      </CartProvider>
    </ProductsProvider>
  );
};
export default Providers;
