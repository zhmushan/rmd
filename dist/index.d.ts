import React from "react";
declare type PropsWithSrc = {
    src: string;
    children?: undefined;
};
declare type PropsWithChildren = {
    src?: undefined;
} & React.PropsWithChildren<{}>;
export declare function Markdown({ src, children }: PropsWithSrc | PropsWithChildren): JSX.Element;
export {};
