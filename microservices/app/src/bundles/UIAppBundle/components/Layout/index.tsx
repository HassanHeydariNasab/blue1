import { FC, useEffect } from "react";
import { newSmart } from "../../../../libs/smart/src";

import { MyService } from "../../services/MyService";

import styles from "./Layout.module.scss";

export const Layout: FC = ({ children }) => {
  const [mySmart, MyProvider] = newSmart(MyService);
  return (
    <MyProvider>
      <div className={styles.container}>
        <header>Blue</header>
        <main className={styles.main}>{children}</main>
        <footer>Copyleft *</footer>
      </div>
    </MyProvider>
  );
};
