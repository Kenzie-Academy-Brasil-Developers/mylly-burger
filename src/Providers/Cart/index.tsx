import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import toast from "react-hot-toast";

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
    if(!cartProducts.includes(item)){
      setCartProducts([...cartProducts, item]);
      toast.success("Item foi adicionado ao carrinho.")
    }
    else{
      toast.error("O item já está adicionado no carrinho.")
    }
  };
  const removeProductsCart = (item:any) => {
    const newList = cartProducts.filter(
      (element) => element.id !== item.id
    );
    toast.error("O item foi removido do carrinho")
    setCartProducts(newList);
  };

  const CartIsOpen = () => {
    setOpenCart(!openCart);
  };

  const removerAll = () => {
      const newArr:any = [];
      toast.error("Todos os itens foram removidos do carrinho")
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
