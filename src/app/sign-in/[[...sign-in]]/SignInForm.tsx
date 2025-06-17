"use client";

import Input from "@/components/Fields/Input";
import React, { useState } from "react";

const SignInForm: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-3xl mx-auto mt-10 mb-10 bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {/* <div className="mb-4"> */}
      <Input
        label="Username"
        placeholder="Enter username"
        name="username"
        onChange={handleChange}
      />
      {/* </div> */}
      <Input
        label="Password"
        placeholder="Enter password"
        name="password"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white mb-2 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Continue
      </button>
    </form>
  );
};

export default SignInForm;
