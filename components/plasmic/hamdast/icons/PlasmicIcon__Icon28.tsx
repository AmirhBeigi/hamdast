/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon28Icon(props: Icon28IconProps) {
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

      <g clipPath={"url(#GP6cY2nLAhjTa)"}>
        <mask
          id={"GP6cY2nLAhjTb"}
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

        <g mask={"url(#GP6cY2nLAhjTb)"}>
          <path
            fillRule={"evenodd"}
            clipRule={"evenodd"}
            d={
              "M0 0h50v50H0V0zm100 50H50v50H0v50h50v50h50v-50h50v50h50v-50h-50v-50h50V50h-50V0h-50v50zm0 50h50V50h-50v50zm0 0v50H50v-50h50z"
            }
            fill={"#EAEAEA"}
          ></path>
        </g>
      </g>

      <defs>
        <clipPath id={"GP6cY2nLAhjTa"}>
          <path fill={"#fff"} d={"M0 0h200v200H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon28Icon;
/* prettier-ignore-end */
