import React from "react";
import AnimatedText from "@/components/animatedText/AnimatedText";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project1 from "../../public/images/adminDashBoard.png";
import Project2 from "../../public/images/amazonProject.png";
import Project3 from "../../public/images/BisResume.png";
import Project4 from "../../public/images/expenseTracker.png";
import { GitHubIcon } from "@/components/icons/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { ProjectsData } from "@/components/data";
const FramerImage = motion(Image);
const Projects = () => {
  return (
    <>
      <Head>
        <title> Ahsan Ali | Projects Page </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My 2 years Journey in WebDevelopment"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />{" "}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            {/* {ProjectsData.map((project) => {
              return (
                <>
                  {project.type === "Featured" ? (
                    <div className="col-span-12">
                      <FeaturedProject
                        title={project.name}
                        summary={project.description}
                        link={project.deployLink}
                        img={project.imageUrl}
                        type={project.type}
                        github={project.githubLink}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })} */}
            <div className="col-span-12">
              <FeaturedProject
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                type="Featured Project"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Amazon Web clone as Backend special focused on backend sorting "
                img={Project2}
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernStack_AmazonClone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="BisResume App development"
                img={Project3}
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link={"https://bisresume.com/"}
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="https://ahsan-tracker.surge.sh/"
                type="Featured Project"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Expense Tracker"
                img={Project4}
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/react_expensetracker"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Admin Dashboard"
                summary="Created This Mern Stack Project with React Js,Redux Toolkit , Redux Querry Toolkit, Material Ui , Nivo Graphs in Front End and Node Js, Express Js and Mongodb as Backend specially focused on backend sorting "
                link="/"
                github="https://github.com/AhsanAliButt/MernAdminDashBoard"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid relative border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-2">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-be-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]  " />{" "}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img || Project1}
          alt="AhsanNegative"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          // fill
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <h4 className="my-2 w-full text-left text-xl font-bold dark:text-primaryDark sm:text-sm">
          Technologies use in this project
        </h4>
        <div
          className="flex max-w-1/2"
          style={{ maxWidth: "100%", overflowX: "scroll" }}
        >
          <Technologies skill={"HTML"} />
          <Technologies skill={"NextJs"} />
          <Technologies skill={"Charts"} />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
          <Technologies />
        </div>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center relative justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-light md:-right-2 md:h-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer inline-block overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img || Project1}
          alt="AhsanNegative"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className=" flex flex-col items-start justify-between mt-2">
        {/* <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span> */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-primaryDark lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="underline rounded-lg text-dark p-2 px-6 text-lg font-semibold dark:text-primaryDark md:text-base"
          >
            {" "}
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Technologies = ({ skill }) => {
  return (
    <div>
      <div className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
        {skill || "HTML"}
      </div>
    </div>
  );
};
