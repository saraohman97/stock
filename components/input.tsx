import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            appearance-none
            bg-neutral-800
            text-white
            focus:outline-none
            focus:ring-0
            peer
            "
        placeholder=" "
      />
      <label
        className="
            absolute
            text-md
            text-zinc-300
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
