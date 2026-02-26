/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon57Icon(props: Icon57IconProps) {
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
        "lucide lucide-user-round-check-icon lucide-user-round-check"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M2 21a8 8 0 0 1 13.292-6"}></path>

      <circle cx={"10"} cy={"8"} r={"5"}></circle>

      <path d={"m16 19 2 2 4-4"}></path>
    </svg>
  );
}

export default Icon57Icon;
/* prettier-ignore-end */
