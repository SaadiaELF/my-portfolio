import { useState } from "react";
import { classNames } from "../utils/classNames";
import OneExperience from "./oneExperience";
import experiences from "../data/experiences.json";

export default function ExpContainer() {
  const [navigation, setNavigation] = useState([
    { name: "NOVEC", current: true },
    { name: "CODE YOUR FUTURE", current: false },
  ]);

  function handleActiveTab(name) {
    const newNavigation = navigation.map((item) => {
      if (item.name === name) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });
    setNavigation(newNavigation);
  }

  return (
    <div>
      <div className="mt-10 flex justify-start">
        {navigation &&
          navigation.map((item) => (
            <a
              key={item.name}
              className={classNames(
                item.current
                  ? "bg-primary_2 text-secondary_2"
                  : "text-secondary_1 hover:bg-primary_2 hover:text-secondary_2",
                "px-3 py-2 font-barlow text-2xl"
              )}
              aria-current={item.current ? "tab" : undefined}
              onClick={() => handleActiveTab(item.name)}
            >
              {item.name}
            </a>
          ))}
      </div>
      <div>
        {experiences.map((experience, i) => {
          return (
            <OneExperience current={navigation[i].current} data={experience} />
          );
        })}
      </div>
    </div>
  );
}
