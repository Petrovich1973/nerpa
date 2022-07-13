import React from "react";
import {Button, Space} from "antd";
import {NavLink} from "react-router-dom";

const Component = () => {
    return (
        <>
            <div className={'sub-navigation'}>
                <NavLink to={'/mailing/incident-prom'} className={({isActive}) => (isActive ? 'active' : undefined)}>
                    Инцидент в ПРОМ
                </NavLink>
                <NavLink to={'/mailing/implementation'} className={({isActive}) => (isActive ? 'active' : undefined)}>
                    Внедрение
                </NavLink>
            </div>
            <div className={'scroll-box'} style={{padding: '20px 100px', height: '100%'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    height: '50%',
                    maxWidth: 1400,
                    margin: '0 auto'
                }}>
                    <Space size={40} style={{alignItems: "flex-start"}}>
                        <div>
                            <Button size="large" onClick={() => null}>
                                Быстрый сбор
                            </Button>
                            <div style={{marginTop: 10, lineHeight: 1.2}}>
                                <small>
                                Используется в случаи необходимости создания встречи, на которой планируется определить
                                область инцедента и круг ответственности...
                                </small>
                            </div>
                        </div>
                        <div>
                            <Button type="default" size="large" onClick={() => null}>
                                по АС
                            </Button>
                            <div style={{marginTop: 10, lineHeight: 1.2}}>
                                <small>
                                Используете инструмент поиска с автодополнением.
                                Это ускорит процесс создания оповещения.
                                </small>
                            </div>
                        </div>
                        <div>
                            <Button type="default" size="large" onClick={() => null}>
                                по ФП
                            </Button>
                            <div style={{marginTop: 10, lineHeight: 1.2}}>
                                <small>
                                Для поиска искомого можно ввести КЭ автоматизированной системы или фп.
                                </small>
                            </div>
                        </div>
                        <div>
                            <Button type="default" size="large" onClick={() => null}>
                                по Инфраструктуре
                            </Button>
                            <div style={{marginTop: 10, lineHeight: 1.2}}>
                                <small>
                                Создание оповещения по выбранной области инраструктуры позволяет использовать
                                предустановленный список участников встречи требуемой зоны ответственности.
                                </small>
                            </div>
                        </div>
                    </Space>
                </div>
            </div>
        </>
    )
}

export default Component
