import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function socialLink({ details }) {
  return (
    <a
      href={details.link}
      target="_blank"
      className="rounded-md px-5 py-1.5 text-sm text-secondary_2 shadow-sm hover:bg-primary_2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_2"
    >
      <FontAwesomeIcon icon={details.icon} style={{ color: "#00fff5" }} />
      <span className="ps-1.5 font-barlow text-lg">{details.text}</span>
    </a>
  );
}
