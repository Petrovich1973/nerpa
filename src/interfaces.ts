import * as React from "react";

export interface IRoute {
    path: string;
    link: string;
    title: string;
    icon: React.ReactNode;
    element: React.ReactNode;
}
