import { ReactElement } from "react";

import Image from "next/image";

import tanstackLogo from "@/assets/logo/tanstack.png";

import SlidesMasterComponent from "@/components/slides-master/slides-master.component";
import CodeComponent from "@/components/code/code.component";

import CoverSlide from "@/slides/cover/cover.slide";
import BasicSlide from "@/slides/basic/basic.slide";
import ClosingSlide from "@/slides/closing/closing.slide";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <SlidesMasterComponent palette="react">
      <CoverSlide
        title="React Query"
        subtitle={
          <>
            <code>isFetching</code> vs <code>isPending</code> vs{" "}
            <code>isLoading</code>
          </>
        }
        subtitleClassName={styles.subtitle}
      />
      <BasicSlide title="قبل از اینکه شروع کنیم">
        <p>
          دقت کنید که اسم بعضی از متغیرهایی که در ادامه گفته میشه، تو ورژن 4 و 5
          متفاوته.
        </p>
        <p>
          اسم‌هایی که اینجا ذکر میشه، مربوط به آخرین نسخه‌ست که در حال حاضر ورژن
          5 محسوب میشه.
        </p>
        <Image
          className={styles["tanstack-logo"]}
          src={tanstackLogo}
          alt=""
          width={500}
          height={500}
        />
      </BasicSlide>
      <BasicSlide title="مقدمه">
        <p>
          تو React Query فلگ‌های مختلف برای اطلاع از وضعیت Queryها وجود داره که
          میشه به این شکل مقدارشون رو بگیریم:
        </p>
        <CodeComponent
          language="typescript"
          code={`
const query = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
});

console.log(query.isFetching);
console.log(query.isPending);
console.log(query.isLoading);
        `}
        />
        <p>هر کدوم از این فلگ‌ها کاربرد خاص خودشون رو دارن.</p>
      </BasicSlide>
      <BasicSlide title="سازوکار">
        <p>
          قبل از اینکه در مورد تفاوت این فلگ‌ها صحبت کنیم، باید سازوکار
          {` `}
          React Query
          {` `}
          رو بشناسیم.
        </p>
        <p>
          React Query
          {` `}
          یه سیستم Cache داخلی داره که با استفاده از
          {` `}
          <code>queryKey</code>
          {` `}
          میاد نتیجه‌ی
          {` `}
          <code>queryFn</code>
          {` `}
          رو ذخیره میکنه.
        </p>
        <p>
          اینجوری اگه چند بار از یه Query یکسان استفاده کنیم، فقط یک بار درخواست
          {` `}
          <code>fetch</code>
          {` `}
          زده میشه.
        </p>
        <p>
          از طرفی اگه نیاز باشه به هر دلیلی دوباره
          {` `}
          <code>fetch</code>
          {` `}
          انجام بشه، تا زمانی که نتیجه بیاد میتونیم داده‌های قبلی رو نمایش بدیم
          که UX بهتری داشته باشیم.
        </p>
        <p>تمام این کارها به طور خودکار توسط React Query انجام میشن.</p>
      </BasicSlide>
      <BasicSlide title="مثال">
        <p>به عنوان مثال یه وبلاگ رو در نظر بگیرید.</p>
        <p>
          تو صفحه‌ی اصلی میایم لیست پست‌ها رو
          {` `}
          <code>fetch</code>
          {` `}
          میکنیم.
        </p>
        <p>کاربر رو یکی از پست‌ها کلیک میکنه و وارد صفحه‌ی مربوطه میشه.</p>
        <p>بعد از چند ثانیه دوباره برمیگرده به صفحه‌ی اصلی.</p>
        <p>
          اینجا React Query داده‌هایی که قبلاً
          {` `}
          <code>fetch</code>
          {` `}
          کرده بودیم رو به کاربر نشون میده اما تو پس‌زمینه یه درخواست میزنه که
          داده‌های جدید رو دریافت کنه.
        </p>
        <p>
          اینکه داده‌ها تا چه زمانی Fresh هستن رو میتونیم با استفاده از
          {` `}
          <code>staleTime</code>
          {` `}
          مشخص کنیم. تا زمانی که این مدت سپری نشده باشه، React Query درخواست
          جدید نمیزنه.
        </p>
      </BasicSlide>
      <BasicSlide title="isFetching">
        <p>
          این فلگ، هر موقع تحت هر شرایطی عملیات
          {` `}
          <code>fetch</code>
          {` `}
          در حال انجام باشه،
          {` `}
          <code>true</code>
          {` `}
          میشه.
        </p>
        <p>فرقی نمیکنه بار اول باشه، تو پس‌زمینه باشه یا هر حالت دیگه‌ای.</p>
        <p>
          اگه
          {` `}
          <code>fetch</code>
          {` `}
          داره اتفاق میفته، پس
          {` `}
          <code>isFetching</code>
          {` `}
          هم
          {` `}
          <code>true</code>
          {` `}
          میشه.
        </p>
        <CodeComponent
          language="tsx"
          size="medium"
          code={`
<ul
  style={{
    opacity: isFetching ? "0.5" : "1",
  }}
>
  {data.map((post) => (
    <Post key={post.id} post={post} />
  ))}
</ul>;
        `}
        />
      </BasicSlide>
      <BasicSlide title="isPending">
        <p>
          این فلگ، هر موقع داده‌ای موجود نباشه،
          {` `}
          <code>true</code>
          {` `}
          میشه.
        </p>
        <p>
          به عنوان مثال زمانی که صفحه Load میشه و هنوز جواب
          {` `}
          <code>fetch</code>
          {` `}
          اولیه نیومده، مقدارش
          {` `}
          <code>true</code>
          {` `}
          میشه.
        </p>
        <p>
          حالا اگه
          {` `}
          <code>staleTime</code>
          {` `}
          سپری شده باشه و به کاربر داده‌ی Cache رو نشون بدیم، تو پس‌زمینه
          {` `}
          <code>fetch</code>
          {` `}
          اتفاق میفته.
        </p>
        <p>
          تو چنین حالتی مقدارش
          {` `}
          <code>false</code>
          {` `}
          میشه چون داده موجوده و داریم از روی Cache میخونیمش.
        </p>
        <p>
          پس مقدار
          {` `}
          <code>isPending</code>
          {` `}
          لزوماً ربطی به وضعیت
          {` `}
          <code>fetch</code>
          {` `}
          نداره، بلکه به ما میگه آیا داده‌ای برای نمایش داریم یا نه.
        </p>
      </BasicSlide>
      <BasicSlide title="enabled">
        <p>
          ما میتونیم یه Query رو غیرفعال کنیم و خودمون مشخص کنیم چه زمانی عملیات
          {` `}
          <code>fetch</code>
          {` `}
          انجام بشه.
        </p>
        <CodeComponent
          language="typescript"
          code={`
const query = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  enabled: false
});
        `}
        />
        <p>
          اینجوری
          {` `}
          <code>isPending</code>
          {` `}
          برابر با
          {` `}
          <code>true</code>
          {` `}
          میشه و{` `}
          <code>isFetching</code>
          {` `}
          برابر با
          {` `}
          <code>false</code>
          {`.`}
        </p>
        <p>چرا؟ چون داده‌ای وجود نداره و در حال گرفتنش هم نیستیم.</p>
      </BasicSlide>
      <BasicSlide title="isLoading">
        <p>
          اگه
          {` `}
          <code>isFetching</code>
          {` `}و{` `}
          <code>isPending</code>
          {` `}
          رو خوب یاد گرفته باشید، یادگیری
          {` `}
          <code>isLoading</code>
          {` `}
          ساده‌ست.
        </p>
        <p>
          این فلگ زمانی
          {` `}
          <code>true</code>
          {` `}
          میشه که
          {` `}
          <code>isFetching</code>
          {` `}و{` `}
          <code>isPending</code>
          {` `}
          هر دو
          {` `}
          <code>true</code>
          {` `}
          باشن.
        </p>
        <p>یه جورایی می‌تونیم این کد رو براش در نظر بگیریم:</p>
        <CodeComponent
          language="typescript"
          size="medium"
          code={`
const isLoading = isFetching && isPending;
        `}
        />
        <p>
          پس فقط زمانی
          {` `}
          <code>true</code>
          {` `}
          میشه که داده‌ای موجود نیست اما در حال دریافتش هستیم.
        </p>
      </BasicSlide>
      <BasicSlide title="isError">
        <p>
          این فلگ شاید خیلی ربطی به بحثمون نداشته باشه اما یاد گرفتنش خیلی
          ساده‌ست و به حرفی که میخوام در ادامه بزنم کمک میکنه.
        </p>
        <p>
          هر زمان به هر دلیلی اجرای
          {` `}
          <code>queryFn</code>
          {` `}
          با مشکل مواجه بشه، مقدار این فلگ
          {` `}
          <code>true</code>
          {` `}
          میشه.
        </p>
        <p>
          بنابراین ازش برای اطمینان از اجرای صحیح
          {` `}
          <code>queryFn</code>
          {` `}
          استفاده می‌کنیم و هر زمان که
          {` `}
          <code>true</code>
          {` `}
          بود میتونیم به کاربر یه پیام نشون بدیم که متوجه شه داده‌ها دریافت
          نشدن.
        </p>
        <CodeComponent
          language="typescript"
          size="medium"
          code={`
if (isError) {
  return (
    error?.message ?? "Unexpected error."
  );
}
        `}
        />
      </BasicSlide>
      <BasicSlide title="بالاخره از کدوم استفاده کنیم؟">
        <p>
          React Query
          {` `}
          تو مستنداتش پیشنهاد میده برای اکثر Queryها از
          {` `}
          <code>isPending</code>
          {` `}و{` `}
          <code>isError</code>
          {` `}
          استفاده کنیم.
        </p>
        <p>
          اینجوری اگه جفتشون
          {` `}
          <code>false</code>
          {` `}
          باشن مطمئن میشیم داده‌ای برای نمایش وجود داره.
        </p>
        <p>
          خوبی این روش اینه که ویژگی Type Narrowing تو TypeScript فعال میشه و
          دیگه اخطار نمیده که ممکنه داده
          {` `}
          <code>undefined</code>
          {` `}
          باشه.
        </p>
        <p>
          البته
          {` `}
          <code>isLoading</code>
          {` `}و{` `}
          <code>isFetching</code>
          {` `}
          هم کاربردهای خاص خودشون رو دارن که با توجه به توضیحات داده شده
          می‌تونید ازشون استفاده کنید.
        </p>
      </BasicSlide>
      <BasicSlide title="کد نهایی">
        <CodeComponent
          language="tsx"
          size="medium"
          code={`
const { ... } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
});

if (isPending) {
  return <Loading />;
}

if (isError) {
  return (
    error?.message ?? "Unexpected error."
  );
}

return <PostList posts={data} />;
        `}
        />
      </BasicSlide>
      <ClosingSlide />
    </SlidesMasterComponent>
  );
}
