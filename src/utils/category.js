import { useID } from "../hooks/useID";
import { FiUsers } from "react-icons/fi";
import {
    AiOutlineMenu,
    AiOutlineSetting,
    AiOutlineDashboard,
} from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";

export const category = [
    {
        id: useID,
        title: "Dashboard",
        icon: AiOutlineDashboard,
        path: "/admin/dashboard",
    },
    {
        id: useID,
        title: "Users",
        icon: FiUsers,
        path: "/admin/users",
    },
    {
        id: useID,
        title: "Menus",
        icon: AiOutlineMenu,
        path: "/admin/menus",
    },
    {
        id: useID,
        title: "Settings",
        icon: AiOutlineSetting,
        path: "/admin/settings",
    },
    {
        id: useID,
        title: "News UZ",
        icon: BsNewspaper,
        path: "/admin/news-uz",
    },
    {
        id: useID,
        title: "News RU",
        icon: BsNewspaper,
        path: "/admin/news-ru",
    },
    {
        id: useID,
        title: "News EN",
        icon: BsNewspaper,
        path: "/admin/news-en",
    },
];
