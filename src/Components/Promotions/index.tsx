import { ProductsContext } from "../../Providers/Catalogue/index";
import { useState } from "react";
import { Container} from "./style";
import { useContext } from "react";
import { PromotionsContext } from "../../Providers/Promotions/index";

const Promotions = () => {
    const { promotions, ModalIsOpen, modalOpen } = useContext(PromotionsContext);
    return (
        <Container style={{ display: modalOpen ? "flex" : "none" }}>
          OLÁAAAAAAAAAAAAAAAAAAAAAA
        </Container>
    )
}
export default Promotions 