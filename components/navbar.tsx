"use client";

import Link from "next/link";
import { useState } from "react";
import { BiLogIn, BiShoppingBag } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  // const [navbar, setNavbar] = useState(false);
  // const changeNavbar = () => {
  //   window.scrollY >= 1 ? setNavbar(true) : setNavbar(false);
  // };
  // window.addEventListener("scroll", changeNavbar);

  return (
    <div
      className={`bg-white w-full fixed top-0 md:top-[28px] right-0 left-0 z-40`}
      // navbar && "shadow"
    >
      <div className="max-w-screen-xl mx-auto h-14 px-3 flex items-center justify-between">
        <Link href="/" className="uppercase text-2xl">
          Stock
        </Link>

        <div className="flex items-center">
          <div className="flex items-center gap-6 font-serif justify-center mr-20">
            <div>Nyheter</div>
            <div>Märkes</div>
            <div>Vardag</div>
            <div>Bröllop</div>
            <div>Kräftskiva</div>
            <div>Skor</div>
          </div>

          <div className="flex items-center px-3 border rounded-full h-8">
            <input
              type="text"
              placeholder="Sök"
              className="w-full rounded-s-full"
            />
            <BsSearch size={18} />
          </div>
          <div className="p-3 pr-0">
            <BiShoppingBag size={22} />
          </div>
          <Link href="/auth" className="p-3 pr-0">
            <BiLogIn size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
