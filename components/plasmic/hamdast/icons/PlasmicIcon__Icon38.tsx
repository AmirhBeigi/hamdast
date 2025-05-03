/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-app-window-icon lucide-app-window"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>

      <path d={"M10 4v4M2 8h20M6 4v4"}></path>
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
