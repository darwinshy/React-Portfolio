import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DropAnimation } from "./PageComponents";

const Nav = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const NavBtn = styled.button`
  letter-spacing: 0.1px;
  padding: 0.1rem 0.4rem;
  border: none;
  background: none;
  transition: all 0.2s ease-in;
  opacity: 0.2;
  margin: 0 2rem;
  color: ${(props) => props.theme.text};
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

const Navbar = (props) => {
  return (
    <Nav
      variants={DropAnimation}
      initial={props.value === "main" ? "init" : ""}
      animate={props.value === "main" ? "show" : ""}
    >
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
      <NavBtn>
        <a
          href="https://drive.google.com/file/d/1z3FOJ5gayy09KoOgNaPRUWSl_GVbZVcv/view?usp=sharing"
          style={{ color: "#000" }}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
