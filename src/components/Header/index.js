import React, {Component} from 'react';
import {Col,Row} from 'antd';
import './index.less'
class Index extends Component {
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，W9008770</span>
                        {/*<a onClick={this.onLogout}>退出</a>*/}
                    </Col>
                </Row>

                {/*<Row className="breadcrumb">*/}
                {/*    <Col span="4" className="breadcrumb-title">*/}
                {/*        首页*/}
                {/*    </Col>*/}
                {/*    <Col span="20" className="breadcrumb-detail">*/}
                {/*        <span className="date">{this.state.sysTime}</span>*/}
                {/*        <span className="weather-img">*/}
                {/*            <img src={this.state.dayPictureUrl} alt=""/>*/}
                {/*        </span>*/}
                {/*        <span className="weather-detail">{this.state.weather}</span>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        );
    }
}

export default Index;