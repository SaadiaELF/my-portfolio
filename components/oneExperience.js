import { classNames } from "../utils/classNames";

export default function OneExperience({ data, current }) {
  return (
    <div className={classNames(current ? "" : "hidden", " bg-primary_2  p-4")}>
      <h2 className="font-barlow text-xl tracking-tight text-secondary_2 sm:text-2xl">
        {data.role}
      </h2>
      <h3 className="font-barlow text-lg tracking-tight text-secondary_1 sm:text-xl">
              <span className="pe-3">{data.date}</span>
              <span className="pe-3">|</span>
        <span>{data.location}</span>
      </h3>
      <ul
        className={`text-md select-none list-inside list-disc p-1 text-justify font-montserrat leading-8 text-teal-50 antialiased drop-shadow-md sm:text-lg`}
      >
        {data.duties.map((elt, i) => {
          return <li key={i}>{elt}</li>;
        })}
      </ul>
    </div>
  );
}
