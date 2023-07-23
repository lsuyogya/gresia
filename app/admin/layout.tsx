"use client";
import React from "react";
import Link from "next/link";
import styles from "@/app/_styles/authForm.module.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div>
      <div className="grid grid-cols-6 ">
        <div
          className={`col-span-1 col-start-1 h-screen bg-[#1d1f20] p-6 text-white`}>
          <ul className="grid p4 gap-6 text-lg ">
            <Link
              style={
                pathName.includes("admin/payment")
                  ? { backgroundColor: "#2f3234" }
                  : { backgroundColor: "inherit" }
              }
              href={"/admin/payment"}
              className="hover:bg-[#2f3234] px-4 py-2 rounded-lg">
              Payment
            </Link>
            <Link
              style={
                pathName.includes("admin/contact")
                  ? { backgroundColor: "#2f3234" }
                  : { backgroundColor: "inherit" }
              }
              href={"/admin/contact"}
              className="hover:bg-[#2f3234] px-4 py-2 rounded-lg">
              Contact
            </Link>
            <Link
              style={
                pathName.includes("admin/login")
                  ? { backgroundColor: "#2f3234" }
                  : { backgroundColor: "inherit" }
              }
              href={"/admin/login"}
              className="hover:bg-[#2f3234] px-4 py-2 rounded-lg">
              Login
            </Link>
          </ul>
        </div>
        <div className="col-span-5 col-start-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
