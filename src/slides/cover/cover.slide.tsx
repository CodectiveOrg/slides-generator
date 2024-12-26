import { ReactElement } from "react";

import styles from "./cover.module.css";

type Props = {
  title: string;
};

export default function CoverSlide({ title }: Props): ReactElement {
  return (
    <section className={styles.cover}>
      <div className={styles.title}>{title}</div>
    </section>
  );
}
