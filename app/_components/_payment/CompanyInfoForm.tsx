"use client";
import React from "react";

const CompanyInfoForm = ({
  children,
  submitHandler,
  updateHandler,
}: {
  children: React.ReactNode;
  submitHandler: React.FormEventHandler;
  updateHandler: React.FormEventHandler;
}) => {
  const formGroupClass = "grid md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <form className="grid" onSubmit={submitHandler}>
      <div className={formGroupClass}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={inputClass}
          required
          onChange={updateHandler}
        />
      </div>
      <div className={formGroupClass}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          className={inputClass}
          required
          onChange={updateHandler}
        />
      </div>
      <div className={formGroupClass}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={inputClass}
          required
          onChange={updateHandler}
        />
      </div>
      {children}
    </form>
  );
};

export default CompanyInfoForm;
