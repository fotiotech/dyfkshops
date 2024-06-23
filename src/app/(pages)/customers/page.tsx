"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Customers page{" "}
      <Link href="/">
        <p className=" px-4 font-semibold ">Go back to home</p>
      </Link>
      <div className=" grid border h-[100dvh]">
        <div className=" grid-cols-2 border"></div>
        <div className=" grid-rows-2 border"></div>
        <div className=" grid-rows-2 border"></div>
      </div>
    </div>
  );
};

export default page;
