import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: var(--gray-0);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  h1{
    margin-left: -220px;
    margin-top: 15px;
    color: var(--gray-600);
      span{
        color: var(--color-secondary);
        font-size: 13px
      }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      line-height: 1;
      font-size: 20px;
      width: 40px;
      margin-left: 35px;
      color: var(--gray-600);
      span{
        color: var(--color-secondary);
        font-size: 13px
      }
    }
  }
`;
export const NavLink = styled(Link)`
  color: rgba(189, 189, 189, 1);

  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  svg {
    font-size: 23px
  }
  :hover {
 
      transition: all 0.2s ease-in-out;
      color: var(--gray-600);
    
  }
  /* &.active {
    color: var(--orange);
  } */
`;

export const Bars = styled(FaBars)`
  position: absolute;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s linear;
    z-index: 1;
    transform: translate(100%, 86%);
    color: ${({open}) =>  open ? "#333" : "rgba(0,0,0,0.5)"};

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(20%, 90%);
    font-size: 1.8rem;
   
    cursor: pointer;
    transition: all 0.3s linear;
    z-index: 1;
  }
`;

export const NavMenu = styled.div`

  transform: ${({open}) => open ? "translateX(-100%)" : "translateX(0)" };
 
    position: fixed;
    background: var(--gray-100);
    top: 0;
    left: 0;
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 200px;
   
    padding-top: 1.5rem;
    text-align: left;
    transition: transform 0.5s ease-in-out;
    div {
    margin-top: 100px;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  margin-bottom: 20px;

  svg{ 
    font-size: 25px;
   
  }



  @media screen and (max-width: 1024px) {
    background: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--orange);
  padding: 10px 22px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  color: var(--gray-300);
  svg{
    margin-right: 10px;
    font-size: 16px;
  
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 1024px) {
    background: none;
  }
`;

export const Search = styled.div`
  position: absolute;
  right: 0;
  display:flex;
  align-items: center;
  height: 100%;
  width: 55%;
  max-width: 400px;
  padding: 5px;

  input {
    width: 100%;
    border-radius: 8px;
    outline: none;
    height: 40px;
    border: 2px solid rgba(224, 224, 224, 1);
    padding-left: 10px;
    font-size: 13px;
    color: var(--gray-600);
    :focus {
      border: 2px solid rgba(39, 174, 96, 1);
    }    
}
button {
  height: 40px;
  width: 55px;
  border-radius: 8px;
  border: none;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  margin: 5px;
  svg {
    width: 100%;
    color: var(--gray-0)
  }
}
`;

