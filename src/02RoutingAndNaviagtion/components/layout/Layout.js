import React from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
