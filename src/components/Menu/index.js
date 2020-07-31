import React from "react";
import Logo1 from "../../assets/img/Logo1.png";
// import Logo2 from "../../assets/img/Logo2.png";
import "./Menu.css";
import Button from "../Button";
// import Button from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo1} alt="Santiagoflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
