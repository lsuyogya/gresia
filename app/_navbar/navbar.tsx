"use client";
import Link from "next/link";
import { useState } from "react";
import CompanyLogo from "@/public/CompanyLogo.png";
import Image from "next/image";

export default function Navbar() {
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={CompanyLogo.src}
            className="mr-3"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Gracia Business Group
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About
              </a>
            </li>
            <li style={{ position: "relative" }}>
              <Link
                href={"/services"}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onMouseOver={() => {
                  setServiceModal(true);
                }}>
                Services
              </Link>
              {serviceModal ? (
                <div
                  className="absolute bg-gray-700 p-4 w-max text-white"
                  style={{ transform: "translate(-150px, 29px)" }}
                  onMouseLeave={() => setServiceModal(false)}>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="">
                      <div className="w-full border-b-2 border-blue-500">
                        Other Solutions
                      </div>
                      <ul>
                        <li>
                          <Link href={"/services/1"}>Product 1</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>Product 2</li>
                      </ul>
                      <ul>
                        <li>Product 3</li>
                      </ul>
                    </div>
                    <div className="">
                      <div className="w-full border-b-2 border-blue-500">
                        ERP
                      </div>
                      <ul>
                        <li>Product 1</li>
                      </ul>
                      <ul>
                        <li>Product 2</li>
                      </ul>
                      <ul>
                        <li>Product 3</li>
                      </ul>
                    </div>
                    <div className="">
                      <div className="w-full border-b-2 border-blue-500">
                        Mobile Apps
                      </div>
                      <ul>
                        <li>Product 1</li>
                      </ul>
                      <ul>
                        <li>Product 2</li>
                      </ul>
                      <ul>
                        <li>Product 3</li>
                      </ul>
                    </div>
                    <div className="">
                      <div className="w-full border-b-2 border-blue-500">
                        Courses
                      </div>
                      <ul>
                        <li>Product 1</li>
                      </ul>
                      <ul>
                        <li>Product 2</li>
                      </ul>
                      <ul>
                        <li>Product 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
