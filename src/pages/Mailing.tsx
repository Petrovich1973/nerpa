import React from "react";
import {NotificationOutlined, InfoCircleOutlined} from "@ant-design/icons";
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {Button, Space} from 'antd'
import {Link, useRoutes, useParams, useLocation, Route, Routes, Outlet} from "react-router-dom";

import StartScreen from '../components/Mailing/StartScreen'
import IncidentProm from "../components/Mailing/IncidentProm";
import Implementation from "../components/Mailing/Implementation";

const Component = () => {
    let {pathname} = useLocation()
    const [checked, setChecked] = React.useState(true);
    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(!checked)
    }
    return (
        <main>
            <div className={'main-header'}>
                <div className={'menu-header-title'}>
                    <NotificationOutlined style={{fontSize: 24, marginRight: 16, marginTop: 4}}/>
                    <div className={'menu-header-title-label'}>
                        <div className={'menu-header-title-name'}>Оповещение</div>
                        <small className={"menu-header-title-description"}>
                            Дежурный может быстро собрать группу разбора
                        </small>
                    </div>
                </div>
                <div className={'menu-header-controls'}>
                    <div>
                        <Checkbox onChange={onChange} checked={checked}>Только по моей группе</Checkbox>
                    </div>
                </div>
            </div>
            <Routes>
                <Route
                    element={<Outlet/>}
                >
                    <Route
                        path={``}
                        element={<StartScreen/>}
                    />
                    <Route
                        path={`incident-prom`}
                        element={<IncidentProm/>}
                    />
                    <Route
                        path={`implementation`}
                        element={<Implementation/>}
                    />
                </Route>

            </Routes>
        </main>
    )
}

export default Component
