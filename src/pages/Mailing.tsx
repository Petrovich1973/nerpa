import React from "react";
import {NotificationOutlined, InfoCircleOutlined} from "@ant-design/icons";
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import { Button, Space } from 'antd'

const Component = () => {
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
            <div className={'scroll-box'} style={{padding: '20px 100px', height: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", height: '70%'}}>
                    <Space size={40}>
                    <Button size="large" onClick={() => null}>
                        Инцидент в ПРОМ
                    </Button>
                    <Button type="default" size="large" onClick={() => null}>
                        Внедрение
                    </Button>
                    </Space>
                    <p style={{display: 'flex', width: 500, flexDirection: 'column', alignItems: "center", justifyContent: "center", marginTop: 20}}>
                        <span><InfoCircleOutlined /> Выбери для продолжения создания оповещения.</span>
                        <small style={{textAlign: "center", lineHeight: 1, marginTop: 10, opacity: 0.7}}>
                            В зависимости от выбора сценария, будут предложены
                            соответствующие шаги и шаблон формы оповещения.
                        </small>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Component
