"use client";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      width="100"
      height="100"
    ></Image>
  );
};

export default Logo;
