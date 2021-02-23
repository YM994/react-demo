import React, {Component} from 'react';
import './index.less';
import { Menu } from 'antd';
const { SubMenu } = Menu;
class Index extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <h1>ECS2.0</h1>
                </div>
                <Menu theme="dark" defaultOpenKeys={['sub5','sub5-2']}  mode="inline">
                    <Menu.Item key="1">总览</Menu.Item>
                    <Menu.Item key="2">租户中心</Menu.Item>
                    <Menu.Item key="3">个人中心</Menu.Item>
                    <SubMenu key="sub4" title={"服务"}>
                        <Menu.Item key="4">访问API</Menu.Item>
                        <Menu.Item key="5">配额管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={"产品"}>
                        <SubMenu key="sub5-2" title={"云控制台"}>
                            <SubMenu key="sub5-2-1" title={"计算"}>
                                <Menu.Item key="6">Node</Menu.Item>
                                <Menu.Item key="7">Pod</Menu.Item>
                                <Menu.Item key="8">Kvm</Menu.Item>
                                <Menu.Item key="9">Deployment</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5-2-2" title={"存储"}>
                                <Menu.Item key="10">ConfigMap</Menu.Item>
                                <Menu.Item key="11">PersistenVolumeClaims</Menu.Item>
                                <Menu.Item key="12">VolumeSnapshot</Menu.Item>
                                <Menu.Item key="13">StorageClass</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5-2-3" title={"网络"}>
                                <Menu.Item key="14">service</Menu.Item>
                                <Menu.Item key="15">location</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5-2-4" title={"K8s集群管理"}>
                                <Menu.Item key="16">集群管理</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Index;