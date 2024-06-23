import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className=" flex-col px-2 border-b py-1">
        <div className="w-full  h-10 flex justify-between items-center my-1 ">
          <div className=" flex justify-center items-center text-xl font-bold">
            <span></span>
            <Link href={"/"}>
              <h1>DyFkShop</h1>
            </Link>
          </div>
          <div className="invisible absolute">
            <ul className=" whitespace-nowrap font-bold ">
              <li className=" relative inline-block mx-4 overflow-hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-blue-800 after:hover:w-full after:transition-all  hover:after:h-1 after:w-1 ">
                <span className=" px-1 ">Home</span>
              </li>
              <li className=" relative inline-block mx-4 overflow-hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0  hover:after:bg-blue-800 after:hover:w-full after:transition-all  hover:after:h-1 after:w-1">
                <span className=" px-1 ">About</span>
              </li>
              <li className="relative inline-block mx-4 overflow-hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0  hover:after:bg-blue-800 after:hover:w-full after:transition-all  hover:after:h-1 after:w-1">
                <span className=" px-1 ">Services</span>
              </li>
              <li className="relative inline-block mx-4 overflow-hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0  hover:after:bg-blue-800 after:hover:w-full after:transition-all  hover:after:h-1 after:w-1">
                <span className=" px-1 ">Project</span>
              </li>
              <li className="relative inline-block mx-4 overflow-hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0  hover:after:bg-blue-800 after:hover:w-full after:transition-all  hover:after:h-1 after:w-1">
                <span className=" px-1 ">Contact</span>
              </li>
            </ul>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <Link href="/customers">
              <p className="  font-semibold ">Login</p>
            </Link>
            <div className="w-10 h-10 rounded-full bg-[#eee] pl-4 "></div>
            <div className="w-10 h-10 rounded-full bg-[#eee] pl-4 "></div>
          </div>
        </div>
        <div>
          <div>
            <form
              action=""
              className="flex justify-center items-center border my-1 rounded-xl overflow-hidden"
            >
              <input
                title="search"
                type="search"
                placeholder="I'm looking for..."
                className="w-full text-lg px-2 py-2"
              />
              <Link href={"/search"}>
                <button
                  title="search"
                  type="submit"
                  className="border text-lg px-2 py-2"
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
