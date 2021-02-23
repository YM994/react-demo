import React, {Component} from 'react';
import './index.less';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
const { SubMenu } = Menu;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    // 刷新挂载组件
    componentDidMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <h1>ECS2.0</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['/home']} defaultOpenKeys={['/home/product','/home/product/control']}  mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default Index;