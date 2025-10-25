/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon54Icon(props: Icon54IconProps) {
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
        "lucide lucide-qr-code-icon lucide-qr-code"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"5"} height={"5"} x={"3"} y={"3"} rx={"1"}></rect>

      <rect width={"5"} height={"5"} x={"16"} y={"3"} rx={"1"}></rect>

      <rect width={"5"} height={"5"} x={"3"} y={"16"} rx={"1"}></rect>

      <path
        d={
          "M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"
        }
      ></path>
    </svg>
  );
}

export default Icon54Icon;
/* prettier-ignore-end */
