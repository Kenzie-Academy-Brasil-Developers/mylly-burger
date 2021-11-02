import { BoxCard, Content } from "./style";
import Button from "../Button/index";
import { ProductsContext } from "../../Providers/Catalogue/index";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index";
const Card = (typePage: any) => {
  const { products, filteredProducts } = useContext(ProductsContext);
  const { AddProductsCart } = useContext(CartContext);

  return (
    <Content>
      {filteredProducts.length === 0
        ? products.map((item: any, index: number) => (
            <BoxCard key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span>{item.type}</span>
                <p>R$ {item.price}</p>
                <Button onClick={() => AddProductsCart(item)}>Adicionar</Button>
              </div>
            </BoxCard>
          ))
        : filteredProducts.map((item: any, index: number) => (
            <BoxCard key={index}>
              <img
                src={filteredProducts[0].image}
                alt={filteredProducts[0].name}
              />
              <div>
                <h3>{filteredProducts[0].name}</h3>
                <span>{filteredProducts[0].type}</span>
                <p>R$ {filteredProducts[0].price}</p>
                <Button onClick={() => AddProductsCart(item)}>Adicionar</Button>
              </div>
            </BoxCard>
          ))}
    </Content>
  );
};
export default Card;
