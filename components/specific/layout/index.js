import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Div from "../container";
import Text from "../../base/text";
import Button from "../../base/button";
import CustomLink from "../../base/link";
import useWindowSize from "../../../hooks/useWindowSize";

export const HeaderUser = ({ userName, avatar }) => {
  return (
    <Div
      className={`flex justify-between items-center !h-[5.75rem] w-full bg-Cream pl-11 pr-8 border-b border-b-Blue-300`}
    >
      <Div className="relative w-[3.5rem] h-[3.5rem]">
        <Image
          src="/images/produc-logo.svg"
          alt="produc logo"
          layout="responsive"
          width={56}
          height={56}
          className=""
          priority
        />
      </Div>
      <Text className="font-EnRegular text-Blue-700 text-[1.75rem]">
        workspace
      </Text>
      <Div className="flex items-center">
        <Text className="font-EnRegular text-xl text-Blue-600">{userName}</Text>
        <Div className="relative w-12 h-12 p-[0.375rem] border border-Blue-400 rounded-[50%] ml-2">
          <Image
            src={`${avatar || "/images/user-avatar.svg"}`}
            alt="user avatar"
            layout="responsive"
            width={36}
            height={36}
            className=""
          />
        </Div>
      </Div>
    </Div>
  );
};

export const HeaderLanding = () => {
  const { lg } = useWindowSize();

  const [open, setOpen] = useState(false);
  const [navBack, setNavBack] = useState(false);

  const menuRef = useRef(null);
  const imageRef = useRef(null);
  const navRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavBack(true);
      } else {
        setNavBack(false);
      }
    });
  });

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !menuRef?.current?.contains(e?.target) &&
        !imageRef?.current?.contains(e?.target)
      ) {
        setOpen(false);
      }
    });
  });

  return (
    <>
      {lg ? (
        <Div
          className="absolute z-50 top-0 right-0 flex w-full justify-between items-center mt-3 lg:mt-6 px-[1.125rem] lg:px-[7.17%]"
          dir="rtl"
        >
          <Div className="flex items-center">
            <Button className="bg-[#13c666] rounded-[0.25rem] lg:px-14 lg:h-10 lg:ml-[5.43rem] text-Blue-700 text-xs font-Medium">
              ورود / ثبت‌نام
            </Button>
            <Div className="flex mr-[5.5rem]">
              <Text
                className="font-Bold text-base text-Blue-700 ml-8 cursor-pointer"
                onClick={() => {
                  window.scroll({
                    top: 3600,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                پلن‌های اشتراک
              </Text>
              <Text
                className="font-Bold text-base text-Blue-700 ml-8 cursor-pointer"
                onClick={() => {
                  window.scroll({
                    top: 4700,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                سرویس‌ها
              </Text>
              <Text
                className="font-Bold text-base text-Blue-700 cursor-pointer"
                onClick={() => {
                  window.scroll({
                    top: 5800,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                سوالات متداول
              </Text>
            </Div>
          </Div>
          <Div
            className="w-10 h-8 lg:w-24 lg:h-20 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              alt="prodoc logo"
              src="/images/produc-logo.svg"
              layout="responsive"
              width={40}
              height={33}
              priority
            />
          </Div>
        </Div>
      ) : (
        <>
          <Div
            containerRef={navRef}
            className={`flex z-20 w-full fixed pt-3 top-0 right-0 pr-7 pl-[1.125rem] transition-all duration-300 ${
              navBack &&
              "bg-[#f0f1f4] top-0 py-2 shadow-navigation mx-[1.125rem] rounded-[0.25rem] w-[90%]"
            }`}
          >
            <Div
              containerRef={imageRef}
              className="w-6 h-6 relative z-40"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Image
                alt="hamburger"
                src="/icons/hamburger.svg"
                layout="responsive"
                width={24}
                height={24}
              />
            </Div>
            <Div
              className="relative w-10 mr-auto"
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                alt="prodoc logo"
                src="/images/produc-logo.svg"
                layout="responsive"
                width={40}
                height={33}
              />
            </Div>

            <Div
              containerRef={menuRef}
              className={`fixed z-30 w-[10.25rem] top-0 -right-full transition-all duration-300 flex flex-col px-[1.75rem] pb-8 custom-backdrop-blur-nav text-sm text-Blue-700 font-SemiBold ${
                open ? "transition-all duration-300 !right-0" : ""
              } ${navBack && "mr-[1.125rem]"}`}
            >
              <Div className="mb-8 flex flex-col">
                <p
                  className="mt-20 mb-4"
                  onClick={() => {
                    setOpen(!open);
                    window.scroll({
                      top: 3000,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  پلن‌های اشتراک
                </p>
                <p
                  className="mb-4"
                  onClick={() => {
                    setOpen(!open);
                    window.scroll({
                      top: 3750,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  سرویس‌ها
                </p>
                <p
                  onClick={() => {
                    setOpen(!open);
                    window.scroll({
                      top: 4150,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  سوالات متداول
                </p>
              </Div>
              <Div className="bg-Blue-700 w-full h-[2px]"></Div>
              <Button
                className="mt-4 rounded-2xl bg-[#00c485] w-full h-8 text-xs font-Medium text-white"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                ورود/ثبت نام
              </Button>
            </Div>
          </Div>
        </>
      )}
    </>
  );
};

export const FooterLanding = () => {
  return (
    <Div className="bg-[#f0f1f4] lg:bg-[#1b2541]">
      <Div
        className={`flex justify-between items-center px-4 h-10 lg:px-[7.17%] w-[90%] mx-[1.125rem] lg:w-full lg:mx-0 lg:h-[6.25rem] bg-[#1b2541]`}
      >
        <Div className="flex">
          <Div className="flex items-center cursor-pointer">
            <Div className="relative w-4 h-4 ml-1 lg:w-10 lg:h-10 lg:ml-2">
              <Image
                alt="prodoc mail icon"
                src="/icons/email-icon.svg"
                layout="responsive"
                width={40}
                height={40}
              />
            </Div>
            <CustomLink href="mailto:prodoc@gmail.com">
              <Text className="lg:text-base text-Eight font-EnRegular text-white whitespace-nowrap">
                prodoc@gmail.com
              </Text>
            </CustomLink>
          </Div>
          <Div className="flex items-center lg:mr-24 mr-6 cursor-pointer">
            <Div className="relative w-4 h-4 ml-1 lg:w-10 lg:h-10 lg:ml-2">
              <Image
                alt="prodoc mail icon"
                src="/icons/phone-icon.svg"
                layout="responsive"
                width={40}
                height={40}
              />
            </Div>
            <CustomLink href="tel:+98903873829">
              <Text className="lg:text-base text-Eight font-Regular text-white whitespace-nowrap">
                ۰۹۰۳۸۷۳۸۲۹ | ۰۹۰۳۸۷۳۸۲۹
              </Text>
            </CustomLink>
          </Div>
        </Div>
        <Div className="relative w-[2rem] h-[1.625rem] lg:w-[4.75rem] lg:h-[3.875rem]">
          <Image
            alt="prodoc logo"
            src="/images/api-doc-footer-logo.svg"
            layout="responsive"
            width={32}
            height={26}
          />
        </Div>
      </Div>
    </Div>
  );
};
