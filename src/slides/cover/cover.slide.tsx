import { ReactElement } from "react";

import clsx from "clsx";

import styles from "./cover.module.css";

type Props = {
  title: string;
};

export default function CoverSlide({ title }: Props): ReactElement {
  return (
    <section className={clsx(styles.cover, "pattern")}>
      <div className={styles.title}>{title}</div>
    </section>
  );
}
