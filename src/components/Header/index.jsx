import React from 'react';
import { Button, Row, Col } from 'antd';
import styles from './styles.module.less';

export const Header = () => {
  return (
    <Row className={styles.contain}>
      <Col span="20"></Col>
      <Col span="4" className={styles.user}>
        <span className={styles.userName}>欢迎，Joan</span>
        <Button>退出</Button>
      </Col>
    </Row>
  );
};
