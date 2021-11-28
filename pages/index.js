import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HeaderLanding, FooterLanding } from "../components/specific/layout";
import Div from "../components/specific/container";
import Text from "../components/base/text";
import { Heading1, Heading2 } from "../components/base/text/text";
import Button from "../components/base/button";
import { Tabs, Tab, TabContent } from "../components/base/tabs";
import Collapse from "../components/base/collapse/collapse";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const { lg } = useWindowSize();

  return (
    <Div dir="rtl" className="font-Regular">
      <HeaderLanding />
      <Hero />
      <WhyProdoc />
      <Features />
      {lg ? <Features2Desktop /> : <Features2Mobile />}
      <Pricing />
      {lg ? <PlansDesktop /> : <PlansMobile />}
      <FAQ />
      <FooterLanding />
    </Div>
  );
};

const Hero = () => {
  return (
    <Div className="flex justify-center items-center w-screen h-screen bg-hero bg-center bg-no-repeat bg-cover">
      <Div className="lg:w-[44.9%] w-[73%] lg:h-[25.875rem] h-[11.625rem] custom-backdrop-blur rounded-[2px] flex flex-col justify-center items-center">
        <Heading1 className="font-Bold lg:text-[4rem] text-[1.75rem] text-Blue-700">
          پرو داک
        </Heading1>
        <Text className="font-Medium text-xs lg:text-base text-Blue-700 text-center lg:mt-[2.125rem] mt-2 lg:w-[23.75rem] w-[13.5rem] leading-[1.67] lg:leading-normal">
          اولین API Documentor داخلی و بدون نیاز به پرداخت هزینه دلاری برای خرید
          عضویت.
        </Text>
        <Div className="lg:mt-14 mt-8 flex lg:w-[23.5rem] w-[13.5rem] justify-between">
          <Button className="bg-[#13c666] rounded-[0.25rem] lg:w-[10.75rem] lg:h-10 w-24 h-5 font-SemiBold lg:text-base text-Eight text-Blue-700">
            شروع رایگان
          </Button>
          <Button className="bg-white lg:border-2 border border-[#14c666] rounded-[0.25rem] lg:w-[10.75rem] lg:h-10 w-24 h-5 font-SemiBold lg:text-base text-Eight text-[#13c666]">
            دریافت دمو
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

const WhyProdoc = () => {
  return (
    <Div className="w-full pb-[6rem] lg:pb-[8rem] bg-[#f0f1f4]  flex flex-col ">
      <Heading2 className="lg:text-5xl text-[1.25rem] font-Bold text-Blue-700 mr-auto ml-auto mt-[4.25rem] lg:mt-[4.75rem]">
        چرا پروداک؟
      </Heading2>
      <Text className="w-full lg:px-[12.7%] px-4 mt-8 lg:mt-[2.625rem] lg:text-[1.75rem] text-base text-[#707070] font-Regular text-center leading-[2] lg:leading-[2.29]">
        تیم طراحی و توسعه استدیو دیزاین پروداپت برای حل مشکلات و کمبودهای
        نرم‌افزارهایی مثل Postman و Swagger، اقدام به طراحی یک سیستم مستندساز
        API، به نام پروداک نمود.
      </Text>
      <Text className="w-full lg:px-[12.7%] px-4 lg:text-[1.75rem] text-base text-[#707070] font-Regular text-center leading-[2] lg:leading-[2.29]">
        تیم طراحی پروداک همواره در تلاش است تا با تقویت تجربه کاربری و طراحی
        امکانات جدید، نیاز برنامه نویسان به دیگر نرم‌افزارهای API ساز را به
        حداقل برساند تا مشکلات خرید اشتراک و یا استفاده از چند نرم‌افزار مختلف،
        در ایران حل شود.
      </Text>
    </Div>
  );
};

const Features = () => {
  return (
    <Div className="w-full relative bg-features bg-no-repeat bg-cover bg-center flex flex-col z-10 after:absolute after:top-0 after:left-0 after:bg-[#182141] after:opacity-80 after:w-full after:h-full">
      <Div className="flex flex-col lg:flex-row lg:justify-between z-20 mt-[5.25rem]">
        <Div className="flex flex-col lg:w-[20%] lg:mr-[12%]">
          <Div className="relative w-9 h-9 lg:w-[4rem] lg:h-[4rem] mr-auto ml-auto lg:ml-auto lg:mr-0">
            <Image
              alt="icon"
              src="/icons/api-download-icon.svg"
              layout="responsive"
              width={64}
              height={64}
            />
          </Div>
          <Text className="lg:text-Twenty text-white lg:font-ExtraBold font-Bold lg:mt-6 mt-4 text-center lg:text-right">
            امکان دانلود داکیومنت
          </Text>
          <Text className="font-Regular text-white lg:text-base lg:leading-[1.75] leading-loose lg:mt-4 mt-1 px-10 text-center lg:text-right lg:px-0">
            امکان دانلود کل داکیومنت در فرمت JSON، برای Import به ابزارهایی مثل
            Insomnia و Postman.
          </Text>
        </Div>
        <Div className="flex flex-col lg:w-[21%] mt-[4.5rem] lg:mt-0">
          <Div className="relative w-9 h-9 lg:w-[4rem] lg:h-[4rem] mr-auto ml-auto lg:ml-auto lg:mr-0">
            <Image
              alt="icon"
              src="/icons/api-test-icon.svg"
              layout="responsive"
              width={64}
              height={64}
            />
          </Div>
          <Text className="lg:text-Twenty text-white lg:font-ExtraBold font-Bold lg:mt-6 mt-4 text-center lg:text-right">
            تست آسان ای پی آی ها
          </Text>
          <Text className="font-Regular text-white lg:text-base lg:leading-[1.75] leading-loose lg:mt-4 mt-1 px-10 text-center lg:text-right lg:px-0">
            در پروداک امکان تست API ها فراهم شده است در نتیجه نیازی
            برنامه‌نویسان برای تست نیازی به مراجه به Swagger یا Postman ندارد.
          </Text>
        </Div>
        <Div className="flex flex-col lg:w-[18.8%] lg:ml-[12.7%]  mt-[4.5rem] lg:mt-0">
          <Div className="relative w-9 h-9 lg:w-[4rem] lg:h-[4rem] mr-auto ml-auto lg:ml-auto lg:mr-0">
            <Image
              alt="icon"
              src="/icons/api-folders-icon.svg"
              layout="responsive"
              width={64}
              height={64}
            />
          </Div>
          <Text className="lg:text-Twenty text-white lg:font-ExtraBold font-Bold lg:mt-6 mt-4 text-center lg:text-right whitespace-nowrap">
            امکان فولدربندی end point ها
          </Text>
          <Text className="font-Regular text-white lg:text-base lg:leading-[1.75] leading-loose lg:mt-4 mt-1 px-10 text-center lg:text-right lg:px-0">
            به راحتی بخش‌های مختلف API ها را دسته‌بندی کنید.
          </Text>
        </Div>
      </Div>
      <Div className="lg:mt-[3.875rem] mt-[3.75rem] lg:mb-[5.75rem] mb-[6rem] w-full flex justify-center z-20">
        <Button className="lg:w-[12.5rem] w-[6rem] h-5 lg:h-10 lg:rounded-lg rounded-sm bg-[#13c666] font-SemiBold lg:text-base text-Eight text-Blue-700 ml-[1.75rem]">
          شروع رایگان
        </Button>
        <Button className="lg:w-[12.5rem] w-[6rem] h-5 lg:h-10 lg:rounded-lg rounded-sm bg-transparent lg:border-2 border border-[#14c666] font-SemiBold lg:text-base text-Eight text-[#13c666]">
          دریافت دمو
        </Button>
      </Div>
    </Div>
  );
};

const Features2Mobile = () => {
  return (
    <Div className="flex flex-col bg-[#f0f1f4] px-[4rem] pt-[4rem] pb-[5.125rem]">
      <Div className="flex flex-col">
        <Text
          className="text-base text-Blue-700 text-center font-Bold"
          dir="rtl"
        >
          امکان اشتراک گذاری API ها
        </Text>
        <Div className="w-[13.3rem] h-[7.9rem] bg-Blue-700 rounded-lg shadow-Primary mt-8 ml-auto mr-auto"></Div>
        <Text
          className="mt-6 font-Light text-base text-center text-[#707070] leading-loose"
          dir="rtl"
        >
          در پروداک می‌توانید هر پروژه ایجاد شده را با تمامی اعضای تیم توسعه
          فرانت و بک با امکان تعیین دسترسی (viewer یا editor) به اشتراک بگذارید.
        </Text>
      </Div>
      <Div className="mt-[7.75rem] flex flex-col">
        <Text className="w-[13.25rem] font-Bold mr-auto ml-auto text-base text-center text-Blue-700">
          تست API ها در محیطی با تجربه کاربری بهتر
        </Text>
        <Div className="w-[7.25rem] h-[10rem] shadow-Primary bg-Blue-700 rounded-lg mt-8 mr-auto ml-auto"></Div>
        <Text className="text-center text-base text-[#707070] font-Light leading-loose mt-6">
          به منظور بهبود سرعت عمل برنامه‌نویسان، در پروداک تلاش شده است که امکان
          تست با دسترسی آسان‌تر و تجربه کاربری بهتر به انجام رسد.
        </Text>
      </Div>
    </Div>
  );
};

const Features2Desktop = () => {
  return (
    <Div className="pt-[17.5rem] pb-[17.5rem] bg-[#f0f1f4] flex flex-col">
      <Div className="flex justify-between mr-[13%] ml-[13%]">
        <Div className="w-[28.75rem] h-[17.125rem] rounded-2xl shadow-landing-first bg-Blue-700"></Div>
        <Div className="flex flex-col w-[40.6%]">
          <Text className="font-Bold text-4xl text-Blue-700">
            امکان اشتراک‌گذاری API ها
          </Text>
          <Text className="mt-8 font-Light text-2xl text-[#707070] leading-relaxed lg:leading-[1.75]">
            در پروداک می‌توانید هر پروژه ایجاد شده را با تمامی اعضای تیم توسعه
            فرانت و بک با امکان تعیین دسترسی (viewer یا editor) به اشتراک
            بگذارید.
          </Text>
        </Div>
      </Div>
      <Div className="flex justify-between mr-[13%] ml-[13%] mt-[23.43rem]">
        <Div className="flex flex-col w-[38%]">
          <Text className="text-4xl text-Blue-700 font-Bold lg:leading-normal">
            تست API ها در محیطی با تجربه کاربری بهتر
          </Text>
          <Text className="mt-8 font-Light text-2xl text-[#707070] leading-relaxed lg:leading-[1.75]">
            به منظور بهبود سرعت عمل برنامه‌نویسان، در پروداک تلاش شده است که
            امکان تست با دسترسی آسان‌تر و تجربه کاربری بهتر به انجام رسد.
          </Text>
        </Div>
        <Div className="w-[31.31rem] h-[43.5rem] rounded-2xl bg-Blue-700 shadow-landing-second"></Div>
      </Div>
    </Div>
  );
};

const Pricing = () => {
  return (
    <Div className="bg-[#f0f1f4] pb-28 lg:pb-72 flex-col lg:flex lg:flex-row lg:justify-between" id='plans'>
      <Div className="mx-8 pt-2 lg:pt-16 px-4 lg:px-9 2xl:px-11 pb-3 lg:pb-20 shadow-pricing rounded-[0.25rem] lg:rounded-3xl bg-white flex flex-col lg:w-[28%] lg:mr-16 lg:ml-10">
        <Text className="font-Regular text-Ten lg:text-[1.75rem] text-Blue-700 text-center">
          رایگان
        </Text>
        <Text className="font-Bold text-Ten lg:text-xl mt-1 lg:mt-7 text-Blue-700 text-center">
          ۰ تومان
        </Text>
        <Div className="flex justify-between mt-4 lg:mt-28 lg:flex-col">
          <Div className="flex flex-col">
            <Text className="text-Eight lg:text-base flex-wrap flex relative right-2 lg:right-4 items-center text-[#707070] before:w-[5px] before:h-[5px] lg:before:w-[0.75rem] lg:before:h-[0.75rem] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2 lg:before:-right-4">
              امکان به اشتراک‌گذاری APIها بین{" "}
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                3
              </span>{" "}
              نفر
            </Text>
            <Text className="text-Eight flex-wrap lg:text-base flex mt-3 relative right-4 lg:right-4 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] lg:before:w-[0.75rem] lg:before:h-[0.75rem] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2 lg:before:-right-4">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                2
              </span>{" "}
              API
            </Text>
            <Text className="text-Eight flex-wrap lg:text-base flex mt-3 relative right-2 lg:right-4 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] lg:before:w-[0.75rem] lg:before:h-[0.75rem] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2 lg:before:-right-4">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                30
              </span>{" "}
              Endpoint برای هر API
            </Text>
          </Div>
          <Div className="flex flex-col lg:mt-3">
            <Text className="text-Eight lg:text-base flex relative right-2 lg:right-4 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] lg:before:w-[0.75rem] lg:before:h-[0.75rem] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2 lg:before:-right-4">
              تست آسان ای پی آی ها
            </Text>
            <Text className="text-Eight lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              تعیین میزان دسترسی به اعضای تیم
            </Text>
            <Text className="text-Eight flex-wrap lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              گزارش آخرین تعییرات روی هر API
            </Text>
          </Div>
        </Div>
        <button className="mr-auto ml-auto w-20 h-4 rounded-sm bg-Blue-700 text-white font-SemiBold text-[0.375rem] mt-6 lg:mt-20 lg:w-44 lg:rounded-lg lg:text-base lg:h-10">
          شروع رایگان
        </button>
      </Div>

      <Div className="mx-8 pt-2 px-4 pb-3 mt-14 lg:mt-0 shadow-pricing rounded-[0.25rem] lg:rounded-3xl bg-white flex flex-col lg:w-[28%] lg:mx-0 lg:pt-16 lg:px-9">
        <Text className="font-Regular text-Ten text-Blue-700 text-center lg:text-[1.75rem]">
          تیم‌ها
        </Text>
        <Text className="font-Bold text-Ten mt-1 lg:mt-7 text-Blue-700 text-center lg:text-xl">
          ماهانه ۵۰ تومان
        </Text>
        <Div className="flex justify-between mt-4 lg:mt-28 lg:flex-col">
          <Div className="flex flex-col">
            <Text className="text-Eight flex-wrap lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان به اشتراک‌گذاری APIها بین{" "}
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                بی‌نهایت
              </span>{" "}
              نفر
            </Text>
            <Text className="text-Eight flex-wrap lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                10
              </span>{" "}
              API
            </Text>
            <Text className="text-Eight flex-wrap lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                بی‌نهایت
              </span>{" "}
              Endpoint برای هر API
            </Text>
          </Div>
          <Div className="flex flex-col lg:mt-3">
            <Text className="text-Eight flex lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              تست آسان ای پی آی ها
            </Text>
            <Text className="text-Eight flex-wrap flex lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              تعیین میزان دسترسی به اعضای تیم
            </Text>
            <Text className="text-Eight flex flex-wrap mt-3 lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              گزارش آخرین تعییرات روی هر API
            </Text>
          </Div>
        </Div>
        <button className="mr-auto ml-auto w-20 h-4 rounded-sm bg-Blue-700 text-white font-SemiBold text-[0.375rem] mt-6 lg:mt-20 lg:w-44 lg:rounded-lg lg:text-base lg:h-10">
          خرید اشتراک
        </button>
      </Div>

      <Div className="mx-8 pt-2 px-4 pb-3 mt-14 lg:mt-0 shadow-pricing rounded-[0.25rem] lg:rounded-3xl bg-white flex flex-col lg:w-[28%] lg:mr-10 lg:ml-16 lg:pt-16 lg:px-9">
        <Text className="font-Regular text-Ten text-Blue-700 text-center lg:text-[1.75rem]">
          شرکت‌ها
        </Text>
        <Text className="font-Bold text-Ten mt-1 text-Blue-700 text-center lg:text-xl lg:mt-7">
          ماهانه ۵۰ تومان
        </Text>
        <Div className="flex justify-between mt-4 lg:mt-28 lg:flex-col">
          <Div className="flex flex-col">
            <Text className="text-Eight lg:text-base flex-wrap lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان به اشتراک‌گذاری APIها بین{" "}
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                بی‌نهایت
              </span>{" "}
              نفر
            </Text>
            <Text className="text-Eight lg:text-base lg:right-4 flex-wrap lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                بی‌نهایت
              </span>{" "}
              API
            </Text>
            <Text className="text-Eight lg:text-base flex-wrap lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              امکان ساختن
              <span className="text-Blue-700 font-ExtraBold px-[0.25rem]">
                بی‌نهایت
              </span>{" "}
              Endpoint برای هر API
            </Text>
          </Div>
          <Div className="flex flex-col lg:mt-3">
            <Text className="text-Eight lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              تست آسان ای پی آی ها
            </Text>
            <Text className="text-Eight lg:text-base lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              تعیین میزان دسترسی به اعضای تیم
            </Text>
            <Text className="text-Eight lg:text-base flex-wrap lg:right-4 lg:before:w-[0.75rem] lg:before:h-[0.75rem] lg:before:-right-4 flex mt-3 relative right-2 items-center font-Regular text-[#707070] before:w-[5px] before:h-[5px] before:bg-Blue-700 before:flex before:rounded-full before:absolute before:-right-2">
              گزارش آخرین تعییرات روی هر API
            </Text>
          </Div>
        </Div>
        <button className="mr-auto ml-auto w-20 h-4 rounded-sm bg-Blue-700 text-white font-SemiBold text-[0.375rem] mt-6 lg:mt-20 lg:w-44 lg:rounded-lg lg:text-base lg:h-10">
          خرید اشتراک
        </button>
      </Div>
    </Div>
  );
};

const PlansMobile = () => {
  return (
    <Div className="relative pb-16 bg-plans bg-no-repeat bg-cover bg-center z-10 after:absolute after:top-0 after:left-0 after:bg-white after:opacity-[89%] after:w-full after:h-full" id='services'>
      <Div className="relative z-20">
        <Tabs className="flex flex-col">
          <Div className="flex justify-between px-5">
            <Tab index={1} activeStyles="border-b-4 border-b-Blue-700">
              <Text className="text-xs text-Blue-700 font-Medium p-3">
                پلن رایگان
              </Text>
            </Tab>
            <Tab index={2} activeStyles="border-b-4 border-b-Blue-700">
              <Text className="text-xs text-Blue-700 font-Medium p-3">
                پلن تیم‌ها
              </Text>
            </Tab>
            <Tab index={3} activeStyles="border-b-4 border-b-Blue-700">
              <Text className="text-xs text-Blue-700 font-Medium p-3">
                پلن شرکت‌ها
              </Text>
            </Tab>
          </Div>
          <Div className="h-[4px] mx-5 bg-Blue-300 shadow-Primary relative bottom-1 -z-10"></Div>
          <Div className="pr-[2.625rem] pl-[0.875rem] mt-[1.375rem]">
            <TabContent index={1}>
              <Div className="text-[#292929] text-Ten flex justify-between">
                <Div className="flex-col">
                  <Text>تیم‌سازی برای هر API</Text>
                  <Text className="mt-6 whitespace-nowrap">
                    تعیین میزان دسترسی به هریک از اعضای تیم
                  </Text>
                  <Text className="mt-6">ساختن API</Text>
                  <Text className="mt-6">ساختن Endpoint</Text>
                  <Text className="mt-6">گزارش آخرین تغییرات روی هر API</Text>
                </Div>
                <Div className="flex-col text-center text-Ten">
                  <Text>
                    <span className="font-ExtraBold text-Blue-700">۳</span> نفر
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                  <Text className="mt-6">
                    <span className="font-ExtraBold text-Blue-700">2</span> API
                  </Text>
                  <Text className="mt-6 whitespace-nowrap">
                    <span className="font-ExtraBold text-Blue-700">30</span> API
                    برای هر Endpoint
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                </Div>
              </Div>
            </TabContent>
            <TabContent index={2}>
              <Div className="text-[#292929] text-Ten flex justify-between">
                <Div className="flex-col">
                  <Text>تیم‌سازی برای هر API</Text>
                  <Text className="mt-6 whitespace-nowrap">
                    تعیین میزان دسترسی به هریک از اعضای تیم
                  </Text>
                  <Text className="mt-6">ساختن API</Text>
                  <Text className="mt-6">ساختن Endpoint</Text>
                  <Text className="mt-6">گزارش آخرین تغییرات روی هر API</Text>
                </Div>
                <Div className="flex-col text-center text-Ten">
                  <Text>
                    <span className="font-ExtraBold text-Blue-700">
                      بی‌نهایت
                    </span>{" "}
                    نفر
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                  <Text className="mt-6">
                    <span className="font-ExtraBold text-Blue-700">۱۰</span> API
                  </Text>
                  <Text className="mt-6 whitespace-nowrap">
                    <span className="font-ExtraBold text-Blue-700">
                      بی‌نهایت
                    </span>{" "}
                    API برای هر Endpoint
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                </Div>
              </Div>
            </TabContent>
            <TabContent index={3}>
              <Div className="text-[#292929] text-Ten flex justify-between">
                <Div className="flex-col">
                  <Text>تیم‌سازی برای هر API</Text>
                  <Text className="mt-6 whitespace-nowrap">
                    تعیین میزان دسترسی به هریک از اعضای تیم
                  </Text>
                  <Text className="mt-6">ساختن API</Text>
                  <Text className="mt-6">ساختن Endpoint</Text>
                  <Text className="mt-6">گزارش آخرین تغییرات روی هر API</Text>
                </Div>
                <Div className="flex-col text-center text-Ten">
                  <Text>
                    <span className="font-ExtraBold text-Blue-700">
                      بی‌نهایت
                    </span>{" "}
                    نفر
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                  <Text className="mt-6">
                    <span className="font-ExtraBold text-Blue-700">
                      بی‌نهایت
                    </span>{" "}
                    API
                  </Text>
                  <Text className="mt-6 whitespace-nowrap">
                    <span className="font-ExtraBold text-Blue-700">
                      بی‌نهایت
                    </span>{" "}
                    API برای هر Endpoint
                  </Text>
                  <Div className="w-4 h-4 relative mr-auto ml-auto mt-6">
                    <Image
                      src="/icons/checkmark-landing.svg"
                      alt="checkmark icon"
                      layout="responsive"
                      width={16}
                      height={16}
                    />
                  </Div>
                </Div>
              </Div>
            </TabContent>
          </Div>
        </Tabs>
      </Div>
    </Div>
  );
};

const PlansDesktop = () => {
  return (
    <Div className="relative py-32 px-16 bg-plans bg-no-repeat bg-cover bg-center z-10 after:absolute after:top-0 after:left-0 after:bg-white after:opacity-[89%] after:w-full after:h-full" id='services'>
      <Div className="relative z-20 text-center font-Regular select-none leading-normal">
        <Div className="grid grid-cols-4 border-b-4 border-Blue-700 whitespace-nowrap">
          <Div className="py-8 px-[74px] border-l-4 border-Blue-700 font-Bold text-[1.75rem] text-Blue-700">
            سرویس‌ها
          </Div>
          <Div className="py-8 px-[74px] font-Bold text-[1.75rem] text-Blue-700">
            پلن رایگان
          </Div>
          <Div className="py-8 px-[74px] font-Bold text-[1.75rem] text-Blue-700">
            پلن تیم‌ها
          </Div>
          <Div className="py-8 px-[74px] font-Bold text-[1.75rem] text-Blue-700">
            پلن شرکت‌ها
          </Div>
        </Div>
        <Div className="grid grid-cols-4 text-2xl text-[#292929]">
          <Div className="px-9 border-l-4 border-Blue-700 pt-16 pb-8">
            تیم‌سازی برای هر API
          </Div>
          <Div className="pt-16 pb-8 px-[74px]">
            <span className="text-Blue-700 font-ExtraBold pl-1">3</span>
            نفر
          </Div>
          <Div className="pt-16 pb-8 px-[74px]">نامحدود</Div>
          <Div className="pt-16 pb-8 px-[74px]">نامحدود</Div>
        </Div>
        <Div className="grid grid-cols-4 text-2xl text-[#292929]">
          <Div className="py-8 px-9 border-l-4 border-Blue-700">
            تعیین میزان دسترسی به هریک از اعضای تیم
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
        </Div>
        <Div className="grid grid-cols-4 text-2xl text-[#292929]">
          <Div className="py-8 px-9 border-l-4 border-Blue-700">ساختن API</Div>
          <Div className="py-8 px-[74px]">
            API
            <span className="text-Blue-700 font-ExtraBold pl-1">2</span>
          </Div>
          <Div className="py-8 px-[74px]">
            API
            <span className="text-Blue-700 font-ExtraBold pl-1">10</span>
          </Div>
          <Div className="py-8 px-[74px]">نامحدود</Div>
        </Div>
        <Div className="grid grid-cols-4 text-2xl text-[#292929]">
          <Div className="py-8 px-9 border-l-4 border-Blue-700">
            ساختن Endpoint
          </Div>
          <Div className="py-8 px-[74px] flex whitespace-nowrap text-center mr-auto ml-auto">
            <span className="text-Blue-700 font-ExtraBold pl-1">30</span>
            <Text style={{ marginLeft: "0.25rem" }}>Endpoint</Text>
            <Text style={{ marginLeft: "0.25rem" }}>برای هر</Text>
            <Text>API</Text>
          </Div>
          <Div className="py-8 px-[74px]">نامحدود</Div>
          <Div className="py-8 px-[74px]">نامحدود</Div>
        </Div>
        <Div className="grid grid-cols-4 text-2xl text-[#292929]">
          <Div className="py-8 px-9 border-l-4 border-Blue-700">
            گزارش آخرین تغییرات روی هر API
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
          <Div className="mr-auto ml-auto py-8 w-9 h-9">
            <Image
              src="/icons/checkmark-landing.svg"
              alt="checkmart icon"
              layout="responsive"
              width={36}
              height={36}
            />
          </Div>
        </Div>
      </Div>
      <Div className="mt-20 text-center relative z-20 w-full">
        <Button className="w-[10.75rem] h-10 rounded-lg text-base text-white bg-Blue-700 ml-10 font-SemiBold">
          شروع رایگان
        </Button>
        <Button className="w-[10.75rem] h-10 rounded-lg text-base text-Blue-700 border-2 font-SemiBold border-Blue-700 bg-white">
          دریافت دمو
        </Button>
      </Div>
    </Div>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <Div className="bg-[#f0f1f4] pt-16 pb-14 lg:pt-[10rem]" id='faq'>
      <Text className="font-Bold mx-auto w-[6.125rem] z-10 text-Blue-700 text-center text-base relative lg:text-4xl lg:w-[14.375rem] lg:after:h-8 lg:after:top-4 after:bg-center after:absolute after:top-2 after:right-0 after:bg-[#00c485] after:w-full after:h-4 after:-z-10">
        سوالات متداول
      </Text>

      <Div
        className="pr-5 mt-8 flex items-center lg:mt-[10rem] lg:pr-14"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Text className="text-xs text-Blue-700 font-Bold lg:text-[1.65rem]">
          ۱. تفاوت وبینار با دوره چیست؟
        </Text>
        <Div className={`relative w-6 mr-1 lg:mr-6 lg:w-[2.25rem]`}>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron icon"
            layout="responsive"
            className={`transition duration-300 ${
              open && "transform rotate-180 transition duration-300"
            }`}
            width={24}
            height={24}
          />
        </Div>
      </Div>
      <Collapse
        className={`mt-3 text-Blue-700 text-Ten leading-loose pr-5 pl-8 lg:mt-7 lg:pr-14 lg:leading-[2.14] lg:text-sm lg:pl-[28%] ${
          open && "mb-10 lg:mb-12"
        }`}
        open={open}
      >
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب
        و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست،
        حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک
        استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با
        تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش
        روی هرکدام از آن ها را به شما نشان دهیم.
      </Collapse>

      <Div
        className="pr-5 flex items-center lg:mt-[3rem] lg:pr-14"
        onClick={() => {
          setOpen2(!open2);
        }}
      >
        <Text className="text-xs text-Blue-700 font-Bold lg:text-[1.65rem]">
          ۲. چگونه می‌توان به فیلم‌های دوره‌ها دسترسی داشت؟
        </Text>
        <Div className={`relative w-6 mr-1 lg:mr-6 lg:w-[2.25rem]`}>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron icon"
            layout="responsive"
            className={`transition duration-300 ${
              open2 && "transform rotate-180 transition duration-300"
            }`}
            width={24}
            height={24}
          />
        </Div>
      </Div>
      <Collapse
        className={`mt-3 text-Blue-700 text-Ten leading-loose pr-5 pl-8 lg:mt-7 lg:pr-14 lg:leading-[2.14] lg:text-sm lg:pl-[28%] ${
          open2 && "mb-10 lg:mb-12"
        }`}
        open={open2}
      >
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب
        و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست،
        حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک
        استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با
        تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش
        روی هرکدام از آن ها را به شما نشان دهیم.
      </Collapse>

      <Div
        className="pr-5 flex items-center lg:mt-[3rem] lg:pr-14"
        onClick={() => {
          setOpen3(!open3);
        }}
      >
        <Text className="text-xs text-Blue-700 font-Bold lg:text-[1.65rem]">
          ۳. آیا هزینه دوره را به صورت قسطی هم می‌توان پرداخت کرد؟{" "}
        </Text>
        <Div className={`relative w-6 mr-1 lg:mr-6 lg:w-[2.25rem]`}>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron icon"
            layout="responsive"
            className={`transition duration-300 ${
              open3 && "transform rotate-180 transition duration-300"
            }`}
            width={24}
            height={24}
          />
        </Div>
      </Div>
      <Collapse
        className={`mt-3 text-Blue-700 text-Ten leading-loose pr-5 pl-8 lg:mt-7 lg:pr-14 lg:leading-[2.14] lg:text-sm lg:pl-[28%] ${
          open3 && "mb-10 lg:mb-12"
        }`}
        open={open3}
      >
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب
        و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست،
        حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک
        استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با
        تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش
        روی هرکدام از آن ها را به شما نشان دهیم.
      </Collapse>

      <Div
        className="pr-5 flex items-center lg:mt-[3rem] lg:pr-14"
        onClick={() => {
          setOpen4(!open4);
        }}
      >
        <Text className="text-xs text-Blue-700 font-Bold lg:text-[1.65rem]">
          ۴. آیا وبینارهایی که برگزار شده‌اند را می‌توان رزرو کرد؟{" "}
        </Text>
        <Div className={`relative w-6 mr-1 lg:mr-6 lg:w-[2.25rem]`}>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron icon"
            layout="responsive"
            className={`transition duration-300 ${
              open4 && "transform rotate-180 transition duration-300"
            }`}
            width={24}
            height={24}
          />
        </Div>
      </Div>
      <Collapse
        className={`mt-3 text-Blue-700 text-Ten leading-loose pr-5 pl-8 lg:mt-7 lg:pr-14 lg:leading-[2.14] lg:text-sm lg:pl-[28%] ${
          open4 && "mb-10 lg:mb-12"
        }`}
        open={open4}
      >
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب
        و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست،
        حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک
        استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با
        تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش
        روی هرکدام از آن ها را به شما نشان دهیم.
      </Collapse>

      <Div
        className="pr-5 flex items-center lg:mt-[3rem] lg:pr-14"
        onClick={() => {
          setOpen5(!open5);
        }}
      >
        <Text className="text-xs text-Blue-700 font-Bold lg:text-[1.65rem]">
          ۵. تفاوت وبینار با دوره چیست؟
        </Text>
        <Div className={`relative w-6 mr-1 lg:mr-6 lg:w-[2.25rem]`}>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron icon"
            layout="responsive"
            className={`transition duration-300 ${
              open5 && "transform rotate-180 transition duration-300"
            }`}
            width={24}
            height={24}
          />
        </Div>
      </Div>
      <Collapse
        className={`mt-3 text-Blue-700 text-Ten leading-loose pr-5 pl-8 lg:mt-7 lg:pr-14 lg:leading-[2.14] lg:text-sm lg:pl-[28%] ${
          open5 && "mb-10 lg:mb-12"
        }`}
        open={open5}
      >
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب
        و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست،
        حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک
        استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با
        تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش
        روی هرکدام از آن ها را به شما نشان دهیم.
      </Collapse>
    </Div>
  );
};

export default Home;
