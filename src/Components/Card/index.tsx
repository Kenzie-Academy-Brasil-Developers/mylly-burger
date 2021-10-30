import { BoxCard, Content } from "./style";
import Button from "../Button/index";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/Catalogue/index";

const Card = (typePage: any) => {
  const { products } = useContext(ProductsContext);
  console.log(products)
  return (
    <Content>
      {
        products.map((item: any, index: number) => (
          <BoxCard key={index}>
              <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <span>{item.type}</span>
              <p>R$ {item.price}</p>
              <Button>Adicionar</Button>
            </div>
          </BoxCard>
        ))}
    </Content>
  );
};
export default Card;
