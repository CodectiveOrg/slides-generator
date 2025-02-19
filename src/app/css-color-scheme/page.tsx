import { ReactElement } from "react";

import SlidesMasterComponent from "@/components/slides-master/slides-master.component";
import CodeComponent from "@/components/code/code.component";

import CoverSlide from "@/slides/cover/cover.slide";
import BasicSlide from "@/slides/basic/basic.slide";
import ClosingSlide from "@/slides/closing/closing.slide";

export default function Page(): ReactElement {
  return (
    <SlidesMasterComponent>
      <CoverSlide title="Dark Mode" subtitle="فقط با یک خط کد!" />
      <BasicSlide title="color-scheme">
        <p>برای فعال‌سازی دارک مود، کافیه این کد رو به فایل HTML اضافه کنید:</p>
        <CodeComponent
          language="css"
          code={`
html {
  color-scheme: dark;
}
        `}
        />
        <p>
          این کد به مرورگر میگه برای تمام المان‌های صفحه از نسخه‌ی تیره استفاده
          کنه.
        </p>
        <p>
          یعنی Scrollbar و Button و Checkbox Input و Date Picker و Select و خیلی
          از المان‌های دیگه.
        </p>
      </BasicSlide>
      <BasicSlide title="دو مقدار همزمان">
        <p>همچنین میشه از دو مقدار به طور همزمان استفاده کرد:</p>
        <CodeComponent
          language="css"
          code={`
html {
  color-scheme: light dark;
}
        `}
        />
        <p>
          اینجوری به مرورگر میگیم که سایت ما، هم از Light Mode و هم از Dark Mode
          پشتیبانی میکنه.
        </p>
        <p>بنابراین با توجه به تنظیمات سیستم کاربر، تم سایت مشخص میشه.</p>
        <p>
          اگه کاربر اولویت خاصی نداشته باشه، اولین مقدار در نظر گرفته میشه که
          اینجا برابر با <code>light</code> ئه.
        </p>
      </BasicSlide>
      <ClosingSlide />
    </SlidesMasterComponent>
  );
}
