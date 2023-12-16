"use client"

import React from "react";

interface IButtonProp {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

export const Button = ({ disabled, children, onClick, fullWidth }: IButtonProp) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`mt-4 px-4 py-2.5 text-white rounded focus:outline outline-sky-600/20 outline-2 bg-sky-600 hover:bg-sky-700 disabled:text-gray-500 disabled:bg-gray-500/20 ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  )
}
