import React, { useState } from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import Styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import {
  GitHubIcon,
  LinkdinIcon,
  TwitterIcon,
  DribbbleIcon,
  SunIcon,
  PinterestIcon,
  MoonIcon,
  CircularText,
  LinkArrow,
} from "../icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const CustomLink = ({ className = "", href, title, m }) => {
  const Router = useRouter();
  return (
    <Link
      href={href}
      // className={`${
      //   Router.asPath === href ? Styles.afterlink1 : Styles.afterlink
      // } mx-4  `}
      className={`${className} relative group mx-4`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-1000 ease-in-out dark:bg-light ${
          Router.asPath === href ? "w-full" : "w-0"
        } `}
      ></span>
    </Link>
  );
};
const CustomMobileLink = ({ toggle, className = "", href, title, m }) => {
  const Router = useRouter();
  const handleClick = () => {
    toggle();
    Router.push(href);
  };
  return (
    <button
      href={href}
      // className={`${
      //   Router.asPath === href ? Styles.afterlink1 : Styles.afterlink
      // } mx-4  `}
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2 `}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-1000 ease-in-out dark:bg-dark ${
          Router.asPath === href ? "w-full" : "w-0"
        } `}
      ></span>
    </button>
  );
};

const LinksData = [
  {
    item: 1,
    component: GitHubIcon,
    href: "https://github.com/AhsanAliButt",
    className: "w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1",
  },
  {
    item: 2,
    component: LinkdinIcon,
    href: "https://www.linkedin.com/in/ahsan-butt-056772263/",
  },
  { item: 3, component: TwitterIcon, href: "https://twitter.com/" },
  { item: 4, component: DribbbleIcon },
  { item: 5, component: PinterestIcon },
  // { item: 6, component: SunIcon },
  // { item: 7, component: MoonIcon },
  // { item: 8, component: CircularText },
  // { item: 9, component: LinkArrow },
];

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex fixed md:left-0 md:ml-10 "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between z-30 items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {LinksData.map((item) => {
            const Component = item.component;
            return (
              <>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={item.href}
                  target={"_blank"}
                  className="w-6 mr-3"
                  whileTap={{ scale: 0.9 }}
                >
                  <Component key={item.id} />
                </motion.a>
              </>
            );
          })}
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
            className={` flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : " bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex-col z-30 justify-between fixed hidden lg:flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg backdrop-blur-md py-32 bg-dark/90 dark:bg-light"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {LinksData.map((item) => {
              const Component = item.component;
              return (
                <>
                  {item.component === "GitHubIcon" ? (
                    ""
                  ) : (
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={item.href}
                      target={"_blank"}
                      className={
                        item.className ? item.className : "w-6 mr-3 sm:mx-1"
                      }
                      whileTap={{ scale: 0.9 }}
                    >
                      <Component key={item.id} />
                    </motion.a>
                  )}
                </>
              );
            })}
            <button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              className={` flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : " bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[50%] sm:hidden">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
