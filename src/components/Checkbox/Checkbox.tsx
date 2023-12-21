import React from 'react';

export const Checkbox = () => {
  return (
    <>
      <div className="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-neutral-900 bg-gray-900 border-neutral-100 rounded focus:ring-neutral-500 focus:ring-2"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-neutral-500"
        >
          Manter conectado
        </label>
      </div>
    </>
  );
};