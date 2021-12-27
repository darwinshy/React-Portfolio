import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  top: 2rem;
  right: 0%;
  width: 50%;
  z-index: 100;
`;

const NavBtn = styled.button`
  letter-spacing: 0.1px;
  padding: 0.1rem 0.4rem;
  border: none;
  background: none;
  transition: all 0.2s ease-in;
  opacity: 0.2;
  color: ${(props) => props.theme.text};
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <NavBtn>Home</NavBtn>
      </NavLink>
      <NavLink to="/about">
        <NavBtn>About</NavBtn>
      </NavLink>
      <NavLink to="/skills">
        <NavBtn>Skills</NavBtn>
      </NavLink>
      <NavLink to="/work">
        <NavBtn>Work</NavBtn>
      </NavLink>
      <NavLink to="/contact">
        <NavBtn>Contact</NavBtn>
      </NavLink>
    </Nav>
  );
};

export default Navbar;
