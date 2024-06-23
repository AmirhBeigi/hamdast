// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 100 100"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle fill={"currentColor"} cx={"6"} cy={"50"} r={"6"}>
        <animateTransform
          attributeName={"transform"}
          dur={"1s"}
          type={"translate"}
          values={"0 15 ; 0 -15; 0 15"}
          repeatCount={"indefinite"}
          begin={".1"}
        ></animateTransform>
      </circle>

      <circle fill={"currentColor"} cx={"30"} cy={"50"} r={"6"}>
        <animateTransform
          attributeName={"transform"}
          dur={"1s"}
          type={"translate"}
          values={"0 10 ; 0 -10; 0 10"}
          repeatCount={"indefinite"}
          begin={".2"}
        ></animateTransform>
      </circle>

      <circle fill={"currentColor"} cx={"54"} cy={"50"} r={"6"}>
        <animateTransform
          attributeName={"transform"}
          dur={"1s"}
          type={"translate"}
          values={"0 5 ; 0 -5; 0 5"}
          repeatCount={"indefinite"}
          begin={".3"}
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
