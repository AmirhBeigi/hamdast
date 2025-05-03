/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#0ULoNFdF_OZVa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0z"
          }
          fill={"url(#0ULoNFdF_OZVb)"}
        ></path>
      </g>

      <defs>
        <linearGradient
          id={"0ULoNFdF_OZVb"}
          x1={"100"}
          y1={"0"}
          x2={"100"}
          y2={"200"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#A7B5FF"}></stop>

          <stop offset={"1"} stopColor={"#F3ACFF"}></stop>
        </linearGradient>

        <clipPath id={"0ULoNFdF_OZVa"}>
          <path fill={"#fff"} d={"M0 0h200v200H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
