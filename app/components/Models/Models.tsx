"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModelProps {
  isOpen?: boolean;
  onclose: () => void;
  onsubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Models: React.FC<ModelProps> = ({ actionLabel, onclose, onsubmit, secondaryLabel, body, disabled, footer, isOpen, secondaryAction, title }) => {
  const [showModel, setShowModel] = useState(isOpen);

  useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModel(false);
    setTimeout(() => {
      onclose();
    }, 3000);
  }, [disabled, onclose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onsubmit();
  }, [disabled, onsubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex-overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div className={`translate duration-300 h-full ${showModel ? "translate-y-0" : "translate-y-full"} ${showModel ? "opacity-100" : "opacity-0"}`}>
            <div className="traslate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button onClick={handleClose} className="p-1 border-0 hover:opacity-0 transition absolute left-9">
                  <IoMdClose />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryLabel ? <Button outline disabled={disabled} label={secondaryLabel} onClick={handleSecondaryAction} /> : null}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Models;
