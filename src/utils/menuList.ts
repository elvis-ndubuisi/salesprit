import { ReactNode } from "react"
import { BsFillGridFill } from "react-icons/bs"
import { HiHome } from "react-icons/hi2"
import { MdNotifications } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { IoSend, IoSettings } from "react-icons/io5"

export type Menu = {
    title: string
    icon: () => ReactNode
    uri: string
}

const menuList: Menu[] = [
    {
        title: "home",
        icon: "",
        uri: "/pos/",
    },
    {
        title: "dashboard",
        icon: "icon",
        uri: "dashboard",
    },
    {
        title: "order",
        icon: "icon",
        uri: "order",
    },
    {
        title: "product",
        icon: "icon",
        uri: "product",
    },
    {
        title: "notification",
        icon: "icon",
        uri: "notification",
    },
    {
        title: "customers",
        icon: "icon",
        uri: "customers",
    },
    {
        title: "message",
        icon: "icon",
        uri: "message",
    },
    {
        title: "setting",
        icon: "icon",
        uri: "setting",
    },
]

export default menuList
