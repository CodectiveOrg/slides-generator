import { ReactElement } from "react";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>سلام، رفیق!</h1>
    </div>
  );
}
