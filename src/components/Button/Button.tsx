"use client"

import Link from "next/link";
import React from "react";

interface IButtonProp {
  disabled?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  url: string;
}

export const Button = ({ disabled, children, fullWidth, url }: IButtonProp) => {
  return (
    <Link href={url}>
      <button
        type="button"
        disabled={disabled}
        className={`my-4 px-4 py-2.5 text-white rounded focus:outline outline-neutral-600/20 outline-2 bg-neutral-900 hover:bg-neutral-800 disabled:text-gray-500 disabled:bg-gray-500/20 ${fullWidth ? 'w-full' : ''}`}
      >
        {children}
      </button>
    </Link>
  )
}
