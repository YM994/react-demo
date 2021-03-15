import React, {Component} from 'react';
import { Tabs,Card  } from 'antd';
import Tenant from './tenant-manage/index'
const { TabPane } = Tabs;
const Index = () => (
    <Card style={{ width: '100%' }}>
        <Tabs defaultActiveKey="2">
            <TabPane tab="基本信息" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="租户管理" key="2">
                <Tenant/>
            </TabPane>
            <TabPane tab="项目管理" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </Card>
);
export default Index;