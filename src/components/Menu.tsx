import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {IRoute} from '../interfaces'
import {routes} from '../routes'


const Component: React.FC = () => {

    return (
        <div className={'menu-aside scroll-box'}>
            {routes
                .map((item: IRoute, index) => (
                    <NavLink
                        key={index}
                        to={item.link}
                        className={({ isActive }) => (isActive ? 'active' : undefined)}>
                        {item.icon}
                        <span className={'menu-aside-item-title'}>{item.title}</span>
                    </NavLink>
                ))}
        </div>
    );
};

export default Component;
