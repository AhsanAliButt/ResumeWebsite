import React from "react";

const Details = ({}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize">
          {" "}
          {position}&nbsp;<a href={companyLink}>@{company}</a>
        </h3>
        <span>
          {time} || {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Experience;
