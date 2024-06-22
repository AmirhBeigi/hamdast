// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 26 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.25 12.109a4.944 4.944 0 004.94-4.938 4.944 4.944 0 00-4.94-4.94 4.944 4.944 0 00-4.938 4.94 4.943 4.943 0 004.938 4.938z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.77 19.391c-1.017-3.213-3.747-5.054-7.493-5.054h-.027c-3.757-.02-6.501 1.833-7.52 5.054l-.117.374.334.204c1.958 1.194 4.4 1.8 7.256 1.8h.095c2.896 0 5.27-.59 7.255-1.8l.334-.204-.117-.374z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
