import { ReactNode } from "react";
import { ProductsProvider } from "./Catalogue/index";

interface IProvidersProp {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProp) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};
export default Providers