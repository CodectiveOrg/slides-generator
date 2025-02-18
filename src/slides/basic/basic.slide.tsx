import { PropsWithChildren, ReactElement } from "react";

import styles from "./basic.module.css";

type Props = PropsWithChildren<{
  title?: string;
}>;

export default function BasicSlide({ children, title }: Props): ReactElement {
  return (
    <div className={styles.basic}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
}
