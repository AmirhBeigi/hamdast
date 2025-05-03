/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon34Icon(props: Icon34IconProps) {
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
        "lucide lucide-feather-icon lucide-feather"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.67 19a2 2 0 001.416-.588l6.154-6.172a6 6 0 00-8.49-8.49L5.586 9.914A2 2 0 005 11.328V18a1 1 0 001 1zM16 8L2 22m15.5-7H9"
        }
      ></path>
    </svg>
  );
}

export default Icon34Icon;
/* prettier-ignore-end */
