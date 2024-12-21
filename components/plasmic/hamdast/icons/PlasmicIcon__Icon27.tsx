// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
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

      <g clipPath={"url(#rN4Y0I3VxNK4a)"}>
        <mask
          id={"rN4Y0I3VxNK4b"}
          style={{
            maskType: 'luminance"',
          }}
          maskUnits={"userSpaceOnUse"}
          x={"0"}
          y={"0"}
          width={"200"}
          height={"200"}
        >
          <path d={"M200 0H0v200h200V0z"} fill={"#fff"}></path>
        </mask>

        <g mask={"url(#rN4Y0I3VxNK4b)"}>
          <path
            fillRule={"evenodd"}
            clipRule={"evenodd"}
            d={
              "M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0z"
            }
            fill={"#000"}
          ></path>
        </g>
      </g>

      <defs>
        <clipPath id={"rN4Y0I3VxNK4a"}>
          <path fill={"#fff"} d={"M0 0h200v200H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */
