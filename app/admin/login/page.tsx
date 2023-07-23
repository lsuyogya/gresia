import React from "react";
import styles from "@/app/_styles/authForm.module.css";
const AdminLogin = () => {
  return (
    <div className="grid h-screen place-content-center">
      <form className={`grid place-self-center px-20 py-40 gap-6`}>
        <div className="inputGroup grid">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="formInput shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="inputGroup grid">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="formInput shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="w-max bg-red-500 place-self-center py-2 px-4 rounded text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
