import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-center lg:justify-between">
      <Link
          href={"/"}
          className=""
        >
          <Image src="/logo.png" alt="" className="hidden lg:block w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]" width={70} height={60}/>
        </Link>
        <p className="text-slate-600 text-sm lg:text-base">Sonaly Akther | © 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
