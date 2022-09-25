import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const [open,setOpen]=useState(false);
  const activeLink = (url, pathname) =>
    pathname === url
      ? "text-black rounded font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-2 pr-4 pl-3 lg:text-lg md:text-base "
      : "lg:text-lg md:text-base block   py-2 pr-4 pl-3 text-white hover:bg-slate-600  pr-4 pl-3  rounded md:bg-transparent  md:p-1 dark:text-white";

  return (
    <nav class=" bg-white border-gray-200 px-2 lg:px-6  dark:bg-gray-900 w-full ">
      <div class=" p-3 flex flex-wrap justify-between items-center mx-auto  ">
        <a href="/" class="flex items-center">
          <Image
            src="/Navimg.svg"
            class="mr-3 h-6 sm:h-9"
            alt="news logo"
            width={60}
            height={60}
          />
          <span class=" self-center text-xl font-semibold whitespace-nowrap dark:text-white block py-2 pr-4 pl-3 text-white hover:bg-slate-600 hover:py-2 hover:ease-in rounded md:bg-transparent">
            Prime News
          </span>
        </a>

        <button 
        onClick={()=>setOpen(!open)}
          data-collapse-toggle="navbar-default"
          type="button"
          class=" lg:hidden  inline-flex justify-center items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>

          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div class={`${open ? "hidden" : "block"  } w-full text-center lg:flex lg:items-center lg:w-auto`}  id="navbar-default">
          <ul class="flex flex-col  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li className={activeLink("/TopHeadlines", router.pathname)}>
              <Link href="/TopHeadlines">Top Headlines</Link>
            </li>

            <li className={activeLink("/Entertainment", router.pathname)}>
              <Link href="/Entertainment">Entertainment</Link>
            </li>
            <li className={activeLink("/Health", router.pathname)}>
              <Link href="/Health">Health</Link>
            </li>
            <li className={activeLink("/Science", router.pathname)}>
              <Link href="/Science">Science</Link>
            </li>
            <li className={activeLink("/Technology", router.pathname)}>
              <Link href="/Technology">Technology</Link>
            </li>

            <li className={activeLink("/Sports", router.pathname)}>
              <Link href="/Sports">Sports</Link>
            </li>

            <li className={activeLink("/Business", router.pathname)}>
              <Link href="/Business">Business</Link>
            </li>

            <li className={activeLink("/ContactUs", router.pathname)}>
              <Link href="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
