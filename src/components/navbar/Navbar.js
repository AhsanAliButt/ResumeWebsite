import React from "react";
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

const LinksData = [
  { item: 1, component: GitHubIcon, href: "https://twitter.com" },
  { item: 2, component: LinkdinIcon, href: "https://linkedin.com/" },
  { item: 3, component: TwitterIcon },
  { item: 4, component: DribbbleIcon },
  { item: 5, component: PinterestIcon },
  // { item: 6, component: SunIcon },
  // { item: 7, component: MoonIcon },
  // { item: 8, component: CircularText },
  // { item: 9, component: LinkArrow },
];

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
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
    </header>
  );
};

export default Navbar;
