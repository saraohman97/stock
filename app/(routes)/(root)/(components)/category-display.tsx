import Image from "next/image";

const CategoryDisplay = () => {
  return (
    <div className="flex justify-between items-center gap-6 my-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4">
        <Image
          src="/display4.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Nyheter</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image
          src="/display1.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Märkes</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image
          src="/display2.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Vardag</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image
          src="/display3.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Bröllop</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image
          src="/display4.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Kräftskiva</p>
      </div>

      <div className="flex flex-col gap-4">
        <Image
          src="/display5.jpg"
          alt="Hero girl happy"
          width={2000}
          height={2000}
          className="object-cover h-40 w-40 rounded-full"
        />
        <p className="text-center font-serif">Skor</p>
      </div>
    </div>
  );
};

export default CategoryDisplay;
