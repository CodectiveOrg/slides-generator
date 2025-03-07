"use client";

import { ReactElement } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

import styles from "./export.module.css";

async function addSlide(
  pdf: jsPDF,
  slide: HTMLElement,
  index: number,
): Promise<void> {
  const imageData = await toPng(slide);

  if (index > 0) {
    pdf.addPage();
  }

  pdf.addImage(imageData, "PNG", 0, 0, 1080, 1080);
}

export default function ExportComponent(): ReactElement {
  const segment = useSelectedLayoutSegment();

  const toggleView = (shrink: boolean): void => {
    const page = document.querySelector<HTMLElement>("body > .page")!;

    if (shrink) {
      page.style.zoom = "0.5";
    } else {
      page.style.zoom = "1";
    }
  };

  const exportButtonClickHandler = async (): Promise<void> => {
    toggleView(false);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1080, 1080],
    });

    const slides = [
      ...document.querySelectorAll<HTMLElement>("body .page > section"),
    ];

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      await addSlide(pdf, slide, i);
    }

    pdf.save(`${segment}.pdf`);

    toggleView(true);
  };

  return (
    <div className={styles.export}>
      <button className="button primary" onClick={exportButtonClickHandler}>
        ذخیره
      </button>
    </div>
  );
}
