import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-10">
        <Image
          src="/display1.jpg"
          alt="Hero girl happy"
          width={1000}
          height={1000}
          className="object-cover w-full h-[500px]"
        />
        <div className="flex items-center justify-center gap-1 flex-col text-center max-w-[400px] mx-auto mt-6">
          <h2 className="font-bold text-xl">Din klädesbutik online</h2>
          <p className="text-sm">
            En aktiv butik sedan 2024 som levererar finare material och
            modernare kläder till vardag och kontor.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-6 w-full">
        <Image
          src="/display7.jpg"
          alt="Hero girl happy"
          width={1000}
          height={1000}
          className="object-cover w-full h-[400px]"
        />
        <Image
          src="/display4.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover w-full h-[400px]"
        />
      </div>
    </>
  );
};

export default Hero;
