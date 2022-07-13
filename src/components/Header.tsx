import React from "react";
import {MenuOutlined, CloseOutlined, LeftOutlined} from '@ant-design/icons';
import {ReactComponent as AppLogo} from '../svg/logo.svg';

interface IProps {
    onClick: () => void;
    collapsed: boolean;
}

const Component = ({collapsed, onClick}: IProps) => (
    <header>
        <div className={'hamburger'} onClick={onClick}>
            {collapsed ? <MenuOutlined style={{fontSize: '24px'}}/> : <LeftOutlined style={{fontSize: '24px'}}/>}
        </div>
        <div className={collapsed ? 'app-logo' : 'app-logo aside-show'}>
            <AppLogo/>
        </div>
        <h1 className={'app-title'}>НЕРПА <small>Новое единое рабочее пространство администратора (версия 1.0.0)</small></h1>
    </header>
)

export default Component
