import React from "react";
import {
    AlertOutlined, FallOutlined, NotificationOutlined, ReadOutlined,
    ReconciliationOutlined, RobotOutlined,
    RocketOutlined,
    ScheduleOutlined,
    SettingOutlined
} from "@ant-design/icons";
import Working from './pages/Working'
import Releases from './pages/Releases'
import Planning from './pages/Planning'
import Schedule from './pages/Schedule'
import Incidents from './pages/Incidents'
import Mailing from './pages/Mailing'
import Reports from './pages/Reports'
import RemovingLoad from './pages/RemovingLoad'
import AutomaticJob from './pages/AutomaticJob'

const style = {fontSize: 24, margin: '0 20px'}

export const routes = [
    {
        path: '/working',
        link: '/working',
        element: <Working/>,
        title: 'Внедрения/Работы',
        icon: <SettingOutlined style={style}/>
    },
    {
        path: '/releases',
        link: '/releases',
        element: <Releases/>,
        title: 'Релизы',
        icon: <RocketOutlined style={style}/>
    },
    {
        path: '/planning',
        link: '/planning',
        element: <Planning/>,
        title: 'Планирование выходных',
        icon: <ReconciliationOutlined style={style}/>
    },
    {
        path: '/schedule',
        link: '/schedule',
        element: <Schedule/>,
        title: 'График',
        icon: <ScheduleOutlined style={style}/>
    },
    {
        path: '/incidents',
        link: '/incidents',
        element: <Incidents/>,
        title: 'Инциденты',
        icon: <AlertOutlined style={style}/>
    },
    {
        path: '/mailing/*',
        link: '/mailing',
        element: <Mailing/>,
        title: 'Оповещение',
        icon: <NotificationOutlined style={style}/>
    },
    {
        path: '/reports',
        link: '/reports',
        element: <Reports/>,
        title: 'Отчеты',
        icon: <ReadOutlined style={style}/>
    },
    {
        path: '/removing-load',
        link: '/removing-load',
        element: <RemovingLoad/>,
        title: 'Снятие нагрузки',
        icon: <FallOutlined style={style}/>
    },
    {
        path: '/automatic-job',
        link: '/automatic-job',
        element: <AutomaticJob/>,
        title: 'Автоматическое заведение работ',
        icon: <RobotOutlined style={style}/>
    },
]
