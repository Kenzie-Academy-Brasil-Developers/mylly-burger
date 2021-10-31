import { ProductsContext } from "../../Providers/Catalogue/index";
import Button from "../Button/index";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { Container, Card, Content } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index";

const Cart = () => {
  const { products } = useContext(ProductsContext);
  const { openCart, cartProducts, CartIsOpen, removerAll, removeProductsCart } =
    useContext(CartContext);
  return (
    <Container style={{ display: openCart ? "flex" : "none" }}>
      <h3>
        Carrinho de compras <span onClick={CartIsOpen}>X</span>
      </h3>
      <Content>
        {cartProducts.length === 0 ? (
          <h2>
            Sua sacola esta vazia<span>Adicione itens</span>
          </h2>
        ) : (
          cartProducts.map((item: any, index: any) => (
            <Card key={index}>
              <img src={item.image} />
              <div>
                <h4>
                  {item.name}{" "}
                  <span onClick={() => removeProductsCart(item)}>
                    <FaTrashAlt />
                  </span>
                </h4>
                {/* Contador de unidades */}
              </div>
            </Card>
          ))
        )}
      </Content>
      <div>
        <p>
          <span>Total</span> R${" "}
          {cartProducts.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
        </p>
      </div>
      <Button onClick={removerAll}>Remover todos</Button>
    </Container>
  );
};
export default Cart;
