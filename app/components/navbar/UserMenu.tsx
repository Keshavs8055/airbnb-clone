"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRegisterModel } from "@/app/hooks/useRegisterModel";

const UserMenu = () => {
  const registerModel = useRegisterModel();

  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {open ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                label="Log in"
                onClick={() => {}}
              />
              <MenuItem
                label="Sign up"
                onClick={registerModel.onOpen}
              />
            </>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
