export default function Container(props) {
  return (
    <div
      id={props.id}
      className={`bg-fixed relative isolate justify-center px-6 py-4 sm:py-24 lg:px-8 ${props.bg_class}`}
    >
      <div className="mx-auto my-4 max-w-5xl animate-fade bg-transparent p-2 sm:my-24">
        {props.children}
      </div>
    </div>
  );
}
