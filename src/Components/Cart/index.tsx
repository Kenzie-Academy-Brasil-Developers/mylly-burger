import { useContext } from "react";
import { ProductsContext } from "../../Providers/Catalogue/index";
import Button from "../Button/index"
import { FaTrashAlt } from "react-icons/fa"
import { Container, Card} from "./style"

const Cart = () => {
    const { products } = useContext(ProductsContext);

    return (
        <Container>
            <h3>Carrinho de compras <span>X</span></h3>
            {products.map((item:any,index:any) => (
            <Card key = {index}>
                <img src = {item.image}/>
                <div>
                    <h4>{item.name} <span><FaTrashAlt/></span></h4>
                    {/* Contador de unidades */}
                </div>
            </Card>
            ))}
            
            <div>
                <p>Total<span>R$ 29,99</span></p>
            </div>
            <Button>Remover todos</Button>
        </Container>
    )
}
export default Cart