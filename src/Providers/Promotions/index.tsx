import { createContext,useState, useEffect, ReactNode, useContext } from "react"
import axios from "axios"
interface IPromotions {
    id: number;
    type: string;
    price:number;
    rule: string;
    reward: string;
}
interface IPromotionsProvider {
    children: ReactNode;
}

interface PromotionsProviderData {
    promotions: any;
    modalOpen: boolean;
    ModalIsOpen: () => void
  }
export const PromotionsContext = createContext<PromotionsProviderData>({} as PromotionsProviderData );

export const PromotionsProvider = ({ children }: IPromotionsProvider) => {
  const [promotions, setPromotions] = useState([]);
  const [modalOpen, setModalOpen ] = useState(false);

  const getPromotions = () => {
    axios
      .get("https://burguer-api-leonam.herokuapp.com/promotions")
      .then((response) => setPromotions(response.data));
  };

  useEffect(() => {
    getPromotions();
  }, []);

  const ModalIsOpen = () => {
      console.log("oi")
    setModalOpen(!modalOpen);
  };

  return (
    <PromotionsContext.Provider value={{promotions, modalOpen, ModalIsOpen}}>
      {children}
    </PromotionsContext.Provider>
  );
};
// export const useProducts = () => useContext(ProductsContext)