import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiLoopLeftFill } from "react-icons/ri";

const TopNav = () => {
    return ( 
        <div className="bg-yellow-900 text-white max-md:hidden fixed top-0 right-0 left-0 z-40">
            <div className="flex justify-around max-w-screen-xl mx-auto p-1">
                <small className="flex items-center gap-2"><RiLoopLeftFill size={15} /> Öppet köp i 30 dagar</small>
                <small className="flex items-center gap-2"><FaRegCreditCard size={15} /> Betala med kort eller faktura</small>
                <small className="flex items-center gap-2"><MdOutlineLocalShipping size={15} /> Fri frakt över 300 kr</small>
            </div>
        </div>
     );
}
 
export default TopNav;