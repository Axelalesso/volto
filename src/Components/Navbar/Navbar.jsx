import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
   const isActiveCallback = ({isActive})=>{
      if(isActive){
         return 'link link-seleccionado'
      }
      else{
         return 'Link'
      }
   }
   return (
   <header>
      <nav>
         <div className="nav">
      <NavLink
            to={'/'}
            className={
               isActiveCallback
            }
            >
               Inicio
         </NavLink>
         <NavLink
            to={'/catalogo'}
            className={
               isActiveCallback
            }
            >
               Catalogo
         </NavLink>
         <NavLink
            to={'/contacto'}
            className={
               isActiveCallback
            }
            >
               Contacto
         </NavLink>
         </div>
      </nav>
   </header>
   );
};

export default Navbar;