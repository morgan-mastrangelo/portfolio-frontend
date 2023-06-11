import React from "react";
import '../styles/footer.css';
import { Col, Row } from "antd";

function Footer() {
    return (
        <Row className={'footer'}>
            <Col sm={24} md={12}>
                <p>@copyright 2023, made by Morgan</p>
            </Col>
            <Col sm={24} md={12} style={{textAlign:'right', paddingRight:32}}>
                <p>morgan172cm@gmail.com</p>
            </Col>
        </Row>
    )
}

export default Footer;