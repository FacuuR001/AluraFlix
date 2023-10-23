import { useState } from "react";
import logo from "../../assets/img/logo.png"
import { Navegacion,
         Panel,
         Menu,
         NavLink,
         Logo,
         BurgerBtn
        } from "./Style"
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';


const Header = () => {
    const [nav, setNav] = useState(true);

    const handleNav  = () => {
      setNav(!nav);
    }



    return (
      <>
    <Navegacion>
      <BurgerBtn onClick={handleNav}/>
      <Link to="/" ><Logo src={logo} alt="Logo" /></Link>
      <Panel className={nav ? '' : 'active'}>
        <Menu>
          <NavLink onClick={()=>setNav(true)} to='/buscar'>Buscar <FaSearch/></NavLink>
          <NavLink onClick={()=>setNav(true)} to='/'>Inicio</NavLink>
          <NavLink onClick={()=>setNav(true)} to='/peliculas'>Peliculas</NavLink>
          <NavLink onClick={()=>setNav(true)} to='/series'>Series</NavLink>
          <NavLink onClick={()=>setNav(true)} to='/login'>Ingresar</NavLink>
        </Menu>
      </Panel>
    </Navegacion>
    </>
    );
  };
  
export default Header;

