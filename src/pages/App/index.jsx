import React from 'react';
import { Row, Col } from 'antd';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { NavLeft } from '../../components/NavLeft';
import 'antd/dist/antd.less';
import styles from './styles.module.less';

export const App = (props) => {
  console.log('props', props);

  return (
    <Row className={styles.contain}>
      <Col span="3">
        <NavLeft />
      </Col>
      <Col span="21">
        <Header />
        <div className={styles.main}>
          {props.children}
        </div>
        <Footer />
      </Col>
    </Row>
  );
};
