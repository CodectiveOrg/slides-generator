import { Children, PropsWithChildren, ReactElement } from "react";

import clsx from "clsx";

import bijanPortrait from "@/assets/portraits/bijan.webp";

import MingcuteArrowsRightLine from "@/icons/MingcuteArrowsRightLine";
import SimpleIconsLinkedin from "@/icons/SimpleIconsLinkedin";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

import styles from "./slides-master.module.css";
import Image from "next/image";

type Palette = "default" | "react" | "next";

type Props = PropsWithChildren & {
  palette?: Palette;
};

export default function SlidesMasterComponent({
  palette = "default",
  children,
}: Props): ReactElement {
  return (
    <div className={clsx("page", palette)}>
      {Children.map(children, (child, index) => (
        <section className={styles["slide-wrapper"]} key={index + 1}>
          <div className={styles["page-number"]}>{index + 1}</div>
          <div className={styles.portrait}>
            <Image src={bijanPortrait} alt="" />
            <div className={styles.name}>
              بیژن
              <br />
              عیسی‌پور
            </div>
          </div>
          <div dir="ltr" className={styles.author}>
            <div className={styles.username}>
              <SimpleIconsLinkedin />
              BijanProgrammer
            </div>
            <div className={styles.channel}>
              <MingcuteTelegramFill />
              Codective
            </div>
          </div>
          <div className={styles.swipe}>
            <MingcuteArrowsRightLine />
            ورق بزنید
          </div>
          {child}
        </section>
      ))}
    </div>
  );
}
