import { ReactElement } from "react";

import styles from "./cover.module.css";

type Props = {
  title: string;
  subtitle: string;
};

export default function CoverSlide({ title, subtitle }: Props): ReactElement {
  return (
    <div className={styles.cover}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
