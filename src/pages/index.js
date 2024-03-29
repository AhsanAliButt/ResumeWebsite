
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import profilePic1 from "../../public/images/profile/My_Profile.png";
import AnimatedText from "@/components/animatedText/AnimatedText";
import Link from "next/link";
import { LinkArrow, ProfileTag, YellowBulb } from "@/components/icons/Icons";
import HireMe from "@/components/hireme/HireMe";
import Logo from "../../public/images/AhsanNegative.png";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import ColoringBulb from "@/components/ColoringBulb";
import TransitionEffect from "@/components/TransitionEffect";
export default function Home() {
  return (
    <>
      <Head>
        <title> Welcome To My Portfolio</title>
        <meta name="description" content="Ahsan Ali Butt " />
      </Head>
      <TransitionEffect />
      <main
        className={
          "flex items-center text-dark w-full min-h-screen sm:min-h-0 dark:text-light"
        }
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="AhsanNegative"
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/AhsanAliCV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  {" "}
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:ahsanbutt515@icloud.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  {" "}
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className={"absolute right-8 bottom-8 inline-block w-24"}>
          <HireMe />
        </div>
        <div
          className={"absolute right-8 bottom-8 inline-block w-24 md:hidden "}
        >
          <Image
            src={LightBulb}
            alt={"AhsanNegative"}
            className="w-full h-auto"
          />
          {/* <ColoringBulb color={"red"}  /> */}
          {/* <YellowBulb className="fill-white" /> */}
        </div>
      </main>
    </>
  );
}
