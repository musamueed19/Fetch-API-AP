import Image from "next/image";

export default function CountryFlag() {
  return (
    <Image
      src="/images/flag.png"
      width={20}
      height={20}
      alt="flag img"
      className="text-black"
    />
  );
}
