import { BoxCard, Content } from "./style";
import Button from "../Button/index";
import { ProductsContext } from "../../Providers/Catalogue/index";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index";
const Card = (typePage: any) => {
  const { products } = useContext(ProductsContext);
  const { AddProductsCart } = useContext(CartContext);

  return (
    <Content>
      {products.map((item: any, index: number) => (
        <BoxCard key={index}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <span>{item.type}</span>
            <p>R$ {item.price}</p>
            <Button onClick={() => AddProductsCart(item)}>Adicionar</Button>
          </div>
        </BoxCard>
      ))}
    </Content>
  );
};
export default Card;
