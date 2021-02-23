import React, {Component} from 'react';
import './style/common.less';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft/index';
class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left"><NavLeft/></Col>
                <Col span={20} className="main">
                    <Row>
                        头部区域
                    </Row>
                    <Row>
                        内容区域
                    </Row>
                    <Row>
                        尾部区域
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Admin;