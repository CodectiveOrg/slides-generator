import { ReactElement, ReactNode } from "react";

import clsx from "clsx";

import styles from "./cover.module.css";

type Props = {
  title: ReactNode;
  titleClassName?: string;
  subtitle: ReactNode;
  subtitleClassName?: string;
};

export default function CoverSlide({
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
}: Props): ReactElement {
  return (
    <div className={styles.cover}>
      <div className={clsx(styles.title, titleClassName)}>{title}</div>
      <div className={clsx(styles.subtitle, subtitleClassName)}>{subtitle}</div>
    </div>
  );
}
