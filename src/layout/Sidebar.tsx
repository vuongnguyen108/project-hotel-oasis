import clsx from "clsx";
import { NavLink } from "react-router-dom";

const menus = [
    { path: "/", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/bookings", label: "Bookings" },
    { path: "/cabins", label: "Cabins" },
];

export const Sidebar = () => {
    return (
        <div className="h-screen bg-blue-800 w-64">
            <h1 className="p-4 text-3xl font-bold">Admin</h1>
            <nav className="flex flex-col gap-2 px-4">
                {menus.map((menu) => (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            clsx("w-full text-left px-4 py-3 rounded-lg", isActive ? "bg-blue-600 text-white" : " hover:bg-gray-800  ")
                        }
                    >
                        {menu.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};
