import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Menu, Icon} from "antd";
import config from "../utils/menu";

const SubMenu = Menu.SubMenu;

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    /**
     * 创建菜单
     * @param menu
     */
    createMenu(menu) {
        const childMenuData = menu.children;
        let childMenu = <div className="list-ul"></div>;
        if (childMenuData && childMenuData.length) {
            childMenu = childMenuData.map((item) => {
                return this.createMenu(item)
            });

            return <SubMenu key={menu.id} title={<span>
                <Icon type={menu.icon}/>
                {menu.title}
            </span>}>
                {childMenu}
            </SubMenu>
        } else {
            return <Menu.Item key={menu.id}><NavLink to={menu.url}><Icon
                type={menu.icon}/>{menu.title}</NavLink></Menu.Item>
        }
    }
    render(){
        return <div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{height:"100%",borderRight:0}}>
                {
                    config.map((item)=>{
                        console.log(item);
                        return this.createMenu(item)
                    })
                }
            </Menu>
        </div>
    }
}

export default MenuList