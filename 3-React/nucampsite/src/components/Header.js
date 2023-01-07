import { Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

import React from "react";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="nucamp logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
