export default function Container(props) {
  return (
    <div className="relative isolate animate-fade px-6 pt-14 lg:px-8">
      {props.children}
    </div>
  );
}
