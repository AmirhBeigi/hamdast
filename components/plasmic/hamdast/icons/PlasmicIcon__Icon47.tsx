/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon47Icon(props: Icon47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-layout-template-icon lucide-layout-template"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"18"} height={"7"} x={"3"} y={"3"} rx={"1"}></rect>

      <rect width={"9"} height={"7"} x={"3"} y={"14"} rx={"1"}></rect>

      <rect width={"5"} height={"7"} x={"16"} y={"14"} rx={"1"}></rect>
    </svg>
  );
}

export default Icon47Icon;
/* prettier-ignore-end */
