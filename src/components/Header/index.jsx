import React from 'react';
import { Button, Row, Col } from 'antd';
import styles from './styles.module.less';

export const Header = () => {
  return (
    <div>
      <Row className={styles.userWrap}>
        <Col span="20"></Col>
        <Col span="4" className={styles.user}>
          <span className={styles.userName}>欢迎，Joan</span>
          <Button>退出</Button>
        </Col>
      </Row>
      <Row className={styles.header}>
        <Col span="4" className={styles.breadcrumb}>
          首页
        </Col>
        <Col span="20" className={styles.weather}>
          天气
        </Col>
      </Row>
    </div>
  );
};
