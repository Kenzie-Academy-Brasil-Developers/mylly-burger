import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface ICartProvider {
  children: ReactNode;
}
interface Product {
  id: number;
  type: string;
  title: string;
  price: number;
  image: string;
  name:string
}

interface ICartProviderData {
  cartProducts: Product[];
  openCart: boolean;
  AddProductsCart: (item: Product) => void;
  removeProductsCart: (item: Product) => void;
  CartIsOpen: () => void;
  removerAll: () => void

}

export const CartContext = createContext<ICartProviderData>(
  {} as ICartProviderData
);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const AddProductsCart = (item:any) => {
    setCartProducts([...cartProducts, item]);
  };
  const removeProductsCart = (item:any) => {
    const newList = cartProducts.filter(
      (element) => element.id !== item.id
    );
    setCartProducts(newList);
  };

  const CartIsOpen = () => {
      console.log( "oi" )
    setOpenCart(!openCart);
  };

  const removerAll = () => {
      const newArr:any = [];
      setCartProducts(newArr)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        openCart,
        AddProductsCart,
        removeProductsCart,
        CartIsOpen,
        removerAll
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
