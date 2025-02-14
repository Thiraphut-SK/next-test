import Link from "next/link";
import React from "react";

export default function defaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav className="mx-auto flex w-full gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 dark:bg-gray-800 text-white">
        <div className="relative flex items-center">
          <Link href="/" className="font-bold">LOGO</Link>
        </div>
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <li className="pt-1.5 font-dm text-sm font-medium ">
            <a href="#">Pricing</a>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium ">
            <a href="#">Blog</a>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium ">
            <a href="#">Docs</a>
          </li>
        </ul>
        <div className="flex-grow"></div>
        {/* <div className="hidden items-center justify-center gap-6 md:flex">
          <a href="#" className="font-dm text-sm font-medium text-slate-700">
            Sign in
          </a>
          <a
            href="#"
            className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Sign up for free
          </a>
        </div> */}
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {children}
    </main>
  );
}
