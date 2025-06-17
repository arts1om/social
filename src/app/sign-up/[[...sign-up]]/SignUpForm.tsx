"use client";

import Input from "@/components/Fields/Input";
import Link from "next/link";
import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
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
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <Input
        onChange={handleChange}
        name={"firstName"}
        label={"First Name"}
        placeholder={"Enter first name"}
      />
      <Input
        onChange={handleChange}
        name={"lastName"}
        label={"Last Name"}
        placeholder={"Enter last name"}
      />
      <Input
        onChange={handleChange}
        name={"username"}
        label={"Username"}
        placeholder={"Enter username"}
      />
      <Input
        onChange={handleChange}
        name={"email"}
        label={"Email address"}
        placeholder={"Enter email"}
      />
      <Input
        onChange={handleChange}
        name={"password"}
        label={"Password"}
        placeholder={"Enter password"}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white mb-2 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Continue
      </button>
      <span className="flex flex-col items-center">
        Already have an account?
      </span>
      <div className="flex items-center mt-2">
        <Link
          href="/sign-in"
          className="w-full text-center text-blue-600 font-semibold cursor-pointer"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
