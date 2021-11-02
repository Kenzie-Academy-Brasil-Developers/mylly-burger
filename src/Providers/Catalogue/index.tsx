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
    filteredProducts: any;
    showProducts: (valueInput: IProducts) => void
  }
export const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData );

export const ProductsProvider = ({ children }: IProductsProvider) => {
  const [products, setProducts] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const getProducts = () => {
    axios
      .get("https://burguer-api-leonam.herokuapp.com/products")
      .then((response) => setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
    console.log(getProducts)
  }, []);

  const showProducts = (valueInput: any) => {
    const filterProduct = products.filter((prod:any) => prod.name === valueInput)
     setFilteredProducts(filterProduct)

 }

 

  return (
    <ProductsContext.Provider value={{products, showProducts, filteredProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
// export const useProducts = () => useContext(ProductsContext)