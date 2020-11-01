import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuConfig } from '../../config/menuConfig';
import styles from './styles.module.less';

const { SubMenu } = Menu;
const onRenderMenu = (item) => {
  if (item.children) {
    return (
      <SubMenu key={item.key} title={item.title}>
        {item.children.map((child) => (
          <Menu.Item key={child.key}>
            <Link to={child.key}>{child.title}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
    );
  } else {
    return (
      <Menu.Item key={item.key}>
        <Link to={item.key}>{item.title}</Link>
      </Menu.Item>
    );
  }
};

export const NavLeft = () => {
  return (
    <div className={styles.contain}>
      <Menu mode="inline">{MenuConfig.map((item) => onRenderMenu(item))}</Menu>
    </div>
  );
};
