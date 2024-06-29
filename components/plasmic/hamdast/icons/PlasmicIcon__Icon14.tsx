// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      preserveAspectRatio={"xMidYMid meet"}
      style={{
        width: "100%",
        height: "100%",
        contentVisibility: 'visible"',

        ...(style || {}),
      }}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <clipPath id={"OM3DJjEn72aXb"}>
          <path d={"M0 0h512v512H0z"}></path>
        </clipPath>

        <path
          fill={"red"}
          fillOpacity={"1"}
          d={
            "M163.03 112.34s-90.77 39.45-127.64 57.94C16.86 179.57 6.84 180.8.65 180.67c-6.19-.13-15.81-1.31-33.61-9.96-39.4-19.14-107.62-47-129.02-57.79-14.66-5.58-31.79-21.35-16.1-48.56l148.17-225.27c16.26-28.38 44.46-28.15 60.64.14L178.19 64.59c16.91 26.92-3.71 43.64-15.16 47.75z"
          }
          transform={"matrix(1.0049 0 0 1.11185 256 234.802)"}
          opacity={"1"}
          display={"block"}
          id={"OM3DJjEn72aXa"}
        ></path>

        <mask id={"OM3DJjEn72aXc"} maskType={"alpha"}>
          <use xlinkHref={"#OM3DJjEn72aXa"}></use>
        </mask>
      </defs>

      <g clipPath={"url(#OM3DJjEn72aXb)"}>
        <path
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          stroke={"#000"}
          strokeOpacity={"1"}
          strokeWidth={"30.72"}
          d={
            "M162.34 113.75S76.33 146.8 35.53 162.29C16.96 170.05 9.08 171.1.79 171c-8.18-.1-15.75-1.19-33.6-8.41-43.49-16.01-107.25-39.15-128.51-48.28-15.13-5.41-32.31-21.69-16.63-48.87l147.94-225.78c16.23-28.33 44.73-28.1 60.87.14L178.07 65.67c16.85 26.9-3.73 44.09-15.73 48.08z"
          }
          fill={"none"}
          transform={"matrix(1.0049 0 0 1.11185 256 234.802)"}
          opacity={"1"}
          display={"block"}
        ></path>

        <g opacity={"1"} mask={"url(#OM3DJjEn72aXc)"} display={"block"}>
          <path
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            stroke={"#000"}
            strokeOpacity={"1"}
            strokeWidth={"30.72"}
            d={
              "M-.02 177.62l-174.06-69.48M.25-175.1L0 165.77m0 11.85l175.71-69.38"
            }
            fill={"none"}
            transform={"matrix(1.0049 0 0 1.11185 256 234.802)"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
