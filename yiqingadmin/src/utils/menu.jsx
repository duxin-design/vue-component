const menus = [
    {
        id: 1,
        title: "首页",
        icon: "fund",
        url: "/collectData",
    },
    {
        id: 2,
        title: "疫情管理",
        icon: "bank",
        children: [{
            id: 3,
            title: "自查上报",
            url: "/selfreport",
        }, {
            id: 4,
            title: "线索上报",
            url: "/purchaseCertificate",
        }]
    }, {
        id: 5,
        title: "用户中心",
        icon: "user",
        url: "/purchaseCertificate",
    }
]


export default menus