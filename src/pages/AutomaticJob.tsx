import React from "react";
import {Checkbox} from 'antd';
import type {CheckboxChangeEvent} from 'antd/es/checkbox';
import {RobotOutlined} from "@ant-design/icons";

const Component = () => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`)
    }
    return (
        <main>
            <div className={'main-header'}>
                <div className={'menu-header-title'}>
                    <RobotOutlined style={{fontSize: 24, marginRight: 16, marginTop: 4}}/>
                    <div className={'menu-header-title-label'}>
                        <div className={'menu-header-title-name'}>Автоматическое заведение работ</div>
                        <small className={"menu-header-title-description"}>
                            Дежурный может быстро собрать группу разбора
                        </small>
                    </div>
                </div>
                <div className={'menu-header-controls'}>
                    <div>
                        <Checkbox onChange={onChange}>Только по моей группе</Checkbox>
                    </div>
                </div>
            </div>
            <div className={'scroll-box'} style={{padding: '20px 100px'}}>
                content
            </div>
        </main>
    )
}

export default Component
