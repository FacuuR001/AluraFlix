import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { colorHeader, colorBlanco, panel, NavLinkPanel, backgroundNone } from "../UI/valiables"


export const Navegacion = styled.nav`
    background: ${colorHeader};
    height:4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 1rem;
    
`

export const Panel = styled.nav`
    z-index: 999999;
    background: ${panel};
    color:#F2F2F2;
    position: fixed;
    backdrop-filter: blur( 2px );
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease;
    transform: translate(-100%, 0);
      &.active{
        transform: translate(0, 0);
      };
        @media screen and (min-width: 800px){
            transform: translate(0, 0);
            background: ${backgroundNone};
            position:relative;
          }
`
export const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
        @media screen and (min-width: 800px){
          flex-direction:row;
          width:20rem;
          align-items:normal;
          width:inherit
        }
`
      
export const NavLink = styled(Link)`
    padding: 3.5rem;
    width: inherit;
    font-size: 1.4rem;
    text-decoration: none;
    transition: 0.2s;
    color: ${colorBlanco};
        &.active{
          background: ${NavLinkPanel};
          color: ${colorBlanco};
          font-weight:700;
        }
        @media screen and (min-width: 800px){
          padding:1rem;
          &.active{
            background:transparent;
            color: ${NavLinkPanel};
          }
        }
`
      
export const Logo = styled.img`
  width: 130px;
`
      
export const BurgerBtn = styled(FaBars)`
    display: flex;
    z-index: 9999999;
    cursor: pointer;
    position: relative;
    transition: 0.5s;
    font-size:40px;
    left:0px;
    color:${colorBlanco};
    @media screen and (min-width: 800px){
            display:none;
    }
`