"use client";

import { ReactElement } from "react";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import styles from "./export.module.css";

async function addSlide(
  pdf: jsPDF,
  slide: HTMLElement,
  index: number,
): Promise<void> {
  const canvas = await html2canvas(slide);
  const imgData = canvas.toDataURL("image/png");

  if (index > 0) {
    pdf.addPage();
  }

  pdf.addImage(imgData, "PNG", 0, 0, 1080, 1080);
}

export default function ExportComponent(): ReactElement {
  const exportButtonClickHandler = async (): Promise<void> => {
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

    pdf.save("slides.pdf");
  };

  return (
    <div className={styles.export}>
      <button className="button primary" onClick={exportButtonClickHandler}>
        ذخیره
      </button>
    </div>
  );
}
