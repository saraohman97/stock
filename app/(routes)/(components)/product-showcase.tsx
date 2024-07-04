import Image from "next/image";

const FirstProductShowcase = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="font-bold text-xl my-6 text-center uppercase">Nyheter</h1>

      <div className="flex gap-6 justify-between pb-6">
        {/* PRODUCT */}
        <div className="flex flex-col min-w-[250px]">
          <Image
            src="/product1.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover min-h-[350px] min-w-[250px]"
          />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm mt-2">Lovisa, Jacka</h3>
              <div className="text-sm font-serif">499 kr</div>
            </div>
            <div className="border-4 bg-black rounded-full h-8 w-8" />
          </div>
        </div>

        {/* PRODUCT */}
        <div className="flex flex-col min-w-[250px]">
          <Image
            src="/product2.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover min-h-[350px] min-w-[250px]"
          />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm mt-2">Lovisa, Jacka</h3>
              <div className="text-sm font-serif">499 kr</div>
            </div>
            <div className="border-4 bg-white rounded-full h-8 w-8" />
          </div>
        </div>

        {/* PRODUCT */}
        <div className="flex flex-col min-w-[250px]">
          <Image
            src="/product2.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover min-h-[350px] min-w-[250px]"
          />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm mt-2">Lovisa, Jacka</h3>
              <div className="text-sm font-serif">499 kr</div>
            </div>

            <div className="border-4 bg-white rounded-full h-8 w-8" />
          </div>
        </div>

        {/* PRODUCT */}
        <div className="flex flex-col min-w-[250px]">
          <Image
            src="/product2.jpg"
            alt=""
            width={2000}
            height={2000}
            className="object-cover min-h-[350px] min-w-[250px]"
          />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm mt-2">Lovisa, Jacka</h3>
              <div className="text-sm font-serif">499 kr</div>
            </div>

            <div className="border-4 bg-white rounded-full h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-black hover:bg-opacity-90 py-2 px-4 text-white rounded font-bold">
          Se nyheter
        </button>
      </div>
    </div>
  );
};

export default FirstProductShowcase;
