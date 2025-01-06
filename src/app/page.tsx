import { ReactElement } from "react";

import SlidesMasterComponent from "@/components/slides-master/slides-master.component";

import CoverSlide from "@/slides/cover/cover.slide";

export default function Page(): ReactElement {
  return (
    <SlidesMasterComponent>
      <CoverSlide title="Dark Mode" subtitle="فقط با یک خط کد!" />
    </SlidesMasterComponent>
  );
}
