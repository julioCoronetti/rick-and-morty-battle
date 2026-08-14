import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative mt-24 w-full md:mt-16">
      <Image
        src="/assets/spaceShip.svg"
        alt=""
        width={169}
        height={169}
        className="absolute left-[15%] top-0 w-24 -translate-y-1/3 md:left-[12%] md:w-44"
      />
      <div className="-ml-[5%] h-20 w-[110%] rounded-t-full bg-panel md:h-36" />
    </footer>
  );
};
