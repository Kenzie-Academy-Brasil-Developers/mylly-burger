import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Search,
  RightMenu,
} from "./style";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt, FaWpforms, FaAward } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import {BsFillAwardFill} from "react-icons/bs"
import { RiUserFollowFill } from "react-icons/ri"
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart/index"
import {PromotionsContext } from "../../Providers/Promotions/index"
import {ProductsContext } from "../../Providers/Catalogue/index"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {CartIsOpen} = useContext(CartContext);
  const { ModalIsOpen } = useContext(PromotionsContext);
  const {showProducts} = useContext(ProductsContext)
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <Nav>
        <Bars open={open} onClick={() => setOpen(!open)} />
        <NavLink to="/">
          <h1>
            Mylly <span>Burguer</span>
          </h1>
        </NavLink>
        <Search>
          <input value = {inputValue} onChange = {(e) => setInputValue((e.target.value))}placeholder="Ex.: Big Q2" />
          <button onClick = {() => showProducts(inputValue)}>
            <FaSearch />
          </button>
        </Search>

        <NavMenu open={open}>
          <div>
            <NavBtn onClick = {CartIsOpen} >
              <NavBtnLink className="invalid" to="#">
                {<FaShoppingCart />}Carrinho
              </NavBtnLink>
            </NavBtn>
            <NavBtn onClick = {ModalIsOpen}>
              <NavBtnLink to="#">
                {<BsFillAwardFill/>}Promoções
              </NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink to="/login">{<RiUserFollowFill/>}Login</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/signup">{<FaWpforms/>}Cadastre-se</NavBtnLink>
            </NavBtn>

            <NavBtn >
              <NavBtnLink to = "#">{<MdOutlineLogout />} Sair</NavBtnLink>
            </NavBtn>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
