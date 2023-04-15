import Image from "next/image";
import feedbackTrackerImg from "../public/projects/cyf-tracker.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function OneProject() {
  return (
    <div className="mt-10 grid h-max min-w-full gap-x-3 gap-y-2 sm:h-80 sm:snap-center sm:grid-cols-2 sm:grid-rows-4 ">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-barlow text-2xl tracking-tight text-secondary_1 sm:text-3xl ">
          CYF_Feedback Tracker
        </h3>
        <div className="flex items-center">
          <a
            href="https://github.com/SaadiaELF/wm4-1-techieelites-feedbacktracker.git"
            target="_blank"
            className="h-fit px-2"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faGithub}
              size="lg"
              style={{ color: "#00ADB5" }}
            />
          </a>
          <a
            href="https://starter-kit-5gb3.onrender.com"
            target="_blank"
            className="h-fit px-2"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faUpRightFromSquare}
              size="lg"
              style={{ color: "#00ADB5" }}
            />
          </a>
        </div>
      </div>
      <div className="snap-always ">
        <Image
          className="w-contain max-w-60 h-max drop-shadow-md grayscale hover:filter-none sm:h-80"
          src={feedbackTrackerImg}
          alt="project"
        />
      </div>
      <div className="flex w-full snap-always flex-col justify-center bg-primary_1 p-4 sm:row-span-3  ">
        <p className="select-none bg-primary_1 text-justify font-montserrat text-base leading-6 text-teal-50 antialiased">
          The Feedback Tracker App is a powerful tool designed to help students
          and mentors alike to track progress and provide valuable feedback
          throughout a course. With this app, students can easily send feedback
          about their progress, while mentors can add their own feedback about
          how their students are doing.
        </p>
        <div className="mt-4">
          <span className="me-2 rounded-lg bg-primary_2 px-2 py-1 text-justify font-montserrat text-sm leading-6 text-secondary_1 antialiased">
            React
          </span>
          <span className="me-2 rounded-lg bg-primary_2  px-2 py-1 text-justify font-montserrat text-sm leading-6 text-secondary_1 antialiased">
            MaterialUI
          </span>
          <span className="me-2 rounded-lg bg-primary_2  px-2 py-1 text-justify font-montserrat text-sm leading-6 text-secondary_1 antialiased">
            Node
          </span>
          <span className="me-2 rounded-lg bg-primary_2  px-2 py-1 text-justify font-montserrat text-sm leading-6 text-secondary_1 antialiased">
            Express
          </span>
        </div>
      </div>
    </div>
  );
}
