export type Menu = {
    title: string
    icon: string
    uri: string
}

const menuList: Menu[] = [
    {
        title: "home",
        icon: "icon",
        uri: "pos/",
    },
    {
        title: "dashboard",
        icon: "icon",
        uri: "pos/dashboard",
    },
    {
        title: "order",
        icon: "icon",
        uri: "pos/order",
    },
    {
        title: "product",
        icon: "icon",
        uri: "pos/product",
    },
    {
        title: "notification",
        icon: "icon",
        uri: "pos/notification",
    },
    {
        title: "customers",
        icon: "icon",
        uri: "pos/customers",
    },
    {
        title: "message",
        icon: "icon",
        uri: "pos/message",
    },
    {
        title: "setting",
        icon: "icon",
        uri: "pos/setting",
    },
]

export default menuList
