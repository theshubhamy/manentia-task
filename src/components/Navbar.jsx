"use client";
import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { title: "Home", link: "/", current: true },
  { title: "About us", link: "#aboutus", current: false },
  { title: "Services", link: "#services", current: false },
  { title: "Blog", link: "#blog", current: false },
];
const Header = () => {
  return (
    <Disclosure as="nav" className="sticky z-10 p-2 bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center justify-between lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className=" flex text-3xl uppercase font-bold text-[#1090CB]">
                      LOGO
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <div key={item.title} className="relative">
                        {item.current ? (
                          <div className="absolute h-2 w-2 rounded-full bg-[#08D3BB] -top-1 -left-2 animate-pulse" />
                        ) : null}
                        <Link
                          href={item.link}
                          className={classNames(
                            item.current ? "text-[#1090CB]" : "text-gray-900  ",
                            "px-2 py-2 text-sm font-semibold cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                    <button className="bg-[#1090CB] text-white text-sm px-6 rounded-md py-2 active:scale-95">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" relative lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 shadow-lg rounded-md">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.path}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
