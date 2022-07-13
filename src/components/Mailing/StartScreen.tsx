import React from 'react'
import {useNavigate} from "react-router-dom";
import {Button, Space} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";

const Component = () => {
    const navigate = useNavigate()
    return (
        <div className={'scroll-box'} style={{padding: '20px 100px', height: '100%'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center",
                height: '60%'
            }}>
                <Space size={40}>
                    <Button size="large" onClick={() => navigate('incident-prom')}>
                        Инцидент в ПРОМ
                    </Button>
                    <Button type="default" size="large" onClick={() => navigate('implementation')}>
                        Внедрение
                    </Button>
                </Space>
                <p style={{
                    display: 'flex',
                    width: 500,
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20
                }}>
                    <span><InfoCircleOutlined/> Выбери для продолжения создания оповещения.</span>
                    <small style={{textAlign: "center", lineHeight: 1, marginTop: 10, opacity: 0.7}}>
                        В зависимости от выбора сценария, будут предложены
                        соответствующие шаги и шаблон формы оповещения.
                    </small>
                </p>
            </div>
        </div>
    )
}

export default Component
