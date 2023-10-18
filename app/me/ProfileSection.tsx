import Image from "next/image";

import { siteConfig } from "@/data/site";
import ProfileImage from "../assets/rangu-bgcolor.png";

export const Profile = () => {
  return (
    <div>
      <div className="grid place-items-center mt-8 mb-6">
        <span className="inline-block border-8 rounded-full border-prime">
          <Image
            src={ProfileImage}
            alt={`${siteConfig.shortname} profile`}
            priority
            className="inline-block rounded-full m-2 h-40 w-40 sm:h-52 sm:w-52"
          />
        </span>
      </div>
      <div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center my-6">Hello, I am {siteConfig.shortname}</h1>
        <p className="text-gray-800 dark:text-gray-300 sm:text-[1rem]">A <strong>Software Developer</strong> based in Bengaluru, specialized mostly in <strong>Javascript</strong> and <strong>React</strong>.
          I am an accomplished web developer with a strong background in building and maintaining client websites.
          My core technologies include <strong>HTML, CSS, Sass, JavaScript, React.js and Next JS</strong>, which I employ to create responsive and visually engaging web solutions.
          In addition to my primary skill set, I am well-versed in various languages, platforms, frameworks, and content management systems, including <strong>JavaScript, Gatsby, Node JS, Graph-QL, Mongo DB and Strapi. </strong>
          This adaptability enables me to tackle a wide spectrum of projects
        </p>
      </div>
    </div>
  );
};
