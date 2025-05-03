/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon29Icon(props: Icon29IconProps) {
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
        "lucide lucide-calendar-days"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M8 2v4m8-4v4"}></path>

      <rect width={"18"} height={"18"} x={"3"} y={"4"} rx={"2"}></rect>

      <path
        d={"M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"}
      ></path>
    </svg>
  );
}

export default Icon29Icon;
/* prettier-ignore-end */
