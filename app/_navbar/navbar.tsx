"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import CompanyLogo from "@/public/CompanyLogo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [serviceModal, setServiceModal] = useState<boolean>(false);
  const pathname = usePathname();

  console.log(pathname);
  const Services = [
    {
      name: "Other Solutions",
      children: [
        { name: "Other Solution 1", prod_id: "os1" },
        { name: "Other Solution 2", prod_id: "os2" },
        { name: "Other Solution 3", prod_id: "os3" },
      ],
    },
    {
      name: "ERP",
      children: [
        { name: "ERP 1", prod_id: "e1" },
        { name: "ERP 2", prod_id: "e2" },
        { name: "ERP 3", prod_id: "e3" },
      ],
    },
    {
      name: "Mobile Apps",
      children: [
        { name: "Mobile App 1", prod_id: "ma1" },
        { name: "Mobile App 2", prod_id: "ma2" },
        { name: "Mobile App 3", prod_id: "ma3" },
      ],
    },
    {
      name: "Courses",
      children: [
        { name: "Course 1", prod_id: "c1" },
        { name: "Course 2", prod_id: "c2" },
        { name: "Course 3", prod_id: "c3" },
      ],
    },
  ];
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className={`flex items-center`}>
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
          aria-expanded="false"
          onClick={() => {
            document
              .getElementById("navbar-default")
              ?.classList.toggle("hidden");
          }}>
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
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
                style={
                  pathname === "/"
                    ? { color: "rgb(59 130 246" }
                    : { color: "#fff" }
                }>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#About"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={
                  pathname.includes("about")
                    ? { color: "rgb(59 130 246" }
                    : { color: "#fff" }
                }>
                About
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              <span
                // href={"/services"}
                className=" hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={
                  pathname.includes("services")
                    ? { color: "rgb(59 130 246" }
                    : { color: "#fff" }
                }
                onClick={() => {
                  setServiceModal(!serviceModal);
                }}>
                Services
              </span>
              {serviceModal ? (
                <div
                  className=" absolute bg-gray-700 p-4 w-max text-white z-10 md:-translate-x-250px md:translate-y-29px"
                  // style={{ transform: "translate(-250px, 29px)" }}
                  onMouseLeave={() => setServiceModal(false)}>
                  <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
                    {Services.map((service) => (
                      <div className="" key={service.name}>
                        <div className="w-full border-b-2 border-blue-500">
                          {service.name}
                        </div>
                        <ul>
                          {service.children.map((subService) => (
                            <li key={subService.prod_id}>
                              <Link href={`/services/${subService.prod_id}`}>
                                {subService.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
            <li>
              <Link
                href="/contact"
                style={
                  pathname.includes("contact")
                    ? { color: "rgb(59 130 246" }
                    : { color: "#fff" }
                }
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
