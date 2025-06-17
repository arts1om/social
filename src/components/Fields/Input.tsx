import React from "react";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, label, placeholder, onChange }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-semibold antialiased text-stone-800"
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        type="text"
        placeholder={placeholder}
        className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
