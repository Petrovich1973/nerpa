import * as React from "react";

export interface IRoute {
    path: string;
    title: string;
    icon: React.ReactNode;
    element: React.ReactNode;
}
