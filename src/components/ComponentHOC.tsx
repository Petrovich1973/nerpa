import React from 'react';
interface IProps {
    component: React.ReactNode;
    props?: any
}
const Component = ({component, props}: IProps) => {

    return component
};

export default Component;
