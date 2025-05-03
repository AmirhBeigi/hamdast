/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
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
        "lucide lucide-settings-2"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M20 7h-9m3 10H5"}></path>

      <circle cx={"17"} cy={"17"} r={"3"}></circle>

      <circle cx={"7"} cy={"7"} r={"3"}></circle>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
