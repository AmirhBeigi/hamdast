/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon51Icon(props: Icon51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg plasmic_all__8cMMc PlasmicLanding_svg__fxw11"
      )}
      role={"img"}
      viewBox={"0 0 200 200"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <mask
          id={"b"}
          width={"200"}
          height={"200"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
          style={{
            maskType: 'luminance\\"\\""',
          }}
        >
          <path fill={"#fff"} d={"M200 0H0v200h200z"}></path>
        </mask>

        <g mask={"url(#b)"}>
          <path
            fill={"currentColor"}
            fillRule={"evenodd"}
            d={
              "M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716z"
            }
            clipRule={"evenodd"}
          ></path>
        </g>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h200v200H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon51Icon;
/* prettier-ignore-end */
