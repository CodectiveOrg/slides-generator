import { ReactElement } from "react";

import CoverSlide from "@/slides/cover/cover.slide";

export default function Page(): ReactElement {
  return (
    <div className="page react">
      <CoverSlide title="عنوان 1" />
      <CoverSlide title="عنوان 2" />
      <CoverSlide title="عنوان 3" />
    </div>
  );
}
