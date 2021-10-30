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
const Navbar = () => {
  const [open, setOpen] = useState(false);
  
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
          <input placeholder="Ex.: Big Q2" />
          <button>
            <FaSearch />
          </button>
        </Search>

        <NavMenu open={open}>
          <div>
            <NavBtn>
              <NavBtnLink className="invalid" to="#">
                {<FaShoppingCart />}Carrinho
              </NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="#">{<BsFillAwardFill/>}Promoções</NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink to="#">{<RiUserFollowFill/>}Login</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="#">{<FaWpforms/>}Cadastre-se</NavBtnLink>
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
