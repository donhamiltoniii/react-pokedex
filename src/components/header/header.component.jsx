import React from "react";

import styles from "./header.styles.module.css";

const Header = ({ children }) => (
  <header className={styles.header}>
    {children}
    <nav>Fancy navigation</nav>
  </header>
);

export default Header;
