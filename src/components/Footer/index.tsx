import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative mt-24 h-[119px] w-full overflow-hidden md:mt-16 md:h-[207px]">
      <Image
        src="/assets/spaceShip.svg"
        alt=""
        width={169}
        height={169}
        className="absolute left-[11%] top-0 z-10 w-24 md:left-[9.5%] md:w-[169px]"
      />
      <Image
        src="/assets/footer.svg"
        alt=""
        width={1371}
        height={150}
        className="absolute bottom-0 -ml-[7.5%] h-[85px] w-[115%] max-w-none md:-ml-[3.05%] md:h-[150px] md:w-[107%]"
      />
    </footer>
  );
};
