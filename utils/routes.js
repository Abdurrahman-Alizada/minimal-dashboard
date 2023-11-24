import {Cog8ToothIcon, Bars2Icon, UsersIcon, HomeIcon } from "@heroicons/react/24/solid";

export const sidebarRoutes = [
  {
    href: "/",
    title: "Dashboard",
    icon : <HomeIcon className="h-6 w-6" />
},
  {
    href: "/customers",
    title: "Customers",
    icon : <UsersIcon className="h-6 w-6" />
  },
  
];
