/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon33Icon(props: Icon33IconProps) {
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
        "lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 18H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v5m-6 6l3 3 3-3m-4-7h.01m.99 4v6M6 12h.01"
        }
      ></path>

      <circle cx={"12"} cy={"12"} r={"2"}></circle>
    </svg>
  );
}

export default Icon33Icon;
/* prettier-ignore-end */
