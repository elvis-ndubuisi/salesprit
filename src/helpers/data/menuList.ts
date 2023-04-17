import homeIcon from "../assets/icons/home.svg"
import dashboardIcon from "../assets/icons/dashboard.svg"
import orderIcon from "../assets/icons/order.svg"
import productIcon from "../assets/icons/product.svg"
import notificationIcon from "../assets/icons/notification.svg"
import customersIcon from "../assets/icons/customer.svg"
import messageIcon from "../assets/icons/message.svg"
import settingIcon from "../assets/icons/setting.svg"

export type Menu = {
    title: string
    icon: string
    uri: string
}

const menuList: Menu[] = [
    {
        title: "home",
        icon: homeIcon,
        uri: "/",
    },
    {
        title: "dashboard",
        icon: dashboardIcon,
        uri: "dashboard",
    },
    {
        title: "order",
        icon: orderIcon,
        uri: "order",
    },
    {
        title: "product",
        icon: productIcon,
        uri: "product",
    },
    {
        title: "notification",
        icon: notificationIcon,
        uri: "notification",
    },
    {
        title: "customers",
        icon: customersIcon,
        uri: "customers",
    },
    {
        title: "message",
        icon: messageIcon,
        uri: "message",
    },
    {
        title: "setting",
        icon: settingIcon,
        uri: "setting",
    },
]

export default menuList
