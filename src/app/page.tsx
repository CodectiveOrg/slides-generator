import { ReactElement } from "react";

import SlidesMasterComponent from "@/components/slides-master/slides-master.component";
import CodeComponent from "@/components/code/code.component";

import CoverSlide from "@/slides/cover/cover.slide";
import BasicSlide from "@/slides/basic/basic.slide";

export default function Page(): ReactElement {
  return (
    <SlidesMasterComponent>
      <CoverSlide title="Dark Mode" subtitle="فقط با یک خط کد!" />
      <BasicSlide title="color-scheme">
        <p>برای فعال‌سازی دارک مود، کافیه این کد رو به فایل HTML اضافه کنید:</p>
        <CodeComponent
          language="css"
          code={`html {
  color-scheme: dark;
}`}
        />
        <p>
          این کد به مرورگر میگه برای تمام المان‌ها از نسخه‌ی دارک استفاده کنه؛
        </p>
        <p>
          یعنی Scrollbar و Checkbox Input و Date Picker و Select و خیلی از
          المان‌های دیگه.
        </p>
      </BasicSlide>
    </SlidesMasterComponent>
  );
}
