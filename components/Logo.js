import Image from "next/image";

export default function Logo({ src, alt }) {
  return (
    <Image
      className="col-span-2 max-h-20 w-full object-contain brightness-100 motion-safe:animate-pulse lg:col-span-1"
      src={src}
      alt={alt}
      title={alt}
    />
  );
}
