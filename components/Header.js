import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        {/* middle   - Search Input Field */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            {/* for search icon */}
            <div className="absolute pl-3 flex inset-y-0 items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 w-full pl-10 block  sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <HomeIcon className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Header;
