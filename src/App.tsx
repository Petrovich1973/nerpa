import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import './App.css'
import Menu from "./components/Menu";
import Header from "./components/Header";
import {routes} from './routes'
import {IRoute} from './interfaces'

const App = () => {

    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <section className={'layout'}>
            <Header onClick={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
            <section>
                <aside className={'sidebar'} data-hide={collapsed}>
                    <Menu/>
                </aside>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/incidents" />}
                    />
                    {routes.map((route: IRoute, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))}
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "20px"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </section>
        </section>
    );
}

export default App;
