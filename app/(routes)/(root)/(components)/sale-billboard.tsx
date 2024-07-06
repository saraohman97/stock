import Image from "next/image";

const SecondShowcase = () => {
  return (
    <div className="max-w-screen-lg mx-auto bg-yellow-900/90 text-center h-[400px] flex items-center justify-center flex-col gap-2 relative overflow-hidden">
      <Image
        src="/bg-birds.jpg"
        alt="Hero girl happy"
        width={2000}
        height={2000}
        className="object-cover absolute -z-20 inset-0"
      />
      <h1 className="text-5xl font-bold text-white">SOMMARREA 2024</h1>
      <p className="text-xl font-bold text-white">
        Få upp till 60% rabatt på hela sortimentet
      </p>
    </div>
  );
};

export default SecondShowcase;
