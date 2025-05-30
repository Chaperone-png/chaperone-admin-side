"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLeaf, FaTree, FaBox } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Dashboard",
      items: [
        { name: "Overview", icon: <MdSpaceDashboard />, path: "/dashboard" },
      ],
    },
    {
      title: "Inventory",
      items: [
        { name: "Plant", icon: <FaTree />, path: "/inventory/plants" },
        { name: "Pot", icon: <FaBox />, path: "/inventory/pots" },
      ],
    },
    {
      title: "Master Data",
      items: [
        { name: "Plant", icon: <FaTree />, path: "/masterdata/plants" },
        { name: "Pot", icon: <FaBox />, path: "/masterdata/pots" },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-green-100 text-black min-h-screen px-4 py-6 shadow-md">
      {navItems.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                    pathname.includes(item.path)
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-200"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
