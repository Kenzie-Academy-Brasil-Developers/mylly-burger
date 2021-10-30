import { createContext,useState, useEffect, ReactNode, useContext } from "react"
import axios from "axios"
interface IProducts {
    id: number;
    image: string;
    name:string;
    type: string;
    price:number
}
interface IProductsProvider {
    children: ReactNode;
}

interface ProductsProviderData {
    products: any;
  }
export const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData );

export const ProductsProvider = ({ children }: IProductsProvider) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://burguer-api-leonam.herokuapp.com/products")
      .then((response) => setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
    console.log(getProducts)
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
};
// export const useProducts = () => useContext(ProductsContext)