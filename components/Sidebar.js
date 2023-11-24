import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Link from "next/link";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { sidebarRoutes } from "../utils/routes";
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div
        className={`h-screen z-50 fixed w-64 top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 lg:py-2 relative">
          <div className="flex items-center justify-between">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center inline-block"
            >
              <Typography variant="h6" color="blue-gray">
                Material Tailwind
              </Typography>
            </a>

            {showSidebar == "-left-0" ? (
              <IconButton
                size="sm"
                color="blue-gray"
                variant="text"
                onClick={() => setShowSidebar("-left-0")}
                className="ml-auto mr-2"
              >
                <Bars2Icon className="h-6 w-6" />
              </IconButton>
            ) : (
              <IconButton
                size="sm"
                color="blue-gray"
                variant="text"
                onClick={() => setShowSidebar("-left-64")}
                className="ml-auto mr-2 lg:hidden"
              >
                <XMarkIcon className="h-6 w-6" />
              </IconButton>
            )}
          </div>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              {sidebarRoutes?.map((item, index) => (
                <li key={index} className="rounded-lg mb-4">
                  <Link
                    href={item.href}
                    exact
                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
