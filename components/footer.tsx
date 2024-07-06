import { BiPhone } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbClockHour10 } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-yellow-600/70 mt-10">
      <div className="pt-6 pb-10 p-4 max-w-screen-lg mx-auto text-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold">Kundservice</h3>
          <div className="flex items-center gap-2">
            <BiPhone />
            000 - 000 00 00
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineAlternateEmail />
            email@email.com
          </div>
          <div className="flex items-center gap-2">
            <TbClockHour10 />
            Måndag - Söndag: 8 - 19
            <span className="underline underline-offset-4">
              Avikande röda dagar
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 pt-10 border-t border-black">
          <div>
            <h3 className="font-bold">Leverans</h3>
            <div>
              Stadium Sverige AB levererar endast till leveransadresser inom
              Sveriges gränser. Nedan kan du läsa om alla fraktsätt vi erbjuder.
              Tillgängliga fraktsätt för din beställning genereras utifrån det
              postnummer du anger innan du går vidare i kassan.
            </div>
            <div className="underline underline-offset-4 mt-6">
              Läs mer {"-->"}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Retur och reklamation</h3>
            <div>
              Stadium Sverige AB levererar endast till leveransadresser inom
              Sveriges gränser. Nedan kan du läsa om alla fraktsätt vi erbjuder.
              Tillgängliga fraktsätt för din beställning genereras utifrån det
              postnummer du anger innan du går vidare i kassan.
            </div>
            <div className="underline underline-offset-4 mt-6">
              Läs mer {"-->"}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Medlem</h3>
            <div>
              Stadium Sverige AB levererar endast till leveransadresser inom
              Sveriges gränser. Nedan kan du läsa om alla fraktsätt vi erbjuder.{" "}
              <br />
              <br />
              Tillgängliga fraktsätt för din beställning genereras utifrån det
              postnummer du anger innan du går vidare i kassan.
            </div>
            <div className="underline underline-offset-4 mt-6">
              Läs mer {"-->"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
