import { ReactElement } from "react";

import SimpleIconsLinkedin from "@/icons/SimpleIconsLinkedin";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import SimpleIconsAparat from "@/icons/SimpleIconsAparat";
import SimpleIconsYoutube from "@/icons/SimpleIconsYoutube";
import SimpleIconsBookstack from "@/icons/SimpleIconsBookstack";

import HandDrawnArrow1 from "@/icons/HandDrawnArrow1";
import HandDrawnArrow2 from "@/icons/HandDrawnArrow2";
import HandDrawnArrow3 from "@/icons/HandDrawnArrow3";
import HandDrawnArrow4 from "@/icons/HandDrawnArrow4";

import styles from "./closing.module.css";

export default function ClosingSlide(): ReactElement {
  return (
    <div dir="ltr" className={styles.closing}>
      <ul className={styles.socials}>
        <li>
          <div className={styles.title}>Let&apos;s Get to Know Each Other</div>
          <div className={styles.link}>
            <SimpleIconsLinkedin />
            BijanProgrammer
          </div>
          <HandDrawnArrow1 className={styles.arrow} />
        </li>
        <li>
          <div className={styles.title}>Join Our Wonderful Community</div>
          <div className={styles.link}>
            <MingcuteTelegramFill />
            Codective
          </div>
          <HandDrawnArrow4 className={styles.arrow} />
        </li>
        <li>
          <div className={styles.title}>Watch Some Awesome Content</div>
          <div className={styles.link}>
            <SimpleIconsAparat />
            <SimpleIconsYoutube />
            BijanProgrammer
          </div>
          <HandDrawnArrow3 className={styles.arrow} />
        </li>
        <li>
          <div className={styles.title}>Read Amazing Articles</div>
          <div className={styles.link}>
            <SimpleIconsBookstack />
            docs.codective.ir
          </div>
          <HandDrawnArrow2 className={styles.arrow} />
        </li>
      </ul>
    </div>
  );
}
